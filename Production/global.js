

//   EventListerner for start/reset button.
                       // When it clicked create a new Object(newGame) of class Game with parameters array of pictures and empty array.
//                     Call the method launch the newGame.start() with triggers the game flow;
//                     Change the value of Start button for Reset button and id from "start" to "reset";
//   timer(time) - stop the program flow for "time" second. Argument gets from parent method which calls it.
//   launchTimer(num) - create modal window and shows on it digits from time to 0 with interval of 1 second. To manage the
//                      time use timer method inside of the loop. Return true. As an argument accepts number(time in seconds).
//

$('button').on('click', () => {
    var newGame = new Class(arrayOfTopics, arrayOfPictures);
    newGame.start(isStartOrReset);
    $('<button>').attr('id','reset');
});
