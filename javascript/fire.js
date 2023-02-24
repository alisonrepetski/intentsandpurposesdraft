
$(window).on('resize', function() {
    var win = $(this);
    if (win.width() <= 1100) {
        $(".material-list").css("grid-template-columns", "repeat(1, 1fr)");
    }
    if (win.width() > 1100) {
        $(".material-list").css("grid-template-columns", "repeat(2, 1fr)");
    }
});

$(window).on('resize', function() {
    var win = $(this);
    if (win.width() <= 1100) {
        $(".instructions").css("grid-template-columns", "repeat(1, 1fr)");
    }
    if (win.width() > 1100) {
        $(".instructions").css("grid-template-columns", "repeat(3, 1fr)");
    }
});




