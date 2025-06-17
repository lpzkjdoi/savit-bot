const { Client, Events, GatewayIntentBits } = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();

const token = process.env.DISCORD_TOKEN
const testChannelId = process.env.TEST_CHANNEL_ID;

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, readyClient => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`);
    const channel = client.channels.cache.get(testChannelId);
    channel.send(`Logged in as ${readyClient.user.tag}`);
});

client.login(token);