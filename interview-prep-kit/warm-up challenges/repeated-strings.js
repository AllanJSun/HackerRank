/*
 Title: Repeated String
 Difficulty: Easy
 Score: 20
 Link: https://www.hackerrank.com/challenges/repeated-string
*/

// Complete the repeatedString function below.
function repeatedString(s, n) {

    let initialCount = s.split('a').length - 1;
    let cocent = Math.floor(n / s.length);
    let total = cocent * initialCount;

    let remainder = n % s.length;
    let remainderLetter = s.slice(0, remainder);
    total += remainderLetter.split('a').length - 1;
    return total;

}