document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario
  
    // Obtener los valores de los campos
    const email = document.getElementById('emailInput').value;
    const password = document.getElementById('passwordInput').value;
  
    // Validar los campos (en este ejemplo, solo se verifica si están vacíos)
    if (email.trim() === '' || password.trim() === '') {
      alert('Por favor, complete todos los campos.');
    } else {
      // Aquí puedes realizar el proceso de inicio de sesión o enviar los datos al servidor
      console.log('Inicio de sesión exitoso!');
      window.location.href = 'admin/dashboard.php';
    }
  });
  