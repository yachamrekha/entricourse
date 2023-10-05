function callbackTest()
{
    console.log("inside call back function")
}
function add (n1, n2, func){

    console.log(n1+n2)
    func()
}


var a = 1
var b = 6

add (a,b, callbackTest)
