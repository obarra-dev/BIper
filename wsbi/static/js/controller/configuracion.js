	var recordatoriosAux = [] ;
	$.ajax({
        url: '/wsbi/config/1',
        headers : {
			'Accept' : 'application/json',
			'Content-Type' : 'application/json'
		},
		dataType : "json",
        success: function (data) {
            $('#pulsomin-ID').val(data.pulsoMin);
            $('#pulsomax-ID').val(data.pulsoMax);
            $('#pasosmin-ID').val(data.pasosMin);
            recordatoriosAux = data.recordatorios;
            setTablaRecordatorios(recordatoriosAux);


        },
        error : function(jqXHR, exception) {
		},


      });

$(function() {
		$('#tablerecordatorios-ID').dataTable({
			"oLanguage": {
			    "sEmptyTable": function(){ return "No posee"; }
			},
			"bPaginate": false,
			"filter" : false,
			"columns" : [ {
				"defaultContent" : ""
			}, {
				"data" : "titulo"
			}, {
				"data" : "hora"
			}, {
				"data" : "min"
			}, {
				"data" : "repeticion"
			}],
			"paging" : false,
			"ordering" : true,
			"info" : false
		});

	});

function setTablaRecordatorios(recordatorios) {
		//for (var i = adicionales.length - 1; i >= 0; i--) {}
		var table = $('#tablerecordatorios-ID').DataTable();
		table.clear();
		table.on( 'order.dt', function () {
	        table.column(0).nodes().each( function (cell, i) {
	            cell.innerHTML = i+1;
	        });
	    }).draw();
		table.rows.add(recordatorios).draw();

	};

function abrirRecordatorio() {
    for (i = 0; i < recordatoriosAux.length; i++) {
          $("#side-menu-ID").append("<li style=\"list-style: none; border-bottom:0px;\"> <a style=\"padding: 10px !important;\"><span>"+ recordatoriosAux[i].titulo+"<br>"+ recordatoriosAux[i].hora+"<br>"+"</span></a><span><hr class=\"line-collapsed\"></span></li>");
    }
      $("#recordatorio-ID").modal();
}
