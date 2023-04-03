const Bot = require('../lib/events');
Amarok.addCMD(
	{
		pattern: 'jid$',
		desc: 'get user/group jid',
		isOwner: false,
		type: 'misc'
},
async (conn, match) => {
	await conn.reply(conn.chatId)		
	});

Amarok.addCMD(
	{
		pattern: 'gjid$',
		desc: 'gets jid of all group members',
		isOwner: false,
		type: 'group'
},
async (conn, match) => {
	if (!conn.chatId.includes("@g.us"))
        return await conn.reply("Only works in groups.")
	let { participants } = await conn.groupMetadata(conn.chatId);
	let participant = participants.map((u) => u.id);
	let str = "┌─────〔 ɢᴊɪᴅ ɴ 〕\n";
	participant.forEach((result) => {
		str += `┊ ${result}\n`;
		});
		str += `└──────────────𔒝`;
		conn.reply(str);	
	});

Amarok.addCMD(
	{
		pattern: 'leave',
		desc: 'leave a group',
		isOwner: true,
		type: 'group'
},
async (conn, match) => {
	if (!conn.chatId.includes("@g.us")) 
	return await conn.reply("Only works in groups.")
	await conn.groupLeave(conn.chatId)
	});
