//---------------------_-------
//-------NEW UPDATE
//---------------------_-------
                                 const Amarok = require('../lib/events');
                                 const {
                                 translate
                                 } = require('@vitalets/google-translate-api');
               const defaultLang = 'en'

     Amarok.addCMD(
      {
      pattern: "tr",
      isOwner: false,
      desc: "Chat Gpt Chat feture",
      type: "user",
      dontAddCommandList: true,
      },
   async (conn, match) => {

      // if (!match || !m.quoted.text)  await conn.sendMessage(`📌 *Example:*\n\n*tr* <lang> [text]\n*tr* ar Hello World`)

      let args = conn.split(' ')
      let lang = args[0]
      let text = args.slice(1).join(' ')
      if ((args[0] || '').length !== 2) {
         lang = defaultLang
         text = args.join(' ')
      }
      if (!text && m.quoted && m.quoted.text) text = m.quoted.text

      let result = await translate(text, {
         to: lang,
         autoCorrect: true
      }).catch(_ => null)
      conn.sendMessage(result.text)

   })
