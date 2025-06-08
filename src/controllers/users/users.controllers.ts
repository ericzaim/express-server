import { Request, Response } from "express";
import User from "../../entities/users.entity";

export default class UsersController{
    static async store (req:Request,res:Response){
    const { name, email,password } = req.body

    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Nome, email e senha são obrigatórios' })
    }

    const user = new User()
    user.name = name
    user.email = email
    user.password = password
    await user.save()

    return res.status(201).json(user)
  }
    static async findAll(req:Request,res:Response){
      const users = await User.find()
      return res.status(200).json(users)
}
    static async findOneById (req:Request,res:Response){
      const { id } = req.params

      if(!id || id == ''){
        return res.status(400).json({error:'ID is Required'})
      }
      const user = await User.findOneBy({id:Number(id)})
      return res.status(200).json(user)
    }
    
    static async findOneByName (req:Request,res:Response){
      const { name } = req.params
      
      if(!name || name == ''){
        return res.status(400).json({error:'Name is Required'})
      }
      const user = await User.findOneBy({name:String(name)})
      return res.status(200).json(user)
    }

    static async findOneByEmail (req:Request,res:Response){
      const { email } = req.params
      
      if(!email || email == ''){
        return res.status(400).json({error:'Email is Required'})
      }
      const user = await User.findOneBy({email:String(email)})
      return res.status(200).json(user)
    }

    static async update (req:Request,res:Response){
      const { id } = req.params
      const { name, email,password } = req.body

      if (!name || !email || !password) {
        return res.status(400).json({ error: 'Insira pelo menos um valor para trocar' })
      }

      const user = await User.findOneBy({id:Number(id)})

      if(!user){
        return res.status(404).json({error:'User not found'})
      }

      user.name = name
      user.email = email
      user.password = password
      await user.save()

      return res.status(200).json(user)
    }
    static async delete (req:Request,res:Response){
      const { id } = req.params

      if(!id || id == ''){
        return res.status(400).json({error:'ID is Required'})
      }
      const user = await User.findOneBy({id:Number(id)})

      if(!user){
        return res.status(404).json({error:'User not found'})
      }

      await user.remove()

      return res.status(200).json({message:'User deleted successfully'})
    }
}