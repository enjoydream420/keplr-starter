import Menubar from 'components/Menubar'
import ConnectWallet from 'components/ConnectWallet'
import { useFetchUserTokenBalances, useFetchUserCoinBalance } from '../data/querys';
import WalletBalances from './WalletBalances';
import TokenPrices from './TokenPrices';
import Logo from './Logo';

function Header() {
  useFetchUserTokenBalances()
  useFetchUserCoinBalance()

  return (
    <div className="px-2 md:px-16 header-bg-color">
      <nav className="flex flex-wrap text-center md:text-left md:flex flex-row w-full justify-between items-center py-4 container mx-auto gap-4">
        <Logo />
        <TokenPrices isMobile={false} />
        <ConnectWallet />
      </nav>
      <div className="flex container mx-auto justify-center">
        <TokenPrices isMobile={true} />
      </div>
    </div>
  )
}

export default Header
