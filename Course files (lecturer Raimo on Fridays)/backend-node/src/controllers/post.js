const Post = require('../models/Post')

exports.getPosts = async (req, res) => {
  const posts = await Post.find({})
  res.status(200).send(posts)
}

// I took only these fields from the req.body, which were necessary
// There could be more fields there...but I don't need them :)
// Lecturer Raimo did the same with login and signup queries
exports.createPost = async (req, res) => {
  const { title, body, authorId } = req.body

  const postTemplate = {
    title,
    body,
    authorId
  }

  const createdPost = new Post(postTemplate)
  const savedPost = await createdPost.save()
  // res.status(200).json({message: 'Post is inserted!'})
  res.status(200).send(`yay ${savedPost._id}`)
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

  if (!post) res.status(404).send("No post with that id found")
  res.status(200).send(`Successfully deleted the following post: \n ${post}`)
}
