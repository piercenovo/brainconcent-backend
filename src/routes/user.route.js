/*
 path: /user
*/

const { Router } = require('express')
const { check } = require('express-validator')
const { createUser, getUsers, getUser } = require('../controllers/user.controller')
const { validateFields } = require('../middlewares/validate-fields')

const router = Router()

router.post('/create-user', [
  check('name', 'El nombre es obligatorio').not().isEmpty(),
  check('email', 'El correo es obligatorio').isEmail(),
  check('password', 'La contraseña es obligatoria').not().isEmpty(),
  validateFields
], createUser)

router.get('/get-users', getUsers)

router.get('/get-user/:id', getUser)

module.exports = router
