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
console.log("A ", myArray)
const myvalu1 = myArray.slice(1, 3)
console.log(myvalu1)
console.log("B ", myArray)
const myvalu2 = myArray.splice(0, 2)
console.log("C ", myArray)
console.log(myvalu2)