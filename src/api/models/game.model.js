import mongoose from 'mongoose'

const GameSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  category: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  skillTitles: {
    type: Array,
    required: true
  },
  skillImages: {
    type: Array,
    required: true
  }
},
{ versionKey: false }
)

GameSchema.method('toJSON', function () {
  const { _id, ...object } = this.toObject()
  object.uid = _id
  return object
})

export default mongoose.model('Game', GameSchema)
