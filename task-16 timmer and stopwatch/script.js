let countdownInterval;
let stopwatchInterval;
let stopwatchStartTime;
let stopwatchRunning = false;

function startCountdown() {
    // Clear previous intervals
    clearInterval(countdownInterval);

    // Get the user input for countdown time in hours, minutes, seconds, and milliseconds
    const hours = parseInt(document.getElementById("hourInput").value, 10);
    const minutes = parseInt(document.getElementById("minInput").value, 10);
    const seconds = parseInt(document.getElementById("secInput").value, 10);
    const milliseconds = parseInt(document.getElementById("milliSecInput").value, 10);

    if (isNaN(hours) || isNaN(minutes) || isNaN(seconds) || isNaN(milliseconds) || hours < 0 || minutes < 0 || seconds < 0 || milliseconds < 0) {
        alert("Please enter valid hours, minutes, seconds, and milliseconds (all greater than or equal to 0).");
        return;
    }

    // Set initial values for the countdown boxes
    updateCountdownBoxes(hours, minutes, seconds, milliseconds);

    // Calculate total milliseconds
    const totalMilliseconds = hours * 60 * 60 * 1000 + minutes * 60 * 1000 + seconds * 1000 + milliseconds;

    // Set the date and time for the countdown
    const countDownDate = new Date().getTime() + totalMilliseconds;

    // Update the countdown every 1 millisecond
    countdownInterval = setInterval(function() {
        // Get the current date and time
        const now = new Date().getTime();

        // Calculate the remaining time
        const distance = countDownDate - now;

        // Calculate hours, minutes, seconds, and milliseconds
        const remainingHours = Math.floor(distance / (1000 * 60 * 60));
        const remainingMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const remainingSeconds = Math.floor((distance % (1000 * 60)) / 1000);
        const remainingMilliseconds = distance % 1000;

        // Update the countdown boxes
        updateCountdownBoxes(remainingHours, remainingMinutes, remainingSeconds, remainingMilliseconds);

        // If the countdown is over, display a message
        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById("countdown").innerHTML = "Times Up!!!";
        }
    }, 1);
}

function resetCountdown() {
    // Clear the countdown interval
    clearInterval(countdownInterval);

    // Reset the countdown boxes and input fields to 00 and 0
    updateCountdownBoxes(0, 0, 0, 0);
    document.getElementById("hourInput").value = "0";
    document.getElementById("minInput").value = "0";
    document.getElementById("secInput").value = "0";
    document.getElementById("milliSecInput").value = "0";
}

function updateCountdownBoxes(hours, minutes, seconds, milliseconds) {
    document.getElementById("hourBox").textContent = hours.toString().padStart(2, '0');
    document.getElementById("minBox").textContent = minutes.toString().padStart(2, '0');
    document.getElementById("secBox").textContent = seconds.toString().padStart(2, '0');
    document.getElementById("milliSecBox").textContent = milliseconds.toString().padStart(3, '0');
}

function startStopwatch() {
    // Clear previous intervals
    clearInterval(stopwatchInterval);

    // Set the start time for the stopwatch
    stopwatchStartTime = new Date().getTime();

    // Update the stopwatch every 1 millisecond
    stopwatchInterval = setInterval(function() {
        // Get the current date and time
        const now = new Date().getTime();

        // Calculate the elapsed time in milliseconds
        const elapsedTime = now - stopwatchStartTime;

        // Calculate hours, minutes, seconds, and milliseconds
        const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
        const milliseconds = elapsedTime % 1000;

        // Update the stopwatch display
        document.getElementById("stopwatch").textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(3, '0')}`;
    }, 1);

    stopwatchRunning = true;
}

function stopStopwatch() {
    // Clear the stopwatch interval
    clearInterval(stopwatchInterval);
    stopwatchRunning = false;
}

function resetStopwatch() {
    // Clear the stopwatch interval
    clearInterval(stopwatchInterval);

    // Reset the stopwatch display to 00:00:00:000
    document.getElementById("stopwatch").textContent = "00:00:00:000";
    stopwatchRunning = false;
}
