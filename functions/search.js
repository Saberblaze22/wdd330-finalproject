/**
 * Filters an array of items based on a search query.
 * @param {Array} items - The array of items to search.
 * @param {string} query - The search string.
 * @param {function} [getText] - Optional function to extract searchable text from each item.
 * @returns {Array} Filtered array of matching items.
 */
function search(items, query, getText = item => item.toString()) {
    if (!query) return items;
    const lowerQuery = query.toLowerCase();
    return items.filter(item =>
        getText(item).toLowerCase().includes(lowerQuery)
    );
}

export default search;