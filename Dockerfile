# stage 1
FROM node:18-alpine as builder

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

RUN npm install node-pre-gyp -g

COPY . .

RUN npm run build


# stage 2
FROM node:18-alpine

WORKDIR /usr/app  

COPY --from=builder /usr/app/dist ./dist

COPY --from=builder /usr/app/node_modules ./node_modules/

COPY --from=builder /usr/app/package*.json ./

EXPOSE ${PORT}

CMD npm run start:prod
