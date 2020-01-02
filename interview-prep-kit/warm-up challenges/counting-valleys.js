/*
 Title: Counting Valleys
 Difficulty: Easy
 Score: 15
 Link: https://www.hackerrank.com/challenges/counting-valleys
*/

// Complete the countingValleys function below.
function countingValleys(n, s) {
    let currentElevation = 0;
    let valley = 0;
    for (let i = 0; i < n; i++) {
        if (s[i] === 'U') {
            currentElevation++;
        }
        if (s[i] === 'D') {
            currentElevation--;
        }
        if (currentElevation == 0 && s[i] === 'U') {
            valley++;
        }
    }
    return valley;
}