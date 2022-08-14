document.getElementById('form2').addEventListener('submit', function(evento){
  evento.preventDefault()
})

// Make a request for a user with a given ID
axios.get('http://10.10.40.145:3000/register')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

// Recuperar los datos de entrada del registro al presionar el botón Registrarse
let btnRegistrarse = document.getElementById("btnRegistrarse")
btnRegistrarse.addEventListener("click", function(evento){
  let nombre = document.getElementById('name').value
  let apellidoPaterno = document.getElementById('first-lastname').value
  let correo_registro = document.getElementById('email_registro').value
  let contraseña_registro = document.getElementById('password_registro').value
  let confirmar_contraseña = document.getElementById('password_verify').value
  
  let registro = {
    nombre: nombre, 
    apellidoPaterno: apellidoPaterno,
    correo_registro: correo_registro,
    contraseña_registro: contraseña_registro,
    confirmar_contraseña: confirmar_contraseña
  }

  axios.post('http://10.10.40.145:3000/register', registro)
    
})