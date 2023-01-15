package main

import (
	"encoding/json"
	"log"
	"syscall/js"
)

func knapsackWrapper() js.Func {
	knapsackFunc := js.FuncOf(func(this js.Value, args []js.Value) any {
		capacity := int64(args[0].Int())

		var (
			weights []float64
			values  []float64
		)

		if err := json.Unmarshal([]byte(args[1].String()), &weights); err != nil {
			log.Fatal(err.Error())
		}

		if err := json.Unmarshal([]byte(args[2].String()), &values); err != nil {
			log.Fatal(err.Error())
		}

		return Knapsack(capacity, weights, values)
	})

	return knapsackFunc
}

func main() {
	js.Global().Set("knapSack", knapsackWrapper())
	select {}
}
