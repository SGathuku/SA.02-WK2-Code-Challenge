let string = "The Quick Brown Fox";

/* THE QUICK BROWN FOX USING SWAPCASE*/

function swapCase(string)
{
    word = string.split(' ');
    return  word.map( i => 
         {
    return  i[0].toLowerCase() + (i.slice(1)).toUpperCase()
        
         }).join(" ");
}
console.log(swapCase(string))
