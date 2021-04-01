#!/bin/bash

rm -rf ./client/utils/api.js ./server ./node_modules
npm r axios concurrently express lodash module-alias morgan nodemon
npm install

rm -rf ./removeServer.sh