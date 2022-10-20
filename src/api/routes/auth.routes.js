/*
 path: /auth
*/

import { Router } from 'express'
import { check } from 'express-validator'
import { login, renewToken } from '../controllers/auth.controller.js'
import { validateJWT } from '../middlewares/validate-jwt.js'


const router = Router()

router.post('/login', [
  check('username', 'El nombre de usuario es obligatorio').not().isEmpty(),
  check('password', 'La contraseña es obligatoria').not().isEmpty()
], login)
router.get('/renew', validateJWT, renewToken)

export default router
