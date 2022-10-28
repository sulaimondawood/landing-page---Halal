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
    770: {
      slidesPerView: 3,
    },
  },
});

const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav-links");
const galleryImgs = document.querySelectorAll(".gal-img");
const selected = document.querySelector(".selected-img");
const hrefTag = document.querySelectorAll(".href-tag");
const gallery = document.querySelectorAll(".bottom");
const yearDiv = document.querySelectorAll(".year-div");
const yearContainer = document.querySelector(".year-container");
const yearSec = document.querySelector(".years-sec");

toggle.addEventListener("click", () => {
  nav.classList.toggle("show-nav-links");
  if (nav.classList.contains("show-nav-links")) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "auto";
  }
});

hrefTag.forEach((href) => {
  href.addEventListener("click", () => {
    nav.classList.toggle("show-nav-links");
    document.body.style.overflowY = "auto";
  });
});

galleryImgs.forEach((img) => {
  img.addEventListener("click", () => {
    selected.src = img.src;
    selected.style.opacity = "1";
  });
});

selected.addEventListener("click", () => {
  // selected.src = "";
  selected.style.backgroundColor = "none";
  selected.style.opacity = "0";
});

// Gallery
yearSec.addEventListener("click", (e) => {
  // console.log(e.target.dataset.id);
  const id = e.target.dataset.id;
  if (id) {
    yearDiv.forEach((item) => {
      item.classList.remove("active");
      e.target.classList.add("active");
    });

    gallery.forEach((gal) => {
      gal.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
