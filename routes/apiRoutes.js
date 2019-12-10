var db = require("../models");

module.exports = function(app) {
  app.post("/api/users", (req, res) => {
    const { firstName, lastName } = req.body;

    db.User.create({
      firstName,
      lastName,
      ProfileId
    })
      .then(newUser => {
        res.status(200).json(newUser);
      })
      .catch(err => {
        console.log(err);
        res.status(400).json({ error: err });
      });
  });

  app.post("/api/accounts", (req, res) => {
    const { accountNumber, fundsAvailable, UserId } = req.body;

    db.BankingAccount.create({
      accountNumber,
      fundsAvailable,
      UserId
    })
      .then(newAcc => {
        res.status(200).json(newAcc);
      })
      .catch(err => {
        console.log(err);
        res.status(400).json({ error: err });
      });
  });

  app.post("/api/profile", (req, res) => {
    const { username, password } = req.body;

    db.Profile.create({
      username,
      password
    })
      .then(newProfile => {
        res.status(200).json(newProfile);
      })
      .catch(err => {
        console.log(err);
        res.status(400).json({ error: err });
      });
  });
};
