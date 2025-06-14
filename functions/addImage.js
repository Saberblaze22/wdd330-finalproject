/**
 * Adds an image element to a specified container in the DOM.
 * @param {string} imageUrl - The URL of the image to add.
 * @param {string} containerId - The id of the container element.
 * @param {string} [altText='Image'] - The alt text for the image.
 * @returns {HTMLImageElement|null} The created image element, or null if container not found.
 */
function addImage(imageUrl, containerId, altText = 'Image') {
    const container = document.getElementById(containerId);
    if (!container) return null;

    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = altText;
    container.appendChild(img);
    return img;
}

export default addImage;