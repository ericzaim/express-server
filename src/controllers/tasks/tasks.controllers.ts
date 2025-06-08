import { NextFunction, Request, Response } from 'express'
import Task from '../../entities/task.entity'
export default class TaskController {
  /**
   * Adiciona Tasks
   * @param req 
   * @param res 
   * @returns 
   */
  static async store (req:Request,res:Response){

  const { title, completed, description,userID,time,isDaily } = req.body
    if (!title) {
      return res.status(400).json({ error: 'Nome da task é obrigatório' })
    }

    const task = new Task()
    task.title = title
    task.description = description
    task.completed = completed || false
    task.userID = userID
    task.time = time
    task.isDaily = isDaily
    await task.save()

    return res.status(201).json(task)
}

  static async findAll(req: Request, res: Response) {
  const tasks = await Task.find()
  return res.json(tasks)
}
/**
 * Mostra tasks
 * @param req 
 * @param res 
 * @returns 
 */
  static async findOneById (req:Request,res:Response){
    const { id } = req.params

    if(!id || id == ''){
      return res.status(400).json({error:'ID is Required'})
    }
    const task = await Task.findOneBy({id:Number(id)})
    return res.json(task)
  }
  
  static async findByUser (req: Request, res: Response) {
    const { userID } = req.params 
    if(!userID || userID == '') {
      return res.status(400).json({ error: 'User ID is Required' })
    }
    const tasks = await Task.find({ where: { userID: Number(userID) } })
    if (tasks.length === 0) {
      return res.status(404).json({ error: 'No tasks found for this user' })
    }
    return res.json(tasks)
  }
/**
 * Deleta Tasks
 * @param req 
 * @param res 
 * @returns 
 */
    static async delete (req: Request, res: Response) {
    const { id } = req.params
    if(!id || id=='') {
      return res.status(400).json({ error: 'ID is Required' })
    }
    const task = await Task.findOneBy({id: Number(id)})
    if (!task) {
      return res.status(404).json({ error: 'Task not found' })
    }
    await task.remove()
    return res.status(204).json()
  }
  /**
   * Muda a task inteira
   * @param req 
   * @param res 
   * @returns 
   */
    static async change (req: Request, res: Response) {
    const { id } = req.params
    const { title, completed, description,time,isDaily } = req.body

    if(!id || id == '') {
      return res.status(400).json({ error: 'ID is Required' })
    }

    const task = await Task.findOneBy({id: Number(id)})
    if (!task) {
      return res.status(404).json({ error: 'Task not found' })
    }

    task.title = title
    task.completed = completed
    task.description = description
    task.time = time
    task.isDaily = isDaily
    await task.save()

    return res.json(task)
  }
  /**
   * atualiza um atributo da task
   * @param req 
   * @param res 
   * @returns 
   */
    static async update (req: Request, res: Response) {
    const { id } = req.params
    const { title, completed, description, time, isDaily } = req.body

     if(!id || id == '') {
      return res.status(400).json({ error: 'ID is Required' })
    }

    const task = await Task.findOneBy({id: Number(id)})
    if (!task) {
      return res.status(404).json({ error: 'Task not found' })
    }

    task.title = title || task.title
    task.completed = completed || task.completed
    task.description = description || task.description
    task.time = time || task.time 
    task.isDaily = isDaily || task.isDaily
    await task.save()

    return res.json(task) // Vamos retornar a task atualizada
  }
  
}