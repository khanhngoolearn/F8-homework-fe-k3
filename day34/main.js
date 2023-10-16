var boxImg = document.querySelector('.zoom-img');
var img = document.querySelector('.zoom-img img');
var zoomResult = document.querySelector('.zoom-result');
var zoomCam = document.querySelector('.zoom-cam');
var imgResult = document.querySelector('.zoom-result img');

zoomResult.style.height = boxImg.offsetHeight + 'px';
zoomResult.style.width = boxImg.offsetWidth + 'px';
zoomCam.style.height = boxImg.offsetHeight / 4 + 'px';
zoomCam.style.width = boxImg.offsetWidth / 4 + 'px';
imgResult.style.width = boxImg.offsetWidth / zoomCam.offsetWidth * zoomResult.offsetWidth + 'px';
imgResult.style.height = boxImg.offsetHeight / zoomCam.offsetHeight * zoomResult.offsetHeight + 'px';

boxImg.addEventListener('mousemove', (e) => {
    var camX = e.offsetX - zoomCam.offsetWidth / 2;
    var camY = e.offsetY - zoomCam.offsetHeight / 2;
    zoomCam.style.opacity = '.5';
    imgResult.style.opacity = '1';

    if (camX < 0) {
        camX = 0;
    } else if (camX >= boxImg.offsetWidth - zoomCam.offsetWidth) {
        camX = boxImg.offsetWidth - zoomCam.offsetWidth;
    }

    if (camY < 0) {
        camY = 0;
    } else if (camY >= boxImg.offsetHeight - zoomCam.offsetHeight) {
        camY = boxImg.offsetHeight - zoomCam.offsetHeight;
    }

    zoomCam.style.left = camX + 'px';
    zoomCam.style.top = camY + 'px';

    var percentX = camX / (boxImg.offsetWidth - zoomCam.offsetWidth) * 100;
    var percentY = camY / (boxImg.offsetHeight - zoomCam.offsetHeight) * 100;

    imgResult.style.left = -percentX*3 + '%';
    imgResult.style.top = -percentY*3 + '%';
});  

boxImg.addEventListener('mouseout', () => {
    imgResult.style.opacity = '0';
    zoomCam.style.opacity = '0';
});