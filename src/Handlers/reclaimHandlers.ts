import { bot, showMainMenu } from '../main';

export async function handleReclaim(chatId: number) {
    bot.sendMessage(chatId, "🚀 Reclaim your SOL/WSOL effortlessly with our tool! 💼");
    bot.sendMessage(chatId, "💡 Purchase this feature to streamline your process. 🧑‍💻");
    bot.sendMessage(chatId, "📞 Reach out now: [https://t.me/lordofdevs](https://t.me/lordofdevs)");
}

export async function runReclaim(chatId: number) {
    bot.sendMessage(chatId, "🚀 Our tool can help you reclaim SOL/WSOL with just a few clicks! 💼");
    bot.sendMessage(chatId, "💡 Contact us to purchase and simplify your workflows. 🧑‍💻");
    bot.sendMessage(chatId, "📞 Reach out now: [https://t.me/lordofdevs](https://t.me/lordofdevs)");
}
