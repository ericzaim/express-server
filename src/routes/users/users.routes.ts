import { Router } from "express";
import UsersController from '../../controllers/users/users.controllers'

const usersRoutes = Router()

usersRoutes.post('/', (req, res) => { UsersController.store(req, res) });

usersRoutes.get('/', (req, res) => { UsersController.findAll(req, res) });
usersRoutes.get('/:id', (req, res) => { UsersController.findOneById(req, res) });
usersRoutes.get('/email/:email', (req, res) => { UsersController.findOneByEmail(req, res) });
usersRoutes.get('/name/:name', (req, res) => { UsersController.findOneByName(req, res) });

usersRoutes.patch('/:id', (req, res) => { UsersController.update(req, res) });
usersRoutes.delete('/:id', (req, res) => { UsersController.delete(req, res) });

export default usersRoutes