$(document).ready(function() {

    var todaysDate = $("#todaysDate");
    var saveBtn = $(".saveBtn");
    var taskField = $(".taskField");
    
    thisDate(); // Writes the current date in the header

    //Writes the current date in the header
    function thisDate () {
        todaysDate.html(moment().format("MMM Do YYYY"));
    }
    //Set Interval to check
    var dateInterval = setInterval(thisDate, 5000);


    // Current Hour - Background Color Change Past/Future/Present
    function thisHour(){
        var currentHour = moment().hour(); //grabs current hour in military time
        // console.log("Current Hour: " + currentHour);

        $(".time-block").each(function(){
            var blockHour = parseInt($(this).children(".hourBlock").attr("id"));
            // console.log("Block Hour: " + blockHour);

            if (blockHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("present");
                $(this).removeClass("future");

                // console.log("past");
            }
            else if (currentHour === blockHour) {
                $(this).removeClass("future");
                $(this).removeClass("past");
                $(this).addClass("present");

                // console.log("present");
            }
            else {
                $(this).addClass("future");
                $(this).removeClass("present");
                $(this).removeClass("past");

                // console.log("future");
            }
        });

    }
    //Set on interval
    var interval = setInterval(thisHour, 1000);

    // EventListener for when a specific taskField is clicked on, and input form shows up
    $(saveBtn).on("click", function () {
        // When the taskField is clicked on...

        var value = $(this).siblings(".taskField").val();
        var time = $(this).siblings(".hourBlock").attr("id");
        console.log(time, value);

        localStorage.setItem(time, value);

    });

    //The grabs the value from the localStorage corresponding to the hour
    $("#8").siblings(".taskField").val(localStorage.getItem("8"));
    $("#9").siblings(".taskField").val(localStorage.getItem("9"));
    $("#10").siblings(".taskField").val(localStorage.getItem("10"));
    $("#11").siblings(".taskField").val(localStorage.getItem("11"));
    $("#12").siblings(".taskField").val(localStorage.getItem("12"));
    $("#13").siblings(".taskField").val(localStorage.getItem("13"));
    $("#14").siblings(".taskField").val(localStorage.getItem("14"));
    $("#15").siblings(".taskField").val(localStorage.getItem("15"));
    $("#16").siblings(".taskField").val(localStorage.getItem("16"));
    $("#17").siblings(".taskField").val(localStorage.getItem("17"));



});