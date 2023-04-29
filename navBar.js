const navSlide = () => {
  const burguer = document.querySelector(".burguer");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burguer.addEventListener("click", () => {
    //toggle Nav
    nav.classList.toggle("nav-active");

    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`;
      }
    });

    burguer.classList.toggle("toggle");
  });
};

window.addEventListener("scroll", function () {
  let header = this.document.querySelector("nav");
  header.classList.toggle("sticky", this.window.scrollY > 0);
});

navSlide();
