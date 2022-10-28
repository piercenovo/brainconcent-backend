import { response } from 'express'

export const indexRoute = (req, res = response) => {
  return res.json({
    message: 'Bienvenido a la API de Brainconcent'
  })
}
