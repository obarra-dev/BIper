

function configurarCalendariosJQ(fechaDesdeID,fechaHastaID){
	configurarCalendarioPrincipalJQ();
	configurarFechaJQ(fechaDesdeID);
	configurarFechaJQ(fechaHastaID);
}

function configurarCalendarioPrincipalJQ(){
	$.datepicker.regional['es'] = objetoFechaJQ();
	$.datepicker.setDefaults($.datepicker.regional['es']);
}

function objetoFechaJQ(){
	return {
 	   closeText: 'Cerrar',
 	   prevText: 'Previo',
 	   nextText: 'Próximo',
 	   yearRange: "1930:2030",
 	   monthNames: ['Enero','Febrero','Marzo','Abril','Mayo','Junio',
 	   'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
 	   monthNamesShort: ['Ene','Feb','Mar','Abr','May','Jun',
 	   'Jul','Ago','Sep','Oct','Nov','Dic'],
 	   monthStatus: 'Ver otro mes', yearStatus: 'Ver otro año',
 	   dayNames: ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'],
 	   dayNamesShort: ['Dom','Lun','Mar','Mie','Jue','Vie','Sáb'],
 	   dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','Sa'],
 	   dateFormat: 'dd/mm/yy', firstDay: 0,
 	   initStatus: 'Selecciona la fecha', isRTL: false};

}

function configurarFechaJQ(fechaID){
	if(fechaID != null && fechaID != undefined){
		$("#"+fechaID ).datepicker({ minDate: "-80Y"});
		$("#"+fechaID ).datepicker( "option", "changeYear", true );
		$("#"+fechaID ).datepicker( "option", "changeMonth", true );
		$("#"+fechaID ).datepicker().datepicker("setDate", new Date());
	}
}

function parseToDate(fechaString, formato) {
	var date = null;
	if(formato === "dd/mm/yyyy"){
		var day = parseInt(fechaString.substring(0,2), 10);
		var month = parseInt(fechaString.substring(3,5), 10) - 1; // JavaScript uses 0-11 for month
		var year = parseInt(fechaString.substring(6,10), 10);

		// Now, create a couple of Date objects.
		date = new Date(year, month, day);

	}else if(formato === "yyyy-mm-dd"){
		var year= parseInt(fechaString.substring(0,4), 10);
		var month = parseInt(fechaString.substring(5,7), 10) - 1; // JavaScript uses 0-11 for month
		var day = parseInt(fechaString.substring(8,10), 10);

		// Now, create a couple of Date objects.
		date = new Date(year, month, day);
	}else{
		date = new Date(fechaString);
	}

    return date;
}