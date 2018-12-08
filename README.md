# simple_CRUD
--------------------------
1st Way
--------------------------
Using boiler plate from repo
----------------------------------------------
2nd Way
------------------------------------------------
1. `create-react-app` and the name of the folder you want to make
2. `npm run eject` inside the project to eject.
3. Make a folder inside the src called client and another one called server
4. Move all react code from src into client. And create an index.js in the server folder. You could delete all the unnecessary code/files that you don't need.
5. Install express `npm install express`
6. In the src/server/index.js file write

```const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 9001
const buildPath = path.join(__dirname, '../../build')

app.use(express.static(buildPath))

app.get('/*', function(req, res) {
  const indexPath = path.join(buildPath, 'index.html')
  res.sendFile(indexPath)
})

app.listen(port, () => {
  console.log(` App is being served! On port ${port}`)
})```
7. The src file structure should look like this. There could be more files in the client folder if you didn't delete any files that create-react-app bootstrapped, and that's okay.
```└── src
    ├── client
    │   ├── App.js
    │   └── index.js
    └── server
        └── index.js```

8. In the /config folder. Find the path.js file and replace `appIndexJs: resolveModule(resolveApp, 'src/index')` with `appIndexJs: resolveModule(resolveApp, 'src/client/index')` save and close that file.
9. In the package.json file at the root of the project.
```"scripts": {
    "start": "node scripts/start.js",
    "build": "node scripts/build.js",
    "test": "node scripts/test.js",
    "server": "node src/server/index.js",
    "heroku-postbuild": "npm install && npm run build"
  }```
add the `"server": "node src/server/index.js",` and the `"heroku-postbuild": "npm install && npm run build"` script.
10. Then add another entry to the end of the package.json file, `"proxy": "http://localhost:9001"` and replace the port with whatever port your node server is listening to. This makes sure that our server and client can talk together while developing locally.
11. Create a file at the root of the project named `Procfile` no file extension and a capital P at the begining.
12. In that file add this line `web: npm run server`
13. Create a new repo on github.
14. On heroku create a new app app select the GitHub deployment method and search for the repo we just made, and add it. Scroll down a bit and check auto-deployment.
15. Now you can commit your project, add the remote to the repo we created earlier and push! Heroku should then start your node server, then create a Production Build folder and the node server should then serve that folder!