require('dotenv').config();


const Discord = require('discord.js')
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })
const PREFIX = ".";

client.once("ready", () => {
    console.log(`${client.user.tag} is ready!`);
    client.user.setPresence({
      status: "Online",  //You can show online, idle....
      game: {
          name: ".help",  //The message shown
          type: "PLAYING" //PLAYING: WATCHING: LISTENING: STREAMING:
      }
  });
});

client.on("message", msg => {
  if (msg.channel.id === '893668431629533234') return

  if (msg.content.includes("https://")) {
    client.channels.cache.get("893668431629533234").send(`${msg.guild.name} \\|\\| ${msg.author.tag.toString()}:  [*Message.Discord.Link*]`);
    console.log(`${msg.guild.name} || ${msg.author.tag.toString()}: ${msg.content}`)
    return
  }

  if (msg.attachments.size > 0) {
    client.channels.cache.get("893668431629533234").send(`${msg.guild.name} \\|\\| ${msg.author.tag.toString()}: ${msg.content} [*File.Discord.Attachment*]`);
    console.log(`${msg.guild.name} || ${msg.author.tag.toString()}: ${msg.content} [File.Discord.Attachment]`)
    return
  }
  if (msg.content.length <= 0 ) {
    client.channels.cache.get("893668431629533234").send(`${msg.guild.name} \\|\\| ${msg.author.tag.toString()}: [*Undefined*]`);
    console.log(`${msg.guild.name} || ${msg.author.tag.toString()}: [Undefined]`)
    return
  }
    client.channels.cache.get("893668431629533234").send(`${msg.guild.name} \\|\\| ${msg.author.tag.toString()}: ${msg.content}`);
    console.log(`${msg.guild.name} || ${msg.author.tag.toString()}: ${msg.content}`)
})

client.on("message", msg => {
  if (msg.author.bot) return
  if (msg.content.startsWith(PREFIX)) {
    const [CMD_NAME, ...args] = msg.content
      .trim()
      .substring(PREFIX.length)
      .split(/\s+/);
      if (CMD_NAME === "kick") {
        /*if (!msg.member.hasPermission('KICK_MEMBERS')) 
          msg.reply('You do not have the permissions to preform this command.')*/
        if (args.length === 0) {
          msg.channel.send("You must include a user to kick.")
          return
        }
      const member = msg.guild.members.cache.get(args[0]);
      if (member) {
        member.kick()
        .then(msg.channel.send(`Kicked the user: ${member}`))
        .catch((err) => msg.channel.send('I do not have the correct permissions. Try giving me the kick members permission, or my role is not high enough.'))
        return
      } else {
        msg.channel.send("User not found")
        return
      }
    } else if (CMD_NAME === 'ban') {
      msg.channel.send('This is a test command is doesnt do anything yet.')
      msg.channel.send('Banned ${member}')
    }
  }
    /*if (msg.content === ".command") {
     msg.channel.send("This is the Wolfie bot.")
    }*/
})

client.on("message", msg => {
  if (msg.author.bot) return

  if (msg.content === ".hi") {
    msg.channel.send(`Hi ${msg.author.toString()}! I am the Wolfie bot.`)
  }
})

client.on("message", msg => {
  if (msg.author.bot) return

  if (msg.content === ".talson") {
    msg.channel.send(`WHERE DE FOOK IS HE????? <@802296430316355625>! <@802296430316355625>!!`)
  }
})

client.on("message", msg => {
  if (msg.author.bot) return

  if (msg.content === ".help") {
   msg.channel.send("list of commands:\n\n`.command` - this is a test command.\n`.hi` - say hi to the bot.\n`.talson` - relizes talson isn't there (made by Eli)\n`.meme *` - sends a meme (made by Eli)\n`.rickroll` - rickrolls everybody (made by Eli)\n`.omg` - OMG!!1!1 (made by Eli)\n`.kick` - kicks a user \\|\\| this command is very expirimental and may not work.\n`.plum-ping` - pings eli")
  }
})

client.on("message", msg => {
  if (msg.author.bot) return

  if (msg.content === ".meme confidence-pills") {
    msg.delete(msg.author.toString)
    msg.channel.send({files: ["https://cdn.discordapp.com/attachments/802226839983751189/893596856687407184/unknown.png"]})
  }
})

client.on("message", msg => {
  if (msg.author.bot) return

  if (msg.content === ".meme confidence-pills-2") {
    msg.delete(msg.author.toString)
    msg.channel.send({files: ["https://cdn.discordapp.com/attachments/802226839983751189/893598002827124786/unknown.png"]})
  }
})

client.on("message", msg => {
  if (msg.author.bot) return

  if (msg.content === ".meme gay") {
    msg.delete(msg.author.toString)
    msg.channel.send({files: ["https://cdn.discordapp.com/attachments/802226839983751189/893598988350160916/unknown.png"]})
  }
})

client.on("message", msg => {
  if (msg.author.bot) return

  if (msg.content === ".meme funi") {
    msg.delete(msg.author.toString)
    msg.channel.send({files: ["https://cdn.discordapp.com/attachments/893591777704042520/893894059872120842/haha_funny_image.png"]})
  }
})

client.on("message", msg => {
  if (msg.author.bot) return
  if (msg.content === ".meme gay-2") {
    msg.delete(msg.author.toString)
    msg.channel.send({files: ["https://cdn.discordapp.com/attachments/802226839983751189/893606273482891305/unknown.png"]})
  }
})

client.on("message", msg => {
  if (msg.author.bot) return
  if (msg.content === ".omg") {
    msg.delete(msg.author.toString)
    msg.channel.send({files: ["https://cdn.discordapp.com/attachments/806181136857956372/893892832673292309/unknown-2.png"]})
  }
})

client.on("message", msg => {
  if (msg.author.bot) return
  if (msg.content === ".rickroll") {
    msg.delete(msg.author.toString)
    msg.channel.send({files: ["https://cdn.discordapp.com/attachments/802226839983751189/893893782452457512/unknown.png"]})
  }
})
client.on("message", msg => {
  if (msg.author.bot) return
  if (msg.content === ".pp <@757618874421084243>"){
    msg.channel.send('8==============================================================================================================================D')
    return
}   else if (msg.content === ".pp"){
    const SIZE_CHAR = "="
    var size = Math.floor(Math.random() * 100) + 1;
    msg.channel.send(`8${SIZE_CHAR.repeat(size)}D`)
  }
})
client.on("message", msg => {
  if (msg.author.bot) return
  
  if (msg.content === ".plum-ping") {
    msg.channel.send(`<@798976785563648080>`)
    }
})
client.on("message", msg => {
  if (msg.author.bot) return
  
  if (msg.content.includes("no u")) {
    if (!msg.guild.members.cache.get('802296430316355625')) {
      msg.channel.send(`hey thats talson's line`)
    }
  }
})
/*client.on("message", msg => {
  if (msg.author.bot) return

  if (msg.content === "!leaveWolfie") {
    toleave = client.get_server("806181136430661632")
    await client.leave_server(toleave)
  }
})*/

client.login(process.env.DISCORDJS_BOT_TOKEN);
