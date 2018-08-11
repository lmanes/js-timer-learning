(function() {
"use strict";

// set some vars right off the bat
var form = document.getElementById('timer_container');
var timeMinutes = document.getElementById('time_minutes');
var submitButton = document.getElementById('submit_time');
var output = document.getElementById('time_output');

//when the page loads, do stuff
document.addEventListener('DOMContentLoaded', function(){

    //listener for clicking the submit button -- nested so that it doesn't run until the page has loaded
    document.getElementById('submit_time').addEventListener('click', outputNumber);

    //disable the button on page load
    submitButton.disabled = true;

    //listen for a value entered in the input box
    timeMinutes.addEventListener('input', function() {
        // disable the button if no value in input
        if (timeMinutes.value === '') {
            submitButton.disabled = true;
        } else {
            submitButton.disabled = false;
        }

    });

    //here's what will happen when you click the submit button
    function outputNumber(event){
        //will prevent any default actions
        event.preventDefault();

        //will set the content of the output box to the value of the input!
        output.innerHTML = timeMinutes.value;
    };
    
});






})();
