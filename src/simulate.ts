import TelegramBot from 'node-telegram-bot-api';
import { bot } from './telegramBot';

export async function calculateVolumeAndSolLoss(chatId: number, bot: TelegramBot) {
    bot.sendMessage(chatId, "🚀 Want to calculate trading volume and SOL loss? This tool is available for purchase! 💼");
    bot.sendMessage(chatId, "💡 Contact us for full access and enhance your trading strategies. 🧑‍💻");
    bot.sendMessage(chatId, "📞 Reach out now to unlock this feature: [https://t.me/lordofdevs](https://t.me/lordofdevs)");
}
