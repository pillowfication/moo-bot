module.exports = function moo (client) {
  const mooRegex = RegExp.prototype.test.bind(/\b(?:moo+|cows?)\b/i)
  const probability = 0.2

  client.on('message', message => {
    if (!message.author.bot && Math.random() < probability && mooRegex(message.content)) {
      require('../../database').inc()
      message.channel.send('moo')
    }
  })
}