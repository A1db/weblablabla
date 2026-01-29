// 1
setTimeout(() => console.log("Hello World!"), 2000);

// 2-3
const intervalId = setInterval(() => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    console.log(`${hours}:${minutes}:${seconds}`)}, 1000);  

setTimeout(() => {
    clearInterval(intervalId);
}, 5000);

//4
function fetchData() {
   return new Promise((resolve, reject) => {
      const success = true;
      if (success) {
       resolve('Данные получены!');
      } else {
       reject('-');
      }
    });
}

fetchData()
    .then(result => setTimeout(() => console.log(result), 3000))
    .catch(error => console.log(error));

//5
function fetchDataWithError() {
   return new Promise((resolve, reject) => {
        const success = false;
        if (success) {
            resolve('-');
        } else {
            reject('Ошибка загрузки!');
        }
});
}

fetchDataWithError()
    .then(result => setTimeout(() => console.log(result), 3000))
    .catch(error => setTimeout(() => console.log(error), 2000));

//6
async function fetchDataAsync() {
    try {
        const response = await fetchData();
        console.log(response);
    } catch (error) {
        console.log(error);
    }   
}
fetchDataAsync();

//7
async function fetchDataWithErrorAsync() {
    try {
        const response = await fetchDataWithError();
        console.log(response);
    } catch (error) {
        console.log(error);
    }   
}
fetchDataWithErrorAsync();

//8
async function task1() {
    return new Promise((resolve, reject) => {
        const success = true;
        if (success) {
            setTimeout(() => resolve('task1 Данные получены!'), 1000);
        } else {
            reject('Ошибка загрузки!');
        }
    });
}
async function task2() {
    return new Promise((resolve, reject) => {
        const success = true;
        if (success) {
            setTimeout(() => resolve('task2 Данные получены!'), 2000);
        } else {
            reject('Ошибка загрузки!');
        }
    });
}
async function executeTasks() {
    try {
        const result1 = await task1();
        console.log(result1);
        const result2 = await task2();
        console.log(result2);
    } catch (error) {
        console.log(error);
    }
}
executeTasks();

//9
async function taskA() {
    return new Promise((resolve, reject) => {
        const success = true;
        if (success) {
            setTimeout(() => resolve('taskA Данные получены!'), 2000);
        } else {
            reject('taskA Ошибка загрузки!');
        }
    });
}
async function taskB() {
    return new Promise((resolve, reject) => {
        const success = true;
        if (success) {
            setTimeout(() => resolve('taskB Данные получены!'), 3000);
        } else {
            reject('taskB Ошибка загрузки!');
        }
    });
}
Promise.all([taskA(), taskB()])
    .then(results => {
        console.log(results[0]);
        console.log(results[1]);
    })
    .catch(error => console.log(error));    

//10
const message = prompt("Please enter your message:");
const timeout = prompt("Please enter timeout in seconds:") * 1000;
async function delayedMessage() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(message), timeout);
    });
}
delayedMessage().then(result => console.log(result));