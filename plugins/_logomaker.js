  const Amarok = require('../lib/events');
  const { getBuffer } = require('../lib');
  


                           Amarok.addCMD({ pattern: "glitchtext", isOwner: false, desc: "logo maker", type: "logomaker", }, async(message, match, text) => { match = match [1] || message.reply_msg  if(!match) return await message.reply("_need name_");
                                                        var webimage = await getBuffer(`https://api.ibeng.tech/api/photooxy/glitch?text=${match}Revita&text2=cans&apikey=tamvan`); await message.sendMessage(webimage, {}, "image"
             );
      }
 );
