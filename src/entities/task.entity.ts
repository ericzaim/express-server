import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export default class Tasks extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  title!: string

  @Column()
  description!:string

  @Column({default: false})
  completed!: boolean

  @Column()
  userID!:number

  @Column({ type: 'timestamp' })
  time!: Date

  @Column({ default: false })
  isDaily!: boolean

}