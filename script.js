let btns = document.getElementsByTagName("button");

function alertData() {
    alert("bithch you can be good at clicking them buttons if you believe bitch....");

}

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", alertData);
}

for (let i = 0; i < btns.length; i++) {
    btns[i].removeEventListener("click", alertData);
}