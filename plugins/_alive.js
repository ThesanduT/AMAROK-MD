const Amarok = require('../lib/events')
const Config = require('../config')
const { OWNER_NAME, HANDLERS, BOT_NAME } = require('../config.js')
const pjson = require('../package.json')
const { hostname, uptime } = require('os')
const { runtime, getBuffer } = require('../lib/index')

Amarok.addCMD({
         pattern: 'alive',
         isOwner: false,
         desc: '',
   },
   async(conm,match) => {
   
   let [date, time] = new Date()
      .toLocaleString("en-IN", { timeZone: "Africa/Johannesburg" })
      .split(",");
  CMD_ALIVE += `
 

 *🚦Botname: ${BOT_NAME}
 *🕸Version: ${pjson.version}
 *👤Owner: ${OWNER_NAME}
 *🎗Prefix: ${HANDLERS}
 *🏅Useer: ${conn.data.pushName}
 *🚦Working hours: ${clockString (uptime())}
`

await conn.sendMessage(conn.chatId, {
      image: { url: 'https://i.ibb.co/6yVCHcL/38aa5206e8bc.jpg', },
      caption: CMD_MENU.trim(),
      footer: `amarok-md`,
      buttons: [
        {buttonId: `${PREFIX}menu`, buttonText: {displayText: 'MENU'}},
      {buttonId: `${PREFIX}ping`, buttonText: {displayText: 'PING'}}
    ],
    
    contextInfo: {
				externalAdReply: {
					title:  "AMAROK-MD",
					body: "",
					mediaType: 2,
					thumbnail: await getBuffer('https://i.ibb.co/6yVCHcL/38aa5206e8bc.jpg'),
					mediaUrl: 'https://amarok-deploy.vercel.app',
					sourceUrl: 'https://amarok-deploy.vercel.app',
					showAdAttribution: true
					}
				}
			}, {quoted: conn.data})	});
