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
            todosPulsos = [
   {
      "id":8,
      "fecha":"2017-09-13T00:33:09.316487",
      "pulsosMax":131,
      "pulsosMin":52
   },
   {
      "id":9,
      "fecha":"2017-09-13T00:33:48.546956",
      "pulsosMax":131,
      "pulsosMin":52
   },
   {
      "id":10,
      "fecha":"2017-09-13T01:03:44.235617",
      "pulsosMax":131,
      "pulsosMin":52
   },
   {
      "id":11,
      "fecha":"2017-09-23T23:42:20.243126",
      "pulsosMax":111,
      "pulsosMin":111
   },
   {
      "id":12,
      "fecha":"2017-09-23T23:46:29.098902",
      "pulsosMax":111,
      "pulsosMin":111
   },
   {
      "id":13,
      "fecha":"2017-09-23T23:58:26.937621",
      "pulsosMax":111,
      "pulsosMin":111
   },
   {
      "id":14,
      "fecha":"2017-09-24T00:43:11.999181",
      "pulsosMax":0,
      "pulsosMin":0
   },
   {
      "id":15,
      "fecha":"2017-09-24T00:47:18.225501",
      "pulsosMax":0,
      "pulsosMin":0
   },
   {
      "id":16,
      "fecha":"2017-09-24T00:48:32.060721",
      "pulsosMax":0,
      "pulsosMin":0
   },
   {
      "id":17,
      "fecha":"2017-09-24T00:50:26.825748",
      "pulsosMax":0,
      "pulsosMin":0
   },
   {
      "id":18,
      "fecha":"2017-09-24T00:54:11.966207",
      "pulsosMax":0,
      "pulsosMin":0
   },
   {
      "id":19,
      "fecha":"2017-09-24T00:56:01.640647",
      "pulsosMax":0,
      "pulsosMin":0
   },
   {
      "id":20,
      "fecha":"2017-09-24T00:57:29.281043",
      "pulsosMax":0,
      "pulsosMin":0
   },
   {
      "id":21,
      "fecha":"2017-09-24T01:18:15.125098",
      "pulsosMax":0,
      "pulsosMin":0
   },
   {
      "id":22,
      "fecha":"2017-09-24T01:21:10.377023",
      "pulsosMax":0,
      "pulsosMin":0
   },
   {
      "id":23,
      "fecha":"2017-09-27T23:22:26.396470",
      "pulsosMax":0,
      "pulsosMin":0
   },
   {
      "id":24,
      "fecha":"2017-09-27T23:27:05.156049",
      "pulsosMax":0,
      "pulsosMin":0
   },
   {
      "id":25,
      "fecha":"2017-09-27T23:30:12.942061",
      "pulsosMax":0,
      "pulsosMin":0
   },
   {
      "id":26,
      "fecha":"2017-09-27T23:36:51.627211",
      "pulsosMax":0,
      "pulsosMin":0
   },
   {
      "id":27,
      "fecha":"2017-09-27T23:46:42.869731",
      "pulsosMax":0,
      "pulsosMin":0
   },
   {
      "id":28,
      "fecha":"2017-09-27T23:48:42.344595",
      "pulsosMax":0,
      "pulsosMin":0
   },
   {
      "id":29,
      "fecha":"2017-09-27T23:50:18.555836",
      "pulsosMax":0,
      "pulsosMin":0
   },
   {
      "id":30,
      "fecha":"2017-09-27T23:51:32.588234",
      "pulsosMax":0,
      "pulsosMin":0
   },
   {
      "id":31,
      "fecha":"2017-09-27T23:56:49.638951",
      "pulsosMax":0,
      "pulsosMin":0
   },
   {
      "id":32,
      "fecha":"2017-09-27T23:58:02.685308",
      "pulsosMax":0,
      "pulsosMin":0
   },
   {
      "id":33,
      "fecha":"2017-09-28T00:02:14.568221",
      "pulsosMax":0,
      "pulsosMin":0
   },
   {
      "id":34,
      "fecha":"2017-09-28T00:14:27.890756",
      "pulsosMax":0,
      "pulsosMin":0
   },
   {
      "id":35,
      "fecha":"2017-09-28T00:16:34.405541",
      "pulsosMax":0,
      "pulsosMin":0
   },
   {
      "id":36,
      "fecha":"2017-09-28T00:20:49.646315",
      "pulsosMax":0,
      "pulsosMin":0
   },
   {
      "id":37,
      "fecha":"2017-09-28T00:22:01.688387",
      "pulsosMax":0,
      "pulsosMin":0
   },
   {
      "id":38,
      "fecha":"2017-09-28T00:22:51.031162",
      "pulsosMax":0,
      "pulsosMin":0
   },
   {
      "id":39,
      "fecha":"2017-09-28T00:24:03.651132",
      "pulsosMax":0,
      "pulsosMin":0
   },
   {
      "id":40,
      "fecha":"2017-09-28T00:25:35.886144",
      "pulsosMax":0,
      "pulsosMin":0
   },
   {
      "id":41,
      "fecha":"2017-09-28T00:29:37.247412",
      "pulsosMax":0,
      "pulsosMin":0
   },
   {
      "id":42,
      "fecha":"2017-09-28T00:30:46.876945",
      "pulsosMax":0,
      "pulsosMin":0
   },
   {
      "id":43,
      "fecha":"2017-09-28T00:42:23.944197",
      "pulsosMax":0,
      "pulsosMin":0
   },
   {
      "id":44,
      "fecha":"2017-09-28T00:44:07.269446",
      "pulsosMax":0,
      "pulsosMin":0
   },
   {
      "id":45,
      "fecha":"2017-09-28T00:50:10.943344",
      "pulsosMax":0,
      "pulsosMin":0
   },
   {
      "id":46,
      "fecha":"2017-09-28T00:51:42.335088",
      "pulsosMax":0,
      "pulsosMin":0
   },
   {
      "id":47,
      "fecha":"2017-09-28T01:04:30.075771",
      "pulsosMax":0,
      "pulsosMin":0
   },
   {
      "id":48,
      "fecha":"2017-09-28T01:06:47.010134",
      "pulsosMax":0,
      "pulsosMin":0
   },
   {
      "id":49,
      "fecha":"2017-09-28T01:08:02.325480",
      "pulsosMax":0,
      "pulsosMin":0
   },
   {
      "id":50,
      "fecha":"2017-09-28T01:16:10.194972",
      "pulsosMax":0,
      "pulsosMin":0
   },
   {
      "id":51,
      "fecha":"2017-09-28T01:17:18.633716",
      "pulsosMax":0,
      "pulsosMin":0
   },
   {
      "id":52,
      "fecha":"2017-09-28T01:18:08.282851",
      "pulsosMax":0,
      "pulsosMin":0
   },
   {
      "id":53,
      "fecha":"2017-09-28T01:23:23.212639",
      "pulsosMax":0,
      "pulsosMin":0
   },
   {
      "id":54,
      "fecha":"2017-09-28T01:28:42.434085",
      "pulsosMax":0,
      "pulsosMin":0
   },
   {
      "id":55,
      "fecha":"2017-09-28T01:30:08.403567",
      "pulsosMax":0,
      "pulsosMin":0
   },
   {
      "id":56,
      "fecha":"2017-09-28T01:32:01.550928",
      "pulsosMax":0,
      "pulsosMin":0
   },
   {
      "id":57,
      "fecha":"2017-09-29T23:20:48.169592",
      "pulsosMax":0,
      "pulsosMin":0
   },
   {
      "id":58,
      "fecha":"2017-09-29T23:22:23.035210",
      "pulsosMax":0,
      "pulsosMin":0
   },
   {
      "id":59,
      "fecha":"2017-09-30T21:50:13.237907",
      "pulsosMax":255,
      "pulsosMin":755
   },
   {
      "id":60,
      "fecha":"2017-09-30T21:50:24.470242",
      "pulsosMax":255,
      "pulsosMin":755
   }
];
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
	    //setea valores por defecto desde el ultimo dia registrado hasta el fin de mes
            var hoyDate = new Date();
            var ultiDate = new Date(hoyDate.getFullYear(), hoyDate.getMonth() + 1, 0);
            for (j = cantTotal; j < ultiDate.getDate(); j++) {
                    var cerros = [];
                    var diaNum = j;
                    if(diaNum>6){
                        diaNum  = j % 7;
                    }
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
            todosPasos = [
   {
      "id":61,
      "fecha":"2017-10-08T23:52:10.198628",
      "pasosProm":1
   },
   {
      "id":65,
      "fecha":"2017-10-10T03:33:08.236118",
      "pasosProm":76
   },
   {
      "id":64,
      "fecha":"2017-10-10T03:23:15.378494",
      "pasosProm":67
   },
   {
      "id":63,
      "fecha":"2017-10-10T03:19:16.921614",
      "pasosProm":98
   },
   {
      "id":62,
      "fecha":"2017-10-10T02:46:19.897334",
      "pasosProm":89
   },
   {
      "id":66,
      "fecha":"2017-10-21T17:34:46.451564",
      "pasosProm":1
   },
   {
      "id":67,
      "fecha":"2017-10-21T18:15:20.027677",
      "pasosProm":1
   },
   {
      "id":68,
      "fecha":"2017-10-21T19:08:12.155967",
      "pasosProm":99
   }
];

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
            //setea valores por defecto desde el ultimo dia registrado hasta el fin de mes
            var hoyDate = new Date();
            var ultiDate = new Date(hoyDate.getFullYear(), hoyDate.getMonth() + 1, 0);
            for (j = cantTotal; j < ultiDate.getDate(); j++) {
                    var cerros = [];
                    var diaNum = j;
                    if(diaNum>6){
                        diaNum  = j % 7;
                    }
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

