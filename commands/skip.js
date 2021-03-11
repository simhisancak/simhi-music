module.exports.run = async (bot, message, args) => {
    if (!message.member.voice.channel) return message.channel.send('Bir Ses Kanalına Bağlanmalısın!');

    let queue = await bot.distube.getQueue(message);

    if(queue) {
        bot.distube.skip(message);

        message.channel.send('Şarkı Atlanıldı!');
    } else if (!queue) {
        return
    };
}

module.exports.config = {
    name: "skip",
    aliases: ["s"]
}
