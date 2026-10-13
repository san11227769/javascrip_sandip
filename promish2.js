// const newuser = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         const activeuser = false
//         if(activeuser){
//             resolve(`New user login`)
//         }else{
//             reject(`logout user`)
//         }
//     },1000)
// })
// newuser.then((message)=>{
//     console.log(message);
// })
// .catch((error)=>{
//     console.log(`${error}`)
// })


// new Promise((resolve, reject)=>{
// setTimeout(()=>{
//     const success = false;
//     if(success){
//         resolve(`your success fully login`)
//     }else{
//         reject(`sow somthing rowng`)
//     }
// },100)
// }).then((message)=>{
// console.log(`Hello ${message}`)
// }).catch((error)=>{
//     console.log(error)
// }).finally(()=>{
//     console.log("finally: Operation completed.");
// })


// async function newUser2() {
//     try{
//     const response = await fetch('https://randomuser.me/api/');
//     if(!response.ok){
//     throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json()
//     console.log(data)

//     }catch (error) {
//         console.error(error);
//     }finally {
//         console.log("finally: All operations completed.");
//     }
// }
// newUser2()


// async function newuser3(){
//     try{
//         const response = await fetch('https://randomuser.me/api/');
//         if(!response.ok){
//             throw new error(`HTTP error! status: ${response.status}`)
//         }
//         const data = await response.json()
//         console.log(data)
//     }catch(error){
//        console.error(error);
//     }finally {
//         console.log("finally: All operations completed.");
//     }
// }
// newuser3()



fetch('https://randomuser.me/api/').then((response)=>{
      if(!response.ok){
        throw new error(`HTTP error! status: ${response.status}`)
    }
    return response.json();
}).then((data)=>{
console.log(data)
}).catch((error)=>{
    console.log(error)
}).finally(() => {
    console.log("finally: Fetching random user completed.");
});