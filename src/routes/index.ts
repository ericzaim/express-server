import { Router } from 'express'
import taskRoutes from './tasks/tasks.routes'
import userRoutes from './users/users.routes'

const routes = Router()

routes.use('/users', userRoutes)
routes.use('/task', taskRoutes)

export default routes