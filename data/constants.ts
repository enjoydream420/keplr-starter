export const WYND = {
    address: "juno1gjev23044m0yzzcjwphauxj4syus0elufxmkcgz9n28h5av8qa7sc744ws",
    name: "WYND Token",
    symbol: "WYND",
    decimals: 6
}

export const bWYND = {
    address: "juno1wxjppu7qn2fjwxgtujytuvmc5ds32qpnknda90j5r4rhmg9nssqs8t5ky2",
    name: "bWYND Token",
    symbol: "bWYND",
    decimals: 6
}

export const LOOP = {
    address: "juno1kmgzgsgg2sdej9enmd3fy9xrzc0whdjfcjg32nxr34we9pr9uycs26eq3p",
    name: "LOOP Token",
    symbol: "LOOP",
    decimals: 6
}

export const bLOOP = {
    address: "juno1lfcm3uv8qsmv2yg3xwwqwlknq4jxhr4p57caazpdhh6925j4hcjqqmepws",
    name: "bLOOP Token",
    symbol: "bLOOP",
    decimals: 6
}

export const SYNE = {
    address: "juno1w7lu649zpauudeplu6ceqqx50u0f5t48mjur644dcyts2ta36plqyyvqr4",
    name: "SYNE Token",
    symbol: "SYNE",
    decimals: 6
}

export const veSYNE = {
    address: "juno1cla40wz2ldwaczvgt98e2ey0f3kqy4ua4tk5pg6s780q7zz7nt7szet90h",
    name: "veSYNE Token",
    symbol: "veSYNE",
    decimals: 6
}

export const defaultTokenLists = [
    {...WYND, balance: ""},
    {...bWYND, balance: ""},
    {...LOOP, balance: ""},
    {...bLOOP, balance: ""},
    {...SYNE, balance: ""},
    {...veSYNE, balance: ""},
]

export const PUBLIC_CHAIN_NAME = process.env.NEXT_PUBLIC_CHAIN_NAME
export const PUBLIC_STAKING_DENOM = process.env.NEXT_PUBLIC_STAKING_DENOM || 'ujuno'
