let index = 0;
showSlide(index);

function changeSlide(n) {
  index += n;
  showSlide(index);
}

function showSlide(n) {
  const slides = document.getElementsByClassName("myslides");

  if (n >= slides.length) {
    index = 0;
  }
  if (n < 0) {
    index = slides.length - 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[index].style.display = "block";
}
