FROM node
WORKDIR /app
COPY package.json .
RUN npm config set legacy-peer-deps true
RUN npm install
COPY . .
EXPOSE 3000
ENV NEXT_PUBLIC_SERVER_URL=https://tomcat.johnnyip.com/orcas
RUN npm run build
CMD ["npm","start"]
