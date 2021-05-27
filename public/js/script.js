$(function () {
    'use strict';
    var view = $(window).height();
    $('.part')
    .height(view)
    .scrollie({
scrolloffset: -50,
scrollingInView: function (elem) {
    var bgColor = elem.data('background');
    $('body').css('background-color', bgColor);
}
    });
});
