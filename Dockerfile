# Common build stage
FROM node:16.13.0 as common-build-stage

COPY . ./app

WORKDIR /app

RUN yarn install

RUN yarn build

EXPOSE 3200

# Development build stage
FROM common-build-stage as development-build-stage

ENV NODE_ENV development

CMD ["run", "yarn", "dev"]

# Production build stage
FROM common-build-stage as production-build-stage

ENV NODE_ENV production

CMD ["run", "yarn", "start"]