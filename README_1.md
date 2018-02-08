# Project overview

Guess and Go - [http://palmist-camel-13533.bitballoon.com](http://palmist-camel-13533.bitballoon.com)

___

## Project description

This is a simple strategy game for every ages. The logic of the game is to guess behind what square the picture is hidden on the board. Before to start a game, a player sees a blank game board with navigation tools bars, design elements. At the top right corner there is a navigation 
tool bar witn the next button: play(pop-up menu with a different level of the game react on hover), instruction(pop-up menu react on hover), history of the game(pop-up menu react on hover). 
Player has two scenerio to start the game: pressing the _start_ button intuitively placed at the middle of the sreen above(by default entry level) or to choose the game's level using a menu button and press **start** button. After pressed start button a player is showed by 10 squared pictures faced up for a 3 seconds(entry level, 2 and 1 seconds for more advanced levels or it could be version of the game where a player has to make a guess on the strict order). At this time board stays inactive to interact. After time runs out all pictures turned off. Board becomes interactive for a player and he is able to make a choice by click on the appropriate square on a board. When the square field is clicked it turned on. In case if the choice was right a player see the picture as a square background and pop massage "Right choice. Go on!". Making the right choice player get points. Sooner he devide the right square more points he gets. With each false choice he get less points. Score is stored and showed use at the end of the game.
At any stage of the game a player has an option to press a buttom **reset** and end up the game beforehand. At this point all progress will be ignored and user get a additional warning message 'are you sure.'
A player has a limitided range of steps depending on the level. If a player exceeds these scopes and didn't open all right squares, he looses, otherwise a player wins and get a congratulation pop up message on the screen.

___

## TECHNOLOGIE

- Html5
- Css3
- JavaScript

___

## Graphs 
    
### Flow charts

![alt text](https://github.com/NovaXam/Project_1_GuessAndGo/blob/master/Planning/Memory_game_flowChart.png "chart1")

![alt text](https://github.com/NovaXam/Project_1_GuessAndGo/blob/master/Planning/Memory_game.png "chart2")


___

##Mockups

![alt text](https://github.com/NovaXam/Project_1_GuessAndGo/blob/master/Planning/Board.pdf "Grid")

![alt text](https://github.com/NovaXam/Project_1_GuessAndGo/blob/master/Planning/Board1.pdf "Square")

___

#PROJECT PLAN (use SDLC model)
##STAGE 1 
Make an user story:
- logic of the game 
- design
- functionality
- performance

##STAGE 2
Adjust a scale of the game's development:
- prioritize design and functionality 
- make a time scope with a list of features to realize

##STAGE 3
- Make a mockup of all pages and particular elements of design
- Make a pseudo-code

##STAGE 4
- Make a design of all elements according to the previously designed scope.
- Make a functionality for a main logic of the game: start, stop. 

***

## Pseudo-code 

Game has two scope logic: global and local.
Outside: listeners for key objects of the game
Inside: environement based on class - to store the logic of the game.

Global scope spans a whole game. It has higher priority than local scope, which
means if something happens to the global scope is should be stored and used as a income data for local events.
Local scope describes a mechanic of the game and lives inside of the class.

Global elements:
  Functionalities:
  - buttons(all hover infected):
    level:
      - not active - version 1;
      - shows the drop down menu - version 2;
      - change a level of the game when pressed on particular submenu - version 2;
    gallery:
      - not active - version 1;
      - shows the drop down menu - version 2;
      - shows the topic of the board on a playground scope when pressed - version 2;
      - change the topic of the game when pressed on particular submenu. Triggers a modal window appeared on the place of playground
      with picture of a new topic  - version 2;
    instructions:
       - not active - version 1;
       - drop-down menu with a short version of instructions how to play the game - version 2;
       - shows the full version of instructions on a playground scope when pressed - version 2;
  - history:
       - not active - version 1;
       - drop-down menu with a short version of history of the game - version 2;
       - shows the full version of history on a playground scope when pressed - version 2;
  - start / reset:
       - triggers a timer and starts the game(create a new object of the class Game and call the method triggers the game logic) asa a time is runs out - version 1;
       - when pressed change itself for reset button;

Global context:
Data:
  - arrayOfPictures - 2-dimensional array of pictures: first level of array is index, second is the pictures. On a second dimension is always main picture and the rest of 8 are cluster's icons - version 2;
  - arrayOfIndex - container to store randomly generated index.
  - arrayOfPictures - 1-dimensiona of pictures - version 1;
  - arrayOfTopics - 1-dimensional of topic pictures - version 1;
  - Global flag isStartOrReset - used to check the statue of the start/reset button;
  - Redcross wrong choice picture;
  - Empty cell picture;

 Methods:
   EventListerner for start/reset button. When it clicked create a new Object(newGame) of class Game with parameters array of pictures and empty array. 
   Call the method launch the newGame.start() with triggers the game flow;
   Change the value of Start button for Reset button and id from "start" to "reset";

   timer(time) - stop the program flow for "time" second. Argument gets from parent method which calls it.
  
  launchTimer(num) - create modal window and shows on it digits from time to 0 with interval of 1 second. To manage the time use timer method inside of the loop. Return true. As an argument accepts number(time in seconds).
  
  makeInvisible(DOM class) - assign a property visibility: hidden to all DOM elements on the page which class is equal to parameter.
  
  creatTopicBoard(DOM class, DOM class) - call makeInvisible(DOM class) for "square" class, and assign visibility: visible for 'gal' class. All elements of the class "gal" are assigned on the fly by new backbround-color property according to their ids by the image from arrayOfTopics.
  EventListener for main menu creatTopicBoard(event.target.id) - need to be done later after version 1 will be working.


## Local object context:

### Object structure:
  
  constructor() - empty for the version 1;
  constructor(timer, array) - empty for the version 2;
  stepFlag - count steps;
  progressFlag - count right answers;

### Methods:
 
 buildBoard() - triggered just right after the Start button is clicked.
 Generate 8 random index on the range from 1 to 16 and fill them out the this.arrayOfIndex.
 
 revealBoard(arrayOfPictures) - triggered just right after the Start button is clicked. Use a
 global array as an argument. Assing a new background-color value from global array to
 the clusters with particular index numbers previously generated by buildBoard(). Use jQuery.

 launchTimer(num);

 resetBoard(isBool) - triggered just right after the Reset button(start button with id='reset') is clicked or timer is run out(launchTimer(num) return value true). Turn all clusters
 face off on the board (assing them initial background-color value #EFE15E);

 assignValue(isBoolStep, isBoolScore, value) - if both of the argument is true and DOM value is equal " ", assing a new background-color value to the cluster with appropriate id number. If this number is into an arrayOfIndex assign the topicPcture from arrayPicture and assign DOM value like 1. If there is no such a value of the index into arrayOfIndex, assign a new background-color as
 redCross and assign the DOM value as 0. If the DOM value is 1 increament local variables stepFlag and progressFlag. If value is 0, increament only stepFlag.

 EventListener for clusters: 
 checkSteps() - check if the stepFlag less than 12. If it's more than 12 return false. As an argument a function get a stepFlag;

 checkScore() - if localFlag is less then 12 and progressFlag equals 8 return false. As an argument function get a progressFlag.

 stopLoose(isBoolStep) - if an argument of the function false, stop listen all board clusters, call modal window LOOSER!

 stopWin(isBoolScore) - if an argument of the function is equal false, stop listen all board clusters, call modal window WINNER!

 assignValue(isBoolStep, isBoolScore);

 start(isStartOrReset) {
    if(isStartReset) {
        buildBoard();
        revealBoard(arrayOfPictures);
        launchTimer(num);
        resetBoard(isBool);
        assignValue(isBoolStep, isBoolScore, value);
    }
}



