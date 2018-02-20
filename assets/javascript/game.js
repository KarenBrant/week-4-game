function startGame() {
    $(document).on('click', '.rocks', function getNumRocks() {
        var numRocks = $(this).data('rand');
        console.log ("numRocks: " + numRocks);
        $('.rocks').each(function(index, element) {
                $('rocks').data('rand', randNum(1,12))
            });
        
        console.log (randNum(1,12));
    });
    }
    // function getNumRocks() {
        //     var numRocks = $(this).data('rand');
        //     console.log ("numRocks: " + numRocks);
        // }
        function randNum(min, max) {
            return Math.floor(Math.random() * (max-min+1)) + min;
        }
        
        startGame();
        randNum(19,120);
        $('.box').text(randNum(19,120));
        var rockTotal = 0;
        function sumRocks (rockNum) {
            rockTotal += rockNum;
            console.log ("rockTotal: " + rockTotal)
        }

        sumRocks(randNum(1, 12));

