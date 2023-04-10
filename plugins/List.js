 const Amarok = require('../lib/events')
 const Config = require('../config')
 const config = require('../config')


 const { hostname, uptime } = require("os");
  Amarok.addCMD(
     {     pattern: "list",
           isOwner: false,
           type: "user",
    },
   async(conn,match) => {
 
  let sections = [
     {  
    title: "ᴀᴍᴀʀᴏᴋ ᴍᴇɴᴜ",
    rows: [
         {title: "「 ᴅᴏᴡɴʟᴏᴀᴅs 」", rowld: 'selfoce', description: `ғᴇᴀᴛᴜʀᴇᴅ ʙʏ ᴀᴍᴀʀᴏᴋ`},
         {title: "「 ɢʀᴏᴜᴘ ᴍᴇɴᴜ 」", rowld: 'groups', description: `ғᴇᴀᴛᴜʀᴇᴅ ʙʏ ᴀᴍᴀʀᴏᴋ`},
         {title: "「 ʟɪsᴛ ᴍᴇɴᴜ 」", rowld: 'list', description: `ғᴇᴀᴛᴜʀᴇᴅ ʙʏ ᴀᴍᴀʀᴏᴋ`},
         {title: "「 ɢᴀᴍᴇ ᴍᴡɴᴜ 」", rowld: 'games', description: `ғᴇᴀᴛᴜʀᴇᴅ ʙʏ ᴀᴍᴀʀᴏᴋ`}
    ]
 },{
     title: "ɴᴏᴛ ᴄᴏᴍᴍᴀɴᴅs",
     rows: [
           {title: "「 ᴄᴏɴᴠᴇʀᴛᴇʀ 」", rowld: 'vectors', description: `ғᴇᴀᴛᴜʀᴇᴅ ʙʏ ᴀᴍᴀʀᴏᴋ`},
           {title: "「 ᴜꜱᴇʀ ᴍᴇɴᴜ 」", rowld: 'users', description: `ғᴇᴀᴛᴜʀᴇᴅ ʙʏ ᴀᴍᴀʀᴏᴋ`},
           {title: "「 ᴛᴏᴏʟꜱ ᴍᴇɴᴜ 」", rowld: 'toolz', description: `ғᴇᴀᴛᴜʀᴇᴅ ʙʏ ᴀᴍᴀʀᴏᴋ`},
           {title: "「 ꜱᴇᴀʀᴄʜ ᴍᴇɴᴜ 」", rowld: 'searchz', description: `ғᴇᴀᴛᴜʀᴇᴅ ʙʏ ᴀᴍᴀʀᴏᴋ`},
           {title: "「 ᴏᴡɴᴇʀ ᴍᴇɴᴜ 」", rowld: 'coms', description: `ғᴇᴀᴛᴜʀᴇᴅ ʙʏ ᴀᴍᴀʀᴏᴋ`}
       ]
   },
  ]
     let [date, time] = new Date()
        .toLocaleString("en-IN", { timeZone: "Africa/Johannesburg" })
        .split(",");
 const listMessage = {
    text:`*╭───────────㋰*
*│╭──[ ${config.BOT_NAME} ]──㋰*
*││ USER : ${conn.data.pushName}*
*││ VERSION : ${pjson.version}
*│╰──㋰*
*╰───────────㋰*`
    buttonText: "ꜱᴇʟᴇᴄᴛ ϻᴇnu:)",
sections 
}
return await conn.sendMessage(conn.chatld, listMessage, { react: { text: "🫂", key: conn.key,
  quoted: conn.data
 }})
});
