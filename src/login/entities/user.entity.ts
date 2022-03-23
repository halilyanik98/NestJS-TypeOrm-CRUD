import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToMany, JoinTable, OneToMany} from 'typeorm';
import {Task} from "./task.entity";
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({unique: true})
  username: string;
  @Column()
  password: string;


  @OneToMany ((type) => Task, (Task) => Task.qTask, {
    cascade: true,
  })
  //@JoinColumn()
  dbTask: Task[]
}

/*
  @OneToOne(() => Task,{
    eager: true,
    cascade: true
  })
  @JoinColumn()
  public t: Task[];

}

*/