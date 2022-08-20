/* axios.get('http://localhost:3000/blog')
  .then(function (response) {
    // handle success
    mostrarMensaje(response.data)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
 */

  document.getElementById('form').addEventListener('submit',function(event){
    event.preventDefault()
   
  })

   function guardarMensaje(){
    let mensaje = document.getElementById('mensaje').value

    axios.post('http://localhost:3000/blog', mensaje).then(function (response) {
      // handle success
      mostrarMensaje(response.data.comentario)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
   }

function mostrarMensaje(mensaje){
  
    let contenedorDiv = document.getElementById('comentarios')
    
        let comentario = document.createElement('div')
        comentario.classList.add("single-comment")
  
        comentario.innerHTML = `
        <div class="single-comment">
        <img src="https://via.placeholder.com/80x80" alt="#">
        <div class="content">
            <h4>Usuario x <span>At 8:59 pm On Feb 28, 2018</span></h4>
            <p>${mensaje}</p>
            <div class="button">
                <a href="#" class="btn"><i class="fa fa-reply" aria-hidden="true"></i>Respuesta</a>
            </div>
          </div>
        </div>
        `
        
        contenedorDiv.appendChild(comentario)
    }
  
   
  
