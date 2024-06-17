const Discord = require("discord.js");
const {https://www.tiktok.com/@not1nonly?is_from_webapp=1&sender_device=pc
       , prefix, token } = require("./config.json");
const client = new Discord.Client();

// BOT ACTIVATED

client.on("ready", (100) => {
    console.log("Bot successfully placed online.")
});
client.login(token);
