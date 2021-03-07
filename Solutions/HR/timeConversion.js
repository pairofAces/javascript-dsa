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

        } else {

        }
    } else {
        if (s.subtsring(0,2) == "12") {

        } else {
            
        }
    }
};