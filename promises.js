
// what is promises? -

// const promiseOne = new Promise((resolve, reject) => {
//     // Some asynchronous operation
//     setTimeout(() => {
//         const success = Math.random() > 0.5; // Simulating success or failure
//         if (success) {
//             resolve("Operation successful!" + success);
//         } else {
//             reject("Operation failed!");
//         }
//     }, 1000);
// });
// promiseOne.then((message) => {
//     console.log(message);
// }).catch((error) => {
//     console.error(error);
// });

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const success = Math.random() > 0.5;
//         if (success) {
//             resolve("Another operation successful!" + success);
//         }
//         else {
//             reject("Another operation failed!");
//         }   

//     }, 1500);
// }).then((message) => {
//     console.log(message);
// }).catch((error) => {
//     console.error(error);
// });

// const promiseThree = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({ message: "Third operation successful!", name: "Promise Three" });  
//     },1000)
// }).then((result) => {
//     console.log(result);
//     return result.name;
// })

// const promiseFour = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const success = false; // Simulating success or failure
//         if (success) {
//             resolve({ message: "Fourth operation successful!", name: "Promise Four" });
//         }
//         else {
//             reject('Fourth operation failed!');
//         }
//     }, 2000);
// }).then((result) => {
//     console.log(result);
//     return result.name;
// }).catch((error) => {
//     console.error(error);
// }).finally(() => {
//     console.log("finally: Fourth operation completed.");
// })


// const promiseFive = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const success = true; // Simulating success or failure  
//         if (success) {
//             resolve({ message: "Fifth operation successful!", name: "Promise Five" });
//         }
//         else {
//             reject('Fifth operation failed!');
//         }
//     }, 2500);
// })
// async function consumePromises() {
//      const resultFour = await promiseFive;
//     conslole.log(resultFour);
// }


// async function consumePromises() {
//     try {
//         const resultFour = await promiseFour;
//         console.log(resultFour);
//         const resultFive = await promiseFive;
//         console.log(resultFive);
//     } catch (error) {
//         console.error(error);
//     } finally {
//         console.log("finally: All operations completed.");
//     }
// }

//https://randomuser.me/api/
async function fetchRandomUser() {
    try {
        const response = await fetch('https://randomuser.me/api/');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data.results[0].name);
    } catch (error) {
        console.error('Error fetching random user:', error);
    } finally {
        console.log("finally: Fetching random user completed.");
    }
}

fetchRandomUser();

fetch('https://randomuser.me/api/').then((response) => {
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
}).then((data) => {
    console.log(data.results[0].name);
}).catch((error) => {
    console.error('Error fetching random user:', error);
}).finally(() => {
    console.log("finally: Fetching random user completed.");
});
