var cFunc = function(){
    var count = 0;
    function innerFunc(){
        count += 1;
        console.log(count);
    }
    return innerFunc;
}();

cFunc();
cFunc();
cFunc();