$(document).ready(function () {
    $("#quiz").hide(); //hide these divs on load
    $("#results").hide();
    var numRight = 0; //set right, wrong, unasnwered to zero
    var numWrong = 0;
    var numUnans = 0;
    var number = 30;     //  Set our countdown timer to 100.
    var intervalId; //  Variable that will hold our interval ID when we execute

var questions={
    question: "name a color",
    answers: [
        right: "red", 
        wrong: "kitten", 
        wrong:"singing" ]
}
}

    //  the "runTimer" function 
    function runTimer() {
        clearInterval(intervalId);
        //          setInterval(function, value)
        intervalId = setInterval(decrementTimer, 1000);
    }
    function decrementTimer() {
        number--;

        $("#show-number").html("You have " + number + " seconds left");
        //  Once number hits zero...
        if (number === 0) {

            //  ...run the stop function.
            stopTimer();
        }
    }

    //  The When Time is up run same as DONE button
    function stopTimer() {
        $("#start").hide();
        $("#quiz").hide();
        $("#results").show();
        getScore()
        clearInterval(intervalId);
        $("#correct").html("Correct answers: " + numRight);
        $("#wrong").html("Wrong answers: " + numWrong);
        $("#unanswered").html("Unanswers: " + numUnans);
    }
    function timer() {
        clearInterval(intervalId);
        intervalId = setInterval(decrementTimer, 1000);
    }

    //  Execute the run function.
    runTimer();
    function getScore() {
        //put correct answers into an array

        numRight = 0; //set right, wrong, unasnwered to zero
        numWrong = 0;
        numUnans = 0;
        progress = 0;
        for (i = 0; i < 13; i++) { //while 'i' is LESS than number of questions in our quiz -1
            var radios = document.getElementsByName('question' + i); //get questions and store them in 
            for (var j = 0; j < radios.length; j++) {
                var radio = radios[j];
                progress++;
                if (radio.value == "correct" && radio.checked) {
                    numRight++; //add score
                } else if (radio.value == "wrong" && radio.checked) {
                    numWrong++;
                }
                numUnans = 12 - numRight - numWrong;
            }
        }//end for loop
    }//end getScore



    //On Start btn press
    $("#startBtn").click(function () {
        $("#start").hide();
        $("#quiz").show();
        runTimer(); //run Timer when we hit start button
        //start timer right after 
        
        $(".radio").attr('checked',false); //clear radio buttons
        setTimeout(function quiz() {
            //quiz function
            $("#done").click(function () {
                $("#quiz").hide();
                $("#results").show();
            });

        }, 1000 + 5);
    });
    //when the DONE button is clicked, but timer has not run out:
    $("#done").click(function () {
        $("#start").hide();
        $("#quiz").hide();
        $("#results").show();
        getScore()
        clearInterval(intervalId);
        $("#correct").html("Correct answers: " + numRight);
        $("#wrong").html("Wrong answers: " + numWrong);
        $("#unanswered").html("Unanswers: " + numUnans);
    });

    $("#return").click(function () {
        $("#results").hide();
        $("#start").show();
    });//end return to start

});//end document ready