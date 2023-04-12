import { Telegraf } from "telegraf";
const TOKEN = "6062111377:AAGkrMBMFBWVtiF3RQDtzPz5FSN2fmiMWIs";
const bot = new Telegraf(TOKEN);

const web_link = "https://celebrated-torte-184681.netlify.app/";

bot.start((ctx) =>
  ctx.reply("Welcome :)))))", {
    reply_markup: {
      keyboard: [[{ text: "OY: Tickets", OY_Tickets: { url: web_link } }]],
    },
  })
);

bot.launch();
