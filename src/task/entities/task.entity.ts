import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn} from "typeorm"
import { User } from "../../user/entities/user.entity"
import {Category} from "../../category/entities/category.entity";

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number
  @Column()
  tasking: string
  @CreateDateColumn()
  add
  @UpdateDateColumn()
  update
  @Column('date', { nullable: true })
  endDate: Date;
  @Column({ default: false })
  isActive: boolean;
  @ManyToOne((type) => User, (user) => user.dbTask)
  user: User[]

  @ManyToOne((type) => Category, (category) => category.db)
  ctgr: Category[]

}