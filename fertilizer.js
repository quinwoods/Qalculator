
function add(a,b) {
	var sum = parseInt(a) + parseInt(b);
	document.getElementById("answer").innerHTML = sum;
  }
  
 function showa(a){
	 document.getElementById('line1').innerHTML = '<line x1 = 0 y1 = 0 x2 = ' + a + '  + y2 = 0 style=stroke:rgb(255,0,0);stroke-width:2/>';
 }
 function showb(b){
	  document.getElementById('line2').innerHTML = '<line x1 = 0 y1 = 0 x2 = ' + b + '  + y2 = 0 style=stroke:rgb(255,0,0);stroke-width:2/>';
  }