import { atom } from 'recoil';
import { UserTokenBalance, UserCoinBalance } from './types';
import { defaultTokenLists, SYNE, WYND, LOOP } from './constants';
import { TokenPrices } from './types';

export const defaultCoinBalance = {
    denom: "ujuno",
    amount: ""
}

export const defaultTokenPrices = {
    syne: {
        address: SYNE.address,
        price: "0.11"
    },
    wynd: {
        address: WYND.address,
        price: "0.05"
    },
    loop: {
        address: LOOP.address,
        price: "0.13"
    }
}

export const userTokenBalancesState = atom<UserTokenBalance[]>({
    key: "userTokenBalances",
    default: defaultTokenLists
})

export const userTokenBalancesReloadState = atom<Boolean>({
    key: "userTokenBalancesReload",
    default: false
})

export const userCoinBalanceState = atom<UserCoinBalance>({
    key: "userCoinBalance",
    default: defaultCoinBalance
})

export const userCoinBalanceReloadState = atom<Boolean>({
    key: "userCoinBalanceReload",
    default: false
})

export const tokenPricesState = atom<TokenPrices>({
    key: "tokenPrice",
    default: defaultTokenPrices
})
