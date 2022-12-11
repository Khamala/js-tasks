//Необхідно додати потрібну логіку, щоб при кліку на одну з карток,вона ставала активною(у нас для цього є клас active), а всі інші ставали неактивними
const container = document.querySelector(".container");
const allSlides = document.querySelectorAll(".slide");
container.addEventListener("click", onOpenImage);
function onOpenImage(evt) {
  if (!evt.target.classList.contains("container")) {
    allSlides.forEach(function (item) {
      item.classList.remove("active");
    });
    evt.target.classList.toggle("active");
  }
}
