document.getElementById('form').addEventListener('submit', function(evento){
  evento.preventDefault()
})

// Make a request for a user with a given ID
axios.get('http://10.10.40.145:3000/login')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

  
// Recuperar los datos de entrada del inicio de sesión al presionar el botón de Iniciar sesión
let btnIniciarSesion = document.getElementById("btnIniciarSesion")
btnIniciarSesion.addEventListener("click", function(evento){
  let correo_login = document.getElementById('email_login').value
  let contraseña_login = document.getElementById('password_login').value

  let login = {
    correo_login: correo_login,
    contraseña_login: contraseña_login
  }
  
  axios.post('http://10.10.40.145:3000/login', login)
})