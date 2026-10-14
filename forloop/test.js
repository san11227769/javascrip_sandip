

// const myempley = ["asn", "peu", "ros", "nil"]

// for (let i = 0; i < myempley.length; i++) {
//     const element = myempley[i];
//     console.log(`${element} ${i + 1}`)
// }

for (let index = 0; index < 5; index++) {
     const num = index;
     console.log(`This is Table ${num}`)
    for (let i = 0; i <= 10; i++) {
        const element = i;
        console.log(`${num} * ${element} = ${num * element}`)
    }
   
    
}


for (let i = 0; i <= 10; i++) {
    const element = i
    if(element == 8){
        console.log(`8 I love`)
        break
    }
    console.log(element)
}


for (let i = 0; i <= 10; i++) {
    const element = i
    if(element == 8){
        console.log(`8 I love`)
        continue
    }
    console.log(element)
}

