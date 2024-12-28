FROM node:v22.12.0



WORKDIR /src/app

COPY . .


RUN npm install --production
RUN npm run build

EXPOSE 3000

CMD ["npm","start"]