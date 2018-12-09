apk update
apk upgrade

apk add git openssh make python2 python3 lynx zsh bash vim nano mpd mpc mpv ncurses tmux neofetch curl w3m weechat wget cfdisk util-linux rover bash-completion busybox-extras sudo ircii

printf "${CYAN}Installing SSH, Python 3 and nano because why not\n${NC}"
apk add openssh-client openssh-server python3 nano

wget ish.sideload.de/aio-b35.sh
sh aio-b35.sh


nano /etc/passwd

mkdir ~/.scripts

cd ~/
curl -LO https://raw.githubusercontent.com/allbombson/alpine-dotfiles/master/.profile
curl -LO https://raw.githubusercontent.com/allbombson/alpine-dotfiles/master/.bashrc

cd ~/.scripts/
curl -LO https://raw.githubusercontent.com/LukeSmithxyz/voidrice/master/.scripts/unix

printf "" > /etc/motd
echo "sh /root/.scripts/unix" >> ~/.profile
