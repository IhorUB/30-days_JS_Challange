function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
        var context = this,
            args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

const images = document.querySelectorAll('.slide-in');

checkSlide = (e) => {
    images.forEach(image => {
        //half way throught the img
        const imageAt = (window.scrollY + window.innerHeight) - image.height / 2;
        //bottom of the img 
        const imageBottom = image.offsetTop + image.height;
        const isHalfDown = imageAt > image.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;

        isHalfDown && isNotScrolledPast ? image.classList.add('active') : image.classList.remove('active');
    })
}
window.addEventListener('scroll', debounce(checkSlide));