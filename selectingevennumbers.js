function display(number)
{
    console.log(number);
}
function checkevenandprint(number)
{
    if(number%2==0)
        display(number);
}
function filterodd(numbers)
{
    for(let index=0;index<numbers.length;index++)
    {
        checkevenandprint(numbers[index]);
    }
}
var numbers=[1,2,3,4,5,6,7,8,9,10]
filterodd(numbers)