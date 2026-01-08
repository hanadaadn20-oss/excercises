function oprate (a,b,callback){
    return callback(a,b)
}
function add (a,b){
    return a+b;
}
function subtract (a,b){
    return a-b;
}
function multipple (a,b){
    return a*b;
}
function divide (a,b){
    return a/b;
}

console.log("add:",oprate(2,3,add))
console.log("subtract:",oprate(2,9,subtract))
console.log("multipple:",oprate(2,6,multipple))
console.log("divide:",oprate(2,3,divide))