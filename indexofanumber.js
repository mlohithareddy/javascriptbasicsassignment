function indexofnumber(numbers,number)
{
    for(let index=0;index < numbers.length; index++)
    {
        if(numbers[index] == number)
            return index;
    }
    return -1;
}
numbers=[1,2,3,4,5,67];
number=5;
console.log(indexofnumber(numbers,number));