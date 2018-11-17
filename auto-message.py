import requests

fetchMatchesEndpoint = "https://api.gotinder.com/v2/matches"
messageMatchEndpoint = "https://api.gotinder.com/user/matches/"

fetchParams = {'count': 100, 'is_tinder_u': 'false', 'message': 1}
headers = { 'Accept':'application/json',
            'Content-Type': 'application/json',
            'Origin': 'https://tinder.com',
            'app-version':'1020321',
            'platform':'web',
            'Referer':'https://tinder.com/',
            'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36',
            'X-Auth-Token':'44b3be54-d773-4e21-b4bc-1535fe0c769c',
            'x-supported-image-formats':'webp,jpeg'
        }


next_page_token = ''
orderedfinalMatchList = []

while next_page_token != None:
    if next_page_token != '':
        fetchParams['page_token'] = next_page_token
    matchesApiResponse = requests.get(url = fetchMatchesEndpoint, params = fetchParams, headers = headers)
    data = matchesApiResponse.json()['data']
    matches = data['matches']
    orderedfinalMatchList = orderedfinalMatchList + matches
    if 'next_page_token' in data:
        next_page_token =  data['next_page_token']
    else:
        next_page_token = None

reversedFinalMatchList = orderedfinalMatchList[::-1]

for match in reversedFinalMatchList:

    matchId = match['id']
    person = match['person']
    personName = person['name']

    print('sending message to ' + personName + ' ................')
    body = {}
    body['matchId'] = matchId
    body['message'] = 'Hey ' + personName + ' :) \n How are you doing?'
    body['tempMessageId'] = '0.07054938870864036'
    body['userId'] = '547f53c15e87266642a92524'

    url = messageMatchEndpoint + matchId + '?locale=en-GB'
    messageApiResponse = requests.post(url = url, json = body, headers = headers)
    print('Message successfully sent ................')

print('Good Game :)')