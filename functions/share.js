/**
 * Shares content using the Web Share API if available.
 * @param {Object} options - The share options.
 * @param {string} options.title - The title of the content.
 * @param {string} options.text - The text to share.
 * @param {string} options.url - The URL to share.
 * @returns {Promise<void>}
 */
export async function share({ title, text, url }) {
    if (navigator.share) {
        try {
            await navigator.share({ title, text, url });
            console.log('Content shared successfully');
        } catch (error) {
            console.error('Error sharing:', error);
        }
    } else {
        // Fallback: copy URL to clipboard
        try {
            await navigator.clipboard.writeText(url);
            alert('URL copied to clipboard');
        } catch (error) {
            alert('Share not supported and failed to copy URL.');
        }
    }
}