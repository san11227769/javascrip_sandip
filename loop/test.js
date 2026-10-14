let i = 0;
// while (i <= 4) {
//     console.log(i)
//     i = i + 1
// }


// let ab = 0

// do{
//     console.log(ab)
// ab ++
// }while(ab <= 7)


// forof loop
const myempleys = ["asn", "peu", "ros", "nil"]
for (const myempley of myempleys) {
    console.log(myempley)
    
} 
const myprofile = {
    name:"sandip",
    company:"dili",
    list:0
} 
// forin
for (const key in myprofile) {
   
    console.log(`${key} : ${myprofile[key]}`)
    
}

//forEach
const newdil = ["sandipaaaaa", "papai", "nil", "Dilip da"]
newdil.forEach((element) => {
    console.log(element)
});

newdil.filter((item)=>{
    if(item == "sandip"){
        console.log(item)
    }
})
