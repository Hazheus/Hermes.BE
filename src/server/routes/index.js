const health = require("./health");
const user = require("./user");
const auth = require("./auth");

const routes = [];

health.map((route) => routes.push(route));
user.map((route) => routes.push(route));
auth.map((route) => routes.push(route));

module.exports = routes;