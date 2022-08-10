var images=document.getElementsByTagName("img");

var randomnumber1 = (Math.floor(Math.random()*6)) + 1;
var img1= "images/dice"+randomnumber1+".png";
images[0].setAttribute("src",img1);

var randomnumber2 = (Math.floor(Math.random()*6)) + 1;
var img2= "images/dice"+randomnumber2+".png";
images[1].setAttribute("src",img2);

if (randomnumber1===randomnumber2){
  document.querySelector("h1").textContent="Draw";
} else if (randomnumber1 > randomnumber2){
  document.querySelector("h1").textContent="Player 1 Wins!";
} else {
  document.querySelector("h1").textContent="Player 2 Wins!";
}
