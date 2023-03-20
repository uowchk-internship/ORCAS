FROM node
WORKDIR /app
COPY package.json .
RUN npm config set legacy-peer-deps true
RUN npm install
COPY . .
EXPOSE 3000
ARG SERVER_URL
ENV SERVER_URL=""
RUN npm run build
CMD ["npm","start"]