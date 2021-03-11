module.exports = bot => {
    console.log(bot.user.username +  ' is online!')
    bot.user.setPresence({
        status : 'idle',
        activity : { 
            name : ',help or ,h',
            type: 'LISTENING' 
        }
    });
}