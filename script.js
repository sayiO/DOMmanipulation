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

let listItems = document.querySelectorAll("li");



for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("click", function(event) {
        alert("you have selected the item " + event.target.innerText);
    })

    function showLocalStorage() {
        let instructors = ["Elie", "Matt", "Tim"];

        localStorage.setItem("instructors", JSON.stringfy(instructors));
        JSON.parse(localStorage.getItem(instructors));

    }