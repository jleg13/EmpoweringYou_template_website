var svg1 = document.querySelector('.svg-1');
var svg2 = document.querySelector('.svg-2');
var svg3 = document.querySelector('.svg-3');

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    var isOutside = (rect.top >= window.innerHeight) || (rect.bottom <= 0);
    return !isOutside;
}

window.addEventListener('scroll', function (e) {
    svg1.classList.toggle('in-view', isElementInViewport(svg1));
    svg2.classList.toggle('in-view', isElementInViewport(svg2));
    svg3.classList.toggle('in-view', isElementInViewport(svg3));
});