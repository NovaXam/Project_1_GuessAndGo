  function gameTimer() {
   function timeChecker() {
      if (stepFlag == 12) {
          clearInterval(inTimer);
          $('#level').text(`00 : 0${sec}`);
          };

      if (progressFlag < 8 && sec >= 10) {
          $('#level').text(`00 : ${sec}`);
          sec--;
          } else if (progressFlag < 8 && sec < 10 && sec > 0) {
          $('#level').text(`00 : 0${sec}`);
          sec--;
          } else if (progressFlag == 8) {
          $('#level').text(`00 : ${sec}`);
          clearInterval(inTimer);
          } else if (sec == 0) {
          $('#level').text(`00 : 0${sec}`);
          clearInterval(inTimer);
          $('.Winner_Looser').css('visibility', 'visible');
          $('.Winner_Looser').children('span').remove();
          $('.wl').css('display', 'inline-block');
          $('#stat').text(`steps ${stepFlag} : progress ${progressFlag} score ${score}`);
          $('#cup').css('background-image', looserCup);
          $('#cup').css("background-size", '60%');
          $('#cup').css("background-repeat", 'no-repeat');
          $('#cup').css("background-position", 'center');
          $('#text').text('TRY HARDER');
          }
        };
  let inTimer = setInterval(function() {timeChecker(sec)}, 1000);
}
