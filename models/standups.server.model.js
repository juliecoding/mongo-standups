var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var memberNameValidator = [
  function(val) {
    return (val.length > 0 && val.toLocaleLowerCase() != 'none')
  },
//Custom error text
  'Select a valid member name.'
];

var requiredStringValidator = [
  function (val) {
    var testVal = val.trim();
    return (testVal.length > 0)
  },
//Custom error text...
  '{PATH} canno be empty'
];

var standupSchema = new Schema({
  memberName: {
    type: String,
    required: true,
    validate: memberNameValidator
  },
  project: {
    type: String,
    required: true,
    validate: requiredStringValidator
  },
  workYesterday: {
    type: String,
    required: true,
    validate: requiredStringValidator
  },
  workToday: {
    type: String,
    required: true,
    validate: requiredStringValidator
  },
  impediment: {
    type: String,
    required: true,
    default: "none"
  },
  createdOn: { type: Date, default: Date.now}
});

//disabled _id
// var noIdSchema = new Schema({name: String}, {_id: false});

//Example of using Schema.add...
// var exampleSchema = new Schema;
// exampleSchema.add({memberName: String, project: String, workYesterday: String})

//Expose (export) the model now...
module.exports = mongoose.model('Standup', standupSchema);


//Example: update multiple docs that match condition:

// var condition = {firstName: 'Bob'},
//   update = {firstName: 'Robert'};
//
// Customer.update(condition, update, {multi: true}, function(err, numberAffected, raw){
  //Handle error, returned # affected, and raw response from MongoDB.
//});
