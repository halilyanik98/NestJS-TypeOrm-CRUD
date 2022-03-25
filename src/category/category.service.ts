import {Injectable, Request} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Task} from "../task/entities/task.entity";
import {Repository} from "typeorm";
import {User} from "../user/entities/user.entity";
import {CreateCategoryDto} from "./dto/create-category.dto";
import {Category} from "./entities/category.entity";
import {UpdateCategoryDto} from "./dto/update-category.dto";

@Injectable()
export class CategoryService{
    constructor(
        @InjectRepository(Task)
        private taskRepository: Repository<Task>,
        @InjectRepository(User)
        private userRepository: Repository<User>,
        @InjectRepository(Category)
        private categoryRepository: Repository<Category>
    ) {}

    create(createCategoryDto: CreateCategoryDto) {
        console.log(createCategoryDto);
        return this.categoryRepository.save(createCategoryDto)
    }


    findAll(p: { relations: string[] }): Promise<Category[]> {
        return this.categoryRepository.find({ relations: ['db'] });
    }

    findOne(id:number): Promise<User[]> {
        return this.userRepository.find({id:id});
        //Spesifik değere sahip verilerin hepsi için: find({ name: “jane” })
    }



    update(updateCategoryDto: UpdateCategoryDto) {
        let category= new Category();
        category.id=updateCategoryDto.id;
        category.kategori=updateCategoryDto.kategori;
        return this.categoryRepository.update(category.id,category);
    }

    remove(id: number) {
        return this.categoryRepository.delete(id);
    }
}