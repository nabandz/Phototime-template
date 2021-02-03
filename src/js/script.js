
const slider_community = tns({
    container: '.community__img',
    items: 2,
    slideBy: 1,
    speed: 800,
    autoplay: false,
    controls: false,
    gutter: 24,
    nav: false
});

document.querySelector('.button_community-prev').addEventListener ('click', function () {
    slider.goTo('prev');
});

document.querySelector('.button_community-next').addEventListener ('click', function () {
    slider.goTo('next');
});

const slider_design = tns({
    container: '.design__carousel',
    items: 1,
    slideBy: 1,
    speed: 800,
    autoplay: false,
    controls: false,
    nav: false
});

document.querySelector('.button_design-prev').addEventListener ('click', function () {
    slr.goTo('prev');
});

document.querySelector('.button_design-next').addEventListener ('click', function () {
    slr.goTo('next');
});