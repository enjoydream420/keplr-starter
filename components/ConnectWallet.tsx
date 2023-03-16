import { useSetRecoilState } from 'recoil';

import { useSigningClient } from 'contexts/cosmwasm'
import WalletIcon from './images/WalletIcon'
import ReloadIcon from './images/ReloadIcon'
import WalletBalances from './WalletBalances'
import { userTokenBalancesReloadState } from '../data/store';

const ConnectWallet = () => {
    const { walletAddress, connectWallet, disconnect } = useSigningClient()
    const setReload = useSetRecoilState(userTokenBalancesReloadState)
    const reloadBalance = () => {
        setReload(true)
    }

    return (
        <div className="flex flex-grow lg:flex-grow-0 max-w-full">
            {
                walletAddress ?
                    <div className="flex items-center justify-center">
                        <WalletBalances />
                        <button
                            onClick={reloadBalance}
                        >
                            <ReloadIcon />
                        </button>
                        <button
                            onClick={() => disconnect()}
                            className="ml-3 md:ml-5"
                        >
                            <WalletIcon />
                        </button>
                    </div> :
                    <button
                        className="block btn btn-outline btn-primary w-full max-w-full truncate"
                        onClick={connectWallet}
                    >
                        Connect Wallet
                    </button>
            }
        </div>
    )

}

export default ConnectWallet
