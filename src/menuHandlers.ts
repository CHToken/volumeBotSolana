import TelegramBot from 'node-telegram-bot-api';
import { userStates } from './userState';
import { bot } from './main';

export function showMainMenu(chatId: number, bot: TelegramBot) {
    const menuText = `
*Welcome to the Volume Bot!*

Please choose an option:`;

    const keyboard = {
        inline_keyboard: [
            [{ text: '👛 Manage Wallets', callback_data: 'wallets' }, { text: '💰 Distribute SOL/WSOL', callback_data: 'distribute' }],
            [{ text: '📊 Simulate Volume', callback_data: 'simulate' }, { text: '▶️ Start Volume Process', callback_data: 'run' }],
            [{ text: '🔄 Reclaim SOL/WSOL', callback_data: 'reclaim' }]
        ]
    };

    bot.sendMessage(chatId, menuText, {
        parse_mode: 'Markdown',
        reply_markup: keyboard
    });
}

export function handleWallets(chatId: number, bot: TelegramBot) {
    const message = `
*Wallet Management*

Choose an option:`;

    const keyboard = {
        inline_keyboard: [
            [{ text: '🆕 Create New Wallets', callback_data: 'create_wallets' }, { text: '📂 Use Existing Wallets', callback_data: 'use_existing_wallets' }],
            [{ text: '🔙 Back to Main Menu', callback_data: 'main_menu' }]
        ]
    };

    bot.sendMessage(chatId, message, {
        parse_mode: 'Markdown',
        reply_markup: keyboard
    });

    userStates.set(chatId, { step: 'wallets' });
}
