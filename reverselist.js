function display(number)
{
    console.log(number)
}
function reverselist(numbers)
{
    for(let index=numbers.length-1;index>=0;index--)
        display(numbers[index])
}
var numbers=[1,2,3,4,5]
reverselist(numbers)