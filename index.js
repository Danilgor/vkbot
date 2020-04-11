const VkBot = require('node-vk-bot-api')
const Markup = require('node-vk-bot-api/lib/markup');

const bot = new VkBot("32631c2bfcb12072be2b8e1a411d7b22c5acb23ebd3625c7e74bf3dbc5edec79ddbe177fd1c31e75a2dcb")

ctx.reply('привет', null, Markup
  .keyboard([
    'купить',
    'продать',
  ])
  .oneTime()
)

bot.startPolling()
