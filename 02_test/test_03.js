//let scroe = "33aa" 
// let scroe = null 
// let scroe = undefined 
/* let scroe = true
console.log(typeof scroe)
console.log(typeof(scroe))

let scroeabc = Number(scroe)
console.log(typeof scroeabc)
console.log(scroeabc) */

// "33" => 33
// "33aaa" => Nan
// true => 1
// false => 0

// let sandip = 1
// let sandip = 0
//let sandip = ""
//let sandip = "sandip"
//let boliansandip = Boolean(sandip)
//console.log(boliansandip)

let sandip = 33
//let String = typeof(sandip)
// let Stringaa = String(sandip)
// console.log(typeof Stringaa)

//console.log("1" + 5)
//console.log(+true)
//console.log(-true)
let gameCounter = 99
let gameCou = ++gameCounter
//console.log(gameCounter)
// console.log(gameCou)

//console.log(null > 0)
//console.log(null == 0)
//console.log(null === 0)
//console.log(null < 0)
//console.log(null != 0)

//console.log(null == "")
//console.log(null === "")
//console.log(null === "ab")
//console.log(null == "ab")


//console.log(undefined > 0)
//console.log(undefined == 0)
//console.log(undefined === 0)
//console.log(undefined < 0)
//console.log(undefined != 0)


//console.log(undefined == "")
//console.log(undefined === "")
//console.log(undefined === "ab")
//console.log(undefined == "ab")

const id = Symbol('123')
const antid = Symbol('123')
console.log(id == antid)
console.log(id === antid)
console.log(id)
console.log(antid)

// Reference (Non Primitive) Array, Object, Function

const Herro = ["a", "b", "c"]; // Array
const profile = { // Object
    name:"sandip",
    phone:8670034069
}
const newFunction = function(){ // Function
    return profile.phone;
}
console.log(typeof newFunction)
