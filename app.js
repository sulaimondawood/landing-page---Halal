const swiper = new Swiper(".swiper", {
  slidesPerView: "3",
  grabCursor: true,

  direction: "horizontal",
  // loop: true,
  // If we need pagination
  breakpoints: {
    // when window width is >= 320px
    300: {
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

const day = document.querySelector(".day-num");
const hour = document.querySelector(".hour-num");
const min = document.querySelector(".min-num");
const sec = document.querySelector(".sec-num");

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

const deadline = new Date("Jan 29, 2023 15:37:25").getTime();
const x = setInterval(function () {
  const now = new Date().getTime();
  const t = deadline - now;
  const days = Math.floor(t / (1000 * 60 * 60 * 24));
  const hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((t % (1000 * 60)) / 1000);

  day.textContent = days;
  hour.textContent = hours;
  min.textContent = minutes;
  sec.textContent = seconds;
  if (t < 0) {
    clearInterval(x);
    document.getElementsByClassName("date-card-wrapper").innerHTML = "EXPIRED";
  }
}, 1000);
