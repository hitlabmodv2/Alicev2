//————————————————————————//

/*

Base XyrooRynzz
Powered By Alice Assistent
© XyrooRynzz 2022 - 2026

Source :
- WhatsApp : https://wa.me/6281543496975
- Telegram : https://t.me/XyrooRynzz
- instagram : https://instagram.com/biionlyyone
- WhatsApp Channel: https://whatsapp.com/channel/0029VaagYHwCnA82hDK7l31D

*/

//————————————————————————//
require('./AliceSet')
const Setting = require('./AliceSet')
const { default: makeWASocket, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, Browsers, makeInMemoryStore, jidDecode, makeCacheableSignalKeyStore, getAggregateVotesInPollMessage, proto, delay } = require("@whiskeysockets/baileys")
const fs = require('fs')
const pino = require('pino')
const chalk = require('chalk')
const path = require('path')
const axios = require('axios')
const os = require('os')
const nou = require("node-os-utils")
const FileType = require('file-type')
const readline = require("readline");
const yargs = require('yargs/yargs')
const nodemailer = require('nodemailer')
const { Telegraf, Context } = require('telegraf')
const colors = require('@colors/colors/safe')
const { color } = require('./AliceLibray/color');
const fetch = require('node-fetch');
const { say } = require('cfonts')
const _ = require('lodash')
const { Boom } = require('@hapi/boom')
const moment = require('moment-timezone')
const PhoneNumber = require('awesome-phonenumber')
const { imageToWebp, imageToWebp3, videoToWebp, writeExifImg, writeExifImgAV, writeExifVid } = require('./AliceLibray/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep, reSize } = require('./AliceLibray/myfunction')

const usePairingCode = true
  const question = (text) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    return new Promise((resolve) => {
      rl.question(text, resolve);
    });
  };
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
var low
try {
low = require('lowdb')
} catch (e) {
low = require('./AliceLibray/lowdb')}
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
const { Low, JSONFile } = low
const mongoDB = require('./AliceLibray/mongoDB')
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
/https?:\/\//.test(opts['db'] || '') ?
new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
new mongoDB(opts['db']) :
new JSONFile(`./src/database.json`)
)
global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
if (global.db.data !== null) return
global.db.READ = true
await global.db.read()
global.db.READ = false
global.db.data = {
users: {},
chats: {},
game: {},
database: {},
settings: {},
setting: {},
others: {},
sticker: {},
...(global.db.data || {})}
  global.db.chain = _.chain(global.db.data)}
loadDatabase()

const ments = (text) => {return text.match('@') ? [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : []}
const ownerNumber = global.owner; // Tanpa @s.whatsapp.net
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
// Create Folder Tmp
    function createTmpFolder() {
        const folderName = "tmp";
        const folderPath = path.join(__dirname, folderName);
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath);
            console.log(chalk.green.bold(`[ Success ] Folder '${folderName}' berhasil dibuat.\nMengkoneksikan Otomatis ...`));
        }
    }
    createTmpFolder();

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\

// Start Bot / Connect
async function AliceConnect() {
        const {
                state,
                saveCreds
        } = await useMultiFileAuthState(`./AliceSessions`)

    const usePairingCode = true;

    const Alice = makeWASocket({
        printQRInTerminal: !usePairingCode,
        syncFullHistory: true,
        markOnlineOnConnect: true,
        connectTimeoutMs: 60000,
        defaultQueryTimeoutMs: 0,
        keepAliveIntervalMs: 10000,
        generateHighQualityLinkPreview: true,
        patchMessageBeforeSending: (message) => {
            const requiresPatch = !!(
                message.buttonsMessage ||
                message.templateMessage ||
                message.listMessage
            );
            if (requiresPatch) {
                message = {
                    viewOnceMessage: {
                        message: {
                            messageContextInfo: {
                                deviceListMetadataVersion: 2,
                                deviceListMetadata: {},
                            },
                            ...message,
                        },
                    },
                };
            }
            return message;
        },
        version: (await (await fetch('https://raw.githubusercontent.com/WhiskeySockets/Baileys/master/src/Defaults/baileys-version.json')).json()).version,
        browser: ["Ubuntu", "Chrome", "20.0.04"],
        logger: pino({
            level: 'fatal'
        }),
        auth: {
            creds: state.creds,
            keys: makeCacheableSignalKeyStore(state.keys, pino().child({
                level: 'silent',
                stream: 'store'
            })),
        }
    });

    if (usePairingCode && !Alice.authState.creds.registered) {
        const code = await Alice.requestPairingCodes(global.AliceBot, global.pairing);
        console.log(`your pairing code: ${code}`);
    }
    
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\

// Log Connect
console.log(
chalk.blue.bold(`
✰      [ 卂ㄥ丨匚乇   乃ㄖㄒ   爪ㄩㄥㄒ丨ᗪ乇ᐯ︎丨匚乇 ]      ✰


ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀʟɪᴄᴇ ᴀssɪsᴛᴇɴᴛ
© xʏʀᴏᴏʀʏɴᴢᴢ ( ᴅᴇᴠᴇʟᴏᴘᴇʀ sᴄʀɪᴘᴛ )
ᴊᴀɴɢᴀɴ ᴍᴇʜɴɢᴀᴘᴜs ᴡᴀᴛᴇʀᴍᴀʀᴋ ɢᴡ ( xʏʀᴏᴏʀʏɴᴢᴢ )

▧ 📂 sᴇʀᴠᴇʀ ɪɴғᴏʀᴍᴀᴛɪᴏɴs
│ » • ᴘʟᴀᴛғᴏʀᴍ: ${os.platform()}
│ » • ᴀʀᴄʜɪᴛᴇᴄᴛᴜʀᴇ: ${os.arch()}
│ » • ᴄᴘᴜ ᴍᴏᴅᴇʟ: ${os.cpus()[0].model}
│ » • ᴛᴏᴛᴀʟ ᴍᴇᴍᴏʀʏ: ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB
│ » • ғʀᴇᴇ ᴍᴇᴍᴏʀʏ: ${(os.freemem() / 1024 / 1024).toFixed(2)} MB
└───···

[ ᴀʟɪᴄᴇ ᴀssɪsᴛᴇɴᴛ ]
ᴍᴇɴɢʜᴜʙᴜɴɢᴋᴀɴ ᴋᴇ ᴡʜᴀᴛsᴀᴘᴘ ....`));

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\

// Auto Detek Sampah & Clear
setInterval(() => {
  const pathsToClean = [
  path.join(__dirname),
  path.join(__dirname, 'tmp')
];

const tmpPath = path.join(__dirname, 'tmp');
if (!fs.existsSync(tmpPath)) {
  fs.mkdirSync(tmpPath, { recursive: true });
  console.log(`Folder dibuat: ${tmpPath}`);
}
  pathsToClean.forEach(dir => {
    fs.readdir(dir, function (err, items) {
      if (err) return console.error(`Gagal membaca direktori ${dir}:`, err);

      const filteredItems = items.filter(item =>
        /\.(gif|png|mp3|mp4|opus|jpg|webp|webm|zip|tar\.gz)$/i.test(item) ||
        item.startsWith('.cache') ||
        item.startsWith('.npm')
      );

      if (filteredItems.length > 0) {
        console.log(`Terdeteksi ${filteredItems.length} file/folder sampah di ${dir}. Akan dihapus dalam 15 detik...`);

        setTimeout(() => {
          filteredItems.forEach(item => {
            const fullPath = path.join(dir, item);
            try {
              if (fs.existsSync(fullPath)) {
                const stats = fs.statSync(fullPath);
                if (stats.isDirectory()) {
                  fs.rmSync(fullPath, { recursive: true, force: true });
                  console.log(`Folder dihapus: ${fullPath}`);
                } else {
                  fs.unlinkSync(fullPath);
                  console.log(`File dihapus: ${fullPath}`);
                }
              } else {
                console.log(`Tidak ditemukan, dilewati: ${fullPath}`);
              }
            } catch (err) {
              console.error(`Gagal menghapus ${fullPath}:`, err);
            }
          });
        }, 15_000);
      }
    });
  });
}, 30_000);
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
// Update Group Information
Alice.ev.on('group-participants.update', async (anu) => {
  try {

    function formatCustomText(text, userTag, namagc) {
      return text
        .replace(/@user/gi, userTag)
        .replace(/@group/gi, namagc);
    }

    if (!anu.participants || !Array.isArray(anu.participants)) return;

    const metadata = await Alice.groupMetadata(anu.id);
    const groupAdmins = metadata.participants.filter(v => v.admin).map(v => v.id);
    const namagc = metadata.subject;
    const botNumber = await Alice.decodeJid(Alice.user.id);

    let welcomeDb = {};
    try {
      welcomeDb = JSON.parse(fs.readFileSync('./AliceDatabase/groupWelcome.json'));
    } catch (e) {
      welcomeDb = {};
    }

    if (anu.participants.includes(botNumber)) return;

    for (let num of anu.participants) {
      const tag = [num];
      const userTag = `@${num.split("@")[0]}`;
      const authorTag = anu.author ? `@${anu.author.split("@")[0]}` : '';

      let ppuser;
      try {
        ppuser = await Alice.profilePictureUrl(num, 'image');
      } catch {
        ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60';
      }

      // WELCOME
      if (anu.action === "add") {
        let customWelcome = welcomeDb[anu.id]?.welcome;
        let welcomeText = customWelcome
          ? formatCustomText(customWelcome, userTag, namagc)
          : `🛰️ ALICE SYSTEM NOTIFIKASI

👤 Pengguna Baru: ${userTag}
📍 Grup: ${namagc}

📡 Menghubungkan ke server...
💾 Memuat kepribadian...
❌ Kepribadian tidak ditemukan.

Selamat datang di jaringan AliceBot™.
Silakan calibrasi sinyal dan jangan terlalu diam, nanti dikira bot error 🤖

💡 Gunakan perintah .menu untuk memulai eksplorasi.`;

        Alice.sendMessage(anu.id, {
          text: welcomeText,
          contextInfo: {
            mentionedJid: tag,
            externalAdReply: {
              thumbnailUrl: thumbWelcome,
              title: '👾 WELCOME TO THE SYSTEM',
              body: packname,
              renderLargerThumbnail: true,
              sourceUrl: ig,
              mediaType: 1
            }
          }
        });
      }

      // LEAVE
      if (anu.action === "remove") {
        const isKicked = anu.author && anu.author !== num;
        const kickerTag = isKicked ? `@${anu.author.split("@")[0]}` : '';

        let customLeft = welcomeDb[anu.id]?.left;
        let leftText = customLeft
          ? formatCustomText(customLeft, userTag, namagc)
          : isKicked
            ? `🗑️ PENGGUNA DIKELUARKAN DARI SERVER

👤 Target     : ${userTag}
🛠️ Dikeluarkan oleh : ${kickerTag}
📍 Lokasi     : ${namagc}

📤 Data pengguna telah diformat dan dibuang ke recycle bin.
📛 Status: Access revoked from mainframe.`
            : `📴 PENGGUNA MELEPAS KONEKSI

👤 User   : ${userTag}
📍 Grup   : ${namagc}

Pengguna memutus koneksi dari server.
Kemungkinan ingin uninstall kehidupan sosial.`;

        Alice.sendMessage(anu.id, {
          text: leftText,
          contextInfo: {
            mentionedJid: isKicked ? [num, anu.author] : [num],
            externalAdReply: {
              thumbnailUrl: thumbLeft,
              title: isKicked ? '💥 ACCESS TERMINATED' : '🏃 USER DISCONNECTED',
              body: packname,
              renderLargerThumbnail: true,
              sourceUrl: ig,
              mediaType: 1
            }
          }
        });
      }

      // PROMOTE
      if (anu.action === "promote") {
        Alice.sendMessage(anu.id, {
          text: `🧠 AKSES ADMIN DIBERIKAN

👤 ${userTag} telah di-upgrade menjadi ADMIN.
⚙️ Hak istimewa: Ubah info grup, tendang orang, dan typo tanpa takut.

⚠️ Harap tidak menyalahgunakan kekuasaan. Server mencatat segalanya.`,
          contextInfo: {
            mentionedJid: [anu.author, num],
            externalAdReply: {
              thumbnailUrl: ppuser,
              title: '🧬 ADMIN ACCESS GRANTED',
              body: packname,
              renderLargerThumbnail: true,
              sourceUrl: ig,
              mediaType: 1
            }
          }
        });
      }

      // DEMOTE
      if (anu.action === "demote") {
        Alice.sendMessage(anu.id, {
          text: `📉 ADMIN DI-TURUNKAN

👤 ${userTag} telah diturunkan dari status ADMIN oleh ${authorTag}.
🔒 Akses root telah dicabut.
😌 Kembali ke status warga sipil digital.

Tenang... downgrade bukan akhir dari segalanya.`,
          contextInfo: {
            mentionedJid: [anu.author, num],
            externalAdReply: {
              thumbnailUrl: ppuser,
              title: '🗃️ ACCESS REVOKED',
              body: packname,
              renderLargerThumbnail: true,
              sourceUrl: ig,
              mediaType: 1
            }
          }
        });
      }
    }
  } catch (err) {
    console.error("❌ Error di group-participants.update:", err);
  }
});
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
Alice.sendButtonProto = async (jid, title, footer, buttons = [], quoted = '', options = {}) => {
        let msg = generateWAMessageFromContent(jid, {
            viewOnceMessage: {
                message: {
                    "messageContextInfo": {
                        "deviceListMetadata": {},
                        "deviceListMetadataVersion": 2
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        ...options,
                        body: proto.Message.InteractiveMessage.Body.create({ text: title }),
                        footer: proto.Message.InteractiveMessage.Footer.create({ text: footer || "puqi" }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: buttons
                        })
                    })
                }
            }
        }, { quoted })
        return await Alice.relayMessage(msg.key.remoteJid, msg.message, {
            messageId: msg.key.id
        })
    }
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
    Alice.sendInteractive = async (jid, btn, Img = null, footer, title, quoted = "", options = {}) => {
        let header = Img
        ? proto.Message.InteractiveMessage.Header.create({
            title: "",
            hasMediaAttachment: true,
            ...(await prepareWAMessageMedia({ 
                image: { url: Img }
            }, { upload: Alice.waUploadToServer }))
        })
        : proto.Message.InteractiveMessage.Header.create({
            title: "",
            hasMddiaAttachment: false
        })
        
        let msg = generateWAMessageFromContent(jid, {
            viewOnceMessage: {
                message: {
                    "messageContextInfo": {
                        "deviceListMetadata": {},
                        "deviceListMetadataVersion": 2
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        ...options,
                        body: proto.Message.InteractiveMessage.Body.create({
                            text: title
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.create({
                            text: footer
                        }),
                        header,
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: btn
                        })
                    })
                }
            }
        }, {
            quoted: quoted
        })
        await Alice.relayMessage(msg.key.remoteJid, msg.message, {
            messageId: msg.key.id
        })
    }
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
Alice.sendStatusMention = async (content, jids = []) => {
let users;
for (let id of jids) {
let userId = await Alice.groupMetadata(id)
users = await userId.participants.map(u => Alice.decodeJid(u.id))
}
let message = await Alice.sendMessage(
"status@broadcast", content, {
backgroundColor: "F54242",
font: Math.floor(Math.random() * 9),
statusJidList: users,
additionalNodes: [
{ tag: "meta", attrs: {}, content: [{ tag: "mentioned_users", attrs: {},
content: jids.map((jid) => ({ tag: "to", attrs: { jid }, content: undefined, })),
}, ], }, ], })
jids.forEach(id => {
Alice.relayMessage(id, {
groupStatusMentionMessage: {
message: {
protocolMessage: {
key: message.key,
type: 25,
}, }, }, },
{ userJid: Alice.user.jid, additionalNodes: [{
tag: "meta", attrs: { is_status_mention: "true" }, content: undefined, }, ], })
delay(2500)
})
return message
} 
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\    
        Alice.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
        let type = await Alice.getFile(path, true)
        let { res, data: file, filename: pathFile } = type
        if (res && res.status !== 200 || file.length <= 65536) {
            try {
                throw { json: JSON.parse(file.toString()) } 
            } catch (e) { if (e.json) throw e.json }
        }
        
        let opt = { filename }
        if (quoted) opt.quoted = quoted
        if (!type) options.asDocument = true
        let mtype = '', mimetype = type.mime, convert
        if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) mtype = 'sticker'
        else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) mtype = 'image'
        else if (/video/.test(type.mime)) mtype = 'video'
        else if (/audio/.test(type.mime)) (
            convert = await (ptt ? toPTT : toAudio)(file, type.ext),
            file = convert.data,
            pathFile = convert.filename,
            mtype = 'audio',
            mimetype = 'audio/ogg; codecs=opus'
        )
        else mtype = 'document'
        if (options.asDocument) mtype = 'document'
        let message = {
            ...options,
            caption,
            ptt,
            [mtype]: { url: pathFile },
            mimetype
        }
        let m
        try {
            m = await Alice.sendMessage(jid, message, {
                ...opt,
                ...options
            })
        } catch (e) {
            console.error(e)
            m = null
        } finally {
            if (!m) m = await Alice.sendMessage(jid, {
                ...message,
                [mtype]: file
            }, {
                ...opt,
                ...options 
            })
            return m
        }
    }
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
// Send Button Image
Alice.sendButtonImg = async (jid, buttons = [], text, image, footer, quoted = '', options = {}) => {
    const buttonMessage = {
        image: { url: image },
        caption: text,
        footer: footer,
        buttons: buttons.map(button => ({
            buttonId: button.id || '',
            buttonText: { displayText: button.text || 'Button' },
            type: button.type || 1
        })),
        headerType: 1,
        viewOnce: options.viewOnce || false,
    }

    Alice.sendMessage(jid, buttonMessage, { quoted })
} 
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
Alice.sendButtonDocThumbnail = async (chat, judul, teks, thumbUrl, button, m) => {

  let getThumb = await axios.get(thumbUrl, { responseType: "arraybuffer" });
  let thumbBuffer = Buffer.from(getThumb.data, "binary");
  
  let msg = await generateWAMessageFromContent(chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          contextInfo: {
            mentionedJid: ments(teks),
            forwardingScore: 9999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterJid: global.idch,
              serverMessageId: null,
              newsletterName: `Alice Informations`
            },
            externalAdReply: {
              showAdAttribution: true,
              containsAutoReply: true,
              title: `Alice Assistent`,
              body: `Version ${version}`,
              thumbnailUrl: global.thumbnailLice,
              sourceUrl: global.xtele,
              mediaType: 1,
              renderLargerThumbnail: true
            }
          },
          body: proto.Message.InteractiveMessage.Body.create({
            text: teks
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: packname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: judul,
            subtitle: '',
            hasMediaAttachment: true,
            ...(await prepareWAMessageMedia({
              document: fs.readFileSync("./package.json"),
              mimetype: "application/pdf",
              fileLength: 10000000000,
              jpegThumbnail: fs.readFileSync("./AliceMedia/image/Alice.jpg"),
              fileName: `Alice Assistent ${global.version}`
            }, { upload: await Alice.waUploadToServer }))
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: button
          })
        })
      }
    }
  }, { quoted: m });

  await Alice.relayMessage(msg.key.remoteJid, msg.message, {
    messageId: msg.key.id
  });
};
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
Alice.sendReact = async (jid, emoticon, keys = {}) => {
let reactionMessage = {
react: {
text: emoticon,
key: keys
}
}
return await Alice.sendMessage(jid, reactionMessage)
}
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
    Alice.deleteMessage = async (chatId, key) => {
        try {
            await Alice.sendMessage(chatId, { delete: key });
            console.log(`Pesan dihapus: ${key.id}`);
        } catch (error) {
            console.error('Gagal menghapus pesan:', error);
        }
    }; 
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\    
//autostatus view
Alice.ev.on('messages.upsert', async chatUpdate => {
        	if (global.autoswview){
        try {
            if (!chatUpdate.messages || chatUpdate.messages.length === 0) return;
            const mek = chatUpdate.messages[0];

            if (!mek.message) return;
            mek.message =
                Object.keys(mek.message)[0] === 'ephemeralMessage'
                    ? mek.message.ephemeralMessage.message
                    : mek.message;

            if (mek.key && mek.key.remoteJid === 'status@broadcast') {
                let emoji = [ `${lz2}` ];
                let sigma = emoji[Math.floor(Math.random() * emoji.length)];
                await Alice.readMessages([mek.key]);
                Alice.sendMessage(
                    'status@broadcast',
                    { react: { text: sigma, key: mek.key } },
                    { statusJidList: [mek.key.participant] },
                );
            }

        } catch (err) {
            console.error(err);
        }
      }
   }
 )
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
Alice.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}

Alice.ev.on('messages.upsert', async chatUpdate => {
try {
mek = chatUpdate.messages[0]
if (!mek.message) return
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
if (mek.key && mek.key.remoteJid === 'status@broadcast') return
if (!Alice.public && !mek.key.fromMe && !mek.key.isOwner && chatUpdate.type === 'notify') return
if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
m = smsg(Alice, mek, store)
require("./Alice")(Alice, m, chatUpdate, store)
} catch (err) {
console.log(err)
}
})
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
Alice.ev.on('call', async (celled) => {
let botNumber = await Alice.decodeJid(Alice.user.id)
let koloi = global.anticall
if (!koloi) return
console.log(celled)
for (let kopel of celled) {
if (kopel.isGroup == true) {
if (kopel.status == "offer") {
let nomer = await Alice.sendTextWithMentions(kopel.from, `*${Alice.user.name}* tidak bisa menerima panggilan ${kopel.isVideo ? `video` : `suara`}. Maaf @${kopel.from.split('@')[0]} kamu akan diblokir. Silahkan hubungi Owner membuka blok !`)
Alice.sendContact(kopel.from, owner.map( i => i.split("@")[0]), nomer)
await sleep(8000)
await Alice.updateBlockStatus(kopel.from, "block")
}
}
}
})
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
Alice.imgToSticker = async(from, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetchBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}
await Alice.sendMessage(from, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\ 
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\ 

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
Alice.ev.on('contacts.update', update => {
for (let contact of update) {
let id = Alice.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }}})
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
Alice.getName = (jid, withoutContact  = false) => {
id = Alice.decodeJid(jid)
withoutContact = Alice.withoutContact || withoutContact 
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contacts[id] || {}
if (!(v.name || v.subject)) v = Alice.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = id === '0@s.whatsapp.net' ? {
id,
name: 'WhatsApp'
} : id === Alice.decodeJid(Alice.user.id) ?
Alice.user :
(store.contacts[id] || {})
return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')}
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
Alice.sendContact = async (jid, kon, quoted = '', opts = {}) => {
let list = []
for (let i of kon) {
list.push({
displayName: await Alice.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await Alice.getName(i + '@s.whatsapp.net')}\nFN:${await Alice.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:aplusscell@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://chat.whatsapp.com/HbCl8qf3KQK1MEp3ZBBpSf\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`})}
Alice.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted })}
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//Kalau Mau Self Lu Buat Jadi false
Alice.public = true
Alice.ev.on('creds.update', saveCreds)
 //📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
 Alice.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])}
return buffer} 
 //📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
 Alice.sendImage = async (jid, path, caption = '', quoted = '', options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await Alice.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })}
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
Alice.sendText = (jid, text, quoted = '', options) => Alice.sendMessage(jid, { text: text, ...options }, { quoted })
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
Alice.sendTextWithMentions = async (jid, text, quoted, options = {}) => Alice.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })
 //📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
Alice.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)}
await Alice.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer}

Alice.sendImageAsStickerAV = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImgAV(buff, options)
} else {
buffer = await imageToWebp2(buff)}
await Alice.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer}

Alice.sendImageAsStickerAvatar = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp3(buff)}
await Alice.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer}
 //📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
Alice.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)}
await Alice.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer}
 //📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
 Alice.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])}
let type = await FileType.fromBuffer(buffer)
trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
// save to file
await fs.writeFileSync(trueFileName, buffer)
return trueFileName}
//=================================================
//
 Alice.cMod = (jid, copy, text = '', sender = Alice.user.id, options = {}) => {
//let copy = message.toJSON()
let mtype = Object.keys(copy.message)[0]
let isEphemeral = mtype === 'ephemeralMessage'
if (isEphemeral) {
mtype = Object.keys(copy.message.ephemeralMessage.message)[0]}
let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
let content = msg[mtype]
if (typeof content === 'string') msg[mtype] = text || content
else if (content.caption) content.caption = text || content.caption
else if (content.text) content.text = text || content.text
if (typeof content !== 'string') msg[mtype] = {
...content,
...options}
if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
copy.key.remoteJid = jid
copy.key.fromMe = sender === Alice.user.id
return proto.WebMessageInfo.fromObject(copy)}
Alice.sendFile = async(jid, PATH, fileName, quoted = {}, options = {}) => {
let types = await Alice.getFile(PATH, true)
let { filename, size, ext, mime, data } = types
let type = '', mimetype = mime, pathFile = filename
if (options.asDocument) type = 'document'
if (options.asSticker || /webp/.test(mime)) {
let { writeExif } = require('./AliceLibray/exif.js')
let media = { mimetype: mime, data }
pathFile = await writeExif(media, { packname: global.packname, author: global.packname2, categories: options.categories ? options.categories : [] })
await fs.promises.unlink(filename)
type = 'sticker'
mimetype = 'image/webp'}
else if (/image/.test(mime)) type = 'image'
else if (/video/.test(mime)) type = 'video'
else if (/audio/.test(mime)) type = 'audio'
else type = 'document'
await Alice.sendMessage(jid, { [type]: { url: pathFile }, mimetype, fileName, ...options }, { quoted, ...options })
return fs.promises.unlink(pathFile)}
Alice.parseMention = async(text) => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
Alice.copyNForward = async (jid, message, forceForward = false, options = {}) => {
    let vtype;
    if (options.readViewOnce) {
        message.message = message.message?.ephemeralMessage?.message || message.message;
        vtype = Object.keys(message.message.viewOnceMessage.message)[0];
        delete message.message.viewOnceMessage.message[vtype].viewOnce;
        message.message = { ...message.message.viewOnceMessage.message };
    }

    let mtype = Object.keys(message.message)[0];
    let content = await generateForwardMessageContent(message, forceForward);
    let ctype = Object.keys(content)[0];
    let context = {};

    if (mtype != "conversation") {
        context = message.message[mtype].contextInfo;
    }

    content[ctype].contextInfo = {
        ...context,
        ...content[ctype].contextInfo,
    };

    const waMessage = await generateWAMessageFromContent(
        jid,
        content,
        options
            ? {
                  ...content[ctype],
                  ...options,
                  ...(options.contextInfo
                      ? {
                            contextInfo: {
                                ...content[ctype].contextInfo,
                                ...options.contextInfo,
                            },
                        }
                      : {}),
              }
            : {}
    );

    await Alice.relayMessage(jid, waMessage.message, { messageId: waMessage.key.id });
    return waMessage;
};
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
Alice.getFile = async (PATH, save) => {
let res
let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
//if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
let type = await FileType.fromBuffer(data) || {
mime: 'application/octet-stream',
ext: '.bin'
}
filename = path.join(__filename, '../src/' + new Date * 1 + '.' + type.ext)
if (data && save) fs.promises.writeFile(filename, data)
return {
res,
filename,
	size: await getSizeMedia(data),
...type,
data
}
}
Alice.serializeM = (m) => smsg(Alice, m, store)
Alice.ev.on("connection.update", async (update) => {
const { connection, lastDisconnect } = update;
if (connection === "close") {
  let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
  if (reason === DisconnectReason.badSession) {
console.log(`File sesi bermasalah, silakan hapus folder AliceSession dan tmp lalu masukkan pairing ulang`);
process.exit();
  } else if (reason === DisconnectReason.connectionClosed) {
console.log("Koneksi Keluar, memindai ulang.....");
AliceConnect();
  } else if (reason === DisconnectReason.connectionLost) {
console.log("Koneksi keluar dari server, memindai ulang...");
AliceConnect();
  } else if (reason === DisconnectReason.connectionReplaced) {
console.log("Koneksi diganti, sesi baru lainnya dibuka, silakan restart bot");
process.exit();
  } else if (reason === DisconnectReason.loggedOut) {
console.log(`Perangkat keluar, silakan hapus sesi folder AliceSession dan tmp lalu restart server.`);
process.exit();
  } else if (reason === DisconnectReason.restartRequired) {
console.log("Merestart Server....");
AliceConnect();
  } else if (reason === DisconnectReason.timedOut) {
console.log("Waktu koneksi, menghubungkan kembali ...");
AliceConnect();
  } else {
console.log(`Unknown DisconnectReason: ${reason}|${connection}`);
AliceConnect();
  }
} else if (connection === "open") {      
         try {
        Alice.newsletterFollow('120363299254074394@newsletter')
      } catch (e) {
        console.error("❌ Mengalami Error Saat Melakukan Following Pada Channel:", e);
      }
      
  Alice.sendMessage(`${global.owner}` + "@s.whatsapp.net", { text: `${sendowner}` });
}
});
return Alice
};
AliceConnect()

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Succes Update : '${__filename}'`))
	delete require.cache[file]
	require(file)
})

// TERIMAKASIH SUDAH MEMAKAI SC KAMI
// Credit : XyrooRynzz
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\