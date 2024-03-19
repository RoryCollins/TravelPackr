FROM node:latest

WORKDIR /travelpackr/

COPY /public /travelpackr/public
COPY /src /travelpackr/src
COPY package.json /travelpackr/package.json
COPY tsconfig.json /travelpackr/tsconfig.json

RUN npm install

CMD ["npm", "start"]
