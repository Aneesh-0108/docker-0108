FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --production

#keep mind of the gap here:
COPY . .

EXPOSE 3000

#Mind the gap after CMD:
    
CMD ["node","server.js"]
