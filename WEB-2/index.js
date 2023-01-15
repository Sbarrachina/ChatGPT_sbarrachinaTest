// JavaScript para agregar productos al carrito
let addToCartButtons = document.querySelectorAll('.add-to-cart');
let cart = document.querySelector('.cart');

for (let i = 0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].addEventListener('click', function(event) {
    let bookId = event.target.dataset.bookId;
    let cartItem = document.createElement('li');
    cartItem.innerHTML = `Libro con ID: ${bookId} <span class="remove-item">X</span>`;
    cart.appendChild(cartItem);
    
    // Añadir un evento de clic al botón de eliminar
    let removeButtons = document.querySelectorAll('.remove-item');
    removeButtons[removeButtons.length - 1].addEventListener('click', function() {
      cartItem.remove();
    });
  });
}

// JavaScript para el botón de checkout
let checkoutButton = document.querySelector('.checkout');
checkoutButton.addEventListener('click', function() {
  // Aquí podrías agregar código para procesar el pedido, como enviar la información del carrito a tu servidor
  alert('Gracias por tu compra!');
});