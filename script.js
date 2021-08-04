//1.
document.addEventListener("DOMContentLoaded", function() {
    //alert("dom has loaded");
});

//2.changing text of an element
let h1_text = document.getElementsByTagName("h1")[0];
h1_text.innerText = "Hello World!";

//3.changing multiple elements.



document.addEventListener("click", function() {
    let divs = document.getElementsByTagName("div");

    for (let i = 0; i < 4; i++) {
        divs[i].innerText = divs[i].className;
    }

})

//4. creating new elements

let newDiv = document.createElement("div");

//5.styling the element

newDiv.className = "purple";
newDiv.style.background = "purple";

//6. appending new elements to the DOM

let section = document.querySelector("section");
section.appendChild(newDiv);