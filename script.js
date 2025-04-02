function play(audioSrc) {
  let audio = new Audio(audioSrc);
  audio.play().catch((e) => console.error("Error playing audio:", e));
}
function playTicktockAudio() {
  const audio = document.getElementById("ticktockAudio");
  audio.muted = false;
  audio
    .play()
    .catch((e) => console.error("Waiting for user interaction first."));
  audio.volume = 0.5;
  audio.playbackRate = 1.5;
}

function playChimeAudio() {
  const audio = document.getElementById("chimeAudio");
  if (!audio.paused) return;
  audio.muted = false;
  audio.play();
  audio.volume = 0.5;
  audio.playbackRate = 1.5;
  setTimeout(() => {
    audio.pause();
    audio.currentTime = 0;
  }, 8000);
}
