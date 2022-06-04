/*
 path: /api/login
*/

const { Router } = require('express')
const { check } = require('express-validator')
const { createUser } = require('../controllers/auth')
const { validateFields } = require('../middlewares/validate-fields')

const router = Router()

router.post('/new', [
  check('name', 'El nombre es obligatorio').not().isEmpty(),
  check('email', 'El correo es obligatorio').isEmail(),
  check('password', 'La contraseña es obligatoria').not().isEmpty(),
  validateFields
], createUser)

module.exports = router
