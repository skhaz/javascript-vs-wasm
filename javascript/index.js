'use strict';

const fs = require('fs')
const javascript = require('./knapsack')

const latencies = JSON.parse(fs.readFileSync('../data/latencies.json'))
const transactions = JSON.parse(fs.readFileSync('../data/transactions.json'))
const df = transactions.map(o => ({ ...o, latency: latencies[o.bank_country_code]}))

const limit = 1000
const weights = df.map(o => o.latency)
const values = df.map(o => o.amount)

const startTime = performance.now()
const result = javascript.knapSack(limit, weights, values)
const endTime = performance.now()
const timeDiff = endTime - startTime

console.log(`Result: ${result}`)
console.log(`Elapsed: ${Math.round(timeDiff)}ns`)