function display(number)
{
    console.log(number)
}
function reverselist(numbers)
{
    for(let index=numbers.length-1;index>=0;index--)
        display(numbers[index])
}
function fibonacci(number)
{
    first=0;
    second=1;
    next=0;
    counter=2;
    var fibonacciseries=[];
    fibonacciseries.push(first);
    fibonacciseries.push(second);
    while (number!=counter)
    {
        counter++;
        next=first+second;
        first=second;
        second=next;
        fibonacciseries.push(next);
    }
    return fibonacciseries;
}
number=8;
reverselist(fibonacci(number));