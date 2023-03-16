import type { NextPage } from 'next'
import { useRecoilValue } from 'recoil';

import { useSigningClient } from 'contexts/cosmwasm'
import { userTokenBalancesState } from '../data/store';
import { bWYND, bLOOP, veSYNE } from '../data/constants';
import { getReadableBalance } from '../data/utils';

const Home: NextPage = () => {
  const { walletAddress } = useSigningClient()
  const userTokenBalances = useRecoilValue(userTokenBalancesState)
  const bWYND_balance = userTokenBalances.filter(each => each.address === bWYND.address)
  const bLOOP_balance = userTokenBalances.filter(each => each.address === bLOOP.address)
  const veSYNE_balance = userTokenBalances.filter(each => each.address === veSYNE.address)

  return (
    <>
      <div className="flex justify-between w-full">
        <p>bWYND</p>
        <p>{getReadableBalance(bWYND_balance[0].balance, bWYND_balance[0].decimals)}</p>
        <button>Convert</button>
      </div>
      <div className="flex justify-between w-full">
        <p>bLOOP</p>
        <p>{getReadableBalance(bLOOP_balance[0].balance, bLOOP_balance[0].decimals)}</p>
        <button>Convert</button>
      </div>
      <div className="flex justify-between w-full">
        <p>veSYNE</p>
        <p>{getReadableBalance(veSYNE_balance[0].balance, veSYNE_balance[0].decimals)}</p>
        <button>Convert</button>
      </div>
    </>
  )
}

export default Home
