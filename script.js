const howPg = document.getElementById("how-pg");
const gamePg = document.getElementById("game-pg");
const supportPg = document.getElementById("support-pg");
const howPgLink = document.getElementById("how-pg-link");
const gamePgLink = document.getElementById("game-pg-link");
const supportPgLink = document.getElementById("support-pg-link");
const allNavLinks = document.querySelectorAll("nav ul li button");
const allSections = document.querySelectorAll("main section");
var url = document.location.hash
//set hash for pages

/* 1. on click get id of navlink item.
   2. check if id match within if and else statement.
   3. define funciton to run when click happens (i.e change colour)
   4. event listener for the click.
*/

window.onload = function(){
    for (let i=0; i<allSections.length; i++){
        allSections[i].hidden = true;
    }; 
    gamePg.hidden = false;
    console.log("hiiii");
};

for (let link of allNavLinks){
    link.addEventListener("click" , loadPage);
};

 function loadPage(e){
    console.log(allSections);
    for (let i=0; i< allNavLinks.length; i++){
        allSections[i].hidden = true;
    };
    // for each statement apply to   allSections[i].style.display = "none";
    for (let i = 0; i < allNavLinks.length ; i++){
        if (allNavLinks[i].id === "how-pg-link" && e.target.id === "how-pg-link"){
            howPg.hidden = false;
            document.location.hash = "how_to";
            break;
        } else if (allNavLinks[i].id === "game-pg-link"  && e.target.id === "game-pg-link"){
            gamePg.hidden = false;
            document.location.hash = "game";
            break;
        } else if (allNavLinks[i].id ==="support-pg-link" && e.target.id === "support-pg-link"){
            supportPg.hidden = false;
            document.location.hash = "support";
            break;
        }} 
 };





