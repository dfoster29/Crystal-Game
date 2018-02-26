// set a target number variable
var targetNumberBank = [60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70];
var wins = 0;
var losses = 0;

// display the target number to the page
var targetNumber =
  targetNumberBank[Math.floor(Math.random() * targetNumberBank.length)];
console.log(targetNumber);

$("#target-number").text("Target Number : " + targetNumber);

// start the current score counter at zero
var counter = 0;

// make an array of the four crystal number options
var numberOptions1 = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12];
var numberOptions2 = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12];
var numberOptions3 = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12];
var numberOptions4 = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12];

// Each imageCrystal will be given a src link to the crystal image
// pick our word at random from the wordBank
var crystal1 =
  numberOptions1[Math.floor(Math.random() * numberOptions1.length)];
console.log(crystal1);

var crystal2 =
  numberOptions1[Math.floor(Math.random() * numberOptions1.length)];
console.log(crystal2);

var crystal3 =
  numberOptions1[Math.floor(Math.random() * numberOptions1.length)];
console.log(crystal3);

var crystal4 =
  numberOptions1[Math.floor(Math.random() * numberOptions1.length)];
console.log(crystal4);

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
  } else if (counter > targetNumber) {
    losses++;
    $("#losses").text(losses);
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
  } else if (counter > targetNumber) {
    losses++;
    $("#losses").text(losses);
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
  } else if (counter > targetNumber) {
    losses++;
    $("#losses").text(losses);
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
  } else if (counter > targetNumber) {
    losses++;
    $("#losses").text(losses);
  }
});


