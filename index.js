const program = require('commander')
const Historic = require('./src/historic')
const config = require('./configuration')

// Time consts
const now = new Date()
const yesterday = new Date(now.getTime() - (24 * 60 * 60 * 1e3))

// Convert from ms to s
function toDate(val) {
    return new Date(val * 1e3)
}

// Opctions
program.version('1.0.0')
    .option('-i, --interval [interval]', 'Interval in seconds for candlestick', parseInt)
    .option('-p, --product [product]', 'Product identifier', 'BTC-EUR')    
    .option('-s, --start [start]', 'Start time in unix seconds', toDate, yesterday)
    .option('-e, --end [end]', 'End time in unix seconds', toDate, now)
    .parse(process.argv)

const main = async function() {
    const { interval, product, start, end } = program

    const service = new Historic({
        start,
        end,
        product,
        interval
    })

    const data = await service.getData()

}

main()