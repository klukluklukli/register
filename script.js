
//
// function Registro(nombre, apellido, contraseña, confirma){
//   this.nombre = nombre;
//   this.apellido = apellido;
//   this.password = password;
//   this.confirma = confirma;
// };
//
// var button = document.getElementById('button');
//
// button.addEventListener('click', function() {
//   var nombreValue = document.getElementById('nombre').value;
//   var apellidoValue = document.getElementById('apellido').value;
//   var passwordValue = document.getElementById('password').value;
//   var confirmaValue = document.getElementById('confirma').value;
//
//   console.log(nombreValue, apellidoValue, passwordValue, confirmaValue);
//   var r = new Registro(nombreValue, apellidoValue, passwordValue, confirmaValue);
//   console.log(r);
// });

var arr = ['hola', 'ggg']
var email = "mvg@alo.com"
arr.indexOf('@') // -1

var nombreInput = document.getElementById('nombre');
var apellidoInput = document.getElementById('apellido');
var passwordInput = document.getElementById('password');
var confirmaInput = document.getElementById('confirma');
var buttonElement = document.getElementById('button');

buttonElement.addEventListener('click', function(){
    var nombre = nombreInput.value;
    var apellido = apellidoInput.value;
    var password = passwordInput.value;
    var confirma = confirmaInput.value;
    alert("Tu nombre es " + nombre + ", tu apellido es " + apellido);

    if (nombre.length > 4) {
      console.log('Cool, tu nombre es válido');
    } else if(nombre.length < 4) {
      console.log('Dude tu nombre no es válido');
    } else {
      console.log('Ingresa un nombre válido');
    }

    if (password == confirma) {
      console.log('Tu contraseña es válida');
    } else if (password != confirma) {
      console.log('Tu contraseña no es válida');
    }

});
