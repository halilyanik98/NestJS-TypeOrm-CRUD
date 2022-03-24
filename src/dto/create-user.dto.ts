import {IsNotEmpty} from "class-validator";
import {PrimaryGeneratedColumn} from "typeorm";
//Model
export class CreateUserDto {
    //Use Pipe
    @PrimaryGeneratedColumn()
    userId:number;
    @IsNotEmpty()
    username:string;
    @IsNotEmpty()
    password:string;
}
