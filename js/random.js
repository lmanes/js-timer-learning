(function() {
"use strict";

    // wait for the page to load
    document.addEventListener('DOMContentLoaded', function(){



        var buttonRandom = document.getElementById('generate_random');

        //listener for clicking the random button -- nested so that it doesn't run until the page has loaded
        buttonRandom.addEventListener('click', outputRandom);

        //here's what will happen when you click the submit button
        function outputRandom(event){
            //will prevent any default actions
            event.preventDefault();

            //random function from MDN page
            function getRandomIntInclusive(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
            };

            //min and max still set in the js, not by user
            var randomResult = getRandomIntInclusive(5,25);

            //drop it in the log for testing
            console.log(randomResult);

            //will set the content of the output box to the value of the input!
            document.getElementById('random_output').innerHTML = randomResult;
        };
});


})();
