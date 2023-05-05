FROM node:16.6-slim As development

WORKDIR /usr/src/app

COPY package*.json ./


RUN npm install

COPY . .

RUN npm run build

FROM node:16.6-slim As production

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=production

COPY . .

COPY --from=development /usr/src/app/dist .

EXPOSE 3000
CMD ["npm", "run", "start:docker"]