#!/bin/bash

if [[ $TRAVIS_BRANCH == 'master' ]]
  npm run deploy:prod
else
  npm run deploy:stage
fi
