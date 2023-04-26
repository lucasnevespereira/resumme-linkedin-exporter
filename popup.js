document.addEventListener("DOMContentLoaded", function () {
    const codeToExecute = `
        // Get the name element on the page
        const nameElement = document.querySelector(".pv-text-details__left-panel h1");
        
        // Get the text content of the name element
        const name = nameElement ? nameElement.textContent.trim() : "";
         
        // Send the name back to the extension
        name;
    `
    const EXPORT_BTN = document.getElementById('export-button');
    EXPORT_BTN.addEventListener('click', async () => {
        // Execute script to extract name from page
        chrome.tabs.executeScript(
            {
                code: codeToExecute
            },
            (results) => {
                // Check if the script execution was successful and the name was extracted
                if (!chrome.runtime.lastError && results && results[0]) {
                    const name = results[0];
                    alert(name);
                    // TODO: Export the name to JSON or perform any other desired action
                } else {
                    console.error(chrome.runtime.lastError);
                }

                // Close popup
                window.close();
            }
        );
    });

});