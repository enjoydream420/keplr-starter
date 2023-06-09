import { ReactNode } from 'react'
import Head from 'next/head'

import Header from './Header'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen text-base-content">
      <Head>
        <title>{process.env.NEXT_PUBLIC_SITE_TITLE}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="flex flex-col items-center justify-center w-full flex-1 text-center container mx-auto">
        {children}
      </main>
      <footer className="flex items-center justify-center w-full h-24 border-t">
        Powered by{' '}
        <a
          className="pl-1 link link-primary link-hover"
          href="https://github.com/cosmos/cosmjs"
        >
          CosmJS
        </a>
        <span className="pl-1"> and</span>
        <a
          className="pl-1 link link-primary link-hover"
          href="https://keplr.app/"
        >
          Keplr
        </a>
      </footer>
    </div>
  )
}
