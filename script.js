$(document).ready(function() {
    $("article").addClass("hidden");
    $("article").removeClass("hidden");
    $("article").toggleClass("hidden");
    //$("li").text("madii cde");
    $("input").val("this is  the new value");



    //accessing elements

    $("article").css("background-color", "teal");
    $("article").css("style", "display:flex;");

    //DOM traversal........
    let childElements = $("article").find("div").children();
    let el = $("article").find("div").children();

    //creating and appending elements to the dom
    let newP = $("<p>");
    newP.text("I am the new king in town gentlemen");
    newP.css("color", "red");
    $("article").append(newP);

    let anotherDiv = $("<p>", {
        text: "this is a latest div gentlemen",
        css: {
            color: "green",
            background: "pink",
            "font-size": "4em"

        }
    });

    $("article").append(anotherDiv);


})