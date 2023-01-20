// Abrir pantalla completa
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Cerrar pantalla completa
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

// Imagen actual
var slideIndex = 1;
showSlides(slideIndex);

// Avanzar o retroceder en las imágenes
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Mostrar imagen actual
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
