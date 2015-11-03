#PDB Frontend

* src -> contains React app
* server -> contains Express server


# develop locally

* `npm install -g nodemon`

1. `npm install` under both folders `application` and `server`
2. `npm run develop` OR run `webpack --watch` to what for changes and automatically rebuild
3. `npm start` OR `cd server` and run `npm start` to start node server
4. open localhost:3000 to view the application

# deploy on server

1. login to server
2. navigate to /var/www/pdb-fr
3. in command line type `./deploy.sh`

* require `webpack` and `forever` module globally
* `npm install webpack -g`
* `npm install forever -g`
