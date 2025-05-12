import { NextFunction, Request, Response } from 'express'
import Task from '../../entities/task.entity'
export default class TaskController {
  /**
   * Adiciona Tasks
   * @param req 
   * @param res 
   * @returns 
   */
  static async store (req:Request,res:Response, next: NextFunction){

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

  static async index (req: Request, res: Response) {
  const tasks = await Task.find()
  return res.json(tasks)

}
/**
 * Mostra tasks
 * @param req 
 * @param res 
 * @returns 
 */

  static async show (req:Request,res:Response){
    const { id } = req.params

    if(!id || id == ''){
      return res.status(400).json({error:'ID is Required'})
    }
    const task = await Task.findOneBy({id:String(id)})
    return res.json(task)
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

    const task = await Task.findOneBy({id: String(id)})
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
    const { title, completed } = req.body

    if(!id || id == '') {
      return res.status(400).json({ error: 'ID is Required' })
    }

    const task = await Task.findOneBy({id: String(id)})
    if (!task) {
      return res.status(404).json({ error: 'Task not found' })
    }

    task.title = title || task.title
    task.completed = (completed === undefined) ? task.completed : completed
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

    const task = await Task.findOneBy({id: String(id)})
    if (!task) {
      return res.status(404).json({ error: 'Task not found' })
    }

    task.title = title || task.title
    task.completed = (completed === undefined) ? task.completed : completed
    task.description = description || task.description
    task.time = (task.time === time) ? task.time : task.time = time
    task.isDaily = (task.isDaily === isDaily) ? task.isDaily : !task.isDaily

    await task.save()

    return res.json(task) // Vamos retornar a task atualizada
  }
  
}