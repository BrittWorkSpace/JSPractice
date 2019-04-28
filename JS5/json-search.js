let searchArray =[];

document.getElementById("button").addEventListener("click", ()=>{
    var text = document.getElementById("textvalue").value.toLowerCase();
    $.getJSON("searchable.json", function (result) {
        result.forEach((item)=>{
            if(item.Name.toLowerCase().substring(0, text.length+1) == text)
            {
                objectToElement(item);
            }
        })
    });
});




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