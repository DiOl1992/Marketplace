$(function () {

  $(".rate-star").rateYo({
    rating: 4.5,
    starWidth: "17px",
    readOnly: true
  });

  $('.featured-products__inner').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-arrow slick-prev"><span class="lnr lnr-chevron-left"></span></button>',
    nextArrow: '<button class="slick-arrow slick-next"><span class="lnr lnr-chevron-right"></span></button>'
  });

});