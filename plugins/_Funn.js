const { dare, truth, random_question } = require('../lib/truth-dare.js')
const axios = require('axios')
const Amarok = require('../lib')

 //---------------------------------------------------------------------------
 //------TRUTH GAME
 //---------------------------------------------------------------------------

Amarok.addCMD({
            pattern: "truth",
            isOwner: false,
            desc: "truth game",
            
        },
        async(conn, match, text) => {
            return await conn.reply(`${truth()}`);
        }
    )
    //---------------------------------------------------------------------------
    //---------DARE GAME
    //---------------------------------------------------------------------------

 Amarok.addCMD({
            pattern: "dare",
            isOwner: false,
            desc: "dare same as the truth",
        },
        async(conn, match, text) => {
            return await conn.reply(`${dare()}`);
        }
    )
   
 //---------------------------------------------------------------------------
 //-----------FACT GAME 
 //---------------------------------------------------------------------------

Amarok.addCMD({
        pattern: "fact",
        isOwner: false,
        desc: "fact on everything",
        
    },
    async(conn, match, text) => {
        const { data } = await axios.get(`https://nekos.life/api/v2/fact`)
        return conn.reply(`*Fact:* ${data.fact}\n\n*Powered by Amarok*`)   
    }
  )
 //---------------------------------------------------------------------------
//-----------QUOTES
//---------------------------------------------------------------------------

Amarok.addCMD({
        pattern: "quotes",
        isOwner: false,
        desc: "Sends quotes in chat.",
    },
    async(conn, match, text) => {
        var quoo = await axios.get(`https://favqs.com/api/qotd`)
        const replyf = `
╔════◇
║ *🎗️Content:* ${quoo.data.quote.body}
║ *👤Author:* ${quoo.data.quote.author}
║    
╚════════════╝ `
return conn.reply(replyf)
    }

)
    
 //---------------------------------------------------------------------------
//-----------QUOTES
//---------------------------------------------------------------------------

Amarok.addCMD({
            pattern: "question",
            isOwner: false,
            desc: "Random Question.",
        },
        async(conn, match, text) => {
            return await conn.reply(`${random_question()}`);
        }
    )
