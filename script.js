// Get the elements
const hamburger = document.getElementById('hamburger');
const headerList = document.getElementById('header-list');

// Show the navbar when the hamburger is clicked
hamburger.addEventListener('click', () => {
    headerList.classList.remove('header__list');
    headerList.classList.add('header__list--show');
});

// Hide the navbar when the cursor leaves the list
headerList.addEventListener('mouseleave', () => {
    headerList.classList.remove('header__list--show');
    headerList.classList.add('header__list');
});

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


