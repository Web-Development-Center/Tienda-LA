const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text")


toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close")
})

searchBtn.addEventListener("click" , () =>{
    sidebar.classList.remove("close")
})

modeSwitch.addEventListener("click" , () =>{
    body.classList.toggle("dark")
    
    if(body.classList.contains("dark")){
        modeText.innerText = "Modo claro"
    }else{
        modeText.innerText = "Modo oscuro"
        
    }
})

let btnInsert = document.getElementById('btnInsert')
btnInsert.addEventListener("click", function(){
    location.href = "insertProducts.html"
})

let btnUpdate = document.getElementById('btnUpdate')
btnUpdate.addEventListener("click", function(){
    location.href = "updateProducts.html"
})

let btnDelete = document.getElementById('btnDelete')
btnDelete.addEventListener("click", function(){
    location.href = "deleteProducts.html"
})