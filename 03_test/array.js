const myArray = [1,2,3,4]
const myhEro = ["sudip", "joy deb", "shikha"]
const myArray2 = new Array(1,2,3)
const myArray3 = myArray.join()

//myArray.push(5)
//myArray.pop()
//myArray.unshift()
//myArray.shift()

//console.log(myArray.includes(4))
//console.log(myArray.indexOf(3))
//console.log(myArray)
//console.log(myArray3)
//console.log(typeof myArray3)


// slice, splice
/*console.log("A ", myArray)
const myvalu1 = myArray.slice(1, 3)
console.log(myvalu1)
console.log("B ", myArray)
const myvalu2 = myArray.splice(0, 2)
console.log("C ", myArray)
console.log(myvalu2)*/
// push concat spread 
const mc = ["a","b","c","d"]
const bc = ["q","r","s","t"]
 //mc.push(bc)
 const mcbc = mc.concat(bc)
  const mcbc2 = [...bc, ...mc]
console.log(mcbc)
console.log(mcbc2)



const mynewarray = [5,6, [7,8,[9,11]], [1,2,3,4]]
const newAr = mynewarray.flat(Infinity)
console.log(newAr)


Array.isArray("Sandip")
console.log(Array.from("Sandip"))
console.log(Array.from({name :  "Sandip", age: 23}))
console.log(Object.values({ name: "Sandip", age: 23 }))
console.log(Object.entries({ name: "Sandip", age: 23 }))

const a = 10
const b = 20
const c = 30

console.log(Array.of(a,b,c))