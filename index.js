const { Client } = require('discord.js');

const client = new Client();
require('./handlers/events').init(client);

client.login(require('./config.json').token);
