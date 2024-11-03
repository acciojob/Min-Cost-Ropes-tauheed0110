function mincost(arr) {
    // Check if the array has only one rope
    if (arr.length <= 1) return 0;

    let totalCost = 0;

    while (arr.length > 1) {
        // Sort the array to find the two smallest ropes
        arr.sort((a, b) => a - b);

        // Get the two smallest ropes
        let first = arr[0];
        let second = arr[1];

        // Calculate the cost to connect them
        let cost = first + second;
        totalCost += cost;

        // Remove the two smallest ropes from the array
        arr.splice(0, 2);

        // Add the new rope back into the array
        arr.push(cost);
    }

    return totalCost;
}

module.exports=mincost;
