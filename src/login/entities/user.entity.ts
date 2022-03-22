import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn} from 'typeorm';
import Address from "./address.entity";
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({unique: true})
  username: string;
  @Column()
  password: string;

  @OneToOne(() => Address,{
    eager: true,
    cascade: ["insert"]
  })
  @JoinColumn()
  public address: Address;

}