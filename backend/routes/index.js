var users = require("./api/users");
var questions = require("./api/questions");
var apiPrefix = "/api/";

console.log("App is running on port 4201!");

exports.router = function(app) {
  app.use(apiPrefix + "users", users);
  app.use(apiPrefix + "questions", questions);
};
