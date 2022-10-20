import { validationResult } from 'express-validator'

export const validateFields = (req, res, next) => {
  const err = validationResult(req)

  if (!err.isEmpty()) {
    return res.status(400).json({
      resp: false,
      errors: err.mapped()
    })
  }

  next()
}
