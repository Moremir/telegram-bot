const {Markup} = require('telegraf');

const keyboard = Markup.keyboard([
    ['Помощь', 'О нас 🙋🏼‍♂️'],
    ['sadasd', 'dsasadsda']
]).resize().extra();

module.exports = {
    keyboard
}