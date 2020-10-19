$(function(){
	var $write = $('#write'),
		shift = false,
		capslock = false;

// https://www.w3schools.com/charsets/ref_utf_arrows.asp
	
	$('#keyboard li').click(function(){
		var $this = $(this),
			character = $this.html(); // If it's a lowercase letter, nothing happens to this variable
		alert("We are here");
	});
});
