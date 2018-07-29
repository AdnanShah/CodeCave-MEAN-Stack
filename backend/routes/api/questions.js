var express = require("express");
var router = express.Router();
var mysql = require("../../config/database.js");
const Promise = require("bluebird");

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
router.post("/voteDown", (req, res) => {
  console.log("voteDown", req.body.id);

  const selectQry = `select vote from questions where id='${req.body.id}'`;
  const updateVote = `update questions set ? where id='${req.body.id}'`;

  Promise.using(mysql.getSqlConn(), con => {
    con.query(selectQry).then((res, result) => {
      let json = JSON.stringify(result);
      console.log(
        "result",
        res,
        result,
        json,
        res[0].vote,
        res.id,
        JSON.stringify(result),
        "json"
      );
      upVote = res[0].vote + 1;
      console.log("upVote", upVote);

      con.query(updateVote, { vote: res[0].vote - 1 }).then((res, result) => {
        let json = JSON.stringify(result);
        console.log("result", JSON.stringify(result), "json");
      });
    });
  });
});
router.post("/voteUp", (req, res) => {
  console.log("voteUp", req.body.id);

  const selectQry = `select vote from questions where id='${req.body.id}'`;
  const updateVote = `update questions set ? where id='${req.body.id}'`;

  Promise.using(mysql.getSqlConn(), con => {
    con.query(selectQry).then((res, result) => {
      let json = JSON.stringify(result);
      console.log(
        "result",
        res,
        result,
        json,
        res[0].vote,
        res.id,
        JSON.stringify(result),
        "json"
      );
      upVote = res[0].vote + 1;
      console.log("upVote", upVote);

      con.query(updateVote, { vote: res[0].vote + 1 }).then((res, result) => {
        let json = JSON.stringify(result);
        console.log("result", JSON.stringify(result), "json");
      });
    });
  });
});

router.post("/questions", (req, res) => {
  console.log("req.body", req.body);

  let user_signup_data = {
    email: req.body.email,
    title: req.body.title,
    question: req.body.question,
    tags: JSON.stringify(req.body.tags)
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
            if (err) throw err;
            console.log(result.affectedRows + " record(s) updated");
          });
      })
    );
  });
});

router.get("/posts", (req, res) => {
  console.log("/api/users/all", req.body);
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
