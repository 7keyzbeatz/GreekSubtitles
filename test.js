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
// Function to handle HTTP request result
function functionWithHTTPResult(result) {
    try {
        // Ensure we are working with a string and check if it contains ".m3u8"
        var m3u8Url = result || null;

        if (typeof m3u8Url !== 'string') {
            return JSON.stringify({
                Type: "Error",
                Result: "Input is not a valid string"
            });
        }

        // Regular expression to match anything that starts with and contains .m3u8
        var regex = /([a-zA-Z0-9._-]+\.m3u8[a-zA-Z0-9._-]*)/;

        // Apply the regex to find the URL
        var match = m3u8Url.match(regex);

        // If a match is found, return the result
        if (match && match[0]) {
            return JSON.stringify({
                Type: "Direct",
                Result: match[0]  // Return the matched portion
            });
        }
        
        // If no match is found, indicate no valid .m3u8 URL
        return JSON.stringify({
            Type: "Error",
            Result: "No valid .m3u8 stream URL found"
        });
    } catch (error) {
        return JSON.stringify({
            Type: "Error",
            Result: "Invalid response format: " + error
        });
    }
}
