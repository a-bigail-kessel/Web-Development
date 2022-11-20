console.log("loaded!");

$(function(){
    console.log ('Jquery loaded'); 

    //houston
    $('#houston').click(function(){
      $('#hTown').css({"display": "block"});
      $('#Hchart').css({"display": "block"});
      drawHoustonChart();
            });
  
      $("#houstonC").click(function(){
        $('#hTown').css({"display": "none"});
      })

      $("#houstonC2").click(function(){
        $('#hTown').css({"display": "none"});
      })

// new york
  $('#newyork').click(function(){
    $('#met').css({"display": "block"});
    $('#NYpiechart').css({"display": "block"});
    drawNYChart();
          });
    $("#metC").click(function(){
      $('#met').css({"display": "none"});
    })

    $("#metC2").click(function(){
      $('#met').css({"display": "none"});
    })

//boston
    $('#boston').click(function(){
      $('#bTown').css({"display": "block"});
      $('#Bpiechart').css({"display": "block"});
      drawBostonChart();

            });
  
      $("#bostonC").click(function(){
        $('#bTown').css({"display": "none"});
      })

      $("#bostonC2").click(function(){
        $('#bTown').css({"display": "none"});
      })


//chicago
$('#chicago').click(function(){
  $('#cTown').css({"display": "block"});
  $('#Chipiechart').css({"display": "block"});
    drawChiChart();
        });

  $("#chicagoC").click(function(){
    $('#cTown').css({"display": "none"});
  })

  $("#chicagoC2").click(function(){
    $('#cTown').css({"display": "none"});
  })


//la
$('#la').click(function(){
  $('#LACMA').css({"display": "block"});
  $('#LApiechart').css({"display": "block"});
  drawLAChartt();
        });

  $("#laC").click(function(){
    $('#LACMA').css({"display": "none"});
  })

  $("#laC2").click(function(){
    $('#LACMA').css({"display": "none"});
  })


});

// Get the modal
var modal = document.getElementById("myModal");
var modalclose = document.getElementById("modalclose");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
modalclose.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

google.charts.load('current', {'packages':['corechart']});
      // google.charts.setOnLoadCallback(drawBigChart);
      google.charts.setOnLoadCallback(drawNYChart);
      google.charts.setOnLoadCallback(drawChiChart);
      google.charts.setOnLoadCallback(drawBostonChart);
      google.charts.setOnLoadCallback(drawHoustonChart);
      google.charts.setOnLoadCallback(drawLAChart);

      // MET CHART
      function drawNYChart() {

        var data = google.visualization.arrayToDataTable([
          ['Ethincity', 'Amount'],
          ['White',     472],
          ['Other',      7],
          ['Latino',  8],
          ['Black', 1],
          ['Asian',    43],
        ]);

        var options = {
          title: '',
          backgroundColor: { fill:'transparent' },
          'chartArea': {'width': '100%', 'height': '80%'},
        };


        var NYchart = new google.visualization.PieChart(document.getElementById('NYpiechart'));

        NYchart.draw(data, options);
      }


      // BFA CHART
      function drawBostonChart() {

        var data = google.visualization.arrayToDataTable([
          ['Ethincity', 'Amount'],
          ['White',     377],
          ['Other',      4],
          ['Latino',  10],
          ['Black', 5],
          ['Asian',    76],
        ]);

        var options = {
          title: '',
          backgroundColor: { fill:'transparent' }
        };


        var Bostonchart = new google.visualization.PieChart(document.getElementById('Bpiechart'));

        Bostonchart.draw(data, options);
      }


      // AIC CHART 
      function drawChiChart() {

        var data = google.visualization.arrayToDataTable([
          ['Ethincity', 'Amount'],
          ['White',     309],
          ['Other',      1],
          ['Latino',  7],
          ['Black', 1],
          ['Asian',    24],
        ]);

        var options = {
          title: '',
          backgroundColor: { fill:'transparent' }
        };


        var Chichart = new google.visualization.PieChart(document.getElementById('Chipiechart'));

        Chichart.draw(data, options);
      }

       // HOUSTON CHART 
       function drawHoustonChart() {

        var data = google.visualization.arrayToDataTable([
          ['Ethincity', 'Amount'],
          ['White',     309],
          ['Other',      1],
          ['Latino',  7],
          ['Black', 1],
          ['Asian',    24],
        ]);

        var options = {
          title: '',
          backgroundColor: { fill:'transparent' }
        };


        var Hchart = new google.visualization.PieChart(document.getElementById('Hchart'));

        Hchart.draw(data, options);
      }


       // LACMA CHART 
       function drawLAChart() {

        var data = google.visualization.arrayToDataTable([
          ['Ethincity', 'Amount'],
          ['White',     401],
          ['Other',      6],
          ['Latino',  15],
          ['Black', 0],
          ['Asian',    91],
        ]);

        var options = {
          title: '',
          backgroundColor: { fill:'transparent' }
        };


        var LAchart = new google.visualization.PieChart(document.getElementById('LApiechart'));

        LAchart.draw(data, options);
      }
    

    //   // BIG DATA
    //   function drawBigChart() {

    //   var data = google.visualization.arrayToDataTable([
    //     ['White', 'Other', 'Latino', 'Black', 'Asian',
    //      'Not Inferred', { role: 'annotation' } ],
    //     ['Metropolitan Museum of Art', 471, 7, 8, 1, 43, 138, ''],
    //     ['Museum of Fine Art Boston', 16, 22, 23, 30, 16, 9, ''],
    //     ['Art Institute Chicago', 28, 19, 29, 30, 12, 13, ''],
    //     ['Museum of Fine Arts Houston', 28, 19, 29, 30, 12, 13, ''],
    //     ['Los Angeles County Museum of Art', 28, 19, 29, 30, 12, 13, '']
    //   ]);

    //   var options = {
    //     title: '',
    //     backgroundColor: { fill:'transparent' },
    //     legend: { position: 'top', maxLines: 3 },
    //     bar: { groupWidth: '75%' },
    //     // isStacked: true,
    //     isStacked: 'percent',
    //     hAxis: {
    //       minValue: 0,
    //       ticks: [0, .3, .6, .9, 1]
    //     }
    //   };

    //   var Bigchart = new google.visualization.BarChart(document.getElementById('BigChart'));

    //   Bigchart.draw(data, options);
    // }