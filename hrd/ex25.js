function email(){
    return new Promise(()=>{
         setTimeout(()=>{
            const success=true
            if(success){
                resolve({id: 1, name: "hanad", email:"hanad2@gmail.com",})
            }
            else{
                Reject ("failed email");
            }
    console.log("after 2second")
},4000);
    })
}
email()
.then((email) => console.log("user data fitch", email));
// .than((data)=>console.log("use data",data));
// .catch((error)=>console.log(err))