$(document).ready(function(){
		apikey = "key=AIzaSyCR7LDAHDbRY3DpY2353MTRZB4A18E0e8s"
		
		$.ajax({
				url: '/wsbi/get_recorrido_semanal',
				headers : {
					'Accept' : 'application/json',
					'Content-Type' : 'application/json'
					},
				dataType : "json",
				success: function (data) {
					var pattern = /\-*\d+.\d*/g;
					try{
						var result = data[0].camino.match(pattern)
						var lon = new Array();
						var lat = new Array();
						for (i=0; i<result.length;i++) {
							if (i%2 == 0) lat.push(result[i])
							if (i%2 == 1) lon.push(result[i])
						}
						
						url = "https://www.google.com/maps/embed/v1/directions?"
						origin = "&origin="+ lat[0] + "," + lon[0]
						waypoints = "&waypoints="
						for (i=1; i<(result.length/2)-1;i++) {
							waypoints = waypoints + lat[i] + "," + lon[i]
							if(i<(result.length/2)-2)
								waypoints = waypoints + "|";
						}
						destination = "&destination=" + lat[lat.length-1] + "," + lon[lon.length-1]
						mode = "&mode=walking"
						source = url + apikey + origin + waypoints + destination + mode
						
						$("iframe").attr("src",source)
					}
					catch(err) {
						url = "https://www.google.com/maps/embed/v1/place?"
						defecto = "&q=Universidad+Nacional+de+La+Matanza"
						source = url + apikey + defecto
						$("iframe").attr("src",source)
					}
				}
		})

		$("#btn1").click(function(){
				date = $("#fecha-ID").val();
				date = date.replace(/\//g,'');
				
				$.ajax({
				
						url: '/wsbi/get_recorrido_por_fecha/'+date+'/',
						headers : {
							'Accept' : 'application/json',
							'Content-Type' : 'application/json'
						},
						dataType : "json",
						success: function (data) {
							// Formato en el que estan almacenadas las coordenadas: 
							//	[{'lon': -58.417799, 'lat': -34.60098}, .... ,{'lon': -58.417904, 'lat': -34.602156}]
							var pattern = /\-*\d+.\d*/g;
							try{
								var result = data[0].camino.match(pattern)
															
								var lon = new Array();
								var lat = new Array();
								for (i=0; i<result.length;i++) {
									if (i%2 == 0) lat.push(result[i])
									if (i%2 == 1) lon.push(result[i])
								}
								
								url = "https://www.google.com/maps/embed/v1/directions?"
								apikey = "key=AIzaSyCR7LDAHDbRY3DpY2353MTRZB4A18E0e8s"
								origin = "&origin="+ lat[0] + "," + lon[0]
								waypoints = "&waypoints="
								for (i=1; i<(result.length/2)-1;i++) {
									waypoints = waypoints + lat[i] + "," + lon[i]
									if(i<(result.length/2)-2)
										waypoints = waypoints + "|";
								}
								destination = "&destination=" + lat[lat.length-1] + "," + lon[lon.length-1]
								mode = "&mode=walking"
								source = url + apikey + origin + waypoints + destination + mode
								
								$("iframe").attr("src",source)
							}
							catch(err) {
								$("#notificacionID").text("No se han encontrado resultados para la fecha.")
								$("#modal-notificacionID").modal();
							}
						},
						error : function(jqXHR, exception) {
							var msg = 'Error';

						},
				});
		})
})
