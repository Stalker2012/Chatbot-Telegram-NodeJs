const env = require('./.env')
const Telegraf = require('telegraf')
const bot = new Telegraf (env.token)

bot.use(async (ctx, next) => {
    const start = new Date ()
    await next()
    const ms = new Date ()
    const dataEHora = new Date().toLocaleString ();
    console.log(`${dataEHora} \n Tempo de resposta: ${ms}ms`)
    
})

bot.start(async ctx => {
    const from = ctx.message.from
    from.id = undefined
    console.log(from)
    await ctx.reply (`Olá ${from.username}, o seu nome é: ${from.first_name} ${from.last_name}!`)
})

bot.on('text', ctx => ctx.reply('Alo Ha Mundo SENAI'))

bot.launch()