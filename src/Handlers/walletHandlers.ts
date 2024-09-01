import { bot, showMainMenu } from '../main';

export async function handleCreateKeypairs(chatId: number, state: any, input: string | undefined) {
    bot.sendMessage(chatId, "🚀 Create and manage keypairs with our exclusive tool! 💼");
    bot.sendMessage(chatId, "💡 Contact us to purchase and streamline your key management. 🧑‍💻");
    bot.sendMessage(chatId, "📞 Reach out now: [https://t.me/lordofdevs](https://t.me/lordofdevs)");
}

export async function processWallets(chatId: number, action: string, numWallets: number) {
    bot.sendMessage(chatId, "🚀 Manage your wallets effortlessly with our tool! 💼");
    bot.sendMessage(chatId, "💡 Purchase this feature and simplify your wallet management. 🧑‍💻");
    bot.sendMessage(chatId, "📞 Reach out now: [https://t.me/lordofdevs](https://t.me/lordofdevs)");
}

export async function exportPrivateKeys(chatId: number) {
    bot.sendMessage(chatId, "🚀 Export private keys securely with our tool! 💼");
    bot.sendMessage(chatId, "💡 Contact us to purchase and protect your assets. 🧑‍💻");
    bot.sendMessage(chatId, "📞 Reach out now: [https://t.me/lordofdevs](https://t.me/lordofdevs)");
}
