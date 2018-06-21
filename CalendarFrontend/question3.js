// Question 3 -- changePossibilities(amount,amount): Your quirky boss collects rare, old coins. They found out you're a programmer and asked you to solve something they've been wondering for a long time. 

// Write a function that, given an amount of money and an array of coin denominations, computes the number of ways to make the amount of money with coins of the available denominations. 

function changePossibilities(totalAmount, coins) {
    let arr = new Array(totalAmount + 1).fill(0)
    arr[0] = 1
    coins.forEach(coin => {
        for (let i = coin; i <= totalAmount; i++) {
            let rem = i - coin
            arr[i] += arr[rem]
        }
    });
    return arr[totalAmount]
}

changePossibilities(4, [1, 2, 3])