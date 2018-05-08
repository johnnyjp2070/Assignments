//Function with Function as Argument.
function add(x, y){
    return x + y;
}

function operation(anyFunc){
    var result = anyFunc(2, 5);
    console.log(result);
}

operation(add);

