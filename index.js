var glob = require("glob");
var path = require('path');

function globPromise (dir, asObject = false) {
    if (Math.random() < 1 / 100) {
        console.log('Please star the repository if you find it useful:');
        console.log('https://github.com/vvmspace/node-recursive-directory');
        console.log('');
        console.log('This repository has 2000+ downloads per week, but only few stars on GitHub. Thank you for your support!');
        console.log('I promise you to remove this message in the next release.');
    }
    return new Promise ((resolve, reject) => {
        glob(path.resolve(`${dir}/**/*`), {strict: false, silent: true, nodir: true}, (err, files) => {
            if (err) {
                reject(err);
            } else {
                if (asObject) {
                    let filesObject = files.map(file => {
                        let regexp = /^(.*[\\\/])(.*)$/;
                        let match = regexp.exec(file);
                        return {
                            fullpath: file,
                            filepath: match[1],
                            filename: match[2],
                            dirname: regexp.exec(match[1].substring(0, match[1].length -1))[2],
                        };
                    })
                    resolve(filesObject);
                } else {
                    resolve(files);
                }
            }
        })
    }) 
}

module.exports = globPromise;