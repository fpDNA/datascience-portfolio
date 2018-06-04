
//Part -1
//Get user input 
//<input id="name-input">

var name_in = document.getElementById("name-input");
//console.log(name_in.value);

//Update contents of name output, so that is reads Hello, user-input
//<p class= "name-output">
var name_out = document.getElementById("name-output");

//event listener to display the name

name_in.addEventListener("input", function () {
    name_out.innerText = name_in.value;
});
/*
//Part-2 Add Animate button, get value of the currently selected option from the 
//<select id="animation-select">


var animate = document.getElementById("welcome");
var click_animate = document.getElementById("animate");


//Add one-time event listener for the animation
click_animate.addEventListener("click", function () {
    var style_add = document.getElementById("animation-select").value;
    animate.classList.add(style_add);
    //Add event listener for animationend
    animate.addEventListener("animationend", function () {
        animate.classList.remove(style_add);
    }, { once: true });
});
*/