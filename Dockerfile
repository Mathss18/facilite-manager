FROM node:19

WORKDIR /node_app
COPY package.json ./
COPY package-lock.json ./
RUN npm install

WORKDIR /node_app/app
COPY . .
EXPOSE 3002

USER node
CMD ["npm", "run", "dev"]