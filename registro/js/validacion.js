//probandooo
document.getElementById('regBtn').addEventListener('click', function () {
    //obtener los valores de los campos del form
    let nombre = document.getElementById('nombre').value.trim();
    let apellido = document.getElementById('apellido').value.trim();
    let email = document.getElementById('email').value.trim();
    let password1 = document.getElementById('password1').value;
    let password2 = document.getElementById('password2').value;
    let terminos = document.getElementById('terminos').checked;
  
    //checkear si estan los campos completos
    if (!nombre || !apellido || !email || !password1 || !password2) {
      showAlertError(); // si alguno esta vacio muestra error
      return;
    }
  
    // ver si la contra tiene min 6 caracteres
    if (password1.length < 6) {
      showAlertError(); // si es corta muestra error
      return;
    }
  
    // son las contras iguales?
    if (password1 !== password2) {
      showAlertError(); // si no lo son muestra error
      return;
    }
  
    // se verifica si se cumplen los terminos y condiciones
    if (!terminos) {
      showAlertError(); // si no los aceptan se muestra error
      return;
    }
  
    // si todo esta bien exitosss
    showAlertSuccess();
  });


function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

