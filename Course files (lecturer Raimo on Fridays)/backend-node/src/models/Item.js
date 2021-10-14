const { Schema, model } = require('mongoose')

// Homework:
// Võib ka alternatiivina lisada skeemasse updatedAt ja uuendada seda, kui uuendus toimub
// Timestamp adds createdAt and updatedAt fields
// https://masteringjs.io/tutorials/mongoose/timestamps
const itemSchema = new Schema({
  name: { type: String, required: true },
  quality: { type: Number, required: true },
  unused: { type: Boolean, default: true },
  color: { type: String, enum: ['red', 'green', 'blue'], default: 'green' }
},
{ timestamps: true }
);

const Item = model("Item", itemSchema)

module.exports = Item