// Coin Change 

// Given an array of integers that represent coins called (coins)
// and an integer amount (amount), return the minimum amount of coins
// required to make complete change for the amount of (amount)

// Bottom Up approach
const leastCoins = (coins, amount) => {
    // Create an array that will act as a table that will store
    // the correct amount of coins for each sub problem
    const cache = Array(amount + 1);
    cache.fill(amount + 1);

    // The amount of coins required to make an amount of 0,
    // will always be zero
    cache[0] = 0;

    // solve every sub problem from 1 to (amount)
    for (let i = 0; i <= amount; i++) {
        // for each coin we are given in the input array (coins)
        for (let j = 0; j < coins.length; j++) {
            // if the coin value is less than or equal to the sub problem
            // value
            if (coins[j] <= i) {
                // compare the values, and see if there's a better value
                cache[i] = Math.min(cache[i], cache[i - cache[j]] + 1);
            }
        }
    }

    return cache[amount] > amount ? -1 : cache[amount];
}