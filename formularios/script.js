// JavaScript para validar que los campos del formulario estén completos antes de enviar el formulario

const formulario = document.getElementById("formulario-contacto");

formulario.addEventListener("submit", (event) => {
  event.preventDefault(); // evita que la página se recargue al enviar el formulario
  
  // Recorre cada campo del formulario
  for (let i = 0; i < formulario.elements.length; i++) {
    // Verifica si el campo está vacío
    if (!formulario.elements[i].value) {
      alert("Por favor, completa todos los campos del formulario");
      return;
    }
  }
  
  formulario.submit(); // envia el formulario si todos los campos están completos
});

// formulario 2
// JavaScript para validar que los campos del formulario estén completos antes de enviar el formulario

const formulariodos = document.getElementById("formulario-reforma");

formulario.addEventListener("submit", (event) => {
  event.preventDefault(); // evita que la página se recargue al enviar el formulario
  
  // Recorre cada campo del formulario
  for (let i = 0; i < formulario.elements.length; i++) {
    // Verifica si el campo está vacío
    if (!formulario.elements[i].value && formulario.elements[i].type !== "file") {
      alert("Por favor, completa todos los campos del formulario");
      return;
    }
  }
  
  formulario.submit(); // envia el formulario si todos los campos están completos
});




