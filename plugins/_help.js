const Amarok = require('../lib/events');
const Config = require('../config');
const pjsom = require('../package.json');

Amarok.addCMD({
	pattern: 'help',
	desc: '',
	isOwner: false,
	dontAddCommandList: true 
	}, 
	async (conn, match) => {
	
  var CMD_HELP = `

*◯──[ HEROKU MENU ]──◯*

╭⛒ *USER*: ${conn.data.pushName}
├⛒ *MODE*: ${Config.WORKTYPE}
╰⛒ *VERSION*: ${pjson.version}						await conn.sendMessage(conn.chatId, { 
				
*Dyno*
*setsudo*
*getsudo*
*delsudo*
*getvar*
*setvar*
*shutdown*
*restart*
*allvar*
*update*
*update now*
`

   await conn.sendMessage(conn.chatld, {
	                                                           image: { url: 'https://i.ibb.co/yskjc2Q/0e24566a0b06.jpg', },
							           caption: CMD_HELP.trim(),							           footer: `amarok`,
							           caption: 'amarok',
   }
 );
