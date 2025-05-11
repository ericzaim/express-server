import { Router } from 'express'
import taskRoutes from './tasks/tasks.routes'

const routes = Router()

routes.use('/task', taskRoutes)

export default routes