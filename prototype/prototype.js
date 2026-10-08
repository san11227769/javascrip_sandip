// let myName = "Sandip   "

// console.log(myName.trueLenght);

let myHero = ["thor", "spider"]

let heroPower = {
    thor: "humar",
    spider: "sling",
    getSpcel: function(){
        console.log(`spydipower is ${this.spider}`)
    }
}
// Object.prototype.sandip = function(){
//     console.log('sandip is pasent in all object')
// }
// Array.prototype.sandips = function(){
//     console.log('sandip is pasent in all object')
// }
// myHero.myHero()


const discripter = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(discripter);

const profile = {
    name : "sandip",
    age: 33
}
console.log(Object.getOwnPropertyDescriptor(profile, "name"))

Object.defineProperties(profile, "name", {
    writable: false,
  enumerable: false,
})
