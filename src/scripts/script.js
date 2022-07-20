"use strict";

// Page & Link Variables
const gamePage = document.getElementById("game-page");
const learnPage = document.getElementById("learn-page");
const gamePageLink = document.getElementsByClassName("game-page-link");
const learnPageLink = document.getElementsByClassName("learn-page-link");
const gameNavLink = document.getElementById("game-nav");
const learnNavLink = document.getElementById("learn-nav");

//Getting all card back images from HTML and putting into an array
let cards = Array.from(document.querySelectorAll("div.card > img"));

// Modal Variables
const howtoButton = document.getElementById("how-btn");
const howtoButtonClose = document.getElementById("how-modal-close");
const howtoModal = document.getElementById("how-to-modal");
const gameEndedModal = document.getElementById("game-ended-modal");

//Loading Content for Cards
const aperolImgSrc = "src/imgs/cards/cocktail-card-aperol-spritz.png";
const aperolTextSrc = "src/imgs/cards-text/cocktail-cards-text-aperol-spritz.png";
const cosmoImgSrc = "src/imgs/cards/cocktail-card-cosmopolitan.png";
const cosmoTextSrc = "src/imgs/cards-text/cocktail-cards-text-cosmopolitan.png";
const espressoMartiniImgSrc = "src/imgs/cards/cocktail-card-espresso-martini.png";
const espressoMartiniTextSrc = "src/imgs/cards-text/cocktail-cards-text-espresso-martini.png";
const pinaColadaImgSrc = "src/imgs/cards/cocktail-card-pina-colada.png";
const pinaColadaTextSrc = "src/imgs/cards-text/cocktail-cards-text-pina-colada.png";
const cardBackImgSrc = "src/imgs/cards/cocktail-card-back.png";

//Array to store card content
let cardContentArray = [];

//Creating card content objects
const aperolImg = new cardContent(aperolImgSrc, 1);
cardContentArray.push(aperolImg);
const aperolText = new cardContent(aperolTextSrc, 1);
cardContentArray.push(aperolText);
const cosmoImg = new cardContent(cosmoImgSrc, 2);
cardContentArray.push(cosmoImg);
const cosmoText = new cardContent(cosmoTextSrc, 2);
cardContentArray.push(cosmoText);
const espressoMartiniImg = new cardContent(espressoMartiniImgSrc, 3);
cardContentArray.push(espressoMartiniImg);
const espressoMartiniText = new cardContent(espressoMartiniTextSrc, 3);
cardContentArray.push(espressoMartiniText);
const pinaColadaImg = new cardContent(pinaColadaImgSrc, 4);
cardContentArray.push(pinaColadaImg);
const pinaColadaText = new cardContent(pinaColadaTextSrc, 4);
cardContentArray.push(pinaColadaText);

//Empty variables to store which cards clicked
let cardClicked1 = null;
let cardClicked2 = null;
let clickEvent1Result = null;
let clickEvent2Result = null;

// GENERAL WEBSITE LOGIC START
let allModalHide = () => {
    howtoModal.style.display = "none";
    gameEndedModal.style.display = "none";
};

let gameReset = () => {
    for (let i = 0; i < cards.length; i++) {
        cards[i].src = cardBackImgSrc;
        cards[i].style.opacity = "1";
        cards[i].classList.add("cocktail-card-back");
        shuffled = shuffleCardContents(cardContentArray);
        clickEventsReset();
    }
};

let pagesLoad = (e) => {
    if (e.target.hash === "#learn-page") {
        learnPage.style.display = "block";
        gamePage.style.display = "none";
        //Changing nav links to bold when on the page
        gameNavLink.classList.remove("active");
        learnNavLink.classList.add("active");
        allModalHide();
    } else {
        gamePage.style.display = "block";
        learnPage.style.display = "none";
        //Changing nav links to bold when on the page
        gameNavLink.classList.add("active");
        learnNavLink.classList.remove("active");
        allModalHide();
        gameReset();
    };
};

for (let i = 0; i < gamePageLink.length; i++) {
    gamePageLink[i].addEventListener('click', pagesLoad)
};

for (let i = 0; i < learnPageLink.length; i++) {
    learnPageLink[i].addEventListener('click', pagesLoad)
};

let howtoModalShow = (e) => {
    howtoModal.style.display = "block";
};

let howtoModalHide = (e) => {
    howtoModal.style.display = "none";
}

howtoModalShow();
howtoButton.onclick = howtoModalShow;
howtoButtonClose.onclick = howtoModalHide;
//GENERAL WEBSITE LOGIC END

// GAME LOGIC START
//Card contents object defined
function cardContent(cardImg, id) {
    this.cardImg = cardImg;
    this.id = id;
};

//shuffles card contents so they are randomly organised in an array.  
const shuffleCardContents = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
};

let shuffled = shuffleCardContents(cardContentArray);

// Get id of card clicked and match to index from cards array. 
let storeCardClicks = (e) => {
    //store both cards clicked (by element).
    if (e.target.className !== "card-img cocktail-card-back") {
        return;
    } else if (cardClicked1 === null) {
        //store first clicked element and assign content.
        cardClicked1 = e.target;
        cardContentAssignment(e);
    } else if (cardClicked2 == null) {
        //store second click and check it is not the same as first click.
        cardClicked2 = e.target;
        if (cardClicked1 === cardClicked2) {
            // however if both clicks are the same element, clear second click and return to function start.
            cardClicked2 = null;
            return;
        } else {
            //if both clicks are not the same assign content to second card.
            cardContentAssignment(e);
        };
    } else {
        return;
    };

};

let cardContentAssignment = (e) => {
    let index = 0;
    let currentCardClicked = e.target;
    for (let i = 0; i < cards.length; i++) {
        //loop through cards until id matches id of card clicked
        let cardsID = cards[i].id;
        if (cardsID === currentCardClicked.id) {
            index = i;
            break;
        };
        cardsID = null;
    };
    currentCardClicked = null;
    cardFlip(index, e);
};

let cardFlip = (index, e) => {
    if (clickEvent1Result === null) {
        //getting index from object array
        clickEvent1Result = shuffled[index];
        //replacing img using object src
        e.target.src = clickEvent1Result.cardImg;
    } else {
        clickEvent2Result = shuffled[index];
        e.target.src = clickEvent2Result.cardImg;
        setTimeout(pairValidate, 1000);
    };
};

let clickEventsReset = () => {
    clickEvent1Result = null;
    clickEvent2Result = null;
    cardClicked1 = null;
    cardClicked2 = null;
};

let pairValidate = () => {
    if (clickEvent2Result !== null && clickEvent1Result.id === clickEvent2Result.id) {
        cardClicked1.style.opacity = "0.4";
        cardClicked2.style.opacity = "0.4";
        cardClicked1.classList.remove("cocktail-card-back");
        cardClicked2.classList.remove("cocktail-card-back");
        clickEventsReset();
        gameEnd();
    } else if (clickEvent2Result !== null && clickEvent1Result.id !== clickEvent2Result.id) {
        //show card back again
        cardClicked1.src = cardBackImgSrc;
        cardClicked2.src = cardBackImgSrc;
       clickEventsReset();
    };
};

let gameEnd = () => {
    const allGameCards = document.getElementsByClassName("cocktail-card-back");
    let gameEnded = true;
    for (let i = 0; i < allGameCards.length; i++) {
        if (allGameCards[i].className === "card-img cocktail-card-back") {
            gameEnded = false;
            break;
        };
    };
    if (gameEnded) {
        gameEndedModal.style.display = "block";
    };

};

for (let i = 0; i < cards.length; i++) {
    cards[i].onclick = storeCardClicks;

};

// GAME LOGIC END

