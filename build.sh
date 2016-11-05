#!/bin/sh

npm install && \
npm update && \
npm prune && \
npm test && \
npm run build
