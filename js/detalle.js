
$(document).ready(function () {

  //Esta es la instruccion para tomar el id del URL detalle.html?id=<identificador>
  var id = location.search.match(/id=(\d)*/)[1]
  
  //Carga los datos que estan en el JSON (info.json) usando AJAX
  $.ajax({
    url: "info.json"
  }).done(function (resultado) {
    
    //Guarda el resultado en una variable
    eventos = resultado.eventos;
    //Busca el elemento en el arreglo
    evento = eventos.find(function (element) {
      return element.id == id
    })
    //Crea un string que contenga el HTML que describe el detalle del evento
    var html = `<div class="detalle">
    <h2>${evento.nombre}</h2>
    <p class="fechaLugarEvento">${evento.fecha} - ${evento.lugar}</p>
    <p class="descrEvento">${evento.descripcion}</p>
    <p class="costoEvento">Costo: ${evento.precio}</p>
    <p class="invitEvento">Invitados: ${evento.invitados}</p>
    </div>
    `
    //Modifica el DOM agregando el html generado dentro del div con id=evento
    document.getElementById("evento").innerHTML = html
  });
});