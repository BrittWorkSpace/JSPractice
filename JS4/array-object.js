function arrayToObject(params) {
    let arrayObject =
        {
            string:[],
            numbers:[],
            boolean:[]
        }
    for (i = 0; i < params.length; i++)
    {
        switch(typeof params[i])
        {
            case 'string':
                arrayObject.string.push(params[i]);
                break;
            case 'boolean':
                arrayObject.boolean.push(params[i]);
                break;
            case 'number':
                arrayObject.numbers.push(params[i]);
                break;
        }
    }
    return arrayObject;
}

var input = [-1,5, "car", false, 10.2, true, "dog"];

var object = arrayToObject(input);

function objectToElement(params)
{
    for (var key in params) {
        var h1 = document.createElement("h1");
        var p = document.createElement("P")
        h1.innerText="" +key;
        p.innerText= params[key].toString();
        document.body.appendChild(h1);
        document.body.appendChild(p);
    }
}
objectToElement(object);