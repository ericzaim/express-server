import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export default class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: string

  @Column()
  name!: string

  @Column()
  email!: string

  @Column()
  password!: string

  @Column({array:true})
  tasksID!: string
}