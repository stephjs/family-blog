const { Schema, model } = require('mongoose');

const hobbySchema = new Schema({
  name: String,
  catchphrase: String,
});

module.exports = model('Hobby', hobbySchema);
