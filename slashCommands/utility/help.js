const Discord = require('discord.js')

module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName('help')
        .setDescription('Get a lot of information about our bot!'),

    /** 
    * @param {Discord.Client} client 
    * @param {Discord.CommandInteraction} interaction 
    */
    run: async (interaction, client) => {

        const helpEmbed1 = new Discord.EmbedBuilder()
            .setImage('https://media.discordapp.net/attachments/1009133130977914901/1010983610905542706/header.png?width=1201&height=444')
            .setColor('#2f3136');



        const helpEmbed2 = new Discord.EmbedBuilder()
            .setColor('#2f3136')
            .setDescription('**ABOUT DONUT:**\n> Donut is a Discord bot developed and created to introduce new users to your server. The bot has multiple features like sending messages, giving roles, welcoming users and tracking boosts.\n**HELP MENU:**\n> Everything is configurable from the website. This way it\'s easier to use and give you a pleasant experience. Don\'t know how to use the dashboard? Learn how to use our bot on [the documentation](https://docs.com) or join the [support server](https://discord.com).\n**STATS**:\n> Our bot has currently: 1 servers | 10 users!\n')



        const buttonRow = new Discord.ActionRowBuilder()
            .addComponents(
                new Discord.ButtonBuilder()
                    .setStyle('Link')
                    .setURL('https://youtube.com')
                    .setLabel('How to'),
                new Discord.ButtonBuilder()
                    .setStyle('Link')
                    .setURL('https://youtube.com')
                    .setLabel('Support'),
                new Discord.ButtonBuilder()
                    .setStyle('Link')
                    .setURL('https://youtube.com')
                    .setLabel('Invite'),
                new Discord.ButtonBuilder()
                    .setStyle('Link')
                    .setURL('https://youtube.com')
                    .setLabel('Dashboard')
            )

        interaction.reply({ embeds: [helpEmbed1, helpEmbed2], components: [buttonRow] })


    }
}