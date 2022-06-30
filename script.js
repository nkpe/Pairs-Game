"use strict";


// Inital Pairs - Aperol Spritz, Cosmopolitan, Espresso Martini, Pina Colada, 

//Variable from HTML document
let cards = Array.from(document.querySelectorAll("div.card > img"));

//Loading Content for Cards
const aperolImgSrc = "src/imgs/cards/cocktail-card-aperol-spritz.png";
const aperolTextSrc = "src/imgs/cards-text/cocktail-cards-text-aperol-spritz.png";
const cosmoImgSrc = "src/imgs/cards/cocktail-card-cosmopolitan.png";
const cosmoTextSrc = "src/imgs/cards-text/cocktail-cards-text-cosmopolitan.png";
const espressoMartiniImgSrc = "src/imgs/cards/cocktail-card-espresso-martini.png";
const espressoMartiniTextSrc = "src/imgs/cards-text/cocktail-cards-text-espresso-martini.png";
const pinaColadaImgSrc = "src/imgs/cards/cocktail-card-pina-colada.png";
const pinaColadaTextSrc = "src/imgs/cards-text/cocktail-cards-text-pina-colada.png";

let cardContentArray = [];
//Object defined
function cardContent(cardImg, id) {
    this.cardImg = cardImg;
    this.id = id;
};

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

//GET ALL CONTENT AND RANDOMISE THROUGHOUT THE CARDS (BY GETTING CARDS BY ID.)
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

console.log(shuffled);
console.log(cards);

// Assigning content to each card
let contentAssign = () => {
    for (let i=0; i<cards.length; i++){
    cards[i].src = cardContentArray[i];
};
};


// Logic for click event
let cardFlip = (e) => {
    let cardElement = e.srcElement.offsetParent;
    let cardReplace = () => {
        //selecting element containing card back
        let imgBack = cardElement.querySelector(".card-img");
        console.log(imgBack);
        imgBack.src = aperolText.cardImg;  //REPLACE THIS APEROLIMG WITH RANDOM NUMBER MATCHING CARD 

    }
    cardReplace();
    console.log(e);
};



for (let i = 0; i < cards.length; i++) {
    cards[i].onclick = cardFlip;
};  //end logic for click event


