const userlist = {
    userName : "sandi",
    singnin : true,
    age:33
}

// console.log(user)

function User(userName, singnin, age){
    this.username= userName,
    this.singnin = singnin,
    this.age = age
    return this
}

// new ? 
const userDetails1 = new User("papai", false, 34)

const userDetails2 = new User("peu", false, 34)
// console.log(userDetails1)
console.log(userDetails1.constructor)