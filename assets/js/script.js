$(document).ready(function() {

// List of questions
    var questions = ["lah", "leh", "lor", "hah?", "hor", "meh?", "bo?", "can", "gua", "liao", "wor", "liao la"]

// List of answers
    var answers = ["Yes.", "Yes, of course", "Yes, I think so", "Are you sure?", "Are you sure then", "Are you certain?", "Can or not?", "Confirm.", "Maybe.", "Already done.", "Yeah", "OK, enough."]

// List of responses
    var users = []
    var current_question = 0;
    var startGame = false;
    var turn = true;
    var ques = questions;
    var ans = answers;
    console.log(ques)
    console.log(ans)

// Score
    var score = 0;

$("#play").on("click", function() {
    startGame = true;
        for(var i = 0; i < ques.length; i++){
            $(".questions").append("<li id='"+ i +"'>"+ ques[i]+ "</li>")
}
          for(var i = 0; i < ans.length; i++){
            $(".answers").append("<li id='"+ i +"'>"+ ans[i]+"</li>")
          }
                    $(".container-main").remove();
                  $(".startGame").fadeIn(800).css("display", "block");
              $(".newGame").fadeIn(800).css("display", "block");
          $("footer").fadeOut(400).css("display", "block");

// startTimer
        gameTimer();
});

// Check which questions user clicks on
$(".questions").on("click", "li", function() {
        current_question = $(this).attr("id")
              $(this).css("border", "1px solid red")
});

        $(".answers").on("click", "li", function(){
        // alert(questions[current_question])

          if(startGame){
              var userAnswers = $(this).attr("id")
                console.log(ans[current_question])
                    console.log(ans[userAnswers])

             if(ans[current_question] == ans[userAnswers]){

                $("#"+current_question).remove();
                    $(this).remove();
                        score++;
                        console.log(score)
                  $(".score").empty();
            $(".score").append(score);
        } else {

      }
  } else {

endGame()

document.location. reload();
  }
});

// End Game
function endGame (){
    startGame = false
        score = 0
          $(".row").css("display", "block")
              $(".endBox").css("display", "block")
          $(".win").css("display", "block")
    $(".lost").css("display", "block")
$(".footer").css("display", "block")
}

// Timer
var timeLeft = 15;

    function gameTimer () {
        var timer = $('.timer')
            var timerId = setInterval(countdown, 1000)
            function countdown () {
                if (timeLeft < 0) {
                    clearTimeout(timerId)
                        startGame = false
                        } else {
                    timer.text(timeLeft)
                timeLeft--
                if (timer.text() === "0") {
            $(".endBox").css("display", "block");
        }
     }
   }

  $("#button").on("click", function() {
      $(".endBox").css("display", "none");
         gameTimer();
    });
  }
});
