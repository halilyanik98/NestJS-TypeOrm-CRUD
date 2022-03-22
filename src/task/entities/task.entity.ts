import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class TaskOnly {
  @PrimaryGeneratedColumn()
  userId: number;
  @Column()
  username: string;
  @Column()
  password:string;
  @Column()
  newTask: string;
  //@BeforeInsert()
  //emailToLowerCase(){
  //this.email=this.email.toLowerCase();
  //}
}