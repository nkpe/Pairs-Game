# Pairs Game - Project Two
<!-- explains what the project does and the value that it provides to its users. -->

The purpose of this game is to help aspiring mixologists to recognise and name classic cocktails.


# UX

## Overview
The UX has a clean, minimal and contemporary design, allowing the user to focus on the page content. The header and footer are defined using a simple line, while maintaining a white background to keep the flow of the design. 

Responsiveness for the website, including the game cards, has been seamlessly achieved through the use of bootstrap's grid system.

When the 'game' and 'learn' navigations links are used the page hides the header, ensuring the content of the page is the focus of the browser window.  
## Game Page
Bootstrap provides two modals - one for the 'how to play' instructions and one at the end of the game. These modals show on top of the game, so the user does not lose their place within the game.

The 'how to play' modal appears on page load, to ensure the user understands the game. The colour of this modal has been chosen to ensure separation from the items underneath while retaining readability.

The use of playful colours and shadows ensure the cards stand out on the page. 

Once the user makes all the correct matches, the game ends with a 'congratulations' modal. This modal provides two options for the user - to play again or learn more about the cocktails they have learnt to recognise throughout the game.

## Learn Page
This informative page allows the user to become more educated about the cocktails they learnt during the game. The use of white space, image and text blocks, headings and bootstrap's grid system work together to make this page easy to read on all devices and browsers.  

Recipe links are clearly defined through the use of borders, to provide more info for each cocktail.

# Wireframes
# Features
## All Pages

**Header** - 
**Footer** - 

## #game-page
**Modals** - 

## #learn-page
**Boostrap Grid** -

# Features to be implemented
* **Countdown timer** - where game times out if the user takes too long to complete the game.
* **Animations** - flip animations on the cards.
* **Levels** - easy to hard. Harder levels = more pairs to do. This will allow all the cocktails from the 'learn' page to be played within the game.
* **Feedback Page** - for the user to send feedback about the website and game, in case of any bugs / issues.

# Technologies used
* **HTML 5** - used to create the basic content of the website.
* **CSS3** - used to add custom styling to the content of the webpage. 
* **Bootstrap** - used to create the header and navigation bar and provides modal features. The bootstrap grid provides responsive layout to the website as a whole.

* **JavaScript** - heavily used for the game logic (randomise card, check for correct pairs and reset the pack).
* **Font Awesome** - the project used Font Awesome GitHub and LinkedIn fonts for the social media links.
* **Google Fonts** - used to import a custom font to style the text. 
* **Git** - this was used during production to efficiently commit and push changes to the GitHub repository so no code could be lost. 
* **GitHub** - this was used to create and manage a remote repository which holds all commits and pushed from Git. I made uses of the repository branches to separate and track working changes, in case of bugs, before committing new changes to the master branch.

# Testing
While building the website I regularly used Google Chrome, FireFox, Safari and Edge browsers to render my code, checking for any broken code and incompatibility. One example I found that Firefox and Safari rendered the select tag in HTML with a grey background giving the form fields inconsistent styling. I fixed this by adding a class of form-field-background to each form field with a specified colour. 

I used the Developer Tools built into Chrome to test responsiveness of the website, by selecting different devices. When conducting these tests I found the responsiveness of the home page photo and the form fields needed to be handled with media queries as they had specific break points.  

## HTML & CSS Validator   
To validate my HTML code I used [W3C Markup Validation Service](https://validator.w3.org/#validate_by_upload).

To validate my CSS code I used [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/#validate_by_upload).
## Interesting Bugs / Problems
* **Image Loading Time** - when clicking on the images take a time to load, seeming as though the click was not registered. Image files too large.

# Deployment
At the start of the development I created a repository on GitHub and cloned a local copy to my machine. To do this I followed these steps:
## Start of project

1. On GitHub webpage I went to 'your repositories' page and clicked 'new' to create a new repository for this project called 'Pairs-Game'.
2. I went into the new repository, clicking on the green 'code' button, I selected the 'download ZIP' option from the dropdown.
3. Once the ZIP folder had downloaded, I saved it in a relevant place on my machine and create the  


During development I regularly used the git command line tool to create branches, push my code to the remote repo and manage commits. Once a large feature had been added I used GitHub to create pull requests to merge branches into the main branch.

The page has been deployed to GitHub pages for hosting - [Pairs Game hosted on GitHub pages](https://nkpe.github.io/Pairs-Game/).

I followed the following steps to deploy to GitHub pages: 

1. Opened the repository on GitHub
2. Under 'settings' I found the 'Pages' section in the list on the left. 
3. Under 'source' I chose the master branch and ensured the '/root' folder was selected. 


## Repo Link
[https://github.com/nkpe/Pairs-Game](https://github.com/nkpe/Pairs-Game)
## Running Code Locally
The code can be run locally by downloading from my GitHub repository following these steps: 

1. Click on the green 'Code' button.
2. From the drop down menu select 'download ZIP' or select the relevant clone option.
3. If downloading ZIP, this should be unzipped before running the website locally. 


# Credits

https://developer.mozilla.org/en-US/docs/Web/API/Element/replaceWith
https://stackoverflow.com/questions/19526456/get-all-instances-of-class-in-javascript

https://www.w3docs.com/snippets/html/how-to-create-an-html-button-that-acts-like-a-link.html

<!-- random function -->

https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj
<!-- box shadow all around  -->
https://stackoverflow.com/questions/6821295/add-css-box-shadow-around-the-whole-div 
## Content

https://getbootstrap.com/docs/5.0/components/card/ - implementing card layout on game page

https://getbootstrap.com/docs/5.2/components/modal/#how-it-works


http://alistapart.com/article/creating-intrinsic-ratios-for-video/ - Sizing ratio for the cards on game page.


Learn Page cocktail descriptions taken from the following pages:

[Aperol Spritz](https://en.wikipedia.org/wiki/Spritz_Veneziano)
[B-52](https://en.wikipedia.org/wiki/B-52_(cocktail))
[Cosmopolitan](https://en.wikipedia.org/wiki/Cosmopolitan_(cocktail))
[Espresso Martini](https://en.wikipedia.org/wiki/Espresso_martini)
[Long Island Iced Tea](https://en.wikipedia.org/wiki/Long_Island_iced_tea)
[Margarita](https://en.wikipedia.org/wiki/Margarita)
[Mojito](https://en.wikipedia.org/wiki/Mojito)
[Pina Colada](https://en.wikipedia.org/wiki/Pi%C3%B1a_colada) 
## Media
## Styling
https://www.color-hex.com/color-palette/42 48

## Acknowledgements 
* 
