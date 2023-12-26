var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  effect: "fade",
  autoplay: {
    delay: 4000,
    disableOnInteraction: true,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// navbar toggle

function dropdown() {
  document.querySelector(".dropdown-ul").classList.toggle("add");
}

var droplinks = document.querySelector(".dropdown-ul li");
droplinks.addEventListener("click", function () {
  dropdown.classList.remove("add");
});

function nav_toggle() {
  document.querySelector(".nav-links").classList.toggle("nav-links-toggle");
}

// *************************

AOS.init({
  duration: 1000,
});

// slide animation lading

let slides = document.querySelectorAll(".slide-container");
let index = 0;

function next() {
  slides[index].classList.remove("actv");
  index = (index + 1) % slides.length;
  slides[index].classList.add("actv");
}

function prev() {
  slides[index].classList.remove("actv");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("actv");
}
setInterval(next, 6000);

// ******************

window.addEventListener("load", () => {
  const loder = document.querySelector(".loader-div");

  loder.classList.add("loder-hide");

  loder.addEventListener("transitionend", () => {
    document.body.removeChild(loader-div)
  });
});

 


// google translat

function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'en',
    autoDisplay: false,
    includedLanguages: 'en,fr,ar,ur'
  }, 'google_translate_element');
}

