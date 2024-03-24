function imgSlider(anything) {
  const img = document.querySelector(".starbucks");
  img.style.setProperty("--animate-duration", "0.6s");
  img.classList.add("animate__animated", "animate__fadeInLeft");
  // img.classList.remove("animate__fadeInLeft");
  img.src = anything;

  img.addEventListener("animationend", () => {
    img.classList.remove("animate__animated", "animate__fadeInLeft");
  });
}

function changeCircleColor(color) {
  const circle = document.querySelector(".circle");
  circle.style.background = color;
}
