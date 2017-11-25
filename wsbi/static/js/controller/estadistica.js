//var days = ["Domingo", "Lunes", "Martes", "Tuesday", "Miércoles", "Viernes", "Sábado"];
var days = ["DO", "LU", "MA", "MI", "JU", "VI", "SA"];
var months = ["enero", "febrero ", "marzo ", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

google.charts.load('current', {
    'packages': ['corechart', 'bar'],
    'language': 'es'
});


function mostrarFrecuencias(desde, hasta) {
var dateConsulta = new Date();
if(desde == null || hasta == null){
    var date = new Date();
    desde = new Date(date.getFullYear(), date.getMonth(), 1);
    desde = formatDate(desde);
    hasta = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    hasta = formatDate(hasta);
}else{
dateConsulta =  parseToDate(desde,"ddmmyyyy");
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

var todosPulsoNoRep = [];
var ultimoNoRep = null;
for (i = 0; i < todosPulsos.length; i++) {
                var dateD = parseToDate(todosPulsos[i].fecha, 'yyyy-mm-ddT');
                var m = dateD.getMonth()+1;
                var formate = dateD.getDate() +'-'+ m +'-'+dateD.getFullYear();

                if (ultimoNoRep === formate) {
                    continue;
                }
                ultimoNoRep = formate;
todosPulsoNoRep.push(todosPulsos[i]);

}
            var datos = [];
            var titulos = ['', 'MIN', 'MAX'];
            datos.push(titulos);

            var diaAnteriorLeido = 1;
            var contDiaNum = 0;
            var cantTotal = 0;
            for (i = 0; i < todosPulsoNoRep.length; i++) {
                var pulsoAray = [];
                var dateD = parseToDate(todosPulsoNoRep[i].fecha, 'yyyy-mm-ddT');
                var diaNum = dateD.getDay();
                var diaf = days[diaNum];

                contDiaNum = diaNum;
                //setea valores por defecto entre fechas
                for (k = diaAnteriorLeido; k < dateD.getDate(); k++) {
                    var cerros = [];
                    if(contDiaNum>6){
                        contDiaNum  = contDiaNum % 7;
                    }
                    cerros.push(days[contDiaNum]);
                    cerros.push(0);
                    cerros.push(0);
                    datos.push(cerros);
                    contDiaNum ++;
                    cantTotal++;
                }
                pulsoAray.push(diaf);
                pulsoAray.push(todosPulsoNoRep[i].pulsosMin);
                pulsoAray.push(todosPulsoNoRep[i].pulsosMax);
		        datos.push(pulsoAray);
                diaAnteriorLeido = dateD.getDate() +1;
                cantTotal++;

            }

            var ultiDate = new Date(dateConsulta.getFullYear(), dateConsulta.getMonth() + 1, 0);

            for (j = cantTotal+1; j < ultiDate.getDate()+1; j++) {
                    var cerros = [];
                    var diaNum = getNumeroDia(dateConsulta.getFullYear(), dateConsulta.getMonth(), j);
                    cerros.push(days[diaNum]);
                    cerros.push(0);
                    cerros.push(0);
                    datos.push(cerros);
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
var dateConsulta = new Date();
if(desde == null || hasta == null){
    var date = new Date();
    desde = new Date(date.getFullYear(), date.getMonth(), 1);
    desde = formatDate(desde);
    hasta = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    hasta = formatDate(hasta);
}else{
dateConsulta =  parseToDate(desde,"ddmmyyyy");
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


var todosPasosNoRep = [];
var ultimoNoRep = null;
for (i = 0; i < todosPasos.length; i++) {
                var dateD = parseToDate(todosPasos[i].fecha, 'yyyy-mm-ddT');
                var m = dateD.getMonth()+1;
                var formate = dateD.getDate() +'-'+ m +'-'+dateD.getFullYear();

                if (ultimoNoRep === formate) {
                    continue;
                }
                ultimoNoRep = formate;
todosPasosNoRep.push(todosPasos[i]);

}
            var datos = [];
            var titulos = ['Titulo', 'CANTIDAD'];
            datos.push(titulos);

            var diaAnteriorLeido = 1;
            var contDiaNum = 0;
            var cantTotal = 0;
            for (i = 0; i < todosPasosNoRep.length; i++) {
                var pasoAray = [];
                var dateD = parseToDate(todosPasosNoRep[i].fecha, 'yyyy-mm-ddT');
                var diaNum = dateD.getDay();
                var diaf = days[diaNum];

                contDiaNum = diaNum;
                //setea valores por defecto entre fechas
                for (k = diaAnteriorLeido; k < dateD.getDate(); k++) {
                    var cerros = [];
                    if(contDiaNum>6){
                        contDiaNum  = contDiaNum % 7;
                    }
                    cerros.push(days[contDiaNum]);
                    cerros.push(0);
                    datos.push(cerros);
                    contDiaNum ++;
                    cantTotal++;
                }

                pasoAray.push(diaf);
                pasoAray.push(todosPasosNoRep[i].pasosProm);
                datos.push(pasoAray);
                diaAnteriorLeido = dateD.getDate() +1;
                cantTotal++;
            }

            var ultiDate = new Date(dateConsulta.getFullYear(), dateConsulta.getMonth() + 1, 0);

            for (j = cantTotal+1; j < ultiDate.getDate()+1; j++) {
                    var cerros = [];
                    var diaNum = getNumeroDia(dateConsulta.getFullYear(), dateConsulta.getMonth(), j);

                    cerros.push(days[diaNum]);
                    cerros.push(0);
                    datos.push(cerros);
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

                series: {
                    0: {
                        color: '#303880'
                    },
                    1: {
                        color: '#434DA2'
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
                    groupWidth: '70%',
                }
            };


	        var chart = new google.charts.Bar(document.getElementById('pasoschartID'));

            chart.draw(view, google.charts.Bar.convertOptions(options));

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

