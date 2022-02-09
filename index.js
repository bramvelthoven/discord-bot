require('dotenv').config();

const { Client, Intents, Discord, Channel, MessageEmbed } = require('discord.js');
// const welcome = require('./welcome');
// const jsonfile = require('jsonfile');
// const ROLE_GOLD =  '913538796321128549';
// const ROLE_PLATINUM = '913538693539692594';
// const ROLE_DIAMOND = '913538862716952627';


const prefix = '-';
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES], partials:["CHANNEL","MESSAGE","REACTION"]});
const fs = require('fs');

// client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))
//  
client.on('ready', () =>{
  console.log(`Logged in as ${client.user.tag}!`)
  client.user.setPresence('do not disturb')

    // welcome(client)
    
});
const embed = new Discord.MessageEmbed()
  /*
   * Alternatively, use "#3498DB", [52, 152, 219] or an integer number.
   */
  .setColor(0x3498DB)
  .setAuthor("Author Name, it can hold 256 characters", "https://i.imgur.com/lm8s41J.png")
  .setTitle("This is your title, it can hold 256 characters")
  .setURL("https://discord.js.org/#/docs/main/stable/class/MessageEmbed")
  .setDescription("This is the main body of text, it can hold 4096 characters.")
  .setImage("http://i.imgur.com/yVpymuV.png")
  .setThumbnail("http://i.imgur.com/p2qNFag.png")
  .addField("This is a single field title, it can hold 256 characters", "This is a field value, it can hold 1024 characters.")
  /*
   * Inline fields may not display as inline if the thumbnail and/or image is too big.
   */
  .addFields(
    { name: "Inline fields", value: "They can have different fields with small headlines, and you can inline them.", inline: true },
    { name: "Masked links", value: "You can put [masked links](https://discord.js.org/#/docs/main/master/class/MessageEmbed) inside of rich embeds.", inline: true },
    { name: "Markdown", value: "You can put all the *usual* **__Markdown__** inside of them.", inline: true }
  )
  /*
   * Blank field, useful to create some space.
   */
  .addField("\u200b", "\u200b")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setFooter("This is the footer text, it can hold 2048 characters", "http://i.imgur.com/w1vhFSR.png");
  /*
   * With Discord now allowing messages to contain up to 10 embeds, we need to put it in an array.
   */
  message.channel.send({ embeds: [embed] });

client.on('message', message =>{
  if(!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const commands= args.shift().toLowerCase();

  if(command === 'ping'){

  }
})

// var stats = {}; 
// if (fs.existsSync('./data/stats.json')) { 
// stats = jsonfile.readFileSync('./data/stats.json');
// }

// client.on('message', (message) => {
//   if (message.author.id == client.user.id)
//    return;
// if(message.guild.id in stats === false) { 
//   stats[message.guild.id] = {}
// } 

// const guildStats = stats[message.guild.id];
// if (message.author.id in guildStats === false) { 
//   guildStats[message.author.id] = { 
//     xp: 0,
//     level: 0,
//     last_message: 0
//   };
// }

// const userStats = guildStats[message.author.id];
// if (Date.now()-userStats.last_message > 5000) {

// userStats.xp += random.int(15, 25); 
// userStats.last_message = Date.now();

// const xpToNextLevel = 5 * Math.pow(userStats.level, 2) + 50 * userStats.level + 100;
// if (userStats.xp >= xpToNextLevel) { 
//   userStats.level++;
//   if(userStats.level >= 5){
//     message.guild.members.cache.get(message.author.id).roles.add(ROLE_GOLD);
//   }
//   else if (userStats.level >= 10){ 
//     message.guild.members.cache.get(message.author.id).roles.add(ROLE_PLATINUM);
//   }
//   else if (userStats.level >= 15){ 
//     message.guild.members.cache.get(message.author.id).roles.add(ROLE_DIAMOND);
//   }
//   userStats.xp = userStats.xp - xpToNextLevel;
//   message.channel.send(message.author.username + ' has reached level ' + userStats.level)
// }

// jsonfile.writeFileSync('./data/stats.json', stats);  


// console.log(message.author.username + ' now has ' + userStats.xp);
// console.log(xpToNextLevel + 'xp needed for next level');
// }
//     const parts = message.content.split(' ');

//     if(parts[0] === '!hello'){ 
//         message.reply('hi');
//     }

// }); 

// client.on('guildMemberAdd', guildMember =>{
//   let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'gamer');

//   guildMember.roles.add(welcomeRole)
// });




// Als laatst
client.login(process.env.TOKEN);





