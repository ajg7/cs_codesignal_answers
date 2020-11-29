const buyAndSellStock = prices => {
    let profit;
    let maxProfit = 0;
    prices.forEach((buy, index) => {
        let rest = prices.slice(index + 1);
        if (rest) {
            let sell = Math.max(...rest);
            if(sell > buy) {
                profit = sell - buy;
            }
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    })
    return maxProfit;
}
console.log(buyAndSellStock([6, 3, 1, 2, 5, 4]))

/*
Time Complexity- Quadratic, because for every iteration of the forEach, you are doing another operation (slice) at O(n)

*/

const alphabeticShift = inputStr => {
    const result = [];
    const inputArr = inputStr.split("");

    for (const char of inputArr) {
        let hex;
        if (char === "z") {
            hex = 96
        } 
        else if (char === "Z") {
            hex = 64
        } 
        else {
            hex = char.charCodeAt(0);
        }
        const nextHex = hex + 1;
        result.push(String.fromCharCode(nextHex))
    }
    return result.join("")
}

console.log(alphabeticShift("crazy"))
