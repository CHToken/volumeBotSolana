import TelegramBot from 'node-telegram-bot-api';
import { bot } from './main';

export async function createReturns(chatId: number) {
    bot.sendMessage(chatId, "🚀 Looking to create and manage returns? Our premium tool can help! 💼");
    bot.sendMessage(chatId, "💡 Contact us to get access and improve your workflows. 🧑‍💻");
    bot.sendMessage(chatId, "📞 Reach out now: [https://t.me/lordofdevs](https://t.me/lordofdevs)");
}
