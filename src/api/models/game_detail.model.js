import mongoose from 'mongoose'

const GameDetailSchema = mongoose.Schema({
  time: {
    type: Number,
    required: true
  },
  tap: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now()
  },
  score: {
    type: Number,
    required: true,
  },
  gd_user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  gd_game: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Game'
  }
},
{ versionKey: false }
)

GameDetailSchema.method('toJSON', function () {
  const { _id, ...object } = this.toObject()
  object.uid = _id
  return object
})

export default mongoose.model('GameDetail', GameDetailSchema)
