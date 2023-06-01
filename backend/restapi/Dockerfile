
FROM node:14
LABEL description="NodeJS backend for TASSET"

# Create app directory
WORKDIR /home/prolitus/Documents/restapi

# Copy source
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm","start"]
