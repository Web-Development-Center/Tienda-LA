axios.get('http://localhost:3000/blog')
  .then(function (response) {
    // handle success
    mostrarProductos(response.data)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });


  document.getElementById('form').addEventListener('submit',function(event){
    event.preventDefault()
   
  })
    
   

   function guardarMensaje(){
    let mensaje = document.getElementById('mensaje').value

    axios.post('http://localhost:3000/blog',mensaje)
   }


   
function mostrarMensaje(){
    let contenedorDiv = document.getElementById('comentarios')
    
        let mensaje = document.createElement('div')
        mensaje.classList.add("comments")
  
        mensaje.innerHTML = `
        <div class="single-comment">
        <img src="https://via.placeholder.com/80x80" alt="#">
        <div class="content">
            <h4>Alisa harm <span>At 8:59 pm On Feb 28, 2018</span></h4>
            <p>Enthusiastically leverage existing premium quality vectors with enterprise-wide innovation collaboration Phosfluorescently leverage others enterprisee  Phosfluorescently leverage.</p>
            <div class="button">
                <a href="#" class="btn"><i class="fa fa-reply" aria-hidden="true"></i>Reply</a>
            </div>
        </div>
    </div>
        `
        
        contenedorDiv.appendChild(mensaje)
    }
  
   
  
