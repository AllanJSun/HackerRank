/*
 Title: Sock Merchant
 Difficulty: Easy
 Score: 10
 Link: https://www.hackerrank.com/challenges/sock-merchant
*/

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    let sorted = ar.sort((a,b) => a-b);
    let pairs = 0;

    for(let i = 0; i < n-1; i++) {
        if(sorted[i] === sorted[i+1]) {
            pairs++;
            i+=1;
        }
    }
    
    return pairs;
}