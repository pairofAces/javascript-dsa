// Two Number Sum

// 0(n^2) 

const twoNumSum = (array, targetSum) => {
    const result = [];
    let min, max;

    // using for loops
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            let a = array[i];
            let b = array[j];
            if (a + b === targetSum) {
                min = Math.min(a, b);
                max = Math.max(a, b);
                return [min, max];
            }
        }
    }
    return result;
}