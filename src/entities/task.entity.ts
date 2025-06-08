import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export default class Tasks extends BaseEntity {
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

  @Column({ type: 'time' })
  time!: string

  @Column({default:false})
  isDaily!:boolean

}