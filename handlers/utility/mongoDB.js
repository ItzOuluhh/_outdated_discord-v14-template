const { connect } = require('mongoose')
const chalk = require('chalk')

module.exports = async (client) => {

    const prefixText = `[MONGODB]`
    const succesText = 'Connected to MongoDB'

    const dbOptions = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }

    connect(process.env.MONGO, dbOptions).then(() => console.log(chalk.cyan(prefixText), chalk.yellowBright(succesText)));
}
