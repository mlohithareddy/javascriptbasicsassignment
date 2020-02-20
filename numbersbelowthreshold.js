function getnumbersbelowthreshold(numbers,threshold)
{
    let count=0;
    for(let index = 0;index < numbers.length;index++)
        if(numbers[index] < threshold)
            count++;
    return count;
}
var numbers=[3,4,5,6,1];
threshold=4;
console.log(getnumbersbelowthreshold(numbers,threshold));