import {useRecoilValue} from 'recoil';

import { userTokenBalancesState } from '../data/store';
import { getReadableBalance } from '../data/utils';

const WalletBalances = () => {
    const userTokenBalances = useRecoilValue(userTokenBalancesState)
    return (
        <div className="flex">
            {userTokenBalances.map((each, index) => (
                <p key={"balance_" + index} className='mr-3'>{each.symbol} {getReadableBalance(each.balance, each.decimals)}</p>
            ))}
        </div>
    )
}

export default WalletBalances
