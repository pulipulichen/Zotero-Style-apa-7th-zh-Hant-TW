#Specify the version of nodejs.
# FROM pudding/node-pwa:node-12-20230513
# FROM node:16
FROM pudding/docker-app:node-jsdom-20230707

CMD ["node", "/app/index.js"]

WORKDIR /
COPY package.json ./
RUN npm i

# RUN echo "20230703-1756"