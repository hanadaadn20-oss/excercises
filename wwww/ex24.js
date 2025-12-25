// function fetchUserSync(){
//     alert((hello)=>{
//         console.log("after 2second")
//     },3000);
// }
// console.log("startin fetch user data")
// const user=fetchUserSync()
// console.log(alert)



// asynschrous
function getUserData(callback){
    setTimeout(()=>{
    console.log("after 2second")
},2000);
}
console.log("starting frtch user data");

getUserData();
console.log("this messege shows up immediatly")