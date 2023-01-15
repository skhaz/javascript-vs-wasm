package main

func Knapsack(capacity int64, weights []float64, values []float64) []int64 {
	K := make([][]float64, len(values)+1)
	for i := range values {
		K[i] = make([]float64, capacity+1)
	}

	keep := make([][]int, len(values)+1)
	for i := range keep {
		keep[i] = make([]int, capacity+1)
	}

	for i := int64(0); i < capacity+1; i++ {
		K[0][i] = 0
		keep[0][i] = 0
	}

	for i := 0; i < len(values)+1; i++ {
		K[i][0] = 0
		keep[i][0] = 0
	}

	for i := 1; i <= len(values); i++ {
		for c := int64(1); c <= capacity; c++ {
			itemFits := (weights[i-1] <= float64(c))
			if !itemFits {
				continue
			}

			maxValueAtThisCapacity := values[i-1] + K[i-1][int(float64(c)-weights[i-1])]
			previousValueAtThisCapacity := K[i-1][c]

			if itemFits && (maxValueAtThisCapacity > previousValueAtThisCapacity) {
				K[i][c] = maxValueAtThisCapacity
				keep[i][c] = 1
			} else {
				K[i][c] = previousValueAtThisCapacity
				keep[i][c] = 0
			}
		}
	}

	n := len(values)
	c := capacity
	var indices []int64

	for n > 0 {
		if keep[n][c] == 1 {
			indices = append(indices, int64(n-1))
			c -= int64(weights[n-1])
		}
		n--
	}

	return indices
}
