const { Schema, model } = require('mongoose')

const postSchema = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  authorId: { type: String, required: true }
},
{ timestamps: true }
);

const Post = model("Post", postSchema)

module.exports = Post