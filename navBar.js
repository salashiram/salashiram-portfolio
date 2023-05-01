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

const windowTop = document.getElementById("logo");

windowTop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

const navbar = document.querySelector("#navbar"); // selecciona tu barra de navegación por su id
let prevScrollpos = window.pageYOffset; // inicializa el previo scroll position

window.addEventListener("scroll", function () {
  const currentScrollPos = window.pageYOffset; // obtiene el scroll position actual
  if (prevScrollpos > currentScrollPos) {
    // si el usuario está desplazando hacia arriba
    navbar.classList.remove("hidden"); // muestra la barra de navegación
  } else {
    // si el usuario está desplazando hacia abajo
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
      navbar.classList.add("hidden"); // oculta la barra de navegación si ha llegado al final de la página web
    }
  }
  prevScrollpos = currentScrollPos; // actualiza el previo scroll position
});

// window.addEventListener("scroll", function () {
//   if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
//     // El usuario ha llegado al final de la página web

//     this.alert("has llegado al final");
//   }
// });

const btnScrollToTop = document.querySelector(".scroll-to-top");

// Add a click event listener to the button
btnScrollToTop.addEventListener("click", () => {
  // Scroll the page to the top with a smooth animation
  window.scrollTo({
    top: 0,
    // behavior: "smooth", // Ya esta esta propiedad en el CSS
  });
});

navSlide();
