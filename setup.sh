apk update
apk upgrade

#pkgset_1="git openssh make python2 python3 lynx zsh bash vim nano mpd mpc mpv ncurses"
#pkgset_2="tmux neofetch curl w3m weechat wget cfdisk util-linux rover bash-completion busybox-extras sudo ircii dialog"
#pkgset_3="openssh-client openssh-server python3 nano"
#apk add $pkgset_1 $pkgset_2 $pkgset_3

set -- git openssh make python2 python3 lynx zsh bash vim nano mpd mpc mpv ncurses
set -- tmux neofetch curl w3m weechat wget cfdisk util-linux rover bash-completion busybox-extras sudo ircii dialog
set -- openssh-client openssh-server python3 nano
apk add "$@"

wget ish.sideload.de/aio-b35.sh
sh aio-b35.sh
rm aio-b35.sh
rm -rf www

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
