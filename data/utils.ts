import bigDecimal from 'js-big-decimal';

import { Uint128 } from './types';

export const getReadableBalance = (balance: Uint128, decimals: number): string => {
    if (balance) {
        let result = new bigDecimal(balance)
        let division = new bigDecimal(Math.pow(10, decimals))
        result = result.divide(division, 3)
        return result.getPrettyValue(3, ',')
    }
    return ""
}

export const reducedWalletAddress = (address: string) => {
    if (address) return `${address.slice(0, 8)}...${address.slice(address.length - 4)}`
    else return ""
}
