const Discord = require('discord.js');
const fs = require('fs');
require('dotenv').config();

const { User, Message, GuildMember, ThreadMember, Channel, GuildScheduledEvent, Reaction } = Discord.Partials;
const { Guilds, GuildMembers, GuildMessages, DirectMessageReactions, DirectMessageTyping, DirectMessages, GuildBans, GuildEmojisAndStickers, GuildIntegrations, GuildInvites,
    GuildMessageReactions, GuildMessageTyping, GuildPresences, GuildScheduledEvents, GuildVoiceStates, GuildWebhooks, MessageContent } = Discord.GatewayIntentBits;


const client = new Discord.Client({
    intents: [
        Guilds,
        GuildMembers,
        GuildMessages,
        DirectMessages,
        DirectMessageReactions,
        DirectMessageTyping,
        GuildBans,
        GuildEmojisAndStickers,
        GuildIntegrations,
        GuildInvites,
        GuildMessageReactions,
        GuildMessageTyping,
        GuildPresences,
        GuildScheduledEvents,
        GuildVoiceStates,
        GuildWebhooks,
        MessageContent
    ],
    partials: [
        User,
        Message,
        GuildMember,
        ThreadMember,
        Channel,
        GuildScheduledEvent,
        Reaction
    ],
    allowedMentions: { parse: ['roles', 'users'] }
});
module.exports = client;

client.slashCommands = new Discord.Collection();

const handlerFolders = fs.readdirSync(`./handlers`);
for (const folder of handlerFolders) {
    const handlerFiles = fs.readdirSync(`./handlers/${folder}`).filter((file) => file.endsWith('.js'));
    for (const file of handlerFiles) require(`./handlers/${folder}/${file}`)(client);
};


client.login(process.env.TOKEN);