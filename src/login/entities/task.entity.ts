import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany, ManyToOne} from "typeorm"
import { User } from "./user.entity"

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  tasking: string

  @ManyToOne((type) => User, (user) => user.dbTask)
  qTask: User[]
}