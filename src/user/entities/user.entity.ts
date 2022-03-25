import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import {Task} from "../../task/entities/task.entity";
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({unique: true})
  username: string;
  @Column()
  password: string;

  @OneToMany ((type) => Task, (Task) => Task.user, {
    cascade: true,
  })
  //@JoinColumn()
  dbTask: Task[]
}
