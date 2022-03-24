import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm"
import { User } from "../../user/entities/user.entity"

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  tasking: string

  @ManyToOne((type) => User, (user) => user.dbTask)
  userId: User[]
}