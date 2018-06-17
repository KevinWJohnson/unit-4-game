

$(document).ready(function () {

    var winTotal = 0;
    var lossTotal = 0;
    var totalScore = 0;

    var targetNumber = randomTarget();

    function randomTarget() {
        return Math.floor(Math.random() * 120) + 19; // returns a number between 19 and 120
    }

    function randomCrystal() {
        return Math.floor(Math.random() * 12) + 1; // returns a number between 1 and 12
    }

    $("#number-to-match").text(targetNumber);

    $("#winTot").text(winTotal);

    $("#lossTot").text(lossTotal);

    $("#scoreTot").text(totalScore);




});