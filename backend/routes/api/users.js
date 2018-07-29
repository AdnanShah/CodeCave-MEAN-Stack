var express = require("express");
var router = express.Router();
var mysql = require("../../config/database.js");
var config = require("../../config/configuration.js");
var jwt = require("jsonwebtoken");
const Promise = require("bluebird");
var bcrypt = require("bcryptjs");

router.post("/register", (req, res) => {

  req.getValidationResult().then(error => {
    if (!error.isEmpty()) {
      res.json({
        status: 403,
        message: "ServerMandatoryParameterMissing",
        error: error
      });
    } else {
      let user_signup_data = {
        userName: req.body.username,
        email: req.body.email,
        password: req.body.cpass
      };
      const saltRounds = 10;

      bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
        user_signup_data.password = hash;
        console.log(user_signup_data.password);
        const selectQry =
          "select email from creates" +
          ' where email = "' +
          req.body.email +
          '" ';
        const insertQry = `insert into creates set ?`;
        Promise.using(mysql.getSqlConn(), conn => {
          conn
            .query(selectQry)
            .then(rows => {
              if (rows.length > 0) {
                res.json({ status: 403, message: "EmailAlreadyExists" });
              } else {
                conn
                  .query(insertQry, user_signup_data)
                  .then(rs => {
                    let claims = {
                      UserID: rs.insertId,
                      FirstName: req.body.name
                    };
                    let token = jwt.sign(claims, config.secret);
                    let qryData = {
                      token: token
                    };
                    conn
                      .query("update creates set ? where email = ?", [
                        qryData,
                        req.body.email
                      ])
                      .then(() => {
                        res.json({
                          status: 200,
                          message: "User Registered",
                          token: qryData.token
                        });
                      })
                      .catch(err => {
                        res.json({
                          status: 401,
                          message: "User Not Registered" + err
                        });
                      });
                  })
                  .catch(err => {
                    res.json({ status: 500, error: "QueryError" + err });
                  });
              }
            })
            .catch(err => {
              res.json({
                status: 401,
                message: "Error in Insert Query " + err
              });
            }); //insertConn
        }); //promise
      });
    }
  });
});

router.post("/signin", (req, res) => {
  req
    .checkBody("email")
    .notEmpty()
    .isEmail();
  req.checkBody("password").notEmpty();
  const qry = 'select * from creates where email = "' + req.body.email + '" ';
  Promise.using(mysql.getSqlConn(), conn => {
    conn
      .query(qry)
      .then(user => {
        if (user.length == 0) {
          console.log("debug");
          res.status(401).json({ message: "EmailNotExist" });
        } else {
          bcrypt.compare(req.body.password, user[0].password).then(compared => {
            if (compared) {
              res.status(200).json({ message: "password matched", data: user });
            } else {
              console.log("req", req.body.password);
              console.log("req", user[0].password);
              res.status(401).json({ message: "EmailPasswordIncorrect" });
            }
          });
        }
      })
      .catch(err => {
        res.json({ status: 401, message: "Error" + err });
      });
  });
});


router.get("/all", (req, res) => {
  console.log("/api/users/all", req.body);
  const qry = 'select * from creates where email = "' + req.body.email + '" ';
  Promise.using(mysql.getSqlConn(), conn => {
    conn
      .query(qry)
      .then(data => {
        if (data.length == 0) {
          console.log("debug");
          res.status(401).json({ message: "user not exist" });
        } else {
          res.status(200).json({ message: "password matched", data: data });
        }
      })
      .catch(err => {
        res.json({ status: 401, message: "Error" + err });
      });
  });
});


module.exports = router;
