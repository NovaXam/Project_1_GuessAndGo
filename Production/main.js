
const arrayOfAnimals = ['url(graph/animals/cat.png)','url(graph/animals/cow.png)','url(graph/animals/cowBrown.png)','url(graph/animals/dog.png)','url(graph/animals/duck.png)','url(graph/animals/duckChild.png)','url(graph/animals/elephan.png)','url(graph/animals/smallDuck.png)'];
const arrayOfMario = ['url(graph/mario/bananas.png)','url(graph/mario/flower.png)','url(graph/mario/medal.png)','url(graph/mario/star.png)','url(graph/mario/mushrooms.png)','url(graph/mario/tortles.png)','url(graph/mario/bubble.png)','url(graph/mario/mush.png)'];
const arrayOfStar = ['url(graph/sw/craft.png)','url(graph/sw/D2R2.png)','url(graph/sw/DWHelmet.png)','url(graph/sw/helmet.png)','url(graph/sw/impireShip.png)','url(graph/sw/spaceShip.png)','url(graph/sw/starShip.png)', 'url(graph/sw/shipShip.png)'];
const arrayOfHeroes = ['url(graph/sh/1.png)','url(graph/sh/2.png)','url(graph/sh/3.png)','url(graph/sh/4.png)','url(graph/sh/5.png)','url(graph/sh/6.png)','url(graph/sh/7.png)','url(graph/sh/8.png)'];
const arrayOfTopics = ['url(graph/animals/main.png)','url(graph/mario/main.png)','url(graph/sh/main.png)','url(graph/sw/main.png)'];
var isStartOrReset = false;
const winnerCup = 'url(graph/winnerCup.png)';
const looserCup = 'url(graph/looserCup.png)';
let arrayOfIndex = [];
let stepFlag = 0;
let progressFlag = 0;
let num = 3;
let score = 0;
let gameTop = '';
let timerOut = false;
let sec = 29;

class Game {
  constructor() {
    this.interFun = 0;
  }
//it works. Tested. Randomize a position of the picture on a board.
  buildBoard(arr1) {
      let arrLen = $('.square').length;
      while(arr1.length < 8) {
        let randomnumber = Math.ceil(Math.random() * (arrLen-1));
        if(arr1.indexOf(randomnumber) > -1) continue;
        arr1[arr1.length] = randomnumber;
      }
    };

//it works. Tested. Makes appear the pictures on the board accroding to the order built by buildBoard function.
  revealBoard(arr1) {
      if(gameTop === '') {
        gameTop = arrayOfAnimals;
        $('#gName').text('ANIMALS');
        }
        $('.clusters').css({'visibility': 'visible', 'z-index': '2'});
        $('.Gallary').css({'visibility': 'hidden', 'z-index': '1'});
        $('.square').each(function(index, el) {
         $(el).css("background", "lightgreen");
         $.each(arr1, function(ind, item) {
            if($(el).attr('id') == item) {
                $(el).css("background", "lightgreen");
                $(el).css("background-image", gameTop[ind]);
                $(el).css("background-repeat", 'no-repeat');
            }
          });
      });
    };

//it works. Tested. Timer countdowns from 3 to 1. Appears on the screen just right afer the button start clicked.
  countDown () {
    function launchTimer() {
    if(num == 3) {
        $('.Winner_Looser').css('visibility', 'visible');
        $('<span>').attr('id', 'timer').appendTo($('.Winner_Looser'));
        $('#timer').css({'font-size': 400, 'color': 'white', 'font-family': 'Quicksand'});
        $('#timer').text(num);
        num--;
      } else if(num == 0) {
      clearInterval(interFun);
      $('#timer').html(' ');
      $('.Winner_Looser').css('visibility', 'hidden');
      resetBoard('.square');
      gameTimer();
    } else {
        $('#timer').text(num);
        num--;
      }
    };
  let interFun = setInterval(function() {launchTimer(num);}, 1000);

//it works. Tested. reset a playground board for a default statement.
  function resetBoard(el) {
        $(el).each(function(index, el) {
        $(el).css({"background": 'url()', 'background-color': '#EFE15E'});
       }
    )}
  };

//it works. tested. Function listen click on the button START. Turn on and off cells on the playground.
//Check for tree scenarios of the game: 1. play, 2. loose, 3. win.
  listener() {
    $('.square').on('click', function(event) {
      let cluster = this;
      if(stepFlag < 12 && progressFlag < 8) {
          if($(cluster).text() == "") {
            if(arrayOfIndex.indexOf(parseInt($(cluster).attr('id'))) > -1) {

              //Animation effect. Still not working. Fix it later before to start to work under extended version.
              // $('.back').css(`{'background-color':'#EFE15E, 'backface-visibility':'hidden', 'transform':'rotateY(180deg)'}`);
              // $('.front').css(`{'background-color':'lightgreen', 'backface-visibility':'hidden', 'transform':'rotateY(0deg)', 'z-index':'2'}`);
              // $('.front').css("background-image", gameTop[arrayOfIndex.indexOf(parseInt($(cluster).attr('id')))]);
              // $('.front').css("background-repeat", 'no-repeat');
              // //  $(cluster).css('transform', 'rotateY(180deg');

              $(cluster).css({'transform': 'rotateY(180deg', 'background': 'lightgreen', 'background-image': gameTop[arrayOfIndex.indexOf(parseInt($(cluster).attr('id')))], 'background-repeat': 'no-repeat'});
              $(cluster).text('1');
              stepFlag++;
              progressFlag++;
              if(progressFlag === stepFlag) {
                  score += 120;
                } else score += 120-((stepFlag - progressFlag)*10);
            } else {
              $(cluster).css({'transform': 'rotateY(180deg)', 'background': 'rgb(255,41,33)', 'background-size': '100%', 'background-repeat': 'no-repeat'});
              $(cluster).text('0');
              stepFlag++;
            }
          };
          $('#progress').children('p').text(`${progressFlag} / 8`);
          $('#score').children('p').text(`${score}`);
          $('#steps').children('p').text(`${stepFlag}`);
          $('#time').children('p').text('1');
      } else if(stepFlag >= 12 && progressFlag < 8) {
              $('.Winner_Looser').css('visibility', 'visible');
              $('.Winner_Looser').children('span').remove();
              $('.wl').css('display', 'inline-block');
              $('#stat').text(`steps ${stepFlag} : progress ${progressFlag} score ${score}`);
              $('#cup').css({'background-size': '60%', 'background-image': looserCup, 'background-repeat': 'no-repeat', 'background-position': 'center'});
              $('#text').text('TRY HARDER');
      } else if(stepFlag <= 12 && progressFlag == 8) {
              $('.Winner_Looser').css('visibility', 'visible');
              $('.Winner_Looser').children('span').remove();
              $('.wl').css('display', 'inline-block');
              $('#stat').text(`steps ${stepFlag} : progress ${progressFlag} score ${score}`);
              $('#cup').css({'background-size': '65%', 'background-image': winnerCup, 'background-repeat': 'no-repeat', 'background-position': 'center'});
              $('#text').text('WINNER');
              $('#text').css("font-size", '120px');
            }
      });
  };

//start playing game and assign the game flow logic.
  start() {
      this.buildBoard(arrayOfIndex);
      this.revealBoard(arrayOfIndex, gameTop);
      this.countDown();
      this.listener();
    }
  };

//listener for START / RESET button. Create a new game and change the functionality of the button for an opposit.
$('button').on('click', (event) => {
    if(!isStartOrReset) {
      $('#start').text('RESET')
      let newGame = new Game();
      isStartOrReset = !isStartOrReset;
      newGame.start();
    } else {
     $('#start').text('PLAY');
      location.reload();
  }
});

//2 listeners for gallary button. Open a gallary and init playground by click;
$('.but').click((event) => {
   if(event.target.text == 'Gallary') {
    openGallary('#start', '.gal');
  $('.gal').on('click', function(event) {
    initGallary(this);
     });
  // } else if(event.target.text == 'Level') {
  //     $('<div>').attr('id', 'levelMenu').appendTo($('#lev'));
  //     for (let i = 0; i < 3; i++) {
  //       console.log(i);
  //       $('<div>').attr('id', 'lM' + (i + 1)).appendTo($('#levelMenu'));
  //       $('#lM' + (i + 1)).text('level ' + (i + 1));
  //       if(i % 2 !== 0) $('#lM' + (i + 1)).css({'width':'85px', 'border-right':'1px solid black', 'border-left':'1px solid black'});

  //     }
  // } else if(event.target.text == 'Instruction') {

  // } else if(event.target.text == 'Login') {

  }
});

//function not finish. Continue working on it. Need to be integrated to the 'but' handler.
function openGallary(el, elem) {
  if($(el).text() == 'RESET') {
    alert('please, reset the game, first');
  } else {
  $('.clusters').css({'visibility':'hidden', 'z-index':'1'});
  $('.Gallary').css({'visibility':'visible', 'z-index':'2'});
    resetGallary(elem);
  }
};

function resetGallary(elemo) {
  $(elemo).each((ind) => {
    $('#g' + (ind + 1)).css({'background':'lightgreen', 'background-image':arrayOfTopics[ind], 'background-size':'100%', 'background-repeat':'no-repeat'});
    });
  };

function initGallary(eve) {
  $('.clusters').css({'visibility':'visible', 'z-index':'2'});
    $('.Gallary').css({'visibility':'hidden', 'z-index':'1'});
  if($(eve).attr('id') == 'g1') {
    gameTop =  arrayOfAnimals;
    $('#gName').text('ANIMALS');
  } else if($(eve).attr('id') == 'g2') {
    gameTop =  arrayOfMario;
    $('#gName').text('MARIO');
  } else if($(eve).attr('id') == 'g3') {
    gameTop =  arrayOfHeroes;
    $('#gName').text('SUPER HEROES');
  } else if($(eve).attr('id') == 'g4') {
    gameTop = arrayOfStar;
    $('#gName').text('STAR WARS');
    }
};
