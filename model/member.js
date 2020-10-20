const { Schema, model } = require('mongoose');

const memberSchema = new Schema({
  name: String,
  age: Number,
  isPet: Boolean,
  hobbyIds: [String],
});

module.exports = model('Member', memberSchema);
