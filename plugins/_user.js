         const Amarok = require('../lib/events');
         const isUser = require('../lib');

         Amarok.addCMD({
                pattern: "block",
                isOwner: true,
                type: "user",
           },
           async(conn,match) => {
          
         const chatld =
             let chatld = conn.mention[0] ||
             conn.reply_message.chatld ||
             (!conn.isGroup && conn.chatld)
             if (!chatld) return await conn.sendMessage("_mention user to block_");
             await conn.sendMessage("_Blocked Successfully_");
             await conn.Block(chatld)
    
       const reactionMessage = {
           react: {
           text: "🚫",
           key: conn.key
     }
  }
await conn.sendMessage(conn.chatld, reactionMessage)
 })
 
      
