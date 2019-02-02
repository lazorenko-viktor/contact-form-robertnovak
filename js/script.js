(function($){
	
	$('.phone1').mask('999-99-99');
	$('.phone').mask('+38(0382) 99-99-99');
	
	$date = $('.date');
	$date.on('focus', function(){
		$(this).css('border', '');
	}).on('blur', function(){
		if (!validDate($date.val())) {
			$(this).val('').css('border', '1px solid red');
		}
	}).mask('99-99-9999');
	function validDate(str){
		let date = (new Date(str)).getTime();
		if (isNaN(date)) return false;
		let today = new Date();
		today.setFullYear(today.getFullYear() - 12);
		today = today.getTime();
		startDay = (new Date('01-01-1900')).getTime();
		return date > startDay && date < today;
	}
	
	$('.price').on('keypress', function(e){
		let letters='0123456789';
		return (letters.indexOf(String.fromCharCode(e.keyCode))!==-1);
	});

	$('.price2').on('input', function(e){
		let val = parseInt($(this).val());
		if (isNaN(val)) $(this).val('');
		else $(this).val(val);
	});
	
	
	
	noUiSlider.create(document.querySelector('.povzunok'), {
		start: 10,
		range: { 'min': 0, 'max': 100 }
	});
	
	
})(jQuery);