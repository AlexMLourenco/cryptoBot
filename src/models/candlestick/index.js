class Candlestick {
    constructor({ low, high, close, open, price, interval, startTime = new Date(), volume }) {
        this.startTime = startTime
        this.interval = interval
        this.open = open //|| price
        this.close = close //|| price
        this.high = high //|| price
        this.low = low //|| price
        this.volume = volume //|| 0
        //this.state = close ? 'closed' : 'open'
    }

    average() {
        return (this.close + this.high + this.low) / 3
      }
}

module.exports = exports = Candlestick