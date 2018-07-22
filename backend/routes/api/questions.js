/**
 * Created by abdul jabbar on 21/07/2017.
 */
var express = require("express");
var router = express.Router();
var mysql = require("../../config/database.js");
var database = require("../../config/database.js");
var helper = require("../../utils/helper.js");
var config = require("../../config/configuration.js");
var jwt = require("jsonwebtoken");
var logger = require("../../utils/logger");
var moment = require("moment");
var async = require("async");
const Promise = require("bluebird");
var bcrypt = require("bcryptjs");

router.post("/answer", (req, res) => {
  console.log("req.body", req.body);
  let test = `UPDATE answers SET answers = CONCAT_WS(",", SUBSTRING(answers, 1, CHAR_LENGTH(answers) ),
SUBSTRING('{"ans":"${req.body.ans}","email":"${
    req.body.email
  }"}', 1)) where questionsID =${req.body.questionsID}`;

  Promise.using(mysql.getSqlConn(), con => {
    con.query(test, function(err, result) {
      console.log(getQuery);
      if (err) throw err;
      console.log(result.affectedRows + " record(s) updated");
    });
  });
});
router.post("/questions", (req, res) => {
  console.log("req.body", req.body);

  let user_signup_data = {
    email: req.body.email,
    title: req.body.title,
    question: req.body.question
  };

  const insertQry = `insert into questions set ?`;
  const selectQry = `select id from questions where title='${req.body.title}'`;
  const insertAns = `insert into answers set ?`;

  Promise.using(mysql.getSqlConn(), con => {
    con.query(insertQry, user_signup_data).then(
      con.query(selectQry).then((res, result) => {
        let json = JSON.stringify(result);
        console.log(
          "result",
          res[0].id,
          res.id,
          JSON.stringify(result),
          "json"
        );
        con
          .query(insertAns, { questionsID: res[0].id })
          .then(function(err, result) {
            // console.log(getQuery);
            if (err) throw err;
            console.log(result.affectedRows + " record(s) updated");
          });
      })
    );
  });
});

// router.post("/questions", (req, res) => {
//   req.getValidationResult().then(error => {
//     if (!error.isEmpty()) {
//       res.json({
//         status: 403,
//         message: "ServerMandatoryParameterMissing",
//         error: error
//       });
//     } else {
//       let user_signup_data = {
//         email: req.body.email,
//         title: req.body.title,
//         question: req.body.question
//       };
//       const saltRounds = 10;

//       // user_signup_data.password = hash;
//       // console.log(user_signup_data.password);
//       const selectQry =
//         "select email from questions" +
//         ' where email = "' +
//         req.body.email +
//         '" ';
//       const insertQry = `insert into questions set ?`;
//       Promise.using(
//         mysql.getSqlConn(),
//         conn => {
//           // conn
//           // .query(selectQry)
//           // .then(rows => {
//           //   if (rows.length > 0) {
//           //     res.json({ status: 403, message: "EmailAlreadyExists" });
//           //   } else {
//           conn
//             .query(insertQry, user_signup_data)
//             .then(rs => {
//               let claims = {
//                 UserID: rs.insertId,
//                 FirstName: req.body.name
//               };
//               let token = jwt.sign(claims, config.secret);
//               //let newCode = Math.floor(100000 + Math.random() * 900000);
//               let qryData = {
//                 token: token
//               };
//               conn
//                 .query("update creates set ? where email = ?", [
//                   qryData,
//                   req.body.email
//                 ])
//                 .then(() => {
//                   res.json({
//                     status: 200,
//                     message: "User Registered",
//                     token: qryData.token
//                   });
//                 })
//                 .catch(err => {
//                   res.json({
//                     status: 401,
//                     message: "User Not Registered" + err
//                   });
//                 });
//             })
//             .catch(err => {
//               res.json({ status: 500, error: "QueryError" + err });
//             });
//         }
//         // }
//       ).catch(err => {
//         res.json({
//           status: 401,
//           message: "Error in Insert Query " + err
//         });
//       }); //insertConn
//       // }
//       // ); //promise
//     }
//   });
// });

router.get("/posts", (req, res) => {
  console.log("/api/users/all", req.body);
  // const qry = 'select * from questions where email = "' + req.body.email + '" ';
  const qry =
    "select * from questions left JOIN answers  ON questions.id=answers.questionsID";
  Promise.using(mysql.getSqlConn(), conn => {
    conn
      .query(qry)
      .then(data => {
        if (data.length == 0) {
          res.status(401).json({ message: "question not exist" });
        } else {
          res.status(200).json({ data });
        }
      })
      .catch(err => {
        res.json({ status: 401, message: "Error" + err });
      });
  });
});

module.exports = router;
