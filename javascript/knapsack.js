function max(a, b) {
  return a > b ? a : b;
}
  
function knapSack(W, weights, values) {
  const n = weights.length
  const K = new Array(n + 1);

  for (let i = 0; i <= n; i++) {
    K[i] = new Array(W + 1);
    for (let w = 0; w <= W; w++) {
      if (i == 0 || w == 0) K[i][w] = 0;
      else if (weights[i - 1] <= w)
        K[i][w] = max(values[i - 1] + K[i - 1][w - weights[i - 1]], K[i - 1][w]);
      else K[i][w] = K[i - 1][w];
    }
  }

  return K[n][W];
}

module.exports = { knapSack }