module.exports = client => {
    const channelId = '910832747390574632' // Welcome channel
    client.on('guildMemberAdd', (member) =>{
        console.log(member)
        const message = `Please welcome <@${member.id}> to the server!`

        const channel = member.guild.channels.cache.get(channelId)
        channel.send(message)
    })
}