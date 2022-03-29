import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn} from "typeorm"
import { User } from "../../user/entities/user.entity"
import {Category} from "../../category/entities/category.entity";

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  tasking: string

  @ManyToOne((type) => User, (user) => user.dbTask)
  user: User[]

  @ManyToOne((type) => Category, (category) => category.db)
  ctgr: Category[]

  @CreateDateColumn()
  add
  @UpdateDateColumn()
  update


}