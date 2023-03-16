import { useSetRecoilState } from 'recoil';

import { useSigningClient } from 'contexts/cosmwasm'
import WalletIcon from './images/WalletIcon'
import { userTokenBalancesReloadState } from '../data/store';
import { reducedWalletAddress } from '../data/utils';

const ConnectWallet = () => {
    const { walletAddress, connectWallet, disconnect, loading } = useSigningClient()
    const setReload = useSetRecoilState(userTokenBalancesReloadState)
    const reloadBalance = () => {
        setReload(true)
    }

    return (
        <div className="flex max-w-full">
            {
                walletAddress ?
                    <button
                        onClick={() => disconnect()}
                        className="btn btn-border disabled font-wallet rounded-full"
                    >
                        <WalletIcon />
                        <span className='ml-2'>{reducedWalletAddress(walletAddress)}</span>
                    </button> : (
                loading ? 
                <button
                    className="btn btn-border disabled font-wallet rounded-full"
                    onClick={connectWallet}
                >
                    Connecting...
                </button> : 
                <button
                    className="btn btn-border font-wallet capitalize rounded-full"
                    onClick={connectWallet}
                >
                    <WalletIcon />
                    <span className='ml-2'>Connect</span>
                </button>
                )
            }
        </div>
    )

}

export default ConnectWallet
