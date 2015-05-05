# process-funnel
Requirements
curl - http://linuxg.net/how-to-install-curl-7-36-0-on-ubuntu-linux-mint-pinguy-os-and-elementary-os-systems/
node.js - https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager
git - Linux Mint 17 should come with Git
bower
ruby - https://www.ruby-lang.org/en/documentation/installation/
sass - http://sass-lang.com/install
yeoman - http://yeoman.io/

To install
I am using Linux Mint running on VirtualBox, this should work in other linux enviroments. 

In a terminal:

sudo add-apt-repository ppa:costamagnagianfranco/ettercap-stable-backports
sudo apt-get update
sudo apt-get install curl
sudo add-apt-repository ppa:git-core/ppa
sudo apt-get update
sudo apt-get install git
sudo apt-get install ruby-full
sudo gem install sass

sudo curl -sL https://deb.nodesource.com/setup | bash -
sudo apt-get install -y nodejs

alias node='nodejs'
sudo npm install -g grunt
sudo npm install -g grunt-cli
sudo npm install -g bower
sudo npm install -g yo
sudo npm install -g generator-angular-fullstack

cd [path-to]/process-funnel/

sudo npm install -g
bower install
grunt server 

To kill the server press CTRL-C.




