//————————————————————————//

/*

Alice Asistent
© XyrooRynzz
2022 - 2026

Source
WhatsApp Me : 6281543496975
Tele me : t.me/XyrooRynzz
instagram : xyroorynzz
https://chat.whatsapp.com/IJx5bkPvivUCeai7d2ChRC
https://whatsapp.com/channel/0029VamvtL2ADTO7ikBeNe1E

*/

//————————————————————————//
//🌌——————————————————————————————————————————————————————————————————————————🌌\\
const fs = require('fs')
const { color } = require('./funcalice')
        
global.cpanelmenu = `
┌── •「 *ᴍᴇɴᴜ ᴄᴘᴀɴᴇʟ* 」
${global.emojipick}.cpanel - Panel kontrol utama
${global.emojipick}.delpanel - Hapus semua data panel
${global.emojipick}.listusr - Lihat semua user
${global.emojipick}.listsrv - Lihat semua grup aktif
${global.emojipickxx}`

global.pushmenu = `
┌── •「 *ᴍᴇɴᴜ ᴘᴜsʜ* 」
${global.emojipick}.jpm - Kirim broadcast
${global.emojipick}.pushkontak - Push ke kontak (v1)
${global.emojipick}.pushkontak2 - Push ke kontak (v2)
${global.emojipick}.savekontak - Simpan semua kontak
${global.emojipick}.savekontak2 - Simpan kontak (versi 2)
${global.emojipick}.pushkontakbeton - Push kuat ke semua kontak
${global.emojipickxx}`

global.mainmenu = `
┌── •「 *ᴍᴇɴᴜ ᴍᴀɪɴ* 」
${global.emojipick}.Rvo - Reset variabel owner
${global.emojipick}.Req - Ajukan fitur baru
${global.emojipick}.Report - Laporkan bug
${global.emojipick}.Jarak - Cek jarak lokasi
${global.emojipick}.Ping - Tes respon bot
${global.emojipick}.totalfitur - Lihat jumlah fitur
${global.emojipick}.Limit - Cek sisa limit
${global.emojipick}.Tembak - Ajak jadi pasangan
${global.emojipick}.Terima - Terima ajakan
${global.emojipick}.Tolak - Tolak ajakan
${global.emojipick}.Cekpacar - Lihat pasanganmu
${global.emojipick}.Topcmd - Perintah paling sering
${global.emojipick}.Report - Lapor error sistem
${global.emojipick}.cekprem - Status premium
${global.emojipick}.ceksewa - Status sewa grup
${global.emojipick}.stupidcheck - Cek kebodohan
${global.emojipick}.handsomecheck - Cek ketampanan
${global.emojipick}.uncleancheck - Cek kebersihan
${global.emojipick}.hotcheck - Cek daya tarik
${global.emojipick}.smartcheck - Cek kecerdasan
${global.emojipick}.greatcheck - Cek kehebatan
${global.emojipick}.evilcheck - Cek kejahatan
${global.emojipick}.dogcheck - Seberapa anjing
${global.emojipick}.coolcheck - Cek kekerenan
${global.emojipick}.waifucheck - Cek jadi waifu
${global.emojipick}.awesomecheck - Cek level keren
${global.emojipick}.gaycheck - Cek kadar gay
${global.emojipick}.cutecheck - Seberapa imut
${global.emojipick}.lesbiancheck - Cek kadar lesbian
${global.emojipick}.hornycheck - Kadar napsu
${global.emojipick}.prettycheck - Cek kecantikan
${global.emojipick}.lovelycheck - Cek kelayakan cinta
${global.emojipick}.uglycheck - Cek keburukan
${global.emojipickxx}`

global.beritamenu = `
┌── •「 *ᴍᴇɴᴜ ʙᴇʀɪᴛᴀ* 」
${global.emojipick}.nasa - Info NASA
${global.emojipick}.inews - iNews
${global.emojipick}.detik - Detik.com
${global.emojipick}.cnbc - CNBC
${global.emojipick}.cnn - CNN ID
${global.emojipick}.metrotv - MetroTV
${global.emojipick}.kontan - Kontan
${global.emojipick}.liputan6 - Liputan6
${global.emojipick}.indozone - Indozone
${global.emojipick}.malaymail - Malay
${global.emojipick}.merdekanews - Merdeka
${global.emojipick}.vietnamnews - Vietnam
${global.emojipickxx}`

global.asupanmenu = `
┌── •「 *ᴍᴇɴᴜ ᴀsᴜᴘᴀɴ* 」
${global.emojipick}.tiktokgirl - Cewek TikTok
${global.emojipick}.tiktoknukthy - Nukthy
${global.emojipick}.tiktokkayes - Kayes
${global.emojipick}.tiktokpanrika - Panrika
${global.emojipick}.tiktoknotnot - Notnot
${global.emojipick}.tiktokghea - Ghea
${global.emojipick}.tiktoksantuy - Santuy
${global.emojipick}.tiktokbocil - Bocil lucu
${global.emojipickxx}`

global.audiomenu = `
┌── •「 *ᴍᴇɴᴜ ᴀᴜᴅɪᴏ* 」
${global.emojipick}.bass - Bass
${global.emojipick}.blown - Meledak
${global.emojipick}.deep - Dalam
${global.emojipick}.earrape - Ekstrem
${global.emojipick}.fast - Cepat
${global.emojipick}.fat - Berat
${global.emojipick}.nightcore - Nightcore
${global.emojipick}.reverse - Balik
${global.emojipick}.robot - Robot
${global.emojipick}.slow - Lambat
${global.emojipick}.smooth - Halus
${global.emojipick}.tupai - Chipmunk
${global.emojipick}.tts - Teks ➜ suara
${global.emojipick}.ringtone - Nada
${global.emojipick}.voice-alice - Alice
${global.emojipick}.voice-michie - Michie
${global.emojipick}.voice-tokoh - Tokoh
${global.emojipickxx}`

global.anonymousmenu = `
┌── •「 *ᴍᴇɴᴜ ᴀɴᴏɴʏᴍᴏᴜs* 」
${global.emojipick}.anonymous - Masuk anonim
${global.emojipick}.start - Mulai
${global.emojipick}.mulai - Alias start
${global.emojipick}.leave - Keluar
${global.emojipick}.keluar - Alias leave
${global.emojipick}.next - Ganti
${global.emojipick}.lanjut - Alias next
${global.emojipick}.confess - Kirim rahasia
${global.emojipick}.menfess - Alias confess
${global.emojipick}.balasmenfess - Balas
${global.emojipick}.tolakmenfess - Tolak
${global.emojipick}.stopmenfess - Hentikan
${global.emojipickxx}`

global.aimenu = `
┌── •「 *ᴍᴇɴᴜ ᴀɪ* 」
${global.emojipick}.ai - Chat AI
${global.emojipick}.zerogpt - Cek AI atau bukan
${global.emojipick}.chatai - AI alternatif
${global.emojipick}.chatgpt - OpenAI GPT
${global.emojipick}.claudeai - Claude
${global.emojipick}.veniceai - Venice AI
${global.emojipick}.conciseai - Jawaban singkat
${global.emojipick}.gemini-ai - Gemini AI
${global.emojipick}.llama-ai - LLaMA AI
${global.emojipick}.lumin-ai - Lumin AI
${global.emojipick}.typli-ai - Copywriting
${global.emojipick}.poly-ai - Multibahasa
${global.emojipick}.quantum-ai - AI kuantum
${global.emojipick}.gptturbo - GPT cepat
${global.emojipick}.chatevery-where - Multi platform
${global.emojipick}.gemini-pro - Gemini Pro
${global.emojipick}.gpt-4o - GPT-4 Omni
${global.emojipick}.muslimai - AI Islami
${global.emojipickxx}`

global.storemenu = `
┌── •「 *ᴍᴇɴᴜ sᴛᴏʀᴇ 🛒* 」
${global.emojipick}.addproduk - Tambah produk
${global.emojipick}.delproduk - Hapus produk
${global.emojipick}.listproduk - Daftar produk
${global.emojipick}.beliproduk - Beli produk
${global.emojipick}.restok - Tambah stok
${global.emojipick}.confirm - Konfirmasi
${global.emojipick}.cancel - Batalkan
${global.emojipick}.payment - Metode bayar
${global.emojipick}.done - Transaksi selesai
${global.emojipick}.proses - Sedang diproses
${global.emojipick}.tunda - Tunda dulu
${global.emojipick}.batal - Batal total
${global.emojipick}.tambah - Hitung +
${global.emojipick}.kurang - Hitung -
${global.emojipick}.bagi - Hitung ÷
${global.emojipick}.kali - Hitung ×
${global.emojipick}.kalkulator - Kalkulator
${global.emojipick}.buysewa
${global.emojipick}.buyprem
${global.emojipick}.cancel
${global.emojipick}.status
${global.emojipickxx}`

global.convertmenu = `
┌── •「 *ᴍᴇɴᴜ ᴄᴏɴᴠᴇʀᴛ 📍* 」
${global.emojipick}.hd - Gambar HD
${global.emojipick}.attp - Teks stiker
${global.emojipick}.attp2 - Versi 2
${global.emojipick}.attp3 - Versi 3
${global.emojipick}.attp4 - Versi 4
${global.emojipick}.ttp - Teks biasa
${global.emojipick}.ttp2 - Versi 2
${global.emojipick}.ttp3 - Versi 3
${global.emojipick}.ttp4 - Versi 4
${global.emojipick}.ttp5 - Versi 5
${global.emojipick}.temini - Twibbon mini
${global.emojipick}.sticker - Gambar ke stiker
${global.emojipick}.smeme - Meme + teks
${global.emojipick}.wm - Tambah watermark
${global.emojipick}.qc - Quote chat
${global.emojipick}.brat - Efek brat
${global.emojipick}.tovn - Video ke VN
${global.emojipick}.toaudio - Media ke audio
${global.emojipick}.tomp3 - Media ke MP3
${global.emojipick}.tomp4 - Stiker ke video
${global.emojipick}.togift - Stiker ke gif
${global.emojipick}.toptv - Gaya TV
${global.emojipick}.torvo - Ke .rvo
${global.emojipick}.toimg - Stiker ke gambar
${global.emojipick}.tourl - Media ke URL
${global.emojipick}.emojimix - Gabung emoji
${global.emojipick}.img2txt - Gambar ke teks
${global.emojipick}.img2prompt - Prompt dari gambar
${global.emojipick}.diffusion - AI gambar
${global.emojipick}.morse - Morse encode/decode
${global.emojipick}.shortlink - Pendekin link
${global.emojipick}.quotesimg - Gambar kutipan
${global.emojipick}.iphonechat - Fake chat iPhone
${global.emojipick}.faceblur - Blur wajah
${global.emojipick}.short-cloudku
${global.emojipickxx}`

global.toolsmenu = `
┌── •「 *ᴛᴏᴏʟs 🔨* 」
${global.emojipickx}.kalkulator - Hitung cepat
${global.emojipick}.nulis - Tulis di buku
${global.emojipick}.nulis2 - Versi lain
${global.emojipick}.get - Ambil media
${global.emojipick}.gtts2 - Teks ke suara
${global.emojipick}.tts2 - Alias .gtts2
${global.emojipick}.gethtml - Ambil HTML
${global.emojipick}.phlogo - Logo PH
${global.emojipick}.translate - Terjemah teks
${global.emojipick}.resize - Ubah ukuran
${global.emojipick}.hytamkan - Teks Hytam
${global.emojipick}.html - Format HTML
${global.emojipick}.javascript - Format JS
${global.emojipick}.python - Format Python
${global.emojipick}.tocode - Teks ke kode
${global.emojipick}.txt2anime - Teks ke anime
${global.emojipick}.txt2ghibli - Gaya Ghibli
${global.emojipick}.txt2pixel - Pixel art
${global.emojipick}.reactch - React chat
${global.emojipick}.getinfoch - Info channel WA
${global.emojipick}.getinfogc - Info grup WA
${global.emojipick}.ccgen - CC palsu
${global.emojipick}.sharetext - Share teks
${global.emojipick}.codegen - Kode acak
${global.emojipick}.ceklinkgc - Cek link grup
${global.emojipick}.wastalk - Status WA
${global.emojipick}.removebg - Hapus background
${global.emojipick}.faketiktok - Komentar palsu
${global.emojipick}.texttonote - Teks ke note
${global.emojipick}.getpb - Foto profil WA
${global.emojipick}.getgist - File dari Gist
${global.emojipick}.listapi - Lihat API
${global.emojipick}.getapi - Info API
${global.emojipick}.npmjs - Cari npm
${global.emojipick}.getpastebin
${global.emojipickxx}`

global.islamimenu = `
┌── •「 *ɪsʟᴀᴍɪ 🕌* 」
${global.emojipick}.doa - Doa harian
${global.emojipick}.kisahnabi - Kisah nabi
${global.emojipick}.asmaulhusna - Nama Allah
${global.emojipick}.bacaansholat - Bacaan sholat
${global.emojipick}.ayatkursi - Ayat kursi
${global.emojipick}.doaharian - Doa sehari-hari
${global.emojipick}.niatsholat - Niat sholat
${global.emojipick}.quotesislami - Quotes islami
${global.emojipick}.doatahlil - Doa tahlil
${global.emojipick}.artisurah - Arti surah
${global.emojipick}.dalamislam - Tanya jawab
${global.emojipick}.jadwalsholat - Jadwal sholat
${global.emojipick}.tafsirsurah - Tafsir Qur'an
${global.emojipick}.ayat - Ambil ayat
${global.emojipick}.murotal - Murotal Qur'an
${global.emojipickxx}`

global.downloadermenu = `
┌── •「 *ᴅᴏᴡɴʟᴏᴀᴅᴇʀ 📌* 」
${global.emojipick}.fb - Video Facebook
${global.emojipick}.aio - Auto downloader
${global.emojipick}.ig - Instagram
${global.emojipick}.cocofun - Cocofun
${global.emojipick}.twitterdl - Twitter
${global.emojipick}.sfiledl - Sfile
${global.emojipick}.gitclone - GitHub clone
${global.emojipick}.mediafire - Mediafire
${global.emojipick}.capcut - Template Capcut
${global.emojipick}.tiktok - TikTok no wm
${global.emojipick}.ytmp3 - YouTube ke MP3
${global.emojipick}.ytmp4 - YouTube ke MP4
${global.emojipick}.videy - Videy
${global.emojipick}.pindl - Pinterest
${global.emojipick}.apkdl - Download APK
${global.emojipick}.duoyindl - TikTok China
${global.emojipick}.apkdetail - Info APK
${global.emojipick}.samehadakudl - Anime Samehadaku
${global.emojipick}.samehadakudetail - Info Samehadaku
${global.emojipick}.facebook - Alias .fb
${global.emojipick}.shortlink-dl - Link pendek
${global.emojipick}.nontonanime-download - DL anime
${global.emojipick}.nontonanime-detail - Detail anime
${global.emojipick}.resepdownload - DL resep
${global.emojipick}.spotify-download - Lagu Spotify
${global.emojipick}.soundcloud-download - Musik SoundCloud
${global.emojipickxx}`

global.premiummenu = `
┌── •「 *ᴘʀᴇᴍɪᴜᴍ ⭐* 」
${global.emojipick}.nglspam - Spam NGL
${global.emojipick}.enc - Enkripsi teks
${global.emojipick}.reminder - Pengingat
${global.emojipick}.ssweb - Screenshot web
${global.emojipick}.hdvid - Perjelas video
${global.emojipick}.infogempa - Info gempa
${global.emojipick}.npmstalk - Stalk npm
${global.emojipick}.ghstalk - Stalk GitHub
${global.emojipick}.igstalk - Stalk IG
${global.emojipick}.ttstalk - TikTok stats
${global.emojipick}.mlstalk - Stalk MAL
${global.emojipick}.ffstalk - Akun FF
${global.emojipick}.chstalk - Cek channel
${global.emojipick}.threads - Threads IG
${global.emojipick}.threadsimg - Gambar Threads
${global.emojipick}.readmore - Sisip readmore
${global.emojipick}.xnxxsearch - Cari konten
${global.emojipick}.xnxxdl - Download konten
${global.emojipick}.toreal - Anime ke real
${global.emojipick}.toanime - Foto ke anime
${global.emojipick}.animediff - AI anime
${global.emojipick}.dalle3 - Gambar AI
${global.emojipick}.img2video - Gambar ke video
${global.emojipick}.telegramstalk - Stalk Telegram
${global.emojipickxx}`

global.searchmenu = `
┌── •「 *sᴇᴀʀᴄʜ 🔎* 」
${global.emojipick}.sbook - Buku
${global.emojipick}.jkt48 - Info JKT48
${global.emojipick}.weather - Cuaca
${global.emojipick}.cerpen - Cerpen acak
${global.emojipick}.gsmarena - Info HP
${global.emojipick}.play - Lagu
${global.emojipick}.playvid - Video
${global.emojipick}.playvideo - Video alt
${global.emojipick}.playap - Audio premium
${global.emojipick}.pin - Pinterest
${global.emojipick}.yts - Film YTS
${global.emojipick}.ttsearch - TikTok
${global.emojipick}.cekhp - Cek HP
${global.emojipick}.gimage - Google img
${global.emojipick}.bingimg - Bing img
${global.emojipick}.infoanime - Info anime
${global.emojipick}.zerochan - Anime HQ
${global.emojipick}.liriklagu - Lirik
${global.emojipick}.caribuku - Cari buku
${global.emojipick}.playstore - Aplikasi
${global.emojipick}.wikimedia - Gambar umum
${global.emojipick}.ffw - Lagu cepat
${global.emojipick}.spotify - Cari Spotify
${global.emojipick}.yahooimg - Yahoo img
${global.emojipick}.cuaca - Cuaca lain
${global.emojipick}.kuronime - Kuronime
${global.emojipick}.myanimelist - MAL anime
${global.emojipick}.animexin - Animexin
${global.emojipick}.resepsearch - Cari resep
${global.emojipick}.jkt48news - Berita JKT
${global.emojipick}.alkitab - Ayat Alkitab
${global.emojipick}.jadwaltv - Jadwal TV
${global.emojipick}.hentais - Cari hentai
${global.emojipick}.waifu - Waifu acak
${global.emojipick}.apksearch - Cari APK
${global.emojipick}.searchduoyin - TikTok CN
${global.emojipick}.waktudunia - Waktu dunia
${global.emojipick}.vivadetail - Detail Viva
${global.emojipick}.spotify-search - Cari Spotify
${global.emojipick}.google-search - Cari Google
${global.emojipick}.movie-search - Cari film
${global.emojipick}.sticker-search - Cari stiker
${global.emojipick}.komiku-search - Manga Komiku
${global.emojipick}.soundcloud-search - Lagu SC
${global.emojipick}.soundcloud-play - Putar SC
${global.emojipick}.samehadakusearch - Anime SHK
${global.emojipick}.nontonanime-search - Cari anime
${global.emojipick}.nontonanime-upcoming - Anime baru
${global.emojipick}.nontonanime-latest - Anime terbaru
${global.emojipickxx}`

global.ephotomenu = `
┌── •「 *ᴇᴘʜᴏᴛᴏ 📸* 」
${global.emojipick}.glitchtext - Teks glitch
${global.emojipick}.writetext - Teks tulis
${global.emojipick}.advancedglow - Glow
${global.emojipick}.typographytext - Tipografi
${global.emojipick}.pixelglitch - Glitch pixel
${global.emojipick}.neonglitch - Glitch neon
${global.emojipick}.flagtext - Bendera
${global.emojipick}.flag3dtext - Bendera 3D
${global.emojipick}.deletingtext - Efek hapus
${global.emojipick}.blackpinkstyle - Gaya BP
${global.emojipick}.glowingtext - Teks nyala
${global.emojipick}.underwatertext - Teks air
${global.emojipick}.logomaker - Logo maker
${global.emojipick}.cartoonstyle - Gaya kartun
${global.emojipick}.papercutstyle - Potong kertas
${global.emojipick}.watercolortext - Cat air
${global.emojipick}.effectclouds - Awan
${global.emojipick}.blackpinklogo - Logo BP
${global.emojipick}.gradienttext - Gradasi
${global.emojipick}.summerbeach - Pantai
${global.emojipick}.luxurygold - Emas
${global.emojipick}.multicoloredneon - Neon
${global.emojipick}.sandsummer - Musim pasir
${global.emojipick}.galaxywallpaper - Galaxy
${global.emojipick}.1917style - Gaya 1917
${global.emojipick}.makingneon - Buat neon
${global.emojipick}.royaltext - Teks kerajaan
${global.emojipick}.freecreate - Bebas buat
${global.emojipick}.galaxystyle - Gaya galaxy
${global.emojipick}.lighteffects - Efek cahaya
${global.emojipickxx}`

global.primbonmenu = `
┌── •「 *ᴘʀɪᴍʙᴏɴ ✉️* 」
${global.emojipick}.artimimpi - Mimpi
${global.emojipick}.artinama - Nama
${global.emojipick}.ramaljodoh - Jodoh
${global.emojipick}.ramaljodohbali - Jodoh Bali
${global.emojipick}.suamiistri - Suami Istri
${global.emojipick}.ramalcinta - Ramal Cinta
${global.emojipick}.cocoknama - Nama Cocok
${global.emojipick}.pasangan - Pasangan
${global.emojipick}.jadiannikah - Nikah
${global.emojipick}.sifatusaha - Usaha
${global.emojipick}.rezeki - Rezeki
${global.emojipick}.pekerjaan - Pekerjaan
${global.emojipick}.nasib - Nasib
${global.emojipick}.penyakit - Penyakit
${global.emojipick}.tarot - Tarot
${global.emojipick}.fengshui - Feng Shui
${global.emojipick}.haribaik - Hari Baik
${global.emojipick}.harisangar - Hari Sangar
${global.emojipick}.harisial - Hari Sial
${global.emojipick}.nagahari - Naga Hari
${global.emojipick}.arahrezeki - Arah Rezeki
${global.emojipick}.peruntungan - Peruntungan
${global.emojipick}.weton - Weton
${global.emojipick}.karakter - Karakter
${global.emojipick}.keberuntungan - Keberuntungan
${global.emojipick}.memancing - Hari Mancing
${global.emojipick}.masasubur - Masa Subur
${global.emojipick}.cekumur - Cek Umur
${global.emojipick}.zodiak - Zodiak
${global.emojipick}.shio - Shio
${global.emojipickxx}`

global.randommenu = `
┌── •「 *ʀᴀɴᴅᴏᴍ 🖇* 」
${global.emojipick}.faktaunik - Fakta Unik
${global.emojipick}.quotesbucin - Bucin
${global.emojipick}.quotesjawa - Kata Jawa
${global.emojipick}.quotesanime - Quotes Anime
${global.emojipick}.quotes - Quotes
${global.emojipick}.darkjokes - Dark Jokes
${global.emojipick}.meme - Meme
${global.emojipick}.kataanime - Kata Anime
${global.emojipick}.neko - Neko
${global.emojipick}.shinobu - Shinobu
${global.emojipick}.hubble - Antariksa
${global.emojipick}.hijab - Cewek Hijab
${global.emojipick}.indo - Cewek Indo
${global.emojipick}.japanese - Cewek Jepang
${global.emojipick}.korean - Cewek Korea
${global.emojipick}.malay - Cewek Melayu
${global.emojipick}.randomgirl - Cewek Acak
${global.emojipick}.randomboy - Cowok Acak
${global.emojipick}.thai - Cewek Thailand
${global.emojipick}.vietnamese - Cewek Vietnam
${global.emojipick}.aesthetic - Aesthetic
${global.emojipick}.chinese - Cewek China
${global.emojipick}.pubg - PUBG
${global.emojipick}.antiwork - Meme Anti Kerja
${global.emojipick}.blackpink2 - Blackpink
${global.emojipick}.cosplay - Cosplay
${global.emojipick}.cat - Kucing
${global.emojipick}.doggo - Anjing
${global.emojipick}.justina - Justina
${global.emojipick}.kayes - Kayes
${global.emojipick}.bike - Motor
${global.emojipick}.boneka - Boneka
${global.emojipick}.kpop - Idol Kpop
${global.emojipick}.notnot - Notnot
${global.emojipick}.car - Mobil
${global.emojipick}.rose - Mawar
${global.emojipick}.ryujin - Ryujin
${global.emojipick}.ulzangboy - Cowok Ulzzang
${global.emojipick}.ulzanggirl - Cewek Ulzzang
${global.emojipick}.mobilelegend - ML Karakter
${global.emojipickxx}`

global.groupmenu = `
┌── •「 *GROUP* 」
${global.emojipick}.acc
${global.emojipick}.add - Tambah
${global.emojipick}.kick - Kick
${global.emojipick}.linkgc - Link Grup
${global.emojipick}.hidetag - Tag diam
${global.emojipick}.afk - Mode AFK
${global.emojipick}.opentime - Buka Grup
${global.emojipick}.closetime - Tutup Grup
${global.emojipick}.gc - Buka/Tutup Grup
${global.emojipick}.absen - Absen
${global.emojipick}.listabsen - Lihat Absen
${global.emojipick}.tagall - Tag Semua
${global.emojipick}.delete - Hapus Pesan
${global.emojipick}.editsubjek - Nama Grup
${global.emojipick}.editdesk - Deskripsi
${global.emojipick}.editinfo - Info Grup
${global.emojipick}.promote - Jadikan Admin
${global.emojipick}.demote - Turunkan Admin
${global.emojipick}.addbadwords - Tambah Badword
${global.emojipick}.delbadwords - Hapus Badword
${global.emojipick}.addlist - Tambah List
${global.emojipick}.dellist - Hapus List
${global.emojipick}.updatelist - Update List
${global.emojipick}.list - Lihat List
${global.emojipick}.getpp - PP User
${global.emojipick}.getppgc - PP Grup
${global.emojipick}.tagme - Tag Saya
${global.emojipick}.warn - Peringatan
${global.emojipick}.delwarn - Hapus Warning
${global.emojipick}.reswarn - Reset Warning
${global.emojipick}.setwarn - Set Batas
${global.emojipick}.warninfo - Info Warning
${global.emojipick}.cekasalmember - Cek Asal
${global.emojipick}.spamtag - Spam Tag
${global.emojipick}.stopspam - Stop Spam
${global.emojipick}.totalchat - Total Chat
${global.emojipick}.totalpesan - Total Pesan
${global.emojipick}.alicegroup - Antilink
${global.emojipick}.kickall
${global.emojipick}.addallback
${global.emojipick}.kicklog
${global.emojipick}.clearkicklog
${global.emojipick}.setwelcome - Atur pesan sambutan
${global.emojipick}.setleft - Atur pesan keluar grup
${global.emojipickxx}`

global.ownermenu = `
┌── •「 OWNER TOOLS 」
${global.emojipick}.alice - Info Sistem
${global.emojipick}.uptesti - Uptime
${global.emojipick}.fix - Perbaiki Bug
${global.emojipick}.listerror - Daftar Error
${global.emojipick}.restart - Restart Bot
${global.emojipick}.shutdown - Matikan Bot

MANAGE USERS & ACCESS
${global.emojipick}.banuser - Ban Pengguna
${global.emojipick}.unbanuser - Unban Pengguna
${global.emojipick}.listbanuser - Daftar Terban
${global.emojipick}.addprem - Tambah Premium
${global.emojipick}.delprem - Hapus Premium
${global.emojipick}.listprem - List Premium
${global.emojipick}.addowner - Tambah Owner
${global.emojipick}.delowner - Hapus Owner

PLUGIN CONTROL
${global.emojipick}.addplugins - Tambah Plugin
${global.emojipick}.editplugins - Edit Plugin
${global.emojipick}.delplugins - Hapus Plugin
${global.emojipick}.getplugins - Lihat Plugin
${global.emojipick}.sendplug - Kirim Plugin

FILE & CASE MANAGER
${global.emojipick}.addfile - Tambah File
${global.emojipick}.delfile - Hapus File
${global.emojipick}.addfolder - Folder Baru
${global.emojipick}.delfolder - Hapus Folder
${global.emojipick}.addcase - Tambah Case
${global.emojipick}.editcase - Edit Case
${global.emojipick}.delcase - Hapus Case
${global.emojipick}.listcase - Daftar Case
${global.emojipick}.sendfitur - Kirim Fitur

CONTROL SESI & BIOMETRIK
${global.emojipick}.getsession - Ambil Sesi
${global.emojipick}.delsession - Hapus Sesi
${global.emojipick}.autobio - Auto Bio
${global.emojipick}.autoread - Auto Baca
${global.emojipick}.autotyping - Auto Ketik
${global.emojipick}.autorecord - Auto Rekam

SETTING & CONFIG
${global.emojipick}.setprefix - Ganti Prefix
${global.emojipick}.setimgmenu - Ganti Gambar
${global.emojipick}.setppbot - Ganti PP Bot
${global.emojipick}.setpppanjang - PP Panjang
${global.emojipick}.onlygc - Bot Grup Saja
${global.emojipick}.anticall - Anti Telpon
${global.emojipick}.groupattack - Spam Grup
${global.emojipick}.kickall - Kick Semua
${global.emojipick}.altag - Tag Owner

UPDATE & LOGS
${global.emojipick}.addchangelog - Tambah Log
${global.emojipick}.delchangelog - Hapus Log
${global.emojipick}.changelog - Lihat Log
${global.emojipick}.upch-audio - Update Audio
${global.emojipick}.upsw - Status WA

PANEL & FUNCTION
${global.emojipick}.addfunction - Tambah Fungsi
${global.emojipick}.delfunction - Hapus Fungsi
${global.emojipick}.getfunction - Lihat Fungsi
${global.emojipick}.kudetpanel - Dashboard Panel

CURL & SCRAPE
${global.emojipick}.addscrape - Tambah Scraper
${global.emojipick}.dellscrape - Hapus Scraper
${global.emojipick}.getscrape - Lihat Scraper

LIMIT & RESTORE
${global.emojipick}.addlimit - Tambah Limit
${global.emojipick}.dellimit - Kurangi Limit
${global.emojipick}.resetlimit - Reset Limit

SEWA MANAGER
${global.emojipick}.addpsewa - Tambah Sewa
${global.emojipick}.delsewa - Hapus Sewa
${global.emojipick}.listsewa - List Penyewa
${global.emojipick}.bangroup - Ban Grup
${global.emojipick}.out - Keluar Grup
${global.emojipickxx}`

global.gamemenu = `
┌── •「 GAME 」
${global.emojipick}.dadu - Lempar Dadu
${global.emojipick}.judibola - Tebak Skor
${global.emojipick}.werewolf - Game Serigala
${global.emojipick}.listhadiah - Hadiah
${global.emojipick}.buathadiah - Tambah Hadiah
${global.emojipick}.redeemcode - Tukar Kode
${global.emojipick}.suitbot - Suit Bot
${global.emojipick}.patroli - Patroli
${global.emojipick}.tebakld - Tebak Lagu

— UNO GAME
${global.emojipick}.uno - Status Uno
${global.emojipick}.uno info - Info Uno
${global.emojipick}.uno join - Gabung Game
${global.emojipick}.uno start - Mulai Game
${global.emojipick}.uno stop - Stop Game
${global.emojipick}.uno hand - Lihat Kartu
${global.emojipick}.uno card - Ambil Kartu
${global.emojipick}.uno play - Mainkan Kartu
${global.emojipick}.uno pass - Lewat
${global.emojipick}.uno color - Ubah Warna

— CRYPTO
${global.emojipick}.crypto price - Lihat harga koin hari ini
${global.emojipick}.crypto buy - Beli aset digital
${global.emojipick}.crypto sell - Jual untuk untung
${global.emojipick}.crypto portfolio - Koleksi asetmu
${global.emojipick}.crypto alert - Pasang peringatan harga
${global.emojipick}.crypto watchlist - Daftar pantauanmu
${global.emojipick}.crypto watchadd - Tambah koin pantauan
${global.emojipick}.crypto watchdel - Hapus dari pantauan

— CLAN GAME
${global.emojipick}.clan create - Buat Clan
${global.emojipick}.clan join - Gabung
${global.emojipick}.clan approve - Setujui
${global.emojipick}.clan war - Perang
${global.emojipick}.clan list - Daftar
${global.emojipick}.clan leave - Keluar
${global.emojipick}.clan delete - Hapus
${global.emojipick}.clan member - Anggota
${global.emojipick}.clan missions - Misi
${global.emojipick}.clan task - Tugas
${global.emojipick}.clan upgrade - Upgrade
${global.emojipick}.clan tournament - Turnamen

— CATUR GAME
${global.emojipick}.catur@tag - Tantang
${global.emojipick}.caturstatus - Status Catur
${global.emojipick}.caturskip - Lewati
${global.emojipick}.caturdraw - Seri
${global.emojipick}.caturmenyerah - Menyerah
${global.emojipick}.caturhapus - Hapus Game
${global.emojipick}.caturnilai - Nilai
${global.emojipick}.caturrank - Rank Global
${global.emojipick}.caturtop10 - Top 10
${global.emojipick}.caturskorreset - Reset Skor
${global.emojipick}.caturnext - Giliran
${global.emojipick}.caturboard - Lihat Papan
${global.emojipick}.caturhistory - Riwayat
${global.emojipick}.caturanalisa - Analisa
${global.emojipick}.caturtimer - Timer
${global.emojipick}.caturnotif - Notifikasi
${global.emojipick}.caturhelp - Bantuan

— GENSHIN GAME
${global.emojipick}.gens-characters - Karakter
${global.emojipick}.gens-advrank - Rank Petualang
${global.emojipick}.gens-animals - Hewan
${global.emojipick}.gens-area - Area
${global.emojipick}.gens-giartifact - Artefak
${global.emojipick}.gens-giconstellation - Konstelasi
${global.emojipick}.gens-craft - Craft
${global.emojipick}.gens-domain - Domain
${global.emojipick}.gens-emoji - Emoji
${global.emojipick}.gens-enemy - Musuh
${global.emojipick}.gens-food - Makanan
${global.emojipick}.gens-materials - Material
${global.emojipick}.gens-namacard - Nama Card
${global.emojipick}.gens-nation - Negara
${global.emojipick}.gens-outfit - Outfit
${global.emojipick}.gens-potion - Potion
${global.emojipick}.gens-talents - Talenta
${global.emojipick}.gens-viewpoint - Spot Foto
${global.emojipick}.gens-voiceovers - Suara
${global.emojipick}.gens-weapons - Senjata
${global.emojipick}.gens-wildlife - Satwa

— TEBAK GAME
${global.emojipick}.tebak lagu - Lagu
${global.emojipick}.tebak film - Film
${global.emojipick}.tebak anime - Anime
${global.emojipick}.tebak karakter - Karakter
${global.emojipick}.tebak bendera - Bendera
${global.emojipick}.tebak kota - Kota
${global.emojipick}.tebak negara - Negara
${global.emojipick}.tebak logo - Logo
${global.emojipick}.tebak hewan - Hewan
${global.emojipick}.tebak suara - Suara
${global.emojipick}.tebak tokoh - Tokoh
${global.emojipick}.tebak makanan - Makanan
${global.emojipick}.tebak game - Game
${global.emojipick}.tebak ayat - Ayat
${global.emojipick}.tebak emoji - Emoji
${global.emojipick}.tebak kata - Kata
${global.emojipick}.tebak artis - Artis

— KOBOY
${global.emojipick}.koboy help - Bantuan dunia koboy
${global.emojipick}.koboy helprole - Info semua peran
${global.emojipick}.koboy daftar - Jadi koboy sejati
${global.emojipick}.koboy status - Statusmu di Wild West
${global.emojipick}.koboy kerja - Cari uang di padang tandus
${global.emojipick}.koboy tembak @ - Duel maut
${global.emojipick}.koboy beli [item] - Beli di toko koboy
${global.emojipick}.koboy jual [item] - Jual hasil rampasan
${global.emojipick}.koboy skill - Lihat kemampuan koboy
${global.emojipick}.koboy wanted - Buronan paling dicari
${global.emojipick}.koboy top - Koboy terkaya di dataran
${global.emojipick}.koboy level - Cek levelmu
${global.emojipick}.koboy leveltop - Peringkat para veteran
${global.emojipick}.koboy topkoboy - Ranking reputasi
${global.emojipick}.koboy peran - Semua role tersedia
${global.emojipick}.koboy tangkap @ - Tangkap penjahat
${global.emojipick}.koboy lepas @ - Bebaskan tahanan
${global.emojipick}.koboy hukum @ - Hukum pelanggar hukum
${global.emojipick}.koboy misi - Ambil misi harian
${global.emojipick}.koboy kirim [item] @ - Kirim item bantuan
${global.emojipick}.koboy rank - Semua ranking koboy
${global.emojipick}.koboy kota - Masuk ke kota koboy
${global.emojipick}.koboy kota bank - Simpan uangmu
${global.emojipick}.koboy kota saloon - Nongkrong & minum
${global.emojipick}.koboy kota toko - Belanja kebutuhan
${global.emojipick}.koboy kota penjara - Lihat para kriminal
${global.emojipick}.koboy kota sheriff - Bicara dengan sheriff
${global.emojipick}.koboy setor [jumlah] - Simpan uang di bank
${global.emojipick}.koboy tarik [jumlah] - Ambil uang dari bank
${global.emojipick}.koboy cekstok - Lihat stok toko hari ini
${global.emojipick}.koboy rampok @ - Rampok lawanmu
${global.emojipick}.koboy equip [item] - Kenakan item perlindungan
${global.emojipick}.koboy daily - Hadiah harianmu
${global.emojipick}.koboy minum - Minum untuk energi
${global.emojipick}.koboy kerja_berani - Kerja berbahaya
${global.emojipick}.koboy invest [jumlah] - Investasikan uangmu
${global.emojipick}.koboy cair - Ambil hasil investasi
${global.emojipick}.koboy tebak [1-5] - Tebak angka keberuntungan

${global.emojipickxx}`

global.rpgmenu = `
┌── •「 *ʀᴘɢ ᴍᴇɴᴜ ᴀʟɪᴄᴇ ⚔️* 」
${global.emojipick}work – Kerja harian
${global.emojipick}daily – Klaim harian
${global.emojipick}weekly – Klaim mingguan
${global.emojipick}monthly – Klaim bulanan
${global.emojipick}coin – Cek saldo coin
${global.emojipick}goldbar – Tukar ke goldbar
${global.emojipick}bank – Simpan coin
${global.emojipick}deposit – Setor ke bank
${global.emojipick}withdraw – Ambil dari bank
${global.emojipick}vault – Cek isi bank
${global.emojipick}limit – Cek batas kerja
${global.emojipick}slot – Main slot coin
${global.emojipick}shop – Toko RPG
${global.emojipick}buy – Beli item
${global.emojipick}sell – Jual item
${global.emojipick}bid – Lelang item
${global.emojipick}auction – Mulai lelang
${global.emojipick}claimlelang – Ambil hasil lelang
${global.emojipick}tax – Cek pajak transaksi
${global.emojipick}inv – Cek inventory
${global.emojipick}equip – Pasang senjata/armor
${global.emojipick}unequip – Lepas senjata/armor
${global.emojipick}equipment – Cek yang sedang dipakai
${global.emojipick}storage – Penyimpanan tambahan
${global.emojipick}bag – Upgrade kapasitas tas
${global.emojipick}upgrade – Naikkan level item
${global.emojipick}repair – Perbaiki item rusak
${global.emojipick}dismantle – Bongkar item
${global.emojipick}fuse – Gabung item
${global.emojipick}rarity – Cek kelangkaan
${global.emojipick}duel – Tantang duel
${global.emojipick}accept – Terima tantangan
${global.emojipick}forfeit – Menyerah duel
${global.emojipick}battle – Lawan musuh acak
${global.emojipick}boss – Lawan boss
${global.emojipick}raid – Raid boss tim
${global.emojipick}fight – Bertarung biasa
${global.emojipick}skillatk – Skill serang
${global.emojipick}itematk – Gunakan item tempur
${global.emojipick}escape – Kabur pertarungan
${global.emojipick}revive – Bangkit kembali
${global.emojipick}level – Lihat level
${global.emojipick}exp – Lihat EXP
${global.emojipick}profile – Info karakter
${global.emojipick}job – Ganti profesi
${global.emojipick}skill – Cek skill
${global.emojipick}learn – Pelajari skill
${global.emojipick}useskill – Gunakan skill
${global.emojipick}reskill – Reset skill
${global.emojipick}prestige – Reset total
${global.emojipick}class – Ganti class lanjutan
${global.emojipick}power – Total power
${global.emojipick}quest – Misi aktif
${global.emojipick}claimquest – Klaim hadiah
${global.emojipick}story – Cerita RPG
${global.emojipick}chapter – Lanjut chapter
${global.emojipick}cutscene – Dialog cerita
${global.emojipick}rumor – Info rahasia
${global.emojipick}lore – Cerita dunia
${global.emojipick}storyquest – Quest cerita RPG
${global.emojipick}narrator – Narasi petualangan
${global.emojipick}mine – Menambang
${global.emojipick}dig – Menggali harta
${global.emojipick}farm – Bertani bahan
${global.emojipick}cook – Masak makanan
${global.emojipick}alchemy – Campur bahan
${global.emojipick}combine – Gabung material
${global.emojipick}recipe – Lihat resep
${global.emojipick}forge – Buat senjata
${global.emojipick}brew – Buat potion
${global.emojipick}enchant – Tambah efek
${global.emojipick}extract – Ambil essence
${global.emojipick}openbox – Buka kotak
${global.emojipick}chest – Lihat peti
${global.emojipick}key – Gunakan kunci
${global.emojipick}fragment – Gabung fragmen
${global.emojipick}shard – Keping langka
${global.emojipick}rune – Batu sihir
${global.emojipick}trade – Tukar item
${global.emojipick}offer – Kirim tawaran
${global.emojipick}accepttrade – Terima trade
${global.emojipick}canceltrade – Batal trade
${global.emojipick}gift – Kirim item
${global.emojipick}donate – Donasi item
${global.emojipick}market – Pasar global
${global.emojipick}price – Harga item
${global.emojipick}ranking – Peringkat top
${global.emojipick}reputasi – Nilai moral
${global.emojipick}karma – Baik atau buruk
${global.emojipick}wanted – Buronan
${global.emojipick}bounty – Hadiah tangkapan
${global.emojipick}fame – Popularitas
${global.emojipick}title – Gelar langka
${global.emojipick}prestigelevel – Peringkat elit
${global.emojipick}world – Map dunia
${global.emojipick}travel – Pergi lokasi
${global.emojipick}event – Event aktif
${global.emojipick}worldboss – Boss dunia
${global.emojipick}dungeon – Dungeon RPG
${global.emojipick}explore – Eksplorasi
${global.emojipick}treasure – Harta karun
${global.emojipick}portal – Portal dimensi
${global.emojipick}relic – Artefak kuno
${global.emojipick}pet – Hewan peliharaan
${global.emojipick}summon – Panggil bantuan
${global.emojipick}partner – Partner bertarung
${global.emojipick}mount – Hewan tunggangan
${global.emojipick}essence – Jiwa item
${global.emojipick}achievement – Pencapaian
${global.emojipick}questboard – Papan misi acak
${global.emojipick}timetravel – Perjalanan waktu
${global.emojipick}reincarnate – Rebirth sistem prestige
${global.emojipick}distortion – Zona chaos dimensi
${global.emojipickxx}`

// Listmenu & Allmenu, Semua disatukan menyesuaikan command yang tersedia

global.allmenu = `${global.cpanelmenu}\n
${global.pushmenu}\n
${global.beritamenu}\n
${global.audiomenu}\n
${global.anonymousmenu}\n
${global.storemenu}\n
${global.mainmenu}\n
${global.aimenu}\n
${global.convertmenu}\n
${global.toolsmenu}\n
${global.islamimenu}\n
${global.downloadermenu}\n
${global.premiummenu}\n
${global.searchmenu}\n
${global.ephotomenu}\n
${global.primbonmenu}\n
${global.randommenu}\n
${global.groupmenu}\n
${global.ownermenu}\n
${global.gamemenu}\n
${global.rpgmenu}`


let file = require.resolve(__filename) 
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(color(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})