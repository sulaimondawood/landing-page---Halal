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
const swiper2 = new Swiper(".swiper2", {
  slidesPerView: "4.3",
  grabCursor: true,
});

const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav-links");
const hrefTag = document.querySelectorAll(".href-tag");
const gallery = document.querySelectorAll(".bottom");
const yearDiv = document.querySelectorAll(".year-div");
const yearContainer = document.querySelector(".year-container");
const yearSec = document.querySelector(".years-sec");

const cartReadMore = document.querySelector(".see-more");
const bottom = document.querySelector(".c-wrap");
const cardWrap = document.querySelector(".card-w-c");

bottom.addEventListener("click", (e) => {
  if (e.target.classList.contains("see-more")) {
    const parentEl =
      e.target.previousElementSibling.lastElementChild.classList.contains(
        "li-cont-hide"
      );

    if (parentEl) {
      e.target.previousElementSibling.lastElementChild.classList.add(
        "li-cont-show"
      );
      e.target.textContent = "see less";
      e.target.previousElementSibling.lastElementChild.classList.remove(
        "li-cont-hide"
      );
    } else {
      e.target.previousElementSibling.lastElementChild.classList.add(
        "li-cont-hide"
      );
      e.target.textContent = "see more";
      e.target.previousElementSibling.lastElementChild.classList.remove(
        "li-cont-show"
      );
    }
  }
});

cardWrap.addEventListener("click", (e) => {
  if (e.target.classList.contains("read-more")) {
    const parentEl =
      e.target.previousElementSibling.classList.contains("span-hide");

    console.log(parentEl);
    if (parentEl) {
      e.target.previousElementSibling.classList.add("span-show");
      e.target.textContent = "read less";
      e.target.previousElementSibling.classList.remove("span-hide");
    } else {
      e.target.previousElementSibling.classList.remove("span-show");
      e.target.textContent = "read more";
      e.target.previousElementSibling.classList.add("span-hide");
    }
  }
});

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

const galleryImgs = document.querySelectorAll(".gal-img");
const selectedI = document.querySelector(".selected-img");
const selected = document.querySelector(".sel-cont");
const prevImg = document.querySelector(".r-1");
const nextImg = document.querySelector(".r-2");

console.log(prevImg, nextImg);
let index = 0;
// Gallery
galleryImgs.forEach((img, index) => {
  img.addEventListener("click", () => {
    selectedI.src = img.src;
    selected.style.opacity = "1";
  });
});

// selected.addEventListener("click", () => {
//   // selected.src = "";
//   selected.style.backgroundColor = "none";
//   selected.style.opacity = "0";
// });

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

// function showSlides(n) {
//   // let i;
//   // let slides = document.getElementsByClassName("mySlides");
//   // let dots = document.getElementsByClassName("demo");
//   // let captionText = document.getElementById("caption");
//   if (n > galleryImgs.length) {
//     index = 1;
//   }
//   if (n < 1) {
//     index = galleryImgs.length;
//   }
//   for (i = 0; i < galleryImgs.length; i++) {
//     slides[i].style.display = "none";
//   }
//   // for (i = 0; i < dots.length; i++) {
//   //   dots[i].className = dots[i].className.replace(" active", "");
//   // }

//   // slides[slideIndex - 1].style.display = "block";
//   // dots[slideIndex - 1].className += " active";
//   // captionText.innerHTML = dots[slideIndex - 1].alt;
// }

// function plusSlides(n) {
//   showSlides((index += n));
// }
nextImg.addEventListener("click", () => {
  console.log(galleryImgs);
  if (index > galleryImgs.length) {
    selectedI.src = galleryImgs[0].src;
  } else {
    selectedI.src = galleryImgs[index++].src;
  }
});
prevImg.addEventListener("click", () => {
  console.log(galleryImgs);
  if (index < 1) {
    selectedI.src = galleryImgs[galleryImgs.length].src;
  } else {
    selectedI.src = galleryImgs[index--].src;
  }
});

function showCurrImg(n) {
  if (n < 1) {
    return (index = galleryImgs.length);
  } else if (n > galleryImgs.length) {
    return (index = 0);
  }
}
const day = document.querySelector(".day-num");
const hour = document.querySelector(".hour-num");
const min = document.querySelector(".min-num");
const sec = document.querySelector(".sec-num");

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
