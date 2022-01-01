const btnHamburgerOpen = document.querySelector("#btnHamburgerOpen");
const mobileMenu = document.querySelector("#mobileMenu");
const mobileLinks = mobileMenu.children;

function cambiarImagenJS(){
    document.getElementById("img1").src="../images/desktop/image-hero.jpg";
  }
  
btnHamburgerOpen.addEventListener("click", () => {
    btnHamburgerOpen.classList.toggle("open");
    mobileMenu.classList.toggle("open");
});


/**
 * Crea el evento click a cada elemento link de mobileMenu, quitando la clase open al div por click
 */
const links = document.querySelectorAll("#mobileMenu a");

links.forEach((Element) => {
  Element.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    btnHamburgerOpen.classList.remove("open");
  });
});
/* Cambiar imagen */
