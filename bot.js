//1151858733:AAGjr5h7W9BIDtrnn9ZJT0Y8sIQ5hwtkgic
//t.me/MotherVersion5Bot   - ссылка на бот

const { Telegraf, Markup } = require("telegraf");
const { keyboard } = require('./menu')

const bot = new Telegraf("1151858733:AAGjr5h7W9BIDtrnn9ZJT0Y8sIQ5hwtkgic");

const inlineMessageRatingKeyboard = Markup.inlineKeyboard([
  Markup.callbackButton('👍', 'like'),
  Markup.callbackButton('👎', 'dislike')
]).extra();

const MY_SCHEDULE = [
  {
    dayName: "Monday",
    lessons: [
      {
        name: "Math",
        time: "8:00",
        professor: "Mr Greek",
        room: 404,
      },
      {
        name: "Geometry",
        time: "10:00",
        professor: "Mr Khristoforidi",
        room: 406,
      },
      {
        name: "Biology",
        time: "12:00",
        professor: "Ms Aiko",
        room: 405,
      },
    ],
    dayNumber: 1,
  },
  {
    dayName: "Tuesday",
    lessons: [
      {
        name: "Math",
        time: "8:00",
        professor: "Mr Greek",
        room: 404,
      },
      {
        name: "Geometry",
        time: "10:00",
        professor: "Mr Khristoforidi",
        room: 406,
      },
      {
        name: "Biology",
        time: "12:00",
        professor: "Ms Aiko",
        room: 405,
      },
    ],
    dayNumber: 2,
  },
  {
    dayName: "Wednesday",
    lessons: [
      {
        name: "Math",
        time: "8:00",
        professor: "Mr Greek",
        room: 404,
      },
      {
        name: "Geometry",
        time: "10:00",
        professor: "Mr Khristoforidi",
        room: 406,
      },
      {
        name: "Biology",
        time: "12:00",
        professor: "Ms Aiko",
        room: 405,
      },
    ],
    dayNumber: 3,
  },
  {
    dayName: "Thursday",
    lessons: [
      {
        name: "Math",
        time: "8:00",
        professor: "Mr Greek",
        room: 404,
      },
      {
        name: "Geometry",
        time: "10:00",
        professor: "Mr Khristoforidi",
        room: 406,
      },
      {
        name: "Biology",
        time: "12:00",
        professor: "Ms Aiko",
        room: 405,
      },
    ],
    dayNumber: 4,
  },
  {
    dayName: "Friday",
    lessons: [
      {
        name: "Math",
        time: "8:00",
        professor: "Mr Greek",
        room: 404,
      },
      {
        name: "Geometry",
        time: "10:00",
        professor: "Mr Khristoforidi",
        room: 406,
      },
      {
        name: "Biology",
        time: "12:00",
        professor: "Ms Aiko",
        room: 405,
      },
    ],
    dayNumber: 5,
  },
];

const jokesArr = [
  "Поехал забирать пьянного друга из гостей, сидим ждём пока нас заберут🤭🤭🤭",
  "Наступило время, когда ты ходишь в душ чисто погреться🙋🏼‍♂️🙋🏼‍♂️🙋🏼‍♂️",
  "Дорогой Дед Мороз, не выпускай пожалуйста баранов на площадь Ала-тоо в следущем году🐑🐑🐑",
  "В университет по утрам нужно идти очень быстро, чтобы не передумать 🙈🙈🙈",
  "Мама спит, она устала я ее уже достала, но не буду унывать буду папу доставать😬😬😬",
  "В холодну погоду маску даже круто носить на улице - это как шапка для губ😎😎😎",
];

const commands = [
  "/start - bot launch",
  "/cmds - bot's opportunities",
  "/info - bot's infromation",
  "/joke - bot's jokes",
  "/schedule - bot's schedule assistance",
  "/help - bot's support",
];

bot.start((ctx) => {
  ctx.reply(`Welcome, ${ctx.from.first_name} ${ctx.from.last_name}
    How can I help you?`, keyboard);
  ctx.reply(keyboard);
});

bot.command("cmds", (ctx) => {
  const cmds = commands.map((item) => {
    return `\n${item}`;
  });

  
});

bot.command("info", (ctx) => {
  ctx.reply(`1. Bot is designed for Uni life assistance
  2. Author: ${ctx.from.first_name} ${ctx.from.last_name}`);
});

bot.command("joke", (ctx) => {
  const random = jokesArr[Math.floor(Math.random() * jokesArr.length)];

  ctx.reply(`${random}`);
});

bot.command("schedule", (ctx) => {
  const today = new Date().getDay();

  const schedule = MY_SCHEDULE.find((scheduleItem) => {
    return scheduleItem.dayNumber === today;
  });

  if (!schedule) {
    ctx.reply("Weekends, NO LESSONS! ;)");
  }

  ctx.reply(`
    ${schedule.dayName} 😱😱😱
    \nYour schedule: ${schedule.lessons.map((lesson) => {
      return `\n${lesson.name}, ${lesson.time}, ${lesson.professor}, ${lesson.room}`;
    })}
    `);

  const time = new Date().getHours();
  const minutes = new Date().getMinutes();
  const fullTime = `${time}: ${minutes}`;

  for (let i = 0; i <= schedule.lessons.length; i++) {
    if (fullTime !== schedule.lessons[i]) {
      return ctx.reply(`It's ${fullTime}, you are late now`);
    }
  }
});

bot.command("help", (ctx) => {
  ctx.reply("Вы находитесь в разделе помощь");
});



bot.hears('Помощь', (ctx) => {
  ctx.reply('Раздел помощи')
})
bot.hears('О нас 🙋🏼‍♂️', (ctx) => {
  ctx.reply('About us')
})

bot.action('like', (ctx) => ctx.reply('🎉 Awesome! 🎉'))
bot.action('dislike', (ctx) => ctx.reply('okey'))

bot.on('message', (ctx) => {
  ctx.telegram.sendMessage(ctx.from.id, "Like?", inlineMessageRatingKeyboard);
})

function startBot() {
  bot.startPolling()
  console.log("bot is started");
}

startBot();
