/*
 * This file serves as a collection point for external JS and CSS dependencies.
 * It amalgamates these external resources for easier injection into the application.
 * Additionally, you can directly include any script files in this file
 * that you wish to attach to the application.
 */
// Insert YouTube ad-removal script
setInterval(() => {
  if (document.getElementsByClassName('ytp-ad-text').length > 0) {
    const video = document.getElementsByClassName('video-stream html5-main-video')[0];
    video.play();
    video.pause();
    video.currentTime = video.duration;
  }
}, 500);
