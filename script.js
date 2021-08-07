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
close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
}
for (let i = 0; i < close.length; i++) {

}

//print first and last 

function printFirstAndLast(arr) {

    let whole = [];
    arr.forEach(function(val, index, arr) {

        let first = val[0];
        let last = val[val.length - 1];
        whole.push(first + last);
        console.log(whole);

    });


}

//getting element's double values using forEach iterator

function double(arr) {
    let doubledArr = [];
    arr.forEach(function(val) {
        doubledArr.push(val * 2);
    })
    return doubledArr;
}

// adding key and values to an array of objects using forEach iterator

function addKeyAndValue(arr, key, value) {
    let newObj = [];
    arr.forEach(function(arr) {
        arr[key] = "value";
        newObj.push(arr);
    })
    return newObj;

}

//using a map function 

function valTimesIndex(arr) {
    return arr.map(function(val, index) {
        return val * index;
    });

}

//returning doubles values using map
function doubleArray(arr) {
    // return the result of arr.map
    return arr.map(function(val) {
        // return a new array with each value doubled
        return val * 2;
    });
}