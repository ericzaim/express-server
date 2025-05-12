import { Router } from "express";
import UsersController from '../../controllers/users/users.controllers'

const userRoutes = Router()

userRoutes.post('/', UsersController.store)
userRoutes.get('/:id',UsersController.show)

export default userRoutes