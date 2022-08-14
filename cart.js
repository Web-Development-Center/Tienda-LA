//INPUTS FROM cart.js
axios.get('http://10.10.40.145:3000/cart')
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

  axios.post('http://10.10.40.145:3000/cantidad', cantidad)
    
})