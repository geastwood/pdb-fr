#!/bin/sh

REPO=/var/www/pdb-fr
APP=$REPO
SERVER=$REPO/server

echo "========================================================================"
echo "git pull (update repo)"
echo "                        => rebuild the React app"
echo "                                                  => restart node server"
echo "========================================================================"

cd $REPO && git pull
cd $APP && webpack
cd $SERVER && forever restartall
