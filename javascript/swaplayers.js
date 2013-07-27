//*************************************************************************
//  This code is from Dynamic Web Coding at http://www.dyn-web.com/
//  Copyright 2001-3 by Sharon Paine 
//  See Terms of Use at http://www.dyn-web.com/bus/terms.html
//  regarding conditions under which you may use this code.
//  This notice must be retained in the code as is!
//*************************************************************************/
//	
	// onresize for ns4
	var origWidth, origHeight;
	if (document.layers) {
		origWidth = window.innerWidth; origHeight = window.innerHeight;
		window.onresize = function() { if (window.innerWidth != origWidth || window.innerHeight != origHeight) history.go(0); }
	}
	var cur_lyr; // holds id of currently visible layer
	var activado;
	function swapLayers(id) {
	  if (cur_lyr) hideLayer(cur_lyr);
	  showLayer(id);
	  cur_lyr = id;
	}	
	function showLayer(id) {
	  var lyr = getElemRefs(id);
	  if (lyr && lyr.css) lyr.css.visibility = "visible";
	}	
	function hideLayer(id) {
	  var lyr = getElemRefs(id);
	  if (lyr && lyr.css) lyr.css.visibility = "hidden";
	}
	function getElemRefs(id) {
		var el = (document.getElementById)? document.getElementById(id): (document.all)? document.all[id]: (document.layers)? document.layers[id]: null;
		if (el) el.css = (el.style)? el.style: el;
		return el;
	}
	function verocultar(id) {
	if (activado==1) {
		hideLayer(id);
		activado=0
	}
	else {
		showLayer(id);
		activado=1
	}
	}
	