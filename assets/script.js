// Tableau des slides (déjà défini)
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

// Sélection des éléments nécessaires
const bannerImage = document.querySelector(".banner-img");
const bannerTagLine = document.querySelector("#banner p");
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dotsContainer = document.querySelector(".dots"); // Conteneur des bullet points

let currentSlide = 0; // Slide actif

// Fonction pour créer les bullet points dynamiquement
function createDots() {
  slides.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === currentSlide) {
      dot.classList.add("dot_selected"); // Ajoute la classe pour le slide actif
    }
    dotsContainer.appendChild(dot);

    // Ajout d'un event listener pour naviguer via les bullet points
    dot.addEventListener("click", () => {
      updateSlide(index); // Passe au slide correspondant au bullet point
    });
  });
}

// Fonction pour mettre à jour le slide
function updateSlide(index) {
  // Mise à jour de l'image et du texte
  bannerImage.src = `./assets/images/slideshow/${slides[index].image}`;
  bannerTagLine.innerHTML = slides[index].tagLine;

  // Mise à jour des bullet points
  document.querySelectorAll(".dot").forEach((dot, idx) => {
    if (idx === index) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  });

  currentSlide = index; // Met à jour l'index du slide actif
}

// Event listeners pour les flèches
arrowLeft.addEventListener("click", () => {
  const newSlide = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
  updateSlide(newSlide);
});

arrowRight.addEventListener("click", () => {
  const newSlide = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
  updateSlide(newSlide);
});

// Initialisation
createDots(); // Crée les bullet points
updateSlide(currentSlide); // Affiche le premier slide
