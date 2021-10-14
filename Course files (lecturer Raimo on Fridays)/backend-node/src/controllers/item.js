const Item = require('../models/Item')

exports.getItems = async (req, res) => {
  const items = await Item.find({})
  
  res.status(200).send(items)
}

exports.createItem = async (req, res) => {
  // Commented it out, because I wanted to give new data through body (JSON object)
  // const newItem = {
  //   name: "Table",
  //   quality: 99,
  //   unused: true,
  //   color: "blue"
  // }
  // const createdItem = new Item(newItem)
  const createdItem = new Item(req.body)

  const savedItem = await createdItem.save()

  res.status(200).send(`yay ${savedItem._id}`)
}

// Homework 3
//  https://mongoosejs.com/docs/tutorials/findoneandupdate.html
//  https://mongoosejs.com/docs/api.html#model_Model.findOneAndUpdate
exports.updateItem = async (req, res) => {
  const { id } = req.params;
  const queryFilter = { _id: id};
  const update = req.body;
  const returnModifiedItem = { new: true };

  const updatedItem = await Item.findOneAndUpdate(queryFilter, update, returnModifiedItem)

  if (!updatedItem) res.status(404).send(`Item with id:${id} was not found`)
  res.status(200).send(`Successfully found and updated the following item: \n ${updatedItem}`)
}

// Homework 3
// Only Item's quality (during the query) and updatedAt (automatically) fields are updated.
// https://docs.mongodb.com/manual/reference/method/db.collection.findOneAndUpdate/#examples
exports.incrementItemQuality = async (req, res) => {
  const { id } = req.params;

  const updatedItem = await Item.findOneAndUpdate(
    { _id: id}, 
    { $inc: { quality: 1 }}, 
    { new: true }
  )

  if (!updatedItem) res.status(404).send(`Item with id:${id} was not found`)
  res.status(200).send(`Successfully updated the following item's quality: \n ${updatedItem}`)
}

exports.deleteItem = async (req, res) => {
  const { id } = req.params;

  const item = await Item.findOneAndDelete({ _id: id })

  if (!item) res.status(404).send("No item with that id found")

  res.status(200).send(`Successfully deleted the following item: \n ${item}`)
}

exports.deleteAllItems = async (req, res) => {
  const deletedItems = await Item.deleteMany()

  if (!deletedItems) res.status(404).send(`There are no Items in DB`)

  res.status(200).send(`Successfully deleted ${deletedItems.deletedCount} item(s).\n`)
}