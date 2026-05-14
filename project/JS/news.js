function getNewsIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

const news = getNewsIdFromUrl();

const BASE_URL = "https://webfinalapi.mobydev.kz";

async function fetchAndRenderNewsById(newsId) {
    try {
        const response = await fetch(`${BASE_URL}/news/${newsId}`);
        if (!response.ok) throw new Error(`Ошибка HTTP: ${response.status}`);

        const news = await response.json();

        document.querySelector('.news-title').textContent = news.title;
        document.querySelector('.tags__author').textContent = news.author.name || "Безымянный автор";
        document.querySelector('.tags__date').textContent = new Date (news.createdAt).toLocaleDateString();
        document.querySelector('.tags__category').textContent = news.category.name || "Без категории";
        document.querySelector('.news-image').src = `${BASE_URL}${news.thumbnail}`;
        document.querySelector('.news-content').textContent = news.content;
        

    } catch (error) {
        console.error('Ошибка при полчении новостей:', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const newsId = getNewsIdFromUrl();
    if (newsId) {
        fetchAndRenderNewsById(newsId);
    } else {
        console.error('ID новости не найден в URL');
    }
});