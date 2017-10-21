//var days = ["Domingo", "Lunes", "Martes", "Tuesday", "Miércoles", "Viernes", "Sábado"];
var days = ["DO", "LU", "MA", "MI", "JU", "VI", "SA"];
var months = ["enero", "febrero ", "marzo ", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

google.charts.load('current', {
    'packages': ['corechart', 'bar'],
    'language': 'es'
});


function mostrarFrecuencias(desde, hasta) {
if(desde == null || hasta == null){
    var date = new Date();
    desde = new Date(date.getFullYear(), date.getMonth(), 1);
    desde = formatDate(desde);
    hasta = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    hasta = formatDate(hasta);
}
    $.ajax({
        url: '/wsbi/get_rango_pulsos/'+ desde+'/'+hasta,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        dataType: "json",
        success: function(data) {
            var todosPulsos = data;
/**
  todosPulsos = [
	{
		"id": 1,
		"fecha": "2017-09-01T15:42:04.829506Z",
		"pulsosMax": 300,
		"pulsosMin": 5000
	},
	{
		"id": 2,
		"fecha": "2017-09-02T23:40:01.223697Z",
		"pulsosMax": 300,
		"pulsosMin": 5000
	},
	{
		"id": 3,
		"fecha": "2017-09-03T23:44:39.503464Z",
		"pulsosMax": 308,
		"pulsosMin": 808
	},
	{
		"id": 4,
		"fecha": "2017-09-04T23:49:32.544629Z",
		"pulsosMax": 308,
		"pulsosMin": 606
	},
	{
		"id": 5,
		"fecha": "2017-09-05T23:49:32.544629Z",
		"pulsosMax": 308,
		"pulsosMin": 808
	},
	{
		"id": 6,
		"fecha": "2017-09-06T23:49:32.544629Z",
		"pulsosMax": 308,
		"pulsosMin": 808
	},
	{
		"id": 7,
		"fecha": "2017-09-07T14:26:15.455827Z",
		"pulsosMax": 308,
		"pulsosMin": 808
	},
		{
		"id": 1,
		"fecha": "2017-09-08T15:42:04.829506Z",
		"pulsosMax": 300,
		"pulsosMin": 5000
	},
	{
		"id": 2,
		"fecha": "2017-09-09T23:40:01.223697Z",
		"pulsosMax": 300,
		"pulsosMin": 5000
	},
	{
		"id": 3,
		"fecha": "2017-09-10T23:44:39.503464Z",
		"pulsosMax": 308,
		"pulsosMin": 808
	},
	{
		"id": 4,
		"fecha": "2017-09-11T23:49:32.544629Z",
		"pulsosMax": 308,
		"pulsosMin": 606
	},
	{
		"id": 5,
		"fecha": "2017-09-12T23:49:32.544629Z",
		"pulsosMax": 308,
		"pulsosMin": 808
	},
	{
		"id": 6,
		"fecha": "2017-09-13T23:49:32.544629Z",
		"pulsosMax": 308,
		"pulsosMin": 808
	},
	{
		"id": 7,
		"fecha": "2017-09-14T14:26:15.455827Z",
		"pulsosMax": 308,
		"pulsosMin": 808
	},
		{
		"id": 1,
		"fecha": "2017-09-15T15:42:04.829506Z",
		"pulsosMax": 300,
		"pulsosMin": 5000
	},
	{
		"id": 2,
		"fecha": "2017-09-16T23:40:01.223697Z",
		"pulsosMax": 300,
		"pulsosMin": 5000
	},
	{
		"id": 3,
		"fecha": "2017-09-17T23:44:39.503464Z",
		"pulsosMax": 308,
		"pulsosMin": 808
	},
	{
		"id": 4,
		"fecha": "2017-09-18T23:49:32.544629Z",
		"pulsosMax": 308,
		"pulsosMin": 606
	},
	{
		"id": 5,
		"fecha": "2017-09-19T00:59:28.623982Z",
		"pulsosMax": 308,
		"pulsosMin": 808
	},
	{
		"id": 6,
		"fecha": "2017-09-20T00:59:53.831248Z",
		"pulsosMax": 308,
		"pulsosMin": 808
	},
	{
		"id": 7,
		"fecha": "2017-09-21T14:26:15.455827Z",
		"pulsosMax": 308,
		"pulsosMin": 808
	},
		{
		"id": 1,
		"fecha": "2017-09-22T15:42:04.829506Z",
		"pulsosMax": 300,
		"pulsosMin": 5000
	},
	{
		"id": 2,
		"fecha": "2017-09-23T23:40:01.223697Z",
		"pulsosMax": 300,
		"pulsosMin": 5000
	},
	{
		"id": 3,
		"fecha": "2017-09-24T23:44:39.503464Z",
		"pulsosMax": 308,
		"pulsosMin": 808
	},
	{
		"id": 4,
		"fecha": "2017-09-25T23:49:32.544629Z",
		"pulsosMax": 308,
		"pulsosMin": 606
	},
	{
		"id": 5,
		"fecha": "2017-09-26T00:59:28.623982Z",
		"pulsosMax": 308,
		"pulsosMin": 808
	},
	{
		"id": 6,
		"fecha": "2017-09-27T00:59:53.831248Z",
		"pulsosMax": 308,
		"pulsosMin": 808
	},
	{
		"id": 7,
		"fecha": "2017-09-28T14:26:15.455827Z",
		"pulsosMax": 308,
		"pulsosMin": 808
	},
	{
		"id": 5,
		"fecha": "2017-09-29T00:59:28.623982Z",
		"pulsosMax": 308,
		"pulsosMin": 808
	},
	{
		"id": 6,
		"fecha": "2017-09-30T00:59:53.831248Z",
		"pulsosMax": 308,
		"pulsosMin": 808
	}
];
**/
            var datos = [];
            var titulos = ['', 'MIN', 'MAX'];
            datos.push(titulos);
            var ultimoNoRep = null;
            for (i = 0; i < todosPulsos.length; i++) {
                var pulsoAray = [];
                var dateD = parseToDate(todosPulsos[i].fecha, 'yyyy-mm-ddT');
                var diaf = days[dateD.getDay()];
                var m = dateD.getMonth()+1;
                var formate = dateD.getDate() +'-'+ m +'-'+dateD.getFullYear();
                if (ultimoNoRep === formate) {
                    continue;
                }
                ultimoNoRep = formate;
                pulsoAray.push(diaf);
                pulsoAray.push(todosPulsos[i].pulsosMax);
                pulsoAray.push(todosPulsos[i].pulsosMin);
                datos.push(pulsoAray);
            }
            var data = new google.visualization.arrayToDataTable(datos);

            var view = new google.visualization.DataView(data);
            view.setColumns([0, 1,
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
            ]);



            var options = {
                legend: {
                    'position': 'top',
                    'alignment': 'center'
                },
                height: 300,
                width: '100%',

                series: {
                    0: {
                        color: '#972928'
                    },
                    1: {
                        color: '#D93B3A'
                    },
                },
                chartArea: {
                    left: 40,
                    width: '100%',
                    height: '80%'
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

            var chart = new google.charts.Bar(document.getElementById('pulsoschartID'));

            chart.draw(view, google.charts.Bar.convertOptions(options));

        },
        error: function(jqXHR, exception) {
            var msg = 'Error';

        },
    });
}

function mostrarPasos(desde, hasta) {
if(desde == null || hasta == null){
    var date = new Date();
    desde = new Date(date.getFullYear(), date.getMonth(), 1);
    desde = formatDate(desde);
    hasta = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    hasta = formatDate(hasta);
}
    $.ajax({
        url: '/wsbi/get_rango_pasos/'+ desde+'/'+hasta,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        dataType: "json",
        success: function(data) {
            var todosPasos = data;
      /**
       todosPasos = [
	{
		"id": 1,
		"fecha": "2017-09-01T15:42:04.829506Z",
		"pasosProm": 5000
	},
	{
		"id": 2,
		"fecha": "2017-09-02T23:40:01.223697Z",
		"pasosProm": 5000
	},
	{
		"id": 3,
		"fecha": "2017-09-03T23:44:39.503464Z",
		"pasosProm": 308
	},
	{
		"id": 4,
		"fecha": "2017-09-04T23:49:32.544629Z",
		"pasosProm": 308

	},
	{
		"id": 5,
		"fecha": "2017-09-05T23:49:32.544629Z",
		"pasosProm": 308
	},
	{
		"id": 6,
		"fecha": "2017-09-06T23:49:32.544629Z",
		"pasosProm": 308
	},
	{
		"id": 7,
		"fecha": "2017-09-07T14:26:15.455827Z",
		"pasosProm": 308
	},
		{
		"id": 1,
		"fecha": "2017-09-08T15:42:04.829506Z",
		"pasosProm": 5000
	},
	{
		"id": 2,
		"fecha": "2017-09-09T23:40:01.223697Z",
		"pasosProm": 300
	},
	{
		"id": 3,
		"fecha": "2017-09-10T23:44:39.503464Z",
		"pasosProm": 808
	},
	{
		"id": 4,
		"fecha": "2017-09-11T23:49:32.544629Z",
		"pasosProm": 308
	},
	{
		"id": 5,
		"fecha": "2017-09-12T23:49:32.544629Z",
		"pasosProm": 308
	},
	{
		"id": 6,
		"fecha": "2017-09-13T23:49:32.544629Z",
		"pasosProm": 808
	},
	{
		"id": 7,
		"fecha": "2017-09-14T14:26:15.455827Z",
		"pasosProm": 808
	},
		{
		"id": 1,
		"fecha": "2017-09-15T15:42:04.829506Z",
		"pasosProm": 300
	},
	{
		"id": 2,
		"fecha": "2017-09-16T23:40:01.223697Z",
		"pasosProm": 5000
	},
	{
		"id": 3,
		"fecha": "2017-09-17T23:44:39.503464Z",
		"pasosProm": 808
	},
	{
		"id": 4,
		"fecha": "2017-09-18T23:49:32.544629Z",
		"pasosProm": 606
	},
	{
		"id": 5,
		"fecha": "2017-09-19T00:59:28.623982Z",
		"pasosProm": 808
	},
	{
		"id": 6,
		"fecha": "2017-09-20T00:59:53.831248Z",
		"pasosProm": 808
	},
	{
		"id": 7,
		"fecha": "2017-09-21T14:26:15.455827Z",
		"pasosProm": 308
	},
		{
		"id": 1,
		"fecha": "2017-09-22T15:42:04.829506Z",
		"pasosProm": 5000
	},
	{
		"id": 2,
		"fecha": "2017-09-23T23:40:01.223697Z",
		"pasosProm": 300
	},
	{
		"id": 3,
		"fecha": "2017-09-24T23:44:39.503464Z",
		"pasosProm": 308
	},
	{
		"id": 4,
		"fecha": "2017-09-25T23:49:32.544629Z",
		"pasosProm": 606
	},
	{
		"id": 5,
		"fecha": "2017-09-26T00:59:28.623982Z",
		"pasosProm": 808
	},
	{
		"id": 6,
		"fecha": "2017-09-27T00:59:53.831248Z",
		"pasosProm": 808
	},
	{
		"id": 7,
		"fecha": "2017-09-28T14:26:15.455827Z",
		"pasosProm": 808
	},
	{
		"id": 5,
		"fecha": "2017-09-29T00:59:28.623982Z",
		"pasosProm": 808
	},
	{
		"id": 6,
		"fecha": "2017-09-30T00:59:53.831248Z",
		"pasosProm": 308
	}
];
**/
            var datos = [];
            var titulos = ['Titulo', 'CANTIDAD'];
            datos.push(titulos);
            var ultimoNoRep = null;
            for (i = 0; i < todosPasos.length; i++) {
                var pasoAray = [];
                var dateD = parseToDate(todosPasos[i].fecha, 'yyyy-mm-ddT');
                var diaf = days[dateD.getDay()];
                var m = dateD.getMonth()+1;
                var formate = dateD.getDate() +'-'+ m +'-'+dateD.getFullYear();
                if (ultimoNoRep === formate) {
                    continue;
                }
                ultimoNoRep = formate;


                pasoAray.push(diaf);
                pasoAray.push(todosPasos[i].pasosProm);
                datos.push(pasoAray);
            }
            var data = new google.visualization.arrayToDataTable(datos);

            var view = new google.visualization.DataView(data);
            view.setColumns([0, 1,
                {
                    calc: "stringify",
                    sourceColumn: 1,
                    type: "string",
                    role: "annotation"
                },
            ]);


            var options = {
                legend: {
                    'position': 'top',
                    'alignment': 'center'
                },
                height: 300,
                width: '100%',
                isStacked: 'true',
                series: {
                    0: {
                        color: '#303880'
                    },
                    1: {
                        color: '#434DA2'
                    },
                },
                chartArea: {
                    left: 0,
                    right: 40,
                    width: '100%',
                    height: '80%'
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

            var chart = new google.visualization.ColumnChart(document.getElementById('pasoschartID'));
            chart.draw(view, options);


        },
        error: function(jqXHR, exception) {
            var msg = 'Error';

        },
    });

}


function cambiarChart() {
var mesanio = $( "#mesDia-ID" ).val();
var desde = null;
var hasta = null;
if(mesanio != null && mesanio!= ''){
mesanio =  mesanio.split(" ");
var mes = mesanio[0];
var anio = mesanio[1];
mes = months.indexOf(mes);
var date = new Date();
desde = new Date(anio, mes, 1);
hasta = new Date(anio, mes + 1, 0);
}else{
 var date = new Date();
    desde = new Date(date.getFullYear(), date.getMonth(), 1);

    hasta = new Date(date.getFullYear(), date.getMonth() + 1, 0);

}
    desde = formatDate(desde);
    hasta = formatDate(hasta);

    var isPulsosVisible = $( "#pulsosID" ).is(':visible');
             $( "#pulsoschartID" ).empty();
         $( "#pasoschartID" ).empty();

    if (isPulsosVisible === true) {
         $( "#pulsosID" ).hide();
         $( "#pasosID" ).show();


         google.charts.setOnLoadCallback(function() {
    mostrarPasos(desde, hasta);
});
        } else {
         $( "#pulsosID" ).show();
         $( "#pasosID" ).hide();
         google.charts.setOnLoadCallback(function() {
    mostrarFrecuencias(desde, hasta);

});
    }

	};



function obtenerEstadistica() {
var mesanio = $( "#mesDia-ID" ).val();
if(mesanio == null || mesanio=== ''){
    return;
}
mesanio =  mesanio.split(" ");
var mes = mesanio[0];
var anio = mesanio[1];
mes = months.indexOf(mes);

var date = new Date();
var firstDay = new Date(anio, mes, 1);
var lastDay = new Date(anio, mes + 1, 0);


    var isPulsosVisible = $( "#pulsosID" ).is(':visible');
         $( "#pulsoschartID" ).empty();
         $( "#pasoschartID" ).empty();
    if (isPulsosVisible === true) {
        $( "#pasosID" ).hide();
        $( "#pulsosID" ).show();
         google.charts.setOnLoadCallback(function() {
            mostrarFrecuencias(formatDate(firstDay), formatDate(lastDay));
         });
        } else {
         $( "#pulsosID" ).hide();
         $( "#pasosID" ).show();
         google.charts.setOnLoadCallback(function() {
            mostrarPasos(formatDate(firstDay), formatDate(lastDay));
        });
    }

	};

