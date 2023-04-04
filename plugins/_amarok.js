//-----------------_----
//--------REPO APIS
//-----------------_----

 const  Amarok = require("../lib/events")
const axios = require("axios")

Amarok.addCMD({ pattern: "git", isOwner: false, desc: "",}, async(conn,match) => {
let { data } = await axios.get(`https://api.github.com/repos/Diegoson/AMAROK-MD`)
const buttons = [
  {buttonId: 'ping', buttonText: {displayText: 'SPEED'}, type: 1},
  {buttonId: 'alive', buttonText: {displayText: 'ALIVE'}, type: 1}
]
const buttonMessage = {
  image: {url: `https://telegra.ph/file/6086f101a36f7fc14bff6.png` },
  caption: (`Amarok\n\n🌟Stars: ${data.stargazers_count}\n\n🚦Forks: ${data.forks_count}\n\n👀Views: ${data.watchers_count}\n\n📑Language: ${data.language}\n\n🌲Branch: ${data.default_branch}\n\n💡Created At: ${data.created_at}\n\n💈Last Update: ${data.updated_at}\n\n👁️Mode: public\n\n🔗Git Link: https://github.com/Diegoson/AMAROK-MD`),
  footer: (`amarok md`),
  buttons: buttons,
  headerType: 1
}
return await conn.sendMessage(conn.chatld buttonMessage, {
 quoted: conn.data
 })
});
