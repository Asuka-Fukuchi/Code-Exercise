// Given an integer x, return true if x is a palindrome, and false otherwise.

function isPalindrome(x: number): boolean {
    const reverse = x.toString().split("").reverse().join("");
    if(x === Number(reverse)){
        return true;
    } else{
        return false;
    }
};