# Node Recursive Directory

[![npm version](https://img.shields.io/npm/v/node-recursive-directory)](https://www.npmjs.com/package/node-recursive-directory) [![downloads](https://img.shields.io/npm/dm/node-recursive-directory)](https://www.npmjs.com/package/node-recursive-directory)

Unlock the power of **Node.js** with `Node Recursive Directory` — your ultimate solution for seamless directory traversal. Whether you're building complex file systems, developing static site generators, or just need a robust way to manage files, this package delivers unmatched simplicity, speed, and reliability.

## Why `Node Recursive Directory` is a Must-Have

Imagine a tool so intuitive, yet powerful, that it transforms the way you handle file operations. With just a few lines of code, `Node Recursive Directory` allows you to:

-   **Effortlessly Traverse Directories**: Say goodbye to the tedious task of manually scanning folders. This tool does it all for you, diving deep into nested directories and delivering exactly the files you need.
-   **Flexible and Customizable**: Whether you need simple file paths or detailed file objects, `Node Recursive Directory` adapts to your needs. Filter by extension, exclude directories, and handle large file sets without breaking a sweat.
-   **Built for Modern Development**: Designed with promises and async/await in mind, this package integrates seamlessly into your Node.js projects, allowing you to focus on building, not debugging.

## Installation

Get started in seconds. Install via npm:

```bash
npm install node-recursive-directory
```

Or yarn:

```bash
yarn add node-recursive-directory
```

## Usage

### Simple and Powerful

#### Using Promises

```javascript
const scanDirectory = require("node-recursive-directory");

scanDirectory("./path/to/dir")
    .then((files) => console.log(files))
    .catch((err) => console.error(err));
```

#### Using async/await

```javascript
const scanDirectory = require("node-recursive-directory");

(async () => {
    try {
        const files = await scanDirectory("./path/to/dir");
        console.log(files);
    } catch (err) {
        console.error(err);
    }
})();
```

### Detailed File Information

Need more than just file paths? Get detailed file info with a simple switch.

#### Using Promises

```javascript
const scanDirectory = require("node-recursive-directory");

scanDirectory("./path/to/dir", true)
    .then((filesObject) => console.log(filesObject))
    .catch((err) => console.error(err));
```

#### Using async/await

```javascript
const scanDirectory = require("node-recursive-directory");

(async () => {
    try {
        const filesObject = await scanDirectory("./path/to/dir", true);
        console.log(filesObject);
    } catch (err) {
        console.error(err);
    }
})();
```

## Example

```javascript
const scanDirectory = require("node-recursive-directory");

// Example: Get detailed file information
(async () => {
    try {
        const filesObject = await scanDirectory("./my-project", true);
        filesObject.forEach((file) => {
            console.log(
                `Found file: \${file.filename} in directory: \${file.dirname}`
            );
        });
    } catch (err) {
        console.error("Error:", err);
    }
})();
```

## Join Our Growing Community

`Node Recursive Directory` isn't just a tool—it's part of a vibrant, growing community of developers who demand efficiency, flexibility, and performance in their projects. With over 2000+ weekly downloads, developers like you are choosing this package for its simplicity and power.

But here's the thing—despite its popularity, our GitHub repository is missing something **crucial**: **your star**.

### Why Should You Star This Project?

-   **Support Continuous Improvement**: By starring this project, you’re helping to fuel ongoing development and updates. Every star is a vote of confidence that motivates us to keep improving.
-   **Be Part of the Journey**: Early stargazers are special. You’re not just a user; you’re part of a journey towards building better tools for the community.
-   **Help Others Discover**: Your star increases the visibility of the project, helping others discover a tool that can save them time and effort.

### A Special Request

We understand that starring a project on GitHub is a simple action, but it means the world to us. If `Node Recursive Directory` has made your work easier or saved you time, please consider giving us a star.

We promise to continue delivering quality updates, listening to your feedback, and making `Node Recursive Directory` even better with each release.

[**Star the Repository on GitHub**](https://github.com/vvmspace/node-recursive-directory)

Thank you for your support!

## Contributions

Contributions are always welcome! If you have ideas for new features, improvements, or just want to report an issue, head over to our [GitHub repository](https://github.com/vvmspace/node-recursive-directory). Let's build something great together!
