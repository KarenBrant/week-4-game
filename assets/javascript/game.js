$(document).ready(function() {
    
    // Define global variables
    var boxNum = 0;
    var numRocks1 = 0;
    var numRocks2 = 0;
    var numRocks3 = 0;
    var numRocks4 = 0;
    var rockTotal = 0;
    var wins = 0;
    var losses = 0;
    var wl = 0;
    
    // Call the startGame function
    startGame();
    // Define the random number function
    function randNum(min, max) {
        return Math.floor(Math.random() * (max-min+1)) + min;
    }
    // Define the start game function
    function startGame() {
        // Ensure the total is 0 to begin
        rockTotal = 0;
        $('#total-score').html("Your Total Score Is: " + rockTotal);
        // Set the random number to try to match
        boxNum = randNum(19,120);
        $('.box').html("Score to Match: " + boxNum);
        // Call the random number function for each crystal
        numRocks1 = randNum(1,12);
        numRocks2 = randNum(1,12);
        numRocks3 = randNum(1,12);
        numRocks4 = randNum(1,12);
        // Ensure the on.click will only happen once with the unbind
        $('#crystal1').unbind('click');
        $('#crystal1').on('click', function getNumRocks1() {
            console.log ("numRocks1: " + numRocks1);
            // Add each click of crystal 1 to the total
            addClicks(numRocks1);
            console.log("Total: " + rockTotal);
            $('#total-score').html("Your Total Score Is: " + rockTotal);
            // Check to see if the total equals the random number picked above
            chkStatus(rockTotal, boxNum);
        });
        // Ensure the on.click will only happen once with the unbind
        $('#crystal2').unbind('click');
        $('#crystal2').on('click', function getNumRocks2() {
            console.log ("numRocks2 :" + numRocks2);
            // Add each click of crystal 2 to the total
            addClicks(numRocks2);
            console.log("Total: " + rockTotal);
            $('#total-score').html("Your Total Score Is: " + rockTotal);
            // Check to see if the total equals the random number picked above
            chkStatus(rockTotal, boxNum);
        });
        // Ensure the on.click will only happen once with the unbind
        $('#crystal3').unbind('click');
        $('#crystal3').on('click', function getNumRocks3() {
            console.log ("numRocks3 :" + numRocks3);
            // Add each click of crystal 3 to the total
            addClicks(numRocks3);
            console.log("Total: " + rockTotal);
            $('#total-score').html("Your Total Score Is: " + rockTotal);
            // Check to see if the total equals the random number picked above
            chkStatus(rockTotal, boxNum);
        });
        // Ensure the on.click will only happen once with the unbind
        $('#crystal4').unbind('click');
        $('#crystal4').on('click', function getNumRocks4() {
            console.log ("numRocks4 :" + numRocks4);
            // Add each click of crystal 2 to the total
            addClicks(numRocks4);
            console.log("Total: " + rockTotal);
            $('#total-score').html("Your Total Score Is: " + rockTotal);
            // Check to see if the total equals the random number picked above
            chkStatus(rockTotal, boxNum);
        });  
    }
    // Function to add crystal clicks to the total
    function addClicks (int1) {
        rockTotal += int1;
    }
    // Function to check to see if the game is over or not
    function chkStatus (int1, int2) {
        $('#total-score').html("Your Total Score Is: " + int1);
        if (int1 === int2) {
            alert ("Congratulations! You won!!");
            wins++;
            $('.w-status').html("Wins: " + wins);
            playAgain();
        } else if (int1 > int2) {
            alert ("Sorry - better luck next time.");
            losses++;
            $('.l-status').html("Losses: " + losses);
            playAgain();
        } else {
        }
    }
    // Function to see if the player wants to keep going or not
    function playAgain() {
        $('#total-score').html("Your Total Score Is: " + rockTotal);
        var answer = prompt ("Do you want to play again? Enter y for yes or n for no.");
        if (answer === 'y') {
            startGame();
        } else if (answer === 'n') {
        } else {
            alert ("That letter will be read as a y for yes.");
            startGame();
        }
    }
});
    

