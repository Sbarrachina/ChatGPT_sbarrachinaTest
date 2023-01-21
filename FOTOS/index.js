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

var closeBtn = document.getElementById("close-modal");
closeBtn.ontouchstart = closeModal;
closeBtn.onclick = closeModal;


// galeria 3

var filterButtons = document.querySelectorAll(".filter");
var imgBoxes = document.querySelectorAll(".img-box-3");

// Agregar un evento de click a cada botón de filtro
filterButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    var category = button.getAttribute("data-category");
    filterImages(category);
  });
});

function filterImages(category) {
  imgBoxes.forEach(function(imgBox) {
    if (imgBox.getAttribute("data-category") === category || category === "all") {
      imgBox.style.display = "block";
    } else {
      imgBox.style.display = "none";
    }
  });
}

// // efecto modal. clic en fotos 

var images = document.querySelectorAll('.img-box-3 img');
var modal = document.getElementById('modal');
var modalImg = document.getElementById('modal-img');
var close = document.getElementById('close');

images.forEach(function(image) {
  image.addEventListener('click', function() {
    modal.style.display = "block";
    modalImg.src = this.src;
  });
});

close.addEventListener('click', function() {
  modal.style.display = "none";
});

// next y preview

var currentSlide = 0;
var images = document.querySelectorAll('.img-box-3 img');
var modal = document.getElementById('modal');
var modalImg = document.getElementById('modal-img');
var close = document.getElementById('close');

images.forEach(function(image, index) {
  image.addEventListener('click', function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    currentSlide = index;
  });
});

close.addEventListener('click', function() {
  modal.style.display = "none";
});

function plusSlides3(n) {
  currentSlide += n;
  if (currentSlide < 0) {
    currentSlide = images.length - 1;
  } else if (currentSlide >= images.length) {
    currentSlide = 0;
  }
  modalImg.src = images[currentSlide].src;
}
