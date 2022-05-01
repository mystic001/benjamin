/**
 * 
 * 
 * Detect palindrome products in a given range.
A palindromic number is a number that
remains the same when its digits are
reversed. For example, 121 is a palindromic
number but 112 is not.
Given a range of numbers, find the largest
and smallest palindromes which are products
of two numbers within that range.
Your solution should return the largest and
smallest palindromes, along with the factors
of each within the range. If the largest or
smallest palindrome has more than one pair
of factors within the range, then return all
the pairs.

 * @param {
 * 
 * } numb1 
 * @param {*} numb2 
 */




const palindromeReturn = (numb1, numb2) => {
    const arraya = range(numb1, numb2)
    const palArray = []
    for (let i = 0; i < arraya.length; i++) {
        //This step is for a number to multiply itsef
        const res = Math.pow(arraya[i], 2);
        if (palindrome(res.toString())) {
            palArray.push(res)
        }

        for (let j = i + 1; j <= arraya.length - 1; j++) {

            //If the products of two numbers result in a palindrome enter the block of code below 
            if (palindrome((arraya[i] * arraya[j]).toString())) {
                palArray.push(arraya[i] * arraya[j])
            }

        }

    }

    const unique = uniqueArray(palArray)

    console.log(unique[unique.length - 1])
    const value = [unique[0], unique[unique.length - 1]]
    console.log("values with palindrome are "+value)
    
    console.log("There products are below")
    for (let i = 0; i < value.length; i++) {
        const arr = factors(value[i])

        console.log(sortArray(arr))
    }


}


//Function to generate an array
function range(start, end) {
    return Array(end - start + 1)
        .fill().map((_, idx) => start + idx)
}


//Function for identifying palindrome
function palindrome(str) {
    return str === str.split('').reverse().join('')
}



//Function to remove duplicates
function uniqueArray(arr) {
    var a = [];
    for (var i = 0, l = arr.length; i < l; i++)
        if (a.indexOf(arr[i]) === -1 && arr[i] !== '')
            a.push(arr[i]);
    return a;
}

//Function to sort array
function sortArray(arr) {
    return arr.sort((a, b) => a - b)
}


//Function to get the factors of a number 
function factors(n) {
    var result = [];

    for (var i = 0; i <= n; i++) {
        if (n % i === 0) {
            result.push(i);
        }
    }

    return result;
}




palindromeReturn(1, 11)