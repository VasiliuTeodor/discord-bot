module.exports = {
  commands: "giverole",
  minArgs: 2,
  expectedArgs: "<Target user's @> <The role name>",
  permissions: "admin",
  callback: (message, arguments) => {
    const targetUser = message.mentions.users.first();

    if (!targetUser) {
      message.reply("Please specify someone to give a role to.");
      return;
    }

    arguments.shift();

    const roleName = arguments.join("");
    const { guild } = message;

    const role = guild.roles.cache.find((role) => {
      return role.name === roleName;
    });
    if (!role) {
      message.reply(`There is no role with the name "${roleName}"`);
    }

    console.log("Made it this far");
  },
};
