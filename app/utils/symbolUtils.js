// @flow
import { cryptocurrencies } from 'utils/cryptocurrencies'

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
