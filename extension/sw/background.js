chrome.runtime.onInstalled.addListener(() => {
    console.log("Service Worker initialized..")
    // set storage
    // chrome.storage.local.set({
    //     items: []
    // });
});


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    // catch message
    // if (request.message === 'message_name') {}
})