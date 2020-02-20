function reverselist(numbers)
{
    reversearray=[];
    for(let index=numbers.length-1;index>=0;index--)
        reversearray.push(numbers[index]);
    return reversearray;
}
function extractdigitsfromnumber(number)
{
    digits=[];
    let reminder=0;
    let divisor=10;
    while(number > 0)
    {
        reminder=number%divisor;
        digits.push(reminder);
        number=Math.floor(number/divisor);
    }
    return reverselist(digits);
}
var number=20345;
console.log(extractdigitsfromnumber(number));