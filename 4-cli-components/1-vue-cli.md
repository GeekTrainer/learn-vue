The Vue CLI (command line interface) provides a suite of tools for development including project scaffolding, a development server, and rapid prototyping. It allows you to quickly create a starter application so you can focus on coding, not on configuring libraries and other settings.

## Bootstrapping

The core feature of Vue CLI is to bootstrap an application. The *create* script provides a wizard which allows you to select from some of the most common configurations, including

- Linting options
- Application type
- Babel support
- Language - JavaScript or TypeScript

## Build process

Vue CLI is designed to work with single-file Vue components, or *.vue* files. *.vue* files use a special syntax which is unreadable to browsers, and needs to be converted into the appropriate JavaScript, HTML and CSS. This process is managed by a *module bundler* or *bundler*. Vue CLI uses [webpack](https://webpack.js.org/) as its default bundler, and includes a default configuration which will work for most scenarios. By using Vue CLI we can skip the steps required for configuring a bundler and instead use the setup provided.

## Development server

Developing any type of application requires trial and error. You will make a few changes, load the page in the browser to test it, make a few more changes, and repeat this process until everything behaves as you expect. We want to minimize the number of steps involved in this process. To streamline development, Vue CLI includes a development server. Each time you save a file, the development server will detect file changes, rebuild (or re-bundle) the project, and allow you to test the page in the browser.
