document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.carousel .slide');
    let currentIndex = 0;
    let autoSlideInterval = null;

    function updateSlides() {
        slides.forEach((slide, index) => {
            slide.classList.remove('active', 'previous', 'next');
            slide.style.opacity = '0';
        });

        slides[currentIndex].classList.add('active');
        slides[currentIndex].style.opacity = '1';

        let previousIndex = (currentIndex - 1 + slides.length) % slides.length;
        let nextIndex = (currentIndex + 1) % slides.length;

        slides[previousIndex].classList.add('previous');
        slides[nextIndex].classList.add('next');
        slides[previousIndex].style.opacity = '0.3';
        slides[nextIndex].style.opacity = '0.3';
    }

    function shiftSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlides();
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(shiftSlide, 6000); // Adjust time to your preference
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    slides.forEach(slide => {
        slide.addEventListener('mouseenter', stopAutoSlide);
        slide.addEventListener('mouseleave', startAutoSlide);
    });

    updateSlides();
    startAutoSlide();
});
