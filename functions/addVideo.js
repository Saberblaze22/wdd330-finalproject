/**
 * Adds a video object to a given array or database.
 * @param {Object} video - The video object to add.
 * @param {string} video.title - The title of the video.
 * @param {string} video.url - The URL of the video.
 * @param {Array} videoList - The array to which the video will be added.
 * @returns {Array} The updated video list.
 */
function addVideo(video, videoList) {
    if (!video || !video.title || !video.url) {
        throw new Error('Invalid video object');
    }
    videoList.push({
        title: video.title,
        url: video.url,
        addedAt: new Date().toISOString()
    });
    return videoList;
}

module.exports = addVideo;