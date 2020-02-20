function findmaximum(numbers)
{
    let maxindex = 0;
    for(let index = 0; index<numbers.length; index++)
    {
        if(numbers[maxindex] < numbers[index])
            maxindex = index;
    }
    console.log('maximum number is:',numbers[maxindex]);
}
var numbers=[4,8,97,54];
findmaximum(numbers);