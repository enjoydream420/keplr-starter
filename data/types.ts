export type Uint128 = string;

export interface UserTokenBalance {
    address: string
    name: string
    symbol: string
    decimals: number
    balance: Uint128
}

export interface TokenBalanceResponse {
    balance: Uint128
}

export interface UserCoinBalance {
    denom: string,
    amount: Uint128
}
