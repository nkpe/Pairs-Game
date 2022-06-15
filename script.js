"use strict";

let card1Image = document.getElementById("card1-back");
let card1Back = document.getElementById("card1-front");

let card2Back = document.getElementById("card2-back");
let card2Front = document.getElementById("card2-front");




let card1Flip = () => {
    card1Front.style.display = "block";
    card1Back.style.display = "none";
};

card1Back.addEventListener('click' , e =>{
card1Flip(e);
});


let card2Flip = () => {
    card2Front.style.display = "block";
    card2Back.style.display = "none";
};

card2Back.addEventListener('click' , e =>{
card2Flip(e);
});


// function cardPair (front1, front2){
//     this.cardImage = front1;
//     this.cardTitle = front2;
// };

// let cardPair1 = new cardPair(card1Back , card2Back);

// console.log(cardPair1);