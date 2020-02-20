function checkdescendingnumbers(numbers)
{
    for(let index = 0;index < numbers.length-1; index++)
        if(numbers[index] < numbers[index+1])
            return false;
    return true;
}
numbers=[5,4,3,2,1];
console.log(checkdescendingnumbers(numbers));