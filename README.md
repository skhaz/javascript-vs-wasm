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

### Install Rust

```shell
asdf plugin-add rust https://github.com/code-lever/asdf-rust.git
asdf install rust 1.66.1
```

### Add globally

```shell
echo "nodejs 18.12.1" >> ~/.tool-versions
echo "rust 1.66.1" >> ~/.tool-versions
```