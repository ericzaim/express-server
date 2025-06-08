import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export default class Users extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: string

  @Column()
  name!: string

  @Column()
  email!: string

  @Column()
  password!: string
}