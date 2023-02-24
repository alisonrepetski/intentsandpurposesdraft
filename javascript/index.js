// Add the "main-buttons" element to the body once
$("<div></div>")
    .addClass("main-buttons")
    .appendTo("body");

$(document).scroll(function() {
    var fromTop = $(document).scrollTop();
    var docHeight = $(document).height();
    var scrollRatio = fromTop / docHeight;

    console.log("Scroll Ratio: " + scrollRatio);
    console.log("Distance from top: " + fromTop);

    // Modify the opacity of the "main-buttons" element based on the scroll position
    if (fromTop >= 200) {
        $(".main-buttons").css("opacity", 1);
    } else if (fromTop < 200) {
        $(".main-buttons").css("opacity", 0.5);
    } else if (fromTop < 150) {
        $(".main-buttons").css("opacity", 0);
    } else {
        $(".main-buttons").css("opacity", scrollRatio);
    }
});