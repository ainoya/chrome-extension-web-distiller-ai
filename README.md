# Web Distiller AI - Chrome Extension

![demo image](./images/demo-web-distiller-ai-chrome-extension.gif)

This Chrome extension provides a summary of web page contents using the built-in Gemini Nano model. It is implemented with React and offers secure in-browser summarization without sending content to external networks.

## Features

- Summarizes the content of the currently viewed web page.
- Uses Gemini Nano for summarization.
- Summarization options include translation into English or Japanese.
- Provides a popup menu to execute summarization.
- Extracts the main content of the web page using Readability.
- Converts extracted content to markdown format using Turndown.
- Calls Gemini Nano via `window.ai` for summarization.
- Translates the summary into the selected language if the translate option is set to a language other than English.
- Outputs the summary in a text area within the popup menu, including a markdown-formatted link with the title and URL, and a button to copy the summary to the clipboard.

## Requirements

- Using Chrome Canary Release.
- Enabling the built-in Gemini Nano in Chrome.

## Build and Install

1. Clone this repository:

    ```bash
    git clone https://github.com/yourusername/web-distiller-ai.git
    cd web-distiller-ai
    ```

2. Install dependencies and build the extension:

    ```bash
    npm install
    npm run build
    ```

3. Alternatively, you can use the pre-built `dist.zip` from the releases:
    - Download it from [here](https://github.com/ainoya/chrome-extension-web-distiller-ai/releases/latest).

4. Load the extension into Chrome:

    - Open Chrome and navigate to `chrome://extensions/`.
    - Enable "Developer mode" in the top right corner.
    - Click "Load unpacked" and select the `dist` directory from this repository or the extracted `dist.zip`.

## Limitations

- Summarization extracts content from the beginning of the page to avoid exceeding the context length limitation of Gemini Nano. Full-text summarization is not currently supported.
- Future improvements will include chunking the full page content for multiple summarization passes and combining the results.

## References

- [explainers-by-googlers/prompt-api: A proposal for a web API for prompting browser-provided language models](https://github.com/explainers-by-googlers/prompt-api)
- [Web Distiller AI: A Chrome Extension for Summarizing Web Pages](https://ainoya.dev/posts/web-distiller-ai-chrome-extension/): My blog post about this project.
