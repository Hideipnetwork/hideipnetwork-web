FROM node:18.16-alpine
LABEL maintainer="contact#hideip.network"

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY ./package.json /usr/src/app/

RUN npm install && npm cache clean --force

COPY ./ /usr/src/app

ENV PORT 56559

EXPOSE 56559

CMD [ \"npm\", \"start\" ]