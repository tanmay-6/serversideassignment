/*15. Write a JavaScript program to create a clock.
Note: The output will come every second.
Expected Console Output :

*/
function displayTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    console.log(hours + ":" + minutes + ":" + seconds);
}

setInterval(displayTime, 10);

