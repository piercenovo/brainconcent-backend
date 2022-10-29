import mongoose from 'mongoose'

const StorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  image: {
    type: String,
    required: true
  },
  video: {
    type: String,
    required: true
  }
},
{ versionKey: false }
)

StorySchema.method('toJSON', function () {
  const { _id, ...object } = this.toObject()
  object.uid = _id
  return object
})

export default mongoose.model('Story', StorySchema)
