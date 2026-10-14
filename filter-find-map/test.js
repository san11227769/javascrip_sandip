const products = [
  { id: 1, name: "Laptop", price: 50000, inStock: true },
  { id: 2, name: "Mouse", price: 800, inStock: false },
  { id: 3, name: "Keyboard", price: 1500, inStock: true },
  { id: 4, name: "Monitor", price: 12000, inStock: true },
  { id: 5, name: "Headphones", price: 2500, inStock: false },
   { id:6, name: "Headphones3", price: 2500, inStock: false },
    { id: 7, name: "Headphones2", price: 2500, inStock: false },
];

// products.filter((item)=>{
//     if(item.price <= 2500){
//         console.log(item.name)
//     }
// })
// products.find((item)=>{
//     if(item.price == 2500){
//         console.log(item.name)
//     }
// })

products.map((item)=>{
        console.log(item.name)
})
const cart = [1,2,3]
const newproducts = cart.reduce((act, car)=>{
console.log((`${act} + ${car}`))
    return act + car
}, 6)
console.log(newproducts)