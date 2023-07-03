#Specify the version of nodejs.
FROM pudding/node-pwa:node-12-20230513

CMD ["node", "/app/index.js"]

WORKDIR /
COPY package.json ./
RUN npm i
