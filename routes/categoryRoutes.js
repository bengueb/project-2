var db = require("../models");

module.exports = function(app) {
  // get all the Category's (with transactions and goals) belonging to the user's id (from req.params.id)
  app.get("/api/category/:id", (req, res) => {
    db.Category.findAll({ include: [db.Transaction, db.Goal], where: { UserId: req.params.id } })
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        console.log(err);
        res.status(400).json({ error: err });
      });
  });

  // create a single Category
  app.post("/api/category/:id", (req, res) => {
    const { name } = req.body;
    const { id } = req.params;

    db.Category.create({
      name,
      UserId: id
    })
      .then(newCategory => {
        res.status(200).json(newCategory);
      })
      .catch(err => {
        console.log(err);
        res.status(400).json({ error: err });
      });
  });

  // update a single Category
  app.put("/api/category/:id", (req, res) => {
    const { name } = req.body;
    const { id } = req.params;

    db.Category.update(
      {
        name
      },
      {
        where: { id }
      }
    )
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        console.log(err);
        res.status(400).json({ error: err });
      });
  });

  // delete a single Category by id
  app.delete("/api/category/:id", (req, res) => {
    db.Category.destroy({
      where: { id: req.params.id }
    })
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        console.log(err);
        res.status(400).json({ error: err });
      });
  });
};
