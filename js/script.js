// Make mobile navigation work
const btnNav = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNav.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});

//////////////////////////////////////////
// Smooth scrolling animation
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    headerEl.classList.toggle("nav-open");
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

//////////////////////////////////////////
// Smooth scrolling animation
// Observe the section hero after moving out the viewport
const sectionHeroEl = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) document.body.classList.add("sticky");

    if (ent.isIntersecting) document.body.classList.remove("sticky");
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
    // rootMargin equal to height of nav

    // null: the view port
    // threshold: 1 get the event when the section completely inside the viewport
    // threshold: 0 get the event when the section completely moveout the viewport
  }
);
observer.observe(sectionHeroEl);
