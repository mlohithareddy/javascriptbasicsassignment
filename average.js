function average(numbers)
{
    let sum=0;
    for(let index=0;index<numbers.length;index++)
    {
        sum+=numbers[index];
    }
    return (sum/numbers.length);
}
numbers=[1,2,3,4,5,6];
console.log(average(numbers));