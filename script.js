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

window.onload = function () {
    const aperolImgSrc = "src/imgs/cards/cocktail-card-aperol-spritz.png";
    const aperolTextSrc = "Aperol Spritz";


    //Variable from HTML document
    let cards = document.querySelectorAll("div.card");
    // let newContent = document.createElement("div");

    //Objects to define
    function cardContent(cardImg, id) {
        this.cardImg = cardImg;
        this.id = id;
    };

   
    const aperolImg = new cardContent(aperolImgSrc, 1);
    const aperolText = new cardContent(aperolTextSrc, 1);
    //

    // Logic for click event
    let cardFlip = (e) => {
        let cardSelected = e.srcElement.offsetParent;
        let cardClicked = e.srcElement.offsetParent.id;
        console.log(cardSelected);
        console.log(cardClicked);
        // console.log(e);

        let cardReplace = () => {

            console.log("is Cocktail Image show?");

            let imgBack = cardSelected.querySelector(".card-img");
            console.log(imgBack);

            imgBack.src = aperolImg.cardImg;

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

