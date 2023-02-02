FROM node:19
ADD . /app
WORKDIR /app
RUN (cd server && yarn install)
RUN (cd client && yarn install && yarn run build)
RUN rm -rf server/public && cp -a client/dist server/public
CMD (cd server && yarn run start)