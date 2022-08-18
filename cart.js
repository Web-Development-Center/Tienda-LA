//INPUTS FROM cart.js
axios.get('http://localhost:3000/carrito')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })


let agregar = document.getElementsByName('AgregarCarrito');
agregar.addEventListener('click',function(){
  let agregarCarrito = true

  axios.post('http://localhost:3000/carrito',cart)
})



