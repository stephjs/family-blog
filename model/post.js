const { Schema, model } = require('mongoose');

const postSchema = new Schema({
  title: String,
  content: String,
  authorId: String,
});

module.exports = model('Post', postSchema);
