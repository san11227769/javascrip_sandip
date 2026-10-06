//loop-iteration
// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if(i == 5){
//         console.log('5 is best number')
//     }
//     console.log(element)
// }

// for  (let i = 0; i <= 2; i++) {
//     console.log(`outer loop ${i}`)
//     for  (let j = 0; j <= 5; j++) {
//      // console.log(`Inner  Inner Inner loop ${j}`)

//         console.log(i + '*' + j + '=' + i*j)
//     }
// }

// let myArray = [10,20,30,40,50] 
// for  (let i = 0; i < myArray.length; i++) {
//     const element = myArray[i]
//     console.log(`outer loop ${element}`)

// }

// break and continue
// for (let index = 1; index <= 20; index++) {
//     if(index == 5){
//         console.log(`Detect 5`)
//         continue 
//     }
//    console.log(`value of i is ${index}`)
    
// }
// for (let index = 1; index <= 20; index++) {
//     if(index == 5){
//         console.log(`Detect 5`)
//         break
//     }
//    console.log(`value of i is ${index}`)
    
// }


//while and do while loop
let index = 0
// while (index < 10) {
//     console.log(index)
//     index = index + 2
// }

let myHerro = ["subha", "jay", "punam", "peu"]
while (index < myHerro.length) {
    //let hello = myHerro[index]
    console.log(`hello ${myHerro[index]}`)
    index = index + 1
}

let age = 11
do {
    console.log(`my age is ${age}`)
    age++
} while (age <= 10);


//// 

["",""]
[{},{},{}]
const arr = [1,2,3,4,5]
for (const num of arr) {
    console.log(num)
}

const grets = "sandip pyne"
for (const gre of grets) {
    console.log(gre)
}

// maps

const map = new Map()
map.set("In", "India")
map.set("Bn", "Bangali")
map.set("En", "England")
console.log(map)

for (const [kye, value] of map) {
    console.log(kye + ':' + value)
    
}
const myGems = {
    game1:"NFS",
    game2:"spind"
}
// for (const [kye, value] of myGems) {
//     console.log(kye + ':' + value)
    
// }

// for (const kye in myGems) {
//     console.log(`${kye} : ${myGems[kye]}`)
// }

// for (const kye in map) {
//     console.log(`${kye} : ${myGems[kye]}`)
    
// }

// const code = ["ruby", "java", "c++", "javascript"]
// code.forEach(function (codes){
//     console.log(codes)
// });
// code.forEach(codes => {
//     console.log(codes)
// });

// const javascript = [
//     {
//         name :"Peu",
//         age :29
//     },
//     {
//         name :"sandip",
//         age :33
//     },
//     {
//         name :"bubai",
//         age :30
//     },
// ]
// javascript.forEach((item) => {
//     console.log(`my name is ${item.name} and age ${item.age}`)
// });

// const values = javascript.forEach((item) => {
//     console.log(`my name is ${item.name} and age ${item.age}`)
// });
//console.log(values)

//  const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newnum = myNum.filter((num)=> {
//   return  num >4
// })

// const newNums = []
// myNum.forEach((num)=>{
// if(num > 4){
//    newNums.push(num)
// }
// })
// console.log(newNums);

const books = [
  {
    id: 1,
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: 299,
    category: "Fiction"
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    price: 499,
    category: "Self-Help"
  },
  {
    id: 3,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    price: 399,
    category: "Finance"
  },
  {
    id: 4,
    title: "Clean Code",
    author: "Robert C. Martin",
    price: 699,
    category: "Programming"
  },
  {
    id: 5,
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    price: 599,
    category: "Programming"
  },
  {
    id: 6,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    price: 349,
    category: "Finance"
  },
  {
    id: 7,
    title: "Deep Work",
    author: "Cal Newport",
    price: 449,
    category: "Productivity"
  },
  {
    id: 8,
    title: "Ikigai",
    author: "Héctor García",
    price: 299,
    category: "Self-Help"
  },
  {
    id: 9,
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    price: 799,
    category: "Programming"
  },
  {
    id: 10,
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    price: 249,
    category: "Self-Help"
  }
];

// const userBooks = books.filter((book)=> {
//     return book.price < 799 &&  book.category === 'Self-Help'
// })

// console.log(userBooks)


// ❌ Gives true/false for every book
// console.log(books.map((bk) => bk.price < 299));

// ✅ Gives books whose price is below 299
// console.log(books.filter((bk) => bk.price < 299));

const allNum = [1, 2, 3]
//  const myTotal = allNum.reduce((acc, carval) =>{
//   console.log(`${acc} and ${carval}`)
//     return acc + carval 
//  }, 0)
 const myTotal = allNum.reduce((acc, carval) =>  acc + carval, 56)
 console.log(`abc ${myTotal}`)

