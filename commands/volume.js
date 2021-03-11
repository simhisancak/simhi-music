module.exports.run = async (bot, message, args) => {
    if (!message.member.voice.channel) return message.channel.send('Bir Ses Kanalına Bağlanmalısın!');
    let vol = 0
    try{
        vol = parseInt(args[0]);
    }
    catch (e){
        message.channel.send('Bir Hata Oluştu: ' + e);
        return;  
    }
    bot.distube.setVolume(message, vol);
    message.channel.send("Ses Seviyesi " + args[0] + " Olarak Ayarlandı.");
}

module.exports.config = {
    name: "volume",
    aliases: ["vol", "v"]
}