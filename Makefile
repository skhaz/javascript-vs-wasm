.PHONY: wasm

wasm:
	GOOS=js GOARCH=wasm go build -o wasm/app.wasm wasm/main.go wasm/knapsack.go
	cp "$(shell go env GOROOT)/misc/wasm/wasm_exec.js" wasm