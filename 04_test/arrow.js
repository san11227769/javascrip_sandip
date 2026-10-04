const user = {
username: "peu",
price: 100,
welcome: function(){
    console.log(`name is ${this.username} and her pant priceis ${this.price}`)
}

}
// user.welcome()
user.username = "aaa"
user.welcome()
// () =>{} arrow function

// const sandip = (num1, num2) =>{ 
//     return num1 + num2
// }

// const sandip = (num1, num2) => num1 + num2

const sandip = (num1, num2) => ({user: "peu"})

console.log(sandip(2, 3))

const myArray = [2,3,4,5,6]
