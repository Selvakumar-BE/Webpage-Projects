# Counter Timer
    A simple countdown timer web application built with HTML, CSS, and JavaScript. Users can enter a time duration in seconds and start, stop, or reset the timer. The timer is displayed in the format of hours:minutes:seconds.

# Features
    Start the timer: Allows users to start the countdown based on the input seconds.
    Stop the timer: Pauses the countdown without resetting the time.
    Reset the timer: Clears the timer display and input field.
    Input validation: Alerts the user if the input is not a valid number of seconds.
    Responsive design: Built with Bootstrap for responsiveness.

# Technologies Used
    HTML5: Structure of the web page.
    CSS3: For styling the timer and layout.
    Bootstrap 5.3: For responsive design and pre-built components.
    JavaScript: To handle the timer logic (start, stop, and reset).

# HTML Boilerplate: Basic HTML elements are set up, including the DOCTYPE, html, head, and body.
    Bootstrap: Bootstrap 5.3 is included via CDN for styling. This allows you to use Bootstrap's predefined classes like container, btn, etc.
    Timer Display: Inside a div.container, there is a heading (h4) and a p tag with id="timer" to show the time.
    Input: An input field where users can enter the timer duration (in seconds).
    Buttons: Three buttons are set up to control the timer: Start, Stop, and Reset.
    Script and CSS Links: External JavaScript (Timer.js) and CSS (Timer.css) files are linked for functionality and additional styling.

# CSS Explanation (Timer.css):
    The body background is styled with a linear gradient, creating a fixed, non-repeating background color transition.

# css
    body{
        background: linear-gradient(to right, rgb(140, 140, 253), rgb(156, 156, 204), rgb(235, 202, 235)); 
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-size: contain;
    }
    .container {
        max-width: 450px;
        color: white;
        border: 2px solid rgb(156, 156, 204);
        background: linear-gradient(to left, gray, rgb(180, 176, 176), rgb(218, 217, 217)); 
    }
    The btn-dark:hover class is customized to change the button color when hovering.

# JavaScript Explanation (Timer.js):
    This script handles the timer logic.

    start(): This function is triggered when the "Start" button is clicked. It reads the value entered by the user in seconds. If valid, it sets an interval to decrease the value by 1 every second and updates the displayed timer.
    stop(): Pauses the countdown by clearing the interval.
    reset(): Clears the timer, resets the display to 00:00:00, and clears the input field.


# How to Use
# Clone this repository:
    git clone https://github.com/your-username/counter-timer.git

    Open index.html in any browser.
    Enter the desired time (in seconds) in the input field.
    # Use the buttons to:
        Start: Begin the countdown.
        Stop: Pause the countdown.
        Reset: Clear the timer and input field.


# License
    This project is licensed under the MIT License - see the LICENSE file for details.