import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export default class Task extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: string

  @Column()
  title!: string

  @Column()
  description!:string

  @Column({default: false})
  completed!: boolean

  @Column()
  userID!:string

  @Column()
  time!: number

  @Column({default:false})
  isDaily!:boolean

}