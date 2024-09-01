import { startTelegramBot } from './src/main';

async function main() {
  console.log('Starting the Telegram bot...');
  startTelegramBot();
}

main().catch((error) => {
  console.error('An error occurred:', error);
  process.exit(1);
});
