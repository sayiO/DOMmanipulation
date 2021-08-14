$(document).ready(function() {


    console.log("Let.s get ready to party with JQuery");

    //2

    $("article img").addClass("image-center");

    //3.

    $("article p:last-child").remove();

    //4.

    $("#title").css("font-size", Math.random() * 100);

    //5.
    let newList1 = $("<li>");
    newList1.text("Heyy Marian ati anoda kusvirwa")
    $("ol").append(newList1);


});