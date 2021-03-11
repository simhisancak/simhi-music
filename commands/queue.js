module.exports.run = async (bot, message, args) => {
    let queue = bot.distube.getQueue(message);
    if (queue){
        message.channel.send('Oynatma Listesi:\n' + queue.songs.map((song, id) =>
            `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``
        ).slice(0, 10).join("\n"));
    }
    else{
        message.channel.send("Sıra Boş!");
    }
}

module.exports.config = {
    name: "queue",
    aliases: ['que']
}
