var notas = [10,5,7,6.5,4];

function media_notas(){
    var soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4];
    var media = soma / media.length;
    console.log(media)
}


function setup() {
  createCanvas(400, 400);
  
  media_notas();
}

function draw() {
  background(150);
}
