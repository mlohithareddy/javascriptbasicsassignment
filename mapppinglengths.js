function maplength(names)
{
    lengths=[];
    for(let index=0;index<names.length;index++)
        lengths.push(names[index].length);
    return lengths;
}
names=["mary","had","a","little","lamb"];
console.log(maplength(names));