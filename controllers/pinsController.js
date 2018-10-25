const db = require("../models");

// Defining methods for the pinsController
module.exports = {
  findAll: function(req, res) {
    db.Pins
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findByCat: function(req, res) {
    db.body
      .find({category: req.params.category })
      .then(function (dbModel) {
        res.json(dbModel); 
      })
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Pins
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Pins
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Pins
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
