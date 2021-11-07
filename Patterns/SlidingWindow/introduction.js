// Sliding Window

// Example:
    // Given an array, find the average of all contiguous subarrays of size
    // 'K' in it.

// Brute Force:
    // Time: O(N * K), where (N) is the length of the array
    //       and (K) is the input integer 
function find_average_of_subarrays(K, arr) {
    const result = [];
    for (let i = 0; i < arr.length - K + 1; i++) {
        // find the sum of the next 'K' elements
        sum = 0.0;
        for (let j = i; j < i + K; j++) {
            // increment (sum) with the element at index j
            sum += arr[j];
        }
        // push the average of (sum) and (K) int the (result) array
        result.push(sum / K);
    }

    return result;
}

// Sliding Window approach
function findAveragesOfSubarrays(K, array) {
    const result = [];
    let windowSum = 0.0,
        windowStart = 0;
        for (let windowEnd = 0; windowEnd < array.length; windowEnd++) {
            windowSum += array[windowEnd];

            if (windowEnd >= K - 1) {
                // calculate the average and push into (result) array; 
                result.push(windowSum / K);
                // remove the element going out
                windowSum -= array[windowStart];
                // Slide the window to the right
                windowStart += 1;
            }
        }

        return result;
}