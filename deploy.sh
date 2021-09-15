#!/bin/bash

echo "Switching to branch main"
git checkout main

echo "Building app"
npm run build

echo "Deploying files to server"
#rsync -avP build/ bryanwi09@bryanwills.dev:/var/www/html/bryanwills.dev/

echo "Deployment Complete"