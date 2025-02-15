// Function 1: Returning the URL based on name
function getUrlForName(name) {
    // Define the mapping of names to URLs
    const urlMappings = {
        "skai": "https://www.skai.gr/tv/live",
        "bbc": "https://www.bbc.com/live",
        "cnn": "https://www.cnn.com/live"
    };

    // Get the dynamic URL for the name
    const dynamicUrl = urlMappings[name.toLowerCase()];
    
    if (!dynamicUrl) {
        return "No URL found for this name";  // Return an error if no matching URL
    }

    return dynamicUrl;  // Return the matching URL
}

// Function 2: Processing the HTML content passed from Android
function extractM3u8UrlFromHtml(pageText) {
    try {
        var match = pageText.match(/(https?:\/\/[^"']+\.m3u8)/);
        
        if (match && match[1]) {
            return match[1];  // Return the found m3u8 URL
        } else {
            return "No m3u8 URL found";
        }
    } catch (error) {
        return "Error: " + error.message;
    }
}
