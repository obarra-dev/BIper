
var days = ["Domingo","Lunes","Martes","Tuesday","Miércoles","Viernes","Sábado"];
google.charts.load('current', {'packages':['corechart','bar'], 'language': 'es'});
google.charts.setOnLoadCallback(function(){
  mostrarFrecuencias();
    mostrarPasos();
});



function mostrarFrecuencias() {

  var data = new google.visualization.arrayToDataTable([
    ['Titulo', 'MAX', 'MIN'],
    ['Dia 1',231, 84],
    ['Dia 2',205, 103],
    ['Dia 3',138, 138],
    ['Dia 4',137, 138],
    ['Dia 5',202, 72],
    ['Dia 6',197, 72],
    ['Dia 7',179, 65],

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
                    groupWidth: '80%',
                  }
                };

        var chart = new google.charts.Bar(document.getElementById('tarjetas'));

        chart.draw(view, google.charts.Bar.convertOptions(options));
}

function mostrarPasos() {

    var todosPasos = [
	{
		"id": 6,
		"fecha": "2017-09-09T15:13:56.211260Z",
		"pasosProm": 99
	},
	{
		"id": 7,
		"fecha": "2017-09-09T15:41:35.573202Z",
		"pasosProm": 5000
	},
	{
		"id": 8,
		"fecha": "2017-09-09T15:42:04.818477Z",
		"pasosProm": 99
	},
	{
		"id": 9,
		"fecha": "2017-09-09T16:56:49.562921Z",
		"pasosProm": 99
	},
	{
		"id": 10,
		"fecha": "2017-09-11T23:38:10.534391Z",
		"pasosProm": 99
	},
	{
		"id": 11,
		"fecha": "2017-09-11T23:40:01.185637Z",
		"pasosProm": 99
	},
	{
		"id": 12,
		"fecha": "2017-09-11T23:44:39.481406Z",
		"pasosProm": 88
	},
	{
		"id": 13,
		"fecha": "2017-09-11T23:49:32.495491Z",
		"pasosProm": 68
	},
	{
		"id": 14,
		"fecha": "2017-09-13T00:59:28.549995Z",
		"pasosProm": 88
	},
	{
		"id": 15,
		"fecha": "2017-09-13T00:59:53.773541Z",
		"pasosProm": 88
	}
];

var datos = [];
var titulos =  ['Titulo', 'CANTIDAD'];
datos.push(titulos);
	for (i = 0; i < todosPasos.length; i++) {
	    var pasoAray = [];
        var diaf = days[parseToDate(todosPasos[i].fecha).getDay()];
	    pasoAray.push(diaf);
	    pasoAray.push(todosPasos[i].pasosProm);
	    datos.push(pasoAray);
	}
  var data = new google.visualization.arrayToDataTable(datos);

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
  mostrarFrecuencias();
  mostrarPasos();
});