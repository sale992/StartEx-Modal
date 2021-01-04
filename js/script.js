let videoOpen = false;
let videoModalWrapper = document.getElementById('video-modal-wrapper');
let body = document.querySelector('body');


let iframe = document.getElementById('video');

function openVideo() {
  videoModalWrapper.style.display = "block";
  videoOpen = true;
  body.classList.add('modal-open');
  iframe['src'] = "https://player.vimeo.com/video/124062468?autoplay=1&loop=1&title=0&byline=0&portrait=0?api=1";
}

function closeVideo() {
  videoModalWrapper.style.display = "none";
  videoOpen = false;
  body.classList.remove('modal-open');
  iframe['src'] = "";
}





// OLD JS


// let video = document.getElementById("video-bg");

//   let videoButtonPlay = document.getElementById('video-btn-play');
//   let videoButtonPause = document.getElementById('video-btn-pause');

//   videoButtonPause.style.display = 'none';



//   function videoFunction() {
//     if (video.paused) {
//       video.play();
//       // btn.innerHTML = "Pause";
//       videoButtonPlay.style.display = "none";
//       videoButtonPause.style.display = "block";
//       videoButtonDiv.style.opacity = .3

//     } else {
//       video.pause();
//       // btn.innerHTML = "Play";
//       videoButtonPlay.style.display = "block";
//       videoButtonPause.style.display = "none";
//       videoButtonDiv.style.opacity = .8

//     }
//   }

//   let videoButtonDiv = document.getElementById('video-btn');
//   videoButtonDiv.style.transition = "all 1s ease-out"


//   window.addEventListener('DOMContentLoaded', () => {
//     videoButtonDiv.style.opacity = .8;
//   })


