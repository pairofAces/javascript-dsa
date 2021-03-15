// TIME CONVERSION

// PROMPT
// given a time in 12-hour format, convert it to 24-hour time
// function will take a string as a parameter, in 12 hour format

function timeConversion(s) {
    // create a variable for the ending, AM or PM
    let amPm = s.charAt(8);
    let time = "";
    // create an if/else conditional to check if the ending time
    // is AM or PM
    if (amPm === "A") {
        // another conditional to check if the elements at certain positions
        // is equal to 12
            // the .substring method is useful for this
        if (s.subtsring(0,2) == "12") {
            // if it is, then set the time variable to "00"
            time = "00";
        } else {
            // else the time variable will be set to whatever elememts are
            // at the indices of 0 - 1
            time = s.subtsring(0,2);
        }
    } else {
        if (s.subtsring(0,2) == "12") {
            // if it is, the time variable will be set to the elements at
            // indices 0 - 1
            time = s.subtsring(0,2);
        } else {
            // else the time variable will be equal to the elements at 
            // indices 0 - 1, and then added to 12
                // the parseInt method will be useful
            time = parseInt(s.subtsring(0,2), 10) + 12;
        }
    }
    // return the final time result 
    return time;
};