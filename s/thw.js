/* Horizontal Tiny Scrolling - a smooth scrolling script for horizontal websites
(the brother of the vertical "Tiny Scrolling")
by Marco Rosella - http://lab.centralscrutinizer.it/the-tiny-scrollings

v0.8 - July 7, 2009

Follow "The Horizontal Way"!: http://www.thehorizontalway.com			
also on Facebook: http://www.facebook.com/pages/The-Horizontal-Way/91646807676?ref=share			
			
DONATE!!!!!!!!: http://www.thehorizontalway.com/donate
Thanks! :-D

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 2 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA				
*/

window.onload = function() {
	HtinyScrolling.init(); scrollTips.init();
}

function gotoit(target){
	HtinyScrolling.scrollToIt(target);
}

var HtinyScrolling = {
	speed : 50,      //set here the scroll speed: when this value increase, the speed decrease. 
	maxStep: 150,	 //set here the "uniform motion" step for long distances
	brakeK: 3,		 //set here the coefficient of slowing down
	hash:null,		
	currentBlock:null,
	requestedX:0,
	init: function() {
		var lnks = document.getElementsByTagName('a');   
		for(var i = 0, lnk; lnk = lnks[i]; i++) {   
			if ((lnk.href && lnk.href.indexOf('#') != -1) &&  ( (lnk.pathname == location.pathname) ||
			('/'+lnk.pathname == location.pathname) ) && (lnk.search == location.search)) {  
			addEvent(lnk,'click',HtinyScrolling.initScroll,false);
			lnk.onclick=function(){return false;} // Safari
			}   
		}    
	},
	getTarget: function(target) {
		while(target.tagName.toLowerCase() != 'a')
			target = target.parentNode;
		return target;
	},
	getElementXpos: function(el){
		var x = 0;
		while(el.offsetParent){  
			x += el.offsetLeft;    
			el = el.offsetParent;
		}	return x;
	},		
	getScrollLeft: function(){
		if(document.all) return (document.documentElement.scrollLeft) ? document.documentElement.scrollLeft : document.body.scrollLeft;
		else return window.pageXOffset;   
	},	
	getWindowWidth: function(){
		if (window.innerWidth)	return window.innerWidth; 
		if(document.documentElement && document.documentElement.clientWidth) return document.documentElement.clientWidth;
	},
	getDocumentWidth: function(){
		if (document.width) return document.width;
		if(document.body.offsetWidth) return document.body.offsetWidth;
	},
	initScroll: function(e){
		var targ;  
		if (!e) var e = window.event;
		if (e.target) targ = e.target;
		else if (e.srcElement) targ = e.srcElement;  
		targ = HtinyScrolling.getTarget(targ);  //a fix by Skid X
		HtinyScrolling.hash = targ.href.substr(targ.href.indexOf('#')+1,targ.href.length); 
		HtinyScrolling.currentBlock = document.getElementById(HtinyScrolling.hash);   
		if(!HtinyScrolling.currentBlock) return;
		HtinyScrolling.requestedX = HtinyScrolling.getElementXpos(HtinyScrolling.currentBlock); 
		HtinyScrolling.scroll(targ); 
		return false;
	},
	scrollToIt: function(targ){ //thanks to Michael Ionita-Ganea
		target = document.getElementById(targ);
		HtinyScrolling.currentBlock = document.getElementById(targ);
		if(!HtinyScrolling.currentBlock) return;
		HtinyScrolling.requestedX = HtinyScrolling.getElementXpos(HtinyScrolling.currentBlock);
		HtinyScrolling.scroll(target);
		return false;
		
	}, 
	scroll: function(targ) {
		var left  = HtinyScrolling.getScrollLeft();
		if(HtinyScrolling.requestedX > left) { //a fix by Michael Ionita-Ganea
			var endDistance = Math.round((HtinyScrolling.getDocumentWidth() - (left + HtinyScrolling.getWindowWidth())) / HtinyScrolling.brakeK);
			endDistance = Math.min(Math.round((HtinyScrolling.requestedX-left)/ HtinyScrolling.brakeK), endDistance);
			var offset = Math.min(Math.abs(Math.round((HtinyScrolling.requestedX-left)/ HtinyScrolling.brakeK)), HtinyScrolling.maxStep);
		}else {
				var offset = - Math.min(Math.abs(Math.round((HtinyScrolling.requestedX-left)/ HtinyScrolling.brakeK)), HtinyScrolling.maxStep);
		} 
		window.scrollTo(left + offset, 0);
		if(Math.abs(left-HtinyScrolling.requestedX) <= 1 || HtinyScrolling.getScrollLeft() == left) {
			HtinyScrolling.hash = null;
		} else 	setTimeout(HtinyScrolling.scroll,HtinyScrolling.speed);
	}
}

 
var scrollTips = {
	dx : null,
	init : function() {	
		if (window.addEventListener) {
		window.addEventListener("DOMMouseScroll", this.mouseScroll, false);
		} else document.attachEvent("onmousewheel", this.mouseScroll); 
		var left = document.getElementById('left');
		addEvent(left,'mouseover', function() {this.dx=setInterval('scrollTips.arrowScroll(0)',100);return false;});
		addEvent(left,'mouseout', function() { clearInterval(this.dx); return false;});
		var right = document.getElementById('right');
		addEvent(right,'mouseover', function() {this.dx=setInterval('scrollTips.arrowScroll(1)',100);return false;});
		addEvent(right,'mouseout', function() { clearInterval(this.dx); return false;});
	},
	mouseScroll : function(e) {
		if (!e) var e = window.event;
		  var scroll = e.detail ? e.detail * 20 : e.wheelDelta / -20;
		if (scroll>=0 ){  
		window.scrollBy(80,0);
		} else  window.scrollBy(-80,0) ; 
	},	
	arrowScroll: function(val) {
		if(val==1) {
			window.scrollBy(70,0);
		} else {
			window.scrollBy(-70,0)
		}
	}
}


function addEvent( obj, type, fn ) {
	if (obj.addEventListener)
		obj.addEventListener( type, fn, false );
	else if (obj.attachEvent) {
		obj["e"+type+fn] = fn;
		obj[type+fn] = function() { obj["e"+type+fn]( window.event ); }
		obj.attachEvent( "on"+type, obj[type+fn] );
	}
}

function removeEvent( obj, type, fn ) {
	if (obj.removeEventListener)
		obj.removeEventListener( type, fn, false );
	else if (obj.detachEvent) {
		obj.detachEvent( "on"+type, obj[type+fn] );
		obj[type+fn] = null;
		obj["e"+type+fn] = null;
	}
}