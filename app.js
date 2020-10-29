const navbar = document.getElementById("nav");

navbar.addEventListener("click", navHandler);

function navHandler() {
  console.log("working");
  // Toggle off main section. Keeps on the navbar
  const main = document.getElementById("main");
  main.classList.toggle("hidden");

  const mobileNav = document.getElementById("mobile-nav");
  mobileNav.classList.toggle("hidden");
}
