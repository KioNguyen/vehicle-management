FROM node:18.17.0

COPY . /app

WORKDIR /app

RUN yarn install
RUN yarn build

RUN useradd --no-log-init --shell /bin/bash vincar

USER vincar

EXPOSE 4200

CMD ["yarn", "start"]
