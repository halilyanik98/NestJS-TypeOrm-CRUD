import { IsEmail, IsNotEmpty, IsNumber, IsNumberString } from "class-validator";

export class CreateTaskDto {
    id:number;
    firstName:string;
    lastName:string;
    age:number;
    //Pipe Kullanılmıştır

    @IsEmail()
    mail:string;
    //Pipe Kullanılmıştır
    
    @IsNotEmpty()
    password:string;
    newTask:string;
}
