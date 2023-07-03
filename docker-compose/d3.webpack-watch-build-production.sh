BASEDIR=$(dirname "$0")
cd "$BASEDIR"
cd ..

sysctl -w fs.inotify.max_user_watches=524288

docker-compose run app npm run w3.webpack-watch-build-production