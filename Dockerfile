FROM node:9

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install

COPY . /usr/src/app

ENV NODE_PATH src
ENV NODE_ENV production

ENTRYPOINT ["node", "index.js"]
CMD ["-s", "1562452214", "-t", "simple", "-i", "60", "-f", "10", "-r", "backtester", "-p", "BTC_EUR"]