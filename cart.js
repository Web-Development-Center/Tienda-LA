//INPUTS FROM cart.js
axios.get('http://localhost:3000/carrito')
  .then(function (response) {
    // handle success
    mostrarProductosCarrito(response.data)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

function mostrarProductosCarrito(producto){
  let tbody = document.getElementById("table-products")
  producto.forEach(function(prod, index){
    let tr = document.createElement('tr')
    tr.innerHTML = `
    <td class="image" data-title="No"><img src="http://localhost:3000/images/${prod.imgProducto}" alt="#"></td>
    <td class="product-des" data-title="Description">
      <p class="product-name"><a href="#">${prod.nombre}</a></p>
      <p class="product-des">${prod.descripcion}</p>
    </td>
    <td class="price" data-title="Price"><span>$${prod.precioActual ? prod.precioActual : prod.precioOriginal} </span></td>
    <td class="qty" data-title="Qty"><!-- Input Order -->
      <div class="input-group">
        <div class="button minus">
          <button type="button" class="btn btn-primary btn-number" data-type="minus" data-field="quant[1]">
            <i class="ti-minus"></i>
          </button>
        </div>
        <input id="quantity" type="text" name="quant[1]" class="input-number"  data-min="1" data-max="100" value="${prod.cantidad}">
        <div class="button plus">
          <button type="button" class="btn btn-primary btn-number" data-type="plus" data-field="quant[1]">
            <i class="ti-plus"></i>
          </button>
        </div>
      </div>
      <!--/ End Input Order -->
    </td>
    <td class="total-amount" data-title="Total"><span>$220.88</span></td>
    <td class="action" data-title="Remove"><a href="#"><i class="ti-trash remove-icon"></i></a></td>

    
    `

    tbody.appendChild(tr)
  })
}