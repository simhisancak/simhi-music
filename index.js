require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client({
	partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});
const { loadCommands } = require('./utils/loadCommands');
const DisTube = require('distube')

bot.distube = new DisTube(bot, { searchSongs: false, emitNewSongOnly: true});
bot.distube
    .on("playSong", (message, queue, song) =>message.channel.send(
                `Şuan Oynatılan \`${song.name}\` - \`${song.formattedDuration}\`\nEkleyen: ${song.user}`
    ))  
    .on("playList", (message, queue, playlist, song) => message.channel.send(
        `Liste \`${playlist.name}\` (${playlist.songs.length} Adet Müzik İle Alındı).\nŞuan Oynatılan \`${song.name}\` - \`${song.formattedDuration}\`\nEkleyen: ${song.user}`
    ))
	.on("addSong", (message, queue, song) => message.channel.send(
        `Sıraya Eklendi \`${song.name}\` - \`${song.formattedDuration}\`\nEkleyen: ${song.user}` 
    ))
    .on("searchResult", (message, result) => {
        let i = 0;
        message.channel.send(`**Aşağıdakilerden Birini Seçin**\n${result.map(song => `**${++i}**. ${song.name} - \`${song.formattedDuration}\``).join("\n")}\n*İptal Etmek İçin Başka Birşey Girin veya 60 Saniye Bekleyin*`);
    })
    .on("searchCancel", (message) => message.channel.send(`Arama İptal Edildi`))
    .on("error", (message, e) => {
        console.error(e)
        message.channel.send("Bir Hata Oluştu: " + e);
    });

require('./utils/loadEvents')(bot);

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
loadCommands(bot);


bot.login(process.env.TOKEN);
