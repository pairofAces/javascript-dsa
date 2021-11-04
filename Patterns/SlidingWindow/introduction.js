// Sliding Window

// Example:
    // Given an array, find the average of all contiguous subarrays of size
    // 'K' in it.

// Brute Force:
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