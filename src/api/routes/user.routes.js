/*
 path: /user
*/

import { Router } from 'express'
import { check } from 'express-validator'
import { createUser, getUsers, getUser } from '../controllers/user.controller.js'
import { validateFields } from '../middlewares/index.js'

const router = Router()

router.post('/create-user', [
  check('name', 'El nombre es obligatorio').not().isEmpty(),
  check('email', 'El correo es obligatorio').isEmail(),
  check('password', 'La contraseña es obligatoria').not().isEmpty(),
  validateFields
], createUser)

router.get('/get-users', getUsers)

router.get('/get-user/:id', getUser)

export default router
