// function myprofile(){
//     console.log("sandip")
//     console.log("peu")
//     console.log("pyne")
// }
// myprofile()
// function addtonumber(number1, number2)
// number1, number2 = Parameters

// function addtonumber(number1, number2) { 
//     console.log(number1 + number2);
// }

// addtonumber(2, "a"); // 2, "a" = Arguments 
// function addtonumber(number1, number2) { 
//     // console.log(number1 + number2);
//     // const ruselt = number1 + number2
//     return number1 + number2
// }

// const ruselt =  addtonumber(2, 4);
// console.log(ruselt)
// const username = "psaura"
// function addtonumber(username) { 
//     // console.log(number1 + number2);
//     // const ruselt = number1 + number2
//     return `${username} my company name `
// }
// console.log(addtonumber(username))

// function comapnyName(cname){
//     if(!cname){
//         console.log(`not finde any anme`)
//         return
//     }
// return `${cname} my company`
// }
// console.log(comapnyName())

// function comapnyName(cname){
//     if(cname === undefined){
//         console.log(`not finde any anme`)
//         return
//     }
// return `${cname} my company`
// }
// console.log(comapnyName("peu pagli"))


// function calculetcardprice(num1){
// return num1
// }
// console.log(calculetcardprice(2))

// rest oporetor

// function calculetcardprice(...num2){
// return num2
// }
// console.log(calculetcardprice(2,4,200, 400))


// function calculetcardprice(val1, val2, ...num2){
// return num2
// }
// console.log(calculetcardprice(2,4,200, 400))


const user = {
    name: "sandip",
    age: 32,
    phone: "+91 8670034069"
}

function handelObject(user){
    return `My name is ${user.name}, age ${user.age} and my Phone Number ${user.phone} `
}
console.log(handelObject(user))

const myuser = ["a", "ab", "CDATASection", "peu"]
// function getArray(userlist){
//     return userlist
// }
function getArray(userlist){
    return userlist[3]
 }
console.log(getArray(myuser))