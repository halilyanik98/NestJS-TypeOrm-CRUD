import { IsNotEmpty} from "class-validator";
import {userInfo} from "os";

export class CreateTaskDto {
    userId:number;
    //Pipe Kullanılmıştır
    @IsNotEmpty()
    username:string;
    //Pipe Kullanılmıştır
    @IsNotEmpty()
    password:string;
    newTask:string;

}
