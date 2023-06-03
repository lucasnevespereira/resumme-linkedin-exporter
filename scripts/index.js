console.log("Hello from DOM Content");

chrome.runtime.onMessage.addListener(async (request, sender, response) => {
    if (request.action == "EXPORT") {
        console.log("ready to export")
        alert("ready")
    }
})