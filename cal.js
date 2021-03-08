var x;
var y;
var opcase=0;
var z;
function init(){
	z=document.getElementById("txt");
}
function add1(){
	z.value=z.value+'1';
}
function add2(){
	z.value=z.value+'2';
}
function add3(){
	z.value=z.value+'3';
}
function add4(){
	z.value=z.value+'4';
}
function add5(){
	z.value=z.value+'5';
}
function add6(){
	z.value=z.value+'6';
}
function add7(){
	z.value=z.value+'7';
}
function add8(){
	z.value=z.value+'8';
}
function add9(){
	z.value=z.value+'9';
}
function add0(){
	z.value=z.value+'0';
}
function adddot(){
	z.value=z.value+'.';
}
function clean(){
	z.value="";
}
function opadd(){
	x=z.value;
	opcase=1;
	z.value="";
}
function opsub(){
	x=z.value;
	opcase=2;
	z.value="";
}
function opmul(){
	x=z.value;
	opcase=3;
	z.value="";
}
function opdiv(){
	x=z.value;
	opcase=4;
	z.value="";
}
function opsin(){
	z.value=Math.sin(z.value);
}
function opcos(){
	z.value=Math.cos(z.value);
}
function opsqrt(){
	z.value=Math.sqrt(z.value*1);
}
function opequal(){
	y=z.value;
	switch(opcase){
	case 1:
	  z.value=x*1+y*1;
	  break;
	case 2:
	  z.value=x*1-y*1;
	  break;
	case 3:
	  z.value=(x*1)*(y*1);
	  break;
	case 4:
	  z.value=(x*1)/(y*1);
	  break;
	case 5:
	  x=parseInt(x);
	  y=parseInt(y);
	  z.value=Math.pow(x,y);
	  break;
    }
	x=0;
	y=0;
	opcase=0;
}
function optan(){
	z.value=Math.tan(z.value);
}
function opxy(){
	x=z.value;
	opcase=5;
	z.value="";	
}
function opln(){
	z.value=Math.log(z.value);
}
function opnn(){
	x=z.value;
	y=1;
	for (i = 1; i <=x; i++) { 
	  y=y*i;
	  }
	z.value=y;
}
function showKey(e){
	e = e || window.event;
//	alert(e.keyCode);
	if(e.keyCode==49){
	  z.value=z.value+'1';
	}
	else if(e.keyCode==50){
	  z.value=z.value+'2';
	}
	else if(e.keyCode==51){
	  z.value=z.value+'3';
	}
	else if(e.keyCode==52){
	  z.value=z.value+'4';
	}
	else if(e.keyCode==53){
	  z.value=z.value+'5';
	}
	else if(e.keyCode==54){
	  z.value=z.value+'6';
	}
	else if(e.keyCode==55){
	  z.value=z.value+'7';
	}
	else if(e.keyCode==56){
	  z.value=z.value+'8';
	}
	else if(e.keyCode==57){
	  z.value=z.value+'9';
	}
	else if(e.keyCode==48){
	  z.value=z.value+'0';
	}
}