import mongoose from 'mongoose'

const StorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  chapterTitles: {
    type: Array,
    required: true
  },
  chapterDuration: {
    type: Array,
    required: true
  },
  chapterVideos: {
    type: Array,
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
