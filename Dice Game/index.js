var dice1 = Math.floor((Math.random())*6) + 1;
var dice2 = Math.floor((Math.random())*6) + 1;

var randomDiceImage1 = "dice"+dice1+".png";
var randomDiceImage2 = "dice"+dice2+".png";

var randomImageSource1 = "images/"+randomDiceImage1;
var randomImageSource2 = "images/"+randomDiceImage2;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource1);

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);

if(dice1>dice2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if(dice1<dice2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}