axios.get('http://localhost:3000/Checkout')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })


let btnGuardar = document.getElementById("btn")
btnGuardar.addEventListener("click", function(evento){
  let nombre = document.getElementById('name').value
  let apellido = document.getElementById('name').value
  let email = document.getElementById('email').value
  let num_telefono = document.getElementById('number').value
  let cod_postal = document.getElementById('post').value
  let referencias = document.getElementById('address').value
  
  let registro = {
    nombre: name, 
    apellido: name,
    email,
    num_telefono: number,
    cod_postal: post,
    referencias: address
  }

  axios.post('http://localhost:3000/Checkout', checkout)
    
})