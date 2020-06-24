# node-recursive-directory
Npm package to get directory files recursively


## Usage:

### Just list of files

```js
const getFiles = require('node-resursive-directory');

(async () => {
    const files = await getFiles('/home');
    console.log(files);
})
```

### Get list of files as object with parsed data:

```js
const getFiles = require('node-resursive-directory');

(async () => {
    const files = await getFiles('/home', true); // add true
    console.log(files);
})
```

You will get something like that:

```js
  [
      ...,
      {
        fullpath: '/home/vvm/Downloads/images/Some/Some Image.jpg',
        filepath: '/home/vvm/Downloads/images/Some/',
        filename: 'Some Image.jpg',
        dirname: 'Some'
    },
  ]
```
