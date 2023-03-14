import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { SigningCosmWasmProvider } from 'contexts/cosmwasm'
import Layout from 'components/Layout'
import 'styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SigningCosmWasmProvider>
      <RecoilRoot>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </SigningCosmWasmProvider>
  )
}
export default MyApp
