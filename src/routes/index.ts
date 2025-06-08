import { Router } from 'express'
import taskRoutes from './tasks/tasks.routes'
import userRoutes from './users/users.routes'

const routes = Router({ caseSensitive: true })

routes.use('/users', userRoutes)
routes.use('/tasks', taskRoutes)

export default routes