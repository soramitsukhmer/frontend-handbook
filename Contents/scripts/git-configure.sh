#!/usr/bin/env sh

# Core
git config --global init.defaultBranch main
git config --global pull.rebase true

# Alias
git config --global alias.ignore '!gi() { curl -sL https://www.toptal.com/developers/gitignore/api/$@ ;}; gi'
git config --global alias.s 'status'
git config --global alias.co 'checkout'
git config --global alias.cob 'checkout -b'
git config --global alias.del 'branch -D'
git config --global alias.br "branch --format='%(HEAD) %(color:yellow)%(refname:short)%(color:reset) - %(contents:subject) %(color:green)(%(committerdate:relative)) [%(authorname)]' --sort=-committerdate"
git config --global alias.save '!git add -A && git commit -m "chore: save `date`"'
git config --global alias.undo 'reset HEAD~1 --mixed'
git config --global alias.done '!git push origin HEAD'
git config --global alias.lg '!git log --pretty=format:\"%C(magenta)%h%Creset -%C(red)%d%Creset %s %C(dim green)(%cr) [%an]\" --abbrev-commit -30'
git config --global alias.pullx '!pl() { local branch=$(git branch --show-current); if [[ `git status --porcelain --untracked-files=no` ]]; then git stash save -m "Autostash `date`"; git pull origin $branch --verbose; git stash pop stash@{0}; else git pull origin $branch --verbose; fi }; pl'
git config --global alias.pushx '!git push origin $(git branch --show-current) --tags --verbose'
