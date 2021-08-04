//1.
window.onload = function() {}

//2.changing text of an element
window.onload = function() {
    var h1_text = document.getElementById("change_heading");
    h1_text.innerText = "Hello World!";
}

//3.changing multiple elements.
window.onload = function() {
    var h1_text = document.getElementById("change_heading");
    h1_text.innerText = "Hello World!";

    let section = document.querySelector("section");
    section.addEventListener("mouseover", function(event) {
        let selectedColor = document.querySelector(".selected");
        selectedColor.innerText = event.target.className;
    })
}





//4. creating new elements

let newDiv = document.createElement("div");

//5.styling the element

newDiv.className = "purple";
//newDiv.style.background = "purple";

//6. appending new elements to the DOM

let section = document.querySelector("section");
section.appendChild(newDiv);