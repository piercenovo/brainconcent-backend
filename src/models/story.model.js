const { Schema, model } = require('mongoose')

const UserSchema = Schema({
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

UserSchema.method('toJSON', function () {
  const { _id, ...object } = this.toObject()
  object.uid = _id
  return object
})

module.exports = model('Story', UserSchema)
