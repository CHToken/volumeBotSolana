import TelegramBot from 'node-telegram-bot-api';
import { TELEGRAM_BOT_TOKEN } from '../config';

export const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    showMainMenu(chatId);
});

export function showMainMenu(chatId: number) {
    const menuText = `
*Welcome!*

Explore our premium tools and services available for purchase.`;

    bot.sendMessage(chatId, menuText, {
        parse_mode: 'Markdown',
    });
}

bot.on('callback_query', async (callbackQuery) => {
    const chatId = callbackQuery.message!.chat.id;
    const data = callbackQuery.data;

    bot.sendMessage(chatId, "🚀 Interested in advanced trading tools? Contact us to purchase! 💼");
    bot.sendMessage(chatId, "📞 Reach out now: [https://t.me/lordofdevs](https://t.me/lordofdevs)");

    bot.answerCallbackQuery(callbackQuery.id);
});
