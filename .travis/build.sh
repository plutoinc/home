#!/bin/bash
echo $TRAVIS_BRANCH

if [[ $TRAVIS_BRANCH == 'master' ]]
then
  npm run deploy:prod
else
  npm run deploy:stage
fi
