// Hemos omitido los acentos en los comentarios por compatibilidad

function validar(formulario) {
  //validación del formulario de registro, para cada campo del registro
  //Expresion regular del correo
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  if (formulario.nombres.value.trim().length < 2) {
    document.getElementById("errorNombres").innerText = "Debe ingresar su nombre.";
    formulario.nombres.focus();
    return false;
  }
  else {
    document.getElementById("errorNombres").innerText = "";
  }

  if (!re.test(formulario.email.value)) {
    document.getElementById("errorEmail").innerText = "Email no válido";
    formulario.email.focus();
    return false;
  }
  else {
      document.getElementById("errorEmail").innerText = "";
  }

  if (formulario.contraseña.value.trim().length < 7) {
      document.getElementById("errorContraseña").innerText = "Pruebe otra contraseña, mínimo 7 caracteres.";
      formulario.contraseña.focus();
      return false;
  }
  else {
      document.getElementById("errorContraseña").innerText = "";
  }

  if (formulario.contraseña.value != formulario.confirmacion.value) {
      document.getElementById("errorConfirmacion").innerText = "Las contraseñas no coinciden";
      formulario.confirmacion.focus();
      return false;
  }
  else {
      document.getElementById("errorConfirmacion").innerText = "";
  }

  if (formulario.tipo.value ==  "") {
      document.getElementById("errorTipo").innerText = "Seleccione un tipo de usuario.";
      return false;
  }
  else {
      document.getElementById("errorTipo").innerText = "";
  }

  if (!formulario.terminos.checked) {
      document.getElementById("errorTerminos").innerText = "Términos y Condiciones obligatorio";
      formulario.terminos.focus();
      return false;
  }
  else {
      document.getElementById("errorTerminos").innerText = "";
  }

  alert("¡Se ha registrado exitósamente!");
  return true;

}
