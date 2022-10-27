const swiper = new Swiper(".swiper", {
  slidesPerView: "3",
  grabCursor: true,

  direction: "horizontal",
  // loop: true,
  // If we need pagination
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.3,
    },
    // when window width is >= 480px
    // 480: {
    //   slidesPerView: 3,
    // },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
    },
  },
});

const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav-links");
const galleryImgs = document.querySelectorAll(".gal-img");
const selected = document.querySelector(".selected-img");
toggle.addEventListener("click", () => {
  nav.classList.toggle("show-nav-links");
  console.log(toggle, nav, selectedImg);
});

galleryImgs.forEach((img) => {
  console.log(img);
  img.addEventListener("click", () => {
    selected.src = img.src;
    selected.style.opacity = "1";
    // console.log(selected);
  });
});

selected.addEventListener("click", () => {
  // selected.src = "";
  selected.style.backgroundColor = "none";
  selected.style.opacity = "0";
});
