import {getSessionCookieID} from "./utils/document";

console.log("Hello from DOM Content");

chrome.runtime.onMessage.addListener(async (request, sender, response) => {
    if (request.action === "EXPORT") {
        const sessionId = getSessionCookieID()
        console.log("Current session ID", sessionId);
    }
})

