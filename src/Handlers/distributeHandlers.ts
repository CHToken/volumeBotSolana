import { bot, showMainMenu } from '../main';
import { userStates } from '../userState';

export function handleDistribute(chatId: number) {
    bot.sendMessage(chatId, "🚀 Looking to distribute SOL/WSOL? Our powerful tool can help! 💼");
    bot.sendMessage(chatId, "💡 Contact us to purchase this feature and streamline your distribution process. 🧑‍💻");
    bot.sendMessage(chatId, "📞 Reach out now: [https://t.me/lordofdevs](https://t.me/lordofdevs)");
}

export async function handleDistributeSOL(chatId: number, state: any, input: string | undefined) {
    bot.sendMessage(chatId, "🚀 Our tool can automate your SOL/WSOL distribution! 💼");
    bot.sendMessage(chatId, "💡 Contact us to get full access and make your distribution seamless. 🧑‍💻");
    bot.sendMessage(chatId, "📞 Reach out now: [https://t.me/lordofdevs](https://t.me/lordofdevs)");
}

async function runDistribute(chatId: number, distributeData: any) {
    bot.sendMessage(chatId, "🚀 Ready to distribute SOL/WSOL with ease? Purchase our tool! 💼");
    bot.sendMessage(chatId, "💡 Contact us for access: [https://t.me/lordofdevs](https://t.me/lordofdevs)");
}
