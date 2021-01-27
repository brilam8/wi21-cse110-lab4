var intervalID = setInterval(displayTime, 1000)

function displayTime() {
    let d = new Date();
    let time = d.toLocaleTimeString()
    console.log(time);
}
