var db = require("../models");

module.exports = function(app) {
<<<<<<< HEAD
  app.post("/api/users", (req, res) => {
    const { firstName, lastName, userName,pwd, email, income } = req.body;

    db.User.create({
      firstName,
      lastName,
      userName,
      pwd,
      email,
      income
    })
      .then(newUser => {
        res.status(200).json(newUser);
      })
      .catch(err => {
        console.log(err);
        res.status(400).json({ error: err });
      });
  });

  app.post("/api/category", (req, res) => {
    const { name } = req.body;

    db.Expense.create({
      name
    })
      .then(newCategory => {
        res.status(200).json(newCategory);
      })
      .catch(err => {
        console.log(err);
        res.status(400).json({ error: err });
      });
  });

  app.post("/api/expense", (req, res) => {
    const { description, amount } = req.body;

    db.Expense.create({
      description,
      amount
    })
      .then(newExpense => {
        res.status(200).json(newExpense);
      })
      .catch(err => {
        console.log(err);
        res.status(400).json({ error: err });
      });
  });


  app.post("/api/goal", (req, res) => {
    const { amount } = req.body;

    db.Expense.create({
      amount
    })
      .then(newGoal => {
        res.status(200).json(newGoal);
      })
      .catch(err => {
        console.log(err);
        res.status(400).json({ error: err });
      });
  });
};
