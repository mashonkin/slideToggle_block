/*подменю*/

$(document).on('click', '[data-show-block]', function () {
    var conditions = $(this).attr('data-conditions');
    if (conditions == 'xs' && $(window).width() > 767) {
        return false;
    }
    var open_val = $(this).attr('data-show-block');
    if (open_val == 'parent_siblings') {
        $(this).toggleClass('active').parent().siblings().slideToggle(300);
    }
    if (open_val == 'siblings') {
        $(this).toggleClass('active').siblings().slideToggle(300);
    }
    return false;
});

/*!подменю*/