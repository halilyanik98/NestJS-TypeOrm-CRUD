import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn} from 'typeorm';
import {Task} from "./task.entity";
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({unique: true})
  username: string;
  @Column()
  password: string;

  @OneToOne(() => Task,{
    eager: true,
    cascade: true
  })
  @JoinColumn()
  public t: Task;

}