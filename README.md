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

- npm dev

#### Note to Self

Hey future Steph! You used heroku to deploy this. When you need to push an update to Heroku remember to un-gitignore the secret.js file and then re-ignore it when pushing to github.

- git add .
- git commit -am "heroku things"
- git push heroku master
