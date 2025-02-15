// JavaScript file for handling channel URLs and HTTP responses

// Object to map channel names to URLs
const channelUrls = {
    "skai": "https://www.skai.gr/tv/live"
};

// Function to get the URL for a given channel name
function mainFunction(name) {
    if (channelUrls[name]) {
        return JSON.stringify({
            Type: "HTTPRequestNeeded",
            Result: "https://www.skai.gr/tv/live"
        });
    } else {
        return JSON.stringify({
            Type: "HTTPRequestNeeded",
            Result: "https://www.skai.gr/tv/live"
        });
    }
}

// Function to handle HTTP request result
function functionWithHTTPResult(result) {
    try {
        // Directly check if the response contains the `.m3u8` URL
        var m3u8Url = result || null;

        // If `.m3u8` URL is found, return it
        if (m3u8Url && m3u8Url.indexOf(".m3u8") !== -1) {
            return JSON.stringify({
                Type: "Direct",
                Result: m3u8Url
            });
        }
    } catch (error) {
        return JSON.stringify({
            Type: "Error",
            Result: "Invalid response format"
        });
    }

    return JSON.stringify({
        Type: "Error",
        Result: "No valid .m3u8 stream URL found"
    });
}
