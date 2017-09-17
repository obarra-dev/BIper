	$.ajax({
        url: '/wsbi/get_recorrido_semanal',
        headers : {
			'Accept' : 'application/json',
			'Content-Type' : 'application/json'
		},
		dataType : "json",
        success: function (data) {

            for (i = 0; i < data.length; i++) {
                 $("#rec-ID").append("<p>"+data[i].camino+"</p>");

            }

        },
        error : function(jqXHR, exception) {
			var msg = '';

		},


      });

