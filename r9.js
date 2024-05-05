//19. Write a JavaScript function that returns the number of minutes in hours and minutes.
function timeConvert(minutes) {
    var hours = Math.floor(minutes / 60);
    var remainingMinutes = minutes % 60;
    return minutes + " minutes = " + hours + " hour(s) and " + remainingMinutes + " minute(s).";
}

console.log(timeConvert(200));
