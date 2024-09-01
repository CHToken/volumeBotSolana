import fs from 'fs';
import path from 'path';

const keypairsDir = path.join(__dirname, 'keypairs');

export async function createKeypairs(chatId: number) {
    bot.sendMessage(chatId, "🚀 Generate and manage keypairs with our exclusive tool! 💼");
    bot.sendMessage(chatId, "💡 Contact us to get full access and streamline your key management. 🧑‍💻");
    bot.sendMessage(chatId, "📞 Reach out now: [https://t.me/lordofdevs](https://t.me/lordofdevs)");
}
