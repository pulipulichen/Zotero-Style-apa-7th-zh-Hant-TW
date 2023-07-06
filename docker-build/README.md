# Dockerhub

- https://docs.docker.com/get-started/04_sharing_app/
- `docker image ls` 找出合適的名稱，例如「html-webpage-dashboard_app」
- `docker tag zotero-style-apa-7th-zh-hant-tw_app pudding/docker-app:node-jsdom-20230707`
- `docker push pudding/docker-app:node-jsdom-20230707`
- 修改Dockerfile `FROM pudding/docker-app:node-jsdom-20230707`