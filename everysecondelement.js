function display(number)
{
    console.log(number)
}
function getalternatenumbers(numbers)
{
    for(let index=0;index<numbers.length;index+=2)
        display(numbers[index])
}
var numbers=[1,2,5,-1,2,4,3,1]
getalternatenumbers(numbers)