function counteven(numbers)
{
    let count=0;
    for(let index=0;index<numbers.length;index++)
        if(numbers[index]%2 == 0)
            count++;
    return count;
}
var numbers=[1,2,3,4,5,6,7,8,9];
console.log(counteven(numbers));