const images = document.querySelectorAll('.slider img');
let index = 0;

setInterval(() => {
  images[index].classList.remove('active');
  index++;
  if (index === images.length) {
    index = 0;
  }
  images[index].classList.add('active');
}, 2000);

