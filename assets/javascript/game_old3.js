

$(document).ready(function () {



    var winTotal = 0;
    var lossTotal = 0;
    var totalScore = 0;

    var pictureLoc = [
        "https://www.ahbeads.com/productimages/300/14152071.png",
        "https://vignette.wikia.nocookie.net/marvel-contestofchampions/images/8/8d/Daily_Crystal.png/revision/latest?cb=20150825213624",
        "https://vignette.wikia.nocookie.net/the-secret-society/images/e/eb/The_Legend_Returns_Jade_Crystal_special_items.PNG/revision/latest?cb=20170205145851",
        "https://vignette.wikia.nocookie.net/marvel-contestofchampions/images/8/84/Crystal_multi_science.png/revision/latest?cb=20151121235753"
    ];

    // Getting random target number
    var targetNumber = randomTarget();
    console.log(targetNumber)

    function randomTarget() {
        return Math.floor(Math.random() * 120) + 19; // returns a number between 19 and 120
    }

    // Getting random numbers for crystals
    var numberOptions = [0, 0, 0, 0];

    numberOptions = randomCrystal(numberOptions);


    function randomCrystal(randCrytalsArray) {
        for (var i = 0; i < randCrytalsArray.length; i++) {
            randCrytalsArray[i] = Math.floor(Math.random() * 12) + 1; // returns a number between 1 and 12
        }
        return randCrytalsArray
    }



    //$(".crystal-image"), on("click", function () {



   // });





    $("#number-to-match").text(targetNumber);

    $("#winTot").text(winTotal);

    $("#lossTot").text(lossTotal);

    $("#scoreTot").text(totalScore);








});