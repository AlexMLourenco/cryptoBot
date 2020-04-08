# cryptoBot
Cryptocurrency trading bot

### Installation

Requires [Node.js](https://nodejs.org/)

Install the dependencies and devDependencies and start the server.

```sh
$ cd cryptoBot
$ npm install 
$ node index.js
```

# What we need to do first:

Create a file **config.json** with this content:

	{
    	"COINBASEPRO_API_KEY": "YOUR_API_KEY",
    	"COINBASEPRO_API_SECRET": "YOUR_API_SECRET",
    	"COINBASEPRO_API_PASSPHRASE": "YOUR_API_PASSPHRASE",
    	"COINBASEPRO_API_URL": "https://api.pro.coinbase.com",
    	"COINBASEPRO_WS_URL": "wss://ws-feed.pro.coinbase.com"
    }

Exchange the values: YOUR_API_KEY, YOUR_API_SECRET and YOUR_API_PASSPHRASE

## Coinbase Trader
https://pro.coinbase.com/trade/BTC-EUR

## COINBASE PRO Documentation
https://www.npmjs.com/package/coinbase-pro