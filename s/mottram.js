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

	$('#archive section').hide();
	$('#archive section:first').show();
	$('#archive ul li:first').addClass('active');
	$('#archive ul li a').click(function(){
		$('#archive ul li').removeClass('active');
		$(this).parent().addClass('active');
		var currentTab = $(this).attr('href');
		$('#archive section').fadeOut("fast");
		$(currentTab).fadeIn("fast");
		return false;
		});
		
		$("a#inline").fancybox({
			'frameWidth': 600,
			'frameHeight': 400
		});

		$("a[title], img[title], p[title], abbr[title]").qtip({
		   	show: { delay: 600, effect: { length: 100, type: 'fade' } },
			hide: { effect: { length: 200, type: 'fade' } },
			position: { corner: { target: 'rightBottom' } },
		   style: {
			'z-index': 999,
			  'font-size': 12,
		      padding: 4,
		      background: '#ffffff',
		      color: '#555555',
		      textAlign: 'left',
		      border: {
		         width: 1,
		         color: '#dddddd'
		      },
		      name: 'light' // Inherit the rest of the attributes from the preset dark style
		   }
		});	
		
		jQuery(function($){

		$("h1").each(
		    function(){
		        $(this).html($(this).html().replace(/&amp;/g,'<span class="amp">&amp;<\/span>'));
		    }
		);

		});
});
