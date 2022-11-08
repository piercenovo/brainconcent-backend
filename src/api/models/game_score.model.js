import mongoose from 'mongoose'

const GameScoreSchema = mongoose.Schema({
  time: {
    type: Number,
    required: true
  },
  tap: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  gameId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Game'
  }
},
{ versionKey: false }
)

GameScoreSchema.method('toJSON', function () {
  const { _id, ...object } = this.toObject()
  object.uid = _id
  return object
})

export default mongoose.model('GameScore', GameScoreSchema)
