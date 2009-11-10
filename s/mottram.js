/*
 * FancyBox - jQuery Plugin
 * simple and fancy lightbox alternative
 *
 * Copyright (c) 2009 Janis Skarnelis
 * Examples and documentation at: http://fancybox.net
 * 
 * Version: 1.2.4 (02/11/2009)
 * Requires: jQuery v1.3+
 * 
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
 
;eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}(';(p($){$.q.2i=p(){I L.2j(p(){n b=$(L).v(\'2k\');8(b.19(/^3h\\(["\']?(.*\\.2l)["\']?\\)$/i)){b=3i.$1;$(L).v({\'2k\':\'3j\',\'2m\':"3k:3l.3m.3n(3o=D, 3p="+($(L).v(\'3q\')==\'2n-3r\'?\'3s\':\'3t\')+", X=\'"+b+"\')"}).2j(p(){n a=$(L).v(\'1q\');8(a!=\'2o\'&&a!=\'2p\')$(L).v(\'1q\',\'2p\')})}})};n l,4,1a=M,V=1r 1s,1t,1u=1,1v=/\\.(3u|3v|2l|3w|3x)(.*)?$/i;n m=1w,15=$.1b.1x&&$.1b.2q.1N(0,1)==6&&!16.3y,1O=15||($.1b.1x&&$.1b.2q.1N(0,1)==7);$.q.r=p(o){n j=$.2r({},$.q.r.2s,o);n k=L;p 2t(){l=L;4=$.2r({},j);2u();I M};p 2u(){8(1a)I;8($.1P(4.1Q)){4.1Q()}4.u=[];4.t=0;8(j.u.Y>0){4.u=j.u}B{n a={};8(!l.1y||l.1y==\'\'){n a={J:l.J,F:l.F};8($(l).1z("1h:1A").Y){a.S=$(l).1z("1h:1A")}B{a.S=$(l)}8(a.F==\'\'||2v a.F==\'1i\'){a.F=a.S.2w(\'1R\')}4.u.2x(a)}B{n b=$(k).2m("a[1y="+l.1y+"]");n a={};3z(n i=0;i<b.Y;i++){a={J:b[i].J,F:b[i].F};8($(b[i]).1z("1h:1A").Y){a.S=$(b[i]).1z("1h:1A")}B{a.S=$(b[i])}8(a.F==\'\'||2v a.F==\'1i\'){a.F=a.S.2w(\'1R\')}4.u.2x(a)}}}3A(4.u[4.t].J!=l.J){4.t++}8(4.1B){8(15){$(\'1S, 1T, 1U\').v(\'1V\',\'3B\');$("#Z").v(\'z\',$(T).z())}$("#Z").v({\'3C-3D\':4.2y,\'1W\':4.2z}).W()}1c()};p 1c(){$("#1j, #1k, #1d, #G").11();n b=4.u[4.t].J;8(b.19("1e")||l.3E.2A("1e")>=0){$.q.r.1C();1l(\'<1e s="2B" 3F="2C.q.r.2D()" 3G="3H\'+N.17(N.3I()*3J)+\'" 2E="0" 3K="0" X="\'+b+\'"></1e>\',4.1D,4.1E)}B 8(b.19(/#/)){n c=16.3L.J.3M(\'#\')[0];c=b.3N(c,\'\');c=c.1N(c.2A(\'#\'));1l(\'<9 s="3O">\'+$(c).2F()+\'</9>\',4.1D,4.1E)}B 8(b.19(1v)){V=1r 1s;V.X=b;8(V.3P){1X()}B{$.q.r.1C();$(V).O().13(\'3Q\',p(){$("#P").11();1X()})}}B{$.q.r.1C();$.3R(b,p(a){$("#P").11();1l(\'<9 s="3S">\'+a+\'</9>\',4.1D,4.1E)})}};p 1X(){n a=V.E;n b=V.z;n c=(4.K*2)+40;n d=(4.K*2)+1Y;n w=$.q.r.1m();8(4.2G&&(a>(w[0]-c)||b>(w[1]-d))){n e=N.1Z(N.1Z(w[0]-c,a)/a,N.1Z(w[1]-d,b)/b);a=N.17(e*a);b=N.17(e*b)}1l(\'<1h 1R="" s="3T" X="\'+V.X+\'" />\',a,b)};p 2H(){8((4.u.Y-1)>4.t){n a=4.u[4.t+1].J;8(a.19(1v)){1F=1r 1s();1F.X=a}}8(4.t>0){n a=4.u[4.t-1].J;8(a.19(1v)){1F=1r 1s();1F.X=a}}};p 1l(a,b,c){1a=D;n d=4.K;8(1O||m){$("#y")[0].1G.2I("z");$("#y")[0].1G.2I("E")}8(d>0){b+=d*2;c+=d*2;$("#y").v({\'A\':d+\'Q\',\'2J\':d+\'Q\',\'2K\':d+\'Q\',\'C\':d+\'Q\',\'E\':\'2L\',\'z\':\'2L\'});8(1O||m){$("#y")[0].1G.2M(\'z\',\'(L.2N.3U - \'+d*2+\')\');$("#y")[0].1G.2M(\'E\',\'(L.2N.3V - \'+d*2+\')\')}}B{$("#y").v({\'A\':0,\'2J\':0,\'2K\':0,\'C\':0,\'E\':\'2O%\',\'z\':\'2O%\'})}8($("#x").1H(":1f")&&b==$("#x").E()&&c==$("#x").z()){$("#y").21("2P",p(){$("#y").1n().1I($(a)).22("1J",p(){1o()})});I}n w=$.q.r.1m();n e=(c+1Y)>w[1]?w[3]:(w[3]+N.17((w[1]-c-1Y)/2));n f=(b+40)>w[0]?w[2]:(w[2]+N.17((w[0]-b-40)/2));n g={\'C\':f,\'A\':e,\'E\':b+\'Q\',\'z\':c+\'Q\'};8($("#x").1H(":1f")){$("#y").21("1J",p(){$("#y").1n();$("#x").23(g,4.2Q,4.2R,p(){$("#y").1I($(a)).22("1J",p(){1o()})})})}B{8(4.24>0&&4.u[4.t].S!==1i){$("#y").1n().1I($(a));n h=4.u[4.t].S;n i=$.q.r.25(h);$("#x").v({\'C\':(i.C-20-4.K)+\'Q\',\'A\':(i.A-20-4.K)+\'Q\',\'E\':$(h).E()+(4.K*2),\'z\':$(h).z()+(4.K*2)});8(4.26){g.1W=\'W\'}$("#x").23(g,4.24,4.2S,p(){1o()})}B{$("#y").11().1n().1I($(a)).W();$("#x").v(g).22("1J",p(){1o()})}}};p 2T(){8(4.t!=0){$("#1k, #2U").O().13("14",p(e){e.2V();4.t--;1c();I M});$("#1k").W()}8(4.t!=(4.u.Y-1)){$("#1j, #2W").O().13("14",p(e){e.2V();4.t++;1c();I M});$("#1j").W()}};p 1o(){2T();2H();$(T).13("1K.R",p(e){8(e.28==27&&4.2X){$.q.r.18()}B 8(e.28==37&&4.t!=0){$(T).O("1K.R");4.t--;1c()}B 8(e.28==39&&4.t!=(4.u.Y-1)){$(T).O("1K.R");4.t++;1c()}});8(4.29){$(16).13("2a.R 2b.R",$.q.r.2Y)}8(4.2Z){$("#y").14($.q.r.18)}8(4.1B&&4.30){$("#Z").13("14",$.q.r.18)}8(4.31){$("#1d").13("14",$.q.r.18).W()}8(4.u[4.t].F!==1i&&4.u[4.t].F.Y>0){n a=$("#x").1q();$(\'#G 9\').2F(4.u[4.t].F);$(\'#G\').v({\'A\':a.A+$("#x").33()-32,\'C\':a.C+(($("#x").34()/2)-($(\'#G\').E()/2))}).W()}8(4.1B&&15){$(\'1S, 1T, 1U\',$(\'#y\')).v(\'1V\',\'1f\')}8($.1P(4.2c)){4.2c(4.u[4.t])}1a=M};I L.O(\'14.R\').14(2t)};$.q.r.2Y=p(){n w=$.q.r.1m();n a=$("#x").34();n b=$("#x").33();n c={\'A\':(b>w[1]?w[3]:w[3]+N.17((w[1]-b)*0.5)),\'C\':(a>w[0]?w[2]:w[2]+N.17((w[0]-a)*0.5))};$("#x").v(c);$(\'#G\').v({\'A\':c.A+b-32,\'C\':c.C+((a*0.5)-($(\'#G\').E()/2))});8(15){$("#Z").v({\'z\':$(T).z()})}};$.q.r.1p=p(a,b){I 3W($.3X(a.3Y?a[0]:a,b,D))||0};$.q.r.25=p(a){n b=a.3Z();b.A+=$.q.r.1p(a,\'41\');b.A+=$.q.r.1p(a,\'42\');b.C+=$.q.r.1p(a,\'43\');b.C+=$.q.r.1p(a,\'44\');I b};$.q.r.2D=p(){$("#P").11();$("#2B").W()};$.q.r.1m=p(){I[$(16).E(),$(16).z(),$(T).45(),$(T).46()]};$.q.r.35=p(){8(!$("#P").1H(\':1f\')){36(1t);I}$("#P > 9").v(\'A\',(1u*-40)+\'Q\');1u=(1u+1)%12};$.q.r.1C=p(){36(1t);n w=$.q.r.1m();$("#P").v({\'C\':((w[0]-40)/2+w[2]),\'A\':((w[1]-40)/2+w[3])}).W();$("#P").13(\'14\',$.q.r.18);1t=47($.q.r.35,48)};$.q.r.18=p(){1a=D;$(V).O();$(T).O("1K.R");$(16).O("2a.R 2b.R");$("#Z, #y, #1d").O();$("#1d, #P, #1k, #1j, #G").11();1L=p(){$("#Z, #x").11();$("#y").1n();8(4.29){$(16).O("2a.R 2b.R")}8(15){$(\'1S, 1T, 1U\').v(\'1V\',\'1f\')}8($.1P(4.2d)){4.2d()}1a=M};8($("#x").1H(":1f")!==M){8(4.2e>0&&4.u[4.t].S!==1i){n a=4.u[4.t].S;n b=$.q.r.25(a);n c={\'C\':(b.C-20-4.K)+\'Q\',\'A\':(b.A-20-4.K)+\'Q\',\'E\':$(a).E()+(4.K*2),\'z\':$(a).z()+(4.K*2)};8(4.26){c.1W=\'11\'}$("#x").38(M,D).23(c,4.2e,4.3a,1L)}B{$("#x").38(M,D).21("2P",1L)}}B{1L()}I M};$.q.r.3b=p(){n a=\'\';a+=\'<9 s="Z"></9>\';a+=\'<9 s="P"><9></9></9>\';a+=\'<9 s="x">\';a+=\'<9 s="3c">\';a+=\'<9 s="1d"></9>\';a+=\'<9 s="U"><9 H="U" s="49"></9><9 H="U" s="4a"></9><9 H="U" s="4b"></9><9 H="U" s="4c"></9><9 H="U" s="4d"></9><9 H="U" s="4e"></9><9 H="U" s="4f"></9><9 H="U" s="4g"></9></9>\';a+=\'<a J="2f:;" s="1k"><1M H="2g" s="2U"></1M></a><a J="2f:;" s="1j"><1M H="2g" s="2W"></1M></a>\';a+=\'<9 s="y"></9>\';a+=\'</9>\';a+=\'</9>\';a+=\'<9 s="G"></9>\';$(a).3d("4h");$(\'<3e 4i="0" 4j="0" 4k="0"><3f><1g H="G" s="4l"></1g><1g H="G" s="4m"><9></9></1g><1g H="G" s="4n"></1g></3f></3e>\').3d(\'#G\');8(15){$("#3c").4o(\'<1e s="3g" X="2f:M;" 4p="2n" 2E="0"></1e>\');n b=$(\'#3g\')[0].4q.T;b.4r();b.18();$("9#Z, 9#P").v("1q","2o")}8($.1b.1x){$("#P 9, #1d, .U, .G, .2g").2i()}};$.q.r.2s={K:10,2G:D,26:D,24:0,2e:0,2Q:4s,2S:\'2h\',3a:\'2h\',2R:\'2h\',1D:4t,1E:4u,1B:D,2z:0.3,2y:\'#4v\',2X:D,31:D,30:D,2Z:D,29:D,u:[],1Q:1w,2c:1w,2d:1w};$(T).4w(p(){m=$.1b.1x&&!$.4x;$.q.r.3b()})})(2C);',62,282,'||||opts||||if|div||||||||||||||var||function|fn|fancybox|id|itemCurrent|itemArray|css||fancy_outer|fancy_content|height|top|else|left|true|width|title|fancy_title|class|return|href|padding|this|false|Math|unbind|fancy_loading|px|fb|orig|document|fancy_bg|imagePreloader|show|src|length|fancy_overlay||hide||bind|click|IE6|window|round|close|match|busy|browser|_change_item|fancy_close|iframe|visible|td|img|undefined|fancy_right|fancy_left|_set_content|getViewport|empty|_finish|getNumeric|position|new|Image|loadingTimer|loadingFrame|imageRegExp|null|msie|rel|children|first|overlayShow|showLoading|frameWidth|frameHeight|objNext|style|is|append|normal|keydown|__cleanup|span|substr|oldIE|isFunction|callbackOnStart|alt|embed|object|select|visibility|opacity|_proceed_image|60|min||fadeOut|fadeIn|animate|zoomSpeedIn|getPosition|zoomOpacity||keyCode|centerOnScroll|resize|scroll|callbackOnShow|callbackOnClose|zoomSpeedOut|javascript|fancy_ico|swing|fixPNG|each|backgroundImage|png|filter|no|absolute|relative|version|extend|defaults|_initialize|_start|typeof|attr|push|overlayColor|overlayOpacity|indexOf|fancy_frame|jQuery|showIframe|frameborder|html|imageScale|_preload_neighbor_images|removeExpression|right|bottom|auto|setExpression|parentNode|100|fast|zoomSpeedChange|easingChange|easingIn|_set_navigation|fancy_left_ico|stopPropagation|fancy_right_ico|enableEscapeButton|scrollBox|hideOnContentClick|hideOnOverlayClick|showCloseButton||outerHeight|outerWidth|animateLoading|clearInterval||stop||easingOut|build|fancy_inner|appendTo|table|tr|fancy_bigIframe|url|RegExp|none|progid|DXImageTransform|Microsoft|AlphaImageLoader|enabled|sizingMethod|backgroundRepeat|repeat|crop|scale|jpg|gif|bmp|jpeg|XMLHttpRequest|for|while|hidden|background|color|className|onload|name|fancy_iframe|random|1000|hspace|location|split|replace|fancy_div|complete|load|get|fancy_ajax|fancy_img|clientHeight|clientWidth|parseInt|curCSS|jquery|offset||paddingTop|borderTopWidth|paddingLeft|borderLeftWidth|scrollLeft|scrollTop|setInterval|66|fancy_bg_n|fancy_bg_ne|fancy_bg_e|fancy_bg_se|fancy_bg_s|fancy_bg_sw|fancy_bg_w|fancy_bg_nw|body|cellspacing|cellpadding|border|fancy_title_left|fancy_title_main|fancy_title_right|prepend|scrolling|contentWindow|open|300|560|340|666|ready|boxModel'.split('|'),0,{}));

/* my stuff */
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
