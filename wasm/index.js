'use strict';

const fs = require('fs')
const wasm_exec = require('./wasm_exec')

const latencies = JSON.parse(fs.readFileSync('data/latencies.json'))
const transactions = JSON.parse(fs.readFileSync('data/transactions.json'))
const df = transactions.map(o => ({ ...o, latency: latencies[o.bank_country_code]}))

const limit = 1000
const weights = JSON.stringify(df.map(o => o.latency))
const values = JSON.stringify(df.map(o => o.amount))

const go = new Go()

const wasmBuffer = fs.readFileSync('wasm/app.wasm')

WebAssembly.instantiate(wasmBuffer, go.importObject).then((result) => {
  go.run(result.instance);

  const d = globalThis.knapSack(limit, weights, values)

  console.log(`Result: ${d}`)
});
