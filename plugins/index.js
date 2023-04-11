const Amarok = require('../lib/events');
const fs = require("fs");
const { runtime, getBuffer} = require('../lib/index');

Amarok.addCMD(
	{
		pattern: 'ping',
		isOwner: false,
		desc: "Measures your ping.", 
		type: 'misc'
},
async (conn, match) => {
	var start = new Date().getTime();
	await conn.sendMessage(conn.chatId, {text:'Ꮪᴘᴇᴇᴅ Sᴘᴏʀᴛɪɴɢ'});
	var end = new Date().getTime();
	await conn.reply('GeττᎥng ' + (end - start) + 'ᴍs');
         
 await conn.sendMessage(conn.chatld, { react: { text: '😎', key: conn.key 
					       }});

Amarok.addCMD(
	{
		pattern: 'runtime', 
		desc: 'Bot runtime',
		isOwner: false,
		type: 'misc'
},
async (conn, match) => {
	await conn.reply(runtime(process.uptime()))
 
const reactionMessage = {
         react: {
         text: "♻",
         key: conn.key
   }
 }
 await conn.sendMessage(conn.chatld, reactionMessage)
	});
