//1
fetch('https://jsonplaceholder.typicode.com/posts/1')
 .then(response => response.json())
 .then(data => console.log('Успех:', data))
 .catch(error => console.error('Ошибка:', error));

//2
const data = { title: "Новый пост", body: "Содержимое поста", userId: 1 };

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => console.log('Успех:', data))
.catch(error => console.error('Ошибка:', error));

//3
fetch('https://jsonplaceholder.typicode.com/nonexistent', {
    method: 'GET'
})
.then(response => {
   if (!response.ok) {
     throw new Error('Ошибка с кодом ' + response.status);
   }
   return response.json();
 })
 .then(data => console.log(data))
 .catch(error => console.error('Обработанная ошибка:', error));

//4  PUT
const dataupd = { title: "Новый заголовок", body: "Содержимое поста", userId: 1 };

fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataupd)
})
.then(response => response.json())
.then(data => console.log('Успех:', data))
.catch(error => console.error('Ошибка:', error));

//4 DELETE
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE'
})
.then(() => console.log('Пост успешно удалён'))
.catch(error => console.error('Ошибка удаления поста:', error));

//5
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

fetchData('https://jsonplaceholder.typicode.com/posts/1')
    .then(result => setTimeout(() => console.log(result), 3000))
    .catch(error => console.log(error));

async function fetchDataAsync() {
    try {
        const response = await fetchData();
        console.log(response);
    } catch (error) {
        console.log(error);
    }   
}
fetchDataAsync();

//6
fetch('https://jsonplaceholder.typicode.com/comments', {
    method: 'GET',
    headers: {
        'User-Agent': 'Opera GX'
    }
})
.then(response => response.json())
.then(data => console.log('Успех:', data))
.catch(error => console.error('Ошибка:', error));