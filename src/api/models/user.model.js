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
    type: String,
    required: true
  },
  avatar: {
    type: String,
    default: 'assets/images/avatar/juan-avatar.png'
  },
  email_verified: {
    type: Boolean,
    default: false
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
