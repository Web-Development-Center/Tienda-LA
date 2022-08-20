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




