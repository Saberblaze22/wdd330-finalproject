/**
 * Adds content to a specified DOM element.
 * @param {string} selector - The CSS selector of the element to add content to.
 * @param {string|HTMLElement} content - The content to add (HTML string or DOM node).
 */
export function addContent(selector, content) {
    const element = document.querySelector(selector);
    if (!element) return;
    if (typeof content === 'string') {
        element.innerHTML = content;
    } else if (content instanceof HTMLElement) {
        element.innerHTML = '';
        element.appendChild(content);
    }
}