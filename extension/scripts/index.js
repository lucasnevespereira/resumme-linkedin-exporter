console.log("Hello from DOM Content");


const SESSION_COOKIE_NAME = "JSESSIONID"

function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split("=");
        if (cookieName === name) {
            return decodeURIComponent(cookieValue);
        }
    }
    return null;
}

chrome.runtime.onMessage.addListener(async (request, sender, response) => {
    if (request.action === "EXPORT") {
        const cookieValue = getCookie(SESSION_COOKIE_NAME);
        console.log("Session ID", cookieValue);
    }
})

