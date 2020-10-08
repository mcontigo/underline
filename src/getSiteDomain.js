/**
 * Get site domain from site URL
 * return an empty string if siteUrl not provided
 *
 * @param {string} siteUrl
 * @returns {string}
 */
const getSiteDomain = (siteUrl) => (siteUrl ? new URL(siteUrl).hostname : '');

export default getSiteDomain;
