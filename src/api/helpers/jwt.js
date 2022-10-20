import jwt from 'jsonwebtoken'
import { JWT_KEY } from '../../config/general.config.js'

export const generateJWT = (uid) => {
  return new Promise((resolve, reject) => {
    const payload = { uid }

    jwt.sign(payload, JWT_KEY, {
      expiresIn: '24h'
    }, (err, token) => {
      if (err) {
        reject('Failed to generate JWT')
      } else {
        resolve(token)
      }
    })
  })
}
