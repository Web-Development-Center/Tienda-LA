const btn = document.getElementById('button')

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault()

   btn.value = 'ENVIANDO...'

   const serviceID = 'default_service'
   const templateID = 'template_xc5i9u9'

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'ENVIAR MENSAJE'
      alert('¡MENSAJE ENVIADO CON ÉXITO!')
    }, (err) => {
      btn.value = 'ENVIAR MENSAJE'
      alert(JSON.stringify(err))
    })
})