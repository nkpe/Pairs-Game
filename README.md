# **Pairs Game - Project Two**
The purpose of this game is to help aspiring mixologists to recognise and name classic cocktails in a fun environment. It can also be played as fun for those that wish to test their cocktail knowledge. 
# **UX**
## **Overview**
The UX has a clean, minimal and contemporary design, allowing the user to focus on the page content. The header and footer are defined using a simple line, while maintaining a white background to keep the flow of the design. 

Responsiveness for the website, including the game cards, has been seamlessly achieved through the use of bootstrap's grid system.

When the 'game' and 'learn' navigations links are used the page hides the header, ensuring the content of the page is the focus of the browser window.  

Use of Javascript to highlight which page the user is on by making the relevant navigation link bold.
## **Game Page**
Bootstrap provides two modals - one for the 'how to play' instructions and one upon game completion. These modals show on top of the game, so the user does not lose their place within the game.

The 'how to play' modal appears on page load, to ensure the user understands the game. The colour of this modal has been chosen to ensure separation from the items underneath while retaining readability.

The use of playful colours and shadows ensure the cards stand out on the page. 

Once the user makes all the correct matches, the game ends with a 'congratulations' modal. This modal provides two options for the user - to play again or learn more details about the cocktails featured in the game.

## **Learn Page**
This informative page allows the user to become more educated about the cocktails they learnt during the game. The use of white space, image and text blocks, headings and bootstrap's grid system work together to make this page easy to read on all devices and browsers.  

Recipe links are clearly defined through the use of borders, to provide more info for each cocktail.

# **Wireframes**
When planning the website I used Figma to create the wireframes. I created 3 pages with 3 different viewport sizes (small Android, iPad Pro, Macbook 16"): 

* How To / Landing Page 
* Game Page
* How To Modal

[View wireframes on Figma](https://www.figma.com/file/fXTTNrsOYMdQu9xplX3gvp/Project-2---Pairs-Game-Wireframe-(Copy)?node-id=0%3A1)

During development I decided to simplify the website by removing the dedicated landing page. The game page has become the landing page, with the 'how to' modal visible when the page loads. 
# **Features**
## **All Pages**
* **How to icon** -  sits within the header so it is accessible anywhere on the site. 

* **How to modal** - appears on top of the web page so the game state is not interrupted. Visible when a user first accesses the website and when the user clicks on the question mark icon.  

* **GiHub link** - in the footer to the source code so any visitors to the site can find the repository.

## **#game-page**
* **Game end modal** - informs the user that the game has been successfully completed. 'Play Again' and 'Learn' buttons included on the bootstrap modal component so the user can extend their experience after they have completed the game. 

* **Cards** - bootstrap card component used to create each card in the game.

## **#learn-page**
* **Bootstrap Grid** - to create a responsive and clean layout of the content.

# **Features to be implemented**
* **Countdown timer option** - where game times out if the user takes too long to complete the game.
* **Animations** - flip animations on the cards.
* **Levels** - easy to hard. Harder levels = more pairs to do. This will allow all the cocktails from the 'learn' page to be played within the game.
* **Feedback Page** - for the user to send feedback about the website and game, in case any bugs / issues occur.
* **High Scores** - so the user can see how quickly they have completed the game and increase re-playability.

# **Technologies used**
* **HTML 5** - used to create the basic content of the website.
* **CSS3** - used to add custom styling to the content of the webpage. 
* **Bootstrap** - used to create the header and navigation bar and provides modal features. The bootstrap grid provides responsive layout to the website as a whole.
* **Bootstrap Icons** - used to render GitHub icon in footer and the how to button within the header. 
* **JavaScript** - heavily used for the game logic (randomise card, check for correct pairs and reset the pack).
* **Google Fonts** - used to import a custom font to style the text. 
* **Git** - this was used during production to efficiently commit and push changes to the GitHub repository so no code could be lost. 
* **GitHub** - this was used to create and manage a remote repository which holds all commits and pushed from Git. I made uses of the repository branches to separate and track working changes, in case of bugs, before committing new changes to the master branch.

# **Testing**
While building the website I regularly used Google Chrome, FireFox, Safari and Edge browsers to render my code, checking for any broken code and incompatibility.

I used the Developer Tools built into Chrome to test responsiveness of the website, by selecting different devices.

To test the Javascript, I regularly used the 'console.log()' method to print messages to the console. I used this method to test for the following: 

* Whether a function itself was being executed.
* To locate where the code would break / stop running due to an error. 
* To print javascript objects to the console, in order to check their properties.

## **HTML & CSS Validator**
To validate my HTML code I used [W3C Markup Validation Service](https://validator.w3.org/#validate_by_upload).

To validate my CSS code I used [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/#validate_by_upload).
## **Usability**
During testing I encountered some usability and user error scenarios that would prevent the game functioning correctly. These included: 

* 3 cards clicked in quick succession would cause the code to validate and incorrect pair. 
* Clicking on a card that is already one of a validated pair, this card would still be accepted. 
* Double clicking a card would cause the code to validate it as a 'pair'. 

To prevent incorrect pair validation, I added a class name on the cards, which is removed once they are validated causing the script to no longer accept these after a click event.

# **Deployment**
## **Start of project**
At the start of the development I created a repository on GitHub and cloned a local copy to my machine. To do this I followed these steps:

1. On GitHub webpage I went to 'your repositories' page and clicked 'new' to create a new repository for this project called 'Pairs-Game'.
2. I went into the new repository, clicking on the green 'code' button, I selected the 'download ZIP' option from the dropdown.
3. Once the ZIP folder had downloaded, I saved it in a relevant place on my machine and create the file directory structure. 

## **Development**
During development I regularly used the git command line tool to create branches, push my code to the remote repo and manage commits. Once a large code block had been added I used GitHub to create pull requests to merge branches into the main branch. Some commands I used were: 

4. git add . (to add all modified files to the staging area)
5. git commit -m "" (to commit files with a message)
6. git push (to upload the code from the local repository to the remote repository)
7. git cherry-pick (with a commit hash, to copy a commit from one branch to another)
8. git pull (to bring remote changes into my local repository)

## **Deployment**
The page has been deployed to GitHub pages for hosting - [Pairs Game hosted on GitHub pages](https://nkpe.github.io/Pairs-Game/).

I followed the following steps to deploy to GitHub pages: 

1. Opened the repository on GitHub
2. Under 'settings' I found the 'Pages' section in the list on the left. 
3. Under 'source' I chose the master branch and ensured the '/root' folder was selected. 

As I deployed the main branch to GitHub pages at the start of my project, it is kept up to date with each pull request to the main branch.
## **Repo Link**
[https://github.com/nkpe/Pairs-Game](https://github.com/nkpe/Pairs-Game)
## **Running Code Locally**
The code can be run locally by downloading from my GitHub repository following these steps: 

1. Click on the green 'Code' button.
2. From the drop down menu select 'download ZIP' or select the relevant clone option.
3. If downloading ZIP, this should be unzipped before running the index.html file in a browser. 


# **Credits**
## **Code**
Some assistance with creating array's came from a this [Stackoverflow post](https://stackoverflow.com/questions/19526456/get-all-instances-of-class-in-javascript)

To get the shuffleCardContents function on lines I used [CodeBubb](https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj)

Help with adding shadows to the cards came from this [Stackoverflow post](https://stackoverflow.com/questions/6821295/add-css-box-shadow-around-the-whole-div)

## **Content**
For the Boostrap classes and components I used the [Bootstrap documentation](https://getbootstrap.com/docs/).


Learn Page cocktail descriptions were copied from the following pages:

[Aperol Spritz](https://en.wikipedia.org/wiki/Spritz_Veneziano)

[B-52](https://en.wikipedia.org/wiki/B-52_(cocktail))

[Cosmopolitan](https://en.wikipedia.org/wiki/Cosmopolitan_(cocktail))

[Espresso Martini](https://en.wikipedia.org/wiki/Espresso_martini)

[Long Island Iced Tea](https://en.wikipedia.org/wiki/Long_Island_iced_tea)

[Margarita](https://en.wikipedia.org/wiki/Margarita)

[Mojito](https://en.wikipedia.org/wiki/Mojito)

[Pina Colada](https://en.wikipedia.org/wiki/Pi%C3%B1a_colada) 

## **Media**

The illustrations for the cards and logo were taken from [Adobe Stock](https://stock.adobe.com/uk/images/cocktail-set-collection-of-alcohol-drink-in-glass/252841390) and edited by myself. 

## **Acknowledgements**
* Thank you to my boyfriend who helped direct me by providing styling feedback.
* Thank you to my mentor, Scott Nnaghor, for the feedback with my code readability and accuracy.
