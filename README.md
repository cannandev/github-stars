# Welcome to Fetch API Test
----

This tiny JS application features big JavaScript concepts: [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) and Promises. It returns a simple list of a user's Github repositories. The list can be filtered by the number of stars it has received (aka _stargazers_).

## About the Code
**Github Stars** is written in pure ES6 JavaScript. No jQuery or AJAX libraries. I wrote it to understand and practice the Fetch API myself.

## About the Github API
Refer to the [Github Developer Guide](https://developer.github.com/v3/) for details on how to use the API.
**Github Stars** uses their [Repos Response](https://developer.github.com/v3/repos/#response) endpoint data.

## Installation
1. Clone this repository into a local folder: `git@github.com:cannandev/github-stars.git`
1. Run `npm install` to install dependencies.
1. Run `http-server` and navigate to the available url. It defaults to `http://127.0.0.1:8080` local server.
1. You should see **Fetch API Test** in your browser.
