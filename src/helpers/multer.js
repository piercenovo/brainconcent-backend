const multer = require('multer')
const path = require('path')

const storageGame = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, 'src/uploads/games')
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})

const uploadsGame = multer({ storage: storageGame })

module.exports = {
  uploadsGame
}
