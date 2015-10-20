#PDB Frontend

* application -> contains React app
* server -> contains Express server

# develop locally

1. `npm install` under both folders `application` and `server`
2. `cd application` and run `webpack --watch` to what for changes and automatically rebuild
3. `cd server` and run `npm start` to start node server
4. open localhost:3000 to view the applicaation


# deploy on server

1. login to server
2. navigate to /var/www/pdb-fr
3. in command line type `./deploy.sh`
