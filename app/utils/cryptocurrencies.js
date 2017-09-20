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

  return '#F9A440'
}

export const cryptocurrencies = {
    "42": {
        "id": "42-coin",
        "name": "42-coin",
        "symbol": "42"
    },
    "300": {
        "id": "300-token",
        "name": "300 Token",
        "symbol": "300"
    },
    "611": {
        "id": "sixeleven",
        "name": "SixEleven",
        "symbol": "611"
    },
    "808": {
        "id": "808coin",
        "name": "808Coin",
        "symbol": "808"
    },
    "888": {
        "id": "octocoin",
        "name": "OctoCoin",
        "symbol": "888"
    },
    "1337": {
        "id": "1337",
        "name": "1337",
        "symbol": "1337"
    },
    "BTC": {
        "id": "bitcoin",
        "name": "Bitcoin",
        "symbol": "BTC"
    },
    "ETH": {
        "id": "ethereum",
        "name": "Ethereum",
        "symbol": "ETH"
    },
    "BCH": {
        "id": "bitcoin-cash",
        "name": "Bitcoin Cash",
        "symbol": "BCH"
    },
    "XRP": {
        "id": "ripple",
        "name": "Ripple",
        "symbol": "XRP"
    },
    "LTC": {
        "id": "litecoin",
        "name": "Litecoin",
        "symbol": "LTC"
    },
    "DASH": {
        "id": "dash",
        "name": "Dash",
        "symbol": "DASH"
    },
    "XEM": {
        "id": "nem",
        "name": "NEM",
        "symbol": "XEM"
    },
    "XMR": {
        "id": "monero",
        "name": "Monero",
        "symbol": "XMR"
    },
    "MIOTA": {
        "id": "iota",
        "name": "IOTA",
        "symbol": "MIOTA"
    },
    "ETC": {
        "id": "ethereum-classic",
        "name": "Ethereum Classic",
        "symbol": "ETC"
    },
    "OMG": {
        "id": "omisego",
        "name": "OmiseGO",
        "symbol": "OMG"
    },
    "NEO": {
        "id": "neo",
        "name": "NEO",
        "symbol": "NEO"
    },
    "BCC": {
        "id": "bitconnect",
        "name": "BitConnect",
        "symbol": "BCC"
    },
    "LSK": {
        "id": "lisk",
        "name": "Lisk",
        "symbol": "LSK"
    },
    "QTUM": {
        "id": "qtum",
        "name": "Qtum",
        "symbol": "QTUM"
    },
    "STRAT": {
        "id": "stratis",
        "name": "Stratis",
        "symbol": "STRAT"
    },
    "ZEC": {
        "id": "zcash",
        "name": "Zcash",
        "symbol": "ZEC"
    },
    "USDT": {
        "id": "tether",
        "name": "Tether",
        "symbol": "USDT"
    },
    "WAVES": {
        "id": "waves",
        "name": "Waves",
        "symbol": "WAVES"
    },
    "HSR": {
        "id": "hshare",
        "name": "Hshare",
        "symbol": "HSR"
    },
    "ARK": {
        "id": "ark",
        "name": "Ark",
        "symbol": "ARK"
    },
    "STEEM": {
        "id": "steem",
        "name": "Steem",
        "symbol": "STEEM"
    },
    "BTS": {
        "id": "bitshares",
        "name": "BitShares",
        "symbol": "BTS"
    },
    "BCN": {
        "id": "bytecoin-bcn",
        "name": "Bytecoin",
        "symbol": "BCN"
    },
    "EOS": {
        "id": "eos",
        "name": "EOS",
        "symbol": "EOS"
    },
    "XLM": {
        "id": "stellar",
        "name": "Stellar Lumens",
        "symbol": "XLM"
    },
    "MAID": {
        "id": "maidsafecoin",
        "name": "MaidSafeCoin",
        "symbol": "MAID"
    },
    "PAY": {
        "id": "tenx",
        "name": "TenX",
        "symbol": "PAY"
    },
    "REP": {
        "id": "augur",
        "name": "Augur",
        "symbol": "REP"
    },
    "GNT": {
        "id": "golem-network-tokens",
        "name": "Golem",
        "symbol": "GNT"
    },
    "KMD": {
        "id": "komodo",
        "name": "Komodo",
        "symbol": "KMD"
    },
    "MTL": {
        "id": "metal",
        "name": "Metal",
        "symbol": "MTL"
    },
    "BAT": {
        "id": "batcoin",
        "name": "BatCoin",
        "symbol": "BAT"
    },
    "PIVX": {
        "id": "pivx",
        "name": "PIVX",
        "symbol": "PIVX"
    },
    "NXS": {
        "id": "nexus",
        "name": "Nexus",
        "symbol": "NXS"
    },
    "FCT": {
        "id": "factom",
        "name": "Factom",
        "symbol": "FCT"
    },
    "SC": {
        "id": "siacoin",
        "name": "Siacoin",
        "symbol": "SC"
    },
    "VERI": {
        "id": "veritaseum",
        "name": "Veritaseum",
        "symbol": "VERI"
    },
    "ICN": {
        "id": "icoin",
        "name": "iCoin",
        "symbol": "ICN"
    },
    "GBYTE": {
        "id": "byteball",
        "name": "Byteball Bytes",
        "symbol": "GBYTE"
    },
    "DOGE": {
        "id": "dogecoin",
        "name": "Dogecoin",
        "symbol": "DOGE"
    },
    "DCR": {
        "id": "decred",
        "name": "Decred",
        "symbol": "DCR"
    },
    "DGD": {
        "id": "digixdao",
        "name": "DigixDAO",
        "symbol": "DGD"
    },
    "PPT": {
        "id": "populous",
        "name": "Populous",
        "symbol": "PPT"
    },
    "CVC": {
        "id": "civic",
        "name": "Civic",
        "symbol": "CVC"
    },
    "GNO": {
        "id": "gnosis-gno",
        "name": "Gnosis",
        "symbol": "GNO"
    },
    "DGB": {
        "id": "digibyte",
        "name": "DigiByte",
        "symbol": "DGB"
    },
    "BTCD": {
        "id": "bitcoindark",
        "name": "BitcoinDark",
        "symbol": "BTCD"
    },
    "ARDR": {
        "id": "ardor",
        "name": "Ardor",
        "symbol": "ARDR"
    },
    "SYS": {
        "id": "syscoin",
        "name": "Syscoin",
        "symbol": "SYS"
    },
    "ZRX": {
        "id": "0x",
        "name": "0x",
        "symbol": "ZRX"
    },
    "GAME": {
        "id": "gamecredits",
        "name": "GameCredits",
        "symbol": "GAME"
    },
    "BNB": {
        "id": "binance-coin",
        "name": "Binance Coin",
        "symbol": "BNB"
    },
    "SNT": {
        "id": "status",
        "name": "Status",
        "symbol": "SNT"
    },
    "SNGLS": {
        "id": "singulardtv",
        "name": "SingularDTV",
        "symbol": "SNGLS"
    },
    "AE": {
        "id": "aeternity",
        "name": "Aeternity",
        "symbol": "AE"
    },
    "BNT": {
        "id": "bancor",
        "name": "Bancor",
        "symbol": "BNT"
    },
    "LKK": {
        "id": "lykke",
        "name": "Lykke",
        "symbol": "LKK"
    },
    "XVG": {
        "id": "verge",
        "name": "Verge",
        "symbol": "XVG"
    },
    "FUN": {
        "id": "funfair",
        "name": "FunFair",
        "symbol": "FUN"
    },
    "GAS": {
        "id": "gas",
        "name": "Gas",
        "symbol": "GAS"
    },
    "BLOCK": {
        "id": "blocknet",
        "name": "Blocknet",
        "symbol": "BLOCK"
    },
    "NXT": {
        "id": "nxt",
        "name": "Nxt",
        "symbol": "NXT"
    },
    "EDG": {
        "id": "edgeless",
        "name": "Edgeless",
        "symbol": "EDG"
    },
    "MCO": {
        "id": "monaco",
        "name": "Monaco",
        "symbol": "MCO"
    },
    "GXS": {
        "id": "gxshares",
        "name": "GXShares",
        "symbol": "GXS"
    },
    "UBQ": {
        "id": "ubiq",
        "name": "Ubiq",
        "symbol": "UBQ"
    },
    "TRIG": {
        "id": "triggers",
        "name": "Triggers",
        "symbol": "TRIG"
    },
    "BQX": {
        "id": "bitquence",
        "name": "Bitquence",
        "symbol": "BQX"
    },
    "PART": {
        "id": "particl",
        "name": "Particl",
        "symbol": "PART"
    },
    "TNT": {
        "id": "tierion",
        "name": "Tierion",
        "symbol": "TNT"
    },
    "ANT": {
        "id": "aragon",
        "name": "Aragon",
        "symbol": "ANT"
    },
    "NAV": {
        "id": "nav-coin",
        "name": "NAV Coin",
        "symbol": "NAV"
    },
    "WINGS": {
        "id": "wings",
        "name": "Wings",
        "symbol": "WINGS"
    },
    "WTC": {
        "id": "walton",
        "name": "Walton",
        "symbol": "WTC"
    },
    "MGO": {
        "id": "mobilego",
        "name": "MobileGo",
        "symbol": "MGO"
    },
    "CLOAK": {
        "id": "cloakcoin",
        "name": "CloakCoin",
        "symbol": "CLOAK"
    },
    "FRST": {
        "id": "firstcoin",
        "name": "FirstCoin",
        "symbol": "FRST"
    },
    "CFI": {
        "id": "cofound-it",
        "name": "Cofound.it",
        "symbol": "CFI"
    },
    "MTH": {
        "id": "monetha",
        "name": "Monetha",
        "symbol": "MTH"
    },
    "STORJ": {
        "id": "storj",
        "name": "Storj",
        "symbol": "STORJ"
    },
    "OK": {
        "id": "okcash",
        "name": "OKCash",
        "symbol": "OK"
    },
    "XEL": {
        "id": "elastic",
        "name": "Elastic",
        "symbol": "XEL"
    },
    "IOC": {
        "id": "iocoin",
        "name": "I/O Coin",
        "symbol": "IOC"
    },
    "PLR": {
        "id": "pillar",
        "name": "Pillar",
        "symbol": "PLR"
    },
    "NLG": {
        "id": "gulden",
        "name": "Gulden",
        "symbol": "NLG"
    },
    "RLC": {
        "id": "rlc",
        "name": "iExec RLC",
        "symbol": "RLC"
    },
    "MLN": {
        "id": "melon",
        "name": "Melon",
        "symbol": "MLN"
    },
    "BTM": {
        "id": "bitmark",
        "name": "Bitmark",
        "symbol": "BTM"
    },
    "LEO": {
        "id": "leocoin",
        "name": "LEOcoin",
        "symbol": "LEO"
    },
    "NLC2": {
        "id": "nolimitcoin",
        "name": "NoLimitCoin",
        "symbol": "NLC2"
    },
    "RISE": {
        "id": "rise",
        "name": "Rise",
        "symbol": "RISE"
    },
    "ADK": {
        "id": "aidos-kuneen",
        "name": "Aidos Kuneen",
        "symbol": "ADK"
    },
    "ADX": {
        "id": "adx-net",
        "name": "AdEx",
        "symbol": "ADX"
    },
    "PTOY": {
        "id": "patientory",
        "name": "Patientory",
        "symbol": "PTOY"
    },
    "LRC": {
        "id": "loopring",
        "name": "Loopring",
        "symbol": "LRC"
    },
    "PPC": {
        "id": "peercoin",
        "name": "Peercoin",
        "symbol": "PPC"
    },
    "FAIR": {
        "id": "faircoin",
        "name": "FairCoin",
        "symbol": "FAIR"
    },
    "1ST": {
        "id": "firstblood",
        "name": "FirstBlood",
        "symbol": "1ST"
    },
    "XCP": {
        "id": "counterparty",
        "name": "Counterparty",
        "symbol": "XCP"
    },
    "QRL": {
        "id": "quantum-resistant-ledger",
        "name": "Quantum Resistant Ledger",
        "symbol": "QRL"
    },
    "DCT": {
        "id": "decent",
        "name": "DECENT",
        "symbol": "DCT"
    },
    "TKN": {
        "id": "tokencard",
        "name": "TokenCard",
        "symbol": "TKN"
    },
    "DLT": {
        "id": "delta",
        "name": "Delta",
        "symbol": "DLT"
    },
    "EMC": {
        "id": "emercoin",
        "name": "Emercoin",
        "symbol": "EMC"
    },
    "SNM": {
        "id": "sonm",
        "name": "SONM",
        "symbol": "SNM"
    },
    "LUN": {
        "id": "lunyr",
        "name": "Lunyr",
        "symbol": "LUN"
    },
    "RDD": {
        "id": "reddcoin",
        "name": "ReddCoin",
        "symbol": "RDD"
    },
    "MSP": {
        "id": "mothership",
        "name": "Mothership",
        "symbol": "MSP"
    },
    "TAAS": {
        "id": "taas",
        "name": "TaaS",
        "symbol": "TAAS"
    },
    "VTC": {
        "id": "vertcoin",
        "name": "Vertcoin",
        "symbol": "VTC"
    },
    "TCC": {
        "id": "the-champcoin",
        "name": "The ChampCoin",
        "symbol": "TCC"
    },
    "EXP": {
        "id": "expanse",
        "name": "Expanse",
        "symbol": "EXP"
    },
    "XRL": {
        "id": "rialto",
        "name": "Rialto",
        "symbol": "XRL"
    },
    "MONA": {
        "id": "monacoin",
        "name": "MonaCoin",
        "symbol": "MONA"
    },
    "XZC": {
        "id": "zcoin",
        "name": "ZCoin",
        "symbol": "XZC"
    },
    "DNT": {
        "id": "district0x",
        "name": "district0x",
        "symbol": "DNT"
    },
    "TRST": {
        "id": "trust",
        "name": "WeTrust",
        "symbol": "TRST"
    },
    "VSL": {
        "id": "vslice",
        "name": "vSlice",
        "symbol": "VSL"
    },
    "STX": {
        "id": "stox",
        "name": "Stox",
        "symbol": "STX"
    },
    "ROUND": {
        "id": "round",
        "name": "Round",
        "symbol": "ROUND"
    },
    "ADT": {
        "id": "adtoken",
        "name": "adToken",
        "symbol": "ADT"
    },
    "ION": {
        "id": "ion",
        "name": "ION",
        "symbol": "ION"
    },
    "ETP": {
        "id": "metaverse",
        "name": "Metaverse ETP",
        "symbol": "ETP"
    },
    "PLBT": {
        "id": "polybius",
        "name": "Polybius",
        "symbol": "PLBT"
    },
    "XAS": {
        "id": "asch",
        "name": "Asch",
        "symbol": "XAS"
    },
    "DICE": {
        "id": "etheroll",
        "name": "Etheroll",
        "symbol": "DICE"
    },
    "NMR": {
        "id": "numeraire",
        "name": "Numeraire",
        "symbol": "NMR"
    },
    "VIA": {
        "id": "viacoin",
        "name": "Viacoin",
        "symbol": "VIA"
    },
    "CRW": {
        "id": "crown",
        "name": "Crown",
        "symbol": "CRW"
    },
    "CDT": {
        "id": "coindash",
        "name": "CoinDash",
        "symbol": "CDT"
    },
    "POE": {
        "id": "poet",
        "name": "Po.et",
        "symbol": "POE"
    },
    "NMC": {
        "id": "namecoin",
        "name": "Namecoin",
        "symbol": "NMC"
    },
    "XAUR": {
        "id": "xaurum",
        "name": "Xaurum",
        "symbol": "XAUR"
    },
    "SAFEX": {
        "id": "safe-exchange-coin",
        "name": "Safe Exchange Coin",
        "symbol": "SAFEX"
    },
    "BAY": {
        "id": "bitbay",
        "name": "BitBay",
        "symbol": "BAY"
    },
    "BURST": {
        "id": "burst",
        "name": "Burst",
        "symbol": "BURST"
    },
    "UNITY": {
        "id": "supernet-unity",
        "name": "SuperNET",
        "symbol": "UNITY"
    },
    "MUE": {
        "id": "monetaryunit",
        "name": "MonetaryUnit",
        "symbol": "MUE"
    },
    "MYST": {
        "id": "mysterium",
        "name": "Mysterium",
        "symbol": "MYST"
    },
    "POT": {
        "id": "potcoin",
        "name": "PotCoin",
        "symbol": "POT"
    },
    "HMQ": {
        "id": "humaniq",
        "name": "Humaniq",
        "symbol": "HMQ"
    },
    "SAN": {
        "id": "santiment",
        "name": "Santiment Network Token",
        "symbol": "SAN"
    },
    "RADS": {
        "id": "radium",
        "name": "Radium",
        "symbol": "RADS"
    },
    "CLAM": {
        "id": "clams",
        "name": "Clams",
        "symbol": "CLAM"
    },
    "ATCC": {
        "id": "atc-coin",
        "name": "ATC Coin",
        "symbol": "ATCC"
    },
    "UNO": {
        "id": "unobtanium",
        "name": "Unobtanium",
        "symbol": "UNO"
    },
    "LBC": {
        "id": "library-credit",
        "name": "LBRY Credits",
        "symbol": "LBC"
    },
    "MOON": {
        "id": "mooncoin",
        "name": "Mooncoin",
        "symbol": "MOON"
    },
    "NXC": {
        "id": "nexium",
        "name": "Nexium",
        "symbol": "NXC"
    },
    "NEBL": {
        "id": "neblio",
        "name": "Neblio",
        "symbol": "NEBL"
    },
    "WGR": {
        "id": "wagerr",
        "name": "Wagerr",
        "symbol": "WGR"
    },
    "OMNI": {
        "id": "omni",
        "name": "Omni",
        "symbol": "OMNI"
    },
    "SKY": {
        "id": "skycoin",
        "name": "Skycoin",
        "symbol": "SKY"
    },
    "PPY": {
        "id": "peerplays-ppy",
        "name": "Peerplays",
        "symbol": "PPY"
    },
    "QAU": {
        "id": "quantum",
        "name": "Quantum",
        "symbol": "QAU"
    },
    "SIB": {
        "id": "sibcoin",
        "name": "SIBCoin",
        "symbol": "SIB"
    },
    "SHIFT": {
        "id": "shift",
        "name": "Shift",
        "symbol": "SHIFT"
    },
    "XDN": {
        "id": "digitalnote",
        "name": "DigitalNote",
        "symbol": "XDN"
    },
    "ZEN": {
        "id": "zencash",
        "name": "ZenCash",
        "symbol": "ZEN"
    },
    "IFT": {
        "id": "investfeed",
        "name": "InvestFeed",
        "symbol": "IFT"
    },
    "RBY": {
        "id": "rubycoin",
        "name": "Rubycoin",
        "symbol": "RBY"
    },
    "NTO": {
        "id": "fujinto",
        "name": "Fujinto",
        "symbol": "NTO"
    },
    "SLS": {
        "id": "salus",
        "name": "SaluS",
        "symbol": "SLS"
    },
    "SPR": {
        "id": "spreadcoin",
        "name": "SpreadCoin",
        "symbol": "SPR"
    },
    "TIME": {
        "id": "chronobank",
        "name": "Chronobank",
        "symbol": "TIME"
    },
    "DMD": {
        "id": "diamond",
        "name": "Diamond",
        "symbol": "DMD"
    },
    "ECOB": {
        "id": "ecobit",
        "name": "Ecobit",
        "symbol": "ECOB"
    },
    "OBITS": {
        "id": "obits",
        "name": "OBITS",
        "symbol": "OBITS"
    },
    "AGRS": {
        "id": "agoras-tokens",
        "name": "Agoras Tokens",
        "symbol": "AGRS"
    },
    "SWT": {
        "id": "swarm-city",
        "name": "Swarm City",
        "symbol": "SWT"
    },
    "EMV": {
        "id": "ethereum-movie-venture",
        "name": "Ethereum Movie Venture",
        "symbol": "EMV"
    },
    "GUP": {
        "id": "guppy",
        "name": "Matchpool",
        "symbol": "GUP"
    },
    "ENRG": {
        "id": "energycoin",
        "name": "Energycoin",
        "symbol": "ENRG"
    },
    "SOAR": {
        "id": "soarcoin",
        "name": "Soarcoin",
        "symbol": "SOAR"
    },
    "BLK": {
        "id": "blackcoin",
        "name": "BlackCoin",
        "symbol": "BLK"
    },
    "AMP": {
        "id": "synereo",
        "name": "Synereo",
        "symbol": "AMP"
    },
    "GOLOS": {
        "id": "golos",
        "name": "Golos",
        "symbol": "GOLOS"
    },
    "LMC": {
        "id": "lomocoin",
        "name": "LoMoCoin",
        "symbol": "LMC"
    },
    "GRC": {
        "id": "gridcoin",
        "name": "GridCoin",
        "symbol": "GRC"
    },
    "BCAP": {
        "id": "bcap",
        "name": "BCAP",
        "symbol": "BCAP"
    },
    "NEOS": {
        "id": "neoscoin",
        "name": "NeosCoin",
        "symbol": "NEOS"
    },
    "BITCNY": {
        "id": "bitcny",
        "name": "bitCNY",
        "symbol": "BITCNY"
    },
    "ECC": {
        "id": "eccoin",
        "name": "E-Currency Coin",
        "symbol": "ECC"
    },
    "WCT": {
        "id": "waves-community-token",
        "name": "Waves Community Token",
        "symbol": "WCT"
    },
    "XVC": {
        "id": "vcash",
        "name": "Vcash",
        "symbol": "XVC"
    },
    "OAX": {
        "id": "openanx",
        "name": "OpenAnx",
        "symbol": "OAX"
    },
    "GRS": {
        "id": "groestlcoin",
        "name": "Groestlcoin",
        "symbol": "GRS"
    },
    "VRC": {
        "id": "vericoin",
        "name": "VeriCoin",
        "symbol": "VRC"
    },
    "ECN": {
        "id": "e-coin",
        "name": "E-coin",
        "symbol": "ECN"
    },
    "MXT": {
        "id": "martexcoin",
        "name": "MarteXcoin",
        "symbol": "MXT"
    },
    "IXT": {
        "id": "ixledger",
        "name": "iXledger",
        "symbol": "IXT"
    },
    "AEON": {
        "id": "aeon",
        "name": "Aeon",
        "symbol": "AEON"
    },
    "PST": {
        "id": "primas",
        "name": "Primas",
        "symbol": "PST"
    },
    "FLO": {
        "id": "florincoin",
        "name": "FlorinCoin",
        "symbol": "FLO"
    },
    "NET": {
        "id": "netcoin",
        "name": "NetCoin",
        "symbol": "NET"
    },
    "YBC": {
        "id": "ybcoin",
        "name": "YbCoin",
        "symbol": "YBC"
    },
    "XRB": {
        "id": "raiblocks",
        "name": "RaiBlocks",
        "symbol": "XRB"
    },
    "GAM": {
        "id": "gambit",
        "name": "Gambit",
        "symbol": "GAM"
    },
    "VOX": {
        "id": "voxels",
        "name": "Voxels",
        "symbol": "VOX"
    },
    "DTB": {
        "id": "databits",
        "name": "Databits",
        "symbol": "DTB"
    },
    "EDR": {
        "id": "e-dinar-coin",
        "name": "E-Dinar Coin",
        "symbol": "EDR"
    },
    "PZM": {
        "id": "prizm",
        "name": "PRIZM",
        "symbol": "PZM"
    },
    "XC": {
        "id": "xcurrency",
        "name": "XCurrency",
        "symbol": "XC"
    },
    "BCY": {
        "id": "bitcrystals",
        "name": "Bitcrystals",
        "symbol": "BCY"
    },
    "EMB": {
        "id": "embercoin",
        "name": "EmberCoin",
        "symbol": "EMB"
    },
    "BTX": {
        "id": "bitcointx",
        "name": "BitcoinTX",
        "symbol": "BTX"
    },
    "INCNT": {
        "id": "incent",
        "name": "Incent",
        "symbol": "INCNT"
    },
    "TIX": {
        "id": "tickets",
        "name": "Tickets",
        "symbol": "TIX"
    },
    "XBY": {
        "id": "xtrabytes",
        "name": "XTRABYTES",
        "symbol": "XBY"
    },
    "PINK": {
        "id": "pinkcoin",
        "name": "PinkCoin",
        "symbol": "PINK"
    },
    "XSPEC": {
        "id": "spectrecoin",
        "name": "Spectrecoin",
        "symbol": "XSPEC"
    },
    "MUSIC": {
        "id": "musicoin",
        "name": "Musicoin",
        "symbol": "MUSIC"
    },
    "EMC2": {
        "id": "einsteinium",
        "name": "Einsteinium",
        "symbol": "EMC2"
    },
    "BDL": {
        "id": "bitdeal",
        "name": "Bitdeal",
        "symbol": "BDL"
    },
    "TOA": {
        "id": "toacoin",
        "name": "ToaCoin",
        "symbol": "TOA"
    },
    "FTC": {
        "id": "feathercoin",
        "name": "Feathercoin",
        "symbol": "FTC"
    },
    "PLU": {
        "id": "pluton",
        "name": "Pluton",
        "symbol": "PLU"
    },
    "BET": {
        "id": "betacoin",
        "name": "BetaCoin",
        "symbol": "BET"
    },
    "SPHR": {
        "id": "sphere",
        "name": "Sphere",
        "symbol": "SPHR"
    },
    "CAT": {
        "id": "catcoin",
        "name": "Catcoin",
        "symbol": "CAT"
    },
    "DAXX": {
        "id": "daxxcoin",
        "name": "DaxxCoin",
        "symbol": "DAXX"
    },
    "PEPECASH": {
        "id": "pepe-cash",
        "name": "Pepe Cash",
        "symbol": "PEPECASH"
    },
    "HEAT": {
        "id": "heat-ledger",
        "name": "HEAT",
        "symbol": "HEAT"
    },
    "PDC": {
        "id": "project-decorum",
        "name": "Project Decorum",
        "symbol": "PDC"
    },
    "CRB": {
        "id": "creditbit",
        "name": "Creditbit",
        "symbol": "CRB"
    },
    "NOTE": {
        "id": "dnotes",
        "name": "DNotes",
        "symbol": "NOTE"
    },
    "TIPS": {
        "id": "fedoracoin",
        "name": "FedoraCoin",
        "symbol": "TIPS"
    },
    "XBC": {
        "id": "bitcoin-plus",
        "name": "Bitcoin Plus",
        "symbol": "XBC"
    },
    "SLR": {
        "id": "solarcoin",
        "name": "SolarCoin",
        "symbol": "SLR"
    },
    "APX": {
        "id": "apx",
        "name": "APX",
        "symbol": "APX"
    },
    "FLDC": {
        "id": "foldingcoin",
        "name": "FoldingCoin",
        "symbol": "FLDC"
    },
    "MYB": {
        "id": "mybit-token",
        "name": "MyBit Token",
        "symbol": "MYB"
    },
    "PASC": {
        "id": "pascal-coin",
        "name": "Pascal Coin",
        "symbol": "PASC"
    },
    "SEQ": {
        "id": "sequence",
        "name": "Sequence",
        "symbol": "SEQ"
    },
    "BLITZ": {
        "id": "blitzcash",
        "name": "Blitzcash",
        "symbol": "BLITZ"
    },
    "NVST": {
        "id": "nvo",
        "name": "NVO",
        "symbol": "NVST"
    },
    "BITB": {
        "id": "bitbean",
        "name": "BitBean",
        "symbol": "BITB"
    },
    "NVC": {
        "id": "novacoin",
        "name": "Novacoin",
        "symbol": "NVC"
    },
    "ABY": {
        "id": "applebyte",
        "name": "ArtByte",
        "symbol": "ABY"
    },
    "BSD": {
        "id": "bitsend",
        "name": "BitSend",
        "symbol": "BSD"
    },
    "UNY": {
        "id": "unity-ingot",
        "name": "Unity Ingot",
        "symbol": "UNY"
    },
    "AUR": {
        "id": "auroracoin",
        "name": "Auroracoin",
        "symbol": "AUR"
    },
    "DBIX": {
        "id": "dubaicoin-dbix",
        "name": "DubaiCoin",
        "symbol": "DBIX"
    },
    "THC": {
        "id": "hempcoin",
        "name": "HempCoin",
        "symbol": "THC"
    },
    "DENT": {
        "id": "dent",
        "name": "Dent",
        "symbol": "DENT"
    },
    "CURE": {
        "id": "curecoin",
        "name": "Curecoin",
        "symbol": "CURE"
    },
    "COVAL": {
        "id": "circuits-of-value",
        "name": "Circuits of Value",
        "symbol": "COVAL"
    },
    "TFL": {
        "id": "trueflip",
        "name": "TrueFlip",
        "symbol": "TFL"
    },
    "PUT": {
        "id": "putincoin",
        "name": "PutinCoin",
        "symbol": "PUT"
    },
    "BELA": {
        "id": "belacoin",
        "name": "Bela",
        "symbol": "BELA"
    },
    "DAR": {
        "id": "darcrus",
        "name": "Darcrus",
        "symbol": "DAR"
    },
    "QWARK": {
        "id": "qwark",
        "name": "Qwark",
        "symbol": "QWARK"
    },
    "EXCL": {
        "id": "exclusivecoin",
        "name": "ExclusiveCoin",
        "symbol": "EXCL"
    },
    "HTML5": {
        "id": "htmlcoin",
        "name": "HTMLCOIN",
        "symbol": "HTML5"
    },
    "GLD": {
        "id": "goldcoin",
        "name": "GoldCoin",
        "symbol": "GLD"
    },
    "NDC": {
        "id": "neverdie",
        "name": "NEVERDIE",
        "symbol": "NDC"
    },
    "DOPE": {
        "id": "dopecoin",
        "name": "DopeCoin",
        "symbol": "DOPE"
    },
    "RAIN": {
        "id": "condensate",
        "name": "Condensate",
        "symbol": "RAIN"
    },
    "KORE": {
        "id": "korecoin",
        "name": "KoreCoin",
        "symbol": "KORE"
    },
    "PBT": {
        "id": "primalbase",
        "name": "Primalbase Token",
        "symbol": "PBT"
    },
    "SWIFT": {
        "id": "bitswift",
        "name": "Bitswift",
        "symbol": "SWIFT"
    },
    "ERC": {
        "id": "europecoin",
        "name": "EuropeCoin",
        "symbol": "ERC"
    },
    "XPM": {
        "id": "primecoin",
        "name": "Primecoin",
        "symbol": "XPM"
    },
    "XST": {
        "id": "stealthcoin",
        "name": "Stealthcoin",
        "symbol": "XST"
    },
    "ETT": {
        "id": "encryptotel",
        "name": "EncryptoTel",
        "symbol": "ETT"
    },
    "PTC": {
        "id": "pesetacoin",
        "name": "Pesetacoin",
        "symbol": "PTC"
    },
    "NSR": {
        "id": "nushares",
        "name": "NuShares",
        "symbol": "NSR"
    },
    "JINN": {
        "id": "jinn",
        "name": "Jinn",
        "symbol": "JINN"
    },
    "BITUSD": {
        "id": "bitusd",
        "name": "bitUSD",
        "symbol": "BITUSD"
    },
    "GCR": {
        "id": "global-currency-reserve",
        "name": "Global Currency Reserve",
        "symbol": "GCR"
    },
    "ESP": {
        "id": "espers",
        "name": "Espers",
        "symbol": "ESP"
    },
    "SNC": {
        "id": "suncontract",
        "name": "SunContract",
        "symbol": "SNC"
    },
    "OCT": {
        "id": "oraclechain",
        "name": "OracleChain",
        "symbol": "OCT"
    },
    "NTRN": {
        "id": "neutron",
        "name": "Neutron",
        "symbol": "NTRN"
    },
    "GEO": {
        "id": "geocoin",
        "name": "GeoCoin",
        "symbol": "GEO"
    },
    "EQT": {
        "id": "equitrader",
        "name": "EquiTrader",
        "symbol": "EQT"
    },
    "OPT": {
        "id": "opus",
        "name": "Opus",
        "symbol": "OPT"
    },
    "SNRG": {
        "id": "synergy",
        "name": "Synergy",
        "symbol": "SNRG"
    },
    "SIGT": {
        "id": "signatum",
        "name": "Signatum",
        "symbol": "SIGT"
    },
    "ZRC": {
        "id": "zrcoin",
        "name": "ZrCoin",
        "symbol": "ZRC"
    },
    "MNE": {
        "id": "minereum",
        "name": "Minereum",
        "symbol": "MNE"
    },
    "SMLY": {
        "id": "smileycoin",
        "name": "SmileyCoin",
        "symbol": "SMLY"
    },
    "DYN": {
        "id": "dynamic",
        "name": "Dynamic",
        "symbol": "DYN"
    },
    "WBB": {
        "id": "wild-beast-block",
        "name": "Wild Beast Block",
        "symbol": "WBB"
    },
    "CMP": {
        "id": "compcoin",
        "name": "Compcoin",
        "symbol": "CMP"
    },
    "CV2": {
        "id": "colossuscoin-v2",
        "name": "Colossuscoin V2",
        "symbol": "CV2"
    },
    "ONION": {
        "id": "deeponion",
        "name": "DeepOnion",
        "symbol": "ONION"
    },
    "XMY": {
        "id": "myriad",
        "name": "Myriad",
        "symbol": "XMY"
    },
    "POSW": {
        "id": "posw-coin",
        "name": "PoSW Coin",
        "symbol": "POSW"
    },
    "SBD": {
        "id": "steem-dollars",
        "name": "Steem Dollars",
        "symbol": "SBD"
    },
    "ATMS": {
        "id": "atmos",
        "name": "Atmos",
        "symbol": "ATMS"
    },
    "HPC": {
        "id": "happycoin",
        "name": "Happycoin",
        "symbol": "HPC"
    },
    "ICOO": {
        "id": "ico-openledger",
        "name": "ICO OpenLedger",
        "symbol": "ICOO"
    },
    "BRX": {
        "id": "breakout-stake",
        "name": "Breakout Stake",
        "symbol": "BRX"
    },
    "ZEIT": {
        "id": "zeitcoin",
        "name": "Zeitcoin",
        "symbol": "ZEIT"
    },
    "DIME": {
        "id": "dimecoin",
        "name": "Dimecoin",
        "symbol": "DIME"
    },
    "MBRS": {
        "id": "embers",
        "name": "Embers",
        "symbol": "MBRS"
    },
    "LINDA": {
        "id": "linda",
        "name": "Linda",
        "symbol": "LINDA"
    },
    "CRAVE": {
        "id": "crave",
        "name": "Crave",
        "symbol": "CRAVE"
    },
    "ZCL": {
        "id": "zclassic",
        "name": "ZClassic",
        "symbol": "ZCL"
    },
    "SMART": {
        "id": "smartcash",
        "name": "SmartCash",
        "symbol": "SMART"
    },
    "CVCOIN": {
        "id": "cvcoin",
        "name": "CVCoin",
        "symbol": "CVCOIN"
    },
    "XWC": {
        "id": "whitecoin",
        "name": "WhiteCoin",
        "symbol": "XWC"
    },
    "VASH": {
        "id": "vpncoin",
        "name": "VPNCoin",
        "symbol": "VASH"
    },
    "EAC": {
        "id": "earthcoin",
        "name": "EarthCoin",
        "symbol": "EAC"
    },
    "BTA": {
        "id": "bata",
        "name": "Bata",
        "symbol": "BTA"
    },
    "EGC": {
        "id": "evergreencoin",
        "name": "EverGreenCoin",
        "symbol": "EGC"
    },
    "CANN": {
        "id": "cannabiscoin",
        "name": "CannabisCoin",
        "symbol": "CANN"
    },
    "TRC": {
        "id": "terracoin",
        "name": "Terracoin",
        "symbol": "TRC"
    },
    "VSM": {
        "id": "voise",
        "name": "VOISE",
        "symbol": "VSM"
    },
    "MINT": {
        "id": "mintcoin",
        "name": "Mintcoin",
        "symbol": "MINT"
    },
    "BRK": {
        "id": "breakout",
        "name": "Breakout",
        "symbol": "BRK"
    },
    "2GIVE": {
        "id": "2give",
        "name": "2GIVE",
        "symbol": "2GIVE"
    },
    "BLU": {
        "id": "bluecoin",
        "name": "BlueCoin",
        "symbol": "BLU"
    },
    "WTT": {
        "id": "giga-watt-token",
        "name": "Giga Watt Token",
        "symbol": "WTT"
    },
    "CHC": {
        "id": "chaincoin",
        "name": "ChainCoin",
        "symbol": "CHC"
    },
    "NAUT": {
        "id": "nautiluscoin",
        "name": "NautilusCoin",
        "symbol": "NAUT"
    },
    "ADZ": {
        "id": "adzcoin",
        "name": "Adzcoin",
        "symbol": "ADZ"
    },
    "SPRTS": {
        "id": "sprouts",
        "name": "Sprouts",
        "symbol": "SPRTS"
    },
    "XMG": {
        "id": "magi",
        "name": "Magi",
        "symbol": "XMG"
    },
    "MEME": {
        "id": "memetic",
        "name": "Memetic",
        "symbol": "MEME"
    },
    "DCN": {
        "id": "dentacoin",
        "name": "Dentacoin",
        "symbol": "DCN"
    },
    "VRM": {
        "id": "veriumreserve",
        "name": "VeriumReserve",
        "symbol": "VRM"
    },
    "ETBS": {
        "id": "ethbits",
        "name": "Ethbits",
        "symbol": "ETBS"
    },
    "CNT": {
        "id": "centurion",
        "name": "Centurion",
        "symbol": "CNT"
    },
    "LGD": {
        "id": "legends-room",
        "name": "Legends Room",
        "symbol": "LGD"
    },
    "ZENI": {
        "id": "zennies",
        "name": "Zennies",
        "symbol": "ZENI"
    },
    "SYNX": {
        "id": "syndicate",
        "name": "Syndicate",
        "symbol": "SYNX"
    },
    "PIE": {
        "id": "piecoin",
        "name": "PIECoin",
        "symbol": "PIE"
    },
    "STA": {
        "id": "starta",
        "name": "Starta",
        "symbol": "STA"
    },
    "XTO": {
        "id": "tao",
        "name": "Tao",
        "symbol": "XTO"
    },
    "TX": {
        "id": "transfercoin",
        "name": "TransferCoin",
        "symbol": "TX"
    },
    "XMCC": {
        "id": "monacocoin",
        "name": "MonacoCoin",
        "symbol": "XMCC"
    },
    "SKIN": {
        "id": "skincoin",
        "name": "SkinCoin",
        "symbol": "SKIN"
    },
    "IFC": {
        "id": "infinitecoin",
        "name": "Infinitecoin",
        "symbol": "IFC"
    },
    "REX": {
        "id": "real-estate-tokens",
        "name": "Real Estate Tokens",
        "symbol": "REX"
    },
    "QRK": {
        "id": "quark",
        "name": "Quark",
        "symbol": "QRK"
    },
    "MGC": {
        "id": "gulfcoin",
        "name": "GulfCoin",
        "symbol": "MGC"
    },
    "MEC": {
        "id": "megacoin",
        "name": "Megacoin",
        "symbol": "MEC"
    },
    "TKS": {
        "id": "tokes",
        "name": "Tokes",
        "symbol": "TKS"
    },
    "RIC": {
        "id": "riecoin",
        "name": "Riecoin",
        "symbol": "RIC"
    },
    "CREA": {
        "id": "creativecoin",
        "name": "Creativecoin",
        "symbol": "CREA"
    },
    "VISIO": {
        "id": "visio",
        "name": "Visio",
        "symbol": "VISIO"
    },
    "CCRB": {
        "id": "cryptocarbon",
        "name": "CryptoCarbon",
        "symbol": "CCRB"
    },
    "ADST": {
        "id": "adshares",
        "name": "AdShares",
        "symbol": "ADST"
    },
    "CBX": {
        "id": "cryptogenic-bullion",
        "name": "Crypto Bullion",
        "symbol": "CBX"
    },
    "WDC": {
        "id": "worldcoin",
        "name": "WorldCoin",
        "symbol": "WDC"
    },
    "VTR": {
        "id": "vtorrent",
        "name": "vTorrent",
        "symbol": "VTR"
    },
    "HUC": {
        "id": "huntercoin",
        "name": "HunterCoin",
        "symbol": "HUC"
    },
    "ADL": {
        "id": "adelphoi",
        "name": "Adelphoi",
        "symbol": "ADL"
    },
    "PING": {
        "id": "cryptoping",
        "name": "CryptoPing",
        "symbol": "PING"
    },
    "FUCK": {
        "id": "fucktoken",
        "name": "FuckToken",
        "symbol": "FUCK"
    },
    "TRUST": {
        "id": "trustplus",
        "name": "TrustPlus",
        "symbol": "TRUST"
    },
    "CPC": {
        "id": "capricoin",
        "name": "Capricoin",
        "symbol": "CPC"
    },
    "HYP": {
        "id": "hyperstake",
        "name": "HyperStake",
        "symbol": "HYP"
    },
    "ARC": {
        "id": "arcade-token",
        "name": "Arcade Token",
        "symbol": "ARC"
    },
    "PKB": {
        "id": "parkbyte",
        "name": "ParkByte",
        "symbol": "PKB"
    },
    "XCN": {
        "id": "cryptonite",
        "name": "Cryptonite",
        "symbol": "XCN"
    },
    "EFL": {
        "id": "e-gulden",
        "name": "e-Gulden",
        "symbol": "EFL"
    },
    "FNC": {
        "id": "fincoin",
        "name": "FinCoin",
        "symbol": "FNC"
    },
    "ALT": {
        "id": "altcoin-alt",
        "name": "Altcoin",
        "symbol": "ALT"
    },
    "START": {
        "id": "startcoin",
        "name": "Startcoin",
        "symbol": "START"
    },
    "INPAY": {
        "id": "inpay",
        "name": "InPay",
        "symbol": "INPAY"
    },
    "DDF": {
        "id": "digital-developers-fund",
        "name": "DigitalDevelopersFund",
        "symbol": "DDF"
    },
    "MAX": {
        "id": "maxcoin",
        "name": "MaxCoin",
        "symbol": "MAX"
    },
    "HUSH": {
        "id": "hush",
        "name": "Hush",
        "symbol": "HUSH"
    },
    "JNS": {
        "id": "janus",
        "name": "Janus",
        "symbol": "JNS"
    },
    "ADC": {
        "id": "audiocoin",
        "name": "AudioCoin",
        "symbol": "ADC"
    },
    "GRWI": {
        "id": "growers-international",
        "name": "Growers International",
        "symbol": "GRWI"
    },
    "EOT": {
        "id": "eot-token",
        "name": "EOT Token",
        "symbol": "EOT"
    },
    "DOT": {
        "id": "dotcoin",
        "name": "Dotcoin",
        "symbol": "DOT"
    },
    "B3": {
        "id": "b3coin",
        "name": "B3Coin",
        "symbol": "B3"
    },
    "ZCC": {
        "id": "zccoin",
        "name": "ZcCoin",
        "symbol": "ZCC"
    },
    "INSN": {
        "id": "insanecoin-insn",
        "name": "InsaneCoin",
        "symbol": "INSN"
    },
    "MBI": {
        "id": "monster-byte",
        "name": "Monster Byte",
        "symbol": "MBI"
    },
    "HNC": {
        "id": "huncoin",
        "name": "Huncoin",
        "symbol": "HNC"
    },
    "LDOGE": {
        "id": "litedoge",
        "name": "LiteDoge",
        "symbol": "LDOGE"
    },
    "TAG": {
        "id": "tagcoin",
        "name": "TagCoin",
        "symbol": "TAG"
    },
    "DRACO": {
        "id": "dt-token",
        "name": "DT Token",
        "symbol": "DRACO"
    },
    "BLOCKPAY": {
        "id": "blockpay",
        "name": "BlockPay",
        "symbol": "BLOCKPAY"
    },
    "CAGE": {
        "id": "cagecoin",
        "name": "CageCoin",
        "symbol": "CAGE"
    },
    "BYC": {
        "id": "bytecent",
        "name": "Bytecent",
        "symbol": "BYC"
    },
    "ENT": {
        "id": "eternity",
        "name": "Eternity",
        "symbol": "ENT"
    },
    "USNBT": {
        "id": "nubits",
        "name": "NuBits",
        "symbol": "USNBT"
    },
    "MER": {
        "id": "mercury",
        "name": "Mercury",
        "symbol": "MER"
    },
    "IFLT": {
        "id": "inflationcoin",
        "name": "InflationCoin",
        "symbol": "IFLT"
    },
    "INFX": {
        "id": "influxcoin",
        "name": "Influxcoin",
        "symbol": "INFX"
    },
    "SXC": {
        "id": "sexcoin",
        "name": "Sexcoin",
        "symbol": "SXC"
    },
    "PND": {
        "id": "pandacoin-pnd",
        "name": "Pandacoin",
        "symbol": "PND"
    },
    "STRC": {
        "id": "starcredits",
        "name": "StarCredits",
        "symbol": "STRC"
    },
    "RNS": {
        "id": "renos",
        "name": "Renos",
        "symbol": "RNS"
    },
    "XVS": {
        "id": "vsync",
        "name": "Vsync",
        "symbol": "XVS"
    },
    "KRS": {
        "id": "krypstal",
        "name": "Krypstal",
        "symbol": "KRS"
    },
    "XHI": {
        "id": "hicoin",
        "name": "HiCoin",
        "symbol": "XHI"
    },
    "NKA": {
        "id": "incakoin",
        "name": "IncaKoin",
        "symbol": "NKA"
    },
    "FST": {
        "id": "fastcoin",
        "name": "Fastcoin",
        "symbol": "FST"
    },
    "VIVO": {
        "id": "vivo",
        "name": "VIVO",
        "symbol": "VIVO"
    },
    "FCN": {
        "id": "fantomcoin",
        "name": "Fantomcoin",
        "symbol": "FCN"
    },
    "HERO": {
        "id": "sovereign-hero",
        "name": "Sovereign Hero",
        "symbol": "HERO"
    },
    "MRT": {
        "id": "miners-reward-token",
        "name": "Miners' Reward Token",
        "symbol": "MRT"
    },
    "NETKO": {
        "id": "netko",
        "name": "Netko",
        "symbol": "NETKO"
    },
    "BASH": {
        "id": "luckchain",
        "name": "LuckChain",
        "symbol": "BASH"
    },
    "BRO": {
        "id": "bitradio",
        "name": "Bitradio",
        "symbol": "BRO"
    },
    "EMP": {
        "id": "emoneypower",
        "name": "EMoneyPower",
        "symbol": "EMP"
    },
    "UIS": {
        "id": "unitus",
        "name": "Unitus",
        "symbol": "UIS"
    },
    "DNR": {
        "id": "denarius-dnr",
        "name": "Denarius",
        "symbol": "DNR"
    },
    "XVP": {
        "id": "virtacoinplus",
        "name": "Virtacoinplus",
        "symbol": "XVP"
    },
    "LINX": {
        "id": "linx",
        "name": "Linx",
        "symbol": "LINX"
    },
    "FIMK": {
        "id": "fimkrypto",
        "name": "FIMKrypto",
        "symbol": "FIMK"
    },
    "ZOI": {
        "id": "zoin",
        "name": "Zoin",
        "symbol": "ZOI"
    },
    "FJC": {
        "id": "fujicoin",
        "name": "FujiCoin",
        "symbol": "FJC"
    },
    "XP": {
        "id": "xp",
        "name": "XP",
        "symbol": "XP"
    },
    "EBST": {
        "id": "eboostcoin",
        "name": "eBoost",
        "symbol": "EBST"
    },
    "KEK": {
        "id": "kekcoin",
        "name": "KekCoin",
        "symbol": "KEK"
    },
    "UNIFY": {
        "id": "unify",
        "name": "Unify",
        "symbol": "UNIFY"
    },
    "BUN": {
        "id": "bunnycoin",
        "name": "BunnyCoin",
        "symbol": "BUN"
    },
    "MOIN": {
        "id": "moin",
        "name": "Moin",
        "symbol": "MOIN"
    },
    "ITI": {
        "id": "iticoin",
        "name": "iTicoin",
        "symbol": "ITI"
    },
    "CRM": {
        "id": "cream",
        "name": "Cream",
        "symbol": "CRM"
    },
    "DAS": {
        "id": "das",
        "name": "DAS",
        "symbol": "DAS"
    },
    "RMC": {
        "id": "remicoin",
        "name": "Remicoin",
        "symbol": "RMC"
    },
    "UNB": {
        "id": "unbreakablecoin",
        "name": "UnbreakableCoin",
        "symbol": "UNB"
    },
    "XCXT": {
        "id": "coinonatx",
        "name": "CoinonatX",
        "symbol": "XCXT"
    },
    "PROC": {
        "id": "procurrency",
        "name": "ProCurrency",
        "symbol": "PROC"
    },
    "OCL": {
        "id": "oceanlab",
        "name": "Oceanlab",
        "symbol": "OCL"
    },
    "ZET": {
        "id": "zetacoin",
        "name": "Zetacoin",
        "symbol": "ZET"
    },
    "DFT": {
        "id": "draftcoin",
        "name": "DraftCoin",
        "symbol": "DFT"
    },
    "NEWB": {
        "id": "newbium",
        "name": "Newbium",
        "symbol": "NEWB"
    },
    "XTC": {
        "id": "tilecoin",
        "name": "TileCoin",
        "symbol": "XTC"
    },
    "KRB": {
        "id": "karbowanec",
        "name": "Karbowanec",
        "symbol": "KRB"
    },
    "RBIES": {
        "id": "rubies",
        "name": "Rubies",
        "symbol": "RBIES"
    },
    "BTB": {
        "id": "bitbar",
        "name": "BitBar",
        "symbol": "BTB"
    },
    "RLT": {
        "id": "roulettetoken",
        "name": "RouletteToken",
        "symbol": "RLT"
    },
    "WOMEN": {
        "id": "women",
        "name": "WomenCoin",
        "symbol": "WOMEN"
    },
    "ECA": {
        "id": "electra",
        "name": "Electra",
        "symbol": "ECA"
    },
    "8BIT": {
        "id": "8bit",
        "name": "8Bit",
        "symbol": "8BIT"
    },
    "POST": {
        "id": "postcoin",
        "name": "PostCoin",
        "symbol": "POST"
    },
    "BAS": {
        "id": "bitasean",
        "name": "BitAsean",
        "symbol": "BAS"
    },
    "TRUMP": {
        "id": "trumpcoin",
        "name": "TrumpCoin",
        "symbol": "TRUMP"
    },
    "SCORE": {
        "id": "scorecoin",
        "name": "Scorecoin",
        "symbol": "SCORE"
    },
    "V": {
        "id": "version",
        "name": "Version",
        "symbol": "V"
    },
    "ZER": {
        "id": "zero",
        "name": "Zero",
        "symbol": "ZER"
    },
    "ATOM": {
        "id": "atomic-coin",
        "name": "Atomic Coin",
        "symbol": "ATOM"
    },
    "BITS": {
        "id": "bitstar",
        "name": "Bitstar",
        "symbol": "BITS"
    },
    "GCN": {
        "id": "gcoin",
        "name": "GCoin",
        "symbol": "GCN"
    },
    "PXC": {
        "id": "phoenixcoin",
        "name": "Phoenixcoin",
        "symbol": "PXC"
    },
    "DEM": {
        "id": "deutsche-emark",
        "name": "Deutsche eMark",
        "symbol": "DEM"
    },
    "SUMO": {
        "id": "sumokoin",
        "name": "Sumokoin",
        "symbol": "SUMO"
    },
    "MAC": {
        "id": "machinecoin",
        "name": "Machinecoin",
        "symbol": "MAC"
    },
    "FXE": {
        "id": "futurexe",
        "name": "FuturXe",
        "symbol": "FXE"
    },
    "BITBTC": {
        "id": "bitbtc",
        "name": "bitBTC",
        "symbol": "BITBTC"
    },
    "NYC": {
        "id": "newyorkcoin",
        "name": "NewYorkCoin",
        "symbol": "NYC"
    },
    "EL": {
        "id": "elcoin-el",
        "name": "Elcoin",
        "symbol": "EL"
    },
    "FLAX": {
        "id": "flaxscript",
        "name": "Flaxscript",
        "symbol": "FLAX"
    },
    "ONX": {
        "id": "onix",
        "name": "Onix",
        "symbol": "ONX"
    },
    "ZUR": {
        "id": "zurcoin",
        "name": "Zurcoin",
        "symbol": "ZUR"
    },
    "FRN": {
        "id": "francs",
        "name": "Francs",
        "symbol": "FRN"
    },
    "BITSILVER": {
        "id": "bitsilver",
        "name": "bitSilver",
        "symbol": "BITSILVER"
    },
    "GCC": {
        "id": "guccionecoin",
        "name": "GuccioneCoin",
        "symbol": "GCC"
    },
    "ICE": {
        "id": "idice",
        "name": "iDice",
        "symbol": "ICE"
    },
    "DALC": {
        "id": "dalecoin",
        "name": "Dalecoin",
        "symbol": "DALC"
    },
    "YOC": {
        "id": "yocoin",
        "name": "Yocoin",
        "symbol": "YOC"
    },
    "CNC": {
        "id": "chncoin",
        "name": "CHNCoin",
        "symbol": "CNC"
    },
    "MNM": {
        "id": "mineum",
        "name": "Mineum",
        "symbol": "MNM"
    },
    "MAO": {
        "id": "mao-zedong",
        "name": "Mao Zedong",
        "symbol": "MAO"
    },
    "RBX": {
        "id": "ripto-bux",
        "name": "Ripto Bux",
        "symbol": "RBX"
    },
    "GPU": {
        "id": "gpu-coin",
        "name": "GPU Coin",
        "symbol": "GPU"
    },
    "USDE": {
        "id": "usde",
        "name": "USDe",
        "symbol": "USDE"
    },
    "GB": {
        "id": "goldblocks",
        "name": "GoldBlocks",
        "symbol": "GB"
    },
    "MSCN": {
        "id": "master-swiscoin",
        "name": "Master Swiscoin",
        "symbol": "MSCN"
    },
    "CNNC": {
        "id": "cannation",
        "name": "Cannation",
        "symbol": "CNNC"
    },
    "CMPCO": {
        "id": "campuscoin",
        "name": "CampusCoin",
        "symbol": "CMPCO"
    },
    "TEK": {
        "id": "tekcoin",
        "name": "TEKcoin",
        "symbol": "TEK"
    },
    "BITEUR": {
        "id": "biteur",
        "name": "bitEUR",
        "symbol": "BITEUR"
    },
    "VC": {
        "id": "virtualcoin",
        "name": "VirtualCoin",
        "symbol": "VC"
    },
    "CJ": {
        "id": "cryptojacks",
        "name": "Cryptojacks",
        "symbol": "CJ"
    },
    "PASL": {
        "id": "pascal-lite",
        "name": "Pascal Lite",
        "symbol": "PASL"
    },
    "CORG": {
        "id": "corgicoin",
        "name": "CorgiCoin",
        "symbol": "CORG"
    },
    "MOJO": {
        "id": "mojocoin",
        "name": "MojoCoin",
        "symbol": "MOJO"
    },
    "PRC": {
        "id": "prcoin",
        "name": "PRCoin",
        "symbol": "PRC"
    },
    "XLR": {
        "id": "solaris",
        "name": "Solaris",
        "symbol": "XLR"
    },
    "XCT": {
        "id": "c-bit",
        "name": "C-Bit",
        "symbol": "XCT"
    },
    "KLC": {
        "id": "kilocoin",
        "name": "KiloCoin",
        "symbol": "KLC"
    },
    "BOAT": {
        "id": "doubloon",
        "name": "Doubloon",
        "symbol": "BOAT"
    },
    "BLAS": {
        "id": "blakestar",
        "name": "BlakeStar",
        "symbol": "BLAS"
    },
    "4CHN": {
        "id": "chancoin",
        "name": "ChanCoin",
        "symbol": "4CHN"
    },
    "ZNY": {
        "id": "bitzeny",
        "name": "Bitzeny",
        "symbol": "ZNY"
    },
    "ECO": {
        "id": "ecocoin",
        "name": "EcoCoin",
        "symbol": "ECO"
    },
    "STV": {
        "id": "sativacoin",
        "name": "Sativacoin",
        "symbol": "STV"
    },
    "MCRN": {
        "id": "macron",
        "name": "MACRON",
        "symbol": "MCRN"
    },
    "CREVA": {
        "id": "crevacoin",
        "name": "CrevaCoin",
        "symbol": "CREVA"
    },
    "PHO": {
        "id": "photon",
        "name": "Photon",
        "symbol": "PHO"
    },
    "MND": {
        "id": "mindcoin",
        "name": "MindCoin",
        "symbol": "MND"
    },
    "ICON": {
        "id": "iconic",
        "name": "Iconic",
        "symbol": "ICON"
    },
    "CWXT": {
        "id": "cryptoworldx-token",
        "name": "CryptoWorldX Token",
        "symbol": "CWXT"
    },
    "WBC": {
        "id": "wallet-builders-coin",
        "name": "WalletBuildersCoin",
        "symbol": "WBC"
    },
    "PLNC": {
        "id": "plncoin",
        "name": "PLNcoin",
        "symbol": "PLNC"
    },
    "ERY": {
        "id": "eryllium",
        "name": "Eryllium",
        "symbol": "ERY"
    },
    "VRS": {
        "id": "veros",
        "name": "Veros",
        "symbol": "VRS"
    },
    "IMX": {
        "id": "impact",
        "name": "Impact",
        "symbol": "IMX"
    },
    "LTCU": {
        "id": "litecoin-ultra",
        "name": "LiteCoin Ultra",
        "symbol": "LTCU"
    },
    "LCP": {
        "id": "litecoin-plus",
        "name": "Litecoin Plus",
        "symbol": "LCP"
    },
    "FRAZ": {
        "id": "frazcoin",
        "name": "Frazcoin",
        "symbol": "FRAZ"
    },
    "APW": {
        "id": "applecoin-apw",
        "name": "AppleCoin",
        "symbol": "APW"
    },
    "BRIA": {
        "id": "briacoin",
        "name": "BriaCoin",
        "symbol": "BRIA"
    },
    "420G": {
        "id": "ganjacoin",
        "name": "GanjaCoin",
        "symbol": "420G"
    },
    "MGM": {
        "id": "magnum",
        "name": "Magnum",
        "symbol": "MGM"
    },
    "LVPS": {
        "id": "levoplus",
        "name": "LevoPlus",
        "symbol": "LVPS"
    },
    "LBTC": {
        "id": "litebitcoin",
        "name": "LiteBitcoin",
        "symbol": "LBTC"
    },
    "EBT": {
        "id": "ebittree-coin",
        "name": "Ebittree Coin",
        "symbol": "EBT"
    },
    "ARGUS": {
        "id": "argus",
        "name": "Argus",
        "symbol": "ARGUS"
    },
    "HMC": {
        "id": "harmonycoin-hmc",
        "name": "HarmonyCoin",
        "symbol": "HMC"
    },
    "ENV": {
        "id": "environ",
        "name": "Environ",
        "symbol": "ENV"
    },
    "XEN": {
        "id": "xenixcoin",
        "name": "Xenixcoin",
        "symbol": "XEN"
    },
    "EB3": {
        "id": "eb3-coin",
        "name": "EB3 Coin",
        "symbol": "EB3"
    },
    "B@": {
        "id": "bankcoin",
        "name": "Bankcoin",
        "symbol": "B@"
    },
    "ICO": {
        "id": "ico",
        "name": "ICO",
        "symbol": "ICO"
    },
    "STCN": {
        "id": "stakecoin-stcn",
        "name": "Stakecoin",
        "symbol": "STCN"
    },
    "AC": {
        "id": "asiacoin",
        "name": "AsiaCoin",
        "symbol": "AC"
    },
    "CADASTRAL": {
        "id": "bitland",
        "name": "Bitland",
        "symbol": "CADASTRAL"
    },
    "PANGEA": {
        "id": "pangea-poker",
        "name": "Pangea Poker",
        "symbol": "PANGEA"
    },
    "LNK": {
        "id": "link-platform",
        "name": "Link Platform",
        "symbol": "LNK"
    },
    "BPC": {
        "id": "bitpark-coin",
        "name": "Bitpark Coin",
        "symbol": "BPC"
    },
    "YASH": {
        "id": "yashcoin",
        "name": "YashCoin",
        "symbol": "YASH"
    },
    "FYN": {
        "id": "fundyourselfnow",
        "name": "FundYourselfNow",
        "symbol": "FYN"
    },
    "IXC": {
        "id": "ixcoin",
        "name": "Ixcoin",
        "symbol": "IXC"
    },
    "GRE": {
        "id": "greencoin",
        "name": "Greencoin",
        "symbol": "GRE"
    },
    "CRYPT": {
        "id": "cryptcoin",
        "name": "CryptCoin",
        "symbol": "CRYPT"
    },
    "USC": {
        "id": "ultimate-secure-cash",
        "name": "Ultimate Secure Cash",
        "symbol": "USC"
    },
    "HTC": {
        "id": "hitcoin",
        "name": "HitCoin",
        "symbol": "HTC"
    },
    "RUSTBITS": {
        "id": "rustbits",
        "name": "Rustbits",
        "symbol": "RUSTBITS"
    },
    "LTBC": {
        "id": "ltbcoin",
        "name": "LTBcoin",
        "symbol": "LTBC"
    },
    "RIYA": {
        "id": "etheriya",
        "name": "Etheriya",
        "symbol": "RIYA"
    },
    "LOG": {
        "id": "woodcoin",
        "name": "Woodcoin",
        "symbol": "LOG"
    },
    "OTX": {
        "id": "octanox",
        "name": "Octanox",
        "symbol": "OTX"
    },
    "CASINO": {
        "id": "casino",
        "name": "Casino",
        "symbol": "CASINO"
    },
    "SDC": {
        "id": "shadowcash",
        "name": "ShadowCash",
        "symbol": "SDC"
    },
    "CARBON": {
        "id": "carboncoin",
        "name": "Carboncoin",
        "symbol": "CARBON"
    },
    "METAL": {
        "id": "metalcoin",
        "name": "MetalCoin",
        "symbol": "METAL"
    },
    "BITZ": {
        "id": "bitz",
        "name": "Bitz",
        "symbol": "BITZ"
    },
    "CDN": {
        "id": "canada-ecoin",
        "name": "Canada eCoin",
        "symbol": "CDN"
    },
    "CSC": {
        "id": "casinocoin",
        "name": "CasinoCoin",
        "symbol": "CSC"
    },
    "FUNC": {
        "id": "funcoin",
        "name": "FUNCoin",
        "symbol": "FUNC"
    },
    "NOBL": {
        "id": "noblecoin",
        "name": "NobleCoin",
        "symbol": "NOBL"
    },
    "WGO": {
        "id": "wavesgo",
        "name": "WavesGo",
        "symbol": "WGO"
    },
    "DVC": {
        "id": "devcoin",
        "name": "Devcoin",
        "symbol": "DVC"
    },
    "DCY": {
        "id": "dinastycoin",
        "name": "Dinastycoin",
        "symbol": "DCY"
    },
    "SUPER": {
        "id": "supercoin",
        "name": "SuperCoin",
        "symbol": "SUPER"
    },
    "GLC": {
        "id": "globalcoin",
        "name": "GlobalCoin",
        "symbol": "GLC"
    },
    "FUNK": {
        "id": "the-cypherfunks",
        "name": "The Cypherfunks",
        "symbol": "FUNK"
    },
    "SHDW": {
        "id": "shadow-token",
        "name": "Shadow Token",
        "symbol": "SHDW"
    },
    "KOBO": {
        "id": "kobocoin",
        "name": "Kobocoin",
        "symbol": "KOBO"
    },
    "SHORTY": {
        "id": "shorty",
        "name": "Shorty",
        "symbol": "SHORTY"
    },
    "ORB": {
        "id": "orbitcoin",
        "name": "Orbitcoin",
        "symbol": "ORB"
    },
    "TES": {
        "id": "teslacoin",
        "name": "TeslaCoin",
        "symbol": "TES"
    },
    "RAREPEPEP": {
        "id": "rare-pepe-party",
        "name": "Rare Pepe Party",
        "symbol": "RAREPEPEP"
    },
    "BTSR": {
        "id": "btsr",
        "name": "BTSR",
        "symbol": "BTSR"
    },
    "DSH": {
        "id": "dashcoin",
        "name": "Dashcoin",
        "symbol": "DSH"
    },
    "TALK": {
        "id": "btctalkcoin",
        "name": "BTCtalkcoin",
        "symbol": "TALK"
    },
    "CNO": {
        "id": "coin",
        "name": "Coin(O)",
        "symbol": "CNO"
    },
    "UTC": {
        "id": "ultracoin",
        "name": "UltraCoin",
        "symbol": "UTC"
    },
    "FC2": {
        "id": "fuelcoin",
        "name": "FuelCoin",
        "symbol": "FC2"
    },
    "COE": {
        "id": "coeval",
        "name": "CoEval",
        "symbol": "COE"
    },
    "VUC": {
        "id": "virta-unique-coin",
        "name": "Virta Unique Coin",
        "symbol": "VUC"
    },
    "RC": {
        "id": "russiacoin",
        "name": "RussiaCoin",
        "symbol": "RC"
    },
    "TROLL": {
        "id": "trollcoin",
        "name": "Trollcoin",
        "symbol": "TROLL"
    },
    "I0C": {
        "id": "i0coin",
        "name": "I0Coin",
        "symbol": "I0C"
    },
    "MZC": {
        "id": "mazacoin",
        "name": "MazaCoin",
        "symbol": "MZC"
    },
    "GAIA": {
        "id": "gaia",
        "name": "GAIA",
        "symbol": "GAIA"
    },
    "PIGGY": {
        "id": "piggycoin",
        "name": "Piggycoin",
        "symbol": "PIGGY"
    },
    "VLT": {
        "id": "veltor",
        "name": "Veltor",
        "symbol": "VLT"
    },
    "020": {
        "id": "o2olondoncoin",
        "name": "020LondonCoin",
        "symbol": "020"
    },
    "AMBER": {
        "id": "ambercoin",
        "name": "AmberCoin",
        "symbol": "AMBER"
    },
    "STS": {
        "id": "stress",
        "name": "Stress",
        "symbol": "STS"
    },
    "ANC": {
        "id": "anoncoin",
        "name": "Anoncoin",
        "symbol": "ANC"
    },
    "CCN": {
        "id": "cannacoin",
        "name": "Cannacoin",
        "symbol": "CCN"
    },
    "UFO": {
        "id": "ufo-coin",
        "name": "UFO Coin",
        "symbol": "UFO"
    },
    "GOOD": {
        "id": "goodomy",
        "name": "Goodomy",
        "symbol": "GOOD"
    },
    "PAK": {
        "id": "pakcoin",
        "name": "Pakcoin",
        "symbol": "PAK"
    },
    "MALC": {
        "id": "malcoin",
        "name": "Malcoin",
        "symbol": "MALC"
    },
    "CFT": {
        "id": "cryptoforecast",
        "name": "CryptoForecast",
        "symbol": "CFT"
    },
    "REE": {
        "id": "reecoin",
        "name": "ReeCoin",
        "symbol": "REE"
    },
    "E4ROW": {
        "id": "ether-for-the-rest-of-the-world",
        "name": "E4ROW",
        "symbol": "E4ROW"
    },
    "BRIT": {
        "id": "britcoin",
        "name": "BritCoin",
        "symbol": "BRIT"
    },
    "TRK": {
        "id": "truckcoin",
        "name": "Truckcoin",
        "symbol": "TRK"
    },
    "FLY": {
        "id": "flycoin",
        "name": "Flycoin",
        "symbol": "FLY"
    },
    "LOT": {
        "id": "lottocoin",
        "name": "LottoCoin",
        "symbol": "LOT"
    },
    "XJO": {
        "id": "joulecoin",
        "name": "Joulecoin",
        "symbol": "XJO"
    },
    "SMC": {
        "id": "smartcoin",
        "name": "SmartCoin",
        "symbol": "SMC"
    },
    "UNIC": {
        "id": "unicoin",
        "name": "UniCoin",
        "symbol": "UNIC"
    },
    "LANA": {
        "id": "lanacoin",
        "name": "LanaCoin",
        "symbol": "LANA"
    },
    "TIT": {
        "id": "titcoin",
        "name": "Titcoin",
        "symbol": "TIT"
    },
    "HODL": {
        "id": "hodlcoin",
        "name": "HOdlcoin",
        "symbol": "HODL"
    },
    "FLT": {
        "id": "fluttercoin",
        "name": "FlutterCoin",
        "symbol": "FLT"
    },
    "BITGOLD": {
        "id": "bitgold",
        "name": "bitGold",
        "symbol": "BITGOLD"
    },
    "TRI": {
        "id": "triangles",
        "name": "Triangles",
        "symbol": "TRI"
    },
    "CAP": {
        "id": "bottlecaps",
        "name": "Bottlecaps",
        "symbol": "CAP"
    },
    "BOST": {
        "id": "boostcoin",
        "name": "BoostCoin",
        "symbol": "BOST"
    },
    "VIDZ": {
        "id": "purevidz",
        "name": "PureVidz",
        "symbol": "VIDZ"
    },
    "SLM": {
        "id": "slimcoin",
        "name": "Slimcoin",
        "symbol": "SLM"
    },
    "MTM": {
        "id": "mtmgaming",
        "name": "MTMGaming",
        "symbol": "MTM"
    },
    "XPTX": {
        "id": "platinumbar",
        "name": "PlatinumBAR",
        "symbol": "XPTX"
    },
    "XRA": {
        "id": "ratecoin",
        "name": "Ratecoin",
        "symbol": "XRA"
    },
    "EMD": {
        "id": "emerald",
        "name": "Emerald Crypto",
        "symbol": "EMD"
    },
    "JET": {
        "id": "jetcoin",
        "name": "Jetcoin",
        "symbol": "JET"
    },
    "VAL": {
        "id": "valorbit",
        "name": "Valorbit",
        "symbol": "VAL"
    },
    "BTWTY": {
        "id": "bit20",
        "name": "Bit20",
        "symbol": "BTWTY"
    },
    "XPY": {
        "id": "paycoin2",
        "name": "PayCoin",
        "symbol": "XPY"
    },
    "Q2C": {
        "id": "qubitcoin",
        "name": "QubitCoin",
        "symbol": "Q2C"
    },
    "UNI": {
        "id": "universe",
        "name": "Universe",
        "symbol": "UNI"
    },
    "JIN": {
        "id": "jin-coin",
        "name": "Jin Coin",
        "symbol": "JIN"
    },
    "AU": {
        "id": "aurumcoin",
        "name": "AurumCoin",
        "symbol": "AU"
    },
    "PR": {
        "id": "prototanium",
        "name": "Prototanium",
        "symbol": "PR"
    },
    "PSB": {
        "id": "pesobit",
        "name": "Pesobit",
        "symbol": "PSB"
    },
    "EUC": {
        "id": "eurocoin",
        "name": "Eurocoin",
        "symbol": "EUC"
    },
    "CON": {
        "id": "paycon",
        "name": "PayCon",
        "symbol": "CON"
    },
    "CHESS": {
        "id": "chesscoin",
        "name": "ChessCoin",
        "symbol": "CHESS"
    },
    "KIC": {
        "id": "kibicoin",
        "name": "KibiCoin",
        "symbol": "KIC"
    },
    "CYP": {
        "id": "cypher",
        "name": "Cypher",
        "symbol": "CYP"
    },
    "YAC": {
        "id": "yacoin",
        "name": "Yacoin",
        "symbol": "YAC"
    },
    "DUO": {
        "id": "parallelcoin",
        "name": "ParallelCoin",
        "symbol": "DUO"
    },
    "BXT": {
        "id": "bittokens",
        "name": "BitTokens",
        "symbol": "BXT"
    },
    "WAY": {
        "id": "wayguide",
        "name": "WayGuide",
        "symbol": "WAY"
    },
    "BTCS": {
        "id": "bitcoin-scrypt",
        "name": "Bitcoin Scrypt",
        "symbol": "BTCS"
    },
    "BSTY": {
        "id": "globalboost-y",
        "name": "GlobalBoost-Y",
        "symbol": "BSTY"
    },
    "ACOIN": {
        "id": "acoin",
        "name": "Acoin",
        "symbol": "ACOIN"
    },
    "SWING": {
        "id": "swing",
        "name": "Swing",
        "symbol": "SWING"
    },
    "OHM": {
        "id": "ohm-wallet",
        "name": "OHM",
        "symbol": "OHM"
    },
    "TGC": {
        "id": "tigercoin",
        "name": "Tigercoin",
        "symbol": "TGC"
    },
    "HKG": {
        "id": "hacker-gold",
        "name": "Hacker Gold",
        "symbol": "HKG"
    },
    "FRC": {
        "id": "freicoin",
        "name": "Freicoin",
        "symbol": "FRC"
    },
    "BLC": {
        "id": "blakecoin",
        "name": "Blakecoin",
        "symbol": "BLC"
    },
    "XPD": {
        "id": "petrodollar",
        "name": "PetroDollar",
        "symbol": "XPD"
    },
    "SPEX": {
        "id": "sproutsextreme",
        "name": "SproutsExtreme",
        "symbol": "SPEX"
    },
    "XGR": {
        "id": "goldreserve",
        "name": "GoldReserve",
        "symbol": "XGR"
    },
    "BBP": {
        "id": "biblepay",
        "name": "BiblePay",
        "symbol": "BBP"
    },
    "KUSH": {
        "id": "kushcoin",
        "name": "KushCoin",
        "symbol": "KUSH"
    },
    "HMP": {
        "id": "hempcoin-hmp",
        "name": "HempCoin",
        "symbol": "HMP"
    },
    "BUCKS": {
        "id": "swagbucks",
        "name": "SwagBucks",
        "symbol": "BUCKS"
    },
    "BTCR": {
        "id": "bitcurrency",
        "name": "Bitcurrency",
        "symbol": "BTCR"
    },
    "CACH": {
        "id": "cachecoin",
        "name": "CacheCoin",
        "symbol": "CACH"
    },
    "ELE": {
        "id": "elementrem",
        "name": "Elementrem",
        "symbol": "ELE"
    },
    "C2": {
        "id": "coin2-1",
        "name": "Coin2.1",
        "symbol": "C2"
    },
    "NYAN": {
        "id": "nyancoin",
        "name": "Nyancoin",
        "symbol": "NYAN"
    },
    "SAC": {
        "id": "sacoin",
        "name": "SACoin",
        "symbol": "SAC"
    },
    "PX": {
        "id": "px",
        "name": "PX",
        "symbol": "PX"
    },
    "TTC": {
        "id": "tittiecoin",
        "name": "TittieCoin",
        "symbol": "TTC"
    },
    "KED": {
        "id": "darsek",
        "name": "Darsek",
        "symbol": "KED"
    },
    "UNITS": {
        "id": "gameunits",
        "name": "GameUnits",
        "symbol": "UNITS"
    },
    "DGC": {
        "id": "digitalcoin",
        "name": "Digitalcoin",
        "symbol": "DGC"
    },
    "CUBE": {
        "id": "digicube",
        "name": "DigiCube",
        "symbol": "CUBE"
    },
    "QCN": {
        "id": "quazarcoin",
        "name": "QuazarCoin",
        "symbol": "QCN"
    },
    "VEC2": {
        "id": "vector",
        "name": "Vector",
        "symbol": "VEC2"
    },
    "GRT": {
        "id": "grantcoin",
        "name": "Grantcoin",
        "symbol": "GRT"
    },
    "BERN": {
        "id": "berncash",
        "name": "BERNcash",
        "symbol": "BERN"
    },
    "SLG": {
        "id": "sterlingcoin",
        "name": "Sterlingcoin",
        "symbol": "SLG"
    },
    "J": {
        "id": "joincoin",
        "name": "Joincoin",
        "symbol": "J"
    },
    "BOLI": {
        "id": "bolivarcoin",
        "name": "Bolivarcoin",
        "symbol": "BOLI"
    },
    "MILO": {
        "id": "milocoin",
        "name": "MiloCoin",
        "symbol": "MILO"
    },
    "XRE": {
        "id": "revolvercoin",
        "name": "RevolverCoin",
        "symbol": "XRE"
    },
    "XBTC21": {
        "id": "bitcoin-21",
        "name": "Bitcoin 21",
        "symbol": "XBTC21"
    },
    "HONEY": {
        "id": "honey",
        "name": "Honey",
        "symbol": "HONEY"
    },
    "PXI": {
        "id": "prime-xi",
        "name": "Prime-XI",
        "symbol": "PXI"
    },
    "BIGUP": {
        "id": "bigup",
        "name": "BigUp",
        "symbol": "BIGUP"
    },
    "PUTIC": {
        "id": "putin-classic",
        "name": "Putin Classic",
        "symbol": "PUTIC"
    },
    "ICOB": {
        "id": "icobid",
        "name": "ICOBID",
        "symbol": "ICOB"
    },
    "MAD": {
        "id": "satoshimadness",
        "name": "SatoshiMadness",
        "symbol": "MAD"
    },
    "EVIL": {
        "id": "evil-coin",
        "name": "Evil Coin",
        "symbol": "EVIL"
    },
    "UNIBURST": {
        "id": "uniburst",
        "name": "UniBURST",
        "symbol": "UNIBURST"
    },
    "GUN": {
        "id": "guncoin",
        "name": "Guncoin",
        "symbol": "GUN"
    },
    "SPACE": {
        "id": "spacecoin",
        "name": "SpaceCoin",
        "symbol": "SPACE"
    },
    "ARCO": {
        "id": "aquariuscoin",
        "name": "AquariusCoin",
        "symbol": "ARCO"
    },
    "SOIL": {
        "id": "soilcoin",
        "name": "SOILcoin",
        "symbol": "SOIL"
    },
    "RBT": {
        "id": "rimbit",
        "name": "Rimbit",
        "symbol": "RBT"
    },
    "DLC": {
        "id": "dollarcoin",
        "name": "Dollarcoin",
        "symbol": "DLC"
    },
    "SCRT": {
        "id": "secretcoin",
        "name": "SecretCoin",
        "symbol": "SCRT"
    },
    "RUP": {
        "id": "rupee",
        "name": "Rupee",
        "symbol": "RUP"
    },
    "FRK": {
        "id": "franko",
        "name": "Franko",
        "symbol": "FRK"
    },
    "SLING": {
        "id": "sling",
        "name": "Sling",
        "symbol": "SLING"
    },
    "DRM": {
        "id": "dreamcoin",
        "name": "Dreamcoin",
        "symbol": "DRM"
    },
    "RED": {
        "id": "redcoin",
        "name": "RedCoin",
        "symbol": "RED"
    },
    "ARI": {
        "id": "aricoin",
        "name": "Aricoin",
        "symbol": "ARI"
    },
    "MAR": {
        "id": "marijuanacoin",
        "name": "Marijuanacoin",
        "symbol": "MAR"
    },
    "RUPX": {
        "id": "rupaya",
        "name": "Rupaya",
        "symbol": "RUPX"
    },
    "URC": {
        "id": "unrealcoin",
        "name": "Unrealcoin",
        "symbol": "URC"
    },
    "KURT": {
        "id": "kurrent",
        "name": "Kurrent",
        "symbol": "KURT"
    },
    "QTL": {
        "id": "quatloo",
        "name": "Quatloo",
        "symbol": "QTL"
    },
    "MAY": {
        "id": "theresa-may-coin",
        "name": "Theresa May Coin",
        "symbol": "MAY"
    },
    "MEOW": {
        "id": "kittehcoin",
        "name": "Kittehcoin",
        "symbol": "MEOW"
    },
    "IMS": {
        "id": "independent-money-system",
        "name": "Independent Money System",
        "symbol": "IMS"
    },
    "BUMBA": {
        "id": "bumbacoin",
        "name": "BumbaCoin",
        "symbol": "BUMBA"
    },
    "GTC": {
        "id": "global-tour-coin",
        "name": "Global Tour Coin",
        "symbol": "GTC"
    },
    "U": {
        "id": "ucoin",
        "name": "UCoin",
        "symbol": "U"
    },
    "SPT": {
        "id": "spots",
        "name": "Spots",
        "symbol": "SPT"
    },
    "SOJ": {
        "id": "sojourn",
        "name": "Sojourn",
        "symbol": "SOJ"
    },
    "DIBC": {
        "id": "dibcoin",
        "name": "DIBCOIN",
        "symbol": "DIBC"
    },
    "PHS": {
        "id": "philosopher-stones",
        "name": "Philosopher Stones",
        "symbol": "PHS"
    },
    "BIP": {
        "id": "bipcoin",
        "name": "BipCoin",
        "symbol": "BIP"
    },
    "LTB": {
        "id": "litebar",
        "name": "LiteBar",
        "symbol": "LTB"
    },
    "$$$": {
        "id": "money",
        "name": "Money",
        "symbol": "$$$"
    },
    "ASAFE2": {
        "id": "allsafe",
        "name": "AllSafe",
        "symbol": "ASAFE2"
    },
    "XCO": {
        "id": "x-coin",
        "name": "X-Coin",
        "symbol": "XCO"
    },
    "CXT": {
        "id": "coinonat",
        "name": "Coinonat",
        "symbol": "CXT"
    },
    "CRX": {
        "id": "chronos",
        "name": "Chronos",
        "symbol": "CRX"
    },
    "ANTI": {
        "id": "antibitcoin",
        "name": "AntiBitcoin",
        "symbol": "ANTI"
    },
    "GPL": {
        "id": "gold-pressed-latinum",
        "name": "Gold Pressed Latinum",
        "symbol": "GPL"
    },
    "TSE": {
        "id": "tattoocoin",
        "name": "Tattoocoin (Standard Edition)",
        "symbol": "TSE"
    },
    "BCF": {
        "id": "bitcoinfast",
        "name": "BitcoinFast",
        "symbol": "BCF"
    },
    "VIP": {
        "id": "vip-tokens",
        "name": "VIP Tokens",
        "symbol": "VIP"
    },
    "EVO": {
        "id": "evotion",
        "name": "Evotion",
        "symbol": "EVO"
    },
    "DBTC": {
        "id": "debitcoin",
        "name": "Debitcoin",
        "symbol": "DBTC"
    },
    "MARS": {
        "id": "marscoin",
        "name": "Marscoin",
        "symbol": "MARS"
    },
    "ADCN": {
        "id": "asiadigicoin",
        "name": "Asiadigicoin",
        "symbol": "ADCN"
    },
    "CPN": {
        "id": "compucoin",
        "name": "CompuCoin",
        "symbol": "CPN"
    },
    "CTO": {
        "id": "crypto",
        "name": "Crypto",
        "symbol": "CTO"
    },
    "ALL": {
        "id": "allion",
        "name": "Allion",
        "symbol": "ALL"
    },
    "ARG": {
        "id": "argentum",
        "name": "Argentum",
        "symbol": "ARG"
    },
    "HAL": {
        "id": "halcyon",
        "name": "Halcyon",
        "symbol": "HAL"
    },
    "BSTAR": {
        "id": "blackstar",
        "name": "Blackstar",
        "symbol": "BSTAR"
    },
    "AGLC": {
        "id": "agrolifecoin",
        "name": "AgrolifeCoin",
        "symbol": "AGLC"
    },
    "UET": {
        "id": "useless-ethereum-token",
        "name": "Useless Ethereum Token",
        "symbol": "UET"
    },
    "GAP": {
        "id": "gapcoin",
        "name": "Gapcoin",
        "symbol": "GAP"
    },
    "BLRY": {
        "id": "billarycoin",
        "name": "BillaryCoin",
        "symbol": "BLRY"
    },
    "PONZI": {
        "id": "ponzicoin",
        "name": "PonziCoin",
        "symbol": "PONZI"
    },
    "FIRE": {
        "id": "firecoin",
        "name": "Firecoin",
        "symbol": "FIRE"
    },
    "NEVA": {
        "id": "nevacoin",
        "name": "NevaCoin",
        "symbol": "NEVA"
    },
    "WMC": {
        "id": "wmcoin",
        "name": "WMCoin",
        "symbol": "WMC"
    },
    "WYV": {
        "id": "wyvern",
        "name": "Wyvern",
        "symbol": "WYV"
    },
    "ARB": {
        "id": "arbit",
        "name": "ARbit",
        "symbol": "ARB"
    },
    "DES": {
        "id": "destiny",
        "name": "Destiny",
        "symbol": "DES"
    },
    "BTPL": {
        "id": "bitcoin-planet",
        "name": "Bitcoin Planet",
        "symbol": "BTPL"
    },
    "WORM": {
        "id": "healthywormcoin",
        "name": "HealthyWormCoin",
        "symbol": "WORM"
    },
    "UNIT": {
        "id": "universal-currency",
        "name": "Universal Currency",
        "symbol": "UNIT"
    },
    "GBC": {
        "id": "gbcgoldcoin",
        "name": "GBCGoldCoin",
        "symbol": "GBC"
    },
    "ISL": {
        "id": "islacoin",
        "name": "IslaCoin",
        "symbol": "ISL"
    },
    "DRS": {
        "id": "digital-rupees",
        "name": "Digital Rupees",
        "symbol": "DRS"
    },
    "BVC": {
        "id": "beavercoin",
        "name": "BeaverCoin",
        "symbol": "BVC"
    },
    "URO": {
        "id": "uro",
        "name": "Uro",
        "symbol": "URO"
    },
    "BIOS": {
        "id": "bios-crypto",
        "name": "BiosCrypto",
        "symbol": "BIOS"
    },
    "RPC": {
        "id": "ronpaulcoin",
        "name": "RonPaulCoin",
        "symbol": "RPC"
    },
    "SOON": {
        "id": "sooncoin",
        "name": "SoonCoin",
        "symbol": "SOON"
    },
    "MI": {
        "id": "xiaomicoin",
        "name": "Xiaomicoin",
        "symbol": "MI"
    },
    "TSTR": {
        "id": "tristar-coin",
        "name": "Tristar Coin",
        "symbol": "TSTR"
    },
    "HXX": {
        "id": "hexx",
        "name": "Hexx",
        "symbol": "HXX"
    },
    "STEPS": {
        "id": "steps",
        "name": "Steps",
        "symbol": "STEPS"
    },
    "LEA": {
        "id": "leacoin",
        "name": "LeaCoin",
        "symbol": "LEA"
    },
    "PULSE": {
        "id": "pulse",
        "name": "Pulse",
        "symbol": "PULSE"
    },
    "G3N": {
        "id": "genstake",
        "name": "G3N",
        "symbol": "G3N"
    },
    "CESC": {
        "id": "cryptoescudo",
        "name": "CryptoEscudo",
        "symbol": "CESC"
    },
    "JWL": {
        "id": "jewels",
        "name": "Jewels",
        "symbol": "JWL"
    },
    "BNX": {
        "id": "bnrtxcoin",
        "name": "BnrtxCoin",
        "symbol": "BNX"
    },
    "MST": {
        "id": "mustangcoin",
        "name": "MustangCoin",
        "symbol": "MST"
    },
    "ZYD": {
        "id": "zayedcoin",
        "name": "Zayedcoin",
        "symbol": "ZYD"
    },
    "SRC": {
        "id": "securecoin",
        "name": "SecureCoin",
        "symbol": "SRC"
    },
    "XBTS": {
        "id": "beatcoin",
        "name": "Beatcoin",
        "symbol": "XBTS"
    },
    "XCRE": {
        "id": "creatio",
        "name": "Creatio",
        "symbol": "XCRE"
    },
    "POP": {
        "id": "popularcoin",
        "name": "PopularCoin",
        "symbol": "POP"
    },
    "GP": {
        "id": "goldpay-coin",
        "name": "Goldpay Coin",
        "symbol": "GP"
    },
    "QBK": {
        "id": "qibuck-asset",
        "name": "Qibuck Asset",
        "symbol": "QBK"
    },
    "VPRC": {
        "id": "vaperscoin",
        "name": "VapersCoin",
        "symbol": "VPRC"
    },
    "TAGR": {
        "id": "tagrcoin",
        "name": "TAGRcoin",
        "symbol": "TAGR"
    },
    "MTLMC3": {
        "id": "metal-music-coin",
        "name": "Metal Music Coin",
        "symbol": "MTLMC3"
    },
    "VTA": {
        "id": "virtacoin",
        "name": "Virtacoin",
        "symbol": "VTA"
    },
    "WARP": {
        "id": "warp",
        "name": "WARP",
        "symbol": "WARP"
    },
    "GBT": {
        "id": "gamebet-coin",
        "name": "GameBet Coin",
        "symbol": "GBT"
    },
    "DIX": {
        "id": "dix-asset",
        "name": "Dix Asset",
        "symbol": "DIX"
    },
    "OFF": {
        "id": "cthulhu-offerings",
        "name": "Cthulhu Offerings",
        "symbol": "OFF"
    },
    "ATX": {
        "id": "artex-coin",
        "name": "Artex Coin",
        "symbol": "ATX"
    },
    "RIDE": {
        "id": "ride-my-car",
        "name": "Ride My Car",
        "symbol": "RIDE"
    },
    "CAB": {
        "id": "cabbage",
        "name": "Cabbage",
        "symbol": "CAB"
    },
    "BENJI": {
        "id": "benjirolls",
        "name": "BenjiRolls",
        "symbol": "BENJI"
    },
    "TOR": {
        "id": "torcoin-tor",
        "name": "Torcoin",
        "symbol": "TOR"
    },
    "GLT": {
        "id": "globaltoken",
        "name": "GlobalToken",
        "symbol": "GLT"
    },
    "IBANK": {
        "id": "ibank",
        "name": "iBank",
        "symbol": "IBANK"
    },
    "DPAY": {
        "id": "dpay",
        "name": "DPAY",
        "symbol": "DPAY"
    },
    "SOCC": {
        "id": "socialcoin-socc",
        "name": "SocialCoin",
        "symbol": "SOCC"
    },
    "BQC": {
        "id": "bbqcoin",
        "name": "BBQCoin",
        "symbol": "BQC"
    },
    "SONG": {
        "id": "songcoin",
        "name": "SongCoin",
        "symbol": "SONG"
    },
    "ORLY": {
        "id": "orlycoin",
        "name": "Orlycoin",
        "symbol": "ORLY"
    },
    "KNC": {
        "id": "kingn-coin",
        "name": "KingN Coin",
        "symbol": "KNC"
    },
    "DLISK": {
        "id": "dappster",
        "name": "DAPPSTER",
        "symbol": "DLISK"
    },
    "BTQ": {
        "id": "bitquark",
        "name": "BitQuark",
        "symbol": "BTQ"
    },
    "HVCO": {
        "id": "high-voltage",
        "name": "High Voltage",
        "symbol": "HVCO"
    },
    "ZMC": {
        "id": "zetamicron",
        "name": "ZetaMicron",
        "symbol": "ZMC"
    },
    "TRADE2": {
        "id": "tradecoin-v2",
        "name": "TradecoinV2",
        "symbol": "TRADE2"
    },
    "FLVR": {
        "id": "flavorcoin",
        "name": "FlavorCoin",
        "symbol": "FLVR"
    },
    "PRX": {
        "id": "printerium",
        "name": "Printerium",
        "symbol": "PRX"
    },
    "ACP": {
        "id": "anarchistsprime",
        "name": "AnarchistsPrime",
        "symbol": "ACP"
    },
    "BLZ": {
        "id": "blazecoin",
        "name": "BlazeCoin",
        "symbol": "BLZ"
    },
    "NRO": {
        "id": "neuro",
        "name": "Neuro",
        "symbol": "NRO"
    },
    "DOLLAR": {
        "id": "dollar-online",
        "name": "Dollar Online",
        "symbol": "DOLLAR"
    },
    "OS76": {
        "id": "osmiumcoin",
        "name": "OsmiumCoin",
        "symbol": "OS76"
    },
    "TAJ": {
        "id": "tajcoin",
        "name": "TajCoin",
        "symbol": "TAJ"
    },
    "CMT": {
        "id": "comet",
        "name": "Comet",
        "symbol": "CMT"
    },
    "PEX": {
        "id": "posex",
        "name": "PosEx",
        "symbol": "PEX"
    },
    "LIR": {
        "id": "letitride",
        "name": "LetItRide",
        "symbol": "LIR"
    },
    "BIOB": {
        "id": "biobar",
        "name": "BioBar",
        "symbol": "BIOB"
    },
    "KRONE": {
        "id": "kronecoin",
        "name": "Kronecoin",
        "symbol": "KRONE"
    },
    "VLTC": {
        "id": "vault-coin",
        "name": "Vault Coin",
        "symbol": "VLTC"
    },
    "COAL": {
        "id": "bitcoal",
        "name": "BitCoal",
        "symbol": "COAL"
    },
    "AMMO": {
        "id": "ammo-rewards",
        "name": "Ammo Rewards",
        "symbol": "AMMO"
    },
    "CCM100": {
        "id": "ccminer",
        "name": "CCMiner",
        "symbol": "CCM100"
    },
    "LUNA": {
        "id": "luna-coin",
        "name": "Luna Coin",
        "symbol": "LUNA"
    },
    "SFC": {
        "id": "solarflarecoin",
        "name": "Solarflarecoin",
        "symbol": "SFC"
    },
    "XOC": {
        "id": "xonecoin",
        "name": "Xonecoin",
        "symbol": "XOC"
    },
    "FUZZ": {
        "id": "fuzzballs",
        "name": "FuzzBalls",
        "symbol": "FUZZ"
    },
    "ZNE": {
        "id": "zonecoin",
        "name": "Zonecoin",
        "symbol": "ZNE"
    },
    "SH": {
        "id": "shilling",
        "name": "Shilling",
        "symbol": "SH"
    },
    "LTCR": {
        "id": "litecred",
        "name": "Litecred",
        "symbol": "LTCR"
    },
    "SANDG": {
        "id": "save-and-gain",
        "name": "Save and Gain",
        "symbol": "SANDG"
    },
    "CRT": {
        "id": "crtcoin",
        "name": "CRTCoin",
        "symbol": "CRT"
    },
    "IMPS": {
        "id": "impulsecoin",
        "name": "ImpulseCoin",
        "symbol": "IMPS"
    },
    "BSC": {
        "id": "bowscoin",
        "name": "BowsCoin",
        "symbol": "BSC"
    },
    "EGO": {
        "id": "ego",
        "name": "EGO",
        "symbol": "EGO"
    },
    "CASH": {
        "id": "cashcoin",
        "name": "Cashcoin",
        "symbol": "CASH"
    },
    "DRAGON": {
        "id": "btcdragon",
        "name": "BTCDragon",
        "symbol": "DRAGON"
    },
    "WEX": {
        "id": "wexcoin",
        "name": "Wexcoin",
        "symbol": "WEX"
    },
    "RSGP": {
        "id": "rsgpcoin",
        "name": "RSGPcoin",
        "symbol": "RSGP"
    },
    "CTIC2": {
        "id": "coimatic-2",
        "name": "Coimatic 2.0",
        "symbol": "CTIC2"
    },
    "CONX": {
        "id": "concoin",
        "name": "Concoin",
        "symbol": "CONX"
    },
    "JOBS": {
        "id": "jobscoin",
        "name": "JobsCoin",
        "symbol": "JOBS"
    },
    "LEX": {
        "id": "lex4all",
        "name": "Lex4All",
        "symbol": "LEX"
    },
    "SLEVIN": {
        "id": "slevin",
        "name": "Slevin",
        "symbol": "SLEVIN"
    },
    "OCEAN": {
        "id": "burstocean",
        "name": "BurstOcean",
        "symbol": "OCEAN"
    },
    "ALTC": {
        "id": "antilitecoin",
        "name": "Antilitecoin",
        "symbol": "ALTC"
    },
    "SDP": {
        "id": "sydpak",
        "name": "SydPak",
        "symbol": "SDP"
    },
    "GEERT": {
        "id": "geertcoin",
        "name": "GeertCoin",
        "symbol": "GEERT"
    },
    "VOLT": {
        "id": "bitvolt",
        "name": "Bitvolt",
        "symbol": "VOLT"
    },
    "1CR": {
        "id": "1credit",
        "name": "1CRedit",
        "symbol": "1CR"
    },
    "REV": {
        "id": "revenu",
        "name": "Revenu",
        "symbol": "REV"
    },
    "SCS": {
        "id": "speedcash",
        "name": "Speedcash",
        "symbol": "SCS"
    },
    "MNC": {
        "id": "mantracoin",
        "name": "MantraCoin",
        "symbol": "MNC"
    },
    "XRC": {
        "id": "rawcoin2",
        "name": "Rawcoin",
        "symbol": "XRC"
    },
    "NODC": {
        "id": "nodecoin",
        "name": "NodeCoin",
        "symbol": "NODC"
    },
    "P7C": {
        "id": "p7coin",
        "name": "P7Coin",
        "symbol": "P7C"
    },
    "JIO": {
        "id": "jio-token",
        "name": "JIO Token",
        "symbol": "JIO"
    },
    "SLFI": {
        "id": "selfiecoin",
        "name": "Selfiecoin",
        "symbol": "SLFI"
    },
    "XNG": {
        "id": "enigma",
        "name": "Enigma",
        "symbol": "XNG"
    },
    "ABN": {
        "id": "abncoin",
        "name": "Abncoin",
        "symbol": "ABN"
    },
    "CF": {
        "id": "californium",
        "name": "Californium",
        "symbol": "CF"
    },
    "ELS": {
        "id": "elysium",
        "name": "Elysium",
        "symbol": "ELS"
    },
    "MUG": {
        "id": "mikethemug",
        "name": "MikeTheMug",
        "symbol": "MUG"
    },
    "FDC": {
        "id": "future-digital-currency",
        "name": "Future Digital Currency",
        "symbol": "FDC"
    },
    "PWR": {
        "id": "powercoin",
        "name": "Powercoin",
        "symbol": "PWR"
    },
    "PIZZA": {
        "id": "pizzacoin",
        "name": "PizzaCoin",
        "symbol": "PIZZA"
    },
    "TOKEN": {
        "id": "swaptoken",
        "name": "SwapToken",
        "symbol": "TOKEN"
    },
    "DGCS": {
        "id": "digital-credits",
        "name": "Digital Credits",
        "symbol": "DGCS"
    },
    "DMB": {
        "id": "digital-money-bits",
        "name": "Digital Money Bits",
        "symbol": "DMB"
    },
    "CALC": {
        "id": "caliphcoin",
        "name": "CaliphCoin",
        "symbol": "CALC"
    },
    "FEDS": {
        "id": "fedorashare",
        "name": "FedoraShare",
        "symbol": "FEDS"
    },
    "INF": {
        "id": "infchain",
        "name": "InfChain",
        "symbol": "INF"
    },
    "DMC": {
        "id": "dynamiccoin",
        "name": "DynamicCoin",
        "symbol": "DMC"
    },
    "HVN": {
        "id": "hive",
        "name": "Hive",
        "symbol": "HVN"
    },
    "FRGC": {
        "id": "fargocoin",
        "name": "Fargocoin",
        "symbol": "FRGC"
    },
    "MDA": {
        "id": "moeda-loyalty-points",
        "name": "Moeda Loyalty Points",
        "symbol": "MDA"
    },
    "ABC": {
        "id": "alphabitcoinfund",
        "name": "Alphabit",
        "symbol": "ABC"
    },
    "DRXNE": {
        "id": "droxne",
        "name": "DROXNE",
        "symbol": "DRXNE"
    },
    "MCAP": {
        "id": "mcap",
        "name": "MCAP",
        "symbol": "MCAP"
    },
    "CTR": {
        "id": "centra",
        "name": "Centra",
        "symbol": "CTR"
    },
    "THS": {
        "id": "techshares",
        "name": "TechShares",
        "symbol": "THS"
    },
    "PURA": {
        "id": "pura",
        "name": "Pura",
        "symbol": "PURA"
    },
    "ULA": {
        "id": "ulatech",
        "name": "Ulatech",
        "symbol": "ULA"
    },
    "AVT": {
        "id": "aventus",
        "name": "Aventus",
        "symbol": "AVT"
    },
    "SIGMA": {
        "id": "sigmacoin",
        "name": "SIGMAcoin",
        "symbol": "SIGMA"
    },
    "BGC": {
        "id": "bagcoin",
        "name": "BagCoin",
        "symbol": "BGC"
    },
    "XID": {
        "id": "international-diamond",
        "name": "International Diamond",
        "symbol": "XID"
    },
    "HLB": {
        "id": "lepaoquan",
        "name": "Lepaoquan",
        "symbol": "HLB"
    },
    "TER": {
        "id": "terranova",
        "name": "TerraNova",
        "symbol": "TER"
    },
    "AXF": {
        "id": "axfunds",
        "name": "AxFunds",
        "symbol": "AXF"
    },
    "DEUS": {
        "id": "deuscoin",
        "name": "DeusCoin",
        "symbol": "DEUS"
    },
    "TRX": {
        "id": "tronix",
        "name": "Tronix",
        "symbol": "TRX"
    },
    "BUZZ": {
        "id": "buzzcoin",
        "name": "BuzzCoin",
        "symbol": "BUZZ"
    },
    "FAL": {
        "id": "falcoin",
        "name": "Falcoin",
        "symbol": "FAL"
    },
    "SJCX": {
        "id": "storjcoin-x",
        "name": "Storjcoin X",
        "symbol": "SJCX"
    },
    "NDAO": {
        "id": "neurodao",
        "name": "NeuroDAO",
        "symbol": "NDAO"
    },
    "IOP": {
        "id": "internet-of-people",
        "name": "Internet of People",
        "symbol": "IOP"
    },
    "AURS": {
        "id": "aureus",
        "name": "Aureus",
        "symbol": "AURS"
    },
    "GBG": {
        "id": "golos-gold",
        "name": "Golos Gold",
        "symbol": "GBG"
    },
    "MBL": {
        "id": "mobilecash",
        "name": "MobileCash",
        "symbol": "MBL"
    },
    "CREDO": {
        "id": "credo",
        "name": "Credo",
        "symbol": "CREDO"
    },
    "AMS": {
        "id": "amsterdamcoin",
        "name": "AmsterdamCoin",
        "symbol": "AMS"
    },
    "BITCF": {
        "id": "first-bitcoin-capital",
        "name": "First Bitcoin Capital",
        "symbol": "BITCF"
    },
    "CLUB": {
        "id": "clubcoin",
        "name": "ClubCoin",
        "symbol": "CLUB"
    },
    "ASC": {
        "id": "asiccoin",
        "name": "AsicCoin",
        "symbol": "ASC"
    },
    "BQ": {
        "id": "bitqy",
        "name": "bitqy",
        "symbol": "BQ"
    },
    "WA": {
        "id": "wa-space",
        "name": "WA Space",
        "symbol": "WA"
    },
    "UGT": {
        "id": "ug-token",
        "name": "UG Token",
        "symbol": "UGT"
    },
    "FC": {
        "id": "facecoin",
        "name": "Facecoin",
        "symbol": "FC"
    },
    "TERA": {
        "id": "teracoin",
        "name": "TeraCoin",
        "symbol": "TERA"
    },
    "OX": {
        "id": "ox-fina",
        "name": "OX Fina",
        "symbol": "OX"
    },
    "YOYOW": {
        "id": "yoyow",
        "name": "YOYOW",
        "symbol": "YOYOW"
    },
    "APC": {
        "id": "alpacoin",
        "name": "AlpaCoin",
        "symbol": "APC"
    },
    "RUBIT": {
        "id": "rublebit",
        "name": "RubleBit",
        "symbol": "RUBIT"
    },
    "MTNC": {
        "id": "masternodecoin",
        "name": "Masternodecoin",
        "symbol": "MTNC"
    },
    "DP": {
        "id": "digitalprice",
        "name": "DigitalPrice",
        "symbol": "DP"
    },
    "ATMC": {
        "id": "atmcoin",
        "name": "ATMCoin",
        "symbol": "ATMC"
    },
    "BTU": {
        "id": "bitcoin-unlimited",
        "name": "Bitcoin Unlimited (Futures)",
        "symbol": "BTU"
    },
    "ZBC": {
        "id": "zilbercoin",
        "name": "Zilbercoin",
        "symbol": "ZBC"
    },
    "BTDX": {
        "id": "bitcloud",
        "name": "Bitcloud",
        "symbol": "BTDX"
    },
    "TYCHO": {
        "id": "tychocoin",
        "name": "Tychocoin",
        "symbol": "TYCHO"
    },
    "PCS": {
        "id": "pabyosi-coin-special",
        "name": "Pabyosi Coin (Special)",
        "symbol": "PCS"
    },
    "BLX": {
        "id": "blockchain-index",
        "name": "Blockchain Index",
        "symbol": "BLX"
    },
    "BRAT": {
        "id": "brat",
        "name": "BRAT",
        "symbol": "BRAT"
    },
    "SMOKE": {
        "id": "smoke",
        "name": "Smoke",
        "symbol": "SMOKE"
    },
    "FID": {
        "id": "bitfid",
        "name": "BITFID",
        "symbol": "FID"
    },
    "VOYA": {
        "id": "voyacoin",
        "name": "Voyacoin",
        "symbol": "VOYA"
    },
    "NAMO": {
        "id": "namocoin",
        "name": "NamoCoin",
        "symbol": "NAMO"
    },
    "MAGN": {
        "id": "magnetcoin",
        "name": "Magnetcoin",
        "symbol": "MAGN"
    },
    "MG": {
        "id": "mind-gene",
        "name": "Mind Gene",
        "symbol": "MG"
    },
    "BITOK": {
        "id": "bitok",
        "name": "Bitok",
        "symbol": "BITOK"
    },
    "FEI": {
        "id": "fuda-energy",
        "name": "Fuda Energy",
        "symbol": "FEI"
    },
    "ANTX": {
        "id": "antimatter",
        "name": "Antimatter",
        "symbol": "ANTX"
    },
    "DTF": {
        "id": "digitalfund",
        "name": "Digitalfund",
        "symbol": "DTF"
    },
    "ASN": {
        "id": "aseancoin",
        "name": "Aseancoin",
        "symbol": "ASN"
    },
    "SUR": {
        "id": "suretly",
        "name": "Suretly",
        "symbol": "SUR"
    },
    "VSX": {
        "id": "vsync-vsx",
        "name": "Vsync",
        "symbol": "VSX"
    },
    "XOT": {
        "id": "internet-of-things",
        "name": "Internet of Things",
        "symbol": "XOT"
    },
    "PAC": {
        "id": "paccoin",
        "name": "Paccoin",
        "symbol": "PAC"
    },
    "HBC": {
        "id": "hbcoin",
        "name": "HBCoin",
        "symbol": "HBC"
    },
    "TLE": {
        "id": "tattoocoin-limited",
        "name": "Tattoocoin (Limited Edition)",
        "symbol": "TLE"
    },
    "XLC": {
        "id": "leviarcoin",
        "name": "LeviarCoin",
        "symbol": "XLC"
    },
    "PRES": {
        "id": "president-trump",
        "name": "President Trump",
        "symbol": "PRES"
    },
    "NXX": {
        "id": "nexxus",
        "name": "Nexxus",
        "symbol": "NXX"
    },
    "PEC": {
        "id": "peacecoin",
        "name": "Peacecoin",
        "symbol": "PEC"
    },
    "SAK": {
        "id": "sharkcoin",
        "name": "Sharkcoin",
        "symbol": "SAK"
    },
    "VEN": {
        "id": "vechain",
        "name": "VeChain",
        "symbol": "VEN"
    },
    "ACN": {
        "id": "avoncoin",
        "name": "Avoncoin",
        "symbol": "ACN"
    },
    "GARY": {
        "id": "president-johnson",
        "name": "President Johnson",
        "symbol": "GARY"
    },
    "SHND": {
        "id": "stronghands",
        "name": "StrongHands",
        "symbol": "SHND"
    },
    "TELL": {
        "id": "tellurion",
        "name": "Tellurion",
        "symbol": "TELL"
    },
    "GAY": {
        "id": "gaycoin",
        "name": "GAY Money",
        "symbol": "GAY"
    },
    "UNRC": {
        "id": "universalroyalcoin",
        "name": "UniversalRoyalCoin",
        "symbol": "UNRC"
    },
    "ACES": {
        "id": "aces",
        "name": "Aces",
        "symbol": "ACES"
    },
    "TESLA": {
        "id": "teslacoilcoin",
        "name": "TeslaCoilCoin",
        "symbol": "TESLA"
    },
    "CYDER": {
        "id": "cyder",
        "name": "Cyder",
        "symbol": "CYDER"
    },
    "ZENGOLD": {
        "id": "zengold",
        "name": "ZenGold",
        "symbol": "ZENGOLD"
    },
    "PAYP": {
        "id": "paypeer",
        "name": "PayPeer",
        "symbol": "PAYP"
    },
    "SNAKE": {
        "id": "snakeeyes",
        "name": "SnakeEyes",
        "symbol": "SNAKE"
    },
    "BLN": {
        "id": "bolenum",
        "name": "Bolenum",
        "symbol": "BLN"
    },
    "PRN": {
        "id": "protean",
        "name": "Protean",
        "symbol": "PRN"
    },
    "GYC": {
        "id": "gycoin",
        "name": "Gycoin",
        "symbol": "GYC"
    },
    "NANOX": {
        "id": "project-x",
        "name": "Project-X",
        "symbol": "NANOX"
    },
    "LDCN": {
        "id": "landcoin",
        "name": "LandCoin",
        "symbol": "LDCN"
    },
    "HCC": {
        "id": "health-care-chain",
        "name": "Health Care Chain",
        "symbol": "HCC"
    },
    "TCOIN": {
        "id": "t-coin",
        "name": "T-coin",
        "symbol": "TCOIN"
    },
    "RHFC": {
        "id": "rhfcoin",
        "name": "RHFCoin",
        "symbol": "RHFC"
    },
    "FRWC": {
        "id": "frankywillcoin",
        "name": "FrankyWillCoin",
        "symbol": "FRWC"
    },
    "ANI": {
        "id": "animecoin",
        "name": "Animecoin",
        "symbol": "ANI"
    },
    "SKULL": {
        "id": "pirate-blocks",
        "name": "Pirate Blocks",
        "symbol": "SKULL"
    },
    "RBBT": {
        "id": "rabbitcoin",
        "name": "RabbitCoin",
        "symbol": "RBBT"
    },
    "FFC": {
        "id": "fireflycoin",
        "name": "FireFlyCoin",
        "symbol": "FFC"
    },
    "LEPEN": {
        "id": "lepen",
        "name": "LePen",
        "symbol": "LEPEN"
    },
    "FLASH": {
        "id": "flash",
        "name": "Flash",
        "symbol": "FLASH"
    },
    "MIU": {
        "id": "miyucoin",
        "name": "MIYUCoin",
        "symbol": "MIU"
    },
    "UNC": {
        "id": "uncoin",
        "name": "UNCoin",
        "symbol": "UNC"
    },
    "OPES": {
        "id": "opescoin",
        "name": "Opescoin",
        "symbol": "OPES"
    },
    "TYC": {
        "id": "tyrocoin",
        "name": "Tyrocoin",
        "symbol": "TYC"
    },
    "HALLO": {
        "id": "halloween-coin",
        "name": "Halloween Coin",
        "symbol": "HALLO"
    },
    "FAZZ": {
        "id": "fazzcoin",
        "name": "Fazzcoin",
        "symbol": "FAZZ"
    },
    "ACC": {
        "id": "adcoin",
        "name": "AdCoin",
        "symbol": "ACC"
    },
    "NTCC": {
        "id": "neptune-classic",
        "name": "Neptune Classic",
        "symbol": "NTCC"
    },
    "MOTO": {
        "id": "motocoin",
        "name": "Motocoin",
        "symbol": "MOTO"
    },
    "EDRC": {
        "id": "edrcoin",
        "name": "EDRCoin",
        "symbol": "EDRC"
    },
    "RICHX": {
        "id": "richcoin",
        "name": "RichCoin",
        "symbol": "RICHX"
    },
    "XQN": {
        "id": "quotient",
        "name": "Quotient",
        "symbol": "XQN"
    },
    "RYCN": {
        "id": "royalcoin-2",
        "name": "RoyalCoin 2",
        "symbol": "RYCN"
    },
    "UR": {
        "id": "ur",
        "name": "UR",
        "symbol": "UR"
    },
    "BRAIN": {
        "id": "braincoin",
        "name": "Braincoin",
        "symbol": "BRAIN"
    },
    "WOW": {
        "id": "wowcoin",
        "name": "Wowcoin",
        "symbol": "WOW"
    },
    "AV": {
        "id": "avatarcoin",
        "name": "AvatarCoin",
        "symbol": "AV"
    },
    "9COIN": {
        "id": "9coin",
        "name": "9COIN",
        "symbol": "9COIN"
    },
    "FBC": {
        "id": "fibocoins",
        "name": "FiboCoins",
        "symbol": "FBC"
    },
    "MARX": {
        "id": "marxcoin",
        "name": "MarxCoin",
        "symbol": "MARX"
    },
    "XBG": {
        "id": "btcgold",
        "name": "BTCGold",
        "symbol": "XBG"
    },
    "BIRDS": {
        "id": "birds",
        "name": "Birds",
        "symbol": "BIRDS"
    },
    "BXC": {
        "id": "bitcedi",
        "name": "Bitcedi",
        "symbol": "BXC"
    },
    "MEN": {
        "id": "peoplecoin",
        "name": "PeopleCoin",
        "symbol": "MEN"
    },
    "LAZ": {
        "id": "lazaruscoin",
        "name": "Lazaruscoin",
        "symbol": "LAZ"
    },
    "ROYAL": {
        "id": "royalcoin",
        "name": "RoyalCoin",
        "symbol": "ROYAL"
    },
    "QBT": {
        "id": "cubits",
        "name": "Cubits",
        "symbol": "QBT"
    },
    "YES": {
        "id": "yescoin",
        "name": "Yescoin",
        "symbol": "YES"
    },
    "QBC": {
        "id": "quebecoin",
        "name": "Quebecoin",
        "symbol": "QBC"
    },
    "AIB": {
        "id": "advanced-internet-blocks",
        "name": "Advanced Internet Blocks",
        "symbol": "AIB"
    },
    "GBRC": {
        "id": "global-business-revolution",
        "name": "Global Business Revolution",
        "symbol": "GBRC"
    },
    "SHA": {
        "id": "shacoin",
        "name": "SHACoin",
        "symbol": "SHA"
    },
    "ELC": {
        "id": "electionchain",
        "name": "ElectionChain",
        "symbol": "ELC"
    },
    "MAVRO": {
        "id": "mavro",
        "name": "Mavro",
        "symbol": "MAVRO"
    },
    "COUPE": {
        "id": "coupecoin",
        "name": "Coupecoin",
        "symbol": "COUPE"
    },
    "MONEY": {
        "id": "moneycoin",
        "name": "MoneyCoin",
        "symbol": "MONEY"
    },
    "DUB": {
        "id": "dubstep",
        "name": "Dubstep",
        "symbol": "DUB"
    },
    "GSR": {
        "id": "geysercoin",
        "name": "GeyserCoin",
        "symbol": "GSR"
    },
    "DASHS": {
        "id": "dashs",
        "name": "Dashs",
        "symbol": "DASHS"
    },
    "BLAZR": {
        "id": "blazercoin",
        "name": "BlazerCoin",
        "symbol": "BLAZR"
    },
    "XTD": {
        "id": "xtd-coin",
        "name": "XTD Coin",
        "symbol": "XTD"
    },
    "PSY": {
        "id": "psilocybin",
        "name": "Psilocybin",
        "symbol": "PSY"
    },
    "GAIN": {
        "id": "ugain",
        "name": "UGAIN",
        "symbol": "GAIN"
    },
    "XVE": {
        "id": "the-vegan-initiative",
        "name": "The Vegan Initiative",
        "symbol": "XVE"
    },
    "WINK": {
        "id": "wink",
        "name": "Wink",
        "symbol": "WINK"
    },
    "OPAL": {
        "id": "opal",
        "name": "Opal",
        "symbol": "OPAL"
    },
    "TRICK": {
        "id": "trickycoin",
        "name": "TrickyCoin",
        "symbol": "TRICK"
    },
    "BTG": {
        "id": "bitgem",
        "name": "Bitgem",
        "symbol": "BTG"
    },
    "AXIOM": {
        "id": "axiom",
        "name": "Axiom",
        "symbol": "AXIOM"
    },
    "GML": {
        "id": "gameleaguecoin",
        "name": "GameLeagueCoin",
        "symbol": "GML"
    },
    "PRIMU": {
        "id": "primulon",
        "name": "Primulon",
        "symbol": "PRIMU"
    },
    "DON": {
        "id": "donationcoin",
        "name": "Donationcoin",
        "symbol": "DON"
    },
    "OP": {
        "id": "operand",
        "name": "Operand",
        "symbol": "OP"
    },
    "VGC": {
        "id": "vegascoin",
        "name": "VegasCoin",
        "symbol": "VGC"
    },
    "CME": {
        "id": "cashme",
        "name": "Cashme",
        "symbol": "CME"
    },
    "BIT": {
        "id": "first-bitcoin",
        "name": "First Bitcoin",
        "symbol": "BIT"
    },
    "ZSE": {
        "id": "zsecoin",
        "name": "ZSEcoin",
        "symbol": "ZSE"
    },
    "XDE2": {
        "id": "xde-ii",
        "name": "XDE II",
        "symbol": "XDE2"
    },
    "EXL": {
        "id": "excelcoin",
        "name": "Excelcoin",
        "symbol": "EXL"
    },
    "REGA": {
        "id": "regacoin",
        "name": "Regacoin",
        "symbol": "REGA"
    },
    "CC": {
        "id": "cybercoin",
        "name": "CyberCoin",
        "symbol": "CC"
    },
    "TEAM": {
        "id": "teamup",
        "name": "TeamUp",
        "symbol": "TEAM"
    },
    "PI": {
        "id": "picoin",
        "name": "PiCoin",
        "symbol": "PI"
    },
    "DBG": {
        "id": "digital-bullion-gold",
        "name": "Digital Bullion Gold",
        "symbol": "DBG"
    },
    "PCN": {
        "id": "peepcoin",
        "name": "PeepCoin",
        "symbol": "PCN"
    },
    "TODAY": {
        "id": "todaycoin",
        "name": "TodayCoin",
        "symbol": "TODAY"
    },
    "STRB": {
        "id": "superturbostake",
        "name": "SuperTurboStake",
        "symbol": "STRB"
    },
    "VTY": {
        "id": "victoriouscoin",
        "name": "Victoriouscoin",
        "symbol": "VTY"
    },
    "YOG": {
        "id": "yogold",
        "name": "Yogold",
        "symbol": "YOG"
    },
    "TURBO": {
        "id": "turbocoin",
        "name": "TurboCoin",
        "symbol": "TURBO"
    },
    "TCR": {
        "id": "thecreed",
        "name": "TheCreed",
        "symbol": "TCR"
    },
    "EFYT": {
        "id": "ergo",
        "name": "Ergo",
        "symbol": "EFYT"
    },
    "SKR": {
        "id": "sakuracoin",
        "name": "Sakuracoin",
        "symbol": "SKR"
    },
    "POKE": {
        "id": "pokecoin",
        "name": "PokeCoin",
        "symbol": "POKE"
    },
    "XRY": {
        "id": "royalties",
        "name": "Royalties",
        "symbol": "XRY"
    },
    "RCN": {
        "id": "rcoin",
        "name": "Rcoin",
        "symbol": "RCN"
    },
    "SOUL": {
        "id": "soulcoin",
        "name": "SoulCoin",
        "symbol": "SOUL"
    },
    "IVZ": {
        "id": "invisiblecoin",
        "name": "InvisibleCoin",
        "symbol": "IVZ"
    },
    "WEC": {
        "id": "wowecoin",
        "name": "Wowecoin",
        "symbol": "WEC"
    },
    "KARMA": {
        "id": "karmacoin",
        "name": "Karmacoin",
        "symbol": "KARMA"
    },
    "TOPAZ": {
        "id": "topaz",
        "name": "Topaz Coin",
        "symbol": "TOPAZ"
    },
    "NBIT": {
        "id": "netbit",
        "name": "netBit",
        "symbol": "NBIT"
    },
    "PRM": {
        "id": "prismchain",
        "name": "PrismChain",
        "symbol": "PRM"
    },
    "FUTC": {
        "id": "futcoin",
        "name": "FutCoin",
        "symbol": "FUTC"
    },
    "MONETA": {
        "id": "moneta2",
        "name": "Moneta",
        "symbol": "MONETA"
    },
    "DCRE": {
        "id": "deltacredits",
        "name": "DeltaCredits",
        "symbol": "DCRE"
    },
    "LKC": {
        "id": "linkedcoin",
        "name": "LinkedCoin",
        "symbol": "LKC"
    },
    "SKC": {
        "id": "skeincoin",
        "name": "Skeincoin",
        "symbol": "SKC"
    },
    "ETX": {
        "id": "etherx",
        "name": "Etherx",
        "symbol": "ETX"
    },
    "FONZ": {
        "id": "fonziecoin",
        "name": "Fonziecoin",
        "symbol": "FONZ"
    },
    "BGR": {
        "id": "bongger",
        "name": "Bongger",
        "symbol": "BGR"
    },
    "IRL": {
        "id": "irishcoin",
        "name": "IrishCoin",
        "symbol": "IRL"
    },
    "CBD": {
        "id": "cbd-crystals",
        "name": "CBD Crystals",
        "symbol": "CBD"
    },
    "CLINT": {
        "id": "clinton",
        "name": "Clinton",
        "symbol": "CLINT"
    },
    "TOP": {
        "id": "topcoin",
        "name": "TopCoin",
        "symbol": "TOP"
    },
    "SPORT": {
        "id": "sportscoin",
        "name": "SportsCoin",
        "symbol": "SPORT"
    },
    "CYC": {
        "id": "cycling-coin",
        "name": "Cycling Coin",
        "symbol": "CYC"
    },
    "SFE": {
        "id": "safecoin",
        "name": "SafeCoin",
        "symbol": "SFE"
    },
    "XAU": {
        "id": "xaucoin",
        "name": "Xaucoin",
        "symbol": "XAU"
    },
    "HYPER": {
        "id": "hyper",
        "name": "Hyper",
        "symbol": "HYPER"
    },
    "KASHH": {
        "id": "kashhcoin",
        "name": "KashhCoin",
        "symbol": "KASHH"
    },
    "BEST": {
        "id": "bestchain",
        "name": "BestChain",
        "symbol": "BEST"
    },
    "GUC": {
        "id": "goldunioncoin",
        "name": "GoldUnionCoin",
        "symbol": "GUC"
    },
    "NBE": {
        "id": "bitcentavo",
        "name": "BitCentavo",
        "symbol": "NBE"
    },
    "COXST": {
        "id": "coexistcoin",
        "name": "CoExistCoin",
        "symbol": "COXST"
    },
    "WSX": {
        "id": "wearesatoshi",
        "name": "WeAreSatoshi",
        "symbol": "WSX"
    },
    "BAC": {
        "id": "bitalphacoin",
        "name": "BitAlphaCoin",
        "symbol": "BAC"
    },
    "QRZ": {
        "id": "quartz-qrz",
        "name": "Quartz",
        "symbol": "QRZ"
    },
    "SYNC": {
        "id": "sync",
        "name": "Sync",
        "symbol": "SYNC"
    },
    "GOLF": {
        "id": "golfcoin",
        "name": "Golfcoin",
        "symbol": "GOLF"
    },
    "TP1": {
        "id": "kolschcoin",
        "name": "KolschCoin",
        "symbol": "TP1"
    },
    "UTA": {
        "id": "utacoin",
        "name": "UtaCoin",
        "symbol": "UTA"
    },
    "OMC": {
        "id": "omicron",
        "name": "Omicron",
        "symbol": "OMC"
    },
    "PDG": {
        "id": "pinkdog",
        "name": "PinkDog",
        "symbol": "PDG"
    },
    "GMB": {
        "id": "gambleo",
        "name": "Gambleo",
        "symbol": "GMB"
    },
    "XSTC": {
        "id": "safe-trade-coin",
        "name": "Safe Trade Coin",
        "symbol": "XSTC"
    },
    "QORA": {
        "id": "qora",
        "name": "Qora",
        "symbol": "QORA"
    },
    "SHELL": {
        "id": "shellcoin",
        "name": "ShellCoin",
        "symbol": "SHELL"
    },
    "MMXVI": {
        "id": "mmxvi",
        "name": "MMXVI",
        "symbol": "MMXVI"
    },
    "STEX": {
        "id": "stex",
        "name": "STEX",
        "symbol": "STEX"
    },
    "OCOW": {
        "id": "ocow",
        "name": "OCOW",
        "symbol": "OCOW"
    },
    "LTH": {
        "id": "lathaan",
        "name": "LAthaan",
        "symbol": "LTH"
    },
    "CHEAP": {
        "id": "cheapcoin",
        "name": "Cheapcoin",
        "symbol": "CHEAP"
    },
    "AMIS": {
        "id": "amis",
        "name": "AMIS",
        "symbol": "AMIS"
    },
    "EGG": {
        "id": "eggcoin",
        "name": "EggCoin",
        "symbol": "EGG"
    },
    "DISK": {
        "id": "darklisk",
        "name": "DarkLisk",
        "symbol": "DISK"
    },
    "DOC": {
        "id": "dochain",
        "name": "Dochain",
        "symbol": "DOC"
    },
    "LLT": {
        "id": "lltoken",
        "name": "LLToken",
        "symbol": "LLT"
    },
    "GMX": {
        "id": "goldmaxcoin",
        "name": "GoldMaxCoin",
        "symbol": "GMX"
    },
    "MKR": {
        "id": "maker",
        "name": "Maker",
        "symbol": "MKR"
    },
    "X2": {
        "id": "x2",
        "name": "X2",
        "symbol": "X2"
    },
    "MRC": {
        "id": "microcoin",
        "name": "microCoin",
        "symbol": "MRC"
    },
    "BURN": {
        "id": "president-sanders",
        "name": "President Sanders",
        "symbol": "BURN"
    }
}
