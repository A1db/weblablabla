const BASE_URL = "https://webfinalapi.mobydev.kz";

async function fetchAndRenderData() {
    try {
        const response = await fetch(`${BASE_URL}/news`);
        if (!response.ok) throw new Error(`Ошибка HTTP: ${response.status}`);

        const newsArray = await response.json();
        document.querySelector('.news-grid').innerHTML = newsArray.map( news => `

            <article class="news-card">
                <div class="news-card__image">
                    <img src="${BASE_URL}${news.thumbnail.startsWith('/') ? '' : '/'}${news.thumbnail}" alt="${news.title}">
                </div>

                <div class="news-card__content">
                    <a class="news-card__link" href="./news_id-1.html?id=${news.id}">
                        <h2 class="news-card__title">${news.title}</h2>
                        <p class="news-card__attributes"> ${news.createdAt} | ${news.category.name ? news.category.name : 'Без категории'}</p>
                        <div class="user">
                                <div class="user__avatar">
                                    <img src="https://i.pravatar.cc/150?u=admin@admin.com" alt="Аватар">
                                </div>

                                <p class="user__name">${news.author.name || "Безымянный автор"}</p>
                        </div> 
                    </a>

                    <div class="news-card__bottom">

                        <div class="news-card__actions">
                            <a href="./edit-news.html?id=${news.id}" class="button button-blue button-small">Редактировать</a>
                            <button type="button" class="button button-red button-small" onclick="deleteNews(${news.id})">Удалить</button>
                        </div>
                    </div>
                </div>
            </article>
        `).join('');
        setupActionButtons();
    } catch (error) {
        console.error('Ошибка при полчении новостей:', error);
    }
}





// function setupActionButtons() {
//     const authToken = localStorage.getItem('authToken');

//     const headerAuth = document.querySelector('.header__auth');

//     if (authToken) {
//         headerAuth.innerHTML = `<a href="./login.html" class="button button-red">Выйти</a>`;
//     }

//     document.querySelectorAll(
// }

document.addEventListener('DOMContentLoaded', fetchAndRenderData);