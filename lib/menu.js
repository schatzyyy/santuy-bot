const fs = require('fs-extra')

/*
Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.
*/

exports.textTnC = () => {
    return `
Source code / bot ini merupakan program open-source (gratis) yang ditulis menggunakan Javascript, kamu dapat menggunakan, menyalin, memodifikasi, menggabungkan, menerbitkan, mendistribusikan, mensublisensikan, dan atau menjual salinan dengan tanpa menghapus author utama dari source code / bot ini.
Dengan menggunakan source code / bot ini maka anda setuju dengan Syarat dan Kondisi sebagai berikut:
- Source code / bot tidak menyimpan data anda di server kami.
- Source code / bot tidak bertanggung jawab atas perintah anda kepada bot ini.
- Source code / bot anda bisa lihat di https://github.com/Rmdhn-20/santuy-bot
Instagram: https://instagram.com/serbanewbie20/
Best regards, EkuziKA.`
}

/*
Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.
*/

const help = (prefix, jame, betime, pushname, cts, waver) => {
    return `
Haii, *_${pushname} !_* This is *_Santuy - Bot_*, To use my feature check it out below!
*??--Information Bot*
*?*
*?? Repo : github.com/Rmdhn-20/santuy-bot*
*?? Library : @open-wa/wa-automate*
*?? Bot Name : Santuy-bot*
*?? Whatsapp Bot Ver : 1.0*
*?? Creator : EkuziKA*
*?? Owner Number : wa.me/6289501158082*
*?? Date : ${betime}*
*?? Time : ${jame}*
*?*
*??--Sosmed Owner*
*?*
*?? wa.me/6289501158082*
*?? https://github.com/Rmdhn-20/santuy-bot*
*?? https://instagram.com/serbanewbie20/*
*?*
*??--------------*
And this is feature of this Bot!
Creator??? :
*??---------------?*
*??${prefix}sticker*
*??${prefix}sfull*
*??${prefix}stickergif*
*??${prefix}sgiffull*
*??${prefix}stickergiphy*
*??${prefix}stmg*
*??${prefix}ttp*
*??${prefix}attp*
*??${prefix}triggered*
*??${prefix}meme*
*??${prefix}quotemaker*
*??${prefix}pornhub*
*??${prefix}tahta*
*??${prefix}glitch*
*??${prefix}tebakgambar*
*??${prefix}thundertext*
*??${prefix}logoff*
*??${prefix}blackpink*
*??${prefix}glowtext*
*??${prefix}imgtourl*
*??${prefix}takestick*
*??${prefix}sgifwm*
*??---------------?*
Mager Nulis?? :
*??---------------?*
*??${prefix}nulis*
*??${prefix}foliokiri*
*??${prefix}foliokanan*
*??---------------?*
Downloader?? :
*??---------------?*
*??${prefix}ytmp3*
*??${prefix}ytmp4*
*??${prefix}tiktod*
*??${prefix}twitter*
*??${prefix}instastory*
*??${prefix}ig*
*??---------------?*
Islam? :
*??---------------?*
*??${prefix}infosurah*
*??${prefix}surah*
*??${prefix}tafsir*
*??${prefix}ALaudio*
*??${prefix}jsolat*
*??${prefix}randomquran*
*??${prefix}kisahnabi*
*??---------------?*
Kristiani? :
*??---------------?*
*??${prefix}alkitab*
*??---------------?*
Any Search?? :
*??---------------?*
*??${prefix}artinama*
*??${prefix}cekjodoh*
*??${prefix}zodiak*
*??${prefix}kapan*
*??${prefix}apakah*
*??${prefix}bisakah*
*??${prefix}urgay*
*??${prefix}resep*
*??${prefix}wiki*
*??${prefix}cuaca*
*??${prefix}chord*
*??${prefix}lirik*
*??${prefix}movie*
*??${prefix}whatanime*
*??${prefix}doggo*
*??${prefix}fakta*
*??${prefix}fakboy*
*??${prefix}katabijak*
*??${prefix}quote*
*??${prefix}brainly*
*??${prefix}cerpen*
*??${prefix}anime*
*??${prefix}kpop*
*??${prefix}memes*
*??${prefix}tts*
*??${prefix}translate*
*??${prefix}resi*
*??${prefix}dewabatch*
*??${prefix}mtk*
*??${prefix}google*
*??${prefix}ptl*
*??${prefix}say*
*??${prefix}infogempa*
*??${prefix}tod*
*??${prefix}kbbi*
*??${prefix}infobmkg*
*??${prefix}bucin*
*??${prefix}ytsearch*
*??${prefix}artimimpi*
*??${prefix}asupan*
*??${prefix}detail*
*??${prefix}findsticker*
*??${prefix}darkjokes*
*??${prefix}playapik*
*??${prefix}trendingtwit*
*??${prefix}fakta2*
*??${prefix}memeindo*
*??${prefix}kodenuklir*
*??${prefix}iplocation*
*??${prefix}reverseword*
*??${prefix}shortlink*
*??${prefix}filmapik* 
*??${prefix}linknobg*
*??${prefix}pinterest*
*??${prefix}translate*
*??${prefix}tr*
*??${prefix}fiersa*
*??${prefix}chika*
*??---------------?*
?A?n?i?m?e? ??:
*??---------------?*
*??${prefix}nekopoi*
*??${prefix}loli*
*??${prefix}kusonime*
*??${prefix}rhug*
*??${prefix}slap*
*??${prefix}waifu*
*??${prefix}nsfwgif*
*??${prefix}bjgif*
*??${prefix}cumgif*
*??${prefix}kissgif*
*??${prefix}rhentai*
*??${prefix}pussy*
*??${prefix}gifhentai*
*??${prefix}boobs*
*??${prefix}randomhentai*
*??${prefix}baka*
*??${prefix}animeavatar*
*??${prefix}neko*
*??${prefix}rwink*
*??${prefix}lolivid*
*??${prefix}randompat*
*??${prefix}wpanime*
*??${prefix}nekonsfw*
*??${prefix}spank*
*??${prefix}classic*
*??${prefix}kuni*
*??${prefix}trapnime*
*??${prefix}cuddle*
*??${prefix}tickle*
*??${prefix}pokegif*
*??${prefix}feetgif*
*??${prefix}anal*
*??${prefix}sologif*
*??${prefix}ttgif*
*??${prefix}lesbian*
*??---------------?*
?I?m?a?g?e?s? ?:
*??---------------?*
*??${prefix}ameliandani*
*??${prefix}wallpaper*
*??${prefix}wallpaper2*
*??${prefix}pictcogan*
*??${prefix}pictcecan*
*??${prefix}aesthetic*
*??${prefix}images*
*??---------------?*
?t?e?n?t?a?n?g  ?b?o?t? ?:
*??---------------?*
*??${prefix}rules*
*??${prefix}donasi*
*??${prefix}botstat*
*??${prefix}ownerbot*
*??${prefix}join*
*??${prefix}reportbug*
*??---------------?*
?Owner Bot?:
*??---------------?*
*??${prefix}ban* 
*??${prefix}unban*
*??${prefix}oaddprem*
*??${prefix}odelprem*
*??${prefix}bc* 
*??${prefix}leaveall*
*??${prefix}clearall* 
*??${prefix}setstatus*
*??${prefix}setpic*
*??${prefix}screen*
*??${prefix}addcogan*
*??${prefix}addcecan*
*??${prefix}delallstik*
*??${prefix}delallvn*
*??${prefix}delallimg*
*??${prefix}oblock* <reply pesan member>
*??${prefix}block*  <nomor>
*??${prefix}unblock* <reply pesan member>
*??${prefix}unblocked* <nomor>
*??---------------?*
*???????????????????*
*??Donasi (pulsa) : 089501158082*
*??WA Version : ${waver}*
*???????????????????*
Thank's y'all for use to my Bot
`
}
exports.help = help
    
   
const admin = (prefix) => {
    return `
? [ *Admin Group Only* ] ?
*${prefix}mute*
*${prefix}unmute 
*${prefix}welcome*
*${prefix}left*
*${prefix}add*
*${prefix}kick* <reply pesan orang yang ingin dikick>
*${prefix}pkick* <tag member yang ingin dikick>
*${prefix}promote* @tag
*${prefix}opromote* <reply pesan yang ingin dipromote>
*${prefix}odemote* <reply pesan yang ingin didemote>
*${prefix}demote* @tag
*${prefix}infoall*
*${prefix}del*
*${prefix}mutegrup on/off*
*${prefix}seticon*
*${prefix}revoke link gc*
*${prefix}setgroupname*
*${prefix}resend*
*${prefix}bokep*
*${prefix}antilink on/off*
*${prefix}edotensei*
*${prefix}oedotensei* <tag member yang ingin diedotensei>
*${prefix}inv* <reply pesan orang yang ingin dikick>
    
_-_-_-_-_-_-_-_-_-_-_-_-_-_
? [ *Owner Group Only* ] ?
*${prefix}kickall*
*Owner Group adalah pembuat grup.*
`
}
exports.admin = admin

/*
Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.
*/

exports.textDonasi = () => {
    return `
Hai, terimakasih telah menggunakan bot ini, untuk mendukung bot ini kamu dapat membantu dengan berdonasi dengan cara:
| https://trakteer.id/arugabot | Pulsa: 0895-0115-8082 |
Doakan agar project bot ini bisa terus berkembang
Doakan agar author bot ini dapat ide-ide yang kreatif lagi
Donasi akan digunakan untuk pengembangan dan pengoperasian bot ini.
Terimakasih. -EkuziKA`
}

exports.kodenuklir = () => {
    return `	
     ? KODE NUKLIR ?
?229144 253687 238577 236509
?227675 229085 233245 266177
254351 265855 239842 219847
239749 230566 253104 230185
251974 253091 251489 238030
260614 245023 232887 233547
262158 262870 239312 255129
244530 246963 256050 215459
243725 233770 250704 261819
261830 215658 256404 260028
261789 241254 268580 262407
262252 201814 250193 236036
262889 243933 245697 239750
128983 95364 223815 225080
110332 225767 97247 231139
266116 217037 160657 182439
205089 176495 199121 199425
184068 186615 224644 129479
251524 153374 146499 258212
163532 255244 269825 235914
247103 138365 124624 219718
168941 265918 205995 191390
?225496 259137 231681 161688
199613 259260 260433 235532 
?88323 272117 170213 256613
?258382 224942 258382 224942
     
229144 253687 238577 236509
?227675 229085 233245 266177
254351 265855 239842 219847
239749 230566 253104 230185
251974 253091 251489 238030
260614 245023 232887 233547
262158 262870 239312 255129
244530 246963 256050 215459
243725 233770 250704 261819
261830 215658 256404 260028
261789 241254 268580 262407
262252 201814 250193 236036
262889 243933 245697 239750
128983 95364  223815 225080
110332 225767 97247 231139
266116 217037 160657 182439
205089 176495 199121 199425
184068 186615 224644 129479
251524 153374 146499 258212
163532 255244 269825 235914
247103 138365 124624 219718
168941 265918 205995 191390
?225496 259137 231681 161688
?199613 259260 260433 235532
?88323 272117 170213 256613`
}