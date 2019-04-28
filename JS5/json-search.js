//event listener for button
document.getElementById("button").addEventListener("click", ()=>{
    var text = document.getElementById("textvalue").value.toLowerCase();//grab text value and make lowercase
    document.getElementById("searched").innerText = "";//rest div to nothing on each search
    $.getJSON("searchable.json", function (result) {
        var notFound = true;//track wether value was found

        //for each looping through array of json objects
        result.forEach((item)=>{
            var partOfName = item.Name.toLowerCase().substring(0, text.length);//takes item name and shrinks to size
            //of text input

            console.log(partOfName + " " + text);//if part of name and text input match display values
            if( partOfName== text)
            {
                objectToElement(item);
                notFound=false;
            }
        })
        if(notFound)// no names found
        {
            var p = document.createElement("p");
            p.innerText="No matches found";
            document.getElementById("searched").appendChild(p)
        }
    });
});


/**
 * Takes a object and parsed it out into a string of "Key:value"
 * @param params an object provided
 */
function objectToElement(params)
{
    for(var key in params)
    {
        var p = document.createElement("p");
        p.innerText= key + ":" + params[key];
        document.getElementById("searched").appendChild(p);
    }
    var br =document.createElement("br");
    document.getElementById("searched").appendChild(br);
}