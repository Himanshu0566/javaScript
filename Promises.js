const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Task is completed');
        resolve()
    }, 1000)
})
promiseOne.then(function () {
    console.log('Promise consumed');

})
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Task 2 is completed');
        resolve()
    }, 1000)
}).then(function () {
    console.log('Task 2 consumed');

})
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: 'Himanshu', status: 'not in love' })

    }, 1000)
})
promiseThree.then(function (user) {
    console.log(user);

})
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false
        if (!error) {
            resolve({ username: 'Himanshu', status: 'not in love' })
        } else {
            reject('ERROR:SOMTHING WRONG WITH YOU AGAIN')
        }
    }, 1000)
})
promiseFour
    .then((user) => {
        console.log(user);
        return user.username
    })
    .then((username) => {
        console.log(username);

    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => console.log('THE PROMISE IS FINALLY RESOLVED OR REJECTED')
    )

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({ username: "himanshu", age: 25 })
        } else {
            reject('Error:JS went wrong')
        }

    }, 1000);


})
async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);

    } catch (error) {
        console.log(error);

    }
}
consumePromiseFive()

// async function fetchPromise() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }

// }
// fetchPromise()
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.log(error));
