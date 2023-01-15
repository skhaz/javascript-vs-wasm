# Installation

### Install ASDF

```
brew install asdf
```

Then add `asdf` in the plugin list on `~/.zshrc` (if you use oh-my-zsh)

### Install NodeJS

```shell
asdf plugin add nodejs https://github.com/asdf-vm/asdf-nodejs.git
asdf install nodejs 18.12.1
```

### Install Go

```shell
asdf plugin-add golang https://github.com/kennyp/asdf-golang.git
asdf install golang 1.19.5
```

### Add globally

```shell
echo "nodejs 18.12.1" >> ~/.tool-versions
echo "golang 1.19.5" >> ~/.tool-versions
```

### Building WASM

```shell
GOOS=js GOARCH=wasm go build -o knapsack
```