const Discord = require("discord.js");
const { name, prefix, token } = require("./config.json");
const client = new Discord.Client();

// BOT ACTIVATED

client.on("ready", () => {
    console.log("Bot successfully placed online.")
});
client.login(token);