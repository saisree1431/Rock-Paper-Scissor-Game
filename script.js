
      //after load the score just saved from local storage using getintem() method
      //The score was stored as a json string
      //and coverting back into an object by using getitem()
      let score = JSON.parse(localStorage.getItem("score")) || {
        wins: 0,
        losses: 0,
        ties: 0,
      };

      updateScoreElement();

      //converting the score as string to object then use JSON.parse() method
      //score == null, !score both are same for falsy
      // || is default operator and used to simplify our code
      /*
    if (!score) {
      score = {
        wins: 0,
        losses: 0,
        ties: 0,
      };
    }
    */
      function playGame(playerMove) {
        const computerMove = pickComputerMove();
        let result = "";

        if (playerMove === "scissors") {
          if (computerMove === "rock") {
            result = "You lose.";
          } else if (computerMove === "paper") {
            result = "You win.";
          } else if (computerMove === "scissors") {
            result = "Tie.";
          }
        } else if (playerMove === "paper") {
          if (computerMove === "rock") {
            result = "You win.";
          } else if (computerMove === "paper") {
            result = "Tie.";
          } else if (computerMove === "scissors") {
            result = "You lose.";
          }
        } else if (playerMove === "rock") {
          if (computerMove === "rock") {
            result = "Tie.";
          } else if (computerMove === "paper") {
            result = "You lose.";
          } else if (computerMove === "scissors") {
            result = "You win.";
          }
        }

        if (result === "You win.") {
          score.wins += 1;
        } else if (result === "You lose.") {
          score.losses += 1;
        } else if (result === "Tie.") {
          score.ties += 1;
        }
        //After updating game we stored it in local storage
        //local storage supports only strings so we are converting using stringify() method
        //converting the score from object to string then use JSON.stringify() method
        localStorage.setItem("score", JSON.stringify(score));
        //saves in localstorage even when we refresh the page it dont erase the scores

        updateScoreElement();

        document.querySelector(".js-result").innerHTML = result;

        document.querySelector(".js-moves").innerHTML
        =`You
        <img src="images/${playerMove}-emoji.png" class="move-icon">
        <img src="images/${computerMove}-emoji.png" class="move-icon">
        Computer`;
      }

      function updateScoreElement() {
        document.querySelector(
          ".js-score"
        ).innerHTML = `Wins:${score.wins}, Losses:${score.losses}, Ties:${score.ties}`;
      }

      function pickComputerMove() {
        const randomNumber = Math.random();

        let computerMove = "";

        if (randomNumber >= 0 && randomNumber < 1 / 3) {
          computerMove = "rock";
        } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
          computerMove = "paper";
        } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
          computerMove = "scissors";
        }
        return computerMove;
    }
