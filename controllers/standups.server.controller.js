var Standup = require('../models/standups.server.model.js');

exports.create = function(req, res) {
  var entry = new Standup({
    memberName: req.body.memberName,
    project: req.body.project,
    workYesterday: req.body.workYesterday,
    workToday: req.body.workToday,
    impediment: req.body.impediment
  });

  //Function to handle errors would go in as the callback function here?????!?????!
  entry.save();

  //redirect to home page...
  res.redirect(301, '/');
};

exports.getNote = function(req, res) {
  res.render('newnote', {title: 'Standups - New Note'});
}
