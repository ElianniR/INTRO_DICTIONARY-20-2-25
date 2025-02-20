const Firstname = document.getElementById("Firstname");
const lastname = document.getElementById("Lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirm_password= document.getElementById("confirm");
const submit = document.getElementById("submit");

submit.addEventListener("click", ()=> { // dentro de aqui hago lo q quiero q se ejecute al darle click
    console.log(password)
    console.log(confirm_password)
    if (password.value != confirm_password.value){
        alert("contraseña no coincide");
        return
    }

const datos = {
    primer_nombre: Firstname.value, 
    apellido: lastname.value, 
    correo: email.value,
    clave: password.value,
}

localStorage.setItem("datos", JSON.stringify(datos));

const usuarios = JSON.parse(localStorage.getItem("datos"));
console.log(usuarios);

window.location.href="index.html"



})

