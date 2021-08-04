//1.
document.addEventListener("DOMContentLoaded", function() {
    //alert("dom has loaded");
});

//2.changing text of an element
let h1_text = document.getElementsByTagName("h1")[0];
h1_text.innerText = "Hello World!";