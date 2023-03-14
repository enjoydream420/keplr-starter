import Link from 'next/link'
import Image from 'next/image'

const Menubar = () => {
    const PUBLIC_SITE_ICON_URL = process.env.NEXT_PUBLIC_SITE_ICON_URL || ''

    return (
        <div className="flex items-center justify-center">
            <Link href="/">
                {PUBLIC_SITE_ICON_URL.length > 0 ? (
                    <Image
                        src={PUBLIC_SITE_ICON_URL}
                        height={32}
                        width={32}
                        alt="Logo"
                    />
                ) : (
                    <span className="text-2xl">⚛️ </span>
                )}
            </Link>
            <Link href="/">
                <a className="ml-5 md:ml-7 link link-hover font-semibold text-lg md:text-xl align-top">
                    Assets
                </a>
            </Link>
            <Link href="/pools">
                <a className="ml-3 md:ml-4 link link-hover font-semibold text-lg md:text-xl align-top">
                    Pools
                </a>
            </Link>
            <Link href="/vote">
                <a className="ml-3 md:ml-4 link link-hover font-semibold text-lg md:text-xl align-top">
                    Vote
                </a>
            </Link>
            <Link href="/claim">
                <a className="ml-3 md:ml-4 link link-hover font-semibold text-lg md:text-xl align-top">
                    Claim
                </a>
            </Link>
            <Link href="/more">
                <a className="ml-3 md:ml-4 link link-hover font-semibold text-lg md:text-xl align-top">
                    More
                </a>
            </Link>
        </div>
    )
}

export default Menubar