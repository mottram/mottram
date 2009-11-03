$(document).ready(function() {  
    $('input[type="text"]').addClass("idle");  
    $('input[type="text"]').focus(function() {  
        $(this).removeClass("idleField").addClass("focus");  
        if (this.value == this.defaultValue){  
            this.value = '';  
        }  
        if(this.value != this.defaultValue){  
            this.select();  
        }  
    });  
    $('input[type="text"]').blur(function() {  
        $(this).removeClass("focusField").addClass("idle");  
        if ($.trim(this.value == '')){  
            this.value = (this.defaultValue ? this.defaultValue : '');  
        }  
    });  

	$('#archive div').hide();
	$('#archive div:first').show();
	$('#archive ul li:first').addClass('active');
	$('#archive ul li a').click(function(){
		$('#archive ul li').removeClass('active');
		$(this).parent().addClass('active');
		var currentTab = $(this).attr('href');
		$('#archive div').fadeOut("fast");
		$(currentTab).fadeIn("fast");
		return false;
		});
		
		$(function(){
			$("#more li").quickpaginate({ perpage: 10, showcounter: true, pager : $("#more_counter") });
		});
		
		$("a#inline").fancybox({
			'frameWidth': 400,
			'frameHeight': 400
		});
});