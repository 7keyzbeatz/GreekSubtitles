async function yourFunction(name) {
    try {
        const response = await fetch("https://www.skai.gr/tv/live");
        const pageText = await response.text();

        // Use a Regular Expression to find the first m3u8 URL
        const match = pageText.match(/(https?:\/\/[^"']+\.m3u8)/);
        
        if (match && match[1]) {
            return match[1]; // Return the m3u8 URL
        } else {
            return "No m3u8 URL found";
        }
    } catch (error) {
        return "Error: " + error.message;
    }
}
