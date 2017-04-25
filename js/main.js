$(document).ready(function() {

    // Calculator carousel
    $('.center').slick({
        arrows: false,
        centerPadding: '60px',
        slidesToShow: 3,
        variableWidth: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }]
    });

    // Registration carousel
    $('.js-reg-calc').slick({
        arrows: false,
        slidesToShow: 1
    });

    // Custom select
    $('select').prettyDropdown();

    // Tabs
    var elem = new Foundation.Tabs($('#example-tabs'));

    // open menu 
    openMenu();

    // close menu
    /*openMenuClose ();*/
    $("#card-number").mask("9999 9999 9999 9999", {
        autoclear: false,
        placeholder: "-"
    });


});



function openMenu() {
    $('#js-gamburger').click(function() {
        $('.js-nav').addClass('active');
        $('.js-overlay').addClass('active');
        console.log('Alarm!');
    });
}

function openMenuClose() {
    $(document).click(function(event) {
        if ($(event.target).closest('.js-nav').length)
            return;
        $('.js-nav').removeClass('active');
        event.stopPropagation();
    });
}
