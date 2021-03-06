var restify = require('restify')
var builder = require('botbuilder')

var config = {
  appId: process.env.BOT_APP_ID,
  appSecret: process.env.BOT_APP_SECRET
}

// Create bot and add dialogs
var bot = new builder.BotConnectorBot({ appId: config.appId, appSecret: config.appSecret })
bot.add('/', function (session) {
  session.send('Hello World')
})

// Setup Restify Server
var server = restify.createServer()
server.post('/api/messages', bot.verifyBotFramework(), bot.listen())
server.listen(process.env.PORT || 3978, function () {
  console.log('%s listening to %s', server.name, server.url)
})
