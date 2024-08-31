document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe
  
    // Obtener los valores de los campos
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    let isValid = true; // Variable para determinar si el formulario es válido
  
    // Validar el campo de nombre
    if (name === '') {
      alert('Por favor, ingresa tu nombre.');
      isValid = false;
    }
  
    // Validar el campo de correo electrónico
    if (email === '') {
      alert('Por favor, ingresa tu correo electrónico.');
      isValid = false;
    } else if (!validateEmail(email)) {
      alert('Por favor, ingresa un correo electrónico válido.');
      isValid = false;
    }
    
    this.submit();
    
    // Validar el campo de mensaje
    if (message === '') {
      alert('Por favor, escribe un mensaje.');
      isValid = false;
    }
  
    // Si todo es válido, se puede proceder a enviar el formulario
    if (isValid) {
      alert('Formulario enviado exitosamente.');
      
    }
  });
  
  // Función para validar el formato del correo electrónico
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }