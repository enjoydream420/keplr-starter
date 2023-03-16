import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { SigningCosmWasmProvider } from 'contexts/cosmwasm'
import Layout from 'components/Layout'
import 'styles/globals.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import "../styles/css/color.css";
import "../styles/css/font.css";
import "../styles/css/border.css";

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SigningCosmWasmProvider>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </RecoilRoot>
      </QueryClientProvider>
    </SigningCosmWasmProvider>
  )
}
export default MyApp
