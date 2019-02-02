

	document.querySelectorAll('form input').forEach(function(inp){
		inp.addEventListener('blur', function(){
			var lbl = inp.parentElement;
			lbl.classList[inputValidate(inp) ? 'add' : 'remove']('field-checked');
		});
	});

	function inputValidate(inp){
			// if ...
			// if ...
		if (inp.value.length < 3) return false;
		return true;
	}

		$(document).ready(function(){
		    $(".registration, textarea").focus(function(){
		        $(this).css("background", "#fff");
		    });
		});





