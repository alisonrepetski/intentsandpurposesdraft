
$(window).on('resize', function() {
    var win = $(this);
    if (win.width() <= 1300) {
        $(".summer-list").css("grid-template-columns", "repeat(1, 1fr)");
    }
    if (win.width() > 1300) {
        $(".summer-list").css("grid-template-columns", "repeat(3, 1fr)");
    }
});


$(window).on('resize', function() {
    var win = $(this);
    if (win.width() <= 1300) {
        $(".winter-list").css("grid-template-columns", "repeat(1, 1fr)");
    }
    if (win.width() >1300) {
        $(".winter-list").css("grid-template-columns", "repeat(3, 1fr)");
    }
});


