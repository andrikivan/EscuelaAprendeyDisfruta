//Define las variables que necesites

var futuros = [];
var hoy;
var eventos;

$(document).ready(function () {

  //Carga los datos que estan en el JSON (info.json) usando AJAX
  $.ajax({
    url: "./info.json"
  }).done(function (resultado) {

    //Guarda el resultado en variables
    hoy = resultado.fechaActual;
    eventos = resultado.eventos;

    //Selecciona los eventos que sean posteriores a la fecha actual del JSON
    for(var i = 0; i < eventos.length; i++){
      if (eventos[i].fecha < hoy){
        futuros.push(eventos[i]);
      }
    }

    //Ordena los eventos segun la fecha (los mas cercanos primero)
    futuros = futuros.sort(function(x,y){
      if (x.fecha > y.fecha){
        return 1;
      }
      return -1;
    });

    //Crea un string que contenga el HTML que describe el detalle del evento
    var html = "";

    //Recorre el arreglo y concatena el HTML para cada evento
    for(var j = 0; j < futuros.length; j++){
      html += `<div class="itemFuturos">
              <h2>${futuros[j].nombre}</h2>
              <p class="fechaLugarFuturo">${futuros[j].fecha} - ${futuros[j].lugar}</p>
              <p class="descrFuturo">${futuros[j].descripcion}</p>
              <p class="invitFuturo">Invitados: ${futuros[j].invitados}</p>
              </div>
              `
    };

    //Modifica el DOM agregando el html generado
    document.getElementById("proximos").innerHTML = html;

  })

});
