$(document).ready(function () {
  // capturo el input de busqueda
  // let inputIn = $("input").click("keyup", function () {
  //   var value = typeof parseInt($(this).val());
  //   value = parseInt(value);
  //   $("p").text(value);

  // 1.Validar que se ingresa solo número
  $(".card").hide();
  $("body > section:nth-child(3) > article:nth-child(1) > h2").hide();
  // $("div#chartContainer").hide();

  let accessToken = "2436613226526027";
  // e.preventDefault();
  $("button").click(function () {
    $(".opcion").text("Loading...");
    let id = parseInt($("#busqueda").val());

    // Verificar si el campo de búsqueda está vacío
    if (isNaN(id) || id > 172) {
      // Si está vacío, mostrar una alerta
      alert(
        "El campo de búsqueda está vacío, contiene letras o es mayor a 172."
      );
    } else {
      // Si no está vacío, saludar

      let test = $.ajax({
        type: "GET",
        url: "https://superheroapi.com/api.php/2436613226526027/" + id,
        dataType: "json",
        success: function (data) {
          //si todo sale bien, se agrega la funcionalidad aquí.
          $(".opcion").text(JSON.stringify(data));
          console.log(data);

          let nombre = data.name;
          $(
            "body > section:nth-child(3) > article.row.align-items-center > div > div > h5"
          ).append(nombre);

          let img = data.image.url;
          let imagen = $("<img>").attr("src", img);

          let url = data.url;
          $("img").attr("src", img);

          let connections = data.connections["group-affiliation"];
          let biography = data.biography["first-appearance"];
          $(".card-text").append(biography);

          let powerstats =
            " " +
            data.powerstats.combat +
            " " +
            data.powerstats.intelligence +
            " " +
            data.powerstats.strength +
            " " +
            data.powerstats.speed +
            " " +
            data.powerstats.durability +
            " " +
            data.powerstats.power +
            " " +
            data.powerstats.combat;
          let powerstatsArray = powerstats.trim().split(/\s+/);
          console.log(powerstats);
          console.log(powerstatsArray);

          // Array de nombres correspondientes a cada stat
          let statNames = [
            "Combat",
            "Intelligence",
            "Strength",
            "Speed",
            "Durability",
            "Power",
            "Combat",
          ];

          // Sumar el valor de combat a cada elemento del arreglo
          for (let i = 0; i < powerstatsArray.length; i++) {
            // Convertir el elemento a entero y sumarle el valor de combat
            powerstatsArray[i] = parseInt(powerstatsArray[i]);

            // Verificar si el resultado es un número válido
            if (!isNaN(powerstatsArray[i])) {
              // Si es un número válido, agregar el nombre del stat y su valor al contenedor
              $(".card-text").append(
                "<p>" + statNames[i] + ": " + powerstatsArray[i] + "</p>"
              );

              //Canvas
              let options = {
                title: {
                  text: nombre,
                },
                // subtitles: [{
                //   text: "As of November, 2017"
                // }],
                animationEnabled: true,
                data: [
                  {
                    type: "pie",
                    startAngle: 40,
                    toolTipContent: "<b>{label}</b>: {y}%",
                    showInLegend: "true",
                    legendText: "{label}",
                    indexLabelFontSize: 16,
                    // indexLabel: "{label} - {y}%",
                    dataPoints: [
                      {
                        y: 1.88,
                        label: statNames[i] + " : " + data.powerstats.combat,
                      },
                      {
                        y: 26.85,
                        label: statNames[i] + " : " + data.powerstats.strength,
                      },
                      {
                        y: 1.49,
                        label: statNames[i] + " : " + data.powerstats.speed,
                      },
                      {
                        y: 6.98,
                        label:
                          statNames[i] + " : " + data.powerstats.durability,
                      },
                      {
                        y: 6.53,
                        label:
                          statNames[i] + " : " + data.powerstats.intelligence,
                      },
                      {
                        y: 2.45,
                        label: statNames[i] + " : " + data.powerstats.power,
                      },
                    ],
                  },
                ],
              };
              $("#chartContainer").CanvasJSChart(options);
              console.log(options);
            } else {
              // Si no es un número válido, ocultar el elemento
              $(".card-text p").eq(i).hide();
            }
          }

          // Recorrer el array y imprimir cada valor en la consola

          // CARD
          $(".card").show();
          $("body > section:nth-child(3) > article:nth-child(1) > h2").show();
        },
        error: function (error) {
          //si todo sale bien, se agrega la funcionalidad aquí.
          console.log(error + "de APis");
        },
      });
    }
  });
});
