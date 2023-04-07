

const {
  fromBuffer,
  getBuffer,
  getJson,
  parseJid,
  runtime,
  mUrl,
  getRandom,
  checkWAVersion,
  fetchText,
  mYtld,
  webp2mp4File,
  Amarok,
} = require("../lib/");
const util = require("util");
const config = require("../config");

Amarok.addCMD({pattern:'eval', on: 'text', isOwner: true,desc :'Runs a server code'}, async (conn, match, m, client) => {
  if (conn.startsWith(">")) {
  if(!conn) return await message.sendMessage("𝐔𝚴𝐅𝚯𝚪𝚻𝐔𝚴𝚫𝚻𝚵𝐋𝐘 𝚻𝚮𝚰𝐒 𝐂𝐃𝚳 𝚰𝐒 𝐅𝚯𝚪 𝚯𝐖𝚴𝚵𝚪");
    //const m = message;
    try {
      let evaled = await eval(`${match.replace(">", "")}`);
      if (typeof evaled !== "string") evaled = require("util").inspect(evaled);
      await conn.reply(evaled);
    } catch (err) {
      await conn.reply(util.format(err));
    }
  }
});

