# Wordpress and React boilerplate with Babel and Webpack

## Dependencies
- iojs-v2.3.0
- Running Wordpress with WP-API (http://wp-api.org/)

## Install
```
nvm use iojs-v2.3.0
npm install
npm run dev
open http://localhost:3000
```

## Config
```
// URL to Wordpress JSON API  
sourcecode/config.js
```

## Quick Wordpress and WP-API setup.
- Install VirtualBox (https://www.virtualbox.org/)
- Install Vagrant (http://vagrantup.com/)
```
git clone --recursive https://github.com/Chassis/Chassis wordpress
cd wordpress
mkdir content
cd content
mkdir plugins
mkdir themes
cd ..
vagrant up
open http://vagrant.local/wp-admin (u: admin p: password)
Install and activate the plugin json-rest-api (WP REST API)
Set permalinks structure (Settings -> Permalinks) to /%postname%/
```

## Known Vagrant Error: Conflicting host only adapter with DHCP enabled
```
A host only network interface you're attempting to configure via DHCP
already has a conflicting host only adapter with DHCP enabled. The
DHCP on this adapter is incompatible with the DHCP settings. Two
host only network interfaces are not allowed to overlap, and each
host only network interface can have only one DHCP server. Please
reconfigure your host only network or remove the virtual machine
using the other host only network.
```
Just type this in your terminal...
```
VBoxManage dhcpserver remove --netname HostInterfaceNetworking-vboxnet0
```

## Known Vagrant Error: Provision
```
Machine already provisioned. Run `vagrant provision` or use the `--provision`
to force provisioning. Provisioners marked to run always will still run.
```
Just type this in your terminal...
```
vagrant provision
```



## Known Vagrant Error: Non-zero exit status
```
The SSH command responded with a non-zero exit status. Vagrant
assumes that this means the command failed. The output for this command
should be in the log above. Please read the output to determine what
went wrong.
```
Just type this in your terminal...
```
vagrant suspend
vagrant up
```


