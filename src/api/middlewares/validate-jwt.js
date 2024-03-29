import { JWT_KEY } from '../../config/general.config.js'
import jwt from 'jsonwebtoken'

export const validateJWT = (req, res, next) => {
  const token = req.header('x-token')

  if (!token) {
    return res.status(401).json({
      resp: false,
      message: 'No hay Token en la solicitud'
    })
  }

  try {
    const { uid } = jwt.verify(token, JWT_KEY)
    req.uid = uid

    next()
  } catch (error) {
    return res.status(401).json({
      resp: false,
      message: 'Token no válido'
    })
  }
}
