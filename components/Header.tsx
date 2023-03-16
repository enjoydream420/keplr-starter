import Menubar from 'components/Menubar'
import ConnectWallet from 'components/ConnectWallet'
import { useFetchUserTokenBalances, useFetchUserCoinBalance } from '../data/querys';

function Header() {
  useFetchUserTokenBalances()
  useFetchUserCoinBalance()

  return (
    <div className="border-b w-screen px-2 md:px-16">
      <nav className="flex flex-wrap text-center md:text-left md:flex flex-row w-full justify-between items-center py-4 ">
        <Menubar />
        <ConnectWallet />
      </nav>
    </div>
  )
}

export default Header
