//Function with Objects as Arguments.
var student = {
    name: "Vinay",
    age: 17,
    class: 12
};

function studentDetail(detail){
    var name = detail.name;
    var age = detail.age;
    var classs = detail.class;
    console.log(name+"  "+age+"   "+classs);
}
studentDetail(student);