let w=410,h=728; //no Inversion 10
let z=0;
let img=[];
let m;
let angle=0;
let q=51;
let mn=51;
let mx=141;
let canvas;

function setup() {  
	canvas=createCanvas(w,h);
	canvas.parent('canvas');
	for(let i=0;i<10;i++){
		img[i] = loadImage("data/Movie"+q+".jpg");
		q+=10;
	}
}

function draw() {
  background(200);
  if(mouseX>=0 && mouseX<=w){
  	m=map(mouseX,z,w,mn,mx);
	m=Math.round(m);
	if((m%10) == 0){
		m++;
	}else if((m%10) == 2){
		m--;
	}else if((m%10) == 3){
		m-=2;
	}else if((m%10) == 4){
		m-=3;
	}else if((m%10) == 5){
		m-=4;
	}else if((m%10) == 6){
		m-=5;
	}else if((m%10) == 7){
		m-=6;
	}else if((m%10) == 8){
		m-=7;
	}else if((m%10) == 9){
		m-=8;
	}

  }
  createTarget();
}

function createTarget(){
	for(let i=1; i<=10; i++){
		if( m == ((i*10)+41) ){
		push();
			image(img[10-i], 0, 0, w, h); 
		pop();
		}
	}
}
