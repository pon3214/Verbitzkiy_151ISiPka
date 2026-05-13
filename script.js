document.addEventListener('DOMContentLoaded', function() {

    var slideIndex = 1;
    showSlides(slideIndex);
    window.plusSlide = function() {
        showSlides(slideIndex += 1);
    }
    window.minusSlide = function() {
        showSlides(slideIndex -= 1);
    }
    window.currentSlide = function(n) {
        showSlides(slideIndex = n);
    }
    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("item");
        var dots = document.getElementsByClassName("slider-dots_item");
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }
    

});