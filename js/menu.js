$('.feat-btn').mouseenter(function() {
    $('nav ul .feat-show').toggleClass("show");
    $('nav ul .first').toggleClass("rotate");
});

$('nav ul li').click(function() {
    $(this).addClass("active").siblings().removeClass("active");
});