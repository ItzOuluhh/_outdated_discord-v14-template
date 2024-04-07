const { glob } = require('glob');
const { promisify } = require('util');
const globPromise = promisify(glob);
const chalk = require('chalk');

module.exports = async (client) => {

    const slashCommands = await globPromise(`${process.cwd()}/slashCommands/*/*.js`);

    const arrayOfSlashCommands = [];

    slashCommands.map((value) => {

        const file = require(value);
        const splitted = value.split('/')
        const directory = splitted[splitted.length - 2]

        if (file.data.name) {
            const propeties = { directory, ...file }
            client.slashCommands.set(file.data.name, propeties);

        }

        arrayOfSlashCommands.push(file.data);

    });
    console.log(chalk.cyan(`[INTERACTION-COMMANDS]`), chalk.green('Loaded Succesfully ✅'))

    client.on('ready', async () => {

        await client.application.commands.set(arrayOfSlashCommands);

    });

}