const menuBtn = document.querySelector(".menu-btn");
const menuMobile = document.querySelector(".menu-mobile");

menuBtn.addEventListener("click", () => {
  menuMobile.classList.toggle("menu-mobile--active");
});

const promoArrow = document.querySelector(".promo__arrow");
const info = document.querySelector('.info');
promoArrow.addEventListener("click", function (e) {
  e.preventDefault();

  info.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

const swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: ".swiper-button-right",
    prevEl: ".swiper-button-left",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});