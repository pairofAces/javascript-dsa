// Tournament Winner 

// Given an array of pairs representing the teams that have competed
// against each other and an array that contains the results of each competition

function tournamentWinner(competitions, results) {
    // create a variable for the current best team and 
    let currentBestTeam = '';
    // create an object with the currentBestTeam set to 0
    const scores = {[currentBestTeam]: 0};

    for(let i = 0; i < competitions.length; i++) {
        // create a variable to represent the result
        const result = results[i];
        // create variables for home/away team within
        // the competitions array at position 'i'
        const [homeTeam, awayTeam] = competitions[i];
    }
};