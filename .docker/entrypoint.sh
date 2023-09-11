#!/bin/bash
# chmod +x .docker/entrypoint.sh

npm install 
npm run build
npx typeorm migration:run
npm run start:dev