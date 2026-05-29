
# VS Code Extensions 
👉  Tailwind CSS IntelliSense
    <!-- Tailwind Labs tailwindcss.com -->

# Tailwind CSS Configuration in the project

    ``` Bash
        npm install -D tailwindcss postcss autoprefixer
    ```

## Then initialize Tailwind

    ``` Bash
        npx tailwindcss init -p
    ```
👉 The -p flag creates both tailwind.config.js and postcss.config.js.

## Configure Tailwind

    ``` Js
        /** @type {import('tailwindcss').Config} */
        module.exports = {
            content: [
                "./src/**/*.{html,ts}"
            ],
            theme: {
                extend: {},
            },
            plugins: [],
        }
    ```

## Add Tailwind Directives
👉 In your global stylesheet (src/styles.scss or styles.css), add:

    ``` css
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
    ```

## Verify PostCSS Config
👉  Your postcss.config.js should look like this:

    ``` Js
        module.exports = {
            plugins: {
                tailwindcss: {},
                autoprefixer: {},
            }
        }
    ```

# Built‑in OS emoji picker (Direct copy and paste)

[Emojipedia](https://emojipedia.org/) → Browse and copy emojis.

[GetEmoji](https://getemoji.com/) → Quick copy‑paste.
