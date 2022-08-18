//INPUTS FROM cart.js
axios.get('http://localhost:3000/cart')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })


let btnSendMessage = document.getElementById("btnSendMessage")
btnSendMessage.addEventListener("click", function(evento){
  let cantidad = document.getElementById('quantity').value

  console.log(cantidad)

  axios.post('http://localhost:3000/cantidad', cantidad)
    
})


let carrito = [];
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMboton_eliminar = document.querySelector('#boton_eliminar');

function anyadirProductoAlCarrito(evento) {
  // Anyadimos el Nodo a nuestro carrito
  carrito.push(evento.target.getAttribute('marcador'))
  // Actualizamos el carrito 
  renderizarCarrito();