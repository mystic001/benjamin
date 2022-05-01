var num = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
var tens = "twenty thirty forty fifty sixty seventy eighty ninety".split(" ");


const formatedNumber = (number) => {

    if(number.toString().length > 12){
        console.log("Number is too large")
    }else{
        const numbInWords = number2words(number);
        const formatedNum = numberWithCommas(number);
        console.log(`The number is ${numbInWords} and it is formated as ${formatedNum}`)
        
    }
  
}
function number2words(n){
    if (n < 20) return num[n];
    var digit = n%10;
    if (n < 100) return tens[Math.floor((n/10)-2)] + (digit? "-" + num[digit]: "");
    if (n < 1000) return num[Math.floor((n/100))] +" hundred" + (n%100 == 0? "": " and " + number2words(n%100));
    return number2words(Math.floor((n/1000))) + " thousand" + (n%1000 != 0? " " + number2words(n%1000): "");
}


function numberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

formatedNumber(999);

