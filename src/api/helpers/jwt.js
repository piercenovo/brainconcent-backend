import jwt from 'jsonwebtoken'
import { JWT_KEY } from '../../config/general.config.js'

export const generateJWT = (uid) => {
  return new Promise((resolve, reject) => {
    const payload = { uid }

    jwt.sign(payload, JWT_KEY, {
      expiresIn: '30d'
    }, (err, token) => {
      if (err) {
        reject('Error al generar el JWT')
      } else {
        resolve(token)
      }
    })
  })
}
