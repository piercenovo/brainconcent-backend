const mongoose = require('mongoose')
const config = require('../config')

const dbConnection = async () => {
  try {
    await mongoose.connect(config.mongodb, {
      useNewUrlParser: 'true',
      useUnifiedTopology: 'true'
    })
    console.log('MongoDB connected')
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  dbConnection
}
