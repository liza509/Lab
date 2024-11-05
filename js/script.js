const audio = document.querySelector("audio");
const gifContainer = document.querySelector(".gif-container");

audio.addEventListener("play", () => {
  gifContainer.style.visibility = "visible";
});

audio.addEventListener("pause", () => {
  gifContainer.style.visibility = "hidden";
});
