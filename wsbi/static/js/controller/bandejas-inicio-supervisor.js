function ajax() {
  // Acá iría la funcionalidad que trae los datos del backend
  sucursal = '802 - Shopping Alto Rosario';
  vendedor1 = 'Cortez, Mario';
  vendedor2 = 'López, Luis';
  vendedor3 = 'Ledesma, Juan';
  vendedor4 = 'Ruiz, Emilio';
}

ajax();

google.charts.load('current', {'packages':['corechart'], 'language': 'es'});
google.charts.setOnLoadCallback(function(){
 // estadisticas();
  tarjetas();
  cuentas();
});

function estadisticas() {
  var data = new google.visualization.arrayToDataTable([
    ['Titulo', 'TC', 'ADICIONALES', 'AMEX', 'SC', 'SEGUROS'],
    ['Nuevo Centro', 27, 50, 30, 95, 18],
    ['Carrefour San Martin', 70, 40, 17, 20, 15],
    ['Dot', 15, 30, 15, 7, 11],
    ['Alem', 90, 45, 24, 24, 10],
    ['Los Arcos', 27, 50, 30, 95, 18],
    ['Alto Rosario', 70, 40, 17, 20, 15],
    ['Alto Palermo', 15, 30, 15, 7, 11],
    ['Tribunales', 15, 30, 15, 7, 11],
    ['Abasto', 89, 43, 22, 24, 19],
    ['Parque Brown', 27, 50, 30, 95, 18],
    ['La Ribera', 89, 43, 22, 24, 19],
    ['Alto Comahue', 70, 40, 17, 20, 15],
    ['Soleil', 15, 30, 15, 7, 11],
    ['Alto Avellaneda', 90, 45, 24, 24, 10],
    ['San Justo Shopping', 89, 43, 22, 24, 19],
  ]);

  var view = new google.visualization.DataView(data);
      view.setColumns([ 0, 
                        1,
                        { 
                          calc: "stringify",
                          sourceColumn: 1,
                          type: "string",
                          role: "annotation" 
                        },
                        2,
                        { 
                          calc: "stringify",
                          sourceColumn: 2,
                          type: "string",
                          role: "annotation" 
                        },
                        3,
                        { 
                          calc: "stringify",
                          sourceColumn: 3,
                          type: "string",
                          role: "annotation" 
                        },
                        4,
                        { 
                          calc: "stringify",
                          sourceColumn: 4,
                          type: "string",
                          role: "annotation" 
                        },
                        5,
                        { 
                          calc: "stringify",
                          sourceColumn: 5,
                          type: "string",
                          role: "annotation" 
                        },
                        ]);


  var options = {
                  legend:{
                    'position':'top',
                    'alignment':'center'
                  },
                  height:400,
                  width:'100%',
                  chartArea: {
                    left: 40,
                    right: 40,
                    width:'100%',
                    height:'80%'
                  },
                  annotations: {
                    textStyle: {
                      color: 'black',
                      fontSize: 12,
                    }
                  },
                  vAxis: {
                    minValue: 0,
                    gridlines: { count: 3 },
                    textPosition: 'none',
                  },
                  bar: {
                    groupWidth: '90%',
                  }
                  // enableInteractivity:false,

                };

  var rows = view.getNumberOfRows()-1;
  var pages = Math.floor(rows/5)+1;
  var currentPage = 1;
  if (pages>1) {
    view.setRows(0,4);
  }
  $('.page-icon.right').click(function() {
    if (pages > currentPage) {
      var min = 5*currentPage;
      var max = (min + 4 < rows ? min + 4 : rows);
      currentPage += 1;
      view.setRows(min,max);
      chart.draw(view, options);
    }
  });
  $('.page-icon.left').click(function() {
    if (currentPage > 1) {
      currentPage -= 1;
      var max = (5*currentPage)-1;
      var min = max - 4;
      view.setRows(min,max);
      chart.draw(view, options);
    }
  });

  var chart = new google.visualization.ColumnChart(document.getElementById('estadisticas'));
  chart.draw(view, options);
}

function tarjetas() {
  var data = new google.visualization.arrayToDataTable([
    ['Titulo', 'MAX', 'MIN'],
    ['Dia 1',231, 84],
    ['Dia 2',205, 103],
    ['Dia 3',138, 138],
    ['Dia 4',137, 138],
    ['Dia 5',202, 72],
    ['Dia 6',197, 72],
    ['Dia 7',179, 65],
    ['Dia 8',171, 62],
    ['Dia 9',165, 60],
    ['Dia 10',153, 56],
    ['Dia 11',152, 55],
    ['Dia 12',138, 50],
    ['Dia 13',136, 50],
    ['Dia 14',109, 40],
    ['Dia 15',83, 30],
  ]);

  var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2,
                       { calc: "stringify",
                         sourceColumn: 2,
                         type: "string",
                         role: "annotation" },]);


  var options = {
                  legend:{
                    'position':'top',
                    'alignment':'center'
                  },
                  height:300,
                  width:'100%',
                  isStacked:'true',
                  series: {
                    0:{color:'#972928'},
                    1:{color:'#D93B3A'},
                  },
                  chartArea: {
                    left: 40,
                    width:'100%',
                    height:'80%'
                  },
                  annotations: {
                    textStyle: {
                      color: 'black',
                      fontSize: 12,
                    },
                  },
                  vAxis: {
                    minValue: 0,
                    ticks: [0],
                    textPosition: 'none',
                  },
                  bar: {
                    groupWidth: '70%',
                  }
                };

  var chart = new google.visualization.ColumnChart(document.getElementById('tarjetas'));
  chart.draw(view, options);
}

function cuentas() {
  var data = new google.visualization.arrayToDataTable([
    ['Titulo', 'PROMEDIO'],
    ['Dia 1',21],
    ['Dia 2',21],
    ['Dia 3',25],
    ['Dia 4',25],
    ['Dia 5',17],
    ['Dia 6',16],
    ['Dia 7',15],
    ['Dia 8',16],
    ['Dia 9',15],
    ['Dia 10',14],
    ['Dia 11',14],
    ['Dia 12',13],
    ['Dia 12',13],
    ['Dia 14',10],
    ['Dia 15',8],
  ]);

  var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       ]);


  var options = {
                  legend:{
                    'position':'top',
                    'alignment':'center'
                  },
                  height:300,
                  width:'100%',
                  isStacked:'true',
                  series: {
                    0:{color:'#303880'},
                    1:{color:'#434DA2'},
                  },
                  chartArea: {
                    left: 0,
                    right: 40,
                    width:'100%',
                    height:'80%'
                  },
                  annotations: {
                    textStyle: {
                      color: 'black',
                      fontSize: 12,
                    },
                  },
                  vAxis: {
                    minValue: 0,
                    ticks: [0],
                    textPosition: 'none',
                  },
                  bar: {
                    groupWidth: '70%',
                  }
                };

  var chart = new google.visualization.ColumnChart(document.getElementById('cuentas'));
  chart.draw(view, options);
}

$(window).resize(function(){
 // estadisticas();
  tarjetas();
  cuentas();
});