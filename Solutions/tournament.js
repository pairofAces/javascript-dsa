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

        // create a winning team variable -> ternary
        const winningTeam = results === HOME_TEAM_WON ? homeTeam : awayTeam;

        // aspirational code -> helper function
        updateScores(winningTeam, 3, scores);

        // create conditional logic to set the current winning team
        // to the winningTeam variable
        if (scores[winningTeam] > scores[currentBestTeam]) {
            currentBestTeam = winningTeam;
        }
    }
    return currentBestTeam;
};

// create the helper function
function updateScores(team, points, scores) {
    // conditional logic in case there is no teams in the scores
    if (!(team in scores)) {
        scores[team] = 0;
    }
    // increment the team in scores by the amount of 'points'
    scores[team] += points;
};