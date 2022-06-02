FROM node:16.15.0-alpine3.15

RUN apk --no-cache --update add imagemagick

ARG NODE_ENV
ENV NODE_ENV=${NODE_ENV}

# https://serverfault.com/questions/144598/where-should-the-web-server-root-directory-go-in-linux#777655
WORKDIR /srv/www/apostrophe
RUN chown -R node: /srv/www/apostrophe

USER node

COPY --chown=node package*.json /srv/www/apostrophe/

RUN npm ci

COPY --chown=node . /srv/www/apostrophe/

CMD ["node", "app.js"]
