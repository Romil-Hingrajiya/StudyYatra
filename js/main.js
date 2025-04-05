// img shadow click
document.querySelectorAll(".shadow_click").forEach((img) => {
  img.addEventListener("click", function () {
    this.classList.add("bounce"); // Add bounce effect
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



// progress bar
window.addEventListener("scroll", function () {
  const scrollTop = window.scrollY;
  const scrollHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / scrollHeight) * 100;
  document.getElementById("progress-bar").style.width = scrollPercent + "%";
});


// faqs
document.addEventListener("DOMContentLoaded", function () {
  const faqs = document.querySelectorAll(
    "[unique-script-id='w-w-dm-id'] .faq .faq-question-container"
  );

  faqs.forEach(function (faq) {
    faq.addEventListener("click", function () {
      // Close all other FAQs
      faqs.forEach((otherFaq) => {
        if (otherFaq !== faq) {
          otherFaq.closest(".faq").classList.remove("active");
        }
      });

      // Toggle the clicked FAQ
      this.closest(".faq").classList.toggle("active");
    });
  });
});