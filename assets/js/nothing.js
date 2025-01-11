const video = document.getElementsByTagName("video")[0];
video.addEventListener("ended", function () {
    window.location.href = '/';
}, true);
