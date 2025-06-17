// animeNews.js

// Example API endpoint for anime news (replace with a real one if needed)
const API_URL = 'https://api.jikan.moe/v4/anime/1/news';

// Function to fetch and display anime news
async function fetchAnimeNews() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();

        // Assuming the API returns an array of news articles in data.data
        const newsList = data.data || [];
        const newsContainer = document.getElementById('animeNews');

        if (!newsContainer) {
            console.error('Element with id "animeNews" not found.');
            return;
        }

        // Clear previous content
        newsContainer.innerHTML = '';

        // Insert news articles into the container
        newsList.forEach(article => {
            const articleDiv = document.createElement('div');
            articleDiv.className = 'news-article';

            articleDiv.innerHTML = `
                <h3><a href="${article.url}" target="_blank" rel="noopener">${article.title}</a></h3>
                <p>${article.date ? new Date(article.date).toLocaleDateString() : ''}</p>
                <p>${article.excerpt || ''}</p>
            `;

            newsContainer.appendChild(articleDiv);
        });
    } catch (error) {
        console.error('Error fetching anime news:', error);
    }
}

// Call the function after DOM is loaded
document.addEventListener('DOMContentLoaded', fetchAnimeNews);