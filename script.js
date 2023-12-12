var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    effect: "fade",
    autoplay:{
      delay:4000,
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


  function dropdown(){
    document.querySelector('.dropdown-ul').classList.toggle("add")
  }

  var droplinks=document.querySelector(".dropdown-ul li")
  droplinks.addEventListener("click", function() {
      dropdown.classList.remove("add")
    });


  function nav_toggle(){
    document.querySelector('.nav-links').classList.toggle("nav-links-toggle")
  }


  AOS.init({
    duration: 1000
  });

  // slide animation lading
  let slides = document.querySelector(".landing-bg");
  let index = 0;


  function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
  };

  function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
  };

  // setInterval(next, 5000);

 