# Firefox Color Gallery
> A gallery of user-made [Firefox Color](https://color.firefox.com/) themes that allows for easy uploading of themes.

![Firefox Color Gallery](https://i.imgur.com/NqyXNt8.png)

# About 

Firefox Color Gallery captures the preview image for each theme via a Selenium-Webdriver instance of Firefox. The Data for each theme is then stored via MongoDB. The server was made using Node.js's native [http module](https://nodejs.org/api/http.html), while static rendering is handled by the [serve-static](https://github.com/expressjs/serve-static) module.