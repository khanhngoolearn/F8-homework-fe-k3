var countDown = document.querySelector('.timer span');
var linkBtn = document.querySelector('.btn');
var duration = 9000;
var onWebsite = true;
var startTime = performance.now();
var remainingTime = duration;

window.onblur = () => {
    onWebsite = false;
    startTime = performance.now();
};

window.onfocus = () => {
    onWebsite = true;
    if (remainingTime > 0) {
        counting();
    }
};

counting = () => {
    let elapsedTime = performance.now() - startTime;
    remainingTime = Math.max(0, duration - elapsedTime);

    if (remainingTime > 0) {
        requestAnimationFrame(counting);
    } else {
        linkBtn.disabled = false;
    }
    countDown.innerText = Math.ceil(remainingTime / 1000);
};

counting();

linkBtn.onclick = () => {
    window.location.href='https://www.facebook.com/mattevan.smith.9';
}
