// img shadow click
document.querySelectorAll('.shadow_click').forEach(img => {
  img.addEventListener('click', function() {
      this.classList.add('bounce'); // Add bounce effect
      setTimeout(() => {
          window.location.href = "courses.html"; // Redirect after animation
      }, 400); // Slight delay for animation effect
  });
});



// header - navbar
const navEl = document.querySelector(".nav");
const hamburgerEl = document.querySelector(".hamburger");
const navItemEls = document.querySelectorAll(".nav__item");
const body = document.body;

hamburgerEl.addEventListener("click", () => {
  navEl.classList.toggle("nav--open");
  hamburgerEl.classList.toggle("hamburger--open");
  
  // Toggle overflow hidden on body
  if (body.style.overflow === "hidden") {
    body.style.overflow = ""; // Remove overflow hidden
  } else {
    body.style.overflow = "hidden"; // Add overflow hidden
  }

});

navItemEls.forEach((navItemEl) => {
  navItemEl.addEventListener("click", () => {
    navEl.classList.remove("nav--open");
    hamburgerEl.classList.remove("hamburger--open");
  });
});



// slideshow Functionality
// let slideIndex = 1;
// showSlides(slideIndex);

// Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }


// Slideshow Functionality
let slideIndex = 1;
showSlides(slideIndex);
let autoSlide = setInterval(() => nextSlide(1), 4000); // Auto change every 3 seconds

// Thumbnail image controls
function currentSlide(n) {
  clearInterval(autoSlide); // Stop auto slide on manual click
  showSlides(slideIndex = n);
  autoSlide = setInterval(() => nextSlide(1), 3000); // Restart auto slide
}

// Function to move to the next slide
function nextSlide(n) {
  showSlides(slideIndex += n);
}

// Main function to show slides
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}



// progress bar
window.addEventListener("scroll", function () {
  const scrollTop = window.scrollY;
  const scrollHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / scrollHeight) * 100;
  document.getElementById("progress-bar").style.width = scrollPercent + "%";
});


// testimonial
document.addEventListener("DOMContentLoaded", function () {
  let index = 0;
  const slides = document.querySelectorAll(".testimonial-slide");
  const total = slides.length;
  const container = document.querySelector(".testimonial-slider");

  function updateSlide() {
      slides.forEach(slide => slide.classList.remove("active"));
      slides[index].classList.add("active");

      // Adjust transform for infinite loop effect
      let moveAmount = index * -100;
      if (window.innerWidth > 1200) moveAmount /= 3; // Adjust for 3 slides view

      container.style.transform = `translateX(${moveAmount}%)`;
  }

  function nextSlide() {
      index = (index + 1) % total;
      updateSlide();
  }

  function prevSlide() {
      index = (index - 1 + total) % total;
      updateSlide();
  }

  document.querySelector(".testimonial-next").addEventListener("click", nextSlide);
  document.querySelector(".testimonial-prev").addEventListener("click", prevSlide);

  setInterval(nextSlide, 4000); // Auto-slide every 4 seconds

  updateSlide();
});



















// document.addEventListener("DOMContentLoaded", () => {
//   const bubbleContainer = document.querySelector(".bubble-container");

//   function createBubble() {
//       const bubble = document.createElement("div");
//       bubble.classList.add("bubble");

//       // Random size between 20px and 80px
//       let size = Math.random() * 60 + 20;
//       bubble.style.width = `${size}px`;
//       bubble.style.height = `${size}px`;

//       // Random position anywhere on screen
//       bubble.style.left = `${Math.random() * 100}vw`;
//       bubble.style.top = `${Math.random() * 100}vh`;

//       // Append to container
//       bubbleContainer.appendChild(bubble);

//       // Remove after animation ends
//       setTimeout(() => {
//           bubble.remove();
//       }, 3000);
//   }

//   // Generate bubbles every 500ms
//   setInterval(createBubble, 1000);
// });



