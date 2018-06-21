var models = require("../models");
var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
  models.User.findAll({
    include: [models.Task]
  }).then(function(users) {
    res.render("index", {
      title: "Sequelize: Express Example",
      users: users
    });
  });
});

router.get("/posts", function(req, res) {
  models.Create.findAll({
    include: [models.Questions]
  }).then(function(users) {
    res.send(users);

    // res.render("index", {
    //   title: "Sequelize: Express Example",
    //   users: users
    // });
  });
});

module.exports = router;
