const SESSION_COOKIE_NAME = "JSESSIONID"
export const getSessionCookieID = () => {
    return getCookie(SESSION_COOKIE_NAME)
}


const getCookie = (name) => {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split("=");
        if (cookieName === name) {
            return decodeURIComponent(cookieValue);
        }
    }
    return null;
}