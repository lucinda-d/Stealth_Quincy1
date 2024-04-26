//Create three variables to select the span elements (“???”) in the footer.
var fans = document.querySelector(".fans");
var fish = document.querySelector(".fish");
var pets = document.querySelector(".pets");

//use mouseover events to change the text of elements
//fans - change text to 123K
//fish - change text to 47K
//pets - change text to 20K
fans.addEventListener("mouseover", function () {
  fans.innerText = "123K";
});

fish.addEventListener("mouseover", function () {
  fish.innerText = "47K";
});

pets.addEventListener("mouseover", function () {
  pets.innerText = "20K";
});

//select input with id of toggle
//select dive with class of ball
//select h1 element
//select body element
var toggle = document.querySelector("#toggle");
var ball = document.querySelector(".ball");
var h1 = document.querySelector("h1");
var body = document.querySelector("body");

//add event listener for click event on toggle input
//in function body, use if statment to see if body element has class of "light". if it does, remove it and the "move-right" class applied to "ball" element. Change the text of the h1 to "Stealth Quincy"
toggle.addEventListener("click", function () {
  if (body.classList.contains("light")) {
    body.classList.remove("light");
    ball.classList.remove("move-right");
    h1.innerText = "Stealth Quincy";
  }
  //use Use an else statement to add the "light" class to the body element and the "move-right" class to the "ball" div element. Change the text of the h1 to “Party Quincy”.
  else {
    body.classList.add("light");
    ball.classList.add("move-right");
    h1.innerText = "Party Quincy";
  }
});
