require('dotenv').config();
const { REST, Routes } = require('discord.js');

const commands = [
    {
        name: 'hey',
        description: 'Replies with hey!'
    }
];

const rest = new REST({ version: '10'}).setToken(process.env.TOKEN);

(async () => {
    console.log('Registrando comandos...')
    try{
        await rest.put(
            Routes.applicationGuildCommands(
                process.env.CLIENT_ID,
                process.env.GUILD_ID,
            ),
            { body : commands }
        );
    console.log('Comandos registrados')    
    }catch (error){
        console.log(`Ocurrio el siguiente error: ${error}`)
    }

    
})();