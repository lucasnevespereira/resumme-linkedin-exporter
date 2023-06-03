chrome.runtime.onInstalled.addListener(() => {
    console.log("Service Worker initialized..")
});


// catch message
// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     if (request.message === 'message_name') {
//         // set storage
//         chrome.storage.local.set({
//             items: []
//         });
//     }
// })