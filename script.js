function firstClick() {
    alert("you clicked the first button");

}

let secondBtn = document.querySelector(".second_button");
secondBtn.onclick = function() {
    alert("i have clicked the second button");
}


let thirdBtn = document.querySelector(".third_button");
thirdBtn.addEventListener("click", function() {
    alert("so apparently you have clicked the third button");
});