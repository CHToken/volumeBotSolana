import TelegramBot from 'node-telegram-bot-api';
import { bot } from './telegramBot';

export async function handleSimulateVolume(chatId: number, bot: TelegramBot) {
    bot.sendMessage(chatId, "🚀 Want to simulate trading volume and analyze SOL losses? This powerful tool is available for purchase! 💼");
    bot.sendMessage(chatId, "💡 Contact us to get full access and take your trading strategies to the next level. 🧑‍💻");
    bot.sendMessage(chatId, "📞 Reach out now to unlock this feature: https://t.me/lordofdevs");
}

// Call this function to show the main menu
function showMainMenu(chatId: number, bot: TelegramBot) {
    bot.sendMessage(chatId, "🔍 Explore more of our tools and services. Contact us to learn more!");
}

// Example of how to use the new marketing message
bot.onText(/\/simulate/, (msg) => {
    const chatId = msg.chat.id;
    handleSimulateVolume(chatId, bot);
});
