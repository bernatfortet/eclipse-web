// @flow
export function getFromAndToCoinFromCurrencyPair( currencyPair: string, replacer: string = '/'  ){
  //Automate replacer to adapt to / , - , _
  const pair = currencyPair.split(replacer)
  return {
    fromCoin: pair[1],
    toCoin: pair[0],
  }
}

export function getCoinNameFromSymbol( symbol: string  ){
  if( !symbol || !cryptocurrencies[symbol] ) return symbol

  return cryptocurrencies[symbol].name
}

export function getCoinIdFromSymbol( symbol: string  ){
  if( !symbol || !cryptocurrencies[symbol] ) return symbol
  return cryptocurrencies[symbol].id
}

export function getCoinColorFromSymbol( symbol: string  ){
  if( !symbol || !cryptocurrencies[symbol] ) return symbol
  // TODO consider using : https://github.com/jariz/vibrant.js/

  const color = cryptocurrencies[symbol].color
  return color
}

export const cryptocurrencies = {
  "42": {
    "id": "42-coin",
    "name": "42-coin",
    "symbol": "42",
    "color": "rgb(0,0,0)"
  },
  "300": {
    "id": "300-token",
    "name": "300 Token",
    "symbol": "300",
    "color": "rgb(85,0,0)"
  },
  "611": {
    "id": "sixeleven",
    "name": "SixEleven",
    "symbol": "611",
    "color": "rgb(255,255,0)"
  },
  "808": {
    "id": "808coin",
    "name": "808Coin",
    "symbol": "808",
    "color": "rgb(43,43,43)"
  },
  "888": {
    "id": "octocoin",
    "name": "OctoCoin",
    "symbol": "888",
    "color": "rgb(90,181,45)"
  },
  "BTC": {
    "id": "bitcoin",
    "name": "Bitcoin",
    "symbol": "BTC",
    "color": "rgb(246,158,65)"
  },
  "ETH": {
    "id": "ethereum",
    "name": "Ethereum",
    "symbol": "ETH",
    "color": "rgb(47,48,48)"
  },
  "BCH": {
    "id": "bitcoin-cash",
    "name": "Bitcoin Cash",
    "symbol": "BCH",
    "color": "rgb(245,146,47)"
  },
  "XRP": {
    "id": "ripple",
    "name": "Ripple",
    "symbol": "XRP",
    "color": "rgb(26,146,198)"
  },
  "LTC": {
    "id": "litecoin",
    "name": "Litecoin",
    "symbol": "LTC",
    "color": "rgb(128,128,128)"
  },
  "DASH": {
    "id": "dash",
    "name": "Dash",
    "symbol": "DASH",
    "color": "rgb(16,117,179)"
  },
  "XEM": {
    "id": "nem",
    "name": "NEM",
    "symbol": "XEM",
    "color": "rgb(53,183,175)"
  },
  "XMR": {
    "id": "monero",
    "name": "Monero",
    "symbol": "XMR",
    "color": "rgb(253,103,33)"
  },
  "MIOTA": {
    "id": "iota",
    "name": "IOTA",
    "symbol": "MIOTA",
    "color": "rgb(0,0,0)"
  },
  "ETC": {
    "id": "ethereum-classic",
    "name": "Ethereum Classic",
    "symbol": "ETC",
    "color": "rgb(103,143,116)"
  },
  "NEO": {
    "id": "neo",
    "name": "NEO",
    "symbol": "NEO",
    "color": "rgb(118,186,56)"
  },
  "OMG": {
    "id": "omisego",
    "name": "OmiseGO",
    "symbol": "OMG",
    "color": "rgb(33,89,236)"
  },
  "BCC": {
    "id": "bitconnect",
    "name": "BitConnect",
    "symbol": "BCC",
    "color": "rgb(248,136,41)"
  },
  "LSK": {
    "id": "lisk",
    "name": "Lisk",
    "symbol": "LSK",
    "color": "rgb(0,85,85)"
  },
  "QTUM": {
    "id": "qtum",
    "name": "Qtum",
    "symbol": "QTUM",
    "color": "rgb(85,170,255)"
  },
  "STRAT": {
    "id": "stratis",
    "name": "Stratis",
    "symbol": "STRAT",
    "color": "rgb(0,85,170)"
  },
  "ZEC": {
    "id": "zcash",
    "name": "Zcash",
    "symbol": "ZEC",
    "color": "rgb(0,0,0)"
  },
  "USDT": {
    "id": "tether",
    "name": "Tether",
    "symbol": "USDT",
    "color": "rgb(47,160,124)"
  },
  "WAVES": {
    "id": "waves",
    "name": "Waves",
    "symbol": "WAVES",
    "color": "rgb(221,221,221)"
  },
  "HSR": {
    "id": "hshare",
    "name": "Hshare",
    "symbol": "HSR",
    "color": "rgb(83,70,135)"
  },
  "ARK": {
    "id": "ark",
    "name": "Ark",
    "symbol": "ARK",
    "color": "rgb(255,0,0)"
  },
  "STEEM": {
    "id": "steem",
    "name": "Steem",
    "symbol": "STEEM",
    "color": "rgb(80,163,239)"
  },
  "BTS": {
    "id": "bitshares",
    "name": "BitShares",
    "symbol": "BTS",
    "color": "rgb(9,89,122)"
  },
  "BCN": {
    "id": "bytecoin-bcn",
    "name": "Bytecoin",
    "symbol": "BCN",
    "color": "rgb(0,0,0)"
  },
  "EOS": {
    "id": "eos",
    "name": "EOS",
    "symbol": "EOS",
    "color": "rgb(7,7,8)"
  },
  "XLM": {
    "id": "stellar",
    "name": "Stellar Lumens",
    "symbol": "XLM",
    "color": "rgb(221,242,249)"
  },
  "MAID": {
    "id": "maidsafecoin",
    "name": "MaidSafeCoin",
    "symbol": "MAID",
    "color": "rgb(44,88,136)"
  },
  "PAY": {
    "id": "tenx",
    "name": "TenX",
    "symbol": "PAY",
    "color": "rgb(24,27,36)"
  },
  "REP": {
    "id": "augur",
    "name": "Augur",
    "symbol": "REP",
    "color": "rgb(253,253,253)"
  },
  "GNT": {
    "id": "golem-network-tokens",
    "name": "Golem",
    "symbol": "GNT",
    "color": "rgb(0,0,0)"
  },
  "KMD": {
    "id": "komodo",
    "name": "Komodo",
    "symbol": "KMD",
    "color": "rgb(49,100,100)"
  },
  "MTL": {
    "id": "metal",
    "name": "Metal",
    "symbol": "MTL",
    "color": "rgb(253,253,253)"
  },
  "BAT": {
    "id": "batcoin",
    "name": "BatCoin",
    "symbol": "BAT",
    "color": "rgb(170,170,170)"
  },
  "PIVX": {
    "id": "pivx",
    "name": "PIVX",
    "symbol": "PIVX",
    "color": "rgb(55,48,68)"
  },
  "NXS": {
    "id": "nexus",
    "name": "Nexus",
    "symbol": "NXS",
    "color": "rgb(98,182,228)"
  },
  "FCT": {
    "id": "factom",
    "name": "Factom",
    "symbol": "FCT",
    "color": "rgb(255,254,252)"
  },
  "SC": {
    "id": "siacoin",
    "name": "Siacoin",
    "symbol": "SC",
    "color": "rgb(0,203,160)"
  },
  "VERI": {
    "id": "veritaseum",
    "name": "Veritaseum",
    "symbol": "VERI",
    "color": "rgb(253,152,65)"
  },
  "ICN": {
    "id": "icoin",
    "name": "iCoin",
    "symbol": "ICN",
    "color": "rgb(41,97,174)"
  },
  "GBYTE": {
    "id": "byteball",
    "name": "Byteball Bytes",
    "symbol": "GBYTE",
    "color": "rgb(48,64,79)"
  },
  "DOGE": {
    "id": "dogecoin",
    "name": "Dogecoin",
    "symbol": "DOGE",
    "color": "rgb(186,159,62)"
  },
  "DCR": {
    "id": "decred",
    "name": "Decred",
    "symbol": "DCR",
    "color": "rgb(58,215,164)"
  },
  "DGD": {
    "id": "digixdao",
    "name": "DigixDAO",
    "symbol": "DGD",
    "color": "rgb(202,204,208)"
  },
  "PPT": {
    "id": "populous",
    "name": "Populous",
    "symbol": "PPT",
    "color": "rgb(18,44,68)"
  },
  "CVC": {
    "id": "civic",
    "name": "Civic",
    "symbol": "CVC",
    "color": "rgb(65,173,52)"
  },
  "GNO": {
    "id": "gnosis-gno",
    "name": "Gnosis",
    "symbol": "GNO",
    "color": "rgb(26,166,194)"
  },
  "DGB": {
    "id": "digibyte",
    "name": "DigiByte",
    "symbol": "DGB",
    "color": "rgb(5,39,81)"
  },
  "BTCD": {
    "id": "bitcoindark",
    "name": "BitcoinDark",
    "symbol": "BTCD",
    "color": "rgb(1,1,1)"
  },
  "ARDR": {
    "id": "ardor",
    "name": "Ardor",
    "symbol": "ARDR",
    "color": "rgb(21,98,161)"
  },
  "SYS": {
    "id": "syscoin",
    "name": "Syscoin",
    "symbol": "SYS",
    "color": "rgb(170,255,255)"
  },
  "ZRX": {
    "id": "0x",
    "name": "0x",
    "symbol": "ZRX",
    "color": "rgb(29,34,39)"
  },
  "GAME": {
    "id": "gamecredits",
    "name": "GameCredits",
    "symbol": "GAME",
    "color": "rgb(124,152,39)"
  },
  "BNB": {
    "id": "binance-coin",
    "name": "Binance Coin",
    "symbol": "BNB",
    "color": "rgb(242,185,64)"
  },
  "SNT": {
    "id": "status",
    "name": "Status",
    "symbol": "SNT",
    "color": "rgb(95,117,231)"
  },
  "SNGLS": {
    "id": "singulardtv",
    "name": "SingularDTV",
    "symbol": "SNGLS",
    "color": "rgb(170,85,85)"
  },
  "AE": {
    "id": "aeternity",
    "name": "Aeternity",
    "symbol": "AE",
    "color": "rgb(202,54,103)"
  },
  "BNT": {
    "id": "bancor",
    "name": "Bancor",
    "symbol": "BNT",
    "color": "rgb(11,15,43)"
  },
  "LKK": {
    "id": "lykke",
    "name": "Lykke",
    "symbol": "LKK",
    "color": "rgb(255,191,128)"
  },
  "XVG": {
    "id": "verge",
    "name": "Verge",
    "symbol": "XVG",
    "color": "rgb(23,152,189)"
  },
  "FUN": {
    "id": "funfair",
    "name": "FunFair",
    "symbol": "FUN",
    "color": "rgb(229,55,93)"
  },
  "GAS": {
    "id": "gas",
    "name": "Gas",
    "symbol": "GAS",
    "color": "rgb(118,186,56)"
  },
  "BLOCK": {
    "id": "blocknet",
    "name": "Blocknet",
    "symbol": "BLOCK",
    "color": "rgb(16,20,64)"
  },
  "NXT": {
    "id": "nxt",
    "name": "Nxt",
    "symbol": "NXT",
    "color": "rgb(21,143,185)"
  },
  "EDG": {
    "id": "edgeless",
    "name": "Edgeless",
    "symbol": "EDG",
    "color": "rgb(43,22,64)"
  },
  "MCO": {
    "id": "monaco",
    "name": "Monaco",
    "symbol": "MCO",
    "color": "rgb(242,235,238)"
  },
  "GXS": {
    "id": "gxshares",
    "name": "GXShares",
    "symbol": "GXS",
    "color": "rgb(102,153,153)"
  },
  "UBQ": {
    "id": "ubiq",
    "name": "Ubiq",
    "symbol": "UBQ",
    "color": "rgb(73,73,73)"
  },
  "TRIG": {
    "id": "triggers",
    "name": "Triggers",
    "symbol": "TRIG",
    "color": "rgb(89,195,239)"
  },
  "BQX": {
    "id": "bitquence",
    "name": "Bitquence",
    "symbol": "BQX",
    "color": "rgb(0,0,0)"
  },
  "PART": {
    "id": "particl",
    "name": "Particl",
    "symbol": "PART",
    "color": "rgb(0,255,255)"
  },
  "TNT": {
    "id": "tierion",
    "name": "Tierion",
    "symbol": "TNT",
    "color": "rgb(253,69,130)"
  },
  "ANT": {
    "id": "aragon",
    "name": "Aragon",
    "symbol": "ANT",
    "color": "rgb(0,0,0)"
  },
  "NAV": {
    "id": "nav-coin",
    "name": "NAV Coin",
    "symbol": "NAV",
    "color": "rgb(170,85,170)"
  },
  "WINGS": {
    "id": "wings",
    "name": "Wings",
    "symbol": "WINGS",
    "color": "rgb(106,138,198)"
  },
  "WTC": {
    "id": "walton",
    "name": "Walton",
    "symbol": "WTC",
    "color": "rgb(24,92,213)"
  },
  "MGO": {
    "id": "mobilego",
    "name": "MobileGo",
    "symbol": "MGO",
    "color": "rgb(0,0,0)"
  },
  "CLOAK": {
    "id": "cloakcoin",
    "name": "CloakCoin",
    "symbol": "CLOAK",
    "color": "rgb(222,65,35)"
  },
  "FRST": {
    "id": "firstcoin",
    "name": "FirstCoin",
    "symbol": "FRST",
    "color": "rgb(13,35,69)"
  },
  "CFI": {
    "id": "cofound-it",
    "name": "Cofound.it",
    "symbol": "CFI",
    "color": "rgb(25,154,226)"
  },
  "MTH": {
    "id": "monetha",
    "name": "Monetha",
    "symbol": "MTH",
    "color": "rgb(0,85,255)"
  },
  "STORJ": {
    "id": "storj",
    "name": "Storj",
    "symbol": "STORJ",
    "color": "rgb(46,134,252)"
  },
  "OK": {
    "id": "okcash",
    "name": "OKCash",
    "symbol": "OK",
    "color": "rgb(252,253,254)"
  },
  "XEL": {
    "id": "elastic",
    "name": "Elastic",
    "symbol": "XEL",
    "color": "rgb(52,52,52)"
  },
  "IOC": {
    "id": "iocoin",
    "name": "I/O Coin",
    "symbol": "IOC",
    "color": "rgb(42,168,231)"
  },
  "PLR": {
    "id": "pillar",
    "name": "Pillar",
    "symbol": "PLR",
    "color": "rgb(0,0,0)"
  },
  "NLG": {
    "id": "gulden",
    "name": "Gulden",
    "symbol": "NLG",
    "color": "rgb(15,61,150)"
  },
  "RLC": {
    "id": "rlc",
    "name": "iExec RLC",
    "symbol": "RLC",
    "color": "rgb(0,0,0)"
  },
  "MLN": {
    "id": "melon",
    "name": "Melon",
    "symbol": "MLN",
    "color": "rgb(0,0,0)"
  },
  "BTM": {
    "id": "bitmark",
    "name": "Bitmark",
    "symbol": "BTM",
    "color": "rgb(51,8,100)"
  },
  "LEO": {
    "id": "leocoin",
    "name": "LEOcoin",
    "symbol": "LEO",
    "color": "rgb(35,31,32)"
  },
  "NLC2": {
    "id": "nolimitcoin",
    "name": "NoLimitCoin",
    "symbol": "NLC2",
    "color": "rgb(85,0,0)"
  },
  "RISE": {
    "id": "rise",
    "name": "Rise",
    "symbol": "RISE",
    "color": "rgb(0,255,255)"
  },
  "ADK": {
    "id": "aidos-kuneen",
    "name": "Aidos Kuneen",
    "symbol": "ADK",
    "color": "rgb(85,170,0)"
  },
  "ADX": {
    "id": "adx-net",
    "name": "AdEx",
    "symbol": "ADX",
    "color": "rgb(35,119,185)"
  },
  "PTOY": {
    "id": "patientory",
    "name": "Patientory",
    "symbol": "PTOY",
    "color": "rgb(0,0,0)"
  },
  "LRC": {
    "id": "loopring",
    "name": "Loopring",
    "symbol": "LRC",
    "color": "rgb(254,254,254)"
  },
  "PPC": {
    "id": "peercoin",
    "name": "Peercoin",
    "symbol": "PPC",
    "color": "rgb(59,176,85)"
  },
  "FAIR": {
    "id": "faircoin",
    "name": "FairCoin",
    "symbol": "FAIR",
    "color": "rgb(200,152,35)"
  },
  "1ST": {
    "id": "firstblood",
    "name": "FirstBlood",
    "symbol": "1ST",
    "color": "rgb(0,0,0)"
  },
  "XCP": {
    "id": "counterparty",
    "name": "Counterparty",
    "symbol": "XCP",
    "color": "rgb(233,29,83)"
  },
  "QRL": {
    "id": "quantum-resistant-ledger",
    "name": "Quantum Resistant Ledger",
    "symbol": "QRL",
    "color": "rgb(0,0,0)"
  },
  "DCT": {
    "id": "decent",
    "name": "DECENT",
    "symbol": "DCT",
    "color": "rgb(19,144,114)"
  },
  "TKN": {
    "id": "tokencard",
    "name": "TokenCard",
    "symbol": "TKN",
    "color": "rgb(36,221,123)"
  },
  "EMC": {
    "id": "emercoin",
    "name": "Emercoin",
    "symbol": "EMC",
    "color": "rgb(189,170,209)"
  },
  "SNM": {
    "id": "sonm",
    "name": "SONM",
    "symbol": "SNM",
    "color": "rgb(11,28,38)"
  },
  "LUN": {
    "id": "lunyr",
    "name": "Lunyr",
    "symbol": "LUN",
    "color": "rgb(255,0,0)"
  },
  "RDD": {
    "id": "reddcoin",
    "name": "ReddCoin",
    "symbol": "RDD",
    "color": "rgb(234,33,46)"
  },
  "MSP": {
    "id": "mothership",
    "name": "Mothership",
    "symbol": "MSP",
    "color": "rgb(230,94,87)"
  },
  "TAAS": {
    "id": "taas",
    "name": "TaaS",
    "symbol": "TAAS",
    "color": "rgb(10,34,58)"
  },
  "VTC": {
    "id": "vertcoin",
    "name": "Vertcoin",
    "symbol": "VTC",
    "color": "rgb(30,92,48)"
  },
  "TCC": {
    "id": "the-champcoin",
    "name": "The ChampCoin",
    "symbol": "TCC",
    "color": "rgb(85,85,0)"
  },
  "EXP": {
    "id": "expanse",
    "name": "Expanse",
    "symbol": "EXP",
    "color": "rgb(150,154,153)"
  },
  "XRL": {
    "id": "rialto",
    "name": "Rialto",
    "symbol": "XRL",
    "color": "rgb(235,240,243)"
  },
  "MONA": {
    "id": "monacoin",
    "name": "MonaCoin",
    "symbol": "MONA",
    "color": "rgb(214,207,182)"
  },
  "XZC": {
    "id": "zcoin",
    "name": "ZCoin",
    "symbol": "XZC",
    "color": "rgb(46,182,87)"
  },
  "DNT": {
    "id": "district0x",
    "name": "district0x",
    "symbol": "DNT",
    "color": "rgb(46,60,141)"
  },
  "TRST": {
    "id": "trust",
    "name": "WeTrust",
    "symbol": "TRST",
    "color": "rgb(98,198,186)"
  },
  "VSL": {
    "id": "vslice",
    "name": "vSlice",
    "symbol": "VSL",
    "color": "rgb(9,84,154)"
  },
  "STX": {
    "id": "stox",
    "name": "Stox",
    "symbol": "STX",
    "color": "rgb(102,59,195)"
  },
  "ROUND": {
    "id": "round",
    "name": "Round",
    "symbol": "ROUND",
    "color": "rgb(0,0,0)"
  },
  "ADT": {
    "id": "adtoken",
    "name": "adToken",
    "symbol": "ADT",
    "color": "rgb(170,170,170)"
  },
  "ION": {
    "id": "ion",
    "name": "ION",
    "symbol": "ION",
    "color": "rgb(15,15,15)"
  },
  "ETP": {
    "id": "metaverse",
    "name": "Metaverse ETP",
    "symbol": "ETP",
    "color": "rgb(255,0,0)"
  },
  "PLBT": {
    "id": "polybius",
    "name": "Polybius",
    "symbol": "PLBT",
    "color": "rgb(28,158,213)"
  },
  "XAS": {
    "id": "asch",
    "name": "Asch",
    "symbol": "XAS",
    "color": "rgb(255,170,170)"
  },
  "DICE": {
    "id": "etheroll",
    "name": "Etheroll",
    "symbol": "DICE",
    "color": "rgb(0,0,0)"
  },
  "NMR": {
    "id": "numeraire",
    "name": "Numeraire",
    "symbol": "NMR",
    "color": "rgb(5,7,8)"
  },
  "VIA": {
    "id": "viacoin",
    "name": "Viacoin",
    "symbol": "VIA",
    "color": "rgb(67,67,67)"
  },
  "CRW": {
    "id": "crown",
    "name": "Crown",
    "symbol": "CRW",
    "color": "rgb(35,61,113)"
  },
  "CDT": {
    "id": "coindash",
    "name": "CoinDash",
    "symbol": "CDT",
    "color": "rgb(10,10,10)"
  },
  "POE": {
    "id": "poet",
    "name": "Po.et",
    "symbol": "POE",
    "color": "rgb(227,222,219)"
  },
  "NMC": {
    "id": "namecoin",
    "name": "Namecoin",
    "symbol": "NMC",
    "color": "rgb(104,136,180)"
  },
  "XAUR": {
    "id": "xaurum",
    "name": "Xaurum",
    "symbol": "XAUR",
    "color": "rgb(255,255,0)"
  },
  "SAFEX": {
    "id": "safe-exchange-coin",
    "name": "Safe Exchange Coin",
    "symbol": "SAFEX",
    "color": "rgb(15,115,158)"
  },
  "BAY": {
    "id": "bitbay",
    "name": "BitBay",
    "symbol": "BAY",
    "color": "rgb(26,159,224)"
  },
  "BURST": {
    "id": "burst",
    "name": "Burst",
    "symbol": "BURST",
    "color": "rgb(10,89,154)"
  },
  "UNITY": {
    "id": "supernet-unity",
    "name": "SuperNET",
    "symbol": "UNITY",
    "color": "rgb(245,134,52)"
  },
  "MUE": {
    "id": "monetaryunit",
    "name": "MonetaryUnit",
    "symbol": "MUE",
    "color": "rgb(253,149,47)"
  },
  "MYST": {
    "id": "mysterium",
    "name": "Mysterium",
    "symbol": "MYST",
    "color": "rgb(85,0,85)"
  },
  "POT": {
    "id": "potcoin",
    "name": "PotCoin",
    "symbol": "POT",
    "color": "rgb(21,91,49)"
  },
  "HMQ": {
    "id": "humaniq",
    "name": "Humaniq",
    "symbol": "HMQ",
    "color": "rgb(103,133,194)"
  },
  "SAN": {
    "id": "santiment",
    "name": "Santiment Network Token",
    "symbol": "SAN",
    "color": "rgb(0,0,0)"
  },
  "RADS": {
    "id": "radium",
    "name": "Radium",
    "symbol": "RADS",
    "color": "rgb(184,79,245)"
  },
  "CLAM": {
    "id": "clams",
    "name": "Clams",
    "symbol": "CLAM",
    "color": "rgb(0,0,0)"
  },
  "ATCC": {
    "id": "atc-coin",
    "name": "ATC Coin",
    "symbol": "ATCC",
    "color": "rgb(170,170,0)"
  },
  "UNO": {
    "id": "unobtanium",
    "name": "Unobtanium",
    "symbol": "UNO",
    "color": "rgb(84,186,246)"
  },
  "LBC": {
    "id": "library-credit",
    "name": "LBRY Credits",
    "symbol": "LBC",
    "color": "rgb(0,0,0)"
  },
  "MOON": {
    "id": "mooncoin",
    "name": "Mooncoin",
    "symbol": "MOON",
    "color": "rgb(26,155,252)"
  },
  "NXC": {
    "id": "nexium",
    "name": "Nexium",
    "symbol": "NXC",
    "color": "rgb(255,255,0)"
  },
  "NEBL": {
    "id": "neblio",
    "name": "Neblio",
    "symbol": "NEBL",
    "color": "rgb(0,255,255)"
  },
  "WGR": {
    "id": "wagerr",
    "name": "Wagerr",
    "symbol": "WGR",
    "color": "rgb(255,0,0)"
  },
  "OMNI": {
    "id": "omni",
    "name": "Omni",
    "symbol": "OMNI",
    "color": "rgb(32,72,143)"
  },
  "SKY": {
    "id": "skycoin",
    "name": "Skycoin",
    "symbol": "SKY",
    "color": "rgb(132,137,232)"
  },
  "PPY": {
    "id": "peerplays-ppy",
    "name": "Peerplays",
    "symbol": "PPY",
    "color": "rgb(23,152,200)"
  },
  "QAU": {
    "id": "quantum",
    "name": "Quantum",
    "symbol": "QAU",
    "color": "rgb(29,41,83)"
  },
  "SIB": {
    "id": "sibcoin",
    "name": "SIBCoin",
    "symbol": "SIB",
    "color": "rgb(21,124,190)"
  },
  "SHIFT": {
    "id": "shift",
    "name": "Shift",
    "symbol": "SHIFT",
    "color": "rgb(41,98,118)"
  },
  "XDN": {
    "id": "digitalnote",
    "name": "DigitalNote",
    "symbol": "XDN",
    "color": "rgb(81,124,160)"
  },
  "ZEN": {
    "id": "zencash",
    "name": "ZenCash",
    "symbol": "ZEN",
    "color": "rgb(0,0,0)"
  },
  "IFT": {
    "id": "investfeed",
    "name": "InvestFeed",
    "symbol": "IFT",
    "color": "rgb(253,161,57)"
  },
  "RBY": {
    "id": "rubycoin",
    "name": "Rubycoin",
    "symbol": "RBY",
    "color": "rgb(191,21,18)"
  },
  "NTO": {
    "id": "fujinto",
    "name": "Fujinto",
    "symbol": "NTO",
    "color": "rgb(72,102,121)"
  },
  "SLS": {
    "id": "salus",
    "name": "SaluS",
    "symbol": "SLS",
    "color": "rgb(0,0,0)"
  },
  "SPR": {
    "id": "spreadcoin",
    "name": "SpreadCoin",
    "symbol": "SPR",
    "color": "rgb(128,64,128)"
  },
  "TIME": {
    "id": "chronobank",
    "name": "Chronobank",
    "symbol": "TIME",
    "color": "rgb(10,8,30)"
  },
  "DMD": {
    "id": "diamond",
    "name": "Diamond",
    "symbol": "DMD",
    "color": "rgb(73,100,113)"
  },
  "ECOB": {
    "id": "ecobit",
    "name": "Ecobit",
    "symbol": "ECOB",
    "color": "rgb(133,177,168)"
  },
  "OBITS": {
    "id": "obits",
    "name": "OBITS",
    "symbol": "OBITS",
    "color": "rgb(28,117,188)"
  },
  "AGRS": {
    "id": "agoras-tokens",
    "name": "Agoras Tokens",
    "symbol": "AGRS",
    "color": "rgb(247,156,50)"
  },
  "SWT": {
    "id": "swarm-city",
    "name": "Swarm City",
    "symbol": "SWT",
    "color": "rgb(238,216,118)"
  },
  "EMV": {
    "id": "ethereum-movie-venture",
    "name": "Ethereum Movie Venture",
    "symbol": "EMV",
    "color": "rgb(0,0,0)"
  },
  "GUP": {
    "id": "guppy",
    "name": "Matchpool",
    "symbol": "GUP",
    "color": "rgb(39,220,217)"
  },
  "ENRG": {
    "id": "energycoin",
    "name": "Energycoin",
    "symbol": "ENRG",
    "color": "rgb(85,170,85)"
  },
  "SOAR": {
    "id": "soarcoin",
    "name": "Soarcoin",
    "symbol": "SOAR",
    "color": "rgb(28,116,187)"
  },
  "BLK": {
    "id": "blackcoin",
    "name": "BlackCoin",
    "symbol": "BLK",
    "color": "rgb(32,33,33)"
  },
  "AMP": {
    "id": "synereo",
    "name": "Synereo",
    "symbol": "AMP",
    "color": "rgb(56,174,224)"
  },
  "GOLOS": {
    "id": "golos",
    "name": "Golos",
    "symbol": "GOLOS",
    "color": "rgb(43,115,182)"
  },
  "LMC": {
    "id": "lomocoin",
    "name": "LoMoCoin",
    "symbol": "LMC",
    "color": "rgb(253,166,45)"
  },
  "GRC": {
    "id": "gridcoin",
    "name": "GridCoin",
    "symbol": "GRC",
    "color": "rgb(65,13,125)"
  },
  "BCAP": {
    "id": "bcap",
    "name": "BCAP",
    "symbol": "BCAP",
    "color": "rgb(0,0,255)"
  },
  "NEOS": {
    "id": "neoscoin",
    "name": "NeosCoin",
    "symbol": "NEOS",
    "color": "rgb(0,0,0)"
  },
  "BITCNY": {
    "id": "bitcny",
    "name": "bitCNY",
    "symbol": "BITCNY",
    "color": "rgb(0,88,124)"
  },
  "ECC": {
    "id": "eccoin",
    "name": "E-Currency Coin",
    "symbol": "ECC",
    "color": "rgb(128,128,128)"
  },
  "WCT": {
    "id": "waves-community-token",
    "name": "Waves Community Token",
    "symbol": "WCT",
    "color": "rgb(221,221,221)"
  },
  "XVC": {
    "id": "vcash",
    "name": "Vcash",
    "symbol": "XVC",
    "color": "rgb(180,25,45)"
  },
  "OAX": {
    "id": "openanx",
    "name": "OpenAnx",
    "symbol": "OAX",
    "color": "rgb(39,71,118)"
  },
  "GRS": {
    "id": "groestlcoin",
    "name": "Groestlcoin",
    "symbol": "GRS",
    "color": "rgb(102,144,160)"
  },
  "VRC": {
    "id": "vericoin",
    "name": "VeriCoin",
    "symbol": "VRC",
    "color": "rgb(69,140,199)"
  },
  "ECN": {
    "id": "e-coin",
    "name": "E-coin",
    "symbol": "ECN",
    "color": "rgb(26,25,25)"
  },
  "MXT": {
    "id": "martexcoin",
    "name": "MarteXcoin",
    "symbol": "MXT",
    "color": "rgb(178,180,181)"
  },
  "IXT": {
    "id": "ixledger",
    "name": "iXledger",
    "symbol": "IXT",
    "color": "rgb(39,88,112)"
  },
  "AEON": {
    "id": "aeon",
    "name": "Aeon",
    "symbol": "AEON",
    "color": "rgb(24,69,80)"
  },
  "PST": {
    "id": "primas",
    "name": "Primas",
    "symbol": "PST",
    "color": "rgb(255,128,0)"
  },
  "FLO": {
    "id": "florincoin",
    "name": "FlorinCoin",
    "symbol": "FLO",
    "color": "rgb(50,125,247)"
  },
  "NET": {
    "id": "netcoin",
    "name": "NetCoin",
    "symbol": "NET",
    "color": "rgb(128,128,128)"
  },
  "YBC": {
    "id": "ybcoin",
    "name": "YbCoin",
    "symbol": "YBC",
    "color": "rgb(222,208,118)"
  },
  "XRB": {
    "id": "raiblocks",
    "name": "RaiBlocks",
    "symbol": "XRB",
    "color": "rgb(37,148,207)"
  },
  "GAM": {
    "id": "gambit",
    "name": "Gambit",
    "symbol": "GAM",
    "color": "rgb(16,16,16)"
  },
  "VOX": {
    "id": "voxels",
    "name": "Voxels",
    "symbol": "VOX",
    "color": "rgb(255,0,255)"
  },
  "DTB": {
    "id": "databits",
    "name": "Databits",
    "symbol": "DTB",
    "color": "rgb(13,12,17)"
  },
  "EDR": {
    "id": "e-dinar-coin",
    "name": "E-Dinar Coin",
    "symbol": "EDR",
    "color": "rgb(85,85,170)"
  },
  "PZM": {
    "id": "prizm",
    "name": "PRIZM",
    "symbol": "PZM",
    "color": "rgb(144,62,188)"
  },
  "XC": {
    "id": "xcurrency",
    "name": "XCurrency",
    "symbol": "XC",
    "color": "rgb(51,103,57)"
  },
  "BCY": {
    "id": "bitcrystals",
    "name": "Bitcrystals",
    "symbol": "BCY",
    "color": "rgb(255,255,252)"
  },
  "EMB": {
    "id": "embercoin",
    "name": "EmberCoin",
    "symbol": "EMB",
    "color": "rgb(170,85,85)"
  },
  "BTX": {
    "id": "bitcointx",
    "name": "BitcoinTX",
    "symbol": "BTX",
    "color": "rgb(245,242,241)"
  },
  "INCNT": {
    "id": "incent",
    "name": "Incent",
    "symbol": "INCNT",
    "color": "rgb(242,147,47)"
  },
  "TIX": {
    "id": "tickets",
    "name": "Tickets",
    "symbol": "TIX",
    "color": "rgb(128,128,0)"
  },
  "XBY": {
    "id": "xtrabytes",
    "name": "XTRABYTES",
    "symbol": "XBY",
    "color": "rgb(41,215,209)"
  },
  "PINK": {
    "id": "pinkcoin",
    "name": "PinkCoin",
    "symbol": "PINK",
    "color": "rgb(179,180,180)"
  },
  "XSPEC": {
    "id": "spectrecoin",
    "name": "Spectrecoin",
    "symbol": "XSPEC",
    "color": "rgb(63,127,200)"
  },
  "MUSIC": {
    "id": "musicoin",
    "name": "Musicoin",
    "symbol": "MUSIC",
    "color": "rgb(232,177,41)"
  },
  "EMC2": {
    "id": "einsteinium",
    "name": "Einsteinium",
    "symbol": "EMC2",
    "color": "rgb(35,204,253)"
  },
  "BDL": {
    "id": "bitdeal",
    "name": "Bitdeal",
    "symbol": "BDL",
    "color": "rgb(229,78,66)"
  },
  "TOA": {
    "id": "toacoin",
    "name": "ToaCoin",
    "symbol": "TOA",
    "color": "rgb(35,88,190)"
  },
  "FTC": {
    "id": "feathercoin",
    "name": "Feathercoin",
    "symbol": "FTC",
    "color": "rgb(253,254,254)"
  },
  "PLU": {
    "id": "pluton",
    "name": "Pluton",
    "symbol": "PLU",
    "color": "rgb(255,255,0)"
  },
  "BET": {
    "id": "betacoin",
    "name": "BetaCoin",
    "symbol": "BET",
    "color": "rgb(254,238,99)"
  },
  "SPHR": {
    "id": "sphere",
    "name": "Sphere",
    "symbol": "SPHR",
    "color": "rgb(4,4,4)"
  },
  "CAT": {
    "id": "catcoin",
    "name": "Catcoin",
    "symbol": "CAT",
    "color": "rgb(245,146,47)"
  },
  "DAXX": {
    "id": "daxxcoin",
    "name": "DaxxCoin",
    "symbol": "DAXX",
    "color": "rgb(191,128,64)"
  },
  "PEPECASH": {
    "id": "pepe-cash",
    "name": "Pepe Cash",
    "symbol": "PEPECASH",
    "color": "rgb(0,0,0)"
  },
  "HEAT": {
    "id": "heat-ledger",
    "name": "HEAT",
    "symbol": "HEAT",
    "color": "rgb(255,0,0)"
  },
  "PDC": {
    "id": "project-decorum",
    "name": "Project Decorum",
    "symbol": "PDC",
    "color": "rgb(44,88,136)"
  },
  "CRB": {
    "id": "creditbit",
    "name": "Creditbit",
    "symbol": "CRB",
    "color": "rgb(44,62,80)"
  },
  "NOTE": {
    "id": "dnotes",
    "name": "DNotes",
    "symbol": "NOTE",
    "color": "rgb(41,171,226)"
  },
  "TIPS": {
    "id": "fedoracoin",
    "name": "FedoraCoin",
    "symbol": "TIPS",
    "color": "rgb(59,79,127)"
  },
  "XBC": {
    "id": "bitcoin-plus",
    "name": "Bitcoin Plus",
    "symbol": "XBC",
    "color": "rgb(245,146,47)"
  },
  "SLR": {
    "id": "solarcoin",
    "name": "SolarCoin",
    "symbol": "SLR",
    "color": "rgb(0,0,0)"
  },
  "APX": {
    "id": "apx",
    "name": "APX",
    "symbol": "APX",
    "color": "rgb(236,237,239)"
  },
  "FLDC": {
    "id": "foldingcoin",
    "name": "FoldingCoin",
    "symbol": "FLDC",
    "color": "rgb(0,0,0)"
  },
  "MYB": {
    "id": "mybit-token",
    "name": "MyBit Token",
    "symbol": "MYB",
    "color": "rgb(252,204,99)"
  },
  "PASC": {
    "id": "pascal-coin",
    "name": "Pascal Coin",
    "symbol": "PASC",
    "color": "rgb(254,178,109)"
  },
  "SEQ": {
    "id": "sequence",
    "name": "Sequence",
    "symbol": "SEQ",
    "color": "rgb(157,157,157)"
  },
  "BLITZ": {
    "id": "blitzcash",
    "name": "Blitzcash",
    "symbol": "BLITZ",
    "color": "rgb(255,0,128)"
  },
  "NVST": {
    "id": "nvo",
    "name": "NVO",
    "symbol": "NVST",
    "color": "rgb(34,45,61)"
  },
  "BITB": {
    "id": "bitbean",
    "name": "BitBean",
    "symbol": "BITB",
    "color": "rgb(0,0,0)"
  },
  "NVC": {
    "id": "novacoin",
    "name": "Novacoin",
    "symbol": "NVC",
    "color": "rgb(170,170,85)"
  },
  "ABY": {
    "id": "applebyte",
    "name": "ArtByte",
    "symbol": "ABY",
    "color": "rgb(202,9,20)"
  },
  "BSD": {
    "id": "bitsend",
    "name": "BitSend",
    "symbol": "BSD",
    "color": "rgb(33,34,39)"
  },
  "UNY": {
    "id": "unity-ingot",
    "name": "Unity Ingot",
    "symbol": "UNY",
    "color": "rgb(128,128,0)"
  },
  "AUR": {
    "id": "auroracoin",
    "name": "Auroracoin",
    "symbol": "AUR",
    "color": "rgb(0,128,0)"
  },
  "DBIX": {
    "id": "dubaicoin-dbix",
    "name": "DubaiCoin",
    "symbol": "DBIX",
    "color": "rgb(85,85,85)"
  },
  "THC": {
    "id": "hempcoin",
    "name": "HempCoin",
    "symbol": "THC",
    "color": "rgb(128,128,128)"
  },
  "DENT": {
    "id": "dent",
    "name": "Dent",
    "symbol": "DENT",
    "color": "rgb(128,128,128)"
  },
  "CURE": {
    "id": "curecoin",
    "name": "Curecoin",
    "symbol": "CURE",
    "color": "rgb(0,0,255)"
  },
  "COVAL": {
    "id": "circuits-of-value",
    "name": "Circuits of Value",
    "symbol": "COVAL",
    "color": "rgb(53,60,96)"
  },
  "TFL": {
    "id": "trueflip",
    "name": "TrueFlip",
    "symbol": "TFL",
    "color": "rgb(51,48,70)"
  },
  "PUT": {
    "id": "putincoin",
    "name": "PutinCoin",
    "symbol": "PUT",
    "color": "rgb(0,0,0)"
  },
  "BELA": {
    "id": "belacoin",
    "name": "Bela",
    "symbol": "BELA",
    "color": "rgb(34,172,243)"
  },
  "DAR": {
    "id": "darcrus",
    "name": "Darcrus",
    "symbol": "DAR",
    "color": "rgb(255,254,255)"
  },
  "QWARK": {
    "id": "qwark",
    "name": "Qwark",
    "symbol": "QWARK",
    "color": "rgb(36,155,181)"
  },
  "EXCL": {
    "id": "exclusivecoin",
    "name": "ExclusiveCoin",
    "symbol": "EXCL",
    "color": "rgb(25,25,25)"
  },
  "HTML5": {
    "id": "htmlcoin",
    "name": "HTMLCOIN",
    "symbol": "HTML5",
    "color": "rgb(54,36,15)"
  },
  "GLD": {
    "id": "goldcoin",
    "name": "GoldCoin",
    "symbol": "GLD",
    "color": "rgb(254,254,253)"
  },
  "NDC": {
    "id": "neverdie",
    "name": "NEVERDIE",
    "symbol": "NDC",
    "color": "rgb(254,254,255)"
  },
  "DOPE": {
    "id": "dopecoin",
    "name": "DopeCoin",
    "symbol": "DOPE",
    "color": "rgb(0,0,0)"
  },
  "RAIN": {
    "id": "condensate",
    "name": "Condensate",
    "symbol": "RAIN",
    "color": "rgb(111,197,214)"
  },
  "KORE": {
    "id": "korecoin",
    "name": "KoreCoin",
    "symbol": "KORE",
    "color": "rgb(220,67,45)"
  },
  "PBT": {
    "id": "primalbase",
    "name": "Primalbase Token",
    "symbol": "PBT",
    "color": "rgb(0,0,0)"
  },
  "SWIFT": {
    "id": "bitswift",
    "name": "Bitswift",
    "symbol": "SWIFT",
    "color": "rgb(122,187,75)"
  },
  "ERC": {
    "id": "europecoin",
    "name": "EuropeCoin",
    "symbol": "ERC",
    "color": "rgb(14,33,137)"
  },
  "XPM": {
    "id": "primecoin",
    "name": "Primecoin",
    "symbol": "XPM",
    "color": "rgb(0,0,0)"
  },
  "XST": {
    "id": "stealthcoin",
    "name": "Stealthcoin",
    "symbol": "XST",
    "color": "rgb(0,0,0)"
  },
  "ETT": {
    "id": "encryptotel",
    "name": "EncryptoTel",
    "symbol": "ETT",
    "color": "rgb(91,198,202)"
  },
  "PTC": {
    "id": "pesetacoin",
    "name": "Pesetacoin",
    "symbol": "PTC",
    "color": "rgb(232,122,35)"
  },
  "NSR": {
    "id": "nushares",
    "name": "NuShares",
    "symbol": "NSR",
    "color": "rgb(255,254,254)"
  },
  "JINN": {
    "id": "jinn",
    "name": "Jinn",
    "symbol": "JINN",
    "color": "rgb(191,191,191)"
  },
  "BITUSD": {
    "id": "bitusd",
    "name": "bitUSD",
    "symbol": "BITUSD",
    "color": "rgb(0,128,255)"
  },
  "GCR": {
    "id": "global-currency-reserve",
    "name": "Global Currency Reserve",
    "symbol": "GCR",
    "color": "rgb(141,196,73)"
  },
  "ESP": {
    "id": "espers",
    "name": "Espers",
    "symbol": "ESP",
    "color": "rgb(0,85,170)"
  },
  "SNC": {
    "id": "suncontract",
    "name": "SunContract",
    "symbol": "SNC",
    "color": "rgb(0,0,0)"
  },
  "OCT": {
    "id": "oraclechain",
    "name": "OracleChain",
    "symbol": "OCT",
    "color": "rgb(76,76,76)"
  },
  "NTRN": {
    "id": "neutron",
    "name": "Neutron",
    "symbol": "NTRN",
    "color": "rgb(51,51,51)"
  },
  "GEO": {
    "id": "geocoin",
    "name": "GeoCoin",
    "symbol": "GEO",
    "color": "rgb(238,78,101)"
  },
  "EQT": {
    "id": "equitrader",
    "name": "EquiTrader",
    "symbol": "EQT",
    "color": "rgb(237,238,240)"
  },
  "OPT": {
    "id": "opus",
    "name": "Opus",
    "symbol": "OPT",
    "color": "rgb(85,0,85)"
  },
  "SNRG": {
    "id": "synergy",
    "name": "Synergy",
    "symbol": "SNRG",
    "color": "rgb(0,128,128)"
  },
  "SIGT": {
    "id": "signatum",
    "name": "Signatum",
    "symbol": "SIGT",
    "color": "rgb(0,0,0)"
  },
  "ZRC": {
    "id": "zrcoin",
    "name": "ZrCoin",
    "symbol": "ZRC",
    "color": "rgb(0,0,0)"
  },
  "MNE": {
    "id": "minereum",
    "name": "Minereum",
    "symbol": "MNE",
    "color": "rgb(34,108,213)"
  },
  "SMLY": {
    "id": "smileycoin",
    "name": "SmileyCoin",
    "symbol": "SMLY",
    "color": "rgb(102,187,227)"
  },
  "DYN": {
    "id": "dynamic",
    "name": "Dynamic",
    "symbol": "DYN",
    "color": "rgb(116,66,136)"
  },
  "WBB": {
    "id": "wild-beast-block",
    "name": "Wild Beast Block",
    "symbol": "WBB",
    "color": "rgb(0,0,0)"
  },
  "CMP": {
    "id": "compcoin",
    "name": "Compcoin",
    "symbol": "CMP",
    "color": "rgb(85,170,85)"
  },
  "CV2": {
    "id": "colossuscoin-v2",
    "name": "Colossuscoin V2",
    "symbol": "CV2",
    "color": "rgb(170,170,85)"
  },
  "ONION": {
    "id": "deeponion",
    "name": "DeepOnion",
    "symbol": "ONION",
    "color": "rgb(0,128,128)"
  },
  "XMY": {
    "id": "myriad",
    "name": "Myriad",
    "symbol": "XMY",
    "color": "rgb(252,203,52)"
  },
  "POSW": {
    "id": "posw-coin",
    "name": "PoSW Coin",
    "symbol": "POSW",
    "color": "rgb(52,52,52)"
  },
  "SBD": {
    "id": "steem-dollars",
    "name": "Steem Dollars",
    "symbol": "SBD",
    "color": "rgb(80,163,239)"
  },
  "ATMS": {
    "id": "atmos",
    "name": "Atmos",
    "symbol": "ATMS",
    "color": "rgb(0,0,0)"
  },
  "HPC": {
    "id": "happycoin",
    "name": "Happycoin",
    "symbol": "HPC",
    "color": "rgb(254,255,254)"
  },
  "ICOO": {
    "id": "ico-openledger",
    "name": "ICO OpenLedger",
    "symbol": "ICOO",
    "color": "rgb(153,204,255)"
  },
  "BRX": {
    "id": "breakout-stake",
    "name": "Breakout Stake",
    "symbol": "BRX",
    "color": "rgb(0,0,0)"
  },
  "ZEIT": {
    "id": "zeitcoin",
    "name": "Zeitcoin",
    "symbol": "ZEIT",
    "color": "rgb(38,42,45)"
  },
  "DIME": {
    "id": "dimecoin",
    "name": "Dimecoin",
    "symbol": "DIME",
    "color": "rgb(204,204,204)"
  },
  "MBRS": {
    "id": "embers",
    "name": "Embers",
    "symbol": "MBRS",
    "color": "rgb(197,7,23)"
  },
  "LINDA": {
    "id": "linda",
    "name": "Linda",
    "symbol": "LINDA",
    "color": "rgb(83,83,83)"
  },
  "CRAVE": {
    "id": "crave",
    "name": "Crave",
    "symbol": "CRAVE",
    "color": "rgb(128,0,0)"
  },
  "ZCL": {
    "id": "zclassic",
    "name": "ZClassic",
    "symbol": "ZCL",
    "color": "rgb(204,109,69)"
  },
  "SMART": {
    "id": "smartcash",
    "name": "SmartCash",
    "symbol": "SMART",
    "color": "rgb(0,0,0)"
  },
  "CVCOIN": {
    "id": "cvcoin",
    "name": "CVCoin",
    "symbol": "CVCOIN",
    "color": "rgb(128,128,128)"
  },
  "XWC": {
    "id": "whitecoin",
    "name": "WhiteCoin",
    "symbol": "XWC",
    "color": "rgb(250,250,250)"
  },
  "VASH": {
    "id": "vpncoin",
    "name": "VPNCoin",
    "symbol": "VASH",
    "color": "rgb(51,51,51)"
  },
  "EAC": {
    "id": "earthcoin",
    "name": "EarthCoin",
    "symbol": "EAC",
    "color": "rgb(98,178,77)"
  },
  "BTA": {
    "id": "bata",
    "name": "Bata",
    "symbol": "BTA",
    "color": "rgb(254,254,255)"
  },
  "EGC": {
    "id": "evergreencoin",
    "name": "EverGreenCoin",
    "symbol": "EGC",
    "color": "rgb(1,132,87)"
  },
  "CANN": {
    "id": "cannabiscoin",
    "name": "CannabisCoin",
    "symbol": "CANN",
    "color": "rgb(0,0,0)"
  },
  "TRC": {
    "id": "terracoin",
    "name": "Terracoin",
    "symbol": "TRC",
    "color": "rgb(0,0,0)"
  },
  "VSM": {
    "id": "voise",
    "name": "VOISE",
    "symbol": "VSM",
    "color": "rgb(122,237,214)"
  },
  "MINT": {
    "id": "mintcoin",
    "name": "Mintcoin",
    "symbol": "MINT",
    "color": "rgb(78,186,101)"
  },
  "BRK": {
    "id": "breakout",
    "name": "Breakout",
    "symbol": "BRK",
    "color": "rgb(0,0,0)"
  },
  "2GIVE": {
    "id": "2give",
    "name": "2GIVE",
    "symbol": "2GIVE",
    "color": "rgb(255,204,102)"
  },
  "BLU": {
    "id": "bluecoin",
    "name": "BlueCoin",
    "symbol": "BLU",
    "color": "rgb(0,0,255)"
  },
  "WTT": {
    "id": "giga-watt-token",
    "name": "Giga Watt Token",
    "symbol": "WTT",
    "color": "rgb(0,0,0)"
  },
  "CHC": {
    "id": "chaincoin",
    "name": "ChainCoin",
    "symbol": "CHC",
    "color": "rgb(0,0,0)"
  },
  "NAUT": {
    "id": "nautiluscoin",
    "name": "NautilusCoin",
    "symbol": "NAUT",
    "color": "rgb(0,0,0)"
  },
  "ADZ": {
    "id": "adzcoin",
    "name": "Adzcoin",
    "symbol": "ADZ",
    "color": "rgb(181,181,181)"
  },
  "SPRTS": {
    "id": "sprouts",
    "name": "Sprouts",
    "symbol": "SPRTS",
    "color": "rgb(169,199,69)"
  },
  "XMG": {
    "id": "magi",
    "name": "Magi",
    "symbol": "XMG",
    "color": "rgb(178,178,178)"
  },
  "MEME": {
    "id": "memetic",
    "name": "Memetic",
    "symbol": "MEME",
    "color": "rgb(177,177,177)"
  },
  "DCN": {
    "id": "dentacoin",
    "name": "Dentacoin",
    "symbol": "DCN",
    "color": "rgb(0,0,0)"
  },
  "VRM": {
    "id": "veriumreserve",
    "name": "VeriumReserve",
    "symbol": "VRM",
    "color": "rgb(70,80,90)"
  },
  "ETBS": {
    "id": "ethbits",
    "name": "Ethbits",
    "symbol": "ETBS",
    "color": "rgb(37,37,37)"
  },
  "CNT": {
    "id": "centurion",
    "name": "Centurion",
    "symbol": "CNT",
    "color": "rgb(76,76,76)"
  },
  "LGD": {
    "id": "legends-room",
    "name": "Legends Room",
    "symbol": "LGD",
    "color": "rgb(228,177,59)"
  },
  "ZENI": {
    "id": "zennies",
    "name": "Zennies",
    "symbol": "ZENI",
    "color": "rgb(158,0,93)"
  },
  "SYNX": {
    "id": "syndicate",
    "name": "Syndicate",
    "symbol": "SYNX",
    "color": "rgb(253,253,253)"
  },
  "PIE": {
    "id": "piecoin",
    "name": "PIECoin",
    "symbol": "PIE",
    "color": "rgb(223,172,115)"
  },
  "STA": {
    "id": "starta",
    "name": "Starta",
    "symbol": "STA",
    "color": "rgb(133,5,10)"
  },
  "XTO": {
    "id": "tao",
    "name": "Tao",
    "symbol": "XTO",
    "color": "rgb(0,0,0)"
  },
  "TX": {
    "id": "transfercoin",
    "name": "TransferCoin",
    "symbol": "TX",
    "color": "rgb(40,140,201)"
  },
  "XMCC": {
    "id": "monacocoin",
    "name": "MonacoCoin",
    "symbol": "XMCC",
    "color": "rgb(156,28,56)"
  },
  "SKIN": {
    "id": "skincoin",
    "name": "SkinCoin",
    "symbol": "SKIN",
    "color": "rgb(11,87,128)"
  },
  "IFC": {
    "id": "infinitecoin",
    "name": "Infinitecoin",
    "symbol": "IFC",
    "color": "rgb(215,139,49)"
  },
  "REX": {
    "id": "real-estate-tokens",
    "name": "Real Estate Tokens",
    "symbol": "REX",
    "color": "rgb(50,54,102)"
  },
  "QRK": {
    "id": "quark",
    "name": "Quark",
    "symbol": "QRK",
    "color": "rgb(128,128,128)"
  },
  "MGC": {
    "id": "gulfcoin",
    "name": "GulfCoin",
    "symbol": "MGC",
    "color": "rgb(255,255,0)"
  },
  "MEC": {
    "id": "megacoin",
    "name": "Megacoin",
    "symbol": "MEC",
    "color": "rgb(205,44,48)"
  },
  "TKS": {
    "id": "tokes",
    "name": "Tokes",
    "symbol": "TKS",
    "color": "rgb(0,0,0)"
  },
  "RIC": {
    "id": "riecoin",
    "name": "Riecoin",
    "symbol": "RIC",
    "color": "rgb(224,224,217)"
  },
  "CREA": {
    "id": "creativecoin",
    "name": "Creativecoin",
    "symbol": "CREA",
    "color": "rgb(5,5,5)"
  },
  "VISIO": {
    "id": "visio",
    "name": "Visio",
    "symbol": "VISIO",
    "color": "rgb(31,32,36)"
  },
  "CCRB": {
    "id": "cryptocarbon",
    "name": "CryptoCarbon",
    "symbol": "CCRB",
    "color": "rgb(255,255,0)"
  },
  "ADST": {
    "id": "adshares",
    "name": "AdShares",
    "symbol": "ADST",
    "color": "rgb(128,191,255)"
  },
  "CBX": {
    "id": "cryptogenic-bullion",
    "name": "Crypto Bullion",
    "symbol": "CBX",
    "color": "rgb(170,170,170)"
  },
  "WDC": {
    "id": "worldcoin",
    "name": "WorldCoin",
    "symbol": "WDC",
    "color": "rgb(170,255,255)"
  },
  "VTR": {
    "id": "vtorrent",
    "name": "vTorrent",
    "symbol": "VTR",
    "color": "rgb(74,49,48)"
  },
  "HUC": {
    "id": "huntercoin",
    "name": "HunterCoin",
    "symbol": "HUC",
    "color": "rgb(85,85,0)"
  },
  "ADL": {
    "id": "adelphoi",
    "name": "Adelphoi",
    "symbol": "ADL",
    "color": "rgb(56,122,133)"
  },
  "PING": {
    "id": "cryptoping",
    "name": "CryptoPing",
    "symbol": "PING",
    "color": "rgb(0,0,0)"
  },
  "FUCK": {
    "id": "fucktoken",
    "name": "FuckToken",
    "symbol": "FUCK",
    "color": "rgb(72,164,216)"
  },
  "TRUST": {
    "id": "trustplus",
    "name": "TrustPlus",
    "symbol": "TRUST",
    "color": "rgb(0,0,0)"
  },
  "CPC": {
    "id": "capricoin",
    "name": "Capricoin",
    "symbol": "CPC",
    "color": "rgb(54,54,53)"
  },
  "HYP": {
    "id": "hyperstake",
    "name": "HyperStake",
    "symbol": "HYP",
    "color": "rgb(94,124,136)"
  },
  "ARC": {
    "id": "arcade-token",
    "name": "Arcade Token",
    "symbol": "ARC",
    "color": "rgb(27,22,59)"
  },
  "PKB": {
    "id": "parkbyte",
    "name": "ParkByte",
    "symbol": "PKB",
    "color": "rgb(42,151,218)"
  },
  "XCN": {
    "id": "cryptonite",
    "name": "Cryptonite",
    "symbol": "XCN",
    "color": "rgb(128,128,128)"
  },
  "EFL": {
    "id": "e-gulden",
    "name": "e-Gulden",
    "symbol": "EFL",
    "color": "rgb(255,148,11)"
  },
  "FNC": {
    "id": "fincoin",
    "name": "FinCoin",
    "symbol": "FNC",
    "color": "rgb(79,42,129)"
  },
  "ALT": {
    "id": "altcoin-alt",
    "name": "Altcoin",
    "symbol": "ALT",
    "color": "rgb(236,41,41)"
  },
  "START": {
    "id": "startcoin",
    "name": "Startcoin",
    "symbol": "START",
    "color": "rgb(1,174,240)"
  },
  "INPAY": {
    "id": "inpay",
    "name": "InPay",
    "symbol": "INPAY",
    "color": "rgb(0,0,0)"
  },
  "DDF": {
    "id": "digital-developers-fund",
    "name": "DigitalDevelopersFund",
    "symbol": "DDF",
    "color": "rgb(58,70,81)"
  },
  "MAX": {
    "id": "maxcoin",
    "name": "MaxCoin",
    "symbol": "MAX",
    "color": "rgb(76,76,76)"
  },
  "HUSH": {
    "id": "hush",
    "name": "Hush",
    "symbol": "HUSH",
    "color": "rgb(45,45,45)"
  },
  "JNS": {
    "id": "janus",
    "name": "Janus",
    "symbol": "JNS",
    "color": "rgb(66,89,0)"
  },
  "ADC": {
    "id": "audiocoin",
    "name": "AudioCoin",
    "symbol": "ADC",
    "color": "rgb(60,176,229)"
  },
  "EOT": {
    "id": "eot-token",
    "name": "EOT Token",
    "symbol": "EOT",
    "color": "rgb(152,102,20)"
  },
  "GRWI": {
    "id": "growers-international",
    "name": "Growers International",
    "symbol": "GRWI",
    "color": "rgb(64,128,64)"
  },
  "DOT": {
    "id": "dotcoin",
    "name": "Dotcoin",
    "symbol": "DOT",
    "color": "rgb(0,0,0)"
  },
  "B3": {
    "id": "b3coin",
    "name": "B3Coin",
    "symbol": "B3",
    "color": "rgb(255,170,43)"
  },
  "ZCC": {
    "id": "zccoin",
    "name": "ZcCoin",
    "symbol": "ZCC",
    "color": "rgb(230,198,153)"
  },
  "INSN": {
    "id": "insanecoin-insn",
    "name": "InsaneCoin",
    "symbol": "INSN",
    "color": "rgb(0,0,0)"
  },
  "MBI": {
    "id": "monster-byte",
    "name": "Monster Byte",
    "symbol": "MBI",
    "color": "rgb(27,27,25)"
  },
  "HNC": {
    "id": "huncoin",
    "name": "Huncoin",
    "symbol": "HNC",
    "color": "rgb(205,220,178)"
  },
  "LDOGE": {
    "id": "litedoge",
    "name": "LiteDoge",
    "symbol": "LDOGE",
    "color": "rgb(255,204,0)"
  },
  "TAG": {
    "id": "tagcoin",
    "name": "TagCoin",
    "symbol": "TAG",
    "color": "rgb(203,30,36)"
  },
  "DRACO": {
    "id": "dt-token",
    "name": "DT Token",
    "symbol": "DRACO",
    "color": "rgb(0,0,0)"
  },
  "BLOCKPAY": {
    "id": "blockpay",
    "name": "BlockPay",
    "symbol": "BLOCKPAY",
    "color": "rgb(24,168,37)"
  },
  "CAGE": {
    "id": "cagecoin",
    "name": "CageCoin",
    "symbol": "CAGE",
    "color": "rgb(44,187,134)"
  },
  "BYC": {
    "id": "bytecent",
    "name": "Bytecent",
    "symbol": "BYC",
    "color": "rgb(255,252,253)"
  },
  "ENT": {
    "id": "eternity",
    "name": "Eternity",
    "symbol": "ENT",
    "color": "rgb(0,177,221)"
  },
  "USNBT": {
    "id": "nubits",
    "name": "NuBits",
    "symbol": "USNBT",
    "color": "rgb(255,255,254)"
  },
  "MER": {
    "id": "mercury",
    "name": "Mercury",
    "symbol": "MER",
    "color": "rgb(254,254,254)"
  },
  "IFLT": {
    "id": "inflationcoin",
    "name": "InflationCoin",
    "symbol": "IFLT",
    "color": "rgb(212,224,254)"
  },
  "INFX": {
    "id": "influxcoin",
    "name": "Influxcoin",
    "symbol": "INFX",
    "color": "rgb(0,0,0)"
  },
  "SXC": {
    "id": "sexcoin",
    "name": "Sexcoin",
    "symbol": "SXC",
    "color": "rgb(170,170,170)"
  },
  "PND": {
    "id": "pandacoin-pnd",
    "name": "Pandacoin",
    "symbol": "PND",
    "color": "rgb(0,0,0)"
  },
  "STRC": {
    "id": "starcredits",
    "name": "StarCredits",
    "symbol": "STRC",
    "color": "rgb(0,255,255)"
  },
  "RNS": {
    "id": "renos",
    "name": "Renos",
    "symbol": "RNS",
    "color": "rgb(0,255,255)"
  },
  "XVS": {
    "id": "vsync",
    "name": "Vsync",
    "symbol": "XVS",
    "color": "rgb(104,168,202)"
  },
  "KRS": {
    "id": "krypstal",
    "name": "Krypstal",
    "symbol": "KRS",
    "color": "rgb(29,180,212)"
  },
  "XHI": {
    "id": "hicoin",
    "name": "HiCoin",
    "symbol": "XHI",
    "color": "rgb(255,255,170)"
  },
  "NKA": {
    "id": "incakoin",
    "name": "IncaKoin",
    "symbol": "NKA",
    "color": "rgb(255,128,128)"
  },
  "FST": {
    "id": "fastcoin",
    "name": "Fastcoin",
    "symbol": "FST",
    "color": "rgb(238,158,35)"
  },
  "VIVO": {
    "id": "vivo",
    "name": "VIVO",
    "symbol": "VIVO",
    "color": "rgb(85,170,255)"
  },
  "FCN": {
    "id": "fantomcoin",
    "name": "Fantomcoin",
    "symbol": "FCN",
    "color": "rgb(27,27,27)"
  },
  "HERO": {
    "id": "sovereign-hero",
    "name": "Sovereign Hero",
    "symbol": "HERO",
    "color": "rgb(128,128,128)"
  },
  "MRT": {
    "id": "miners-reward-token",
    "name": "Miners' Reward Token",
    "symbol": "MRT",
    "color": "rgb(61,61,61)"
  },
  "NETKO": {
    "id": "netko",
    "name": "Netko",
    "symbol": "NETKO",
    "color": "rgb(206,220,47)"
  },
  "BASH": {
    "id": "luckchain",
    "name": "LuckChain",
    "symbol": "BASH",
    "color": "rgb(0,0,0)"
  },
  "BRO": {
    "id": "bitradio",
    "name": "Bitradio",
    "symbol": "BRO",
    "color": "rgb(254,255,255)"
  },
  "EMP": {
    "id": "emoneypower",
    "name": "EMoneyPower",
    "symbol": "EMP",
    "color": "rgb(199,69,47)"
  },
  "UIS": {
    "id": "unitus",
    "name": "Unitus",
    "symbol": "UIS",
    "color": "rgb(255,255,0)"
  },
  "DNR": {
    "id": "denarius-dnr",
    "name": "Denarius",
    "symbol": "DNR",
    "color": "rgb(170,170,170)"
  },
  "XVP": {
    "id": "virtacoinplus",
    "name": "Virtacoinplus",
    "symbol": "XVP",
    "color": "rgb(0,153,0)"
  },
  "LINX": {
    "id": "linx",
    "name": "Linx",
    "symbol": "LINX",
    "color": "rgb(36,35,34)"
  },
  "FIMK": {
    "id": "fimkrypto",
    "name": "FIMKrypto",
    "symbol": "FIMK",
    "color": "rgb(85,170,170)"
  },
  "ZOI": {
    "id": "zoin",
    "name": "Zoin",
    "symbol": "ZOI",
    "color": "rgb(18,24,69)"
  },
  "FJC": {
    "id": "fujicoin",
    "name": "FujiCoin",
    "symbol": "FJC",
    "color": "rgb(29,176,233)"
  },
  "XP": {
    "id": "xp",
    "name": "XP",
    "symbol": "XP",
    "color": "rgb(192,192,192)"
  },
  "EBST": {
    "id": "eboostcoin",
    "name": "eBoost",
    "symbol": "EBST",
    "color": "rgb(0,255,255)"
  },
  "KEK": {
    "id": "kekcoin",
    "name": "KekCoin",
    "symbol": "KEK",
    "color": "rgb(0,0,0)"
  },
  "UNIFY": {
    "id": "unify",
    "name": "Unify",
    "symbol": "UNIFY",
    "color": "rgb(67,66,66)"
  },
  "BUN": {
    "id": "bunnycoin",
    "name": "BunnyCoin",
    "symbol": "BUN",
    "color": "rgb(215,139,49)"
  },
  "MOIN": {
    "id": "moin",
    "name": "Moin",
    "symbol": "MOIN",
    "color": "rgb(0,255,255)"
  },
  "ITI": {
    "id": "iticoin",
    "name": "iTicoin",
    "symbol": "ITI",
    "color": "rgb(11,7,5)"
  },
  "CRM": {
    "id": "cream",
    "name": "Cream",
    "symbol": "CRM",
    "color": "rgb(45,45,45)"
  },
  "DAS": {
    "id": "das",
    "name": "DAS",
    "symbol": "DAS",
    "color": "rgb(201,41,117)"
  },
  "RMC": {
    "id": "remicoin",
    "name": "Remicoin",
    "symbol": "RMC",
    "color": "rgb(38,216,229)"
  },
  "UNB": {
    "id": "unbreakablecoin",
    "name": "UnbreakableCoin",
    "symbol": "UNB",
    "color": "rgb(0,0,0)"
  },
  "XCXT": {
    "id": "coinonatx",
    "name": "CoinonatX",
    "symbol": "XCXT",
    "color": "rgb(253,254,254)"
  },
  "PROC": {
    "id": "procurrency",
    "name": "ProCurrency",
    "symbol": "PROC",
    "color": "rgb(17,43,73)"
  },
  "OCL": {
    "id": "oceanlab",
    "name": "Oceanlab",
    "symbol": "OCL",
    "color": "rgb(30,168,160)"
  },
  "ZET": {
    "id": "zetacoin",
    "name": "Zetacoin",
    "symbol": "ZET",
    "color": "rgb(36,112,137)"
  },
  "DFT": {
    "id": "draftcoin",
    "name": "DraftCoin",
    "symbol": "DFT",
    "color": "rgb(252,252,252)"
  },
  "NEWB": {
    "id": "newbium",
    "name": "Newbium",
    "symbol": "NEWB",
    "color": "rgb(252,13,27)"
  },
  "XTC": {
    "id": "tilecoin",
    "name": "TileCoin",
    "symbol": "XTC",
    "color": "rgb(253,103,33)"
  },
  "KRB": {
    "id": "karbowanec",
    "name": "Karbowanec",
    "symbol": "KRB",
    "color": "rgb(0,160,227)"
  },
  "RBIES": {
    "id": "rubies",
    "name": "Rubies",
    "symbol": "RBIES",
    "color": "rgb(255,0,0)"
  },
  "BTB": {
    "id": "bitbar",
    "name": "BitBar",
    "symbol": "BTB",
    "color": "rgb(254,250,170)"
  },
  "RLT": {
    "id": "roulettetoken",
    "name": "RouletteToken",
    "symbol": "RLT",
    "color": "rgb(0,0,0)"
  },
  "WOMEN": {
    "id": "women",
    "name": "WomenCoin",
    "symbol": "WOMEN",
    "color": "rgb(228,45,215)"
  },
  "ECA": {
    "id": "electra",
    "name": "Electra",
    "symbol": "ECA",
    "color": "rgb(161,77,162)"
  },
  "8BIT": {
    "id": "8bit",
    "name": "8Bit",
    "symbol": "8BIT",
    "color": "rgb(0,0,0)"
  },
  "POST": {
    "id": "postcoin",
    "name": "PostCoin",
    "symbol": "POST",
    "color": "rgb(9,83,96)"
  },
  "BAS": {
    "id": "bitasean",
    "name": "BitAsean",
    "symbol": "BAS",
    "color": "rgb(43,26,153)"
  },
  "TRUMP": {
    "id": "trumpcoin",
    "name": "TrumpCoin",
    "symbol": "TRUMP",
    "color": "rgb(195,180,146)"
  },
  "SCORE": {
    "id": "scorecoin",
    "name": "Scorecoin",
    "symbol": "SCORE",
    "color": "rgb(67,119,176)"
  },
  "V": {
    "id": "version",
    "name": "Version",
    "symbol": "V",
    "color": "rgb(31,31,31)"
  },
  "ZER": {
    "id": "zero",
    "name": "Zero",
    "symbol": "ZER",
    "color": "rgb(204,132,54)"
  },
  "ATOM": {
    "id": "atomic-coin",
    "name": "Atomic Coin",
    "symbol": "ATOM",
    "color": "rgb(0,0,255)"
  },
  "BITS": {
    "id": "bitstar",
    "name": "Bitstar",
    "symbol": "BITS",
    "color": "rgb(245,145,50)"
  },
  "GCN": {
    "id": "gcoin",
    "name": "GCoin",
    "symbol": "GCN",
    "color": "rgb(0,0,0)"
  },
  "PXC": {
    "id": "phoenixcoin",
    "name": "Phoenixcoin",
    "symbol": "PXC",
    "color": "rgb(39,18,13)"
  },
  "DEM": {
    "id": "deutsche-emark",
    "name": "Deutsche eMark",
    "symbol": "DEM",
    "color": "rgb(42,42,43)"
  },
  "SUMO": {
    "id": "sumokoin",
    "name": "Sumokoin",
    "symbol": "SUMO",
    "color": "rgb(0,0,0)"
  },
  "MAC": {
    "id": "machinecoin",
    "name": "Machinecoin",
    "symbol": "MAC",
    "color": "rgb(245,246,247)"
  },
  "FXE": {
    "id": "futurexe",
    "name": "FuturXe",
    "symbol": "FXE",
    "color": "rgb(236,20,37)"
  },
  "BITBTC": {
    "id": "bitbtc",
    "name": "bitBTC",
    "symbol": "BITBTC",
    "color": "rgb(0,128,255)"
  },
  "NYC": {
    "id": "newyorkcoin",
    "name": "NewYorkCoin",
    "symbol": "NYC",
    "color": "rgb(195,128,91)"
  },
  "EL": {
    "id": "elcoin-el",
    "name": "Elcoin",
    "symbol": "EL",
    "color": "rgb(0,0,0)"
  },
  "FLAX": {
    "id": "flaxscript",
    "name": "Flaxscript",
    "symbol": "FLAX",
    "color": "rgb(224,223,200)"
  },
  "ONX": {
    "id": "onix",
    "name": "Onix",
    "symbol": "ONX",
    "color": "rgb(170,170,170)"
  },
  "ZUR": {
    "id": "zurcoin",
    "name": "Zurcoin",
    "symbol": "ZUR",
    "color": "rgb(128,128,0)"
  },
  "FRN": {
    "id": "francs",
    "name": "Francs",
    "symbol": "FRN",
    "color": "rgb(0,0,0)"
  },
  "BITSILVER": {
    "id": "bitsilver",
    "name": "bitSilver",
    "symbol": "BITSILVER",
    "color": "rgb(0,128,255)"
  },
  "GCC": {
    "id": "guccionecoin",
    "name": "GuccioneCoin",
    "symbol": "GCC",
    "color": "rgb(0,0,0)"
  },
  "ICE": {
    "id": "idice",
    "name": "iDice",
    "symbol": "ICE",
    "color": "rgb(244,250,243)"
  },
  "DALC": {
    "id": "dalecoin",
    "name": "Dalecoin",
    "symbol": "DALC",
    "color": "rgb(0,0,0)"
  },
  "YOC": {
    "id": "yocoin",
    "name": "Yocoin",
    "symbol": "YOC",
    "color": "rgb(0,152,228)"
  },
  "CNC": {
    "id": "chncoin",
    "name": "CHNCoin",
    "symbol": "CNC",
    "color": "rgb(0,0,0)"
  },
  "MNM": {
    "id": "mineum",
    "name": "Mineum",
    "symbol": "MNM",
    "color": "rgb(254,254,253)"
  },
  "MAO": {
    "id": "mao-zedong",
    "name": "Mao Zedong",
    "symbol": "MAO",
    "color": "rgb(46,43,39)"
  },
  "RBX": {
    "id": "ripto-bux",
    "name": "Ripto Bux",
    "symbol": "RBX",
    "color": "rgb(250,253,255)"
  },
  "GPU": {
    "id": "gpu-coin",
    "name": "GPU Coin",
    "symbol": "GPU",
    "color": "rgb(0,0,0)"
  },
  "USDE": {
    "id": "usde",
    "name": "USDe",
    "symbol": "USDE",
    "color": "rgb(0,0,0)"
  },
  "GB": {
    "id": "goldblocks",
    "name": "GoldBlocks",
    "symbol": "GB",
    "color": "rgb(211,173,67)"
  },
  "MSCN": {
    "id": "master-swiscoin",
    "name": "Master Swiscoin",
    "symbol": "MSCN",
    "color": "rgb(226,224,225)"
  },
  "CNNC": {
    "id": "cannation",
    "name": "Cannation",
    "symbol": "CNNC",
    "color": "rgb(0,0,0)"
  },
  "CMPCO": {
    "id": "campuscoin",
    "name": "CampusCoin",
    "symbol": "CMPCO",
    "color": "rgb(30,139,89)"
  },
  "TEK": {
    "id": "tekcoin",
    "name": "TEKcoin",
    "symbol": "TEK",
    "color": "rgb(255,0,0)"
  },
  "BITEUR": {
    "id": "biteur",
    "name": "bitEUR",
    "symbol": "BITEUR",
    "color": "rgb(0,128,191)"
  },
  "VC": {
    "id": "virtualcoin",
    "name": "VirtualCoin",
    "symbol": "VC",
    "color": "rgb(43,43,43)"
  },
  "CJ": {
    "id": "cryptojacks",
    "name": "Cryptojacks",
    "symbol": "CJ",
    "color": "rgb(170,170,170)"
  },
  "PASL": {
    "id": "pascal-lite",
    "name": "Pascal Lite",
    "symbol": "PASL",
    "color": "rgb(0,172,255)"
  },
  "CORG": {
    "id": "corgicoin",
    "name": "CorgiCoin",
    "symbol": "CORG",
    "color": "rgb(0,173,237)"
  },
  "MOJO": {
    "id": "mojocoin",
    "name": "MojoCoin",
    "symbol": "MOJO",
    "color": "rgb(10,13,18)"
  },
  "PRC": {
    "id": "prcoin",
    "name": "PRCoin",
    "symbol": "PRC",
    "color": "rgb(110,120,185)"
  },
  "XLR": {
    "id": "solaris",
    "name": "Solaris",
    "symbol": "XLR",
    "color": "rgb(0,0,0)"
  },
  "XCT": {
    "id": "c-bit",
    "name": "C-Bit",
    "symbol": "XCT",
    "color": "rgb(0,0,0)"
  },
  "KLC": {
    "id": "kilocoin",
    "name": "KiloCoin",
    "symbol": "KLC",
    "color": "rgb(85,85,85)"
  },
  "BOAT": {
    "id": "doubloon",
    "name": "Doubloon",
    "symbol": "BOAT",
    "color": "rgb(85,85,85)"
  },
  "BLAS": {
    "id": "blakestar",
    "name": "BlakeStar",
    "symbol": "BLAS",
    "color": "rgb(0,0,0)"
  },
  "4CHN": {
    "id": "chancoin",
    "name": "ChanCoin",
    "symbol": "4CHN",
    "color": "rgb(174,205,151)"
  },
  "ZNY": {
    "id": "bitzeny",
    "name": "Bitzeny",
    "symbol": "ZNY",
    "color": "rgb(166,166,166)"
  },
  "ECO": {
    "id": "ecocoin",
    "name": "EcoCoin",
    "symbol": "ECO",
    "color": "rgb(225,181,97)"
  },
  "STV": {
    "id": "sativacoin",
    "name": "Sativacoin",
    "symbol": "STV",
    "color": "rgb(196,203,192)"
  },
  "MCRN": {
    "id": "macron",
    "name": "MACRON",
    "symbol": "MCRN",
    "color": "rgb(77,83,95)"
  },
  "CREVA": {
    "id": "crevacoin",
    "name": "CrevaCoin",
    "symbol": "CREVA",
    "color": "rgb(0,0,0)"
  },
  "PHO": {
    "id": "photon",
    "name": "Photon",
    "symbol": "PHO",
    "color": "rgb(128,128,191)"
  },
  "MND": {
    "id": "mindcoin",
    "name": "MindCoin",
    "symbol": "MND",
    "color": "rgb(223,255,255)"
  },
  "ICON": {
    "id": "iconic",
    "name": "Iconic",
    "symbol": "ICON",
    "color": "rgb(56,123,180)"
  },
  "CWXT": {
    "id": "cryptoworldx-token",
    "name": "CryptoWorldX Token",
    "symbol": "CWXT",
    "color": "rgb(0,0,0)"
  },
  "WBC": {
    "id": "wallet-builders-coin",
    "name": "WalletBuildersCoin",
    "symbol": "WBC",
    "color": "rgb(242,131,106)"
  },
  "PLNC": {
    "id": "plncoin",
    "name": "PLNcoin",
    "symbol": "PLNC",
    "color": "rgb(189,122,128)"
  },
  "ERY": {
    "id": "eryllium",
    "name": "Eryllium",
    "symbol": "ERY",
    "color": "rgb(102,102,102)"
  },
  "VRS": {
    "id": "veros",
    "name": "Veros",
    "symbol": "VRS",
    "color": "rgb(29,60,103)"
  },
  "IMX": {
    "id": "impact",
    "name": "Impact",
    "symbol": "IMX",
    "color": "rgb(232,251,255)"
  },
  "LTCU": {
    "id": "litecoin-ultra",
    "name": "LiteCoin Ultra",
    "symbol": "LTCU",
    "color": "rgb(85,85,85)"
  },
  "LCP": {
    "id": "litecoin-plus",
    "name": "Litecoin Plus",
    "symbol": "LCP",
    "color": "rgb(175,209,222)"
  },
  "FRAZ": {
    "id": "frazcoin",
    "name": "Frazcoin",
    "symbol": "FRAZ",
    "color": "rgb(102,232,106)"
  },
  "APW": {
    "id": "applecoin-apw",
    "name": "AppleCoin",
    "symbol": "APW",
    "color": "rgb(255,191,64)"
  },
  "BRIA": {
    "id": "briacoin",
    "name": "BriaCoin",
    "symbol": "BRIA",
    "color": "rgb(255,255,0)"
  },
  "420G": {
    "id": "ganjacoin",
    "name": "GanjaCoin",
    "symbol": "420G",
    "color": "rgb(250,250,250)"
  },
  "MGM": {
    "id": "magnum",
    "name": "Magnum",
    "symbol": "MGM",
    "color": "rgb(255,255,0)"
  },
  "LVPS": {
    "id": "levoplus",
    "name": "LevoPlus",
    "symbol": "LVPS",
    "color": "rgb(254,253,252)"
  },
  "LBTC": {
    "id": "litebitcoin",
    "name": "LiteBitcoin",
    "symbol": "LBTC",
    "color": "rgb(0,0,0)"
  },
  "EBT": {
    "id": "ebittree-coin",
    "name": "Ebittree Coin",
    "symbol": "EBT",
    "color": "rgb(255,255,170)"
  },
  "ARGUS": {
    "id": "argus",
    "name": "Argus",
    "symbol": "ARGUS",
    "color": "rgb(52,68,83)"
  },
  "HMC": {
    "id": "harmonycoin-hmc",
    "name": "HarmonyCoin",
    "symbol": "HMC",
    "color": "rgb(26,38,71)"
  },
  "ENV": {
    "id": "environ",
    "name": "Environ",
    "symbol": "ENV",
    "color": "rgb(0,0,0)"
  },
  "XEN": {
    "id": "xenixcoin",
    "name": "Xenixcoin",
    "symbol": "XEN",
    "color": "rgb(128,128,128)"
  },
  "EB3": {
    "id": "eb3-coin",
    "name": "EB3 Coin",
    "symbol": "EB3",
    "color": "rgb(255,170,85)"
  },
  "B@": {
    "id": "bankcoin",
    "name": "Bankcoin",
    "symbol": "B@",
    "color": "rgb(7,66,166)"
  },
  "ICO": {
    "id": "ico",
    "name": "ICO",
    "symbol": "ICO",
    "color": "rgb(199,159,103)"
  },
  "STCN": {
    "id": "stakecoin-stcn",
    "name": "Stakecoin",
    "symbol": "STCN",
    "color": "rgb(193,193,195)"
  },
  "AC": {
    "id": "asiacoin",
    "name": "AsiaCoin",
    "symbol": "AC",
    "color": "rgb(255,0,0)"
  },
  "CADASTRAL": {
    "id": "bitland",
    "name": "Bitland",
    "symbol": "CADASTRAL",
    "color": "rgb(15,122,81)"
  },
  "PANGEA": {
    "id": "pangea-poker",
    "name": "Pangea Poker",
    "symbol": "PANGEA",
    "color": "rgb(23,153,174)"
  },
  "LNK": {
    "id": "link-platform",
    "name": "Link Platform",
    "symbol": "LNK",
    "color": "rgb(29,47,75)"
  },
  "BPC": {
    "id": "bitpark-coin",
    "name": "Bitpark Coin",
    "symbol": "BPC",
    "color": "rgb(25,160,194)"
  },
  "YASH": {
    "id": "yashcoin",
    "name": "YashCoin",
    "symbol": "YASH",
    "color": "rgb(28,131,40)"
  },
  "FYN": {
    "id": "fundyourselfnow",
    "name": "FundYourselfNow",
    "symbol": "FYN",
    "color": "rgb(214,90,49)"
  },
  "IXC": {
    "id": "ixcoin",
    "name": "Ixcoin",
    "symbol": "IXC",
    "color": "rgb(190,190,191)"
  },
  "GRE": {
    "id": "greencoin",
    "name": "Greencoin",
    "symbol": "GRE",
    "color": "rgb(92,158,31)"
  },
  "CRYPT": {
    "id": "cryptcoin",
    "name": "CryptCoin",
    "symbol": "CRYPT",
    "color": "rgb(5,63,106)"
  },
  "USC": {
    "id": "ultimate-secure-cash",
    "name": "Ultimate Secure Cash",
    "symbol": "USC",
    "color": "rgb(15,7,7)"
  },
  "HTC": {
    "id": "hitcoin",
    "name": "HitCoin",
    "symbol": "HTC",
    "color": "rgb(170,85,85)"
  },
  "RUSTBITS": {
    "id": "rustbits",
    "name": "Rustbits",
    "symbol": "RUSTBITS",
    "color": "rgb(0,0,0)"
  },
  "LTBC": {
    "id": "ltbcoin",
    "name": "LTBcoin",
    "symbol": "LTBC",
    "color": "rgb(255,170,85)"
  },
  "RIYA": {
    "id": "etheriya",
    "name": "Etheriya",
    "symbol": "RIYA",
    "color": "rgb(76,76,76)"
  },
  "LOG": {
    "id": "woodcoin",
    "name": "Woodcoin",
    "symbol": "LOG",
    "color": "rgb(170,85,85)"
  },
  "OTX": {
    "id": "octanox",
    "name": "Octanox",
    "symbol": "OTX",
    "color": "rgb(121,165,70)"
  },
  "CASINO": {
    "id": "casino",
    "name": "Casino",
    "symbol": "CASINO",
    "color": "rgb(44,152,240)"
  },
  "SDC": {
    "id": "shadowcash",
    "name": "ShadowCash",
    "symbol": "SDC",
    "color": "rgb(225,33,63)"
  },
  "CARBON": {
    "id": "carboncoin",
    "name": "Carboncoin",
    "symbol": "CARBON",
    "color": "rgb(66,180,112)"
  },
  "METAL": {
    "id": "metalcoin",
    "name": "MetalCoin",
    "symbol": "METAL",
    "color": "rgb(0,0,0)"
  },
  "BITZ": {
    "id": "bitz",
    "name": "Bitz",
    "symbol": "BITZ",
    "color": "rgb(12,43,145)"
  },
  "CDN": {
    "id": "canada-ecoin",
    "name": "Canada eCoin",
    "symbol": "CDN",
    "color": "rgb(234,37,46)"
  },
  "CSC": {
    "id": "casinocoin",
    "name": "CasinoCoin",
    "symbol": "CSC",
    "color": "rgb(165,27,31)"
  },
  "FUNC": {
    "id": "funcoin",
    "name": "FUNCoin",
    "symbol": "FUNC",
    "color": "rgb(254,253,254)"
  },
  "NOBL": {
    "id": "noblecoin",
    "name": "NobleCoin",
    "symbol": "NOBL",
    "color": "rgb(0,0,0)"
  },
  "WGO": {
    "id": "wavesgo",
    "name": "WavesGo",
    "symbol": "WGO",
    "color": "rgb(0,0,0)"
  },
  "DVC": {
    "id": "devcoin",
    "name": "Devcoin",
    "symbol": "DVC",
    "color": "rgb(46,152,66)"
  },
  "DCY": {
    "id": "dinastycoin",
    "name": "Dinastycoin",
    "symbol": "DCY",
    "color": "rgb(251,200,73)"
  },
  "SUPER": {
    "id": "supercoin",
    "name": "SuperCoin",
    "symbol": "SUPER",
    "color": "rgb(254,251,251)"
  },
  "GLC": {
    "id": "globalcoin",
    "name": "GlobalCoin",
    "symbol": "GLC",
    "color": "rgb(255,255,128)"
  },
  "FUNK": {
    "id": "the-cypherfunks",
    "name": "The Cypherfunks",
    "symbol": "FUNK",
    "color": "rgb(0,0,0)"
  },
  "SHDW": {
    "id": "shadow-token",
    "name": "Shadow Token",
    "symbol": "SHDW",
    "color": "rgb(35,31,32)"
  },
  "KOBO": {
    "id": "kobocoin",
    "name": "Kobocoin",
    "symbol": "KOBO",
    "color": "rgb(130,193,75)"
  },
  "SHORTY": {
    "id": "shorty",
    "name": "Shorty",
    "symbol": "SHORTY",
    "color": "rgb(29,190,144)"
  },
  "ORB": {
    "id": "orbitcoin",
    "name": "Orbitcoin",
    "symbol": "ORB",
    "color": "rgb(0,0,0)"
  },
  "TES": {
    "id": "teslacoin",
    "name": "TeslaCoin",
    "symbol": "TES",
    "color": "rgb(255,153,0)"
  },
  "RAREPEPEP": {
    "id": "rare-pepe-party",
    "name": "Rare Pepe Party",
    "symbol": "RAREPEPEP",
    "color": "rgb(5,45,157)"
  },
  "BTSR": {
    "id": "btsr",
    "name": "BTSR",
    "symbol": "BTSR",
    "color": "rgb(254,255,255)"
  },
  "DSH": {
    "id": "dashcoin",
    "name": "Dashcoin",
    "symbol": "DSH",
    "color": "rgb(71,101,160)"
  },
  "TALK": {
    "id": "btctalkcoin",
    "name": "BTCtalkcoin",
    "symbol": "TALK",
    "color": "rgb(181,185,188)"
  },
  "CNO": {
    "id": "coin",
    "name": "Coin(O)",
    "symbol": "CNO",
    "color": "rgb(128,128,128)"
  },
  "UTC": {
    "id": "ultracoin",
    "name": "UltraCoin",
    "symbol": "UTC",
    "color": "rgb(48,138,17)"
  },
  "FC2": {
    "id": "fuelcoin",
    "name": "FuelCoin",
    "symbol": "FC2",
    "color": "rgb(67,63,64)"
  },
  "COE": {
    "id": "coeval",
    "name": "CoEval",
    "symbol": "COE",
    "color": "rgb(43,70,86)"
  },
  "VUC": {
    "id": "virta-unique-coin",
    "name": "Virta Unique Coin",
    "symbol": "VUC",
    "color": "rgb(147,216,246)"
  },
  "RC": {
    "id": "russiacoin",
    "name": "RussiaCoin",
    "symbol": "RC",
    "color": "rgb(0,0,0)"
  },
  "TROLL": {
    "id": "trollcoin",
    "name": "Trollcoin",
    "symbol": "TROLL",
    "color": "rgb(255,170,85)"
  },
  "I0C": {
    "id": "i0coin",
    "name": "I0Coin",
    "symbol": "I0C",
    "color": "rgb(209,181,8)"
  },
  "MZC": {
    "id": "mazacoin",
    "name": "MazaCoin",
    "symbol": "MZC",
    "color": "rgb(4,2,5)"
  },
  "GAIA": {
    "id": "gaia",
    "name": "GAIA",
    "symbol": "GAIA",
    "color": "rgb(237,236,255)"
  },
  "PIGGY": {
    "id": "piggycoin",
    "name": "Piggycoin",
    "symbol": "PIGGY",
    "color": "rgb(255,85,85)"
  },
  "VLT": {
    "id": "veltor",
    "name": "Veltor",
    "symbol": "VLT",
    "color": "rgb(1,1,1)"
  },
  "020": {
    "id": "o2olondoncoin",
    "name": "020LondonCoin",
    "symbol": "020",
    "color": "rgb(0,0,0)"
  },
  "AMBER": {
    "id": "ambercoin",
    "name": "AmberCoin",
    "symbol": "AMBER",
    "color": "rgb(255,255,0)"
  },
  "STS": {
    "id": "stress",
    "name": "Stress",
    "symbol": "STS",
    "color": "rgb(0,255,255)"
  },
  "ANC": {
    "id": "anoncoin",
    "name": "Anoncoin",
    "symbol": "ANC",
    "color": "rgb(0,0,0)"
  },
  "CCN": {
    "id": "cannacoin",
    "name": "Cannacoin",
    "symbol": "CCN",
    "color": "rgb(85,85,85)"
  },
  "UFO": {
    "id": "ufo-coin",
    "name": "UFO Coin",
    "symbol": "UFO",
    "color": "rgb(21,90,184)"
  },
  "GOOD": {
    "id": "goodomy",
    "name": "Goodomy",
    "symbol": "GOOD",
    "color": "rgb(253,103,33)"
  },
  "PAK": {
    "id": "pakcoin",
    "name": "Pakcoin",
    "symbol": "PAK",
    "color": "rgb(0,0,0)"
  },
  "MALC": {
    "id": "malcoin",
    "name": "Malcoin",
    "symbol": "MALC",
    "color": "rgb(0,0,0)"
  },
  "CFT": {
    "id": "cryptoforecast",
    "name": "CryptoForecast",
    "symbol": "CFT",
    "color": "rgb(29,174,236)"
  },
  "REE": {
    "id": "reecoin",
    "name": "ReeCoin",
    "symbol": "REE",
    "color": "rgb(18,120,185)"
  },
  "E4ROW": {
    "id": "ether-for-the-rest-of-the-world",
    "name": "E4ROW",
    "symbol": "E4ROW",
    "color": "rgb(0,0,0)"
  },
  "BRIT": {
    "id": "britcoin",
    "name": "BritCoin",
    "symbol": "BRIT",
    "color": "rgb(187,66,63)"
  },
  "TRK": {
    "id": "truckcoin",
    "name": "Truckcoin",
    "symbol": "TRK",
    "color": "rgb(85,85,85)"
  },
  "FLY": {
    "id": "flycoin",
    "name": "Flycoin",
    "symbol": "FLY",
    "color": "rgb(31,32,32)"
  },
  "LOT": {
    "id": "lottocoin",
    "name": "LottoCoin",
    "symbol": "LOT",
    "color": "rgb(254,254,253)"
  },
  "XJO": {
    "id": "joulecoin",
    "name": "Joulecoin",
    "symbol": "XJO",
    "color": "rgb(26,169,137)"
  },
  "SMC": {
    "id": "smartcoin",
    "name": "SmartCoin",
    "symbol": "SMC",
    "color": "rgb(19,126,217)"
  },
  "UNIC": {
    "id": "unicoin",
    "name": "UniCoin",
    "symbol": "UNIC",
    "color": "rgb(0,0,0)"
  },
  "LANA": {
    "id": "lanacoin",
    "name": "LanaCoin",
    "symbol": "LANA",
    "color": "rgb(0,0,0)"
  },
  "TIT": {
    "id": "titcoin",
    "name": "Titcoin",
    "symbol": "TIT",
    "color": "rgb(238,93,56)"
  },
  "HODL": {
    "id": "hodlcoin",
    "name": "HOdlcoin",
    "symbol": "HODL",
    "color": "rgb(0,0,0)"
  },
  "FLT": {
    "id": "fluttercoin",
    "name": "FlutterCoin",
    "symbol": "FLT",
    "color": "rgb(254,253,254)"
  },
  "BITGOLD": {
    "id": "bitgold",
    "name": "bitGold",
    "symbol": "BITGOLD",
    "color": "rgb(0,128,255)"
  },
  "TRI": {
    "id": "triangles",
    "name": "Triangles",
    "symbol": "TRI",
    "color": "rgb(223,37,26)"
  },
  "CAP": {
    "id": "bottlecaps",
    "name": "Bottlecaps",
    "symbol": "CAP",
    "color": "rgb(128,0,128)"
  },
  "BOST": {
    "id": "boostcoin",
    "name": "BoostCoin",
    "symbol": "BOST",
    "color": "rgb(0,0,0)"
  },
  "VIDZ": {
    "id": "purevidz",
    "name": "PureVidz",
    "symbol": "VIDZ",
    "color": "rgb(128,128,128)"
  },
  "SLM": {
    "id": "slimcoin",
    "name": "Slimcoin",
    "symbol": "SLM",
    "color": "rgb(254,199,47)"
  },
  "MTM": {
    "id": "mtmgaming",
    "name": "MTMGaming",
    "symbol": "MTM",
    "color": "rgb(44,152,240)"
  },
  "XPTX": {
    "id": "platinumbar",
    "name": "PlatinumBAR",
    "symbol": "XPTX",
    "color": "rgb(255,0,0)"
  },
  "XRA": {
    "id": "ratecoin",
    "name": "Ratecoin",
    "symbol": "XRA",
    "color": "rgb(255,255,0)"
  },
  "EMD": {
    "id": "emerald",
    "name": "Emerald Crypto",
    "symbol": "EMD",
    "color": "rgb(2,31,15)"
  },
  "JET": {
    "id": "jetcoin",
    "name": "Jetcoin",
    "symbol": "JET",
    "color": "rgb(128,128,0)"
  },
  "VAL": {
    "id": "valorbit",
    "name": "Valorbit",
    "symbol": "VAL",
    "color": "rgb(0,0,85)"
  },
  "BTWTY": {
    "id": "bit20",
    "name": "Bit20",
    "symbol": "BTWTY",
    "color": "rgb(33,33,33)"
  },
  "XPY": {
    "id": "paycoin2",
    "name": "PayCoin",
    "symbol": "XPY",
    "color": "rgb(20,139,163)"
  },
  "Q2C": {
    "id": "qubitcoin",
    "name": "QubitCoin",
    "symbol": "Q2C",
    "color": "rgb(241,126,54)"
  },
  "UNI": {
    "id": "universe",
    "name": "Universe",
    "symbol": "UNI",
    "color": "rgb(28,143,224)"
  },
  "JIN": {
    "id": "jin-coin",
    "name": "Jin Coin",
    "symbol": "JIN",
    "color": "rgb(255,128,0)"
  },
  "AU": {
    "id": "aurumcoin",
    "name": "AurumCoin",
    "symbol": "AU",
    "color": "rgb(85,51,15)"
  },
  "PR": {
    "id": "prototanium",
    "name": "Prototanium",
    "symbol": "PR",
    "color": "rgb(118,41,184)"
  },
  "PSB": {
    "id": "pesobit",
    "name": "Pesobit",
    "symbol": "PSB",
    "color": "rgb(64,128,128)"
  },
  "EUC": {
    "id": "eurocoin",
    "name": "Eurocoin",
    "symbol": "EUC",
    "color": "rgb(232,98,35)"
  },
  "CON": {
    "id": "paycon",
    "name": "PayCon",
    "symbol": "CON",
    "color": "rgb(85,85,85)"
  },
  "CHESS": {
    "id": "chesscoin",
    "name": "ChessCoin",
    "symbol": "CHESS",
    "color": "rgb(0,0,0)"
  },
  "KIC": {
    "id": "kibicoin",
    "name": "KibiCoin",
    "symbol": "KIC",
    "color": "rgb(228,93,28)"
  },
  "CYP": {
    "id": "cypher",
    "name": "Cypher",
    "symbol": "CYP",
    "color": "rgb(51,51,51)"
  },
  "YAC": {
    "id": "yacoin",
    "name": "Yacoin",
    "symbol": "YAC",
    "color": "rgb(128,128,128)"
  },
  "DUO": {
    "id": "parallelcoin",
    "name": "ParallelCoin",
    "symbol": "DUO",
    "color": "rgb(50,50,50)"
  },
  "BXT": {
    "id": "bittokens",
    "name": "BitTokens",
    "symbol": "BXT",
    "color": "rgb(14,13,15)"
  },
  "WAY": {
    "id": "wayguide",
    "name": "WayGuide",
    "symbol": "WAY",
    "color": "rgb(255,170,85)"
  },
  "BTCS": {
    "id": "bitcoin-scrypt",
    "name": "Bitcoin Scrypt",
    "symbol": "BTCS",
    "color": "rgb(0,0,0)"
  },
  "BSTY": {
    "id": "globalboost-y",
    "name": "GlobalBoost-Y",
    "symbol": "BSTY",
    "color": "rgb(85,85,85)"
  },
  "ACOIN": {
    "id": "acoin",
    "name": "Acoin",
    "symbol": "ACOIN",
    "color": "rgb(0,0,0)"
  },
  "SWING": {
    "id": "swing",
    "name": "Swing",
    "symbol": "SWING",
    "color": "rgb(255,0,0)"
  },
  "OHM": {
    "id": "ohm-wallet",
    "name": "OHM",
    "symbol": "OHM",
    "color": "rgb(0,0,0)"
  },
  "TGC": {
    "id": "tigercoin",
    "name": "Tigercoin",
    "symbol": "TGC",
    "color": "rgb(255,128,128)"
  },
  "HKG": {
    "id": "hacker-gold",
    "name": "Hacker Gold",
    "symbol": "HKG",
    "color": "rgb(51,51,51)"
  },
  "FRC": {
    "id": "freicoin",
    "name": "Freicoin",
    "symbol": "FRC",
    "color": "rgb(128,128,128)"
  },
  "BLC": {
    "id": "blakecoin",
    "name": "Blakecoin",
    "symbol": "BLC",
    "color": "rgb(255,0,0)"
  },
  "XPD": {
    "id": "petrodollar",
    "name": "PetroDollar",
    "symbol": "XPD",
    "color": "rgb(128,128,128)"
  },
  "SPEX": {
    "id": "sproutsextreme",
    "name": "SproutsExtreme",
    "symbol": "SPEX",
    "color": "rgb(169,199,69)"
  },
  "XGR": {
    "id": "goldreserve",
    "name": "GoldReserve",
    "symbol": "XGR",
    "color": "rgb(0,0,0)"
  },
  "BBP": {
    "id": "biblepay",
    "name": "BiblePay",
    "symbol": "BBP",
    "color": "rgb(101,3,52)"
  },
  "KUSH": {
    "id": "kushcoin",
    "name": "KushCoin",
    "symbol": "KUSH",
    "color": "rgb(128,128,128)"
  },
  "HMP": {
    "id": "hempcoin-hmp",
    "name": "HempCoin",
    "symbol": "HMP",
    "color": "rgb(0,0,0)"
  },
  "BUCKS": {
    "id": "swagbucks",
    "name": "SwagBucks",
    "symbol": "BUCKS",
    "color": "rgb(0,0,0)"
  },
  "BTCR": {
    "id": "bitcurrency",
    "name": "Bitcurrency",
    "symbol": "BTCR",
    "color": "rgb(89,89,89)"
  },
  "CACH": {
    "id": "cachecoin",
    "name": "CacheCoin",
    "symbol": "CACH",
    "color": "rgb(58,58,59)"
  },
  "ELE": {
    "id": "elementrem",
    "name": "Elementrem",
    "symbol": "ELE",
    "color": "rgb(128,128,128)"
  },
  "C2": {
    "id": "coin2-1",
    "name": "Coin2.1",
    "symbol": "C2",
    "color": "rgb(170,170,170)"
  },
  "NYAN": {
    "id": "nyancoin",
    "name": "Nyancoin",
    "symbol": "NYAN",
    "color": "rgb(0,0,0)"
  },
  "SAC": {
    "id": "sacoin",
    "name": "SACoin",
    "symbol": "SAC",
    "color": "rgb(1,19,73)"
  },
  "PX": {
    "id": "px",
    "name": "PX",
    "symbol": "PX",
    "color": "rgb(10,103,58)"
  },
  "TTC": {
    "id": "tittiecoin",
    "name": "TittieCoin",
    "symbol": "TTC",
    "color": "rgb(128,128,0)"
  },
  "KED": {
    "id": "darsek",
    "name": "Darsek",
    "symbol": "KED",
    "color": "rgb(58,58,64)"
  },
  "UNITS": {
    "id": "gameunits",
    "name": "GameUnits",
    "symbol": "UNITS",
    "color": "rgb(100,69,162)"
  },
  "DGC": {
    "id": "digitalcoin",
    "name": "Digitalcoin",
    "symbol": "DGC",
    "color": "rgb(193,193,193)"
  },
  "CUBE": {
    "id": "digicube",
    "name": "DigiCube",
    "symbol": "CUBE",
    "color": "rgb(60,153,217)"
  },
  "QCN": {
    "id": "quazarcoin",
    "name": "QuazarCoin",
    "symbol": "QCN",
    "color": "rgb(4,5,4)"
  },
  "VEC2": {
    "id": "vector",
    "name": "Vector",
    "symbol": "VEC2",
    "color": "rgb(0,0,0)"
  },
  "GRT": {
    "id": "grantcoin",
    "name": "Grantcoin",
    "symbol": "GRT",
    "color": "rgb(170,170,170)"
  },
  "BERN": {
    "id": "berncash",
    "name": "BERNcash",
    "symbol": "BERN",
    "color": "rgb(0,0,0)"
  },
  "SLG": {
    "id": "sterlingcoin",
    "name": "Sterlingcoin",
    "symbol": "SLG",
    "color": "rgb(91,104,117)"
  },
  "J": {
    "id": "joincoin",
    "name": "Joincoin",
    "symbol": "J",
    "color": "rgb(0,0,0)"
  },
  "BOLI": {
    "id": "bolivarcoin",
    "name": "Bolivarcoin",
    "symbol": "BOLI",
    "color": "rgb(6,23,178)"
  },
  "MILO": {
    "id": "milocoin",
    "name": "MiloCoin",
    "symbol": "MILO",
    "color": "rgb(255,255,128)"
  },
  "XRE": {
    "id": "revolvercoin",
    "name": "RevolverCoin",
    "symbol": "XRE",
    "color": "rgb(255,128,128)"
  },
  "XBTC21": {
    "id": "bitcoin-21",
    "name": "Bitcoin 21",
    "symbol": "XBTC21",
    "color": "rgb(0,0,0)"
  },
  "HONEY": {
    "id": "honey",
    "name": "Honey",
    "symbol": "HONEY",
    "color": "rgb(254,210,125)"
  },
  "PXI": {
    "id": "prime-xi",
    "name": "Prime-XI",
    "symbol": "PXI",
    "color": "rgb(0,0,0)"
  },
  "BIGUP": {
    "id": "bigup",
    "name": "BigUp",
    "symbol": "BIGUP",
    "color": "rgb(43,43,43)"
  },
  "PUTIC": {
    "id": "putin-classic",
    "name": "Putin Classic",
    "symbol": "PUTIC",
    "color": "rgb(83,83,83)"
  },
  "ICOB": {
    "id": "icobid",
    "name": "ICOBID",
    "symbol": "ICOB",
    "color": "rgb(255,170,85)"
  },
  "MAD": {
    "id": "satoshimadness",
    "name": "SatoshiMadness",
    "symbol": "MAD",
    "color": "rgb(253,254,254)"
  },
  "EVIL": {
    "id": "evil-coin",
    "name": "Evil Coin",
    "symbol": "EVIL",
    "color": "rgb(0,0,0)"
  },
  "UNIBURST": {
    "id": "uniburst",
    "name": "UniBURST",
    "symbol": "UNIBURST",
    "color": "rgb(0,0,0)"
  },
  "GUN": {
    "id": "guncoin",
    "name": "Guncoin",
    "symbol": "GUN",
    "color": "rgb(191,128,64)"
  },
  "SPACE": {
    "id": "spacecoin",
    "name": "SpaceCoin",
    "symbol": "SPACE",
    "color": "rgb(255,255,0)"
  },
  "ARCO": {
    "id": "aquariuscoin",
    "name": "AquariusCoin",
    "symbol": "ARCO",
    "color": "rgb(0,0,0)"
  },
  "SOIL": {
    "id": "soilcoin",
    "name": "SOILcoin",
    "symbol": "SOIL",
    "color": "rgb(45,19,1)"
  },
  "RBT": {
    "id": "rimbit",
    "name": "Rimbit",
    "symbol": "RBT",
    "color": "rgb(13,73,130)"
  },
  "DLC": {
    "id": "dollarcoin",
    "name": "Dollarcoin",
    "symbol": "DLC",
    "color": "rgb(85,85,0)"
  },
  "SCRT": {
    "id": "secretcoin",
    "name": "SecretCoin",
    "symbol": "SCRT",
    "color": "rgb(0,0,0)"
  },
  "RUP": {
    "id": "rupee",
    "name": "Rupee",
    "symbol": "RUP",
    "color": "rgb(29,56,100)"
  },
  "FRK": {
    "id": "franko",
    "name": "Franko",
    "symbol": "FRK",
    "color": "rgb(254,255,255)"
  },
  "SLING": {
    "id": "sling",
    "name": "Sling",
    "symbol": "SLING",
    "color": "rgb(0,255,255)"
  },
  "DRM": {
    "id": "dreamcoin",
    "name": "Dreamcoin",
    "symbol": "DRM",
    "color": "rgb(128,128,128)"
  },
  "RED": {
    "id": "redcoin",
    "name": "RedCoin",
    "symbol": "RED",
    "color": "rgb(252,0,0)"
  },
  "ARI": {
    "id": "aricoin",
    "name": "Aricoin",
    "symbol": "ARI",
    "color": "rgb(25,156,220)"
  },
  "MAR": {
    "id": "marijuanacoin",
    "name": "Marijuanacoin",
    "symbol": "MAR",
    "color": "rgb(35,38,41)"
  },
  "RUPX": {
    "id": "rupaya",
    "name": "Rupaya",
    "symbol": "RUPX",
    "color": "rgb(65,93,52)"
  },
  "URC": {
    "id": "unrealcoin",
    "name": "Unrealcoin",
    "symbol": "URC",
    "color": "rgb(76,77,82)"
  },
  "KURT": {
    "id": "kurrent",
    "name": "Kurrent",
    "symbol": "KURT",
    "color": "rgb(0,0,0)"
  },
  "QTL": {
    "id": "quatloo",
    "name": "Quatloo",
    "symbol": "QTL",
    "color": "rgb(0,0,0)"
  },
  "MAY": {
    "id": "theresa-may-coin",
    "name": "Theresa May Coin",
    "symbol": "MAY",
    "color": "rgb(0,0,0)"
  },
  "MEOW": {
    "id": "kittehcoin",
    "name": "Kittehcoin",
    "symbol": "MEOW",
    "color": "rgb(213,138,58)"
  },
  "IMS": {
    "id": "independent-money-system",
    "name": "Independent Money System",
    "symbol": "IMS",
    "color": "rgb(0,0,0)"
  },
  "BUMBA": {
    "id": "bumbacoin",
    "name": "BumbaCoin",
    "symbol": "BUMBA",
    "color": "rgb(0,0,0)"
  },
  "GTC": {
    "id": "global-tour-coin",
    "name": "Global Tour Coin",
    "symbol": "GTC",
    "color": "rgb(254,212,69)"
  },
  "U": {
    "id": "ucoin",
    "name": "UCoin",
    "symbol": "U",
    "color": "rgb(0,0,0)"
  },
  "SPT": {
    "id": "spots",
    "name": "Spots",
    "symbol": "SPT",
    "color": "rgb(128,128,128)"
  },
  "SOJ": {
    "id": "sojourn",
    "name": "Sojourn",
    "symbol": "SOJ",
    "color": "rgb(87,115,233)"
  },
  "DIBC": {
    "id": "dibcoin",
    "name": "DIBCOIN",
    "symbol": "DIBC",
    "color": "rgb(203,173,107)"
  },
  "PHS": {
    "id": "philosopher-stones",
    "name": "Philosopher Stones",
    "symbol": "PHS",
    "color": "rgb(253,253,254)"
  },
  "BIP": {
    "id": "bipcoin",
    "name": "BipCoin",
    "symbol": "BIP",
    "color": "rgb(0,0,0)"
  },
  "LTB": {
    "id": "litebar",
    "name": "LiteBar",
    "symbol": "LTB",
    "color": "rgb(0,0,0)"
  },
  "$$$": {
    "id": "money",
    "name": "Money",
    "symbol": "$$$",
    "color": "rgb(128,128,128)"
  },
  "ASAFE2": {
    "id": "allsafe",
    "name": "AllSafe",
    "symbol": "ASAFE2",
    "color": "rgb(253,254,254)"
  },
  "XCO": {
    "id": "x-coin",
    "name": "X-Coin",
    "symbol": "XCO",
    "color": "rgb(0,0,0)"
  },
  "CXT": {
    "id": "coinonat",
    "name": "Coinonat",
    "symbol": "CXT",
    "color": "rgb(0,0,0)"
  },
  "CRX": {
    "id": "chronos",
    "name": "Chronos",
    "symbol": "CRX",
    "color": "rgb(0,128,128)"
  },
  "ANTI": {
    "id": "antibitcoin",
    "name": "AntiBitcoin",
    "symbol": "ANTI",
    "color": "rgb(0,0,0)"
  },
  "GPL": {
    "id": "gold-pressed-latinum",
    "name": "Gold Pressed Latinum",
    "symbol": "GPL",
    "color": "rgb(252,253,253)"
  },
  "TSE": {
    "id": "tattoocoin",
    "name": "Tattoocoin (Standard Edition)",
    "symbol": "TSE",
    "color": "rgb(0,0,0)"
  },
  "BCF": {
    "id": "bitcoinfast",
    "name": "BitcoinFast",
    "symbol": "BCF",
    "color": "rgb(0,0,0)"
  },
  "VIP": {
    "id": "vip-tokens",
    "name": "VIP Tokens",
    "symbol": "VIP",
    "color": "rgb(128,128,128)"
  },
  "EVO": {
    "id": "evotion",
    "name": "Evotion",
    "symbol": "EVO",
    "color": "rgb(205,214,63)"
  },
  "DBTC": {
    "id": "debitcoin",
    "name": "Debitcoin",
    "symbol": "DBTC",
    "color": "rgb(0,0,0)"
  },
  "MARS": {
    "id": "marscoin",
    "name": "Marscoin",
    "symbol": "MARS",
    "color": "rgb(0,0,0)"
  },
  "ADCN": {
    "id": "asiadigicoin",
    "name": "Asiadigicoin",
    "symbol": "ADCN",
    "color": "rgb(255,255,0)"
  },
  "CPN": {
    "id": "compucoin",
    "name": "CompuCoin",
    "symbol": "CPN",
    "color": "rgb(0,0,0)"
  },
  "CTO": {
    "id": "crypto",
    "name": "Crypto",
    "symbol": "CTO",
    "color": "rgb(0,0,255)"
  },
  "ALL": {
    "id": "allion",
    "name": "Allion",
    "symbol": "ALL",
    "color": "rgb(0,0,0)"
  },
  "ARG": {
    "id": "argentum",
    "name": "Argentum",
    "symbol": "ARG",
    "color": "rgb(247,245,245)"
  },
  "HAL": {
    "id": "halcyon",
    "name": "Halcyon",
    "symbol": "HAL",
    "color": "rgb(0,0,0)"
  },
  "BSTAR": {
    "id": "blackstar",
    "name": "Blackstar",
    "symbol": "BSTAR",
    "color": "rgb(48,190,253)"
  },
  "AGLC": {
    "id": "agrolifecoin",
    "name": "AgrolifeCoin",
    "symbol": "AGLC",
    "color": "rgb(255,255,0)"
  },
  "UET": {
    "id": "useless-ethereum-token",
    "name": "Useless Ethereum Token",
    "symbol": "UET",
    "color": "rgb(40,137,137)"
  },
  "GAP": {
    "id": "gapcoin",
    "name": "Gapcoin",
    "symbol": "GAP",
    "color": "rgb(0,0,0)"
  },
  "BLRY": {
    "id": "billarycoin",
    "name": "BillaryCoin",
    "symbol": "BLRY",
    "color": "rgb(0,0,0)"
  },
  "PONZI": {
    "id": "ponzicoin",
    "name": "PonziCoin",
    "symbol": "PONZI",
    "color": "rgb(197,223,246)"
  },
  "FIRE": {
    "id": "firecoin",
    "name": "Firecoin",
    "symbol": "FIRE",
    "color": "rgb(255,0,0)"
  },
  "NEVA": {
    "id": "nevacoin",
    "name": "NevaCoin",
    "symbol": "NEVA",
    "color": "rgb(0,127,14)"
  },
  "WMC": {
    "id": "wmcoin",
    "name": "WMCoin",
    "symbol": "WMC",
    "color": "rgb(0,0,0)"
  },
  "WYV": {
    "id": "wyvern",
    "name": "Wyvern",
    "symbol": "WYV",
    "color": "rgb(0,0,0)"
  },
  "ARB": {
    "id": "arbit",
    "name": "ARbit",
    "symbol": "ARB",
    "color": "rgb(44,44,44)"
  },
  "DES": {
    "id": "destiny",
    "name": "Destiny",
    "symbol": "DES",
    "color": "rgb(0,0,0)"
  },
  "BTPL": {
    "id": "bitcoin-planet",
    "name": "Bitcoin Planet",
    "symbol": "BTPL",
    "color": "rgb(85,170,85)"
  },
  "WORM": {
    "id": "healthywormcoin",
    "name": "HealthyWormCoin",
    "symbol": "WORM",
    "color": "rgb(205,234,207)"
  },
  "UNIT": {
    "id": "universal-currency",
    "name": "Universal Currency",
    "symbol": "UNIT",
    "color": "rgb(54,54,54)"
  },
  "GBC": {
    "id": "gbcgoldcoin",
    "name": "GBCGoldCoin",
    "symbol": "GBC",
    "color": "rgb(255,0,0)"
  },
  "ISL": {
    "id": "islacoin",
    "name": "IslaCoin",
    "symbol": "ISL",
    "color": "rgb(37,159,243)"
  },
  "DRS": {
    "id": "digital-rupees",
    "name": "Digital Rupees",
    "symbol": "DRS",
    "color": "rgb(0,0,0)"
  },
  "BVC": {
    "id": "beavercoin",
    "name": "BeaverCoin",
    "symbol": "BVC",
    "color": "rgb(0,0,0)"
  },
  "URO": {
    "id": "uro",
    "name": "Uro",
    "symbol": "URO",
    "color": "rgb(251,253,253)"
  },
  "BIOS": {
    "id": "bios-crypto",
    "name": "BiosCrypto",
    "symbol": "BIOS",
    "color": "rgb(255,254,253)"
  },
  "RPC": {
    "id": "ronpaulcoin",
    "name": "RonPaulCoin",
    "symbol": "RPC",
    "color": "rgb(0,0,0)"
  },
  "SOON": {
    "id": "sooncoin",
    "name": "SoonCoin",
    "symbol": "SOON",
    "color": "rgb(0,0,0)"
  },
  "MI": {
    "id": "xiaomicoin",
    "name": "Xiaomicoin",
    "symbol": "MI",
    "color": "rgb(71,71,71)"
  },
  "TSTR": {
    "id": "tristar-coin",
    "name": "Tristar Coin",
    "symbol": "TSTR",
    "color": "rgb(254,185,55)"
  },
  "HXX": {
    "id": "hexx",
    "name": "Hexx",
    "symbol": "HXX",
    "color": "rgb(128,255,255)"
  },
  "STEPS": {
    "id": "steps",
    "name": "Steps",
    "symbol": "STEPS",
    "color": "rgb(0,85,170)"
  },
  "LEA": {
    "id": "leacoin",
    "name": "LeaCoin",
    "symbol": "LEA",
    "color": "rgb(0,0,0)"
  },
  "PULSE": {
    "id": "pulse",
    "name": "Pulse",
    "symbol": "PULSE",
    "color": "rgb(42,42,42)"
  },
  "G3N": {
    "id": "genstake",
    "name": "G3N",
    "symbol": "G3N",
    "color": "rgb(0,128,128)"
  },
  "CESC": {
    "id": "cryptoescudo",
    "name": "CryptoEscudo",
    "symbol": "CESC",
    "color": "rgb(128,128,128)"
  },
  "JWL": {
    "id": "jewels",
    "name": "Jewels",
    "symbol": "JWL",
    "color": "rgb(253,253,253)"
  },
  "BNX": {
    "id": "bnrtxcoin",
    "name": "BnrtxCoin",
    "symbol": "BNX",
    "color": "rgb(0,0,0)"
  },
  "MST": {
    "id": "mustangcoin",
    "name": "MustangCoin",
    "symbol": "MST",
    "color": "rgb(0,0,0)"
  },
  "ZYD": {
    "id": "zayedcoin",
    "name": "Zayedcoin",
    "symbol": "ZYD",
    "color": "rgb(85,85,85)"
  },
  "SRC": {
    "id": "securecoin",
    "name": "SecureCoin",
    "symbol": "SRC",
    "color": "rgb(20,74,50)"
  },
  "XBTS": {
    "id": "beatcoin",
    "name": "Beatcoin",
    "symbol": "XBTS",
    "color": "rgb(0,0,0)"
  },
  "XCRE": {
    "id": "creatio",
    "name": "Creatio",
    "symbol": "XCRE",
    "color": "rgb(26,165,182)"
  },
  "POP": {
    "id": "popularcoin",
    "name": "PopularCoin",
    "symbol": "POP",
    "color": "rgb(255,255,170)"
  },
  "GP": {
    "id": "goldpay-coin",
    "name": "Goldpay Coin",
    "symbol": "GP",
    "color": "rgb(245,189,32)"
  },
  "QBK": {
    "id": "qibuck-asset",
    "name": "Qibuck Asset",
    "symbol": "QBK",
    "color": "rgb(235,235,235)"
  },
  "VPRC": {
    "id": "vaperscoin",
    "name": "VapersCoin",
    "symbol": "VPRC",
    "color": "rgb(238,240,243)"
  },
  "TAGR": {
    "id": "tagrcoin",
    "name": "TAGRcoin",
    "symbol": "TAGR",
    "color": "rgb(255,0,0)"
  },
  "MTLMC3": {
    "id": "metal-music-coin",
    "name": "Metal Music Coin",
    "symbol": "MTLMC3",
    "color": "rgb(102,102,102)"
  },
  "VTA": {
    "id": "virtacoin",
    "name": "Virtacoin",
    "symbol": "VTA",
    "color": "rgb(153,153,153)"
  },
  "WARP": {
    "id": "warp",
    "name": "WARP",
    "symbol": "WARP",
    "color": "rgb(97,111,164)"
  },
  "GBT": {
    "id": "gamebet-coin",
    "name": "GameBet Coin",
    "symbol": "GBT",
    "color": "rgb(170,85,85)"
  },
  "DIX": {
    "id": "dix-asset",
    "name": "Dix Asset",
    "symbol": "DIX",
    "color": "rgb(128,128,128)"
  },
  "OFF": {
    "id": "cthulhu-offerings",
    "name": "Cthulhu Offerings",
    "symbol": "OFF",
    "color": "rgb(0,0,0)"
  },
  "ATX": {
    "id": "artex-coin",
    "name": "Artex Coin",
    "symbol": "ATX",
    "color": "rgb(255,255,128)"
  },
  "RIDE": {
    "id": "ride-my-car",
    "name": "Ride My Car",
    "symbol": "RIDE",
    "color": "rgb(255,254,254)"
  },
  "CAB": {
    "id": "cabbage",
    "name": "Cabbage",
    "symbol": "CAB",
    "color": "rgb(170,170,170)"
  },
  "BENJI": {
    "id": "benjirolls",
    "name": "BenjiRolls",
    "symbol": "BENJI",
    "color": "rgb(94,94,80)"
  },
  "TOR": {
    "id": "torcoin-tor",
    "name": "Torcoin",
    "symbol": "TOR",
    "color": "rgb(253,235,123)"
  },
  "GLT": {
    "id": "globaltoken",
    "name": "GlobalToken",
    "symbol": "GLT",
    "color": "rgb(151,88,64)"
  },
  "IBANK": {
    "id": "ibank",
    "name": "iBank",
    "symbol": "IBANK",
    "color": "rgb(255,255,242)"
  },
  "DPAY": {
    "id": "dpay",
    "name": "DPAY",
    "symbol": "DPAY",
    "color": "rgb(249,58,70)"
  },
  "SOCC": {
    "id": "socialcoin-socc",
    "name": "SocialCoin",
    "symbol": "SOCC",
    "color": "rgb(253,254,253)"
  },
  "BQC": {
    "id": "bbqcoin",
    "name": "BBQCoin",
    "symbol": "BQC",
    "color": "rgb(0,0,0)"
  },
  "SONG": {
    "id": "songcoin",
    "name": "SongCoin",
    "symbol": "SONG",
    "color": "rgb(255,255,0)"
  },
  "ORLY": {
    "id": "orlycoin",
    "name": "Orlycoin",
    "symbol": "ORLY",
    "color": "rgb(0,0,0)"
  },
  "KNC": {
    "id": "kingn-coin",
    "name": "KingN Coin",
    "symbol": "KNC",
    "color": "rgb(182,169,81)"
  },
  "DLISK": {
    "id": "dappster",
    "name": "DAPPSTER",
    "symbol": "DLISK",
    "color": "rgb(0,255,255)"
  },
  "BTQ": {
    "id": "bitquark",
    "name": "BitQuark",
    "symbol": "BTQ",
    "color": "rgb(0,0,0)"
  },
  "HVCO": {
    "id": "high-voltage",
    "name": "High Voltage",
    "symbol": "HVCO",
    "color": "rgb(0,0,0)"
  },
  "ZMC": {
    "id": "zetamicron",
    "name": "ZetaMicron",
    "symbol": "ZMC",
    "color": "rgb(244,243,236)"
  },
  "TRADE2": {
    "id": "tradecoin-v2",
    "name": "TradecoinV2",
    "symbol": "TRADE2",
    "color": "rgb(0,0,8)"
  },
  "FLVR": {
    "id": "flavorcoin",
    "name": "FlavorCoin",
    "symbol": "FLVR",
    "color": "rgb(0,0,0)"
  },
  "PRX": {
    "id": "printerium",
    "name": "Printerium",
    "symbol": "PRX",
    "color": "rgb(85,85,85)"
  },
  "ACP": {
    "id": "anarchistsprime",
    "name": "AnarchistsPrime",
    "symbol": "ACP",
    "color": "rgb(0,0,0)"
  },
  "BLZ": {
    "id": "blazecoin",
    "name": "BlazeCoin",
    "symbol": "BLZ",
    "color": "rgb(255,85,85)"
  },
  "NRO": {
    "id": "neuro",
    "name": "Neuro",
    "symbol": "NRO",
    "color": "rgb(253,61,66)"
  },
  "DOLLAR": {
    "id": "dollar-online",
    "name": "Dollar Online",
    "symbol": "DOLLAR",
    "color": "rgb(172,216,61)"
  },
  "OS76": {
    "id": "osmiumcoin",
    "name": "OsmiumCoin",
    "symbol": "OS76",
    "color": "rgb(0,0,0)"
  },
  "TAJ": {
    "id": "tajcoin",
    "name": "TajCoin",
    "symbol": "TAJ",
    "color": "rgb(86,0,107)"
  },
  "CMT": {
    "id": "comet",
    "name": "Comet",
    "symbol": "CMT",
    "color": "rgb(248,186,62)"
  },
  "PEX": {
    "id": "posex",
    "name": "PosEx",
    "symbol": "PEX",
    "color": "rgb(54,50,51)"
  },
  "LIR": {
    "id": "letitride",
    "name": "LetItRide",
    "symbol": "LIR",
    "color": "rgb(94,60,53)"
  },
  "BIOB": {
    "id": "biobar",
    "name": "BioBar",
    "symbol": "BIOB",
    "color": "rgb(0,0,0)"
  },
  "KRONE": {
    "id": "kronecoin",
    "name": "Kronecoin",
    "symbol": "KRONE",
    "color": "rgb(211,232,215)"
  },
  "VLTC": {
    "id": "vault-coin",
    "name": "Vault Coin",
    "symbol": "VLTC",
    "color": "rgb(0,0,0)"
  },
  "COAL": {
    "id": "bitcoal",
    "name": "BitCoal",
    "symbol": "COAL",
    "color": "rgb(175,175,175)"
  },
  "AMMO": {
    "id": "ammo-rewards",
    "name": "Ammo Rewards",
    "symbol": "AMMO",
    "color": "rgb(0,0,0)"
  },
  "CCM100": {
    "id": "ccminer",
    "name": "CCMiner",
    "symbol": "CCM100",
    "color": "rgb(0,0,0)"
  },
  "LUNA": {
    "id": "luna-coin",
    "name": "Luna Coin",
    "symbol": "LUNA",
    "color": "rgb(228,129,36)"
  },
  "SFC": {
    "id": "solarflarecoin",
    "name": "Solarflarecoin",
    "symbol": "SFC",
    "color": "rgb(253,253,253)"
  },
  "XOC": {
    "id": "xonecoin",
    "name": "Xonecoin",
    "symbol": "XOC",
    "color": "rgb(0,0,0)"
  },
  "FUZZ": {
    "id": "fuzzballs",
    "name": "FuzzBalls",
    "symbol": "FUZZ",
    "color": "rgb(0,0,0)"
  },
  "ZNE": {
    "id": "zonecoin",
    "name": "Zonecoin",
    "symbol": "ZNE",
    "color": "rgb(83,161,213)"
  },
  "SH": {
    "id": "shilling",
    "name": "Shilling",
    "symbol": "SH",
    "color": "rgb(156,179,35)"
  },
  "LTCR": {
    "id": "litecred",
    "name": "Litecred",
    "symbol": "LTCR",
    "color": "rgb(0,0,0)"
  },
  "SANDG": {
    "id": "save-and-gain",
    "name": "Save and Gain",
    "symbol": "SANDG",
    "color": "rgb(0,255,0)"
  },
  "CRT": {
    "id": "crtcoin",
    "name": "CRTCoin",
    "symbol": "CRT",
    "color": "rgb(255,0,0)"
  },
  "IMPS": {
    "id": "impulsecoin",
    "name": "ImpulseCoin",
    "symbol": "IMPS",
    "color": "rgb(0,0,0)"
  },
  "BSC": {
    "id": "bowscoin",
    "name": "BowsCoin",
    "symbol": "BSC",
    "color": "rgb(254,224,255)"
  },
  "EGO": {
    "id": "ego",
    "name": "EGO",
    "symbol": "EGO",
    "color": "rgb(212,9,21)"
  },
  "CASH": {
    "id": "cashcoin",
    "name": "Cashcoin",
    "symbol": "CASH",
    "color": "rgb(88,88,90)"
  },
  "DRAGON": {
    "id": "btcdragon",
    "name": "BTCDragon",
    "symbol": "DRAGON",
    "color": "rgb(0,0,0)"
  },
  "WEX": {
    "id": "wexcoin",
    "name": "Wexcoin",
    "symbol": "WEX",
    "color": "rgb(255,191,128)"
  },
  "RSGP": {
    "id": "rsgpcoin",
    "name": "RSGPcoin",
    "symbol": "RSGP",
    "color": "rgb(0,0,0)"
  },
  "CTIC2": {
    "id": "coimatic-2",
    "name": "Coimatic 2.0",
    "symbol": "CTIC2",
    "color": "rgb(13,56,120)"
  },
  "CONX": {
    "id": "concoin",
    "name": "Concoin",
    "symbol": "CONX",
    "color": "rgb(35,37,36)"
  },
  "JOBS": {
    "id": "jobscoin",
    "name": "JobsCoin",
    "symbol": "JOBS",
    "color": "rgb(243,243,241)"
  },
  "LEX": {
    "id": "lex4all",
    "name": "Lex4All",
    "symbol": "LEX",
    "color": "rgb(44,152,240)"
  },
  "SLEVIN": {
    "id": "slevin",
    "name": "Slevin",
    "symbol": "SLEVIN",
    "color": "rgb(241,241,241)"
  },
  "OCEAN": {
    "id": "burstocean",
    "name": "BurstOcean",
    "symbol": "OCEAN",
    "color": "rgb(45,177,255)"
  },
  "ALTC": {
    "id": "antilitecoin",
    "name": "Antilitecoin",
    "symbol": "ALTC",
    "color": "rgb(0,0,85)"
  },
  "SDP": {
    "id": "sydpak",
    "name": "SydPak",
    "symbol": "SDP",
    "color": "rgb(254,254,253)"
  },
  "GEERT": {
    "id": "geertcoin",
    "name": "GeertCoin",
    "symbol": "GEERT",
    "color": "rgb(238,206,130)"
  },
  "VOLT": {
    "id": "bitvolt",
    "name": "Bitvolt",
    "symbol": "VOLT",
    "color": "rgb(166,168,171)"
  },
  "1CR": {
    "id": "1credit",
    "name": "1CRedit",
    "symbol": "1CR",
    "color": "rgb(254,225,51)"
  },
  "REV": {
    "id": "revenu",
    "name": "Revenu",
    "symbol": "REV",
    "color": "rgb(128,128,128)"
  },
  "SCS": {
    "id": "speedcash",
    "name": "Speedcash",
    "symbol": "SCS",
    "color": "rgb(55,59,68)"
  },
  "MNC": {
    "id": "mantracoin",
    "name": "MantraCoin",
    "symbol": "MNC",
    "color": "rgb(0,0,0)"
  },
  "XRC": {
    "id": "rawcoin2",
    "name": "Rawcoin",
    "symbol": "XRC",
    "color": "rgb(206,206,206)"
  },
  "NODC": {
    "id": "nodecoin",
    "name": "NodeCoin",
    "symbol": "NODC",
    "color": "rgb(6,63,63)"
  },
  "P7C": {
    "id": "p7coin",
    "name": "P7Coin",
    "symbol": "P7C",
    "color": "rgb(191,191,191)"
  },
  "JIO": {
    "id": "jio-token",
    "name": "JIO Token",
    "symbol": "JIO",
    "color": "rgb(53,98,120)"
  },
  "SLFI": {
    "id": "selfiecoin",
    "name": "Selfiecoin",
    "symbol": "SLFI",
    "color": "rgb(0,0,255)"
  },
  "XNG": {
    "id": "enigma",
    "name": "Enigma",
    "symbol": "XNG",
    "color": "rgb(0,0,0)"
  },
  "ABN": {
    "id": "abncoin",
    "name": "Abncoin",
    "symbol": "ABN",
    "color": "rgb(191,128,64)"
  },
  "CF": {
    "id": "californium",
    "name": "Californium",
    "symbol": "CF",
    "color": "rgb(255,170,85)"
  },
  "ELS": {
    "id": "elysium",
    "name": "Elysium",
    "symbol": "ELS",
    "color": "rgb(179,187,190)"
  },
  "MUG": {
    "id": "mikethemug",
    "name": "MikeTheMug",
    "symbol": "MUG",
    "color": "rgb(44,152,240)"
  },
  "FDC": {
    "id": "future-digital-currency",
    "name": "Future Digital Currency",
    "symbol": "FDC",
    "color": "rgb(255,255,0)"
  },
  "PWR": {
    "id": "powercoin",
    "name": "Powercoin",
    "symbol": "PWR",
    "color": "rgb(0,0,128)"
  },
  "PIZZA": {
    "id": "pizzacoin",
    "name": "PizzaCoin",
    "symbol": "PIZZA",
    "color": "rgb(0,0,0)"
  },
  "TOKEN": {
    "id": "swaptoken",
    "name": "SwapToken",
    "symbol": "TOKEN",
    "color": "rgb(37,43,46)"
  },
  "DGCS": {
    "id": "digital-credits",
    "name": "Digital Credits",
    "symbol": "DGCS",
    "color": "rgb(85,85,85)"
  },
  "DMB": {
    "id": "digital-money-bits",
    "name": "Digital Money Bits",
    "symbol": "DMB",
    "color": "rgb(24,24,24)"
  },
  "CALC": {
    "id": "caliphcoin",
    "name": "CaliphCoin",
    "symbol": "CALC",
    "color": "rgb(255,170,170)"
  },
  "FEDS": {
    "id": "fedorashare",
    "name": "FedoraShare",
    "symbol": "FEDS",
    "color": "rgb(0,0,0)"
  },
  "INF": {
    "id": "infchain",
    "name": "InfChain",
    "symbol": "INF",
    "color": "rgb(0,0,0)"
  },
  "DMC": {
    "id": "dynamiccoin",
    "name": "DynamicCoin",
    "symbol": "DMC",
    "color": "rgb(27,28,21)"
  },
  "HVN": {
    "id": "hive",
    "name": "Hive",
    "symbol": "HVN",
    "color": "rgb(254,255,255)"
  },
  "FRGC": {
    "id": "fargocoin",
    "name": "Fargocoin",
    "symbol": "FRGC",
    "color": "rgb(85,85,85)"
  },
  "MDA": {
    "id": "moeda-loyalty-points",
    "name": "Moeda Loyalty Points",
    "symbol": "MDA",
    "color": "rgb(44,164,84)"
  },
  "ABC": {
    "id": "alphabitcoinfund",
    "name": "Alphabit",
    "symbol": "ABC",
    "color": "rgb(0,255,255)"
  },
  "DRXNE": {
    "id": "droxne",
    "name": "DROXNE",
    "symbol": "DRXNE",
    "color": "rgb(40,73,96)"
  },
  "MCAP": {
    "id": "mcap",
    "name": "MCAP",
    "symbol": "MCAP",
    "color": "rgb(26,105,169)"
  },
  "CTR": {
    "id": "centra",
    "name": "Centra",
    "symbol": "CTR",
    "color": "rgb(54,54,54)"
  },
  "THS": {
    "id": "techshares",
    "name": "TechShares",
    "symbol": "THS",
    "color": "rgb(51,102,102)"
  },
  "PURA": {
    "id": "pura",
    "name": "Pura",
    "symbol": "PURA",
    "color": "rgb(0,0,0)"
  },
  "ULA": {
    "id": "ulatech",
    "name": "Ulatech",
    "symbol": "ULA",
    "color": "rgb(255,240,54)"
  },
  "AVT": {
    "id": "aventus",
    "name": "Aventus",
    "symbol": "AVT",
    "color": "rgb(0,0,0)"
  },
  "SIGMA": {
    "id": "sigmacoin",
    "name": "SIGMAcoin",
    "symbol": "SIGMA",
    "color": "rgb(0,0,0)"
  },
  "BGC": {
    "id": "bagcoin",
    "name": "BagCoin",
    "symbol": "BGC",
    "color": "rgb(253,145,43)"
  },
  "XID": {
    "id": "international-diamond",
    "name": "International Diamond",
    "symbol": "XID",
    "color": "rgb(191,191,191)"
  },
  "HLB": {
    "id": "lepaoquan",
    "name": "Lepaoquan",
    "symbol": "HLB",
    "color": "rgb(51,51,51)"
  },
  "TER": {
    "id": "terranova",
    "name": "TerraNova",
    "symbol": "TER",
    "color": "rgb(162,133,127)"
  },
  "AXF": {
    "id": "axfunds",
    "name": "AxFunds",
    "symbol": "AXF",
    "color": "rgb(59,60,62)"
  },
  "DEUS": {
    "id": "deuscoin",
    "name": "DeusCoin",
    "symbol": "DEUS",
    "color": "rgb(255,0,0)"
  },
  "TRX": {
    "id": "tronix",
    "name": "Tronix",
    "symbol": "TRX",
    "color": "rgb(34,36,35)"
  },
  "BUZZ": {
    "id": "buzzcoin",
    "name": "BuzzCoin",
    "symbol": "BUZZ",
    "color": "rgb(0,0,0)"
  },
  "FAL": {
    "id": "falcoin",
    "name": "Falcoin",
    "symbol": "FAL",
    "color": "rgb(2,2,2)"
  },
  "SJCX": {
    "id": "storjcoin-x",
    "name": "Storjcoin X",
    "symbol": "SJCX",
    "color": "rgb(47,120,190)"
  },
  "NDAO": {
    "id": "neurodao",
    "name": "NeuroDAO",
    "symbol": "NDAO",
    "color": "rgb(59,169,156)"
  },
  "IOP": {
    "id": "internet-of-people",
    "name": "Internet of People",
    "symbol": "IOP",
    "color": "rgb(128,128,128)"
  },
  "AURS": {
    "id": "aureus",
    "name": "Aureus",
    "symbol": "AURS",
    "color": "rgb(229,143,44)"
  },
  "GBG": {
    "id": "golos-gold",
    "name": "Golos Gold",
    "symbol": "GBG",
    "color": "rgb(44,108,177)"
  },
  "MBL": {
    "id": "mobilecash",
    "name": "MobileCash",
    "symbol": "MBL",
    "color": "rgb(85,85,85)"
  },
  "CREDO": {
    "id": "credo",
    "name": "Credo",
    "symbol": "CREDO",
    "color": "rgb(0,0,0)"
  },
  "AMS": {
    "id": "amsterdamcoin",
    "name": "AmsterdamCoin",
    "symbol": "AMS",
    "color": "rgb(0,0,0)"
  },
  "BITCF": {
    "id": "first-bitcoin-capital",
    "name": "First Bitcoin Capital",
    "symbol": "BITCF",
    "color": "rgb(0,0,0)"
  },
  "CLUB": {
    "id": "clubcoin",
    "name": "ClubCoin",
    "symbol": "CLUB",
    "color": "rgb(236,236,237)"
  },
  "ASC": {
    "id": "asiccoin",
    "name": "AsicCoin",
    "symbol": "ASC",
    "color": "rgb(254,217,99)"
  },
  "BQ": {
    "id": "bitqy",
    "name": "bitqy",
    "symbol": "BQ",
    "color": "rgb(0,0,0)"
  },
  "WA": {
    "id": "wa-space",
    "name": "WA Space",
    "symbol": "WA",
    "color": "rgb(0,0,0)"
  },
  "UGT": {
    "id": "ug-token",
    "name": "UG Token",
    "symbol": "UGT",
    "color": "rgb(9,10,10)"
  },
  "FC": {
    "id": "facecoin",
    "name": "Facecoin",
    "symbol": "FC",
    "color": "rgb(0,0,0)"
  },
  "TERA": {
    "id": "teracoin",
    "name": "TeraCoin",
    "symbol": "TERA",
    "color": "rgb(94,36,46)"
  },
  "OX": {
    "id": "ox-fina",
    "name": "OX Fina",
    "symbol": "OX",
    "color": "rgb(85,85,170)"
  },
  "YOYOW": {
    "id": "yoyow",
    "name": "YOYOW",
    "symbol": "YOYOW",
    "color": "rgb(40,137,198)"
  },
  "APC": {
    "id": "alpacoin",
    "name": "AlpaCoin",
    "symbol": "APC",
    "color": "rgb(170,85,85)"
  },
  "RUBIT": {
    "id": "rublebit",
    "name": "RubleBit",
    "symbol": "RUBIT",
    "color": "rgb(255,85,85)"
  },
  "MTNC": {
    "id": "masternodecoin",
    "name": "Masternodecoin",
    "symbol": "MTNC",
    "color": "rgb(5,24,62)"
  },
  "DP": {
    "id": "digitalprice",
    "name": "DigitalPrice",
    "symbol": "DP",
    "color": "rgb(225,35,47)"
  },
  "ATMC": {
    "id": "atmcoin",
    "name": "ATMCoin",
    "symbol": "ATMC",
    "color": "rgb(0,0,0)"
  },
  "BTU": {
    "id": "bitcoin-unlimited",
    "name": "Bitcoin Unlimited (Futures)",
    "symbol": "BTU",
    "color": "rgb(244,111,37)"
  },
  "ZBC": {
    "id": "zilbercoin",
    "name": "Zilbercoin",
    "symbol": "ZBC",
    "color": "rgb(0,255,255)"
  },
  "BTDX": {
    "id": "bitcloud",
    "name": "Bitcloud",
    "symbol": "BTDX",
    "color": "rgb(61,115,131)"
  },
  "TYCHO": {
    "id": "tychocoin",
    "name": "Tychocoin",
    "symbol": "TYCHO",
    "color": "rgb(255,128,128)"
  },
  "PCS": {
    "id": "pabyosi-coin-special",
    "name": "Pabyosi Coin (Special)",
    "symbol": "PCS",
    "color": "rgb(170,170,85)"
  },
  "BLX": {
    "id": "blockchain-index",
    "name": "Blockchain Index",
    "symbol": "BLX",
    "color": "rgb(254,254,254)"
  },
  "BRAT": {
    "id": "brat",
    "name": "BRAT",
    "symbol": "BRAT",
    "color": "rgb(85,85,85)"
  },
  "SMOKE": {
    "id": "smoke",
    "name": "Smoke",
    "symbol": "SMOKE",
    "color": "rgb(82,179,62)"
  },
  "FID": {
    "id": "bitfid",
    "name": "BITFID",
    "symbol": "FID",
    "color": "rgb(38,85,162)"
  },
  "VOYA": {
    "id": "voyacoin",
    "name": "Voyacoin",
    "symbol": "VOYA",
    "color": "rgb(76,76,76)"
  },
  "NAMO": {
    "id": "namocoin",
    "name": "NamoCoin",
    "symbol": "NAMO",
    "color": "rgb(255,128,128)"
  },
  "MAGN": {
    "id": "magnetcoin",
    "name": "Magnetcoin",
    "symbol": "MAGN",
    "color": "rgb(128,128,128)"
  },
  "MG": {
    "id": "mind-gene",
    "name": "Mind Gene",
    "symbol": "MG",
    "color": "rgb(85,85,170)"
  },
  "BITOK": {
    "id": "bitok",
    "name": "Bitok",
    "symbol": "BITOK",
    "color": "rgb(115,179,33)"
  },
  "FEI": {
    "id": "fuda-energy",
    "name": "Fuda Energy",
    "symbol": "FEI",
    "color": "rgb(170,170,170)"
  },
  "ANTX": {
    "id": "antimatter",
    "name": "Antimatter",
    "symbol": "ANTX",
    "color": "rgb(170,170,170)"
  },
  "DTF": {
    "id": "digitalfund",
    "name": "Digitalfund",
    "symbol": "DTF",
    "color": "rgb(255,255,0)"
  },
  "ASN": {
    "id": "aseancoin",
    "name": "Aseancoin",
    "symbol": "ASN",
    "color": "rgb(255,170,85)"
  },
  "SUR": {
    "id": "suretly",
    "name": "Suretly",
    "symbol": "SUR",
    "color": "rgb(53,51,151)"
  },
  "VSX": {
    "id": "vsync-vsx",
    "name": "Vsync",
    "symbol": "VSX",
    "color": "rgb(104,168,202)"
  },
  "XOT": {
    "id": "internet-of-things",
    "name": "Internet of Things",
    "symbol": "XOT",
    "color": "rgb(254,255,255)"
  },
  "PAC": {
    "id": "paccoin",
    "name": "Paccoin",
    "symbol": "PAC",
    "color": "rgb(255,170,85)"
  },
  "HBC": {
    "id": "hbcoin",
    "name": "HBCoin",
    "symbol": "HBC",
    "color": "rgb(184,30,39)"
  },
  "TLE": {
    "id": "tattoocoin-limited",
    "name": "Tattoocoin (Limited Edition)",
    "symbol": "TLE",
    "color": "rgb(0,0,0)"
  },
  "XLC": {
    "id": "leviarcoin",
    "name": "LeviarCoin",
    "symbol": "XLC",
    "color": "rgb(36,54,66)"
  },
  "PRES": {
    "id": "president-trump",
    "name": "President Trump",
    "symbol": "PRES",
    "color": "rgb(128,128,128)"
  },
  "NXX": {
    "id": "nexxus",
    "name": "Nexxus",
    "symbol": "NXX",
    "color": "rgb(141,196,73)"
  },
  "PEC": {
    "id": "peacecoin",
    "name": "Peacecoin",
    "symbol": "PEC",
    "color": "rgb(255,0,0)"
  },
  "SAK": {
    "id": "sharkcoin",
    "name": "Sharkcoin",
    "symbol": "SAK",
    "color": "rgb(23,76,184)"
  },
  "VEN": {
    "id": "vechain",
    "name": "VeChain",
    "symbol": "VEN",
    "color": "rgb(219,255,255)"
  },
  "ACN": {
    "id": "avoncoin",
    "name": "Avoncoin",
    "symbol": "ACN",
    "color": "rgb(191,191,128)"
  },
  "GARY": {
    "id": "president-johnson",
    "name": "President Johnson",
    "symbol": "GARY",
    "color": "rgb(255,255,170)"
  },
  "SHND": {
    "id": "stronghands",
    "name": "StrongHands",
    "symbol": "SHND",
    "color": "rgb(0,0,0)"
  },
  "TELL": {
    "id": "tellurion",
    "name": "Tellurion",
    "symbol": "TELL",
    "color": "rgb(170,170,170)"
  },
  "GAY": {
    "id": "gaycoin",
    "name": "GAY Money",
    "symbol": "GAY",
    "color": "rgb(254,255,255)"
  },
  "UNRC": {
    "id": "universalroyalcoin",
    "name": "UniversalRoyalCoin",
    "symbol": "UNRC",
    "color": "rgb(0,0,0)"
  },
  "ACES": {
    "id": "aces",
    "name": "Aces",
    "symbol": "ACES",
    "color": "rgb(0,0,0)"
  },
  "TESLA": {
    "id": "teslacoilcoin",
    "name": "TeslaCoilCoin",
    "symbol": "TESLA",
    "color": "rgb(170,170,85)"
  },
  "CYDER": {
    "id": "cyder",
    "name": "Cyder",
    "symbol": "CYDER",
    "color": "rgb(64,230,56)"
  },
  "ZENGOLD": {
    "id": "zengold",
    "name": "ZenGold",
    "symbol": "ZENGOLD",
    "color": "rgb(240,199,103)"
  },
  "PAYP": {
    "id": "paypeer",
    "name": "PayPeer",
    "symbol": "PAYP",
    "color": "rgb(64,191,64)"
  },
  "SNAKE": {
    "id": "snakeeyes",
    "name": "SnakeEyes",
    "symbol": "SNAKE",
    "color": "rgb(118,194,175)"
  },
  "BLN": {
    "id": "bolenum",
    "name": "Bolenum",
    "symbol": "BLN",
    "color": "rgb(216,44,49)"
  },
  "PRN": {
    "id": "protean",
    "name": "Protean",
    "symbol": "PRN",
    "color": "rgb(18,18,18)"
  },
  "GYC": {
    "id": "gycoin",
    "name": "Gycoin",
    "symbol": "GYC",
    "color": "rgb(171,167,166)"
  },
  "NANOX": {
    "id": "project-x",
    "name": "Project-X",
    "symbol": "NANOX",
    "color": "rgb(0,0,128)"
  },
  "LDCN": {
    "id": "landcoin",
    "name": "LandCoin",
    "symbol": "LDCN",
    "color": "rgb(255,255,0)"
  },
  "HCC": {
    "id": "health-care-chain",
    "name": "Health Care Chain",
    "symbol": "HCC",
    "color": "rgb(141,196,74)"
  },
  "TCOIN": {
    "id": "t-coin",
    "name": "T-coin",
    "symbol": "TCOIN",
    "color": "rgb(255,170,85)"
  },
  "RHFC": {
    "id": "rhfcoin",
    "name": "RHFCoin",
    "symbol": "RHFC",
    "color": "rgb(255,170,85)"
  },
  "FRWC": {
    "id": "frankywillcoin",
    "name": "FrankyWillCoin",
    "symbol": "FRWC",
    "color": "rgb(240,240,240)"
  },
  "ANI": {
    "id": "animecoin",
    "name": "Animecoin",
    "symbol": "ANI",
    "color": "rgb(236,237,239)"
  },
  "SKULL": {
    "id": "pirate-blocks",
    "name": "Pirate Blocks",
    "symbol": "SKULL",
    "color": "rgb(211,32,48)"
  },
  "RBBT": {
    "id": "rabbitcoin",
    "name": "RabbitCoin",
    "symbol": "RBBT",
    "color": "rgb(0,0,0)"
  },
  "FFC": {
    "id": "fireflycoin",
    "name": "FireFlyCoin",
    "symbol": "FFC",
    "color": "rgb(159,159,159)"
  },
  "LEPEN": {
    "id": "lepen",
    "name": "LePen",
    "symbol": "LEPEN",
    "color": "rgb(22,20,20)"
  },
  "FLASH": {
    "id": "flash",
    "name": "Flash",
    "symbol": "FLASH",
    "color": "rgb(250,176,50)"
  },
  "MIU": {
    "id": "miyucoin",
    "name": "MIYUCoin",
    "symbol": "MIU",
    "color": "rgb(255,128,128)"
  },
  "UNC": {
    "id": "uncoin",
    "name": "UNCoin",
    "symbol": "UNC",
    "color": "rgb(255,255,128)"
  },
  "OPES": {
    "id": "opescoin",
    "name": "Opescoin",
    "symbol": "OPES",
    "color": "rgb(254,254,254)"
  },
  "TYC": {
    "id": "tyrocoin",
    "name": "Tyrocoin",
    "symbol": "TYC",
    "color": "rgb(59,59,60)"
  },
  "HALLO": {
    "id": "halloween-coin",
    "name": "Halloween Coin",
    "symbol": "HALLO",
    "color": "rgb(91,87,86)"
  },
  "FAZZ": {
    "id": "fazzcoin",
    "name": "Fazzcoin",
    "symbol": "FAZZ",
    "color": "rgb(170,170,85)"
  },
  "ACC": {
    "id": "adcoin",
    "name": "AdCoin",
    "symbol": "ACC",
    "color": "rgb(29,170,242)"
  },
  "NTCC": {
    "id": "neptune-classic",
    "name": "Neptune Classic",
    "symbol": "NTCC",
    "color": "rgb(154,144,132)"
  },
  "MOTO": {
    "id": "motocoin",
    "name": "Motocoin",
    "symbol": "MOTO",
    "color": "rgb(251,232,124)"
  },
  "EDRC": {
    "id": "edrcoin",
    "name": "EDRCoin",
    "symbol": "EDRC",
    "color": "rgb(84,125,60)"
  },
  "RICHX": {
    "id": "richcoin",
    "name": "RichCoin",
    "symbol": "RICHX",
    "color": "rgb(85,85,85)"
  },
  "XQN": {
    "id": "quotient",
    "name": "Quotient",
    "symbol": "XQN",
    "color": "rgb(0,0,0)"
  },
  "RYCN": {
    "id": "royalcoin-2",
    "name": "RoyalCoin 2",
    "symbol": "RYCN",
    "color": "rgb(255,0,0)"
  },
  "UR": {
    "id": "ur",
    "name": "UR",
    "symbol": "UR",
    "color": "rgb(237,65,62)"
  },
  "BRAIN": {
    "id": "braincoin",
    "name": "Braincoin",
    "symbol": "BRAIN",
    "color": "rgb(85,85,85)"
  },
  "WOW": {
    "id": "wowcoin",
    "name": "Wowcoin",
    "symbol": "WOW",
    "color": "rgb(17,20,14)"
  },
  "AV": {
    "id": "avatarcoin",
    "name": "AvatarCoin",
    "symbol": "AV",
    "color": "rgb(0,0,0)"
  },
  "9COIN": {
    "id": "9coin",
    "name": "9COIN",
    "symbol": "9COIN",
    "color": "rgb(0,0,0)"
  },
  "FBC": {
    "id": "fibocoins",
    "name": "FiboCoins",
    "symbol": "FBC",
    "color": "rgb(255,255,0)"
  },
  "MARX": {
    "id": "marxcoin",
    "name": "MarxCoin",
    "symbol": "MARX",
    "color": "rgb(11,95,137)"
  },
  "XBG": {
    "id": "btcgold",
    "name": "BTCGold",
    "symbol": "XBG",
    "color": "rgb(255,255,0)"
  },
  "BIRDS": {
    "id": "birds",
    "name": "Birds",
    "symbol": "BIRDS",
    "color": "rgb(57,87,145)"
  },
  "BXC": {
    "id": "bitcedi",
    "name": "Bitcedi",
    "symbol": "BXC",
    "color": "rgb(0,255,255)"
  },
  "MEN": {
    "id": "peoplecoin",
    "name": "PeopleCoin",
    "symbol": "MEN",
    "color": "rgb(229,229,231)"
  },
  "LAZ": {
    "id": "lazaruscoin",
    "name": "Lazaruscoin",
    "symbol": "LAZ",
    "color": "rgb(170,170,85)"
  },
  "ROYAL": {
    "id": "royalcoin",
    "name": "RoyalCoin",
    "symbol": "ROYAL",
    "color": "rgb(170,85,85)"
  },
  "QBT": {
    "id": "cubits",
    "name": "Cubits",
    "symbol": "QBT",
    "color": "rgb(85,85,0)"
  },
  "YES": {
    "id": "yescoin",
    "name": "Yescoin",
    "symbol": "YES",
    "color": "rgb(191,0,0)"
  },
  "QBC": {
    "id": "quebecoin",
    "name": "Quebecoin",
    "symbol": "QBC",
    "color": "rgb(9,58,154)"
  },
  "AIB": {
    "id": "advanced-internet-blocks",
    "name": "Advanced Internet Blocks",
    "symbol": "AIB",
    "color": "rgb(0,0,0)"
  },
  "GBRC": {
    "id": "global-business-revolution",
    "name": "Global Business Revolution",
    "symbol": "GBRC",
    "color": "rgb(254,189,62)"
  },
  "SHA": {
    "id": "shacoin",
    "name": "SHACoin",
    "symbol": "SHA",
    "color": "rgb(85,85,85)"
  },
  "ELC": {
    "id": "electionchain",
    "name": "ElectionChain",
    "symbol": "ELC",
    "color": "rgb(59,107,163)"
  },
  "MAVRO": {
    "id": "mavro",
    "name": "Mavro",
    "symbol": "MAVRO",
    "color": "rgb(255,191,128)"
  },
  "COUPE": {
    "id": "coupecoin",
    "name": "Coupecoin",
    "symbol": "COUPE",
    "color": "rgb(251,255,255)"
  },
  "MONEY": {
    "id": "moneycoin",
    "name": "MoneyCoin",
    "symbol": "MONEY",
    "color": "rgb(128,0,0)"
  },
  "DUB": {
    "id": "dubstep",
    "name": "Dubstep",
    "symbol": "DUB",
    "color": "rgb(0,0,0)"
  },
  "GSR": {
    "id": "geysercoin",
    "name": "GeyserCoin",
    "symbol": "GSR",
    "color": "rgb(0,0,255)"
  },
  "DASHS": {
    "id": "dashs",
    "name": "Dashs",
    "symbol": "DASHS",
    "color": "rgb(35,50,64)"
  },
  "BLAZR": {
    "id": "blazercoin",
    "name": "BlazerCoin",
    "symbol": "BLAZR",
    "color": "rgb(2,89,49)"
  },
  "XTD": {
    "id": "xtd-coin",
    "name": "XTD Coin",
    "symbol": "XTD",
    "color": "rgb(153,203,253)"
  },
  "PSY": {
    "id": "psilocybin",
    "name": "Psilocybin",
    "symbol": "PSY",
    "color": "rgb(0,0,0)"
  },
  "GAIN": {
    "id": "ugain",
    "name": "UGAIN",
    "symbol": "GAIN",
    "color": "rgb(27,30,36)"
  },
  "XVE": {
    "id": "the-vegan-initiative",
    "name": "The Vegan Initiative",
    "symbol": "XVE",
    "color": "rgb(252,252,252)"
  },
  "WINK": {
    "id": "wink",
    "name": "Wink",
    "symbol": "WINK",
    "color": "rgb(0,0,0)"
  },
  "OPAL": {
    "id": "opal",
    "name": "Opal",
    "symbol": "OPAL",
    "color": "rgb(0,0,0)"
  },
  "TRICK": {
    "id": "trickycoin",
    "name": "TrickyCoin",
    "symbol": "TRICK",
    "color": "rgb(85,85,85)"
  },
  "BTG": {
    "id": "bitgem",
    "name": "Bitgem",
    "symbol": "BTG",
    "color": "rgb(128,0,0)"
  },
  "AXIOM": {
    "id": "axiom",
    "name": "Axiom",
    "symbol": "AXIOM",
    "color": "rgb(0,0,0)"
  },
  "GML": {
    "id": "gameleaguecoin",
    "name": "GameLeagueCoin",
    "symbol": "GML",
    "color": "rgb(0,0,0)"
  },
  "PRIMU": {
    "id": "primulon",
    "name": "Primulon",
    "symbol": "PRIMU",
    "color": "rgb(15,54,58)"
  },
  "DON": {
    "id": "donationcoin",
    "name": "Donationcoin",
    "symbol": "DON",
    "color": "rgb(0,0,0)"
  },
  "OP": {
    "id": "operand",
    "name": "Operand",
    "symbol": "OP",
    "color": "rgb(68,120,148)"
  },
  "VGC": {
    "id": "vegascoin",
    "name": "VegasCoin",
    "symbol": "VGC",
    "color": "rgb(0,0,0)"
  },
  "CME": {
    "id": "cashme",
    "name": "Cashme",
    "symbol": "CME",
    "color": "rgb(254,255,255)"
  },
  "BIT": {
    "id": "first-bitcoin",
    "name": "First Bitcoin",
    "symbol": "BIT",
    "color": "rgb(0,0,0)"
  },
  "ZSE": {
    "id": "zsecoin",
    "name": "ZSEcoin",
    "symbol": "ZSE",
    "color": "rgb(255,255,0)"
  },
  "XDE2": {
    "id": "xde-ii",
    "name": "XDE II",
    "symbol": "XDE2",
    "color": "rgb(217,217,217)"
  },
  "EXL": {
    "id": "excelcoin",
    "name": "Excelcoin",
    "symbol": "EXL",
    "color": "rgb(216,62,38)"
  },
  "REGA": {
    "id": "regacoin",
    "name": "Regacoin",
    "symbol": "REGA",
    "color": "rgb(30,198,34)"
  },
  "CC": {
    "id": "cybercoin",
    "name": "CyberCoin",
    "symbol": "CC",
    "color": "rgb(170,170,170)"
  },
  "TEAM": {
    "id": "teamup",
    "name": "TeamUp",
    "symbol": "TEAM",
    "color": "rgb(254,255,255)"
  },
  "PI": {
    "id": "picoin",
    "name": "PiCoin",
    "symbol": "PI",
    "color": "rgb(52,52,52)"
  },
  "DBG": {
    "id": "digital-bullion-gold",
    "name": "Digital Bullion Gold",
    "symbol": "DBG",
    "color": "rgb(0,0,0)"
  },
  "PCN": {
    "id": "peepcoin",
    "name": "PeepCoin",
    "symbol": "PCN",
    "color": "rgb(71,25,106)"
  },
  "TODAY": {
    "id": "todaycoin",
    "name": "TodayCoin",
    "symbol": "TODAY",
    "color": "rgb(36,73,146)"
  },
  "STRB": {
    "id": "superturbostake",
    "name": "SuperTurboStake",
    "symbol": "STRB",
    "color": "rgb(66,66,66)"
  },
  "VTY": {
    "id": "victoriouscoin",
    "name": "Victoriouscoin",
    "symbol": "VTY",
    "color": "rgb(255,0,0)"
  },
  "YOG": {
    "id": "yogold",
    "name": "Yogold",
    "symbol": "YOG",
    "color": "rgb(170,85,85)"
  },
  "TURBO": {
    "id": "turbocoin",
    "name": "TurboCoin",
    "symbol": "TURBO",
    "color": "rgb(118,199,237)"
  },
  "TCR": {
    "id": "thecreed",
    "name": "TheCreed",
    "symbol": "TCR",
    "color": "rgb(0,0,0)"
  },
  "EFYT": {
    "id": "ergo",
    "name": "Ergo",
    "symbol": "EFYT",
    "color": "rgb(0,0,0)"
  },
  "SKR": {
    "id": "sakuracoin",
    "name": "Sakuracoin",
    "symbol": "SKR",
    "color": "rgb(255,0,255)"
  },
  "POKE": {
    "id": "pokecoin",
    "name": "PokeCoin",
    "symbol": "POKE",
    "color": "rgb(0,0,0)"
  },
  "XRY": {
    "id": "royalties",
    "name": "Royalties",
    "symbol": "XRY",
    "color": "rgb(19,19,18)"
  },
  "RCN": {
    "id": "rcoin",
    "name": "Rcoin",
    "symbol": "RCN",
    "color": "rgb(255,170,170)"
  },
  "SOUL": {
    "id": "soulcoin",
    "name": "SoulCoin",
    "symbol": "SOUL",
    "color": "rgb(0,0,0)"
  },
  "IVZ": {
    "id": "invisiblecoin",
    "name": "InvisibleCoin",
    "symbol": "IVZ",
    "color": "rgb(0,0,0)"
  },
  "WEC": {
    "id": "wowecoin",
    "name": "Wowecoin",
    "symbol": "WEC",
    "color": "rgb(0,0,0)"
  },
  "KARMA": {
    "id": "karmacoin",
    "name": "Karmacoin",
    "symbol": "KARMA",
    "color": "rgb(119,183,178)"
  },
  "TOPAZ": {
    "id": "topaz",
    "name": "Topaz Coin",
    "symbol": "TOPAZ",
    "color": "rgb(0,0,0)"
  },
  "NBIT": {
    "id": "netbit",
    "name": "netBit",
    "symbol": "NBIT",
    "color": "rgb(0,0,0)"
  },
  "PRM": {
    "id": "prismchain",
    "name": "PrismChain",
    "symbol": "PRM",
    "color": "rgb(85,85,170)"
  },
  "FUTC": {
    "id": "futcoin",
    "name": "FutCoin",
    "symbol": "FUTC",
    "color": "rgb(227,42,34)"
  },
  "MONETA": {
    "id": "moneta2",
    "name": "Moneta",
    "symbol": "MONETA",
    "color": "rgb(75,166,215)"
  },
  "DCRE": {
    "id": "deltacredits",
    "name": "DeltaCredits",
    "symbol": "DCRE",
    "color": "rgb(128,128,128)"
  },
  "LKC": {
    "id": "linkedcoin",
    "name": "LinkedCoin",
    "symbol": "LKC",
    "color": "rgb(211,151,89)"
  },
  "SKC": {
    "id": "skeincoin",
    "name": "Skeincoin",
    "symbol": "SKC",
    "color": "rgb(0,0,255)"
  },
  "ETX": {
    "id": "etherx",
    "name": "Etherx",
    "symbol": "ETX",
    "color": "rgb(45,153,195)"
  },
  "FONZ": {
    "id": "fonziecoin",
    "name": "Fonziecoin",
    "symbol": "FONZ",
    "color": "rgb(161,134,118)"
  },
  "BGR": {
    "id": "bongger",
    "name": "Bongger",
    "symbol": "BGR",
    "color": "rgb(128,128,128)"
  },
  "IRL": {
    "id": "irishcoin",
    "name": "IrishCoin",
    "symbol": "IRL",
    "color": "rgb(8,89,53)"
  },
  "CBD": {
    "id": "cbd-crystals",
    "name": "CBD Crystals",
    "symbol": "CBD",
    "color": "rgb(0,0,0)"
  },
  "CLINT": {
    "id": "clinton",
    "name": "Clinton",
    "symbol": "CLINT",
    "color": "rgb(255,255,0)"
  },
  "TOP": {
    "id": "topcoin",
    "name": "TopCoin",
    "symbol": "TOP",
    "color": "rgb(0,0,0)"
  },
  "SPORT": {
    "id": "sportscoin",
    "name": "SportsCoin",
    "symbol": "SPORT",
    "color": "rgb(0,255,0)"
  },
  "CYC": {
    "id": "cycling-coin",
    "name": "Cycling Coin",
    "symbol": "CYC",
    "color": "rgb(51,153,204)"
  },
  "SFE": {
    "id": "safecoin",
    "name": "SafeCoin",
    "symbol": "SFE",
    "color": "rgb(170,170,85)"
  },
  "XAU": {
    "id": "xaucoin",
    "name": "Xaucoin",
    "symbol": "XAU",
    "color": "rgb(211,174,67)"
  },
  "HYPER": {
    "id": "hyper",
    "name": "Hyper",
    "symbol": "HYPER",
    "color": "rgb(0,0,0)"
  },
  "KASHH": {
    "id": "kashhcoin",
    "name": "KashhCoin",
    "symbol": "KASHH",
    "color": "rgb(0,0,0)"
  },
  "BEST": {
    "id": "bestchain",
    "name": "BestChain",
    "symbol": "BEST",
    "color": "rgb(0,0,255)"
  },
  "GUC": {
    "id": "goldunioncoin",
    "name": "GoldUnionCoin",
    "symbol": "GUC",
    "color": "rgb(255,255,0)"
  },
  "NBE": {
    "id": "bitcentavo",
    "name": "BitCentavo",
    "symbol": "NBE",
    "color": "rgb(255,255,0)"
  },
  "COXST": {
    "id": "coexistcoin",
    "name": "CoExistCoin",
    "symbol": "COXST",
    "color": "rgb(0,255,255)"
  },
  "WSX": {
    "id": "wearesatoshi",
    "name": "WeAreSatoshi",
    "symbol": "WSX",
    "color": "rgb(128,128,128)"
  },
  "BAC": {
    "id": "bitalphacoin",
    "name": "BitAlphaCoin",
    "symbol": "BAC",
    "color": "rgb(255,170,85)"
  },
  "QRZ": {
    "id": "quartz-qrz",
    "name": "Quartz",
    "symbol": "QRZ",
    "color": "rgb(85,170,170)"
  },
  "SYNC": {
    "id": "sync",
    "name": "Sync",
    "symbol": "SYNC",
    "color": "rgb(22,142,207)"
  },
  "GOLF": {
    "id": "golfcoin",
    "name": "Golfcoin",
    "symbol": "GOLF",
    "color": "rgb(98,143,25)"
  },
  "TP1": {
    "id": "kolschcoin",
    "name": "KolschCoin",
    "symbol": "TP1",
    "color": "rgb(191,191,191)"
  },
  "UTA": {
    "id": "utacoin",
    "name": "UtaCoin",
    "symbol": "UTA",
    "color": "rgb(170,170,85)"
  },
  "OMC": {
    "id": "omicron",
    "name": "Omicron",
    "symbol": "OMC",
    "color": "rgb(0,0,0)"
  },
  "PDG": {
    "id": "pinkdog",
    "name": "PinkDog",
    "symbol": "PDG",
    "color": "rgb(236,137,55)"
  },
  "GMB": {
    "id": "gambleo",
    "name": "Gambleo",
    "symbol": "GMB",
    "color": "rgb(40,40,40)"
  },
  "XSTC": {
    "id": "safe-trade-coin",
    "name": "Safe Trade Coin",
    "symbol": "XSTC",
    "color": "rgb(0,0,0)"
  },
  "QORA": {
    "id": "qora",
    "name": "Qora",
    "symbol": "QORA",
    "color": "rgb(69,70,189)"
  },
  "SHELL": {
    "id": "shellcoin",
    "name": "ShellCoin",
    "symbol": "SHELL",
    "color": "rgb(85,85,0)"
  },
  "MMXVI": {
    "id": "mmxvi",
    "name": "MMXVI",
    "symbol": "MMXVI",
    "color": "rgb(85,170,170)"
  },
  "STEX": {
    "id": "stex",
    "name": "STEX",
    "symbol": "STEX",
    "color": "rgb(44,53,120)"
  },
  "OCOW": {
    "id": "ocow",
    "name": "OCOW",
    "symbol": "OCOW",
    "color": "rgb(0,0,0)"
  },
  "LTH": {
    "id": "lathaan",
    "name": "LAthaan",
    "symbol": "LTH",
    "color": "rgb(43,43,43)"
  },
  "CHEAP": {
    "id": "cheapcoin",
    "name": "Cheapcoin",
    "symbol": "CHEAP",
    "color": "rgb(99,98,94)"
  },
  "AMIS": {
    "id": "amis",
    "name": "AMIS",
    "symbol": "AMIS",
    "color": "rgb(140,74,74)"
  },
  "EGG": {
    "id": "eggcoin",
    "name": "EggCoin",
    "symbol": "EGG",
    "color": "rgb(0,0,0)"
  },
  "DISK": {
    "id": "darklisk",
    "name": "DarkLisk",
    "symbol": "DISK",
    "color": "rgb(34,34,34)"
  },
  "DOC": {
    "id": "dochain",
    "name": "Dochain",
    "symbol": "DOC",
    "color": "rgb(54,155,206)"
  },
  "LLT": {
    "id": "lltoken",
    "name": "LLToken",
    "symbol": "LLT",
    "color": "rgb(34,35,56)"
  },
  "GMX": {
    "id": "goldmaxcoin",
    "name": "GoldMaxCoin",
    "symbol": "GMX",
    "color": "rgb(0,128,255)"
  },
  "MKR": {
    "id": "maker",
    "name": "Maker",
    "symbol": "MKR",
    "color": "rgb(85,104,119)"
  },
  "X2": {
    "id": "x2",
    "name": "X2",
    "symbol": "X2",
    "color": "rgb(254,214,49)"
  },
  "MRC": {
    "id": "microcoin",
    "name": "microCoin",
    "symbol": "MRC",
    "color": "rgb(69,122,186)"
  },
  "BURN": {
    "id": "president-sanders",
    "name": "President Sanders",
    "symbol": "BURN",
    "color": "rgb(251,251,251)"
  }
}
