/**
 * Adds an item to favorites and stores it in localStorage.
 * @param {string} key - The storage key for favorites.
 * @param {Object} item - The item to add to favorites.
 */
export function addToFavorites(key, item) {
    let favorites = JSON.parse(localStorage.getItem(key)) || [];
    // Prevent duplicates (assuming item has an 'id' property)
    if (!favorites.some(fav => fav.id === item.id)) {
        favorites.push(item);
        localStorage.setItem(key, JSON.stringify(favorites));
    }
}

/**
 * Retrieves the favorites list from localStorage.
 * @param {string} key - The storage key for favorites.
 * @returns {Array} - The array of favorite items.
 */
export function getFavorites(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
}