import {useRecoilValue} from 'recoil';

import { tokenPricesState } from '../data/store';
import SyneIcon from './images/SyneIcon';
import WyndIcon from './images/WyndIcon';
import LoopIcon from './images/LoopIcon';

interface PropsType {
    isMobile: boolean
}

const TokenPrices = ({isMobile}: PropsType) => {
    const tokenPrices = useRecoilValue(tokenPricesState)
    return (
        <div className={`${isMobile ? 'mt-3 justify-around flex md:hidden w-full' : 'gap-3 lg:gap-8 hidden md:flex'}`}>
            <div className="flex border-full balance-bg-color font-balance py-1 px-2 rounded-full items-center">
                    <SyneIcon width="20px" />
                    <p  className='ml-2'>{`SYNE $${tokenPrices.syne.price}`}</p>
            </div>
            <div className="flex balance-bg-color font-balance py-1 px-2 rounded-full items-center">
                    <WyndIcon width="20px" />
                    <p  className='ml-2'>{`WYND $${tokenPrices.wynd.price}`}</p>
            </div>
            <div className="flex border-full balance-bg-color font-balance py-1 px-2 rounded-full items-center">
                    <LoopIcon width="20px" />
                    <p  className='ml-2'>{`LOOP $${tokenPrices.loop.price}`}</p>
            </div>
        </div>
    )
}

export default TokenPrices
