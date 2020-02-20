function checkascendingnumbers(numbers)
{
    for(let index = 0;index < numbers.length-1; index++)
        if(numbers[index] > numbers[index+1])
            return false;
     return true;
}
numbers=[1,2,4,3,5];
console.log(checkascendingnumbers(numbers));