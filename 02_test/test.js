"use strict" // treat all JS Code as newr version
// alert(3 + 3) // we are useing nodejs, not browser
let age = 18
const name = "sandip"
let company = null
let bos
let office = true
console.table([
  { name: "age", value: age, type: typeof age },
  { name: "name", value: name, type: typeof name },
  { name: "company", value: company, type: typeof company },
  { name: "bos", value: bos, type: typeof bos },
  { name: "office", value: office, type: typeof office }
]);