//1151858733:AAGjr5h7W9BIDtrnn9ZJT0Y8sIQ5hwtkgic
//t.me/MotherVersion5Bot   - ссылка на бот

const { Telegraf } = require("telegraf");

const bot = new Telegraf("1151858733:AAGjr5h7W9BIDtrnn9ZJT0Y8sIQ5hwtkgic");

const MY_SCHEDULE = [
  {
    dayName: "Monday",
    lessons: [
      'Math, time: 8:00 am, Mr Marshalkovsky, room #404',
      "PE, time: 10:00 am, Mr Spostingsky, room #101",
      "Physics, time: 12:00 pm, Mr Kovalchuk, room #202"
    ],
    dayNumber: 1,
  },
  {
    dayName: "Tuesday",
    lessons: [
      "Geometry, time: 8:00 am, Mr Lewandowski, room #103",
      "JS, time: 10:00 am, Mr Baklawev, room #104",
      "English, time: 12:00 pm, Mr Leondardo, room #107",
    ],
    dayNumber: 2,
  },
  {
    dayName: "Wednesday",
    lessons: [
      "Kyrgyz, time: 8:00 am, Mr Archin, room #215",
      "Science, time: 10:00 am, Ms Milan, room #116",
      "Python, time: 12:00 pm, Mr Adaniyar, room #102",
    ],
    dayNumber: 3,
  },
  {
    dayName: "Thursday",
    lessons: [
      "Math, time: 8:00 am, Mr Leondardo, room #107",
      "PE, time: 10:00 am, Mr Leondardo, room #107",
      "Physics, time: 12:00 pm, Mr Leondardo, room #107",
      ],
    dayNumber: 4,
  },
  {
    dayName: "Friday",
    lessons: [
      "Arch, time: 12:00 pm, Mr Leondardo, room #107",
      "Design, time: 12:00 pm, Mr Leondardo, room #107", 
      "Sociology, time: 12:00 pm, Mr Leondardo, room #107",
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
  "/help - bot's support"];

bot.start((ctx) => {
  ctx.reply(`Welcome, ${ctx.from.first_name} ${ctx.from.last_name}
    How can I help you?`);
});

bot.command("cmds", (ctx) => {
  const cmds = commands.map((item) => {
    return `\n${item}`;
  });

  ctx.reply(`${cmds}`);
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
    Your schedule: ${schedule.lessons.map((item) => {
      return `\n${item}`;
    })}
    `);

  const time = new Date().getHours();
  const minutes = new Date().getMinutes();
  const fullTime = `${time}: ${minutes}`;

  for (let i = 0; i <= schedule.lessons.length; i++) {
    if (fullTime !== schedule.lessons[i]) {
      return ctx.reply(`It's ${fullTime}, you are late now`)
    }
  }

});

bot.command("help", (ctx) => {
  ctx.reply("Вы находитесь в разделе помощь");
});

function startBot() {
  bot.launch();
  console.log("bot is started");
}

startBot();
