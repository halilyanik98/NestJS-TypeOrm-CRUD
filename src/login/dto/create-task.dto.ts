import {IsNotEmpty} from "class-validator";
import {PrimaryGeneratedColumn} from "typeorm";
//Model
export class CreateTaskDto {
    //Use Pipe
    @PrimaryGeneratedColumn()
    idd:number;
    @IsNotEmpty()
    task:string;
}
