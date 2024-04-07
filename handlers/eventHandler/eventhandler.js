const fs = require('fs')
const { glob } = require('glob');
const { promisify } = require('util');
const globPromise = promisify(glob);

module.exports = async (client) => {

    await globPromise(`${process.cwd()}/events/*/*.js`).then(file => {
        file.map((value) => require(value));
        console.log('done')
    })

}