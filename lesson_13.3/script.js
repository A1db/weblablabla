// 2
const loading = document.getElementById('loading');
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
xhr.onload = function() {
    if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        data.forEach(item => {
            console.log(item.title);
        })
    } else {
        console.error('Ошибка загрузки данных:', xhr.status);
    }
};
xhr.onerror = function() {
    console.error('Ошибка соединения');
};
xhr.send();


// 3
const xhr2 = new XMLHttpRequest();
xhr2.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
xhr2.onload = function() {
    if (xhr2.status === 200) {
        const data = JSON.parse(xhr2.responseText);
        renderDataTitles(data);
    } else {
        console.error('Ошибка загрузки данных:', xhr2.status);
    }
};
xhr2.onerror = function() {
    console.error('Ошибка соединения');
};
xhr2.send();

function renderDataTitles(data) {
    const titleList = document.getElementById('titles');
    data.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item.title;
        titleList.appendChild(listItem);
    });
}

// 4
xhr2.onload = function() {
    if (xhr2.status === 200) {
        const data = JSON.parse(xhr2.responseText);
        renderDataInsides(data);
        loading.textContent = "";
    } else {
        console.error('Ошибка загрузки данных:', xhr2.status);
    }
};
xhr2.onerror = function() {
    console.error('Ошибка соединения');
};

function renderDataInsides(data) {
    const insidesList = document.getElementById('insides');
    data.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.title}: ${item.body}, id ${item.id}`;
        insidesList.appendChild(listItem);
        insidesList.appendChild(document.createElement('br'));
    });
}

// 5
const xhr3 = new XMLHttpRequest();
xhr3.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
xhr3.onload = function() {
    if (xhr3.status === 200) {
        const data = JSON.parse(xhr3.responseText);
        data.forEach(item => {
            console.log(`${item.id}. Нет ошибки((`);
        })
    } else {
        console.error('ОШИБКА!!!', xhr3.status);
    }
};
xhr3.onerror = function() {
    console.error('Ошибка соединения СОС СОС СОС СОС');
};
xhr3.send();

//6
