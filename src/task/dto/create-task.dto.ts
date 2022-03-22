import {IsNotEmpty} from "class-validator";
//Model
export class CreateTaskDto {
    //Pipe Kullanılmıştır

    userId:number;

    @IsNotEmpty()
    username:string;

    @IsNotEmpty()
    password:string;

    @IsNotEmpty()
    newTask:string;
}
