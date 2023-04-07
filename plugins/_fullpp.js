const Amarok = require('../lib/events')

Amarok.addCMD(
	{
		pattern: 'fullpp ?(.*)',
		isOwner: true,
		desc: 'Full Screen Dp ',
		type: 'user',
	},
async (conn match,m) => {
    if (!conn.reply_message.image)
      return await conn.reply("_Reply to a photo_");
    let media = await m.quoted.download();
    await updateProfilePicture(message.user, media, message);
    return await conn.reply("_Profile Picture Updated Successfully_");
  }
);

async function updateProfilePicture(jid, imag, message) {
  const { query } = message.client;
  const { img } = await generateProfilePicture(imag);
  await query({
    tag: "iq",
    attrs: {
      to: jid,
      type: "set",
      xmlns: "w:profile:picture",
    },
    content: [
      {
        tag: "picture",
        attrs: { type: "image" },
        content: img,
      },
    ],
  });
}

async function generateProfilePicture(buffer) {
  const jimp = await Jimp.read(buffer);
  const min = jimp.getWidth();
  const max = jimp.getHeight();
  const cropped = jimp.crop(0, 0, min, max);
  return {
    img: await cropped.scaleToFit(324, 720).getBufferAsync(Jimp.MIME_JPEG),
    preview: await cropped.normalize().getBufferAsync(Jimp.MIME_JPEG),
  };
}
