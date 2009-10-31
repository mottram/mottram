$(document).ready(function() {
	$('#archive div').hide();
	$('#archive div:first').show();
	$('#archive ul li:first').addClass('active');
	$('#archive ul li a').click(function(){
		$('#archive ul li').removeClass('active');
		$(this).parent().addClass('active');
		var currentTab = $(this).attr('href');
		$('#archive div').hide();
		$(currentTab).show();
		return false;
		});
});