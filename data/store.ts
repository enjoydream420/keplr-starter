import { atom } from 'recoil';
import { UserTokenBalance, UserCoinBalance } from './types';
import { defaultTokenLists } from './constants';

export const defaultCoinBalance = {
    denom: "ujuno",
    amount: ""
}

export const userTokenBalancesState= atom<UserTokenBalance[]>({
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
