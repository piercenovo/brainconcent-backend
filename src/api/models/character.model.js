import mongoose from 'mongoose'

const CharacterSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  image: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  colour: {
    type: String,
    required: true
  },
  ageImage: {
    type: String,
    required: true
  },
  countryImage: {
    type: String,
    required: true
  },
  toyImage: {
    type: String,
    required: true
  },
  detailImage: {
    type: String,
    required: true
  },
  story: {
    type: String,
    required: true
  }
},
{ versionKey: false }
)

CharacterSchema.method('toJSON', function () {
  const { _id, ...object } = this.toObject()
  object.uid = _id
  return object
})

export default mongoose.model('Character', CharacterSchema)
