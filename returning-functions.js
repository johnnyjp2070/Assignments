//Function which returns Functions.
function mul(x, y){
    var multiply = function(a, b){
        console.log(a * b);
    }
    return multiply;
}

var result = mul();
console.log(result(5, 6));