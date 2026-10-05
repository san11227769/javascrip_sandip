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