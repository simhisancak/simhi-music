module.exports.run = async (bot, message, args) => {
    if (!message.member.voice.channel) return message.channel.send('Bir Ses Kanalına Bağlanmalısın!');

    let queue = await bot.distube.getQueue(message);

    if(queue) {
        bot.distube.stop(message)

        message.channel.send('Çıkış Yapıldı!')
    } else if (!queue) {
        return
    };
}

module.exports.config = {
    name: "stop",
    aliases: ["dc", "disconnect"]
}
