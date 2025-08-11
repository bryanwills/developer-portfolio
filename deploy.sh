#!/bin/bash

echo "Switching to branch main"
git checkout main

echo "Pulling latest changes"
git pull origin main

echo "Installing dependencies"
npm install

echo "Building app for static export"
npm run build

echo "Deploying files to server"
# The output directory is now 'out' instead of 'build'
rsync -avP out/ bryanwi09@bryanwills.dev:/var/www/bryanwills.dev/html/

echo "Deployment Complete"