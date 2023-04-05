const Amarok = require('../lib/events')
const axios = require("axios");
const Config = require('../config');
const { BOT_NAME, OWNER_NAME, HANDLERS } = require('../config.js');
const config = require('../config');
const pjson = require('../package.json'); 
const { runtime, getBuffer} = require('../lib/index');

Amarok.addCMD({
	pattern: 'help',
	desc: '',
	isOwner: false,
	dontAddCommandList: true 
	}, 
	async (conn, match) => {
		var CMD_HELP = '';
		var num = 1  
		Amarok.commands.map(
			async (command) =>  {
				if (command.dontAddCommandList || command.pattern === undefined) return;
				try {
					var match = command.pattern.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2]
					} catch {
						var match = [command.pattern];
						}
						var HANDLER = '';
						if (/\[(\W*)\]/.test(Config.HANDLERS)) {
							HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
							} else {
								HANDLER = Config.HANDLERS
								}
								CMD_HELP += ' + num++ ' + match + '\n' + command.desc + '\n\n'
								}
								);
								await conn.sendMessage(conn.chatId, { 
					                           image: { url: 'https://telegra.ph/file/a2c59c0a297f262976506.jpg', },
							           caption: CMD_HELP.trim(),
							           footer: `amarok`,
							           buttons: [
							          {buttonId: `${PREFIX}ping`, buttonText: {displayText: 'PING'}},
      {buttonId: `${PREFIX}alive`, buttonText: {displayText: 'ALIVE'}}
      ], 
      contextInfo: {
      	externalAdReply: {
      		title:  "AMAROK MD",
      		body: "",
      		mediaType: 2,
      		thumbnail: await getBuffer('https://telegra.ph/file/6086f101a36f7fc14bff6.png`),
      		mediaUrl: 'https://github.com/Diegoson',
      		sourceUrl: 'https://github.com/Diegoson',
      		showAdAttribution: true
                                  }
}
}, { quoted: conn.data });
});


Amarok.addCMD({
	pattern: 'menu',
	desc: '',
	isOwner: false,
	dontAddCommandList: true 
	}, 
	async (conn, match) => {
		var CMD_MENU = ''
		let games = ''
		let group = ''
		let misc = ''
		let heroku = ''
		let search = ''
		let convert = ''
		Amarok.commands.map(
			async (command) =>  {
				if (command.dontAddCommandList || command.pattern === undefined) return;
				try {
					var match = command.pattern.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2].trim()
					} catch {
						var match = [command.pattern]
						}
						var HANDLER = ''
						if (/\[(\W*)\]/.test(Config.HANDLERS)) {
							HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
							} else {
								HANDLER = Config.HANDLERS
								}
								if (command.type === 'download') {
									download += `❒✗ ${HANDLER}${match}\n┊`
									}
									if (command.type === 'group') {
										group += `❒✗ ${HANDLER}${match}\n┊`
										}
										if (command.type === 'heroku') {
											heroku += `❒✗ ${HANDLER}${match}\n┊`
											}
											if (command.type === 'search') {
												search += `❒✗ ${HANDLER}${match}\n┊`
												}
												if (command.type === 'convert') {
													convert += `❒✗ ${HANDLER}${match}\n┊`
													}
													if (command.type === 'misc' || command.type === '' || !command.type === '') {
														misc += `❒✗ ${HANDLER}${match}\n┊`
														}         
														}
														);
														CMD_MENU +=`
										
┏━━━━━⟪ ${config.BOT_NAME} ⟫━━━⦿
┃ ✗ OWNER : ${config.OWNER_NAME}
┃ ✗ PREFIX : ${config.HANDLERS}
┃ ✗ USER : ${conn.data.pushName}
┃ ✗ VERSION : ${pjson.version}
┗━━━━━━━━━━━━━━━⦿
┏━━━『 *UPDATED* 』━━━❖
╽
┃┏━━━━━━━━━━━━━◆
┣┫ *❃---- ᴄᴏɴᴠᴇʀᴛᴇʀ ----✯*
┃┗┯━━━━━━━━━━━━◆
┠┬┤
┃│   ${convert}
┃╰─────────────◆
┃
┃┏━━━━━━━━━━━━━◆
┣┫ *❃---- ᴍɪᴄs ----✯*
┃┗┯━━━━━━━━━━━━◆
┠┬┤
┃│   ${misc}
┃╰─────────────◆
┃
┃┏━━━━━━━━━━━━━◆
┣┫ *❃---- ɢᴀᴍᴇs ----✯*
┃┗┯━━━━━━━━━━━━◆
┠┬┤
┃│   ${games}
┃╰─────────────◆
┃
┃┏━━━━━━━━━━━━━◆
┣┫ *❃---- ɢʀᴏᴜᴘ ----✯*
┃┗┯━━━━━━━━━━━━◆
┠┬┤
┃│   ${group}
┃╰─────────────◆
┃
┃┏━━━━━━━━━━━━━◆
┣┫ *❃---- ʜᴇʀᴏᴋᴜ----✯*
┃┗┯━━━━━━━━━━━━◆
┠┬┤
┃│   ${heroku}
┃╰─────────────◆
┃
┃┏━━━━━━━━━━━━━◆
┣┫ *❃---- ꜱᴇᴀʀᴄʜ ----✯*
┃┗┯━━━━━━━━━━━━◆
┠┬┤
┃│   ${search}
┃╰─────────────◆
┃
┃
┗━━━━━━━━━━━╾ᐧᐧᐧᐧ⦿
`
   await conn.sendMessage(conn.chatId, {
      image: { url: 'https://telegra.ph/file/6086f101a36f7fc14bff6.png', },
      caption: CMD_MENU.trim(),
      footer: `amarok-md`,
      buttons: [
        {buttonId: `${PREFIX}ping`, buttonText: {displayText: 'SPEED'}},
      {buttonId: `${PREFIX}alive`, buttonText: {displayText: 'ALIVE'}}
    ],
    
    contextInfo: {
				externalAdReply: {
					title:  "AMAROK-MD",
					body: "",
					mediaType: 2,
					thumbnail: await getBuffer('https://telegra.ph/file/6086f101a36f7fc14bff6.png'),
					mediaUrl: 'https://amarok-deploy.vercel.app',
					sourceUrl: 'https://amarok-deploy.vercel.app',
					showAdAttribution: true
					}
				}
			}, {quoted: conn.data})																						});
