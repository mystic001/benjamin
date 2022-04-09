const palindromeReturn = (numb1, numb2) => {
    const arraya = range(numb1, numb2)
    const palArray = []
    for (let i = 0; i < arraya.length; i++) {
        //This step is for a number to multiply itsef
        const res = Math.pow(arraya[i], 2);
        if (palindrome(res.toString())) {
            palArray.push(arraya[i])
        }

        for (let j = i + 1; j <= arraya.length - 1; j++) {

            //If the products of two numbers result in a palindrome enter the block of code below 
            if (palindrome((arraya[i] * arraya[j]).toString())) {
                palArray.push(arraya[i])
                palArray.push(arraya[j])
            }

        }

    }

    const unique = uniqueArray(palArray)
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

    for (var i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            result.push(i);
            if (i !== n / i) {
                result.push(n / i);
            }
        }
    }

    return result;
}


palindromeReturn(20, 100)