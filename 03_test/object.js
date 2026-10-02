const mysmy = Symbol("kye1")

const Sandip = {
    name: "sandip",
    age: 32,
    [mysmy]:"kye",
    company: "IT",
    rol:"frontend"
}
Sandip.name = "peu"
Object.freeze(Sandip)
Sandip.name = "My Love"
//console.log(Sandip)


const ab1 = {
    name: "peu",
    age:"29",
    dob:"12-12-2026"
}
const ab2 = {
    city: "pagli",
    no:"29",
    b:"12-12-2026"
}
const  obj3 = {...ab1, ...ab2}
const  obj4 = Object.assign({}, ab1, ab2)
// console.log(obj3)
// console.log(Object.keys(obj4))
// console.log(Object.values(obj4))
// console.log(Object.entries(obj4))
// console.log(obj4.isLogin)


const abc555 ={
    oi: "tui",
     now: "then"
}
const {oi, now} = abc555;
console.log(oi)