const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const PostsSchema = new Schema({
  user: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Users' }],
  description: String,
  status: String
});

module.exports = mongoose.model('Posts', PostsSchema ,'posts');
