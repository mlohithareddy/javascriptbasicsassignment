function display(number)
{
    console.log(number)
}
function reverselist(numbers)
{
    reversearray=[];
    for(let index=numbers.length-1;index>=0;index--)
        reversearray.push(numbers[index]);
    return reversearray;
}
var numbers=[1,2,3,4,5];
console.log(reverselist(numbers));