FROM node:18.13.0

WORKDIR /usr/src/next

COPY package-lock.json /usr/src/next
COPY package.json /usr/src/next

RUN npm install

COPY . /usr/src/next

RUN npm run build

CMD [ "npm" , "run" , "dev"]