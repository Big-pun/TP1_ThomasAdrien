// TODO carousel d'images

let slideIndex = 1;
showSlides(slideIndex);

// Suivant /Precedent
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Image actuelle
function currentSlide(n) {
  showSlides((slideIndex = n));
}

// Affichage des images
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("carousel__slides"); // On récupère les images
  let dots = document.getElementsByClassName("carousel__dot"); // On récupère les points
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // On enlève la classe active
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block"; // On affiche l'image
  dots[slideIndex - 1].className += " active"; // On ajoute la classe active
}

// TODO API variables et requête

const searchInput = document.getElementsByClassName("search__input");
const searchButton = document.getElementsByClassName("search__btn");
const searchResults = document.getElementsByClassName("search__results");
const clearButton = document.getElementsByClassName("clear__btn");

const fetchData = async (name) => {
    try {
        console.log("fetchData");

        const response = await fetch('db/db.json');
        const data = await response.json();

        if (!response.ok) {
            throw new Error('La requête a rencontré un problème');
        }

    const character = data.characters.find(character => character.id === name);
        console.log(character);

        } catch (error) {

            console.log("Erreur: ", error);
        }

    }

    // TODO API recherche

    function startSearch(event) {
        console.log("startSearch");
      
        const name = searchInput.value.trim();
        if (name !== "") {
          fetchData(name);
        } else {
          displayErrorPopup("Veuillez entrer un nom de personnage");
        }
      }