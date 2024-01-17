window.addEventListener('scroll', function() {
    var elementTarget = document.getElementById('p1');
    if (window.scrollY > (elementTarget.offsetTop + elementTarget.offsetHeight)) {
        elementTarget.style.opacity = 1;
    }
});