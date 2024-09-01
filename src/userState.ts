interface UserState {
    step: 'wallets' | 'distribute' | 'simulate' | 'run' | 'reclaim';
    subStep?: string;
    marketID?: string;
    pfLaunch?: string;
    cyclesIn?: string;
    delayIn?: string;
    jitoTipAmtInput?: string;
    distributeData?: {
        option: number;
        solAmount?: number;
        jitoTipAmt?: number;
        wsolAmounts?: number[];
    };
    simulationData?: {
        solPrice: number;
        jitoTip: number;
        executions: number;
        walletBalances: number[];
        numWallets: number;
    };
}

const userStates: Map<number, UserState> = new Map();

export { UserState, userStates };
