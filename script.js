var todaysDate = $("#todaysDate");
var hourBlock = $(".hourBlock");
var taskField = $(".taskField");
var newInput;

currentDate();

// Use Moment.js library for dates & time
function currentDate() {
    let m = moment(); 
    console.log(m);
}


// Create each hour block 9am - 5pm
function hour() {

}



// Current Hour - Background Color Change
function currentHour(){
    // if () {

    // }
    // else if () {

    // }
    // else {

    // }
}

// EventListener for when the taskField is clicked on, and input form shows up
function newTask() {
    
    // EventListener for when the taskField is clicked on
        newInput = $("<input>");
        newInput.placeholder("add new item");
        $(taskField).append(newInput);

}