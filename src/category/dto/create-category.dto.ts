import {PrimaryGeneratedColumn} from "typeorm";
import {IsNotEmpty} from "class-validator";
//Model
export class CreateCategoryDto{
    @PrimaryGeneratedColumn()
    id:number;
    @IsNotEmpty()
    kategori:string;
}