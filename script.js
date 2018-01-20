var active = true;
var sec = 51;
var start = true;
var contor = 0;
var idNotRepeat = 0;


addEventListener('load', init, false);

function init() 
{



var je = 0;

var v = [16];

for(var h = 0; h < 16; h++)

v[h] = 0;


dArray = ["♥", "♥", "♣", "♣",

 "☯", "☯", "⚛", "⚛", 

 "♢", "♢", "☮", "☮",

  "♪", "♪", "✧", "✧"];






var dTd = [16];

var current;


var x;

for(x = 0; x < 16; x++ ) 

      { 

aleatory();
h;
for(var y = 0; y < 16; y++)

{

dTd[y] = document.getElementById("td" + y);


if(current == dTd[y].innerHTML)

{

aleatory();

break;

}

else

{

dTd[x] = document.getElementById("td" + x);




dTd[x].innerHTML = dArray[current];

dTd[x].onclick = turn;

break;

}

}

}

var count = 0;
hideSigns();	

function check(v1,v2){

if(v1.innerHTML == v2.innerHTML)

{
contor++;

if(contor == 8)
{
	active = false;
	document.getElementById('timer').innerHTML = "Congratulations !!! You win !!!";
	
}
count = 0;

v1.onclick = 'null';
v2.onclick = 'null';
//v1.visibility =  "hidden";
var v11 = v1.getAttribute('id');
var v22 = v2.getAttribute('id');
//v1.innerHTML = "";
//v2.innerHTML = "";

//document.getElementById(v11).style.display = 'none';
//document.getElementById(v22).style.display = 'none';

document.getElementById(v11).style.display = 'none'; //none
document.getElementById(v22).style.display = 'none';
//document.getElementById(v11).style.display = 'none';
//document.getElementById(v22).style.display = 'none';
//alert(v11);
//alert(v22);

}

else

{


count = 0;

for(x = 0; x < 16; x++)

dTd[x].onclick = "null";


theTimer1 = setTimeout(function(){forTimer1(v1, v2);}, 1000);

}
}

function forTimer1(vv1,vv2)

{

vv1.style.background = "radial-gradient(black 28%, #262626 30% ,#666666 60%)";
//vv1.style.backgroundImage = "url('patern.png')";
vv1.style.textShadow = "";

vv2.style.background = "radial-gradient(black 28%, #262626 30% ,#666666 60%)"; //radial-gradient(black 27%, white 60%, #00001a 15%)
//vv2.style.backgroundImage = "patern.png";
vv2.style.textShadow = "";

clearTimeout(theTimer1);

for(x = 0; x < 16; x++)

dTd[x].onclick = turn;

}

function turn() {

if(start)
{
startTimer();
start = false;
}


	onceClick=false;
    ++count;

this.style.background = "radial-gradient(white, lightgray, #666666)";

this.style.fontSize ="290%";




this.style.textShadow = "11px 5px 9px #4d4d4d";

if(count == 1)

{

var1 = document.getElementById(this.id);
idNotRepeat = this.id;

}


if(count == 2)

{

var2 = document.getElementById(this.id);

//////////////////////////////////////////////////////////////////////////
if(idNotRepeat != var2.id)
{
check(var1, var2);
}
else
{
	
	count = 0;

for(x = 0; x < 16; x++)

dTd[x].onclick = "null";


theTimer1 = setTimeout(function(){forTimer1(var1, var2);}, 1000);
}


////////////////////////////////////////////////////////////////////////////
}
}

function aleatory() {


current = Math.floor(Math.random()*16);

switch (current) {

case 0: v[current]++;

break;

case 1: v[current]++;

break;

case 2: v[current]++;

break;

case 3: v[current]++;

break;

case 4: v[current]++;

break;

case 5: v[current]++;

break;

case 6: v[current]++;

break;

case 7: v[current]++;

break;

case 8: v[current]++;

break;

case 9: v[current]++;

break;

case 10: v[current]++;

break;

case 11: v[current]++;

break;

case 12: v[current]++;

break;

case 13: v[current]++;

break;

case 14: v[current]++;

break;

case 15: v[current]++;

break;

default:

break;

}


if(v[current] > 1)

{

v[current] = 1;

aleatory();


} 


}

}

function startTimer() 
{
	
	if(active)
	{
	if(sec == 0)
	{
		
		
		active=false;
		for(var nr = 0; nr < 16; nr++)
		{
			document.getElementById('td'+ nr).onclick= 'null';
		}
				
	
		
	}
	else
	{
		sec--;
	
	}
	
	document.getElementById("timer").innerHTML = sec + " Seconds left";
	if(sec == 0 )
	{
		document.getElementById("timer").innerHTML = "Time expired !!! You have lost the game !!!";
	}
	
	setTimeout(startTimer,1000);
		
	
	}
}

function hideSigns()
{
	for(var i = 0; i <16; i++)
	{
		var x = "td" + i;
		x.style.display = 'none';
	}
}

