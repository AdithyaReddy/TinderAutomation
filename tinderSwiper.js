function setTimeoutWrapper(cb, ms) {
    return new Promise(resolve => {
        setTimeout(() => {
            cb();
            resolve();
        }, ms)
    });
}
async function swiper() {
    console.log(document.querySelector('.recCard__img'));
    document.querySelector('.recCard__img').click();
    await setTimeoutWrapper(function() { console.log('waiting'); }, 500);
    var carouselLength = document.querySelectorAll('.bullet').length;
    var description = document.querySelector('.profileCard__bio span');
    var descriptionLen = description ? description.innerHTML.trim().length : 0;
    var rightSwiper = document.querySelectorAll('.pageButton')[1];

    if (carouselLength === 0 && descriptionLen === 0) {
        document.querySelector('.recsGamepad__button--dislike').click();
        return;
    }
    while(carouselLength--) {
        await setTimeoutWrapper(function() {
            rightSwiper.click();
        }, Math.floor(Math.random() * 700) + 300);
    }
    await setTimeoutWrapper(function() { console.log('waiting'); }, 1000);
    var profileCard = document.querySelector('.profileCard__card');
    var cardHeight = profileCard.getBoundingClientRect().height;
    profileCard.scrollTop = cardHeight;
    await setTimeoutWrapper(function() { console.log('reading'); }, 1000);
    

    document.querySelector('.recsGamepad__button--like').click();
    console.log('End');
}

async function tinderSwiper() {
    await setTimeoutWrapper(swiper, Math.floor(Math.random() * 2000) + 1000);
    tinderSwiper();
}
