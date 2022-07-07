"use strict";

// Show how to button
let howtoButton = document.getElementById("how-btn");
let howtoButtonClose = document.getElementById("how-modal-close");
let howtoModal = document.getElementById("how-to-modal");
console.log(howtoButton);


let howtoModalShow = (e) => {
    howtoModal.style.display = "block";
};

let howtoModalHide = (e) => {
    howtoModal.style.display = "none";
}

howtoModalShow();
howtoButton.onclick = howtoModalShow;
howtoButtonClose.onclick = howtoModalHide;



// Inital Pairs - Aperol Spritz, Cosmopolitan, Espresso Martini, Pina Colada, 

//Getting all card back images from HTML and putting into an array
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
const cardBackImgSrc = "src/imgs/cards/cocktail-card-back.png"
//Array to store card content
let cardContentArray = [];

//Card contents object defined
function cardContent(cardImg, id) {
    this.cardImg = cardImg;
    this.id = id;
};

// Card content objects created
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

//shuffles card contents so they are randomly organised in an array.   https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj
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

// console.log("This is shuffled array:", shuffled);


// Assigning shuffled content to each card
// let contentAssign = () => {
//     for (let i = cards[i]; i < cards.length; i++) {
//        shuffled[i].cardImg;
//     };
// };
// contentAssign();

// // Logic for click event
// let cardFlip = (e) => {
//     let cardElement = e.srcElement.offsetParent;
//     let cardReplace = () => {
//         //selecting element containing card back
//         let imgBack = cardElement.querySelector(".card-img");
//         console.log(imgBack);
//         imgBack.src = aperolText.cardImg;  //REPLACE APEROLTEXT WITH RANDOM NUMBER MATCHING CARD 

//     }
//     cardReplace();
//     console.log(e);
// };



let clickEvent1Result = null;
let clickEvent2Result = null;
let cardClicked1 = null;
let cardClicked2 = null;
// Get id of card clicked and match to index from cards array. 
let cardFlip = (e) => {
    console.log("START click event function");
    let index = 0;
    //store both cards clicked (by element)
    let cardClicked = e.target;
    if (cardClicked1 === null){
        cardClicked1 = e.target;
    } else {
        cardClicked2 = e.target;
    };

    for (let i = 0; i < cards.length; i++) {
        //loop through cards until id matches id of card clicked
        let cardsID = cards[i].id;
        if (cardsID === cardClicked.id) {
            index = i;
            // console.log("This is the selected index:", index);
            break;
        };
        cardsID = null;
    };

    // console.log("This is event object", e);


    //log first card clicked and compare to second clicked 
    if (clickEvent1Result === null) {
        //getting index from object array
        clickEvent1Result = shuffled[index];
        //replacing img using object src
        e.target.src = clickEvent1Result.cardImg;
        console.log("1st Click Event", cardClicked1 , clickEvent1Result);

    } else {
        clickEvent2Result = shuffled[index];

        e.target.src = clickEvent2Result.cardImg;

        console.log("2nd Click Event" , cardClicked2 , clickEvent2Result);
        setTimeout( pairValidate , 1000 );
        cardClicked = null;
        //comparing object id's to check for a match
    };
    console.log("END click event function");
    
};

let pairValidate = () => {
    console.log("START pair validate function");
    if (clickEvent2Result !== null && clickEvent1Result.id === clickEvent2Result.id) {
        console.log("Congrats you've made a match");
        cardClicked1.style.opacity = "0.4";
        cardClicked2.style.opacity = "0.4";
        clickEvent1Result = null;
        clickEvent2Result = null;
        cardClicked1 = null;
        cardClicked2 = null;

    } else if (clickEvent2Result !== null && clickEvent1Result.id !== clickEvent2Result.id) {
        //show card back again
        console.log("You've not made a match" , cardClicked1 , cardClicked2);
        cardClicked1.src = cardBackImgSrc;
        cardClicked2.src = cardBackImgSrc;
        clickEvent1Result = null;
        clickEvent2Result = null;
        cardClicked1 = null;
        cardClicked2 = null;    
    };
    console.log("END pair validate function");
};



console.log("Current Index from shuffled", clickEvent1Result);
let index = 0;



console.log("0 Click Event", clickEvent1Result)

//Place index into content array to get content in same index. 

//Store ClickEvent1 & Get Click Event 2
// let cardsCompare = (e) => {

// };




//Compare Click Events 1&2 - create  a 'true' & 'false' result. 


// Clear Events 1&2



for (let i = 0; i < cards.length; i++) {
    cards[i].onclick = cardFlip;

};  //end logic for click event


