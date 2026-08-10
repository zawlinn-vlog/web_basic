"use strict";

console.log("Hello World!");

const h1 = document.querySelector(".heading-primary");
console.log(h1);

/////////////////////////////
/// COPYRIGHT YEAR       ///
////////////////////////////

const yealEl = document.querySelector(".year");

const date = new Date();

yealEl.textContent = date.getFullYear();

// console.log(date.getFullYear());

/////////////////////////////
/// MOBILE NAV           ///
////////////////////////////

const headerEl = document.querySelector(".header");

const openEl = document.querySelector(`.btn-mobile-nav`);

openEl.addEventListener("click", (e) => {
  // console.log(e);
  headerEl.classList.toggle("nav-open");
});
// console.log(openEl, headerEl);

/////////////////////////////
/// SMOOTH SCROLL        ///
////////////////////////////

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // console.log(e);
    e.preventDefault();
    const href = link.getAttribute("href");

    console.log(href);

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
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entires) {
    const ent = entires[0];
    // console.log(ent);

    if (ent.isIntersecting === false) document.body.classList.add("sticky");

    if (ent.isIntersecting === true) document.body.classList.remove("sticky");
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  },
);

obs.observe(sectionHeroEl);

///////////////////////////////////////////////

// Fixing Flexbox gap property missing in some safari versions

function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}

checkFlexGap();
