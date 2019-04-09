/**
 * Produces console logs to represent if the number is divisibly 3 5 or both.
 * @param x represent a positive int that will be checked against divisibilty
 */
function heeHaw(x)
{
    if(x>0)
    {
        for (var i = 1; i < x+1; i++)
        {
            if(i%3===0 && i%5===0)
            {
                console.log("HeeHaw");
            }
            else if(i%3===0)
            {
                console.log("Hee");
            }
            else if(i%5===0)
            {
                console.log("Haw");
            }
            else
            {
                console.log(i);
            }
        }
    }
}

/**
 * Produces console logs to represent if the number is divisibly 3 5 or both using recursion.
 * @param x represent a positive int that will be checked against divisibilty
 */
function heeHawRecursion(x)
{
    if(x>0)
    {
        heeHawRecursion(x-1);
        if(i%3===0 && i%5===0)
        {
            console.log("HeeHaw");
        }
        else if(i%3===0)
        {
            console.log("Hee");
        }
        else if(i%5===0)
        {
            console.log("Haw");
        }
        else
        {
            console.log(i);
        }
    }
}


//test calls here

//non recursive
console.log("Non recursive calls");
heeHaw(3);
console.log("*************************************************************");
heeHaw(-5);//nothing expected
console.log("*************************************************************");
heeHaw(15);
console.log("*************************************************************");
//recursive
console.log("Recursive calls");
heeHaw(3);
console.log("*************************************************************");
heeHaw(-5);//nothing expected
console.log("*************************************************************");
heeHaw(15);
console.log("*************************************************************");
