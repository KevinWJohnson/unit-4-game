

$(document).ready(function () {

    var winTotal = 0;
    var lossTotal = 0;
    var totalScore = 0;
    var targetNumber = 0;

    var crystal = {
        crystal_1: {
            points: 0,
            imgLoc: "https://www.ahbeads.com/productimages/300/14152071.png"
        },

        crystal_2: {
            points: 0,
            imgLoc: "https://vignette.wikia.nocookie.net/marvel-contestofchampions/images/8/8d/Daily_Crystal.png/revision/latest?cb=20150825213624"
        },

        crystal_3: {
            points: 0,
            imgLoc: "https://vignette.wikia.nocookie.net/the-secret-society/images/e/eb/The_Legend_Returns_Jade_Crystal_special_items.PNG/revision/latest?cb=20170205145851"
        },

        crystal_4: {
            points: 0,
            imgLoc: "https://vignette.wikia.nocookie.net/marvel-contestofchampions/images/8/84/Crystal_multi_science.png/revision/latest?cb=20151121235753"
        }

    }

    function randomTarget() {
        return Math.floor(Math.random() * 120) + 19; // returns a number between 19 and 120
    }

    function resetValues() {

        // Setting the total score to 0
        totalScore = 0;

        // Getting random target number
        targetNumber = randomTarget();

        // Getting random crystal numbers
        crystal.crystal_1.points = Math.floor(Math.random() * 12) + 1; // returns a number between 1 and 12
        crystal.crystal_2.points = Math.floor(Math.random() * 12) + 1; // returns a number between 1 and 12
        crystal.crystal_3.points = Math.floor(Math.random() * 12) + 1; // returns a number between 1 and 12
        crystal.crystal_4.points = Math.floor(Math.random() * 12) + 1; // returns a number between 1 and 12

        console.log("crystal_1 points: " + crystal.crystal_1.points)
        console.log("crystal_2 points: " + crystal.crystal_2.points)
        console.log("crystal_3 points: " + crystal.crystal_3.points)
        console.log("crystal_4 points: " + crystal.crystal_4.points)


    }

    // Creating crystals for every numberOption

    function renderCrystals() {


        for (var key in crystal) {

            // For each iteration, creating an imageCrystal
            imageCrystal = $("<img>");

            // Each crystal will be given a class ".crystal-image"
            imageCrystal.addClass("crystal-image");

            // Each crystal will be given a class ".img-responsive"
            imageCrystal.addClass("img-responsive");

            // Each crystal will be given a scr link to the crystal image
            imageCrystal.attr("src", crystal[key].imgLoc);
            console.log("imgLoc " + crystal[key].imgLoc);

            //console.log(imageCrystal.attr("src", pictureLoc[i]))


            // Each imageCrystal will be given a data attribute called data-crystalValue.
            // This data attribute will be set equal to the array value.

            imageCrystal.attr("data-crystalvalue", crystal[key].points);
            console.log("key.points " + crystal[key].points);

            // Each crystal image (with all its classes and attributes) will get added to
            
            // Commands to empty the area before the recreation (append)
            $("#crystals").html();
            $("#crystals").empty();
            $("#crystals").append(imageCrystal);

            // Displaying the results
            displayResults();
        }

    }

    function updateScore() {
        // Click event applies to every single crystal on the page.

        $(".crystal-image").on("click", function () {

            // Extracting the data-crystalValue from .crystal-image

            var crystalValue = parseInt($(this).attr("data-crystalvalue"));

            // The adding the crystalValue value to the global counter
            // Each time a crystal is selected it's value is added to the counter
            totalScore += crystalValue;
            $("#scoreTot").text(totalScore);
            console.log(crystalValue);
        });
    }



    function winLose(totalScore) {


        // Win-Lose logic of the game

        // You win
        if (totalScore === targetNumber) {
            winTotal++;
            totalScore = 0;
            $("#winLoseMessage").text("You Win!");
            // clearing the old crystals
            resetValues();
        }
        // You lose
        else if (totalScore >= targetNumber) {
            lossTotal++;
            totalScore = 0;
            $("#winLoseMessage").text("You Lose!");
            // clearing the old crystals
            resetValues();
        }
    }




    function displayResults() {


        $("#number-to-match").text(targetNumber);

        $("#winTot").text(winTotal);

        $("#lossTot").text(lossTotal);

        $("#scoreTot").text(totalScore);

    }
    // Game function calls



    // For the first time the program appears
    displayResults();
    resetValues();
    renderCrystals();
    updateScore();
    
});