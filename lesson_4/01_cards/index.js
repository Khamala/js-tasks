const findCards = document.querySelectorAll(".slide");

for (let card of findCards) {
  card.addEventListener("click", showSlide);
}

function showSlide(evt) {
  closeSlides();
  const currentSlide = evt.currentTarget.classList;
  currentSlide.add("active");
}

function closeSlides() {
  for (let card of findCards) {
    card.classList.remove("active");
  }
}
