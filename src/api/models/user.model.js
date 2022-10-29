import mongoose from 'mongoose'

const UserSchema = mongoose.Schema({

  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  temp: {
    type: Number,
    required: true
  },
  avatar: {
    type: String,
    default: 'assets/img/avatar/juan-avatar.png'
  }
},
{ versionKey: false }
)

UserSchema.method('toJSON', function () {
  const { _id, ...object } = this.toObject()
  object.uid = _id
  return object
})

export default mongoose.model('User', UserSchema)
