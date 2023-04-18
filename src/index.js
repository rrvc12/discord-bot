require('dotenv').config()
const { Client, IntentsBitField } = require ('discord.js');


const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
});

client.on("ready", (c)=>{
    console.log(`${c.user.tag} se encuentra en línea.`)
});

client.on("messageCreate", (message)=>{
    if(message.content.toLowerCase() === "hola"){
        message.reply(`Hola ${message.author.name}`)
    }
});

client.login(process.env.TOKEN);