// Tableau des slides
const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Sélection des éléments de la bannière et des flèches
const bannerImage = document.querySelector(".banner-img");
const bannerTagLine = document.querySelector("#banner p");
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

let currentSlide = 0;

// Fonction pour afficher le slide actuel
function updateSlide(index) {
  bannerImage.src = `./assets/images/slideshow/${slides[index].image}`;
  bannerTagLine.innerHTML = slides[index].tagLine;
}

// Écouteur pour la flèche gauche
arrowLeft.addEventListener("click", () => {
  console.log("Flèche gauche cliquée");
  alert("Vous avez cliqué sur la flèche gauche");
  currentSlide = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
  updateSlide(currentSlide);
});

// Écouteur pour la flèche droite
arrowRight.addEventListener("click", () => {
  console.log("Flèche droite cliquée");
  alert("Vous avez cliqué sur la flèche droite");
  currentSlide = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
  updateSlide(currentSlide);
});

// Afficher le premier slide au chargement
updateSlide(currentSlide);
