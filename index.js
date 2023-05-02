const TelegramApi = require('node-telegram-bot-api');
const {gameOptions, againOptions, genderOptions} = require('./options.js')
const token = '6215268536:AAE9O_jZcfrOjpAX5vizfeuSMxX-bP99778'

const bot = new TelegramApi(token, { polling: true })

const gender = {}

const chats = {}

const compliments = async (chatId) => {
   await bot.sendMessage(chatId, `Ты попал в раздел комплиментов и поддержки`)
   gender[chatId] = genderOptions;
   await bot.sendMessage(chatId, `Кто тут у нас?`, genderOptions);
}

const startGame = async (chatId) => {
   await bot.sendMessage(chatId, `Сейчас я загадаю цифру от 0 до 9, а ты должен её угадать.`)
   const randomNumber = Math.floor(Math.random() * 10)
   chats[chatId] = randomNumber;
   await bot.sendMessage(chatId, `Я загадал, попробуй отгадай!`, gameOptions);
}

const start = () => {
   bot.setMyCommands([
      { command: `/start`, description: 'Начальное приветствие' },
      { command: `/info`, description: 'Получить информацию о пользователе' },
      { command: `/game`, description: 'Давай поиграем!' },
      { command: `/compliments`, description: 'Раздел комплиментов и поддержки' },

   ]);

   bot.on('message', async msg => {
      const text = msg.text;
      const chatId = msg.chat.id;

      if (text === '/start') {
         await bot.sendSticker(chatId, `https://tlgrm.eu/_/stickers/ccd/a8d/ccda8d5d-d492-4393-8bb7-e33f77c24907/1.jpg`);
         return bot.sendMessage(chatId, 'Ты написал мне, классно!');
      }
      if (text === '/info') {
         return bot.sendMessage(chatId, `Тебя зовут --> ${msg.from.first_name} , твой ник --> ${msg.from.username}`);
      }
      if (text === '/game') {
         return startGame(chatId);
      }
      if (text === '/compliments') {
         return compliments(chatId)
      }

      const data = msg.data;
      const ChatId = msg.message.chat.id;
      if (genderData === gender[chatId]) {
         return bot.sendMessage(chatId, `Ты мужик блеат! Соберись, ${msg.from.username}, не будь тряпкой!`)
      } else {
         return bot.sendMessage(chatId, `Эти комплименты должны тебе помочь`)
         console.log(msg)
      }



      return bot.sendMessage(chatId, `Я тебя не понимаю, попробуй ещё раз`)

   });

   bot.on('callback_query', async msg => {
      const data = msg.data;
      const chatId = msg.message.chat.id;
      if (data === '/again') {
         return startGame(chatId);
      }
      if (data === chats[chatId]) {
         return bot.sendMessage(chatId, `Поздравляю, ты отгадал цифру ${chats[chatId]} !`, againOptions)
      } else {
         return bot.sendMessage(chatId, `Ох и ах, ты не угадал цифру.. Это была цифра ${chats[chatId]} !`, againOptions)
      }


   });


}

start()















