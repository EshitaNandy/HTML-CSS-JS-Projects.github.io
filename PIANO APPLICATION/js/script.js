// Piano script

// Audio object array  
// white button
var vb1=['c5','d5','e5','f5','g5','a5','b5','c6','d6','e6','f6','g6','a6','b6'];
// black button
var vb2=['c-5','d-5','f-5','g-5','a-5','c-6','d-6','f-6','g-6','a-6'];


// Audio source array
// white btn audio
var source1=[
'sounds/c5.mp3',
'sounds/d5.mp3',
'sounds/e5.mp3',
'sounds/f5.mp3',
'sounds/g5.mp3',
'sounds/a5.mp3',
'sounds/b5.mp3',
'sounds/c6.mp3',
'sounds/d6.mp3',
'sounds/e6.mp3',
'sounds/f6.mp3',
'sounds/g6.mp3',
'sounds/a6.mp3',
'sounds/b6.mp3'
];
// black btn audio
var source2=[
'sounds/c-5.mp3',
'sounds/d-5.mp3',
'sounds/f-5.mp3',
'sounds/g-5.mp3',
'sounds/a-5.mp3',
'sounds/c-6.mp3',
'sounds/d-6.mp3',
'sounds/f-6.mp3',
'sounds/g-6.mp3',
'sounds/a-6.mp3'
];

// Creating audio objects

window.onload=dynamickeys;

function dynamickeys() {
	for(i=0;i<vb1.length;i++){

		vb1[i]=new Audio();
	}

	for(j=0;j<vb2.length;j++){

		vb2[j]=new Audio();
	}
}

// /////////////////////////////////////////////////////////

 function piano(btn,wb){

 	vb1[btn].src=source1[btn];
 	vb1[btn].play();
 	wb.style.boxShadow="inset 30px 30px 60px #d9d9d9,inset -30px -30px -60px #ffffff";
 	wb.style.outline="none";
 	

 	function stand(){
 		wb.style.background="linear-gradient(145deg,#ffffff,#e6e6e6)";
 	    wb.style.boxShadow="1px 1px 3px #d9d9d9,-1px -1px -3px #ffffff";
 	    wb.style.outline="none";
 	}
 	var my_int=setTimeout(stand,200);

 }

 function stroke(btn,bb){

 	vb2[btn].src=source2[btn];
 	vb2[btn].play();
 	bb.style.background="linear-gradient(to bottom,rgb(0,0,0),rgb(0,0,0))";
 	bb.style.outline="none";

 	function stand(){
 		bb.style.background="linear-gradient(to bottom,rgb(0,0,0),rgb(61,61,61))";
 	    bb.style.outline="none";
 	}
 	var my_int=setTimeout(stand,200); 	
 }

 window.onkeypress=fn;

 function fn(keys){
    var wb,bb;
 	var btn=keys.which||keys.KeyCode;
 	console.log(btn);

 if(btn==97||btn==115||btn==100||btn==102||
 	btn==103||btn==104||btn==106||btn==107||
 	btn==108||btn==59||btn==120||btn==99||btn==118||btn==98)
{
 if (btn==97) {
 	btn=0;
    wb=document.getElementById('wb_0');
 	}
else if(btn==115) {
 	btn=1;
    wb=document.getElementById('wb_1');
 	}
else if(btn==100) {
 	btn=2;
    wb=document.getElementById('wb_2');
 
 	}
else if(btn==102) {
 	btn=3;
    wb=document.getElementById('wb_3');
 
 	}
else if(btn==103) {
 	btn=4;
    wb=document.getElementById('wb_4');
 	}
else if(btn==104) {
 	btn=5;
    wb=document.getElementById('wb_5');
 	}
else if(btn==106) {
 	btn=6;
    wb=document.getElementById('wb_6');
 	}
else if(btn==107) {
 	btn=7;
    wb=document.getElementById('wb_7');
 	}
else if(btn==108) {
 	btn=8;
    wb=document.getElementById('wb_8');
 	}
else if(btn==59) {
 	btn=9;
    wb=document.getElementById('wb_9');
 	}
else if(btn==120) {
 	btn=10;
    wb=document.getElementById('wb_10');
 	}

else if(btn==99) {
    btn=11;
    wb=document.getElementById('wb_11');
  }

else if(btn==118) {
    btn=12;
    wb=document.getElementById('wb_12');
  }

else if(btn==98) {
    btn=13;
    wb=document.getElementById('wb_13');
  }
piano(btn,wb);
}
 
else if(btn==119||btn==101||btn==114||btn==116||btn==121||btn==117
	||btn==105||btn==111||btn==106||btn==91)

{
 
  if (btn==119) {
 	btn=0;
    bb=document.getElementById('bb_0');

 	}
else if(btn==101) {
 	btn=1;
    bb=document.getElementById('bb_1');

 	}
else if(btn==114) {
 	btn=2;
 	bb=document.getElementById('bb_2');

 	}
else if(btn==116) {
 	btn=3;
 	bb=document.getElementById('bb_3');

 	}
else if(btn==121) {
 	btn=4;
 	bb=document.getElementById('bb_4');

 	}
else if(btn==117) {
 	btn=5;
 	bb=document.getElementById('bb_5');

 	}
else if(btn==105) {
 	btn=6;
 	bb=document.getElementById('bb_6');

 	}

else if(btn==111) {
    btn=7;
    bb=document.getElementById('bb_7');

  }
else if(btn==112) {
    btn=8;
    bb=document.getElementById('bb_8');

  }
else if(btn==91) {
    btn=9;
    bb=document.getElementById('bb_9');

  }
 stroke(btn,bb);
} 
else{
	console.log("Enter Valid Keys");
}


 }
 // fn end