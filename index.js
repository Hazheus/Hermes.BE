const express =  require("express");
const routes = require("./src/routes");

const app = express();

const port = 3002;

routes.map((route) => {
    console.log(route)
    if(route.path && route.method && route.handler)
        app[route.method](route.path, (req, res) => {
            route.handler(req, res);
        })
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
})