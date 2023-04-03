const { styletext, listall, tiny, isPrivate } = require("../lib/");
const Amarok = require("../lib/events");

Amarok.addCMD(
  {
    pattern: "fancy ?(.*)",
    isOwner: false,
    type: "converter",
  },
  async (conn, match) => {
    if (!conn.reply_message || !conn.reply_message.text || isNaN(match)) {
      let text = tiny(
        "Fancy text generator\n\nReply to a message\nExample: .fancy 32\n\n"
      );
      listall("Fancy").forEach((txt, num) => {
        text += `${(num += 1)} ${txt}\n`;
      });
      return await conn.reply(text);
    } else {
      conn.reply(styletext(conn.reply_message.text, parseInt(match)));
    }
  }
);
