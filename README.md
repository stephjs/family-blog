### GraphQL - family blog

Hi there! This project is a server/api/db connection for my extended family's private quarantine blog. If you want to fork this repo to create your own, clone it, then

- npm i
- touch secret.js

#### In secret.js

Create a new db at mlab.com and add and export your endpoint in sercret.js

const endpoint = `mongodb://${user}:${password}@${appid}.mlab.com:${port}/${dbName}`

module.exports = {
endpoint,
};
