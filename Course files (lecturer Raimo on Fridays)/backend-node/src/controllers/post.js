const Post = require('../models/Post')

exports.getPosts = async (req, res) => {
  const posts = await Post.find({})
  res.status(200).send(posts)
}

// I took only these fields from the req.body, which were necessary
// There could be more fields there...but I don't need them :)
// Lecturer Raimo did the same with login and signup queries
exports.createPost = async (req, res) => {
  const { title, body, authorName } = req.body

  const postTemplate = {
    title,
    body,
    authorName
  }

  const createdPost = new Post(postTemplate)
  const savedPost = await createdPost.save()
  console.log(savedPost)
  // Had to change it, because I got "Uncought SyntaxError: Unexpected token y..." error
  res.status(200).send(savedPost)
}

exports.updatePost = async (req, res) => {
  const { id } = req.params;
  const queryFilter = { _id: id};
  const update = req.body;
  const returnModifiedPost = { new: true };
  const updatedPost = await Post.findOneAndUpdate(queryFilter, update, returnModifiedPost)

  if (!updatedPost) res.status(404).send(`Post with id:${id} was not found`)
  res.status(200).send(`Successfully found and updated the following post: \n ${updatedPost}`)
}

exports.deletePost = async (req, res) => {
  const { id } = req.params;
  const post = await Post.findOneAndDelete({ _id: id })

  // Had to change it, because I got "Uncought SyntaxError: Unexpected token N..." error
  if (!post) res.status(404).json("No post with that id found")
  res.status(200).send(post._id)
}
