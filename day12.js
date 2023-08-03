function allPairs(arr, target) {
    const pairs = [];
    const usedIndices = new Set();

    for (let i = 0; i < arr.length; i++) {
        if (usedIndices.has(i)) continue;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                pairs.push([arr[i], arr[j]]);
                usedIndices.add(i);
                usedIndices.add(j);
            }
        }
    }

    pairs.sort((a, b) => a[0] - b[0]);
    return pairs;
}


console.log(allPairs([2, 4, 1, 3], 5)); 
console.log(allPairs([5, 3, 7, 2, 1], 8)); 
console.log(allPairs([4, 5, 1, 1, 6, 8], 2)); 
