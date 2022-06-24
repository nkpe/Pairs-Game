"use strict";

// 1. Window.onload - Define images / Text objects to randomise and assign to cards. 
// 1a. HTML contains card id 1-'8' and img. JS points to card id & img to remove this. 
// 2.  Define Correct Pairs (using objects?)
// 3. When card clicked, get the image / text id and store in object.
// 4. When two values recieved, check value of text string matches id of image. 
// 5. If true - leave turned over. If false, hide (If else statement).
// 6. When all card backs are hidden, show modal "sucess"
// 7. Nice to have - timer in corner; pause timer button (with modal to disable the game);


// Inital Pairs - Aperol Spritz, Cosmopolitan, Espresso Martini, Pina Colada, 

//Loading Content for Cards
const aperolImgSrc = "src/imgs/cards/cocktail-card-aperol-spritz.png";
const aperolTextSrc = "Aperol Spritz";
const cosmoImgSrc = "src/imgs/cards/cocktail-card-cosmopolitan.png";
const cosmoTextSrc = "Cosmopolitan";
const espressoMartiniImgSrc = "src/imgs/cards/cocktail-card-espresso-martini.png";
const espressoMartiniTextSrc = "Espresso Martini";
const pinaColadaImgSrc = "src/imgs/cards/cocktail-card-pina-colada.png";
const pinaColadaTextSrc = "Pina Colada";


window.onload = function () {
    //Variable from HTML document
    let cards = document.querySelectorAll("div.card");

    //GET ALL CONTENT AND RANDOMISE THROUGHOUT THE CARDS (BY GETTING CARDS BY ID. )

    //Objects to define
    function cardContent(cardImg, id) {
        this.cardImg = cardImg;
        this.id = id;
    };

    let cardContentArray = [];
   
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

    console.log(cardContentArray.length);
    console.log(`Card Content Array :`,cardContentArray);

    const shuffleCardContents = (array) => {
        for (let i = array.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    };

    let shuffled = shuffleCardContents(cardContentArray);

    console.log(shuffled);


    
    // Logic for click event
    let cardFlip = (e) => {
        let cardElement = e.srcElement.offsetParent;
        // console.log(e);
        let cardReplace = () => {
            //selecting element containing card back
            let imgBack = cardElement.querySelector(".card-img");
            console.log(imgBack);
            imgBack.style.display = "none";
            
        }
        cardReplace();

    };

    for (let i = 0; i < cards.length; i++) {
        cards[i].onclick = cardFlip;
    };


    //end logic for click event



























    // let card1Flip = () => {
    //     card1Front.style.display = "block";
    //     card1Back.style.display = "none";
    // };

    // card1Back.addEventListener('click' , e =>{
    // card1Flip(e);
    // });


    // let card2Flip = () => {
    //     card2Front.style.display = "block";
    //     card2Back.style.display = "none";
    // };

    // card2Back.addEventListener('click' , e =>{
    // card2Flip(e);
    // });


    // function cardPair (front1, front2){
    //     this.cardImage = front1;
    //     this.cardTitle = front2;
    // };

    // let cardPair1 = new cardPair(card1Back , card2Back);

    // console.log(cardPair1);
}

