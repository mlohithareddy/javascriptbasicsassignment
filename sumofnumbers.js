function display(number)
{
    console.log(number)
}
function calculatesum(numbers) {
    let sum=0;
    for(let index=0;index<numbers.length;index++)
        sum+=numbers[index];
    display(sum)
}
var numbers=[1,3,2,6,7,9]
calculatesum(numbers)