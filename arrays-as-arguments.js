//Function with Array as Argument.
function add(values){
    values[0] = 25;
    values[1] = 15;  
    var x = values[0];
    var y = values[1];
    console.log(values);
    console.log(x + y);
}

var num = [89, 74];
add(num);