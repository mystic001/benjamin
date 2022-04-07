const palindromeReturn = (numb1, numb2) => {
    const arraya = range(numb1, numb2)

    console.log(arraya)
    const newArr = []
    for (let i = 0; i < arraya.length; i++) {
        newArr.push(arraya[i]*arraya[i])

        for (let j = i + 1; j <= arraya.length - 1; j++) {
            const result = arraya[i] * arraya[j]
            newArr.push(result)
        }

    }

    // const first = arraya[0]*arraya[0]
    // newArr.unshift(first)
    // const last = arraya[arraya.length-1]*arraya[arraya.length-1]
    // newArr.push(last);
    

    const palArray = []
    for(let i = 0 ; i < newArr.length ; i++){
        console.log(newArr[i])
        if(newArr[i].toString().length === 1){
             palArray.push(newArr[i])
        } else if(palindrome(newArr[i].toString())){
        palArray.push(newArr[i])
        }else{
            continue
        }
    }

    console.log(palArray)

}

function range(start, end) {
    return Array(end - start + 1)
        .fill().map((_, idx) => start + idx)
}


function palindrome(str) {
    var len = str.length;
    var mid = Math.floor(len/2);

    for ( var i = 0; i < mid; i++ ) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }

    return true;
}

palindromeReturn(10, 15)