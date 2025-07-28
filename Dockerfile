# Use official Node image
FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run client:build && npm prune --production

EXPOSE 3000
CMD ["npm", "start"]
