// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
var x = document.getElementById("myBtn");
x.addEventListener("mouseover", myFunction);
x.addEventListener("click", mySecondFunction);
x.addEventListener("mouseout", myThirdFunction);

function myFunction() {
    document.getElementById("band").innerHTML += "Nothingham 08.12.2025!<br>";
}

function mySecondFunction() {
    document.getElementById("band").innerHTML += "Rock City!<br>";
}

function myThirdFunction() {
    document.getElementById("band").innerHTML += "Rock City!<br>";
}

