#PDB Frontend

* application -> contains react app
* server -> contains express server

# start server

* locally
`npm start` -> local

* on server
1. navigate to folter `/var/www/pdb-fr`
2. `forever start bin/www`

# deploy on server

1. login to server
2. navigate to /var/www/pdb-fr
3. in command line type `./deploy.sh`
