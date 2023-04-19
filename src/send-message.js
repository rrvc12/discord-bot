require('dotenv').config()
const { Client, IntentsBitField, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require ('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
});

const options = [
    {
        id: '1',
        label: 'Piedra',
        emoji: {
            name: '🪨'
        }
    },
    {
        id: '2',
        label: 'Papel',
        emoji: {
            name: '📄'
        }
    },
    {
        id: '3',
        label: 'Tijera',
        emoji: {
            name: '✂'
        }
    },
]

client.on("ready", async (c)=>{
   try {
    const channel = await client.channels.cache.get('313808042573561857')

    if(!channel) return;

    const row = new ActionRowBuilder();

    options.forEach((option) => {
        row.components.push(
            new ButtonBuilder()
            .setCustomId(option.id)
            .setLabel(option.label)
            .setStyle(ButtonStyle.Primary)
            .setEmoji(option.emoji)
        );
    });

    await channel.send({
        content: 'Elige una opción para jugar:',
        components: [row]
    });


   } catch (error) {
        console.log(error);
   }
});


client.login(process.env.TOKEN);