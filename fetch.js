// TODO API variables et requête

const searchInput = document.getElementById("search__input");
const searchButton = document.getElementById("search__btn");
const clearButton = document.getElementById("clear__btn");



const fetchData = async (searchName) => {
    console.log("searchName")
    try {
        const response = await fetch('db.json');
        if (!response.ok) throw new Error('La requête a rencontré un problème');
        const data = await response.json();
        if (data.characters.length === 0) throw new Error(`Aucun résultat pour le mot ${searchName}`);
        const character = data.characters.find(character => character.name.toLowerCase() === searchName.toLowerCase());
        if (!character) throw new Error(`Aucun personnage trouvé avec le nom ${searchName}`);
        displayData(character);
    } catch (error) {
        displayErrorPopup(error.message);
    }
};





    // TODO API affichage des erreurs

    function displayErrorPopup(message) {
        console.error(message); // Affiche le message d'erreur dans la console
        alert(message); // Lance une fenêtre pop-up avec le message d'erreur
    }

    // TODO API affichage des résultats

    function displayData(characters) {
        console.log("displayData");

        const data = characters[0];
        const characterName = characters.name;
        const characterBio = characters.bio;
        const characterImage = characters.img;
        const abilities = characters.abilities;

        const resultNameElement = document.getElementById("result__name");
        resultNameElement.textContent = characterName;

        const resultBioElement = document.getElementById("result__bio");
        resultBioElement.textContent = characterBio;

        const resultImageElement = document.getElementById("result__img");
        resultImageElement.src = characterImage;
        resultImageElement.alt = characterName;

        const resultAbilities = document.getElementById("result__abilities");
        resultAbilities.innerText = "Spéciales techniques: " + abilities.join(", ") + "."; 
        }
        

    // TODO API effacer les résultats

    function clearData() { // Fonction qui supprime la data précédente
        console.log("clearData");

        const resultNameElement = document.getElementById("result__name");
        resultNameElement.textContent = "";

        const resultBioElement = document.getElementById("result__bio");
        resultBioElement.textContent = "";

        const resultImageElement = document.getElementById("result__img");
        resultImageElement.src = "";
        resultImageElement.alt = "";

        const resultAbilities = document.getElementById("result__abilities");
        resultAbilities.innerHTML = "";

        searchInput.value = "";

    }

        // TODO API recherche

        function startSearch(event) {
            console.log("startSearch");

            const name = searchInput.value.toLowerCase();
            if (name !== "") {
                fetchData(name);
            } else {
                displayErrorPopup("Veuillez entrer un nom de personnage");
            }
        }


        // TODO ajout event listener pour le click sur le search bouton et pour la pression de la touche enter du clavier

        searchButton.addEventListener("click", startSearch);
        searchInput.addEventListener("keypress", (event) => {
            if (event.key === "Enter") {
                startSearch(event);
            }
        });

        // TODO appel de la fonction clearDefinition lors du click sur clearButton

        clearButton.addEventListener("click", clearData);


        // TODO au chargement de la page, afficher les données de base pour "goku"
        window.addEventListener("load", () => {
            fetchData("goku");
        });