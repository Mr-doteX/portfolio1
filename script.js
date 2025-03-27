//java script for scrolling jobs

function scrollLeft() {
    const wrapper = document.querySelector('.image-wrap');
    wrapper.scrollBy({
        left: -100,//scroll distance adjustment
        behavior: 'smooth'
    });
}
function scrollRight() {
    const wrapper = document.querySelector('.image-wrap');
    wrapper.scrollBy({
        left:100,
        behavior: 'smooth'
    });
}
