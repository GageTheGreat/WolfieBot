require('dotenv').config();

const Discord = require('discord.js')
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })


client.once("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
    if (msg.author.bot) return

    if (msg.content === "$command") {
     msg.channel.send("This is the Hab1b1 Clan bot.")
    }
  })

client.on("message", msg => {
  if (msg.author.bot) return

  if (msg.content === "$hi") {
    msg.channel.send(`Hi ${msg.author.toString()}! I am the Hab1b1 bot.`)
  }
})

client.on("message", msg => {
  if (msg.author.bot) return

  if (msg.content === "$help") {
   msg.channel.send("list of commands:\n\n`$command` - this is a test command.\n`$hi` - say hi to the bot.")
  }
})

  

client.login(process.env.DISCORDJS_BOT_TOKEN);
