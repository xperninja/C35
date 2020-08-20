var gameState = 0,playerCount,form,game,player;

var database

function setup(){
    database = firebase.database();
    createCanvas(500,500);
game = new Game();
game.getState();
game.start();

}

function draw(){

}