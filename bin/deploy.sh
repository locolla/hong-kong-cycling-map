#!/bin/bash

helpFunction()
{
    echo ""
    echo "Usage: $0 -e [Enviroment] "
    echo "\t-e Enviroment (dev | prod) [default: dev]"
    echo ""
    exit 1 # Exit script after printing help
}

while getopts e: flag
do
    case "${flag}" in
        e ) envOpt="$OPTARG" ;;
        ? ) helpFunction ;; # Print helpFunction in case parameter is non-existent
    esac
done

if [ -z "$envOpt" ]
then
    envOpt="dev"
fi

git reset --hard
git pull

npm install
npm run build


if [ $envOpt = "prod" ]
then
    pm2 startOrReload process.json
else
    pm2 startOrReload process.dev.json
fi