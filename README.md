# Resumme-linkedin-exporter

## Overview

🚧 Work in Progress Chrome extension to export resume data from LinkedIn.

## Structure

The project follows the following structure:

- `extension/popup`: Contains the code related to the popup UI of the extension.
- `extension/sw`: Contains the service worker code responsible for background tasks and offline support.
- `src/index.js`: Entry point for the extension where modifications related to the DOM are added.

## Build

To build the extension, follow these steps:

1. Install dependencies: Run `npm install` to install the required dependencies.
2. Make modifications: Update the `src/index.js` file to include the necessary DOM modifications for your extension.
3. Build the extension: Run `npm run build` to compile and minify the code using Vite. The compiled extension will be
   generated in the `extension/scripts/content.js` file.
4. Load the extension in Chrome: Open the Chrome browser and navigate to `chrome://extensions`. Enable the "Developer
   mode" toggle and click on "Load unpacked". Select the `extension` directory to load the extension into Chrome.



