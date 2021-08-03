function firstClick() {
    alert("you clicked the first button");

}

let secondBtn = document.querySelector(".second_button");
secondBtn.onclick = function() {
    alert("i have clicked the second button");
}