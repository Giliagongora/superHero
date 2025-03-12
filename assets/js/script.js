$(document).ready(function () {
  // 1. Validar que se ingresa solo número
  $(".card").hide();
  $("body > section:nth-child(3) > article.row.justify-content-center.align-items-center > div > h2").hide();
  let accessToken = "6178467eab51b19bbbf2ce762e73e970";
/*2436613226526027*/ 
  $("button").click(function () {
    $(".opcion").text("Loading...");
    let id = $("#busqueda").val();
    // console.log(id);
    // validaciones(id): Esta línea llama a la función validaciones() con el argumento id. Esta función realiza algunas validaciones en el valor id para verificar si cumple con ciertos criterios (en este caso, si es un número positivo y no excede cierto límite). La función devuelve true si las validaciones son exitosas y false si no lo son.
    if (validaciones(id)) {
      heroe(id);
      // console.log("acá si pasa");
    } else {
      // console.log("acá si no pasa");
    }
  });

  function validaciones(id) {
    let regex = /^[0-9]+$/; // Solo números positivos
    if (id === "") {
      // Si no cumple con las condiciones, mostrar una alerta
      alert("El campo de búsqueda está vacío");
      return false;
    } else if (!regex.test(id)) {
      alert("Solo puedes ingresar números positivos");
      return false;
    } else if (parseInt(id) < 0 || parseInt(id) > 172) {
      alert("Solo puedes ingresar números entre 0 y 172");
      return false;
    }
    return true; // Si pasa todas las validaciones, retorna true
  }

  function heroe(id) {
    let test = $.ajax({
      type: "GET",
      url: "https://superheroapi.com/api.php/6178467eab51b19bbbf2ce762e73e970/" + id,
      dataType: "json",
      success: function (data) {
        console.log(data);
        // console.log("Aca verifico el paso del id :" , id);
        $(".opcion").text(JSON.stringify(data));
        // console.log("Extraer nombres" ,data);
        let powerstats = data.powerstats; // Inicializa powerstats con los datos recibidos
        // console.log("Aca los datos de data ingresados en la variable",powerstats);

        // let nombre = data.name;
        // $("body > section:nth-child(3) > article.row.align-items-center > div > div > h5"
        // ).append("<p>" + nombre + "</p>"); // Añado el nombre a la variable nombre

        let img = data.image.url;
        let imagen = $("<img.heroe>").attr("src", img); // Añado la imagen a  la variable img

        
/*         let url = data.url;
        $("img.heroe").attr("src", img.heroe); */

        let connections = data.connections["<p>group-affiliation</p>"]; // nombre del heroe

        let biography = data.biography["<p>first-appearance</p>"]; // nombre y fecha
        // console.log(data);
        // $(".card-text").append("<p>"+biography+"</p>"); // añado biofragia a la card
        $(".card-text").empty(); // Limpiar contenido anterior

        for (let property in powerstats) {
          // recorres y extraemos, la propiedad y el valor
          if (powerstats.hasOwnProperty(property)) {
            // Extraer el nombre de la propiedad y su valor
            let propertyName = property;
            let propertyValue = powerstats[property];

            // Imprimir el nombre de la propiedad y su valor
            // console.log("Nombre de la propiedad:", propertyName);
            // console.log("Valor de la propiedad:", propertyValue);

            let valores = [];


            if (
              propertyName !== true &&
              propertyName !== undefined &&
              propertyValue !== "null" &&
              propertyValue !== "" &&
              propertyValue !== undefined
            ) {
              // valores.push([propertyName, propertyValue]);
              // propertyName &&

              let propiedades = [propertyName, propertyValue];
              // console.log("valores",valores);
              // console.log("propiedades",propiedades);

              // $(".card-text").append(
              //   "<p>" + valores[0] + " : " + valores[1] + "</p>"
              // );
              $(".card-text").append(
                "<div class='propCampo'><p class='propiedades'>" +
                  propiedades[0] +
                  " :</p>  <p>" +
                  propiedades[1] +
                  "</p> </div>"
              );
              // console.log("propiedad 0",propiedades[0], "propiedad 1",propiedades[1]);
            }
          }
        }
        let test = $.ajax({
          type: "GET",
          url: "https://superheroapi.com/api.php/6178467eab51b19bbbf2ce762e73e970/" + id,
          dataType: "json",
          success: function (data) {
            //si todo sale bien, se agrega la funcionalidad aquí.
            $(".opcion").text(JSON.stringify(data));
            let nombre = data.name;
            $(
              "body > section:nth-child(3) > article.row.align-items-center > div > div > h5"
            ).append(nombre);
            // console.log("de donde es esto",nombre);

            let url = data.url;
            $("img.heroe").attr("src", img);

            let connections = data.connections["<p>group-affiliation</p>"];
            let biography = data.biography["<p>first-appearance</p>"];

            for (let property in powerstats) {
              // recorres y extraemos, la propiedad y el valor
              if (powerstats.hasOwnProperty(property)) {
                // Extraer el nombre de la propiedad y su valor
                let propertyName = property;
                let propertyValue = powerstats[property];

                // Imprimir el nombre de la propiedad y su valor
                // console.log("Nombre de la propiedad:", propertyName);
                // console.log("Valor de la propiedad:", propertyValue);

                // let valores = [];

                if (
                  propertyName !== true &&
                  propertyName !== undefined &&
                  propertyValue !== "null" &&
                  propertyValue !== "" &&
                  propertyValue !== undefined
                ) {
                  // valores.push([propertyName, propertyValue]);
                  // propertyName &&

                  let propiedades = [propertyName, propertyValue];
                  // console.log("valores",valores);
                  // console.log("propiedades",propiedades);
                  // $(".card-text").append(
                  //   "<p>" + valores[0] + " : " + valores[1] + "</p>"
                  // );

                  //Canvas

                  let dataPoints = [];
                  function poder(propiedades) {
                    var propiedades = options.data[0].propiedadess;
                    var total = propiedades[0].y;
                    for (var i = 0; i < propiedades.length; i++) {
                      console.log(propiedades);
                      dataPoints.push({
                        label: `${total}= Sin datos`,
                        y: 1,
                      });
                      console.log('dataPointsdataPoints', dataPoints)
                      // if (i == 0) {
                      //   options.data[0].propiedadess[i].percentage = 100;
                      // } else {
                      //   options.data[0].propiedadess[i].percentage = ((propiedades[i].y / total) * 100).toFixed(2);
                      // }
                    }
                  }
                  // propiedades.chart.render();

                  let options = {
                    title: {
                      text: nombre,
                    },
                    // subtitles: [{
                    //   text: "As of November, 2017"
                    // }],
                    // animationEnabled: true,
                    data: [
                      {
                        type: "pie",
                        dataPoints: dataPoints,
                        // startAngle: 40,
                        // toolTipContent: "<b>{label}</b>: {y}%",
                        // showInLegend: "true",
                        // legendText: "{label}",
                        // indexLabelFontSize: 16,
                        // indexLabel: "{label} - {y}%",
                        // propiedades: [
                        //   {
                        //     // y: 1.88,
                        //     // label: propiedades + " : " + propiedades,
                        //   },
                        //   // {
                        //   //   y: 26.85,
                        //   //   label: statNames[i] + " : " + data.powerstats.strength,
                        //   // },
                        // ],
                      },
                    ],
                  };
                  // $("#chartContainer").CanvasJSChart(options);
                  // console.log(options);
                  // } else {
                  //   // Si no es un número válido, ocultar el elemento
                  //   $(".card-text p").eq(i).hide();
                  // }});
                }
              }

              // let nombre = data.name;
              // console.log(nombre);

              //   for (let property in powerstats) { // recorres y extraemos, la propiedad y el valor
              //     if (powerstats.hasOwnProperty(property)) {
              //       // Extraer el nombre de la propiedad y su valor
              //       let propertyName = property;
              //       let propertyValue = powerstats[property];

              //       // let valores = [];

              //       if (propertyName !== true && propertyName !== undefined && propertyValue !== "null" && propertyValue !== "" && propertyValue !== undefined) {
              //         // valores.push([propertyName, propertyValue]);
              //         // propertyName &&

              //         let propiedades = [propertyName, propertyValue];
              //         // console.log("valores",valores);
              //         // console.log("propiedades",propiedades);
              //         // $(".card-text").append(
              //         //   "<p>" + valores[0] + " : " + valores[1] + "</p>"
              //         // );

              //       }
              //     }

              // }

              // CARD
              $(".card").show();
              $(
                "body > section:nth-child(3) > article.row.justify-content-center.align-items-center > div > h2"
              ).show();
            }
          },
        });
      },
      error: function (error) {
        //si todo sale bien, se agrega la funcionalidad aquí.
        console.log(error + "de APis");
      },
    });
  }


});
