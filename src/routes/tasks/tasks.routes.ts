import { Router } from 'express'
import TaskController from '../../controllers/tasks/tasks.controllers';
const tasksRoutes = Router()


tasksRoutes.get('/', (req, res) => {TaskController.findAll(req, res)});
tasksRoutes.get('/:id', (req, res) => {TaskController.findOneById(req, res)});
tasksRoutes.get('/user/:userID', (req, res) => {TaskController.findByUser(req, res)});

tasksRoutes.post('/task', (req, res) => {TaskController.store(req, res) });

tasksRoutes.delete('/:id', (req, res) => { TaskController.delete(req, res) });

tasksRoutes.put('/:id',(req,res) => {TaskController.change(req, res)});
tasksRoutes.patch('/:id',(req,res) => {TaskController.update(req,res) });

export default tasksRoutes