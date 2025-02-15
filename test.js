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

        // Regular expression to match the substring between the last " before .m3u8 and the first " after .m3u8
        var regex = /"([^"]*\.m3u8)"/;

        // Apply the regex to find the URL
        var match = m3u8Url.match(regex);

        // If a match is found, return the result without surrounding quotes
        if (match && match[1]) {
            return JSON.stringify({
                Type: "Direct",
                Result: match[1]  // This will return the URL without the surrounding quotes
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
