// JavaScript file for handling channel URLs and HTTP responses

// Object to map channel names to URLs
const channelUrls = {
    "channel1": "https://example.com/stream1",
    "channel2": "https://example.com/stream2",
    "channel3": "https://example.com/stream3"
};

// Function to get the URL for a given channel name
function getUrlForName(name) {
    if (channelUrls[name]) {
        return JSON.stringify({
            Type: "Direct",
            Result: channelUrls[name]
        });
    } else {
        return JSON.stringify({
            Type: "HTTPRequestNeeded",
            Result: "https://api.example.com/getStream?channel=" + encodeURIComponent(name)
        });
    }
}

// Function to handle HTTP request result
function functionWithHTTPResult(result) {
    try {
        let data = JSON.parse(result);
        if (data && data.streamUrl) {
            return JSON.stringify({
                Type: "Direct",
                Result: data.streamUrl
            });
        }
    } catch (e) {
        return JSON.stringify({
            Type: "Error",
            Result: "Invalid JSON response"
        });
    }
    return JSON.stringify({
        Type: "Error",
        Result: "No valid stream URL found"
    });
}
