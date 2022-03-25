import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Task} from "../../task/entities/task.entity";


@Entity()
export class Category{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    kategori:string;
    @OneToMany(()=>Task, (Task) =>Task.ctgr,{
        cascade:true,
    })
    db:Task[]
}