// set a target number variable
var targetNumberBank = [60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70];
var wins = 0;
var losses = 0;
var counter = 0;

// make an array of the four crystal number options
var numberOptions1 = [6, 7, 8, 10, 11, 12];
var numberOptions2 = [1, 2, 3, 4, 5, 6];
var numberOptions3 = [6, 7, 8, 10, 11, 12];
var numberOptions4 = [1, 3, 5, 7];

var crystal1;
var crystal2;
var crystal3;
var crystal4;

var targetNumber;

function newGame() {
  // display the target number to the page
  targetNumber =
    targetNumberBank[Math.floor(Math.random() * targetNumberBank.length)];
  console.log(targetNumber);

  $("#target-number").text("Target Number : " + targetNumber);

  // start the current score counter at zero
  counter = 0;
  $("#current-score").text("Current Score : " + counter);

  // Each imageCrystal will be given a src link to the crystal image
  // pick our word at random from the wordBank
  crystal1 =
    numberOptions1[Math.floor(Math.random() * numberOptions1.length)];
  console.log(crystal1);

  crystal2 =
    numberOptions2[Math.floor(Math.random() * numberOptions2.length)];
  console.log(crystal2);

  crystal3 =
    numberOptions3[Math.floor(Math.random() * numberOptions3.length)];
  console.log(crystal3);

  crystal4 =
    numberOptions4[Math.floor(Math.random() * numberOptions4.length)];
  console.log(crystal4);
};
  // Each imageCrystal will be given a data attribute called data-crystalValue.
  // This data attribute will be set equal to the array value.

  // This time, our click event applies to every single crystal on the page. Not just one.
  $("#crystal-1").on("click", function() {
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystal1;
    // counter = counter + crystalValue;
    $("#current-score").text("Current Score : " + counter);
    // All of the same game win-lose logic applies. So the rest remains unchanged.

    if (counter === targetNumber) {
      wins++;
      $("#wins").text(wins);
      newGame();
    } else if (counter > targetNumber) {
      losses++;
      $("#losses").text(losses);
      newGame();
    }
  });

  $("#crystal-2").on("click", function() {
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystal2;
    // counter = counter + crystalValue;
    $("#current-score").text("Current Score : " + counter);
    // All of the same game win-lose logic applies. So the rest remains unchanged.

    if (counter === targetNumber) {
      wins++;
      $("#wins").text(wins);
      newGame();
    } else if (counter > targetNumber) {
      losses++;
      $("#losses").text(losses);
      newGame();
    }
  });

  $("#crystal-3").on("click", function() {
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystal3;
    // counter = counter + crystalValue;
    $("#current-score").text("Current Score : " + counter);
    // All of the same game win-lose logic applies. So the rest remains unchanged.

    if (counter === targetNumber) {
      wins++;
      $("#wins").text(wins);
      newGame();
    } else if (counter > targetNumber) {
      losses++;
      $("#losses").text(losses);
      newGame();
    }
  });

  $("#crystal-4").on("click", function() {
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystal4;
    // counter = counter + crystalValue;
    $("#current-score").text("Current Score : " + counter);
    // All of the same game win-lose logic applies. So the rest remains unchanged.

    if (counter === targetNumber) {
      wins++;
      $("#wins").text(wins);
      newGame();
    } else if (counter > targetNumber) {
      losses++;
      $("#losses").text(losses);
      newGame();
    }
  });


function resetGame() {
  wins = 0;
  losses = 0;
  $("#wins").text(wins);
  $("#losses").text(losses);
  counter = 0;
  $("#current-score").text("Current Score : " + counter);
}

$("#reset-button").on("click", resetGame, newGame);

newGame();
