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
var animate = document.getElementById("welcome");
