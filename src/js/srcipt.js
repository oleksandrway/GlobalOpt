window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu__item'),
    hamburger = document.querySelector('.hamburger');
  hamburger.addEventListener('click', () => {
    menu.classList.toggle('menu_active');
    hamburger.classList.toggle('hamburger_active');
  });
  menuItem.forEach(item => {
    item.addEventListener('click', () => {
      menu.classList.toggle('menu_active');
      hamburger.classList.toggle('hamburger_active');
    });
  });
});

//modal

$('[data-modal=consultation]').on('click', function () {
  $('.overlay').fadeIn('slow');
});

$('.modal__close').on('click', function () {
  $('.overlay').fadeOut('slow');
});


$(document).ready(function () {
  $('.reviews__carousel').slick({
    centerMode: true,
    slidesToShow: 3,
    dots: true,
    speed: 900,
    infinite: true,
    focusOnSelect: true,
    centerPadding: 0,
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        dots: false,

      }
    }]
  });
  /* $('.reviews__carousel').slick('goTo', 1); */
});



// googlemaps

function initMap() {

  const pos = {
    lat: 55.747885,
    lng: 37.626638
  };
  var opt = {
    center: pos,
    zoom: 16
  };

  const map = new google.maps.Map(document.getElementById("map"), opt);

  const marker = new google.maps.Marker({
    position: pos,
    map: map,
    title: "ти на правильному шляху",
    icon: 'icons/marker.png'
  });

  const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h3 id="firstHeading" class="firstHeading">г. Москва</h3>' +
    '<div id="bodyContent">' +
    "<p> ул. Садовническая, дом 5, офис 4-6</br> " +
    "700 от м. Новокузнецкая</br> </p> " +

    '<p>Тел: <a href="tel:+79264230100" class="phone__link">' +
    "+7 (926) 423 01 00</a></br> " +

    '<a href="tel:+79264230100" class="site__link">' +
    'info@glopt.ru</a></p>' +
    "</div>" +
    "</div>";


  const info = new google.maps.InfoWindow({
    content: contentString,
  });

  marker.addListener('click', () => {
    info.open(map, marker);
  });
}