function openOverlay(src) {
    var overlay = document.querySelector('.overlay');
    var overlayImg = overlay.querySelector('img');
    overlayImg.src = src;
    overlay.style.display = 'flex';
}

function closeOverlay() {
    document.querySelector('.overlay').style.display = 'none';
}