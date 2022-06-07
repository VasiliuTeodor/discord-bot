require("dotenv").config();

const Discord = require("discord.js");
const client = new Discord.Client(
  { intents: ["GUILDS", "GUILD_MESSAGES"] },
  {
    partials: ["MESSAGE"],
  }
);

const BOT_PREFIX = ">";
const BOT_COMMANDS = {
  add_role: "mode-me",
};

// bot events
client.on("ready", () => {
  console.log("BB2 ready for action");
});

client.on("message", (msg) => {
  if (msg.content.toLowerCase() === "ping") {
    msg.reply("pong");
  }
  if (msg.content.toLowerCase() === `${BOT_PREFIX}${BOT_COMMANDS.add_role}`) {
    addRole(msg.member);
  }
  if (
    msg.content === "I love you, Bubi" ||
    msg.content === "I love you" ||
    msg.content === "Te iubesc"
  ) {
    msg.react("❤️");
  }
});

client.on("messageDelete", (msg) => {
  msg.channel.send(`Of, \`${msg.author.username}\` deleted their message 😔`);
});

// functions
function addRole(member) {
  member.roles.add("983667482839621652");
}

client.login(process.env.BOT_TOKEN);
