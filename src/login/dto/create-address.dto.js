import {IsNotEmpty} from "class-validator";
import {PrimaryGeneratedColumn} from "typeorm";
//Model
export class CreateAddressDto {
    //Use Pipe
    @PrimaryGeneratedColumn()
    id:number;
    @IsNotEmpty()
    street:string;
    @IsNotEmpty()
    city:string;
    @IsNotEmpty()
    country:string;
}
