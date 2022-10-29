/*
 path: /user
*/

import { Router } from 'express'
import { check } from 'express-validator'
import { createUser, getAllUsers, getUserById } from '../controllers/user.controller.js'
import { validateFields, validateJWT } from '../middlewares/index.js'

const router = Router()

router.post('/create-user', [
  check('name', 'El nombre es obligatorio').not().isEmpty(),
  check('username', 'El nombre de usuario es obligatorio').not().isEmpty(),
  check('email', 'El correo es obligatorio').isEmail(),
  check('password', 'La contraseña es obligatoria').not().isEmpty(),
  validateFields
], createUser)

router.get('/get-users', getAllUsers)
router.get('/get-user-by-id', validateJWT, getUserById)

export default router
