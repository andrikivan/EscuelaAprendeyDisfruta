//Define las variables que necesites

var futuros = [];
var pasados = [];
var hoy;
var eventosFuturos;

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

    //Selecciona los eventos que sean anteriores a la fecha actual del JSON
    for(var i = 0; i < eventos.length; i++){
      if (eventos[i].fecha < hoy){
        pasados.push(eventos[i]);
      }
    }

    //Ordena los eventos segun la fecha (los mas recientes primero)
    pasados = pasados.sort(function(x,y){
      if (x.fecha < y.fecha){
        return 1;
      }
      return -1;
    });

    //Crea un string que contenga el HTML que describe el detalle del evento
    var htmlFut = "";

    //Recorre el arreglo y concatena el HTML para cada evento
    for(var j = 0; j < 2; j++){
      htmlFut += `<div class="indexFuturos">
              <h2><a href="detalle.html?id=`+futuros[j].id+`">${futuros[j].nombre}</a></h2>
              <p class="fechaLugarFuturo">${futuros[j].fecha}</p>
              <p class="descrFuturo">${futuros[j].descripcion}</p>
              </div>
              `
    };

    //Crea un string que contenga el HTML que describe el detalle del evento
    var htmlPas = "";

    //Recorre el arreglo y concatena el HTML para cada evento
    for(var j = 0; j < 2; j++){
      htmlPas += `<div class="indexPasados">
              <h2><a href="detalle.html?id=`+pasados[j].id+`">${pasados[j].nombre}</a></h2>
              <p class="fechaLugarPasado">${pasados[j].fecha}</p>
              <p class="descrPasado">${pasados[j].descripcion}</p>
              </div>
              `
    };

    //Modifica el DOM agregando el html generado
    document.getElementById("proximos").innerHTML = htmlFut;

    //Modifica el DOM agregando el html generado
    document.getElementById("pasados").innerHTML = htmlPas;
  })

});