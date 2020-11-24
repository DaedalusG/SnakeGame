# SnakeGame
Snake Game in Python and Javascript with testing

- SystemDesign: `npm test snake`
  You'll have 60 minutes to complete this section

### Node Versioning

- To find out which version of node your machine is currently running, use the command `node -v` in your terminal
- For easy node version management, we'll use the [Node Version Manager](https://github.com/nvm-sh/nvm)

1. We can use homebrew to install the manager:
   1. update homebrew with `brew update`
   2. install the manager with `brew install nvm`
   3. make a directory for the manger in your root folder with `mkdir ~/.nvm`
   4. finally, in your `~/.zshrc` file for zsh users or in your `.bash_profile` for bash users, add the following:
      ```
      export NVM_DIR=~/.nvm
      source $(brew --prefix nvm)/nvm.sh
      ```
1. Once nvm is installed and configured, we want to install the needed version of node with the command `nvm install 14.15.0`
1. Nvm should automatically set this as the environment version after installation, but confirm with `node -v`
1. In order to switch node versions, use the command `nvm use <desired node version>`
