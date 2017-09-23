export const users = {
  'vinnylingham': { name:'Vinny Lingham', userName: 'vinnylingham', imageUrl:'https://pbs.twimg.com/profile_images/868501388636045312/hRzmxxvG_400x400.jpg' },
  'aantonop': { name:'Andreas', userName: 'aantonop', imageUrl:'https://pbs.twimg.com/profile_images/570063561603289088/CfuQCX0Y_400x400.png' },
  'rogerkver': { name:'Roger Ver', userName: 'rogerkver', imageUrl:'https://pbs.twimg.com/profile_images/887327002721738753/OrAh2fgQ_400x400.jpg' },
  'naval': { name:'Naval Ravikant', userName: 'naval', imageUrl:'https://pbs.twimg.com/profile_images/749155852683055104/0StT9uYS_400x400.jpg' },
}

export const coins = {
  0: { symbol: 'BTC', currentPrice: 4423.55, change: 9.31, commentsCount: 44, amount: 16.12, },
  1: { symbol: 'ETH', currentPrice: 234.12, change: 14.31, commentsCount: 75, amount: 223.57, },
  2: { symbol: 'LTC', currentPrice: 45.94, change: 5.31, commentsCount: 12, amount: 44.94, },
  3: { symbol: 'CVC', currentPrice: 45.94, change: 5.31, commentsCount: 12, amount: 44.94, },
  4: { symbol: 'XMR', currentPrice: 45.94, change: 5.31, commentsCount: 12, amount: 44.94, },
}

export const influencers = {
  1: { ...users['aantonop'] },
  2: { ...users['rogerkver'] },
  3: { ...users['naval'] },
}

export const comments = {
  0: {
    user: { ...users['vinnylingham'] },
    text: 'With China banning ICO’s I see it as an opportune time to jump in a purchase BTC. Some people might feel otherwise but I think this is the time to go all in! ',
    claps: 55,
    replies: 12,
    sentiment: 'buy',
    timeStamp: 1505925992919,
    priceStamp: 4122,
    symbolStamp: 'BTC',
  },
  1: {
    user: { ...users['aantonop'] },
    text: "I'm hoping to see rapid adoption of bech32 and native segwit addresses in bitcoin wallets. Who's working on it?",
    claps: 55,
    replies: 12,
    sentiment: 'hodl',
    timeStamp: 1505925992919,
    priceStamp: 4122,
    symbolStamp: 'BTC',
  },
  2: {
    user: { ...users['rogerkver'] },
    text: "Alan was so brainwashed by Core supporting censorship and propoganda that he doesn't know that big blocks support L2 better than small ones.",
    claps: 55,
    replies: 12,
    sentiment: 'sell',
    timeStamp: 1505925992919,
    priceStamp: 4122,
    symbolStamp: 'BTC',
  },
  3: {
    user: { ...users['naval'] },
    text: "We have a society that is used to free speech but controlled money. What happens when money becomes speech?",
    claps: 55,
    replies: 12,
    timeStamp: 1505925992919,
    priceStamp: 4122,
    symbolStamp: 'BTC',
  },
}
