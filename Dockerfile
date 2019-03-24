FROM node:10.15-alpine

WORKDIR /bubbletalk_locator

COPY package*.json ./
# RUN npm ci --only=production
RUN npm install

COPY . .
RUN npm run build

CMD [ "npm", "start" ]
EXPOSE 8000