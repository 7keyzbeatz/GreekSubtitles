function yourFunction(name) {
    try {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://www.skai.gr/tv/live", false); // false = synchronous request
        xhr.send();

        if (xhr.status === 200) {
            var pageText = xhr.responseText;
            var match = pageText.match(/(https?:\/\/[^"']+\.m3u8)/);

            if (match && match[1]) {
                return match[1]; // Return the found m3u8 URL
            } else {
                return "No m3u8 URL found";
            }
        } else {
            return "Error: Request failed with status " + xhr.status;
        }
    } catch (error) {
        return "Error: " + error.message;
    }
}
