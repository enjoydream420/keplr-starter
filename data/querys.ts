import { useSetRecoilState, useRecoilState } from 'recoil';
import { useQuery } from '@tanstack/react-query';
import { useSigningClient } from '../contexts/cosmwasm';
import { userTokenBalancesState, userTokenBalancesReloadState, userCoinBalanceState, defaultCoinBalance, userCoinBalanceReloadState } from './store';
import { useEffect } from 'react';
import { UserTokenBalance, TokenBalanceResponse } from './types';
import { PUBLIC_STAKING_DENOM, defaultTokenLists } from './constants';

export const useFetchUserTokenBalances = () => {
    const { walletAddress, signingClient } = useSigningClient()
    const setTokenBalances = useSetRecoilState(userTokenBalancesState)
    const [reload, setReload] = useRecoilState(userTokenBalancesReloadState)
    const {data, error, refetch} = useQuery<TokenBalanceResponse[] | null>({
        queryKey: ["user_token_balances", signingClient, walletAddress, defaultTokenLists],
        queryFn: async () => {
            if (walletAddress) {
                return await Promise.all(defaultTokenLists.map(each => {
                    return signingClient?.queryContractSmart(each.address, {
                        balance: {
                            address: walletAddress
                        }
                    })
                }))
            }
            return null
        },
        refetchInterval: 60000
    })
    useEffect(() => {
        if (data) {
            const newTokenBalances: UserTokenBalance[] = JSON.parse(JSON.stringify(defaultTokenLists))
            newTokenBalances.map((each, index) => each.balance = data[index]?.balance)
            setTokenBalances(newTokenBalances)
        }
    }, [data, setTokenBalances])
    useEffect(() => {
        if (error) {
            console.log("can't fetch user balances")
        }
    }, [error])
    useEffect(() => {
        if (reload) {
            setReload(false)
            refetch()
        }
    }, [reload, setReload, refetch])
}

export const useFetchUserCoinBalance = () => {
    const { walletAddress, signingClient } = useSigningClient()
    const setCoinBalance = useSetRecoilState(userCoinBalanceState)
    const [reload, setReload] = useRecoilState(userCoinBalanceReloadState)
    const {data, error, refetch} = useQuery({
        queryKey: ["user_coin_balances", signingClient, walletAddress],
        queryFn: async () => {
            if (walletAddress) {
                return await signingClient?.getBalance(walletAddress, PUBLIC_STAKING_DENOM)
            }
            return null
        },
        refetchInterval: 60000
    })
    useEffect(() => {
        if (data) {
            const newCoinBalance = JSON.parse(JSON.stringify(defaultCoinBalance))
            newCoinBalance.amount = data.amount
            setCoinBalance(newCoinBalance)
        }
    }, [data, setCoinBalance])
    useEffect(() => {
        if (error) {
            console.log("can't fetch user balances")
        }
    }, [error])
    useEffect(() => {
        if (reload) {
            setReload(false)
            refetch()
        }
    }, [reload, setReload, refetch])
}
