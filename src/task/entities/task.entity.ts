import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  userId: number;

  @Column()
  username: string;

  @Column()
  password:string;

  @Column()
  newTask: string;

}