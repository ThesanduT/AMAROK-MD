  const Amarok = require('../lib/events');
  const { getBuffer } = require('../lib');
  


                           Amarok.addCMD({ pattern: "glitchtext", isOwner: false, desc: "logo maker", type: "logomaker", }, async(conn, match, text) => { if(!conn) await conn.reply("_need name_");
                                                        var webimage = await getBuffer(`https://api.ibeng.tech/api/photooxy/glitch?text=${conn}Revita&text2=cans&apikey=tamvan`); await conn.sendMessage(webimage, {}, "image"
             );
      }
 );
