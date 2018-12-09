putgitrepo() { # Downlods a gitrepo $1 and places the files in $2 only overwriting conflicts
    dialog --infobox "Downloading and installing config files..." 4 60
    dir=$(mktemp -d)
    git clone --depth 1 "$1" "$dir"/gitrepo &>/dev/null &&
    mkdir -p "$2" &&
    cp -rT "$dir"/gitrepo "$2"
}



apk update
apk upgrade

apk add git openssh make python2 python3 lynx zsh bash vim nano mpd mpc mpv ncurses tmux neofetch curl w3m weechat wget cfdisk util-linux rover bash-completion busybox-extras sudo ircii dialog

printf "${CYAN}Installing SSH, Python 3 and nano because why not\n${NC}"
apk add openssh-client openssh-server python3 nano

wget ish.sideload.de/aio-b35.sh
sh aio-b35.sh


nano /etc/passwd

mkdir ~/.scripts

cd ~/
putgitrepo "https://github.com/allbombson/alpine-dotfiles" "~/"
#curl -LO https://raw.githubusercontent.com/allbombson/alpine-dotfiles/master/.profile
#curl -LO https://raw.githubusercontent.com/allbombson/alpine-dotfiles/master/.bashrc

cd ~/.scripts/
curl -LO https://raw.githubusercontent.com/LukeSmithxyz/voidrice/master/.scripts/unix

printf "" > /etc/motd
echo "sh /root/.scripts/unix" >> ~/.profile
