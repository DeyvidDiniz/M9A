export default function Carousel(carousel, next, prev) {
  if (carousel && next && prev) {
    let currentPosition = 0;
    const slides = document.querySelectorAll(carousel);
    const totalSlides = slides.length;

    const updatePosition = () => {
      for (let slide of slides) {
        slide.classList.remove("carousel_visible");
        slide.classList.add("carousel_item_hidden");
      }

      slides[currentPosition].classList.add("carousel_visible");
    };

    const nextSlide = () => {
      if (currentPosition === totalSlides - 1) {
        return;
      } else {
        currentPosition++;
      }
      updatePosition();
    };

    const previousSlide = () => {
      if (currentPosition === 0) {
        return;
      } else {
        currentPosition--;
      }
      updatePosition();
    };

    document.getElementById(next).addEventListener("click", () => {
      nextSlide();
    });
    
    document.getElementById(prev).addEventListener("click", () => {
      previousSlide();
    });
  }
}