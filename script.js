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
            left: 100,
            behavior: 'smooth'
        });
    }


    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) =>{
        entries.forEach((entry) =>{
            if(entry.isIntersecting){
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    },{threshold:0.1});

    reveals.forEach((reveal) =>{
        observer.observe(reveal);
    });


    feather.replace()