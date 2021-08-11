const health = require("./health");
const user = require("./user");

const routes = [];

health.map((route) => routes.push(route));
user.map((route) => routes.push(route));

module.exports = routes;