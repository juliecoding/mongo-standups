var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var standupSchema = new Schema({
  memberName: String,
  project: String,
  workYesterday: String,
  impediment: String,
  createdOn: { type: Date, default: Date.now}
});

//disabled _id
// var noIdSchema = new Schema({name: String}, {_id: false});

//Example of using Schema.add...
// var exampleSchema = new Schema;
// exampleSchema.add({memberName: String, project: String, workYesterday: String})

//Expose (export) the model now...
module.exports = mongoose.model('Standup', standupSchema);
