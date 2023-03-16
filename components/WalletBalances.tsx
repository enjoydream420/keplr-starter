import {useRecoilValue} from 'recoil';

import { userTokenBalancesState } from '../data/store';
import { getReadableBalance } from '../data/utils';
import { bWYND, bLOOP, veSYNE } from '../data/constants';

const WalletBalances = () => {
    const userTokenBalances = useRecoilValue(userTokenBalancesState)
    const filteredTokenBalances = userTokenBalances.filter(each => each.address === bWYND.address || each.address === bLOOP.address || each.address === veSYNE.address)
    return (
        <div className="flex">
            {filteredTokenBalances.map((each, index) => (
                <p key={"balance_" + index} className='mr-3'>{each.symbol} {getReadableBalance(each.balance, each.decimals)}</p>
            ))}
        </div>
    )
}

export default WalletBalances
