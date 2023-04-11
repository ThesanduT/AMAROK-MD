   const Amarok = require('../lib/events');
  
   Amarok.addCMD({ pattern: 'gclose', isOwner: true, type: 'groups', },
  async(conn,match) => {

 await conn.groupSettingUpdate(conn.chatld, 'announcement');
 }
 );

 Amarok.addCMD({ pattern: 'gcopen', isOwner: true, type: 'groups', },
 async(conn,match) => {
 
 await conn.groupSettingUpdate(conn.chatld, 'not_announcement');
  }
 );
