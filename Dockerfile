FROM node:20.12.2
LABEL maintainer="contact#hideip.network"

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install -g pnpm \
    && pnpm install

COPY . .

ENV PORT=56559 \
    HOST=0.0.0.0 \
    SECRET=hnet-jesmora \
    HNET_USER=Jesmora \
    HNET_PWD=hnet-jesmora \
    REDIRECT_HOST=www.google.com \
    MONGDB_CONNECTION=-- \
    MODO=normal

EXPOSE 56559

CMD ["pnpm", "start"]