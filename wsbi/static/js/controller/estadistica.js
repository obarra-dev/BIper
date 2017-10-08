var days = ["Domingo", "Lunes", "Martes", "Tuesday", "Miércoles", "Viernes", "Sábado"];
google.charts.load('current', {
    'packages': ['corechart', 'bar'],
    'language': 'es'
});
google.charts.setOnLoadCallback(function() {
    mostrarFrecuencias();
    mostrarPasos();
});



function mostrarFrecuencias() {
    $.ajax({
        url: '/wsbi/get_pulsos_semanal',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        dataType: "json",
        success: function(data) {
            var todosPulsos = data;
            /**
 var todosPulsos = [
	{
		"id": 1,
		"fecha": "2017-09-09T15:42:04.829506Z",
		"pulsosMax": 300,
		"pulsosMin": 5000
	},
	{
		"id": 2,
		"fecha": "2017-09-11T23:40:01.223697Z",
		"pulsosMax": 300,
		"pulsosMin": 5000
	},
	{
		"id": 3,
		"fecha": "2017-09-11T23:44:39.503464Z",
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
		"fecha": "2017-09-13T00:59:28.623982Z",
		"pulsosMax": 308,
		"pulsosMin": 808
	},
	{
		"id": 6,
		"fecha": "2017-09-13T00:59:53.831248Z",
		"pulsosMax": 308,
		"pulsosMin": 808
	},
	{
		"id": 7,
		"fecha": "2017-10-08T14:26:15.455827Z",
		"pulsosMax": 308,
		"pulsosMin": 808
	}
];
**/
            var datos = [];
            var titulos = ['Titulo', 'MAX', 'MIN'];
            datos.push(titulos);
            var ultimoNoRep = null;
            for (i = 0; i < todosPulsos.length; i++) {
                var pulsoAray = [];
                var diaf = days[parseToDate(todosPulsos[i].fecha).getDay()];
                if (ultimoNoRep === diaf) {
                    continue;
                }
                ultimoNoRep = diaf;
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

            var chart = new google.charts.Bar(document.getElementById('tarjetas'));

            chart.draw(view, google.charts.Bar.convertOptions(options));

        },
        error: function(jqXHR, exception) {
            var msg = 'Error';

        },
    });
}

function mostrarPasos() {
    $.ajax({
        url: '/wsbi/get_pasos_semanal',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        dataType: "json",
        success: function(data) {
            var todosPasos = data;

            var datos = [];
            var titulos = ['Titulo', 'CANTIDAD'];
            datos.push(titulos);
            var ultimoNoRep = null;
            for (i = 0; i < todosPasos.length; i++) {
                var pasoAray = [];
                var diaf = days[parseToDate(todosPasos[i].fecha).getDay()];
                if (ultimoNoRep === diaf) {
                    continue;
                }
                ultimoNoRep = diaf;
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

            var chart = new google.visualization.ColumnChart(document.getElementById('cuentas'));
            chart.draw(view, options);


        },
        error: function(jqXHR, exception) {
            var msg = 'Error';

        },
    });

}

$(window).resize(function() {
    mostrarFrecuencias();
    mostrarPasos();
});