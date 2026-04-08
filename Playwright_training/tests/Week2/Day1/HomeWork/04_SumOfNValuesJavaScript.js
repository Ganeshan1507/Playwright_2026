function sumUpToN(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
        console.log(`i: ${i}, sum: ${sum}`);
    }
    return sum;
}

let result = sumUpToN(5);
console.log(`Final sum: ${result}`);
