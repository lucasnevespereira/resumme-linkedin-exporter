const btnExportData = document.querySelector("#export-btn");

const tab = await getCurrentTab();

btnExportData.addEventListener("click", async () => {
    console.log(tab)
    const response = await chrome.tabs.sendMessage(tab.id, {action: "EXPORT"});
    console.log(response)
});

async function getCurrentTab() {
    const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
    return tab;
}