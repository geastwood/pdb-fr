#!/bin/sh

REPO=/var/www/pdb-fr
APP=$REPO/application
SERVER=$REPO/server

echo "========================================================================"
echo "git pull (update repo)"
echo "                        => rebuild the React app"
echo "                                                  => restart node server"
echo "========================================================================"

cd $REPO && git pull
cd $APP && webpack && npm install
cd $SERVER && npm install && forever restartall
