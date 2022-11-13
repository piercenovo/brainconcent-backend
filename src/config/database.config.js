import { MONGO_URI } from './general.config.js'
import mongoose from 'mongoose'

export const dbConnection = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: 'true',
      useUnifiedTopology: 'true'
    })
    console.log('MongoDB connectado...')
  } catch (err) {
    console.log(err)
  }
}
