// switch(kye){
//     case value:
//         break;
//         default:
//             break;
// }


 // const month = 3
const month = "march"
// switch(month){
//     case 1:
//         console.log('Jan');
//         break;
//     case 2:
//         console.log('feb');
//         break;
//     case 3:
//         console.log('mar');
//         break;
//     case 4:
//         console.log('appri switch');
//         break;

//         default:
//             console.log('default ');
//             break;
// }

// switch(month){
//     case "Jan":
//         console.log('Jan');
//         break;
//     case "feb":
//         console.log('feb');
//         break;
//     case "march":
//         console.log('mar');
//         break;
//     case "appri":
//         console.log('appri');
//         break;

//         default:
//             console.log('default switch');
//             break;
// }

const userEmail  = "san@gmail.com"
const uuserName = ""

if(userEmail){
    console.log(`your email id is ${userEmail}`)
}
if(uuserName){
    console.log(`your name  is ${uuserName}`)
}else{
console.log(`your name  is null or emty ${typeof uuserName}`)
}

//Falsy values 
//false, 0, -0, BigInt 0n, null, "", undefined, NaN

//truthy Value
//"0", " ", 'false', [], {}, function(){}

const mybestFriend = []

if(mybestFriend.length === 0){
console.log(`array is emty`)
}else{
console.log(`array is not emty`)
}

const myObject = {
    name:"sandip"
}
if(Object.keys(myObject).length === 0){
console.log(`Object is emty`)
}else{
console.log(`Object is not emty`)
}

// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10
val1 = null ?? 10;
val1 = undefined ?? 20
val1 = null ?? 60 ?? 30;

console.log(val1)

//Terniry Operator
//condition ? true : false

const icetree = 100

icetree <= 80 ? console.log('No price 100') : console.log('Yes price 100')





