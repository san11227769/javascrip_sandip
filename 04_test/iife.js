(function sandip(){
    //name IIFE
    console.log("Hi Peu")
})();

(() => {
    //name NON IIFE
    console.log("Hello Peu")
})();

((name) => {
    console.log(`Hello Peu her mom name is ${name}`)
})('shikha');