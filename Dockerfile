FROM ecrproxy.origindigital-dac.com.au/base/alpine-node12.13-testcafe
USER root

RUN npm install http-server -g

COPY tests/package.json tests/tsconfig.json tests/.testcaferc.json tests/applitools.config.js /

COPY .yarnrc yarn.lock /

# Install test dependencies
RUN yarn