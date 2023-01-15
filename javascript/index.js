'use strict';

const fs = require('fs')

function max(a, b) {
  return a > b ? a : b;
}
  
function knapSack(W, wt, val) {
  const n = wt.length
  const K = new Array(n + 1);
  let i, w;

  for (i = 0; i <= n; i++) {
    K[i] = new Array(W + 1);
    for (w = 0; w <= W; w++) {
      if (i == 0 || w == 0) K[i][w] = 0;
      else if (wt[i - 1] <= w)
        K[i][w] = max(val[i - 1] + K[i - 1][w - wt[i - 1]], K[i - 1][w]);
      else K[i][w] = K[i - 1][w];
    }
  }

  return K[n][W];
}

const latencies = JSON.parse(fs.readFileSync('data/latencies.json'))
const transactions = JSON.parse(fs.readFileSync('data/transactions.json'))
const df = transactions.map(o => ({ ...o, latency: latencies[o.bank_country_code]}))

const limit = 1000
const wt = Object.values(df.map(o => o.latency))
const val = Object.values(df.map(o => o.amount))

const startTime = performance.now()
knapSack(limit, wt, val)
const endTime = performance.now()
const timeDiff = endTime - startTime

console.log(`Elapsed ${Math.round(timeDiff)}ns`)