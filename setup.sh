apk update
apk upgrade

apk add git openssh make python2 python3 lynx zsh bash vim nano mpd mpc mpv ncurses tmux neofetch curl w3m weechat wget cfdisk util-linux rover bash-completion busybox-extras sudo

nano /etc/passwd

mkdir ~/.scripts

cd ~/
curl -LO https://raw.githubusercontent.com/allbombson/alpine-dotfiles/master/.profile
curl -LO https://raw.githubusercontent.com/allbombson/alpine-dotfiles/master/.bashrc

cd ~/.scripts/
curl -LO https://raw.githubusercontent.com/LukeSmithxyz/voidrice/master/.scripts/unix

printf "" > /etc/motd
echo "sh /root/.scripts/unix" >> ~/.profile
