/* let myTable = document.querySelector("table")
function addRow(){ 
    document.getElementById("table-create").insertRow(-1).innerHTML =
    `<td><input id="attribute1" class="property"  type=text name=property1[] placeholder="Ejemplo: Procesador"></td>
     <td><input id="attribute2" class="specification" type=text name=specification2[] placeholder="Ejemplo: Intel Core i5-1135g7"></td>`
   }
    
   function dropRow(){
     let table = document.getElementById("table-create");
     let rowCount = table.rows.length;
    
     if(rowCount <= 1)
       alert('No se pueden eliminar todas las filas');
     else
       table.deleteRow(rowCount -1);
} */

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault()
 })

axios.get('http://10.10.40.145:3000/upload')
  .then(function (response) {
    // handle success
    console.log(response)
  })
  .catch(function (error) {
    // handle error
    console.log(error)
  })

  let archivo = document.getElementById("file")
  let image = document.getElementById("img")

  // Escuchar cuando cambie
  archivo.addEventListener("change", () => {
  // Los archivos seleccionados, pueden ser muchos o uno
  let archivos = archivo.files;
  // Si no hay archivos salimos de la función y quitamos la imagen
  if (!archivos || !archivos.length) {
    image.src = "";
    return;
  }
  // Ahora tomamos el primer archivo, el cual vamos a previsualizar
  let primerArchivo = archivos[0];
  // Lo convertimos a un objeto de tipo objectURL
  let objectURL = URL.createObjectURL(primerArchivo);
  // Y a la fuente de la imagen le ponemos el objectURL
  image.src = objectURL;
})

  /* const dropArea = document.querySelector(".drop-area")
  const dragText = dropArea.querySelector("h2")
  const button = dropArea.querySelector("button")
  const input = dropArea.querySelector("#input-file")
  let files

  button.addEventListener("click", e => {
    input.click()
  })

  input.addEventListener("change", e =>{
    files = input.files
    dropArea.classList.add("active")
    showFiles(files)
    dropArea.classList.remove("active")
  })

  //Este evento se ejecuta cuando se están arrastrando archivos dentro de la zona
  dropArea.addEventListener("dragover", (e) =>{
    e.preventDefault()
    dropArea.classList.add("active")
    dragText.textContent = "Suelta para subir el archivo"
  })
  
  //Este evento se ejecuta cuando se están arrastrando archivos fuera de la zona
  dropArea.addEventListener("dragleave", (e) =>{
    e.preventDefault()
    dropArea.classList.remove("active")
    dragText.textContent = "Arrastra y suelta los archivos aquí"
  })
  
  //Este evento se ejecuta cuando finalmente se sueltan los archivos dentro de la zona
  dropArea.addEventListener("drop", (e) =>{
    e.preventDefault()
    files = e.dataTransfer.files
    showFiles(files)
    dropArea.classList.remove("active")
    dragText.textContent = "Arrastra y suelta los archivos aquí"
  })

  function showFiles(files){
    if(files.length == undefined){
      processFile(files)
    }else{
      for(const file of files){
        processFile(file)
      }
    }
  }

  function processFile(file){
    const docType = file.type
    const validFormats = ["image/jpeg", "image/jpg", "image/png", "video/mp4"]

    if(validFormats.includes(docType)){
      const fileReader = new FileReader()
      const id = `file-${Math.random().toString(32).substring(7)}`

      fileReader.addEventListener("load", e =>{
        const fileUrl = fileReader.result
        const image = `
        <div id="${id}" class="file-container">
          <img src="${fileUrl}" alt="${file.name}" width="10">
          <div class="status">
            <span class="name-file">${file.name}</span>
            <span class="status-text">Cargando...</span>
          </div>
        </div>
        `
        const html = document.querySelector("#preview").innerHTML
        document.querySelector("#preview").innerHTML = image + html
      })
      
      fileReader.readAsDataURL(file)
      uploadFile(file, id)
    }else{
      alert("¡El formato del archivo no es permitido!")
    }
  }

  async function uploadFile(file, id){
    const formData = new FormData()
    formData.append("file", file)

    try{
      const response = await fetch("http://10.10.40.145:3000/upload", {
        method: "POST",
        body: formData
      })

      const responseText = await response.text()
      console.log(responseText)

      document.querySelector(`#${id} .status-text`).innerHTML = `
        <span class="success">Archivo subido con éxito</span>
      `
    }catch(error){
      document.querySelector(`#${id} .status-text`).innerHTML = `
        <span class="failure">Ha habido un problema al subir el archivo</span>
      `
    }
  } */

  function insert(){
    let name = document.getElementById('name').value
    let description = document.getElementById('description').value
    let features = document.getElementById('features').value
    let price = document.getElementById('price').value
    let quantity = document.getElementById('quantity').value
    let category = document.getElementById('categories').value
    let image = document.getElementById('file').value

    let product = {
        name:name,
        description: description,
        features: features,
        price: price,
        quantity: quantity,
        category: category
    }
    
    console.log(image)
    axios.post('http://10.10.40.145:3000/upload', product)
    axios.post('http://10.10.40.145:3000/uploadFoto', image)
  }  
/* function insert(){
    let name = document.getElementById('name').value
    let description = document.getElementById('description').value
    let price = document.getElementById('price').value
 
    // selecciona TODOS los campos de la tabla por clase
    let property = document.querySelectorAll(".property");
    let specification = document.querySelectorAll(".specification");
     
    // Cada campo es convertido a un array bidimensional 
    let propertyValues = [];
    for (let x = 0; x < property.length; x++) {
      propertyValues.push( property[x].value );
    }
     
    let specificationValues = [];
    for (let x = 0; x < specification.length; x++) {
      specificationValues.push( specification[x].value );
    }
    // Nuevo array bidimensional del conjunto de campos creados 
    let aArray = [ propertyValues, specificationValues ];
    // Cuenta el numero de filas introducidas en la tabla
    let table = document.getElementById("table-create")
    let rowCount = table.rows.length;
    let newArray=[]

    for (let i = 0; i < rowCount -1; i++) {
        for (let j = 0; j < aArray.length; j++) {
            newArray = aArray[j][i]
            document.write("El valor de la posición [" + i + "][" + j + "] es [" + aArray[j][i] + "]<br/>") 
        }
      }
      console.log(newArray)
      let product = {
        name:name,
        description: description,
        array: [aArray[i][j]],
        price: price
    }
    axios.post('http://10.10.40.145:3000/insert', product)
    console.log(product.name)
    console.log(product.description)
    console.log(product.array)
    console.log(product.price)
    
} */
