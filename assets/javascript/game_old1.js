

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

    //    for (var i = 0; i < numberOptions.length; i++) {
    //        console.log(numberOptions[i])
    //    }

    // < img class="img-responsive crystal-image" value="crystal1" src="https://www.ahbeads.com/productimages/300/14152071.png" id="Crystal1" >
    //     <img class="img-responsive crystal-image" value="crystal2" src="https://vignette.wikia.nocookie.net/marvel-contestofchampions/images/8/8d/Daily_Crystal.png/revision/latest?cb=20150825213624"
    //         id="Crystal2">
    //         <img class="img-responsive crystal-image" value="crystal3" src="https://vignette.wikia.nocookie.net/the-secret-society/images/e/eb/The_Legend_Returns_Jade_Crystal_special_items.PNG/revision/latest?cb=20170205145851"
    //             id="Crystal3">
    //             <img class="img-responsive crystal-image" value="crystal4" src="https://vignette.wikia.nocookie.net/marvel-contestofchampions/images/8/84/Crystal_multi_science.png/revision/latest?cb=20151121235753"
    //                 id="Crystal4">

    // Creating crystals for every numberOption

    // for (var i = 0; i < numberOptions.length; i++) {

    //     // For each iteration, creating an imageCrystal
    //     var imageCrystal = $("<img>");

    //     // Each crystal will be given a class ".crystal-image"
    //     imageCrystal.addClass("crystal-image");

    //     // Each crystal will be given a class ".img-responsive"
    //     imageCrystal.addClass("img-responsive");

    //     // Each crystal will be given a scr link to the crystal image

    //     imageCrystal.attr("src", pictureLoc[i]);

    //     console.log(imageCrystal.attr("src", pictureLoc[i]))


    //     // Each imageCrystal will be given a data attribute called data-crystalValue.
    //     // This data attribute will be set equal to the array value.

    //     imageCrystal.attr("data-crystalValue", numberOptions[i]);

    // }


    // $(".crystal-image"), on("click", function () {



    // });


    $("#number-to-match").text(targetNumber);

    $("#winTot").text(winTotal);

    $("#lossTot").text(lossTotal);

    $("#scoreTot").text(totalScore);




});