$(document).ready(function() {

    // Calculator carousel
    $('.center').slick({

        centerPadding: '60px',
        slidesToShow: 3,
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
                centerMode: false,
                centerPadding: '10px',
                slidesToShow: 3
            }
        }]
    });

    // Registration carousel
    $('.js-reg-calc').slick({
        arrows: true,
        slidesToShow: 1,
        swipe: true,
        prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 477.175 477.175" style="enable-background:new 0 0 477.175 477.175;" xml:space="preserve" width="20px" height="15px"><g><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225   c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z" fill="#0056B8"/></g></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 477.175 477.175" style="enable-background:new 0 0 477.175 477.175;" xml:space="preserve" width="20px" height="15px"><g><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5   c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z" fill="#0056B8"/></g></svg></button>'
    });

    // Custom select
    $('select').prettyDropdown();

    // Tabs
    var elem = new Foundation.Tabs($('#example-tabs'));

    // open menu 
    openMenu();





    // close menu
    /*openMenuClose ();*/
    openMenuClose();


    $("#card-number").inputmask("9999 9999 9999 9999", {
        autoclear: false,
        placeholder: "-"
    });



    $('#phone').inputmask("+380 99 999 9999");



    /*$(".tabs-title").on("click", function(e) {
        if ($(this).hasClass("disabled")) {
            e.preventDefault();
            return false;
        } else {
            var flagform = $('#flagForm').val();
            switch (e.currentTarget.id) {
                case "li_1":
                    $('#li_1').removeClass('success');
                    if (flagform > 1) {
                        $('#li_2').addClass('success').removeClass('is-active');
                    }
                    if (flagform > 2) {
                        $('#li_3').addClass('success').removeClass('is-active');
                    }
                    break;
                case "li_2":
                    $('#li_1').addClass('success').removeClass('is-active');

                    if (flagform > 1) {
                        $('#li_2').removeClass('success');
                    }
                    if (flagform > 2) {
                        $('#li_3').addClass('success').removeClass('is-active');
                    }
                    break;
                case "li_3":
                    $('#li_1').addClass('success').removeClass('is-active');
                    $('#li_2').addClass('success').removeClass('is-active');
                    $('#li_3').removeClass('success');
                    break;
            }
        }
    });
    $('.js_validate [type="submit"]').on("click", function() {
        return validate($(this).parents(".js_validate"));
    });*/





    $(function() {
        $('#dpt').fdatepicker({
            closeButton: false,
            format: 'mm.dd.yyyy',
        });
    });






    $('.js_validate [type="submit"]').on("click", function() {
        return validate($(this).parents(".js_validate"));
    });

    $('.js_edit').click(function() {
        $(this).closest('.js-reg-calc').find('button').addClass('active');
        $(this).closest('.js-reg-calc').find('.js_edit').css('display', 'none');
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
    $('.js-close').click(function(event) {
        $('.js-nav').removeClass('active');
        $('.js-overlay').removeClass('active');
    });
}

$(document).on("pageinit", ".wrapper", function() {
    $(document).on("swipeleft", ".wrapper", function(e) {
        // We check if there is no open panel on the page because otherwise
        // a swipe to close the left panel would also open the right panel (and v.v.).
        // We do this by checking the data that the framework stores on the page element (panel: open).
        if ($.mobile.activePage.jqmData("panel") !== "open") {
            if (e.type === "swipeleft") {
                $("#right-panel").panel("open");
            } else if (e.type === "swiperight") {
                $("#left-panel").panel("open");
            }
        }
    });
});
