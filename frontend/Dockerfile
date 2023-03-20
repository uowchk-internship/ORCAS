FROM node
WORKDIR /app
COPY package*.json ./
RUN npm config set legacy-peer-deps true
RUN npm install
COPY . .
# ARG REACT_APP_SERVER_URL
# ENV REACT_APP_SERVER_URL="https://tomcat.johnnyip.com/orcas"
RUN npm run build
EXPOSE 3000
CMD ["npm","run","dev"]