import { Telegraf } from "telegraf";
import axios from "axios";
import sqlite3 from "sqlite3";

const bot = new Telegraf('6062111377:AAGkrMBMFBWVtiF3RQDtzPz5FSN2fmiMWIs');
const usersession="";

axios.post("https://api.oytickets.uz/login",
  JSON.stringify({
    "login":"Ex.12121332",
    "password":"Pass1"
  })
).then((res)=>{
  return res.json();
}).then((res) => {
  console.log(res);
})

let sql;

// const db = new sqlite3.Database('./data/data.db', sqlite3.OPEN_READWRITE, (err) => {
//   if (err) return console.error(err.message);
// })

bot.start(async (ctx) => {
  ctx.reply(`Вас приветствует Телеграм версия OY:Tickets 👋\n\nОтправьте нам свой номер телефона, чтобы мы отправили вам купленные билеты 🎟️\n\nЕсли вы в первый раз у нас, то ничего страшного 😄\n\nВидите синюю кнопку в левом нижнем углу?\n Если нажмете на нее, сможете пользоваться нашим сервисом прямо отсюда, в Телеграм.\n\nВы можете посмотреть все новинки в кино, купить билеты на удобные сеансы, получить за это кешбек, а также узнать, какие фильмы скоро выйдут в прокат 🎥\n\nБилеты не нужно нигде печатать, у вас же всегда с собой телефон 📱.\n\nПросто покажите QR-код билета сотруднику кинотеатра у входа на ваш сеанс и можете спокойно заходить наслаждаться вашим любимым фильмом 🍿\n`);
  await ctx.telegram.sendMessage(ctx.chat.id, "Для доступа к своим билетом поделитесь своим номером", {
    parse_mode: "Markdown",
    reply_markup: {
      one_time_keyboard: true,
      keyboard: [
        [
          {

            text: "Отправить номер",
            request_contact: true,
          },
          { text: "Оставить отзывы" },

        ],
      ],
      resize_keyboard: true,
      force_reply: true,
    },
  });
});
bot.on("contact", (ctx) => {
  let contact = ctx.message.contact;
  // console.log(contact.phone_number);
  if (!phoneExist(contact.phone_number)) {
    // dbInsertion(contact.first_name)
    bot.telegram.sendMessage(ctx.chat.id, "Билеты", {
      reply_markup: {
        keyboard: [
          [
            { text: "Мои билеты" },
            { text: "Оставить отзывы" },

          ]
        ],
        resize_keyboard: true,
      }
    })
  } else {
    bot.telegram.sendMessage(ctx.chat.id, `
    Пользователя с таким номером у нас нет 😪\n\nНо страшного нет ничего в этом, юный падаван. Регистрации путь легок очень ☄️\n\nКнопку нажмите в углу левом нижнем сначала. Потом в окне открывшемся в раздел «Аккаунт» перейдите. В разделе этом «Зарегистрироваться» кнопка есть. Ее нажать надо вам и информацию свою всю ввести.\nВ конце кнопку зеленую внизу нажмите и номер телефона свой подтвердите.\n\nНа этом путь к регистрации закончится ваш. Себе теперь можете купить билет наш ⭐️\n`)
  }
});

bot.hears("Мои билеты", ctx => {
  let response;
  // fetch("https://api.oytickets.uz/customers/tickets").then(res=>{
  //   console.log(res);
  //   response=res.json();
  // })
  bot.telegram.sendPhoto(ctx.chat.id, `https://api.qrserver.com/v1/create-qr-code/?data=Hello world&amp;size=100x100`, {
    caption: 'Ваш билет: \nФильм: movie_name\nВремя сеанса: Session_time\nНомер зала: cinema_Hall_id\nНомер места: Seat_number'
  })
})

bot.hears("Оставить отзывы", (ctx) => {
  bot.telegram.sendMessage(ctx.chat.id, "Здесь вы можете пожаловаться нам на бот или сайт, а можете и похвалить, если хотите 😄");
  // console.log(ctx.message.text);
  bot.on("message", (ctxc) => {
    // console.log(ctxc.text);
    // console.log(ctxc.chat);
    bot.telegram.sendMessage(ctx.chat.id, "Спасибо за отзыв.\nЕсли у вас была проблема с сервисом, с вами свяжутся наши Мстители из службы поддержки и решат вашу проблему 🦸‍♂️")
  })
});

bot.launch();

function phoneExist(contact) {
  fetch(`https://api.oytickets.uz/customers/${contact}`)
    .then(response => {
      // console.log(response);
      return response.ok;
    })
}
// function dbInsertion(username, usersession) {
//   sql = `INSERT INTO users(username,usersession) VALUES (?,?)`;
//   db.run(sql, [username, usersession],(err)=>{
//     if (err) return console.error(err.massage);
//   });
// }