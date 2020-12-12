import { Router } from 'express'

import AuthController from './controllers/AuthController'

import UserController from './controllers/UserController'

import PaintingController from './controllers/PaintingController'

const routes = Router()


routes.get('/users', UserController.index)

routes.post('/auth/authenticate', AuthController.authenticate)

routes.post('/auth/forgot_password', AuthController.forgot_password)

routes.post('/auth/reset_password', AuthController.reset_password)

routes.post('/user/update', UserController.update)

routes.post('/user/delete', UserController.delete)

routes.post('/auth/register', AuthController.register)

routes.post('/art/create', PaintingController.create)

routes.post('/art/update', PaintingController.update)

routes.post('/art/delete', PaintingController.delete)

routes.get('/art/', PaintingController.index)

export default routes