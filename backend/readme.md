1. npm init -y
2. npm i --save express mongodb
3. npm i --save-dev nodemon babel-cli babel-preset-es2015
4. create .babelrc
5. add "proxy": "http://localhost:8080" => frontend  => src/package.json
6. add "start": "nodemon --exec babel-node -- ./server.js"  => backend package.json "scripts"
7. npm i --save body-parser =>needs for get data from request
