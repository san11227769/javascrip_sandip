// function mul(num){
//     return num * 2;
// }
// mul.power = 2;

// console.log(mul(5)); // Output: 10
// console.log(mul.power);
// console.log(mul.prototype);

function CreateUser(userName, age) {
    this.username = userName;
    this.age = age;
}

CreateUser.prototype.increment = function () {
    this.age++;
};

const peu =  new CreateUser("peu", 29);
const sandip = new CreateUser("Sandip", 29);

console.log(peu);
console.log(sandip);

console.log(peu.username); // peu
console.log(peu.age);      // 29

peu.increment();

console.log(peu.age);      // 30

//console.log(Object.getPrototypeOf(peu) === CreateUser.prototype);
// true



/*
new:
new is a JavaScript operator used to create a new object from a constructor function or class.

বাংলা:
new হলো JavaScript-এর একটি operator, যেটা constructor function বা class থেকে নতুন object তৈরি করতে ব্যবহার করা হয়।
*/

/*
this:
this is a special keyword that refers to the current object/context in which a function is being executed.


this হলো JavaScript-এর একটি special keyword, যা function যে বর্তমান object/context-এর জন্য execute হচ্ছে, সেটাকে নির্দেশ করে।
*/


