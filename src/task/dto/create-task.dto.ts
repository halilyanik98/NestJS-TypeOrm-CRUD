import { IsEmail, IsNotEmpty, IsNumber, IsNumberString } from "class-validator";

export class CreateTaskDto {
    id:number;
    firstName:string;
    lastName:string;
    age:number;
    //Pipo Kullanılmıştır

    @IsEmail()
    mail:string;
    //Pipo Kullanılmıştır
    
    @IsNotEmpty()
    password:string;
    newTask:string;
}
