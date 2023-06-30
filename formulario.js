const FORMULARIO = document.querySelector("#formulario")

FORMULARIO.addEventListener("submit", function(event) {
    event.preventDefault()

    const user = event.target.user.value.trim().toLowerCase()
    const Apellido = event.target.Apellido.value.trim().toLowerCase()
    const email = event.target.email.value.trim().toLowerCase()
    const msj = event.target.msj.value.trim()

    console.log(user)
    console.log(Apellido)
    console.log(email)
    console.log(msj)


})