var running = true;


function red_choose_col(){
  $(this).css("background-color", "red");
  turn++
  console.log(turn);
};

function blue_choose_col(){
  $(this).css("background-color", "blue");
  turn++
  console.log(turn);
};

function choose_col(){
    $("button").click(function(){
      if (currentPlayer == 1){
        $(this).css("background-color", "red");
        $('h2').text("Player 2 it's your turn!")
        currentPlayer *= -1;
      }
      else if (currentPlayer == -1) {
        $(this).css("background-color", "blue");
        $('h2').text("Player 1 it's your turn!")
        currentPlayer *= -1;
      }
    });
  }



var currentPlayer = 1;
choose_col()

// while(running) {
//   choose_col();
//   turn++;
//   if (turn>20){
//     running = false;
//   };
//
// }
