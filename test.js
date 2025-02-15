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

// Function to extract .m3u8 URL from a given string
function extractM3U8Url(input) {
    try {
        // Regular expression to match any .m3u8 URL within the string
        var regex = /(https?:\/\/[^\s]+\.m3u8[^\s]*)/;

        // Apply the regex to the input string
        var match = input.match(regex);

        // If a match is found, return the m3u8 URL
        if (match && match[0]) {
            return JSON.stringify({
                Type: "Direct",
                Result: match[0]  // Return the matched URL
            });
        }

        // If no valid .m3u8 URL is found
        return JSON.stringify({
            Type: "Error",
            Result: "No valid .m3u8 stream URL found"
        });
    } catch (error) {
        return JSON.stringify({
            Type: "Error",
            Result: "Error processing input"
        });
    }
}
