import { Router } from 'express'
import TaskController from '../../controllers/tasks/tasks.controllers'

const taskRoutes = Router()

taskRoutes.post('/task', TaskController.store)

export default taskRoutes