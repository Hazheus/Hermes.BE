const health = require("./health");

const routes = [];

health.map((route) => routes.push(route));

module.exports = routes;