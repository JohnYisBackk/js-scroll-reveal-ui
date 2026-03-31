// =============================================
// 1. DOM ELEMENTS
// =============================================

const progressBar = document.getElementById("progressBar");
const revealElements = document.querySelectorAll(".reveal");
const header = document.querySelector(".header");

// =============================================
// 2. SCROLL PROGRESS BAR
// =============================================

function updateProgressBar() {
  const scrollTop = window.scrollY;

  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const progress = (scrollTop / scrollHeight) * 100;

  progressBar.style.width = progress + "%";
}

// =============================================
// 3. EVENT LISTENERS + INIT
// =============================================

window.addEventListener("scroll", () => {
  updateProgressBar();
  updateHeaderOnScroll();
});

updateHeaderOnScroll();
updateProgressBar();

// =============================================
// 4. REVEAL ANIMATION - INTERSECTION OBSERVER
// =============================================

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      } else {
        entry.target.classList.remove("active");
      }
    });
  },
  {
    threshold: 0.4,
  },
);

// =============================================
// 5. OBSERVE ALL REVEAL ELEMENTS
// =============================================

revealElements.forEach((element) => {
  observer.observe(element);
});

// =============================================
// 6. HEADER SCROLL
// =============================================

function updateHeaderOnScroll() {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}
