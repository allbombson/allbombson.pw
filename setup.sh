apk update
apk upgrade

apk add git openssh make python2 python3 lynx zsh bash vim nano mpd mpc mpv ncurses 
apk add tmux neofetch curl w3m weechat wget cfdisk util-linux rover bash-completion busybox-extras sudo ircii dialog
apk add openssh-client openssh-server python3 nano

wget ish.sideload.de/aio-b35.sh
sh aio-b35.sh
rm aio-b35.sh


nano /etc/passwd


cd ~/

#Install dotfiles
git clone https://github.com/allbombson/alpine-dotfiles dotfiles
cp -rT dotfiles ~/
rm -rf dotfiles
chmod +x ~/.scripts/
chmod +x ~/.scripts/*
chmod +x ~/.scripts/*.*
chmod +x ~/.scripts/.*
chmod +x ~/.scripts/.*.*


printf "" > /etc/motd
echo "sh /root/.scripts/unix" >> ~/.profile
