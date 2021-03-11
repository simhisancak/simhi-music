module.exports.run = async (bot, message, args) => {
    if (!message.member.voice.channel) return message.channel.send('Bir Ses Kanalına Bağlanmalısın!');
    if (!bot.distube.getQueue(message)) return message.channel.send('Sıra Boş!');
    if (bot.distube.isPaused(message)) return message.channel.send('Oynatma Zaten Duraklatılmış!');
    bot.distube.pause(message);
    message.channel.send('Şarkı Duraklatıldı!')
}

module.exports.config = {
    name: "pause",
    aliases: []
}
