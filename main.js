$(function (){

    $('.slider1').slick({
        dots: true,
        arrows: true,
        prevArrow: $('.prev__'),
        nextArrow: $('.next__'),
        appendDots: $('.pagers'),

    });
    $('.slider_second').slick({
        dots: true,
        arrows: true,
        prevArrow: $('.prev1__'),
        nextArrow: $('.nextArrow__'),
        appendDots: $('.pagers1'),
    });

    $('.link__down').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });

    $(function initMap() {
        var uluru = {lat: 49.27531457, lng: 28.47449565};
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 12,
            center: uluru,
        });
        var marker = new google.maps.Marker({
            position: uluru,
            map: map
        });
    })






});
