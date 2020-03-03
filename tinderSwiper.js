function setTimeoutWrapper(cb, ms) {
    return new Promise(resolve => {
        setTimeout(() => {
            cb();
            resolve();
        }, ms)
    });
}
async function swiper() {
    const profileCard = document.querySelector('.recCard__info');
    if (!profileCard) return;
    profileCard.click();
    await setTimeoutWrapper(function() { console.log('waiting'); }, 500);
    var carouselItems = document.querySelectorAll('.Expand.tappable-view .bullet');
    var carouselLength = carouselItems.length;
    var description = document.querySelector('.BreakWord');
    var descriptionLen = description ? description.innerText.trim().length : 0;

    if (carouselLength === 0 && descriptionLen === 0) {
        document.querySelector('[aria-label="Nope"]').click();
        return;
    }
    for (const image of carouselItems) {
         await setTimeoutWrapper(function() {
            image.click();
        }, Math.floor(Math.random() * 700) + 800);   
    }
    await setTimeoutWrapper(function() { console.log('waiting'); }, 1000);
    

    document.querySelector('[aria-label="Like"]').click();
    console.log('End');
}

async function tinderSwiper() {
    await setTimeoutWrapper(swiper, Math.floor(Math.random() * 2000) + 1000);
    tinderSwiper();
}

tinderSwiper();
