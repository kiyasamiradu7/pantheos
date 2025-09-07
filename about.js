 const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
    let currentIndex = 0;

    function updateCarousel() {
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateCarousel();
    });

    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateCarousel();
    });

    // Swipe support for mobile
    let startX = 0;
    track.addEventListener('touchstart', e => startX = e.touches[0].clientX);
    track.addEventListener('touchend', e => {
      let endX = e.changedTouches[0].clientX;
      if (startX - endX > 50) {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
      } else if (endX - startX > 50) {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel();
      }
    });

    window.addEventListener("load", function() {
      const loader = document.getElementById("loader");
      setTimeout(() => {
        loader.style.opacity = "0";
        setTimeout(() => loader.style.display = "none", 1000);
      }, 1000); 
    });