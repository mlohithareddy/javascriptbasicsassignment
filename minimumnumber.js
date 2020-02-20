function findminimum(numbers)
{
    let minindex = 0;
    for(let index = 0; index<numbers.length; index++)
    {
        if(numbers[minindex] > numbers[index])
            minindex = index;
    }
    console.log('minimum number is:',numbers[minindex]);
}
var numbers=[4,8,97,54];
findminimum(numbers);