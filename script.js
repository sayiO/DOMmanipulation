window.onload = function myToDO() {
    document.getElementById("toDo").style.display = "inline";
}

window.onload = function addListItems() {
    let taskName = document.getElementById("todo");

}

let myListItems = document.getElementsByTagName("li");
for (let i = 0; i < myListItems.length; i++) {
    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myListItems[i].appendChild(span);
}

let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
    }
}