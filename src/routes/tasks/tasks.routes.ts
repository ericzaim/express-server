import { Router } from 'express'
import TaskController from '../../controllers/tasks/tasks.controllers'

const taskRoutes = Router()

taskRoutes.post('/', TaskController.store)
taskRoutes.get('/', TaskController.index)
taskRoutes.get('/:id', TaskController.show)
taskRoutes.delete('/:id', TaskController.delete)
taskRoutes.put('/:id', TaskController.change)
taskRoutes.patch('/:id', TaskController.update)

export default taskRoutes