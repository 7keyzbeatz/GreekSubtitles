// First method: Get the dynamic URL based on the name
function getUrlForName(name) {
    // Logic to return a URL based on the name (e.g., "skai")
    if (name === "skai") {
        return "https://www.skai.gr/tv/live";  // Example URL, based on the name
    }
    return "No URL found for this name";
}

// Second method: Extract m3u8 URL from the HTML page content
function extractM3u8UrlFromHtml(pageContent) {
    // Use regular expressions to extract the m3u8 URL
    const match = pageContent.match(/(https?:\/\/[^"']+\.m3u8)/);
    if (match && match[1]) {
        return match[1];  // Return the m3u8 URL
    } else {
        return "No m3u8 URL found";
    }
}
