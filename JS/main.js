document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const smallNav = document.querySelector(".small-nav");
  const smallNavItems = document.querySelectorAll(".small-nav ul li a");

  hamburgerMenu.addEventListener("click", function () {
    smallNav.classList.toggle("small-nav--active");
    document.body.classList.toggle("overflow-h");
  });

  smallNavItems.forEach((item) => {
    item.addEventListener("click", () => {
      smallNav.classList.toggle("small-nav--active");
      document.body.classList.toggle("overflow-h");
    });
  });
});