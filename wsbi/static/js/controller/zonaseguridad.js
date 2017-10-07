

var geocoder;
var map;
var latitud="-34.6704143";
var longitud="-58.5629288";

function initMap() {
   $.ajax({
        url: '/wsbi/get_zonaseguridad',
        headers : {
			'Accept' : 'application/json',
			'Content-Type' : 'application/json'
		},
		dataType : "json",
        success: function (data) {

           if (data.length > 0) //si no tiene dato registrado muestra la geolocalizacion de la UNLaM
            {
             $('#address').val(data[0].dirreccion);
             $('#latitude').val(data[0].origenX);
             $('#longitude').val(data[0].origenY);
             $('#distance').val(data[0].distanciaMax);
             latitud = data[0].origenX;
             longitud = data[0].origenY;
            }

            geocoder = new google.maps.Geocoder();
            var latlng = new google.maps.LatLng(latitud, longitud);
            var mapOptions = {
              zoom: 15,
              center: latlng
             }
            map = new google.maps.Map(document.getElementById('map'), mapOptions);
          },
        error : function(jqXHR, exception) {
		},
      });
   }

function codeAddress() {
   var address = document.getElementById('address').value;
   geocoder.geocode({'address': address}, function(results, status) {
   if (status === 'OK') {
      map.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
         map: map,
         position: results[0].geometry.location
         });
      $("#latitude").val(results[0].geometry.location.lat());
      $("#longitude").val(results[0].geometry.location.lng());
      $("#address").val(results[0].formatted_address);
   } else {
   alert('Geocode was not successful for the following reason: ' + status);
      }
   });
  }

function subirDatos() {
   //validaciones
    var distance = /^([1-9]|[1-9][0-9]|[1-9][0-9][0-9])$/;
    if( $("#address").val() == "" ){
            $("#address").focus().after("<span class='error'>Ingrese dirección origen</span>");
            return false;
        }else if( $("#distance").val() == "" || !distance.test($("#distance").val()) ){
            $("#distance").focus().after("<span class='error'>Ingrese un rango valido de 1-999</span>");
            return false;
         }
    document.formzonaseguridad.submit();
}